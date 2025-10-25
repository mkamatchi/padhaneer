const fetch = require('node-fetch');

exports.handler = async function (event) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "Preflight OK"
    };
  }

  try {
    const { question } = JSON.parse(event.body || '{}');

    if (!question) {
      console.log("❌ No question provided");
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing question' })
      };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: question }] }]
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log("📦 Gemini raw response:", JSON.stringify(data, null, 2));

    const parts = data?.candidates?.[0]?.content?.parts;
    const answer = parts?.map(p => p.text).join("\n").trim();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ answer: answer || "Sorry, I couldn't find an answer." })
    };
  } catch (error) {
    console.error("🔥 Gemini API error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
