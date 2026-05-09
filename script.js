// ===== EMPLOYEE DATA =====
const employees = [
  {
    id: 1,
    name: "Ali Ramzan",
    role: "CEO & Founder",
    department: "management",
    bio: "Visionary leader and Founder of HazSols, driving the mission to redefine the future through technology. Passionate about building scalable, innovative solutions for global clients.",
    skills: ["Strategy", "Leadership", "Business Development", "AI", "Full Stack"],
    linkedin: "https://www.linkedin.com/in/ali-ahmad-hazsol",
    email: "aliramzan@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "AR",
    coverGradient: "linear-gradient(135deg, #00A896, #004D40)",
    avatarGradient: "linear-gradient(135deg, #00A896, #004D40)",
  },
  {
    id: 2,
    name: "Haram Nawaz",
    role: "Co-Founder & CTO",
    department: "management",
    bio: "Driving HazSols's technical vision as Co-Founder & CTO. Expert in system architecture, scalable infrastructure, and leading engineering teams to deliver world-class products.",
    skills: ["System Architecture", "Cloud Infrastructure", "Team Leadership", "DevOps", "Strategy"],
    linkedin: "https://www.linkedin.com/in/haram-nawaz",
    email: "haram@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "HN",
    coverGradient: "linear-gradient(135deg, #2EC4B6, #007A6E)",
    avatarGradient: "linear-gradient(135deg, #2EC4B6, #007A6E)",
  },
  {
    id: 3,
    name: "Aneeq Ahmad",
    role: "Full Stack Developer",
    department: "web",
    bio: "Versatile Full Stack Developer with expertise in building complete web solutions — from pixel-perfect frontends to robust backend APIs and database design.",
    skills: ["React", "Node.js", "MongoDB", "Express.js", "PostgreSQL"],
    linkedin: "https://www.linkedin.com/in/aneeq-ahmad",
    email: "aneeq@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "AA",
    coverGradient: "linear-gradient(135deg, #00BFA5, #00897B)",
    avatarGradient: "linear-gradient(135deg, #00BFA5, #00897B)",
  },
  {
    id: 4,
    name: "Zain Ahmad",
    role: "Angular Developer",
    department: "web",
    bio: "Specialized Angular developer crafting high-performance, enterprise-grade single-page applications with clean architecture and reusable component libraries.",
    skills: ["Angular", "TypeScript", "RxJS", "NgRx", "REST APIs"],
    linkedin: "https://www.linkedin.com/in/zain-ahmad",
    email: "zain@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "ZA",
    coverGradient: "linear-gradient(135deg, #DD0031, #9C0025)",
    avatarGradient: "linear-gradient(135deg, #DD0031, #9C0025)",
  },
  {
    id: 5,
    name: "Sara Ahmed",
    role: "Lead Web Developer",
    department: "web",
    bio: "Expert in building responsive, high-performance web applications using React, Next.js, and modern frontend frameworks.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
    linkedin: "https://www.linkedin.com/in/sara-ahmed-hazsols",
    email: "sara@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "SA",
    coverGradient: "linear-gradient(135deg, #00D4AA, #0A84FF)",
    avatarGradient: "linear-gradient(135deg, #00D4AA, #0A84FF)",
  },
  {
    id: 6,
    name: "Hassan Malik",
    role: "Mobile App Developer",
    department: "mobile",
    bio: "Specialized in cross-platform mobile app development using Flutter and React Native for Android and iOS platforms.",
    skills: ["Flutter", "React Native", "Dart", "Firebase", "Android"],
    linkedin: "https://www.linkedin.com/in/hassan-malik-hazsols",
    email: "hassan@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "HM",
    coverGradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
    avatarGradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
  },
  {
    id: 7,
    name: "Zainab Khan",
    role: "AI & ML Engineer",
    department: "ai",
    bio: "Building intelligent systems with machine learning, NLP, and agentic AI. Specialized in Google Cloud AI and custom ML model deployment.",
    skills: ["Python", "TensorFlow", "NLP", "Google Cloud AI", "LangChain"],
    linkedin: "https://www.linkedin.com/in/zainab-khan-hazsols",
    email: "zainab@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "ZK",
    coverGradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
    avatarGradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
  },
  {
    id: 8,
    name: "Usman Tariq",
    role: "Backend Engineer",
    department: "web",
    bio: "Expert in building robust, scalable backend systems, APIs, and enterprise software. Specializes in Node.js, PHP, and cloud infrastructure.",
    skills: ["Node.js", "PHP", "MySQL", "AWS", "REST APIs"],
    linkedin: "https://www.linkedin.com/in/usman-tariq-hazsols",
    email: "usman@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "UT",
    coverGradient: "linear-gradient(135deg, #06B6D4, #10B981)",
    avatarGradient: "linear-gradient(135deg, #06B6D4, #10B981)",
  },
  {
    id: 9,
    name: "Fatima Butt",
    role: "UI/UX Designer",
    department: "design",
    bio: "Crafting beautiful, user-centered designs with a focus on accessibility, modern aesthetics, and seamless user experiences.",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Design Systems"],
    linkedin: "https://www.linkedin.com/in/fatima-butt-hazsols",
    email: "fatima@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "FB",
    coverGradient: "linear-gradient(135deg, #F472B6, #FB7185)",
    avatarGradient: "linear-gradient(135deg, #F472B6, #FB7185)",
  },
  {
    id: 10,
    name: "Bilal Hussain",
    role: "Custom Software Developer",
    department: "web",
    bio: "Developing enterprise-grade CRM, ERP, and Windows desktop applications with a focus on performance and scalability.",
    skills: ["C#", ".NET", "WPF", "SQL Server", "ERP"],
    linkedin: "https://www.linkedin.com/in/bilal-hussain-hazsols",
    email: "bilal@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "BH",
    coverGradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    avatarGradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
  },
  {
    id: 11,
    name: "Ayesha Siddiqui",
    role: "Project Manager",
    department: "management",
    bio: "Agile-certified project manager ensuring seamless delivery, client satisfaction, and team collaboration across all HazSols projects.",
    skills: ["Agile", "Scrum", "JIRA", "Client Management", "Risk Analysis"],
    linkedin: "https://www.linkedin.com/in/ayesha-siddiqui-hazsols",
    email: "ayesha@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "AS",
    coverGradient: "linear-gradient(135deg, #14B8A6, #0EA5E9)",
    avatarGradient: "linear-gradient(135deg, #14B8A6, #0EA5E9)",
  },
  {
    id: 12,
    name: "Omar Sheikh",
    role: "Android Developer",
    department: "mobile",
    bio: "Native Android development expert with deep knowledge of Java, Kotlin, and the full Google ecosystem.",
    skills: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "Firebase"],
    linkedin: "https://www.linkedin.com/in/omar-sheikh-hazsols",
    email: "omar@hazsols.com",
    location: "Lahore, Pakistan",
    avatar: null,
    initials: "OS",
    coverGradient: "linear-gradient(135deg, #22C55E, #16A34A)",
    avatarGradient: "linear-gradient(135deg, #22C55E, #16A34A)",
  },
];



// ===== STATE =====
let activeFilter = 'all';
let searchQuery = '';
let currentEmployee = null;

// ===== RENDER CARDS =====
function getFilteredEmployees() {
  return employees.filter(e => {
    const matchesFilter = activeFilter === 'all' || e.department === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || e.name.toLowerCase().includes(q) || e.role.toLowerCase().includes(q) || e.skills.some(s => s.toLowerCase().includes(q));
    return matchesFilter && matchesSearch;
  });
}

function renderCards() {
  const grid = document.getElementById('team-grid');
  const noResults = document.getElementById('no-results');
  const filtered = getFilteredEmployees();
  grid.innerHTML = '';
  if (filtered.length === 0) {
    noResults.style.display = 'flex';
    noResults.style.flexDirection = 'column';
    noResults.style.alignItems = 'center';
    return;
  }
  noResults.style.display = 'none';
  filtered.forEach((emp, i) => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.style.animationDelay = `${i * 0.1}s`;
    card.dataset.id = emp.id;
    card.innerHTML = `
      <div class="card-shine"></div>
      <div class="card-header">
        <div class="card-cover-fallback" style="background:${emp.coverGradient};"></div>
        <div class="card-cover-overlay"></div>
        <div class="card-badge">${getDeptLabel(emp.department)}</div>
      </div>
      <div class="card-avatar-ring">
        <div class="card-avatar" style="background:${emp.avatarGradient};">
          <svg class="avatar-icon" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
          <span class="avatar-initials">${emp.initials}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-top">
          <div class="card-name">${emp.name}</div>
          <div class="card-role">
            <span class="role-dot"></span>${emp.role}
          </div>
          <div class="card-location">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            ${emp.location}
          </div>
          <div class="card-bio">${emp.bio}</div>
        </div>
        <div class="card-tags">${emp.skills.slice(0, 3).map(s => `<span class="tag">${s}</span>`).join('')}</div>
        <div class="card-divider"></div>
        <div class="card-actions">
          <a href="${emp.linkedin}" target="_blank" class="card-btn-linkedin" onclick="event.stopPropagation()">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            Connect on LinkedIn
          </a>
          <button class="card-btn-profile" title="View Full Profile" onclick="event.stopPropagation(); openModal(employees.find(e=>e.id==${emp.id}))">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(emp));
    grid.appendChild(card);
  });
}

function getDeptLabel(dept) {
  const map = { web: 'Web Dev', mobile: 'Mobile', ai: 'AI & ML', design: 'Design', management: 'Management' };
  return map[dept] || dept;
}

// ===== MODAL =====
function openModal(emp) {
  currentEmployee = emp;
  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <div class="modal-header-bg" style="background:${emp.coverGradient};">
      <div class="modal-avatar" style="background:${emp.avatarGradient};">${emp.initials}</div>
    </div>
    <div class="modal-body">
      <div class="modal-name">${emp.name}</div>
      <div class="modal-role">${emp.role}</div>
      <div class="modal-location">📍 ${emp.location}</div>
      <div class="modal-bio">${emp.bio}</div>
      <div class="modal-skills">${emp.skills.map(s => `<span class="tag">${s}</span>`).join('')}</div>
      <div class="modal-actions">
        <a href="${emp.linkedin}" target="_blank" class="modal-btn-linkedin">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          Connect on LinkedIn
        </a>
        <button class="modal-btn-share" onclick="shareProfile()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
          Share Profile
        </button>
      </div>
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function shareProfile() {
  if (!currentEmployee) return;
  const text = `Check out ${currentEmployee.name}, ${currentEmployee.role} at HazSols!\n${currentEmployee.linkedin}`;
  if (navigator.share) {
    navigator.share({ title: `${currentEmployee.name} – HazSols`, text, url: currentEmployee.linkedin }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('Profile link copied to clipboard! ✅'));
  }
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'share-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 50);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000);
}

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#00A896', '#00D4AA', '#2EC4B6', '#00BFA5'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      left:${Math.random() * 100}%;
      bottom:${Math.random() * -20}%;
      animation-duration:${Math.random() * 15 + 10}s;
      animation-delay:${Math.random() * 10}s;
      opacity:${Math.random() * 0.6 + 0.2};
    `;
    container.appendChild(p);
  }
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = +el.dataset.target;
    let current = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current);
    }, 30);
  });
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ===== HAMBURGER =====
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('open');
});

// ===== FILTERS =====
document.getElementById('filter-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.filter-tab');
  if (!tab) return;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  activeFilter = tab.dataset.filter;
  renderCards();
});

// ===== SEARCH =====
document.getElementById('search-input').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderCards();
});

// ===== MODAL CLOSE =====
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== SMOOTH SCROLL =====
document.querySelector('a[href="#team"]').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
});

// ===== INTERSECTION OBSERVER for counters =====
const heroSection = document.querySelector('.hero');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { animateCounters(); observer.unobserve(entry.target); } });
}, { threshold: 0.5 });
observer.observe(heroSection);

// ===== INIT =====
createParticles();
renderCards();
