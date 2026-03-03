(function () {
  /* ===== 공통 HEADER ===== */
  const HEADER_HTML = `
  <div class="header-inner">
    <a href="index.html" class="header-logo">
      <img src="source/clogo.png" alt="" class="logo-img">
      <h2>하늘빛힐링교회</h2>
    </a>
    <nav class="desktop-nav">
      <a href="about.html">교회소개</a>
      <a href="worship.html">예배안내</a>
      <a href="mission.html">선교활동</a>
      <a href="ministry.html">교육과 사역</a>
      <a href="sermon.html">영상선교</a>
    </nav>
    <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="메뉴 열기">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    <div class="mobile-nav" id="mobileNav">
      <nav>
        <a href="about.html">교회소개</a>
        <a href="worship.html">예배안내</a>
        <a href="mission.html">선교활동</a>
        <a href="ministry.html">교육과 사역</a>
        <a href="sermon.html">영상선교</a>
      </nav>
    </div>
  </div>
  `;

  /* ===== 공통 FOOTER ===== */
  const FOOTER_HTML = `
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="source/clogo-g.png" alt="" class="logo-img"><span>하늘빛힐링교회</span>
        </div>
        <p class="footer-desc">하늘빛힐링교회는 말씀과 기도로 치유, 회복, 돌파, 증가, 형통이 역사하는 교회입니다.</p>
        <div class="footer-social">
          <a href="https://www.youtube.com/@hlh-church" aria-label="유튜브" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.328l5.603 3.113z" /></svg></a>
          </div>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <ul>
          <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg><span>경남 거제시 일운면 옥림3길 44</span></li>
          <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg><span>010-9311-9003</span></li>
          <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg><span>wonman9311@naver.com</span></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>바로가기</h4>
        <ul>
          <li><a href="about.html" style="color:var(--slate-400);">교회소개</a></li>
          <li><a href="worship.html" style="color:var(--slate-400);">예배안내</a></li>
          <li><a href="mission.html" style="color:var(--slate-400);">선교활동</a></li>
          <li><a href="ministry.html" style="color:var(--slate-400);">교육과 사역</a></li>
          <li><a href="sermon.html" style="color:var(--slate-400);">영상선교</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 하늘빛힐링교회(Heaveniy light healing church). All rights reserved.</p>
    </div>
  </div>
  `;

  /* ===== 주입 ===== */
  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = HEADER_HTML;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
})();
