/* ==========================================================================
   Aurora García Bermejo — Portfolio
   Small, dependency-free enhancements. Bootstrap handles the menu,
   accordion, modals and scrollspy.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_COLORS = { light: '#f4f3ef', dark: '#0d0d0f' };

  /* ---------- Light / dark mode ---------- */
  function storeTheme(theme) {
    try { localStorage.setItem('theme', theme); } catch (e) { /* storage unavailable */ }
  }

  function applyTheme(theme) {
    root.setAttribute('data-bs-theme', theme);

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLORS[theme]);

    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      var isDark = theme === 'dark';
      toggle.setAttribute('aria-pressed', String(isDark));
      var label = toggle.querySelector('[data-theme-label]');
      if (label) label.textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
      toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  applyTheme(root.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light');

  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      storeTheme(next);
    });
  }

  // Follow the system setting until the visitor chooses a mode explicitly
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  var onSystemChange = function (event) {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) {}
    if (!stored) applyTheme(event.matches ? 'dark' : 'light');
  };
  if (systemDark.addEventListener) systemDark.addEventListener('change', onSystemChange);

  /* ---------- Header border once the page scrolls ---------- */
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Close the mobile menu after choosing a section ---------- */
  var navCollapse = document.getElementById('nav-links');
  if (navCollapse && window.bootstrap) {
    navCollapse.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navCollapse.classList.contains('show')) {
          window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      });
    });
  }

  /* ---------- Reveal on scroll (skipped with reduced motion) ---------- */
  var revealItems = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    revealItems.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Fit giant display text to its column ----------
     Elements marked [data-fit] keep their designed size unless the real
     font would make them wider than their container; then they shrink
     just enough to fit. Runs again after web fonts load and on resize. */
  var fitItems = document.querySelectorAll('[data-fit]');

  function fitText() {
    fitItems.forEach(function (el) {
      el.style.fontSize = '';
      var style = getComputedStyle(el);
      var available;
      if (style.display === 'block') {
        available = el.clientWidth;
      } else {
        var ps = getComputedStyle(el.parentElement);
        available = el.parentElement.clientWidth - parseFloat(ps.paddingLeft) - parseFloat(ps.paddingRight);
      }
      // Width of the text itself (widest line), not of the box
      var range = document.createRange();
      range.selectNodeContents(el);
      var needed = range.getBoundingClientRect().width;
      if (needed > available && available > 0) {
        var size = parseFloat(style.fontSize);
        el.style.fontSize = Math.floor(size * (available / needed) * 0.98) + 'px';
      }
    });
  }

  if (fitItems.length) {
    fitText();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitText);
    var fitFrame;
    window.addEventListener('resize', function () {
      cancelAnimationFrame(fitFrame);
      fitFrame = requestAnimationFrame(fitText);
    });
  }

  /* ---------- Current year in the footer ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
