/**
 * ============================================================
 *  PROFILE DATA — Edit all personal content here
 *  This is the ONLY file you need to modify for content updates
 * ============================================================
 */

const PROFILE = {

  // ── Basic Info ──────────────────────────────────────────
  name: {
    en: "Liu Minxu",
    zh: "刘旻栩",
  },
  title: "Ph.D. Student",
  affiliation: {
    current: {
      name: "College of Artificial Intelligence, Zhejiang University",
      nameZh: "浙江大学人工智能学院",
      url: "https://www.zju.edu.cn",
      start: "2026",
      status: "incoming", // "current" | "incoming"
    },
    previous: {
      name: "College of Computer Science and Technology, Nanjing University of Aeronautics and Astronautics",
      nameZh: "南京航空航天大学计算机科学与技术学院",
      url: "https://www.nuaa.edu.cn",
    }
  },
  hometown: "Zhoushan, Zhejiang",
  photo: "assets/images/profile/avatar.jpg", // replace with your photo

  contact: {
    email_nuaa: "liuminxu@nuaa.edu.com",
    email_163:  "liuminxu119@163.com",
    phone:      "+86-151-5799-2209",
    // arxiv:      "https://arxiv.org/search/?searchtype=author&query=Minxu+Liu",
    googleScholar: "https://scholar.google.com/citations?hl=zh-CN&user=ve49nrEAAAAJ", // add when available
    github:     "LauMason",    // add when available
  },

  // ── Research Interests ──────────────────────────────────
  researchInterests: [
    "Neural Signal Processing",
    "Audiovisual Representation Learning",
    "Multimodal Learning",
    "Brain Decoding",
    "Affective Computing",
    "Deep Learning",
  ],

  // ── Bio (shown in hero) ─────────────────────────────────
  bio: `I am an incoming Ph.D. student at the <strong>College of Artificial Intelligence, Zhejiang University</strong> (Fall 2026), and a recent M.Eng. graduate from Nanjing University of Aeronautics and Astronautics (2023–2026). My research focuses on <strong>neural signal processing</strong>, <strong>audiovisual representation learning</strong>, and <strong>affective computing</strong> — particularly on understanding how the human brain perceives and processes visual and auditory information from EEG signals.`,

  collaboration: `I am always open to academic collaborations. If you are interested in neural signal decoding, multimodal emotion recognition, or related topics, please feel free to reach out.`,

  // ── News ────────────────────────────────────────────────
  news: [
    {
      date: "2026.04",
      type: "admission",   // admission | paper | award | other
      content: `Admitted to the <strong>Ph.D. program at Zhejiang University, College of Artificial Intelligence</strong>. Incoming Fall 2026. 🎉`,
    },
    {
      date: "2026.04",
      type: "award",
      content: `Awarded <strong>"Outstanding Graduate Student"</strong> by NUAA College of Computer Science and Technology.`,
    },
    {
      date: "2026.04",
      type: "paper",
      content: `Paper <em>ViEEG: Hierarchical Visual Neural Representation for EEG Brain Decoding</em> accepted at <strong>ICML 2026</strong> (CCF-A). <a href="https://arxiv.org/abs/2505.12408" target="_blank">arXiv ↗</a>`,
    },
    {
      date: "2026.02",
      type: "paper",
      content: `Paper <em>Non-Depersonalized Disentanglement for Cross-Subject Emotion Recognition</em> accepted at <strong>ICME 2026</strong> (CCF-B).`,
    },
    {
      date: "2025.10",
      type: "award",
      content: `Awarded NUAA <strong>First-Class Graduate Scholarship</strong> for 2025–2026 (third consecutive year).`,
    },
    {
      date: "2025.04",
      type: "paper",
      content: `Paper <em>Multi-Modal Discriminative Network for Emotion Recognition across Individuals</em> accepted at <strong>IEEE TCDS</strong> (JCR Q1, IF 5.0). <a href="https://ieeexplore.ieee.org/abstract/document/10930808" target="_blank">IEEE Xplore ↗</a>`,
    },
  ],

  // ── Publications ────────────────────────────────────────
  // areas: group papers by research area
  publicationAreas: [
    {
      id: "visual-decoding",
      label: "Area 01",
      title: "Neural Visual Decoding",
      subtitle: "EEG → Image Reconstruction",
      papers: ["vieeg", "vista", "eeg2vision"],
    },
    {
      id: "affective",
      label: "Area 02",
      title: "Affective Computing",
      subtitle: "Multimodal & Cross-Subject Emotion Recognition",
      papers: ["tcds", "icme", "taffc"],
    },
  ],

  publications: {
    "vieeg": {
      title: "ViEEG: Hierarchical Visual Neural Representation for EEG Brain Decoding",
      authors: ["Liu Minxu", "et al."],    // bold the first matching "Liu Minxu"
      venue: "ICML 2026",
      venueFull: "International Conference on Machine Learning (ICML) 2026",
      venueType: "ccfa",   // ccfa | ccfb | q1 | other
      status: "accepted",  // accepted | review | submitted
      period: "Dec 2024 – Apr 2025",
      abstract: "Semantically segments visual images into a contour → foreground → full-image hierarchy to mirror the brain's layered visual understanding. Reconstructs hierarchical visual information via diffusion models. Achieves a landmark zero-shot image retrieval improvement on large-scale neural decoding benchmarks (26% → 40%).",
      links: {
        arxiv: "https://arxiv.org/abs/2505.12408",
      },
      image: "assets/images/papers/ViEEG.png",  // optional: paper teaser image
      emoji: "🧠",
    },
    "vista": {
      title: "VISTA: Dynamic Spatial-Temporal Asynchrony for EEG Visual Decoding",
      authors: ["Liu Minxu", "et al."],
      venue: "KDD 2026",
      venueFull: "SIGKDD Conference on Knowledge Discovery and Data Mining (KDD) 2026",
      venueType: "ccfa",
      status: "review",
      period: "Apr 2025 – Aug 2025",
      abstract: "Disentangles visual-stimulus-evoked EEG into fine-grained visual and coarse-grained semantic understanding. Models spatiotemporal dynamic asynchrony in both temporal and spatial dimensions, providing interpretability for EEG-based brain visual decoding.",
      links: {
        OpenReview: "https://openreview.net/forum?id=IajjifoLwo",
        },
      image: "",
      emoji: "⚡",
    },
    "eeg2vision": {
      title: "EEG Spatial-Temporal Topology Network for Brain Visual Decoding",
      authors: ["Liu Minxu", "et al."],
      venue: "",
      venueFull: "",
      venueType: "",
      status: "review",
      period: "Jul 2024 – Dec 2024",
      abstract: "Introduces topological connectivity to explicitly model brain topology strength under visual stimuli. Proposes a soft alignment strategy to bridge the heterogeneity between EEG and vision-language model representations. Designs a task-oriented disentanglement module for simultaneous coarse-grained recognition and fine-grained reconstruction.",
      links: {},
      image: "",
      emoji: "👁",
    },
    "tcds": {
      title: "Multi-Modal Discriminative Network for Emotion Recognition across Individuals",
      authors: ["Liu Minxu", "et al."],
      venue: "IEEE TCDS",
      venueFull: "IEEE Transactions on Cognitive and Developmental Systems 2025 (JCR Q1, IF 5.0)",
      venueType: "q1",
      status: "accepted",
      period: "Oct 2023 – Apr 2024",
      abstract: "Leverages attention and contrastive learning to mine heterogeneous and complementary representations in multimodal signals. Designs an embedded self-representation learning network using constrained block-diagonal matrices to facilitate invariant emotion representation across subjects.",
      links: {
        ieee: "https://ieeexplore.ieee.org/abstract/document/10930808",
      },
      image: "assets/images/papers/TCDS.png",
      emoji: "💡",
    },
    "icme": {
      title: "Non-Depersonalized Disentanglement for Cross-Subject Emotion Recognition",
      authors: ["Liu Minxu", "et al."],
      venue: "ICME 2026",
      venueFull: "IEEE International Conference on Multimedia and Expo (ICME) 2026",
      venueType: "ccfb",
      status: "accepted",
      period: "Jun 2024 – Nov 2024",
      abstract: "Addresses marginal probability alignment eliminating personalized emotion features in cross-subject tasks. Designs intra-domain and inter-domain invariant representation disentanglement with separation constraints; optimizes spectral-spatial attention networks via topological connectivity.",
      links: {},
      image: "assets/images/papers/NDDR.png",
      emoji: "🎭",
    },
    "taffc": {
      title: "Multi-Scale Topology Representation for Interpretable EEG Emotion Recognition",
      authors: ["Liu Minxu", "et al."],
      venue: "",
      venueFull: "",
      venueType: "",
      status: "review",
      period: "Jan 2024 – Jun 2024",
      abstract: "Introduces expert-prior brain functional partitioning to construct multi-level graph neural networks, capturing multi-scale global brain region and local functional partition topological connectivity, learning biologically interpretable brain networks.",
      links: {},
      image: "",
      emoji: "🔬",
    },
  },

  // ── Education ───────────────────────────────────────────
  education: [
    {
      school: "Zhejiang University",
      schoolZh: "浙江大学",
      url: "https://www.zju.edu.cn",
      degree: "Ph.D. · Artificial Intelligence",
      period: "2026 – present",
      note: "Incoming · College of Artificial Intelligence",
      status: "incoming",
      gpa: "",
      emoji: "⭐",
    },
    {
      school: "Nanjing University of Aeronautics and Astronautics",
      schoolZh: "南京航空航天大学",
      url: "https://www.nuaa.edu.cn",
      degree: "M.Eng. · Electronic Information (Computer Technology)",
      period: "2023 – 2026",
      note: "Admitted via Recommendation · College of Computer Science and Technology",
      status: "graduated",
      gpa: "",
      emoji: "🎓",
    },
    {
      school: "Zhejiang University of Technology",
      schoolZh: "浙江工业大学",
      url: "https://www.zjut.edu.cn",
      degree: "B.Eng. · Software Engineering",
      period: "2019 – 2023",
      note: "Outstanding Graduate · Outstanding Thesis · College of Computer Science and Technology",
      status: "graduated",
      gpa: "3.74 / 4.0 · Ranked 5 / 99",
      emoji: "🎓",
    },
  ],

  // ── Awards ──────────────────────────────────────────────
  awards: [
    { name: "Outstanding Graduate Student — NUAA",          date: "2026.04", level: "University",    icon: "🏅" },
    { name: "First-Class Graduate Scholarship — NUAA × 3",  date: "2023–2026", level: "University",  icon: "🏆" },
    { name: "Zhejiang Provincial Government Scholarship",   date: "2022.10", level: "Province",      icon: "🥇" },
    { name: "\"JianXing Cup\" Innovation Contest — 2nd Prize", date: "2025.08", level: "Province",   icon: "🥈" },
    { name: "MCM/ICM — Meritorious Winner (International 1st)", date: "2021.11", level: "International", icon: "🌏" },
    { name: "13th China Service Outsourcing Contest — National 3rd", date: "2022.05", level: "National", icon: "🥉" },
    { name: "National Mathematical Modeling — Zhejiang 3rd", date: "2021.06", level: "Province",    icon: "📐" },
    { name: "Outstanding Graduate — ZJUT",                  date: "2023.06", level: "University",   icon: "⭐" },
    { name: "Outstanding Bachelor's Thesis — ZJUT",         date: "2023.06", level: "University",   icon: "📝" },
    { name: "Outstanding Youth League Member — NUAA",       date: "2024.04", level: "University",   icon: "🌟" },
    { name: "Outstanding Youth League Member — ZJUT × 3",  date: "2020–2022", level: "University",  icon: "🌟" },
    { name: "Second-Class Academic Scholarship — ZJUT × 2", date: "2020–2021", level: "University", icon: "📚" },
  ],

};
