/* =========================================================
   Hitesh Sathvara - Portfolio
   File: js/script.js
   Features: theme toggle, mobile menu, disabled placeholder
   links, gentle fade-in on scroll
   ========================================================= */

(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- 1. Dark / light theme toggle ---------- */
  var themeButton = document.getElementById("theme-toggle");
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function getCurrentTheme() {
    var chosen = root.getAttribute("data-theme");
    if (chosen === "light" || chosen === "dark") {
      return chosen;
    }
    return darkQuery.matches ? "dark" : "light";
  }

  function updateThemeLabel() {
    if (!themeButton) return;
    var next = getCurrentTheme() === "dark" ? "light" : "dark";
    themeButton.setAttribute("aria-label", "Switch to " + next + " mode");
  }

  if (themeButton) {
    updateThemeLabel();

    themeButton.addEventListener("click", function () {
      var next = getCurrentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage may be blocked; the theme still changes for this visit */
      }
      updateThemeLabel();
    });
  }

  /* ---------- 2. Mobile menu ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");
  var desktopQuery = window.matchMedia("(min-width: 900px)");

  function openMenu() {
    navLinks.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
  }

  function closeMenu(returnFocus) {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    if (returnFocus) {
      navToggle.focus();
    }
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      if (navLinks.classList.contains("is-open")) {
        closeMenu(false);
      } else {
        openMenu();
      }
    });

    /* Close the menu when a link inside it is clicked */
    navLinks.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu(false);
      }
    });

    /* Close with the Escape key */
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
        closeMenu(true);
      }
    });

    /* Close when clicking outside the menu */
    document.addEventListener("click", function (event) {
      if (
        navLinks.classList.contains("is-open") &&
        !navLinks.contains(event.target) &&
        !navToggle.contains(event.target)
      ) {
        closeMenu(false);
      }
    });

    /* Reset the menu if the window becomes wide (desktop layout) */
    function handleWidthChange(event) {
      if (event.matches) {
        closeMenu(false);
      }
    }
    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", handleWidthChange);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(handleWidthChange);
    }
  }

  /* ---------- 3. Placeholder links ("coming soon") do nothing ---------- */
  var pendingLinks = document.querySelectorAll('a[aria-disabled="true"]');
  pendingLinks.forEach(function (link) {
    link.setAttribute("tabindex", "-1");
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  /* ---------- 4. Fade-in on scroll ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    var targets = document.querySelectorAll(".hero-grid, .section > .container");

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }
})();