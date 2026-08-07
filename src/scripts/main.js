import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

if (isTouch) document.body.classList.add("is-touch");

const approachSteps = [
  {
    num: "01",
    tag: "Ingest",
    title: "Signal captured at machine speed",
    body: "Broadcast, print, social and streaming flows into GLIP — structured, tagged, and ready for expert review before noise becomes narrative.",
    owner: "AI Pipeline",
  },
  {
    num: "02",
    tag: "Accelerate",
    title: "AI sorts volume into clarity",
    body: "Models triage, translate, and surface anomalies across languages and channels — so analysts spend time on judgment, not hunting.",
    owner: "GLIP Models",
  },
  {
    num: "03",
    tag: "Command",
    title: "Humans own the final call",
    body: "Linguists, moderators and media analysts validate tone, context and compliance. AI proposes. Experts decide.",
    owner: "Human Experts",
  },
  {
    num: "04",
    tag: "Deliver",
    title: "Actionable output, audit-ready",
    body: "Insights, captions, dubs and moderation decisions leave with provenance — regulator-ready and mapped to your workflow.",
    owner: "Client Ops",
  },
];

/* ---------- Cursor ---------- */
function initCursor() {
  if (isTouch || reduceMotion) return;
  const cursor = document.querySelector(".cursor");
  if (!cursor) return;

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  gsap.ticker.add(() => {
    pos.x += (mouse.x - pos.x) * 0.22;
    pos.y += (mouse.y - pos.y) * 0.22;
    cursor.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
  });

  document.querySelectorAll("a, button, input, select").forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
  });
}

/* ---------- Nav ---------- */
function initNav() {
  const nav = document.querySelector("[data-nav]");
  const btn = document.querySelector("[data-menu-btn]");
  const mobile = document.querySelector("[data-mobile-nav]");
  if (!nav) return;

  ScrollTrigger.create({
    start: 40,
    onUpdate: (self) => {
      nav.classList.toggle("is-scrolled", self.scroll() > 40);
    },
  });

  if (btn && mobile) {
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      mobile.hidden = open;
    });

    mobile.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        btn.setAttribute("aria-expanded", "false");
        mobile.hidden = true;
      });
    });
  }
}

/* ---------- Progress bar ---------- */
function initProgress() {
  const bar = document.querySelector(".progress__bar");
  if (!bar) return;

  gsap.to(bar, {
    width: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
    },
  });
}

/* ---------- Hero entrance ---------- */
function initHero() {
  const hero = document.querySelector("[data-hero]");
  if (!hero) return;

  if (reduceMotion) {
    hero.classList.add("is-ready");
    return;
  }

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => hero.classList.add("is-ready"),
  });

  tl.fromTo(
    ".hero__brand",
    { y: 48, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9 }
  )
    .fromTo(
      ".hero__title .reveal-line",
      { y: 36, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
      "-=0.45"
    )
    .fromTo(
      ".hero__lede",
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    )
    .fromTo(
      ".hero__actions",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55 },
      "-=0.35"
    )
    .fromTo(".hero__meta", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2")
    .fromTo(".hero__scroll", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.2");

  gsap.to(".hero__orb--1", {
    y: 40,
    x: -20,
    ease: "none",
    scrollTrigger: { trigger: hero, scrub: 1, start: "top top", end: "bottom top" },
  });

  gsap.to(".hero__orb--2", {
    y: -30,
    x: 25,
    ease: "none",
    scrollTrigger: { trigger: hero, scrub: 1.2, start: "top top", end: "bottom top" },
  });
}

/* ---------- Approach pinned story ---------- */
function initApproach() {
  const section = document.querySelector("[data-approach]");
  if (!section) return;

  const num = section.querySelector("[data-step-num]");
  const tag = section.querySelector("[data-step-tag]");
  const title = section.querySelector("[data-step-title]");
  const body = section.querySelector("[data-step-body]");
  const owner = section.querySelector("[data-step-owner]");
  const dots = section.querySelectorAll("[data-dot]");
  const visual = section.querySelector("[data-approach-visual]");

  let current = 0;

  const paint = (index, animate = true) => {
    const step = approachSteps[index];
    if (!step) return;
    current = index;

    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));

    const apply = () => {
      num.textContent = step.num;
      tag.textContent = step.tag;
      title.textContent = step.title;
      body.textContent = step.body;
      owner.textContent = step.owner;
    };

    if (!animate || reduceMotion) {
      apply();
      return;
    }

    gsap.to([tag, title, body, owner], {
      opacity: 0,
      y: 12,
      duration: 0.2,
      stagger: 0.03,
      onComplete: () => {
        apply();
        gsap.fromTo(
          [tag, title, body, owner],
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: "power2.out" }
        );
      },
    });

    gsap.fromTo(
      visual,
      { rotate: index * 8 - 8 },
      { rotate: index * 8, duration: 0.6, ease: "power2.out" }
    );
  };

  dots.forEach((dot) => {
    dot.querySelector("button")?.addEventListener("click", () => {
      paint(Number(dot.dataset.dot));
    });
  });

  if (reduceMotion) {
    paint(0, false);
    return;
  }

  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      const idx = Math.min(
        approachSteps.length - 1,
        Math.floor(self.progress * approachSteps.length)
      );
      if (idx !== current) paint(idx);
    },
  });

  paint(0, false);
}

/* ---------- Products horizontal slide ---------- */
function initProducts() {
  const section = document.querySelector("[data-products]");
  const track = document.querySelector("[data-products-track]");
  const pinWrap = document.querySelector("[data-products-pin]");
  if (!section || !track || !pinWrap) return;

  if (reduceMotion) return;

  const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);

  const tween = gsap.to(track, {
    x: () => -getScroll(),
    ease: "none",
    scrollTrigger: {
      trigger: pinWrap,
      start: "top top+=72",
      end: () => `+=${getScroll()}`,
      scrub: 0.8,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  window.addEventListener("resize", () => {
    tween.scrollTrigger?.refresh();
  });
}

/* ---------- Literature chapters ---------- */
function initLiterature() {
  const section = document.querySelector("[data-lit]");
  if (!section) return;

  const chapters = [...section.querySelectorAll("[data-chapter]")];
  const bar = section.querySelector("[data-lit-bar]");
  let current = 0;

  const show = (index) => {
    if (index === current && chapters[index].classList.contains("is-active")) return;
    current = index;

    chapters.forEach((ch, i) => {
      const active = i === index;
      ch.classList.toggle("is-active", active);

      if (reduceMotion) {
        gsap.set(ch, { opacity: active ? 1 : 0, x: 0 });
        return;
      }

      if (active) {
        gsap.fromTo(
          ch,
          { opacity: 0, x: 48 },
          { opacity: 1, x: 0, duration: 0.55, ease: "power3.out" }
        );
      } else {
        gsap.to(ch, { opacity: 0, x: -28, duration: 0.35, ease: "power2.in" });
      }
    });
  };

  if (reduceMotion) {
    show(0);
    if (bar) bar.style.width = "100%";
    return;
  }

  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      if (bar) bar.style.width = `${self.progress * 100}%`;
      const idx = Math.min(
        chapters.length - 1,
        Math.floor(self.progress * chapters.length)
      );
      show(idx);
    },
  });

  show(0);
}

/* ---------- Counters ---------- */
function initCounters() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";

    if (reduceMotion) {
      el.textContent = `${target}${suffix}`;
      return;
    }

    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val)}${suffix}`;
          },
        });
      },
    });
  });
}

/* ---------- Generic reveals ---------- */
function initReveals() {
  if (reduceMotion) {
    gsap.set([".reveal-up", ".reveal-slide"], { opacity: 1, y: 0, x: 0 });
    return;
  }

  gsap.utils.toArray(".reveal-up").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  });

  gsap.utils.toArray(".reveal-slide").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 36 },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        delay: i * 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      }
    );
  });
}

/* ---------- Demo form ---------- */
function initForm() {
  const form = document.querySelector("[data-demo-form]");
  const note = document.querySelector("[data-form-note]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.hidden = true;
    if (note) note.hidden = false;
  });
}

/* ---------- Smooth anchor offset ---------- */
function initAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });
}

function boot() {
  initCursor();
  initNav();
  initProgress();
  initHero();
  initApproach();
  initProducts();
  initLiterature();
  initCounters();
  initReveals();
  initForm();
  initAnchors();

  // Refresh after fonts settle
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}

boot();
