/* ==========================================================
   PORTFOLIO CONFIG
   ========================================================== */
const CONFIG = {
  /* PERSONAL */
  name: "Devraj Desai",
  nameJP: "デヴラージ",
  roles: [
    "AI Engineer",
    "Open Source Contributor",
    "Competitive Programming enthusiast",
    "Data Analyst",
  ],
  college: "Indian Institute of Information Technology, Vadodara",
  branch: "Artificial Intelligence",
  location: "Maharashtra, India",
  status: "Open to Opportunities",
  bio: `A passionate engineer driven by a strong passion for artificial intelligence and competitive programming.
  I thrive on solving complex problems and believe in action over words.
  My interests extend beyond technology—I am fluent in Japanese and deeply inspired by its culture.
  I also enjoy exploring imaginative worlds through fantasy novels and unwind as a light gamer.
  This mix of technical focus, cultural curiosity, and creative pursuits shapes both my learning and my work. `,

  /* PROFILE PHOTO(URL or base64) */
  photo: "https://i.postimg.cc/gr9bcnwJ/photo-jpg.jpg",

  /* RÉSUMÉ */
  resumeURL: "#",

  /* SKILLS */
  skills: [
    "C++",
    "Java",
    "C",
    "Python",
    "R",
    "Pandas",
    "SQL",
    "Seaborn",
    "Matplotlib",
    "NumPy",
    "Scikit-learn",
    "Git",
    "Linux",
    "HTML",
    "Competitive Programming",
    "Machine Learning",
  ],

  /* LINKS */
  links: {
    email: "devrajdesai4747@gmail.com",
    github: "https://github.com/devraj-desai",
    linkedin: "https://www.linkedin.com/in/devraj-desai-274107381/",
    twitter: "https://x.com/DesaiDevra6532",
    instagram:
      "https://www.instagram.com/devrajdesai4747?igsh=OG8xbm4xbGQ2YnYw",
    youtube: "",
    leetcode: "https://leetcode.com/u/Devraj_Desai/",
    codeforces: "https://codeforces.com/profile/Devraj_Desai",
    codechef: "https://www.codechef.com/users/devraj_desai",
    portfolio: "",
  },

  /*PROJECTS*/
  projects: [
    {
      name: "Portfolio Website",
      type: "Web Application",
      desc: "A responsive portfolio website designed to present my technical skills, projects, and accomplishments. It features custom animations, dynamic content rendering, and a clean Japanese-inspired aesthetic.",
      tech: ["HTML5", "CSS3", "Vanilla JavaScript(ES6+)"],
      github: "https://github.com/devraj-desai/sakura-portfolio",
      live: "https://devraj-desai.github.io/sakura-portfolio/",
    },
    {
      name: "Coming Soon",
      type: "Machine Learning",
      desc: "",
      tech: ["Python", "TensorFlow", "Flask", "OpenCV"],
      github: "",
      live: "",
    },
    {
      name: "Coming Soon",
      type: "Machine Learning",
      desc: "",
      tech: [""],
      github: "",
      live: "",
    },
    {
      name: "Coming Soon",
      type: "Application",
      desc: "",
      tech: [""],
      github: "",
      live: "",
    },
  ],

  /* ACHIEVEMENTS  */
  achievements: [
    {
      year: "2025",
      title: "JEE Mains/Advanced and MHT-CET",
      desc: "Top 2 %tile in India and qualified for JEE Advanced.",
      icon: "fa-graduation-cap",
    },
    {
      year: "2026",
      title: "GirlScript Summer of Code Contributor",
      desc: "Selected as a GSSoC contributor.",
      icon: "fa-code",
    },
    {
      year: "2026",
      title: "Specialist at Codeforces",
      desc: "Achieved Specialist title at World's leading Competitive Programming platform Codeforces in 10 contest.",
      icon: "fa-trophy",
    },
    {
      year: "2026",
      title: "2⭐ at CodeChef",
      desc: "Achieved 2⭐ rank at CodeChef in 9 contests.",
      icon: "fa-star",
    },
  ],

  /* CONTACT MESSAGE */
  contactMsg:
    "Open to internships, full-time roles, and exciting collaborations. Drop me a line and let's build something meaningful together.",
};

/* ==========================================================
   POPULATE DOM
   ========================================================== */
(function populate() {
  const S = CONFIG;
  const firstName = S.name.split(" ")[0];
  const lastName = S.name.split(" ").slice(1).join(" ");

  document.title = S.name + " · Portfolio";

  // Navbar
  document.getElementById("nav-first-name").textContent = firstName;
  document.getElementById("nav-jp-accent").textContent = S.nameJP || "桜";

  // Hero
  document.getElementById("hero-eyebrow").textContent =
    (S.nameJP ? S.nameJP + " · " : "") + "PORTFOLIO";
  document.getElementById("hero-name").innerHTML =
    `${firstName} <span class="hi">${lastName}</span>`;
  document.getElementById("hero-edu").textContent =
    `${S.college}  ·  ${S.branch}`;
  document.getElementById("btn-resume").href = S.resumeURL;

  // About
  document.getElementById("info-college").textContent = S.college;
  document.getElementById("info-branch").textContent = S.branch;
  document.getElementById("info-location").textContent = S.location;
  document.getElementById("info-status").textContent = S.status;
  document.getElementById("about-bio").textContent = S.bio;

  // Photo
  const frame = document.getElementById("photo-frame");
  if (S.photo) {
    const img = document.createElement("img");
    img.src = S.photo;
    img.alt = S.name;
    frame.appendChild(img);
  } else {
    frame.innerHTML = `
      <div class="photo-placeholder">
        <i class="fas fa-user"></i>
        <span>Set <code>photo</code> in CONFIG</span>
      </div>`;
  }

  // Skills
  const sw = document.getElementById("skills-wrap");
  S.skills.forEach((sk) => {
    const s = document.createElement("span");
    s.className = "skill-pill";
    s.textContent = sk;
    sw.appendChild(s);
  });

  // Projects
  const pg = document.getElementById("projects-grid");
  S.projects.forEach((p, i) => {
    const d = document.createElement("div");
    d.className = `proj-card r d${Math.min(i + 1, 4)}`;
    d.setAttribute("data-n", String(i + 1).padStart(2, "0"));
    d.innerHTML = `
      <p class="proj-type">${p.type}</p>
      <h3 class="proj-name">${p.name}</h3>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-tags">${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="proj-links">
        ${p.github ? `<a href="${p.github}" class="proj-link" target="_blank" rel="noopener"><i class="fab fa-github"></i> Source</a>` : ""}
        ${p.live ? `<a href="${p.live}" class="proj-link" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> Live</a>` : ""}
      </div>`;
    pg.appendChild(d);
  });

  // Achievements
  const al = document.getElementById("ach-list");
  S.achievements.forEach((a, i) => {
    const d = document.createElement("div");
    d.className = `ach-item r d${Math.min(i + 1, 4)}`;
    d.innerHTML = `
      <div class="ach-icon"><i class="fas ${a.icon}"></i></div>
      <div class="ach-year">${a.year}</div>
      <div class="ach-body">
        <h4 class="ach-title">${a.title}</h4>
        <p class="ach-desc">${a.desc}</p>
      </div>`;
    al.appendChild(d);
  });

  // Contact
  document.getElementById("contact-sub").textContent = S.contactMsg;
  const emailEl = document.getElementById("contact-email-link");
  emailEl.href = `mailto:${S.links.email}`;
  emailEl.textContent = S.links.email;

  // Socials
  const socDefs = [
    { key: "github", icon: "fab fa-github", title: "GitHub" },
    { key: "linkedin", icon: "fab fa-linkedin-in", title: "LinkedIn" },
    { key: "twitter", icon: "fab fa-x-twitter", title: "X / Twitter" },
    { key: "instagram", icon: "fab fa-instagram", title: "Instagram" },
    { key: "youtube", icon: "fab fa-youtube", title: "YouTube" },
    { key: "leetcode", icon: "si si-leetcode", title: "LeetCode" },
    { key: "codeforces", icon: "si si-codeforces", title: "Codeforces" },
    { key: "codechef", icon: "si si-codechef", title: "CodeChef" },
    { key: "portfolio", icon: "fas fa-globe", title: "Website" },
  ];
  const sc = document.getElementById("socials");
  socDefs.forEach(({ key, icon, title }) => {
    const url = S.links[key];
    if (!url || url === "#") return;
    const a = document.createElement("a");
    a.href = url;
    a.className = "soc-btn";
    a.title = title;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = `<i class="${icon}"></i>`;
    sc.appendChild(a);
  });

  // Footer
  document.getElementById("f-year").textContent = new Date().getFullYear();
  document.getElementById("f-name").textContent = S.name;
})();

/* ==========================================================
   TYPEWRITER EFFECT
   ========================================================== */
(function typewriter() {
  const el = document.getElementById("typed-text");
  const words = CONFIG.roles;
  let wi = 0,
    ci = 0,
    del = false;

  function tick() {
    const word = words[wi];
    if (!del) {
      ci++;
      el.textContent = word.slice(0, ci);
      if (ci === word.length) {
        del = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if (ci === 0) {
        del = false;
        wi = (wi + 1) % words.length;
      }
    }
    setTimeout(tick, del ? 48 : 88);
  }
  setTimeout(tick, 1000);
})();

/* ==========================================================
   CUSTOM CURSOR
   ========================================================== */
(function cursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top = my + "px";
  });

  (function loop() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(loop);
  })();

  const hovers = document.querySelectorAll(
    "a, button, .skill-pill, .proj-card, .soc-btn",
  );
  hovers.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      dot.style.width = "20px";
      dot.style.height = "20px";
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.borderColor = "var(--sakura)";
    });
    el.addEventListener("mouseleave", () => {
      dot.style.width = "10px";
      dot.style.height = "10px";
      ring.style.width = "38px";
      ring.style.height = "38px";
      ring.style.borderColor = "rgba(255,143,171,0.5)";
    });
  });
})();

/* ==========================================================
   NAVBAR SCROLL
   ========================================================== */
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", scrollY > 60);
});

/* ==========================================================
   MOBILE NAV
   ========================================================== */
function openMobileNav() {
  document.getElementById("mobile-nav").classList.add("open");
}
function closeMobileNav() {
  document.getElementById("mobile-nav").classList.remove("open");
}
document
  .getElementById("mobile-close")
  .addEventListener("click", closeMobileNav);

/* ==========================================================
   SCROLL REVEAL
   ========================================================== */
(function revealInit() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("on");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".r").forEach((el) => obs.observe(el));
})();

/* ==========================================================
   SAKURA PETAL CANVAS
   ========================================================== */
(function sakura() {
  const canvas = document.getElementById("petals-canvas");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const COLORS = [
    "#ff8fab",
    "#ffb3cb",
    "#ffd0e0",
    "#c9a96e",
    "#ffccd8",
    "#e8a0b4",
  ];
  const COUNT = 60;

  class Petal {
    constructor(init) {
      this.reset(init);
    }
    reset(init) {
      this.x = Math.random() * canvas.width;
      this.y = init ? Math.random() * canvas.height : -18;
      this.sz = Math.random() * 7 + 3;
      this.vy = Math.random() * 1.1 + 0.35;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.rot = Math.random() * Math.PI * 2;
      this.drot = (Math.random() - 0.5) * 0.035;
      this.a = Math.random() * 0.45 + 0.18;
      this.col = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.sw = Math.random() * 1.8 + 0.3;
      this.swS = Math.random() * 0.018 + 0.005;
      this.swA = Math.random() * Math.PI * 2;
      this.wobble = Math.random() * 0.4;
    }
    update() {
      this.swA += this.swS;
      this.x += this.vx + Math.sin(this.swA) * this.sw * 0.35;
      this.y += this.vy + Math.cos(this.swA * 0.7) * this.wobble;
      this.rot += this.drot;
      if (
        this.y > canvas.height + 20 ||
        this.x < -30 ||
        this.x > canvas.width + 30
      )
        this.reset(false);
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = this.a;
      ctx.fillStyle = this.col;
      // Petal body
      ctx.beginPath();
      ctx.ellipse(0, 0, this.sz, this.sz * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
      // Central vein
      ctx.strokeStyle = "rgba(255,255,255,.25)";
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(-this.sz * 0.6, 0);
      ctx.lineTo(this.sz * 0.6, 0);
      ctx.stroke();
      ctx.restore();
    }
  }

  const petals = Array.from({ length: COUNT }, () => new Petal(true));

  (function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  })();
})();

/* ==========================================================
   HERO PARALLAX (subtle)
   ========================================================== */
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const hero = document.querySelector(".hero-silhouette");
  if (hero) hero.style.transform = `translateY(${y * 0.18}px)`;
  const hc = document.querySelector(".hero-content");
  if (hc) hc.style.transform = `translateY(${y * 0.28}px)`;
});
