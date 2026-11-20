/* =========================================================
   Humble Project Management FZ LLC — Site Script
   ---------------------------------------------------------
   EDIT YOUR CONTACT DETAILS HERE — they update on every page.
   ========================================================= */
const SITE = {
  name: "Humble Project Management FZ LLC",
  phone: "+971 54 495 0996",          // displayed phone number
  phoneLink: "+971544950996",         // phone without spaces (for tel: link)
  whatsapp: "971544950996",           // WhatsApp number, digits only, with country code
  email: "humbleconsultancy799@gmail.com",
  address: "Business Village – Block B, 3rd Floor, Port Saeed, Deira, Dubai, UAE (Near Clock Tower)",
  hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    x: "#"
  }
};

/* Build a WhatsApp link, optionally with a pre-filled message */
function waLink(msg) {
  return `https://wa.me/${SITE.whatsapp}` + (msg ? `?text=${encodeURIComponent(msg)}` : "");
}
const WA_DEFAULT = "Hello Humble Project Management, I would like to know more about your services.";

/* ---------- Shared header ---------- */
function renderHeader(active) {
  const links = [
    ["index.html", "Home", "home"],
    ["about.html", "About Us", "about"],
    ["services.html", "Services", "services"],
    ["careers.html", "Jobs & Recruitment", "careers"],
    ["contact.html", "Contact", "contact"]
  ];
  const sub = document.body.dataset.sub || "";
  const servicePages = [
    ["documents-clearing.html", "Documents Clearing", "documents", "bi-file-earmark-check"],
    ["travel-tourism.html", "Travel & Tourism", "travel", "bi-airplane"],
    ["manpower-recruitment.html", "Manpower & Recruitment", "manpower", "bi-people"],
    ["consultancy.html", "Consultancy", "consultancy", "bi-diagram-3"]
  ];
  const dropdown = servicePages.map(([href, label, key, icon]) =>
    `<li><a class="dropdown-item${key === sub ? " active" : ""}" href="${href}"><i class="bi ${icon}"></i>${label}</a></li>`
  ).join("");
  const nav = links.map(([href, label, key]) => {
    const cls = `nav-link${key === active ? " active" : ""}`;
    if (key === "services") {
      return `<li class="nav-item nav-dd">
        <a class="${cls}" href="${href}">${label} <i class="bi bi-chevron-down dd-caret"></i></a>
        <ul class="dropdown-menu dd-menu"><li><a class="dropdown-item${active === "services" && !sub ? " active" : ""}" href="services.html"><i class="bi bi-grid"></i>All Services</a></li>${dropdown}</ul>
      </li>`;
    }
    return `<li class="nav-item"><a class="${cls}" href="${href}"${key === active ? ' aria-current="page"' : ""}>${label}</a></li>`;
  }).join("");

  return `
  <div class="topbar d-none d-md-block">
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <a href="tel:${SITE.phoneLink}" class="me-4"><i class="bi bi-telephone-fill"></i>${SITE.phone}</a>
        <a href="${waLink(WA_DEFAULT)}" target="_blank" rel="noopener" class="me-4"><i class="bi bi-whatsapp"></i>WhatsApp Us</a>
        <a href="mailto:${SITE.email}" class="me-4"><i class="bi bi-envelope-fill"></i>${SITE.email}</a>
        <span class="d-none d-lg-inline"><i class="bi bi-clock-fill"></i>${SITE.hours}</span>
      </div>
      <div class="social">
        <a href="${SITE.social.facebook}" aria-label="Facebook"><i class="bi bi-facebook m-0"></i></a>
        <a href="${SITE.social.instagram}" aria-label="Instagram"><i class="bi bi-instagram m-0"></i></a>
        <a href="${SITE.social.linkedin}" aria-label="LinkedIn"><i class="bi bi-linkedin m-0"></i></a>
        <a href="${SITE.social.x}" aria-label="X"><i class="bi bi-twitter-x m-0"></i></a>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg site-nav sticky-top" id="siteNav">
    <div class="container">
      <a class="navbar-brand brand" href="index.html" aria-label="${SITE.name} home">
        <img src="assets/img/mark.png" alt="Humble logo mark">
        <span class="brand-text"><strong>HUMBLE</strong><small>Project Management FZ LLC</small></span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">${nav}</ul>
        <a href="${waLink("Hello, I would like a free consultation.")}" target="_blank" rel="noopener" class="btn btn-wa ms-lg-3 mt-2 mt-lg-0"><i class="bi bi-whatsapp me-1"></i> Free Consultation</a>
      </div>
    </div>
  </nav>`;
}

/* ---------- Shared footer ---------- */
function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6">
          <img src="assets/img/logo-light.png" alt="${SITE.name}" class="f-logo">
          <p>Over 10 years of trusted experience in UAE document clearing, travel &amp; tourism services and manpower project management. Your reliable partner for every step in the UAE.</p>
          <div class="social-btns mt-3">
            <a href="${SITE.social.facebook}" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="${SITE.social.instagram}" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="${SITE.social.linkedin}" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="${waLink(WA_DEFAULT)}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5>Quick Links</h5>
          <ul class="f-links">
            <li><i class="bi bi-chevron-right"></i><a href="index.html">Home</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="about.html">About Us</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="services.html">Services</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="careers.html">Jobs &amp; Recruitment</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5>Our Services</h5>
          <ul class="f-links">
            <li><i class="bi bi-chevron-right"></i><a href="documents-clearing.html">Documents Clearing (PRO)</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="travel-tourism.html">Travel &amp; Tourism</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="manpower-recruitment.html">Manpower &amp; Recruitment</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="consultancy.html">Project Management Consultancy</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="careers.html">Jobs in UAE</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5>Get In Touch</h5>
          <ul class="f-links f-contact">
            <li><i class="bi bi-geo-alt-fill"></i><span>${SITE.address}</span></li>
            <li><i class="bi bi-telephone-fill"></i><a href="tel:${SITE.phoneLink}">${SITE.phone}</a></li>
            <li><i class="bi bi-whatsapp"></i><a href="${waLink(WA_DEFAULT)}" target="_blank" rel="noopener">WhatsApp: ${SITE.phone}</a></li>
            <li><i class="bi bi-envelope-fill"></i><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li><i class="bi bi-clock-fill"></i><span>${SITE.hours}</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="f-bottom">
      <div class="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>&copy; ${year} ${SITE.name}. All rights reserved.</span>
        <span>Proudly serving clients across the UAE</span>
      </div>
    </div>
  </footer>
  <a href="${waLink(WA_DEFAULT)}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <span class="wa-label">Need help? <strong>Chat with us</strong></span><i class="bi bi-whatsapp"></i>
  </a>
  <div class="mobile-cta">
    <a href="tel:${SITE.phoneLink}" class="m-call"><i class="bi bi-telephone-fill"></i> Call</a>
    <a href="${waLink(WA_DEFAULT)}" target="_blank" rel="noopener" class="m-wa"><i class="bi bi-whatsapp"></i> WhatsApp Us</a>
  </div>
  <button class="back-top" id="backTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "";
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) header.outerHTML = renderHeader(page);
  if (footer) footer.outerHTML = renderFooter();

  // Fill any element with data-site="phone|email|address|hours"
  document.querySelectorAll("[data-site]").forEach(el => {
    const key = el.dataset.site;
    if (SITE[key]) el.textContent = SITE[key];
  });
  document.querySelectorAll("[data-tel]").forEach(el => el.href = `tel:${SITE.phoneLink}`);
  document.querySelectorAll("[data-mail]").forEach(el => el.href = `mailto:${SITE.email}`);
  document.querySelectorAll("[data-wa]").forEach(el => {
    el.href = waLink(el.dataset.wa || WA_DEFAULT);
    el.target = "_blank";
    el.rel = "noopener";
  });

  /* Show the "Chat with us" label on the floating WhatsApp button for a few seconds */
  const waFloat = document.querySelector(".whatsapp-float");
  if (waFloat) {
    setTimeout(() => waFloat.classList.add("expanded"), 2500);
    setTimeout(() => waFloat.classList.remove("expanded"), 9000);
  }

  /* Navbar shadow + back-to-top */
  const nav = document.getElementById("siteNav");
  const backTop = document.getElementById("backTop");
  const onScroll = () => {
    const y = window.scrollY;
    nav && nav.classList.toggle("scrolled", y > 40);
    backTop && backTop.classList.toggle("show", y > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backTop && backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* Close mobile menu after clicking a link */
  document.querySelectorAll("#mainNav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu.classList.contains("show") && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });

  /* Reveal on scroll */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("visible"));
  }

  /* Animated counters */
  const counters = document.querySelectorAll("[data-count]");
  const runCounter = el => {
    const target = +el.dataset.count;
    const duration = 1600;
    const start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { runCounter(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(c => co.observe(c));
  } else {
    counters.forEach(c => c.textContent = c.dataset.count);
  }

  /* Forms: validate, then send the enquiry via WhatsApp (no server needed).
     To use email instead, set data-send="email" on the <form>. */
  document.querySelectorAll("form.js-enquiry").forEach(form => {
    form.addEventListener("submit", ev => {
      ev.preventDefault();
      if (!form.checkValidity()) { form.classList.add("was-validated"); return; }

      const title = form.dataset.title || "New Enquiry";
      const lines = [`*${title}* — via website`];
      form.querySelectorAll("input, select, textarea").forEach(f => {
        if (!f.name || f.type === "file" || f.type === "checkbox") return;
        if (f.value.trim()) lines.push(`${f.dataset.label || f.name}: ${f.value.trim()}`);
      });
      const text = lines.join("\n");

      if (form.dataset.send === "email") {
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text.replace(/\*/g, ""))}`;
      } else {
        window.open(waLink(text), "_blank", "noopener");
      }
      const ok = form.querySelector(".form-success");
      ok && ok.classList.add("show");
      form.reset();
      form.classList.remove("was-validated");
    });
  });
});

/* =========================================================
   Animations & visual effects
   ========================================================= */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Page loader (added straight away so it covers the page while it loads) */
(function () {
  if (reduceMotion || sessionStorageGet("hpm-loaded")) return;
  const loader = document.createElement("div");
  loader.id = "loader";
  loader.innerHTML = '<img src="assets/img/mark-light.png" alt=""><div class="loader-bar"></div>';
  document.body.prepend(loader);
  const hide = () => { loader.classList.add("done"); setTimeout(() => loader.remove(), 600); sessionStorageSet("hpm-loaded", "1"); };
  window.addEventListener("load", () => setTimeout(hide, 500));
  setTimeout(hide, 4000); // safety net
})();
function sessionStorageGet(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
function sessionStorageSet(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }

document.addEventListener("DOMContentLoaded", () => {
  /* Scroll progress bar */
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  const updateBar = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", updateBar, { passive: true });
  updateBar();

  /* Two-column rows slide in from opposite sides; grids are staggered */
  document.querySelectorAll(".row").forEach(row => {
    const items = [...row.children].filter(c => c.classList.contains("reveal"));
    if (items.length === 2 && row.classList.contains("align-items-center")) {
      items[0].classList.add("from-left");
      items[1].classList.add("from-right");
    } else if (items.length > 2) {
      items.forEach((el, i) => el.style.transitionDelay = `${(i % 4) * 0.12}s`);
    }
  });
  document.querySelectorAll(".cta.reveal, .stats.reveal").forEach(el => el.classList.add("zoom"));

  if (reduceMotion) return;

  /* Hero: typing word rotator */
  const rot = document.querySelector(".rotator");
  if (rot) {
    const words = rot.dataset.words.split("|");
    let w = 0, c = words[0].length, deleting = true;
    const step = () => {
      const word = words[w];
      rot.textContent = word.slice(0, c);
      let delay = deleting ? 45 : 90;
      if (deleting) {
        c--;
        if (c < 0) { deleting = false; w = (w + 1) % words.length; c = 0; delay = 300; }
      } else {
        c++;
        if (c > words[w].length) { deleting = true; c = words[w].length; delay = 2200; }
      }
      setTimeout(step, delay);
    };
    setTimeout(step, 2600);
  }

  /* Hero: floating gold particles */
  const hero = document.querySelector(".hero");
  if (hero) {
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      const size = 3 + Math.random() * 6;
      Object.assign(p.style, {
        left: Math.random() * 100 + "%", width: size + "px", height: size + "px",
        animationDuration: 8 + Math.random() * 10 + "s", animationDelay: -Math.random() * 15 + "s",
        opacity: 0.3 + Math.random() * 0.5
      });
      hero.appendChild(p);
    }
  }

  /* Hero skyline: add twinkling windows to each building */
  document.querySelectorAll(".scene-core .bld").forEach(b => {
    const x = +b.getAttribute("x"), y = +b.getAttribute("y"), w = +b.getAttribute("width");
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    for (let wy = y + 10; wy < 365; wy += 14) {
      for (let wx = x + 6; wx < x + w - 6; wx += 10) {
        if (Math.random() < 0.45) continue;
        const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        r.setAttribute("x", wx); r.setAttribute("y", wy); r.setAttribute("width", 4); r.setAttribute("height", 6);
        r.setAttribute("fill", Math.random() < 0.7 ? "#f4d27e" : "#ffffff");
        r.setAttribute("class", "win");
        r.style.animationDelay = -Math.random() * 4 + "s";
        r.style.opacity = 0.5 + Math.random() * 0.5;
        g.appendChild(r);
      }
    }
    b.after(g);
  });

  /* Page headers: floating decorative shapes */
  document.querySelectorAll(".page-header").forEach(ph => {
    const shapes = [
      ["round", 70, "8%", "70%"], ["", 34, "22%", "88%"], ["round fill", 18, "70%", "60%"],
      ["round", 120, "60%", "92%"], ["fill", 14, "15%", "52%"], ["", 22, "78%", "78%"]
    ];
    shapes.forEach(([cls, size, top, left], i) => {
      const s = document.createElement("span");
      s.className = "shape " + cls;
      Object.assign(s.style, { width: size + "px", height: size + "px", top, left, animationDelay: `${-i * 1.5}s` });
      ph.appendChild(s);
    });
  });

  /* 3D tilt on cards (desktop pointers only) */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".service-card, .industry, .mv-card, .exp-tile, .audience-card").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transition = "transform .1s";
        card.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-6px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transition = "transform .5s ease";
        card.style.transform = "";
      });
    });
  }
});
