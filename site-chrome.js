(function(){
  const links = [
    { href: 'index.html#home', label: 'Home' },
    { href: 'benefits.html', label: 'Benefits' },
    { href: 'cultural_essence.html', label: 'Culture' },
    { href: 'ourteam.html', label: 'Team' },
    { href: 'askbot.html', label: 'Ask Bot', icon: 'fas fa-robot' },
    { label: 'More', children: [
      { href: 'palm_tree_story.html', label: 'Palm Tree Story' },
      //{ href: 'story_of_pannaiyeri.html', label: 'Story of Panaiyeri' },
      { href: 'palm_products.html', label: 'Palm Products' },
      { href: 'palm_quest.html', label: 'Palm Quest' },
      { href: 'student_corner.html', label: 'Student Corner' },
    ]},
  ];

  const isActive = (href) => {
    const path = location.pathname.split('/').pop() || 'index.html';
    if (href.includes('#')) {
      return path === 'index.html' && location.hash && href.endsWith(location.hash);
    }
    return path === href;
  };

  function renderLink(l){
    if(l.children && l.children.length){
      const anyChildActive = l.children.some(c => isActive(c.href));
      const childItems = l.children.map(c=>{
        const cActive = isActive(c.href) ? 'active' : '';
        return `<li><a href="${c.href}" class="dropdown-item ${cActive}">${c.label}</a></li>`;
      }).join('');
      return `
        <li class="dropdown">
          <button class="dropdown-toggle nav-link ${anyChildActive ? 'active' : ''}" aria-haspopup="true" aria-expanded="false">${l.label} <i class="fas fa-chevron-down"></i></button>
          <ul class="dropdown-menu">${childItems}</ul>
        </li>
      `;
    } else {
      const active = l.href ? (isActive(l.href) ? 'active' : '') : '';
      const icon = l.icon ? `<i class="${l.icon}"></i> ` : '';
      return `<li><a href="${l.href}" class="nav-link ${active}">${icon}${l.label}</a></li>`;
    }
  }

  const navItems = links.map(renderLink).join('');

  const headerHTML = `
  <nav class="navbar">
    <div class="nav-container">
      <a href="index.html#home" class="logo">
        <img src="images/palm_tree.png" alt="Palm Tree Logo">
        PadhaNeer Connect
      </a>
      <ul class="nav-menu">
        ${navItems}
        <li><a href="farmers_map.html" class="cta-button"><i class="fas fa-map-marked-alt"></i> Palm Guardians</a></li>
      </ul>
      <button class="mobile-menu-toggle"><i class="fas fa-bars"></i></button>
    </div>
  </nav>`;

  const footerHTML = `
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 PadhaNeer Connect · Every Sip Counts – Support Nature, Support PadhaNeer</p>
    </div>
  </footer>`;

  const style = document.createElement('style');
  style.textContent = `
    /* Theme fonts for header/footer */
    .navbar, .navbar *:not(i), .footer, .footer *:not(i){ font-family:'Inter', sans-serif }
    body.nav-open{ overflow:hidden }
    /* Fixed translucent navbar */
    .navbar{position:fixed;top:0;left:0;right:0;background:rgba(255,255,255,0.95);backdrop-filter:blur(10px);border-bottom:1px solid rgba(255,255,255,0.2);z-index:1000;transition:all .3s ease}
    .nav-container{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem}
    .logo{display:flex;align-items:center;gap:12px;font-family:'Playfair Display',serif;font-weight:600;font-size:1.5rem;color:#2D5A3D;text-decoration:none}
    .logo img{height:40px;filter:brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg)}
    .nav-menu{display:flex;list-style:none;gap:1.25rem;align-items:center;flex-wrap:nowrap}
    .nav-menu > li{white-space:nowrap}
    .nav-link{color:#2C3E50;text-decoration:none;font-weight:500;transition:all .3s ease;position:relative}
    .nav-link::after{content:'';position:absolute;bottom:-5px;left:0;width:0;height:2px;background:#2D5A3D;transition:width .3s ease}
    .nav-link:hover::after{width:100%}
    .nav-link:hover,.nav-link.active{color:#2D5A3D}
    .dropdown{position:relative}
    .dropdown-toggle{background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:6px;font: inherit;color: inherit;padding: 0;appearance:none;-webkit-appearance:none}
    .dropdown-menu{position:absolute;top:100%;left:0;min-width:220px;background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.12);padding:10px 0;display:none;z-index:1100;list-style:none;margin:0}
    .dropdown-menu li{list-style:none;margin:0;padding:0}
    .dropdown:hover>.dropdown-menu{display:block}
    .dropdown-item{display:block;padding:10px 16px;color:#2C3E50;text-decoration:none;transition:background .2s ease,color .2s ease}
    .dropdown-item:hover,.dropdown-item.active{background:#E8F5E8;color:#2D5A3D}
    .cta-button{background:linear-gradient(135deg,#2D5A3D,#4A7C59);color:#fff;padding:.5rem 1rem;border-radius:50px;text-decoration:none;font-weight:600;transition:all .3s ease;box-shadow:0 4px 15px rgba(45,90,61,.3)}
    /* Keep CTA pinned to the far right on desktop */
    @media(min-width:769px){ .nav-menu{ margin-left:auto } .nav-menu li:last-child{ margin-left:0 } }
    .mobile-menu-toggle{display:none;background:none;border:none;font-size:1.5rem;color:#2D5A3D;cursor:pointer}
    .footer{background:#2D5A3D;color:#fff;text-align:center;padding:0.9rem 1rem;position:relative;margin-top:2rem}
    .footer-content{max-width:1200px;margin:0 auto}
    .footer p{margin:0;font-size:0.95rem;line-height:1.3}
    /* Dim overlay behind mobile drawer */
    .nav-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.45);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);opacity:0;pointer-events:none;transition:opacity .25s ease;z-index:999}
    body.nav-open .nav-overlay{opacity:1;pointer-events:auto}
    @media(max-width:768px){
      /* Kill underline accent on mobile */
      .nav-link::after{display:none}
      /* Strip any borders/shadows that may appear as lines */
      .dropdown, .dropdown *, .dropdown-menu{border:0 !important; box-shadow:none !important;}
      .nav-menu{position:fixed;top:80px;left:-110%;width:78%;height:calc(100vh - 80px);background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);display:flex;flex-direction:column;gap:0;justify-content:flex-start;align-items:flex-start;padding:0 .75rem;transition:left .3s ease;overflow-y:auto;pointer-events:none;z-index:1000}
      .nav-menu.active{left:0;pointer-events:auto}
      .mobile-menu-toggle{display:block}
      .nav-menu li{width:100%}
      .nav-menu a.nav-link,.dropdown-toggle{display:block;text-align:left;padding:8px 10px}
      .dropdown{width:100%}
      .dropdown-toggle{width:100%;justify-content:space-between;border:none}
      .dropdown-menu{position:static;box-shadow:none;border-radius:0;border:none;display:none;padding:0;margin:0 4px 4px 0;text-align:left}
      /* Disable hover open on mobile so toggle can collapse on re-click */
      .dropdown:hover>.dropdown-menu{display:none}
      .dropdown.open>.dropdown-menu{display:block}
      .dropdown-item{padding:6px 10px;text-align:left}
    }
  `;
  document.head.appendChild(style);

  function ensureHeader(){
    let header = document.getElementById('site-header');
    if(!header){ header = document.createElement('div'); header.id='site-header'; document.body.prepend(header); }
    header.innerHTML = headerHTML;
    // Ensure overlay exists as early as possible
    if(!document.querySelector('.nav-overlay')){
      const overlay = document.createElement('div');
      overlay.className = 'nav-overlay';
      document.body.appendChild(overlay);
    }
  }

  function ensureFooter(){
    let footer = document.getElementById('site-footer');
    if(!footer){ footer = document.createElement('div'); footer.id='site-footer'; document.body.appendChild(footer); }
    footer.innerHTML = footerHTML;
  }

  function attachBehaviors(){
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.nav-overlay');
    if(mobileBtn && navMenu){
      mobileBtn.addEventListener('click', ()=> {
        const nowActive = navMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open', nowActive);
        // If opening drawer on mobile, keep the first dropdown (More) expanded by default
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (nowActive && isMobile) {
          const firstDropdown = navMenu.querySelector('.dropdown');
          if (firstDropdown) {
            firstDropdown.classList.add('open');
            const toggleBtn = firstDropdown.querySelector('.dropdown-toggle');
            if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
          }
        }
      });
    }
    if(overlay){
      overlay.addEventListener('click', ()=>{
        if(navMenu){ navMenu.classList.remove('active'); }
        document.body.classList.remove('nav-open');
        document.querySelectorAll('.dropdown.open').forEach(d=>d.classList.remove('open'));
      });
    }
    // Mobile dropdown toggle
    document.querySelectorAll('.dropdown-toggle').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        const isDesktop = window.matchMedia('(min-width: 769px)').matches;
        if(isDesktop) return; // hover handles desktop
        e.preventDefault();
        const li = btn.closest('.dropdown');
        li.classList.toggle('open');
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', (!expanded).toString());
      });
    });
    // Expand first dropdown by default on initial load for mobile to fill empty space
    if (window.matchMedia('(max-width: 768px)').matches) {
      const firstDropdown = document.querySelector('.nav-menu .dropdown');
      if (firstDropdown) {
        firstDropdown.classList.add('open');
        const toggleBtn = firstDropdown.querySelector('.dropdown-toggle');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
      }
    }
    // Close mobile menu after selecting any link (including dropdown items)
    document.querySelectorAll('.nav-menu a').forEach(a=>{
      a.addEventListener('click', ()=>{
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if(isMobile && navMenu && navMenu.classList.contains('active')){
          navMenu.classList.remove('active');
          document.body.classList.remove('nav-open');
          document.querySelectorAll('.dropdown.open').forEach(d=>d.classList.remove('open'));
        }
      });
    });
    // Removed scroll-based background changes to prevent flicker; navbar uses constant background
  }

  function adjustBodyPadding(){
    const navbar = document.querySelector('.navbar');
    if(!navbar) return;
    const path = location.pathname.split('/').pop() || 'index.html';
    if (path === 'index.html') {
      document.body.style.paddingTop = '0px';
    } else {
      document.body.style.paddingTop = (navbar.offsetHeight + 40) + 'px';
    }
    // Update CSS var for mobile drawer top offset to match actual navbar height
    document.documentElement.style.setProperty('--nav-h', navbar.offsetHeight + 'px');
    // Ensure mobile menu is closed when moving to desktop
    const navMenu = document.querySelector('.nav-menu');
    if (window.matchMedia('(min-width: 769px)').matches && navMenu) {
      if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
      document.body.classList.remove('nav-open');
      document.querySelectorAll('.dropdown.open').forEach(d=>d.classList.remove('open'));
    }
  }

  function init(){
    // Ensure icon font is available (for hamburger and nav icons)
    if(!document.querySelector('link[rel="stylesheet"][href*="font-awesome"]')){
      const fa = document.createElement('link');
      fa.rel = 'stylesheet';
      fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(fa);
    }
    // Ensure Google Fonts for theme are available
    if(!document.querySelector('link[rel="stylesheet"][href*="fonts.googleapis"]')){
      const gf = document.createElement('link');
      gf.rel = 'stylesheet';
      gf.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
      document.head.appendChild(gf);
    }
    // Ensure a single site-wide favicon is set/updated
    const desiredFavicon = 'images/palm_tree.png';
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/png';
      document.head.appendChild(favicon);
    }
    favicon.href = desiredFavicon;
    ensureHeader();
    attachBehaviors();
    adjustBodyPadding();
    window.addEventListener('resize', adjustBodyPadding);
    // Defer footer to after full load so header appears first
    window.addEventListener('load', ensureFooter);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
