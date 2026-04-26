// ═══════════════════════════════════════════════
// SITE CONFIGURATION
// Edit this file to update all portfolio content.
// ═══════════════════════════════════════════════

const siteConfig = {

  // ── Profile / Home Page ──
  profile: {
    name: "Deepak TP",
    bio: "Passionate about building intelligent systems at the intersection of software engineering and machine learning. Experienced in RAG systems, LLM optimization, and secure AI deployments. I love turning complex research papers into working implementations and crafting tools that solve real-world problems. Always exploring, always learning.",
    avatar: "assets/img/profile/profile.jpg",

    // Intro video: place your video file as "assets/video/intro.mp4" (or .webm)
    // If the file doesn't exist, the video section will automatically hide.
    introVideoUrl: "assets/video/intro.mp4",

    // Social links
    social: {
      github: "https://github.com/deepak-t-p",
      linkedin: "https://www.linkedin.com/in/deepak-tp/",
      email: "deepaktp.tech@gmail.com"
    },

    // Typing animation words
    typingTexts: [
      "AI Engineer",
      "ML Researcher",
      "Developer",
      "Problem Solver",
      "Builder"
    ]
  },

  // ── Education ──
  education: [
    {
      year: "2024 — 2026",
      degree: "ME - Artificial Intelligence and Machine Learning",
      institution: "Manipal School of Information Science, Manipal",
      description: "CGPA – 8.5 | Specialized in AI, ML, Deep Learning, NLP, Computer Vision"
    },
    {
      year: "2020 — 2024",
      degree: "BE - Artificial Intelligence and Machine Learning",
      institution: "G M Institute of Technology, Davangere",
      description: "CGPA – 7.6 | Foundation in Artificial Intelligence, Machine Learning, Mathematics, and Computer Science"
    }
  ],

  // ── Work Experience ──
  experience: [
    {
      period: "Aug 2025 — Feb 2026",
      role: "AI Intern",
      company: "National Technical Research Organisation (NTRO)",
      description: "Engineered an offline RAG system for technical document summarization using Docling-based extraction, hybrid retrieval (BM25 + dense embeddings), and FAISS, improving contextual grounding and reducing LLM hallucinations. Optimized LLM inference with vLLM (paged attention) for low-latency, high-throughput offline deployment. Operated within air-gapped systems, strengthening understanding of secure infrastructure and system-level constraints.",
      tags: ["Python", "RAG", "LLM", "vLLM", "FAISS", "LangChain", "Hugging Face", "NLP"]
    }
  ],

  // ── Projects ──
  // Each project links to its own HTML page in the /projects/ folder.
  // To add a new project:
  //   1. Copy projects/_template.html → projects/my-project.html
  //   2. Edit the content inside
  //   3. Add an entry below
  projects: [
    {
      id: "transformer-time-series",
      title: "Transformer-Based Time Series Classification",
      summary: "Developed a Transformer-based supervised learning model for patient disease classification using time-series temperature data (1,440 minute-level observations over 24 hours). Performed EDA using statistical techniques, visualizations, and FFT-based frequency domain analysis to identify temporal patterns.",
      tags: ["Python", "PyTorch", "Transformers", "Time Series", "FFT", "Deep Learning"],
      page: "projects/project-1.html"
    },
    {
      id: "legal-doc-retrieval",
      title: "Intelligent Legal Document Retrieval & Case Summarization",
      summary: "Designed an intelligent legal document retrieval and case summarization system using RAG, enabling context-aware responses across 1,000+ PDFs. Built semantic search with vector embeddings and LLM integration for domain-specific query enhancement.",
      tags: ["Python", "RAG", "NLP", "LLM", "Vector Embeddings", "Transformers"],
      page: "projects/project-2.html"
    }
  ],

  // ── Research Papers ──
  research: {
    // Badge colors (hex). Change these to customize the badge appearance.
    implementedColor: "#4ade80",   // green
    interestedColor: "#60a5fa",    // blue

    // Papers you have implemented
    implemented: [
      {
        title: "(Transformer) Attention Is All You Need",
        paper_url: "https://arxiv.org/abs/1706.03762",
        repo_url: "https://github.com/deepak-t-p",
        description: "Implemented the Transformer architecture from scratch in PyTorch. Add your real implemented papers here."
      },
      { 
        title: "(Vision Transformer) An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale"
        paper_url: "https://arxiv.org/abs/2010.11929"
        repo_url:"https://github.com/deepak-t-p"
        description: "While the Transformer architecture has become the de facto standard for natural language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of convolutional networks while keeping their overall structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.), Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring substantially fewer computational resources to train."
      }
    ],
    // Papers you're interested in / reading list
    interested: [
      {
        title: "TurboQuant: Online Vector Quantization with Near-optimal Distortion Rate",
        paper_url: "https://arxiv.org/pdf/2504.19874",
        description: "This paper introduces TurboQuant, an online vector quantization (VQ) method that achieves near-optimal distortion-rate performance. It addresses the challenge of online VQ by combining an online codebook update strategy with a distortion-aware codebook design. The method is particularly relevant for applications requiring efficient compression and retrieval of high-dimensional data, such as in large-scale machine learning systems."
      }
    ]
  },

  // ── Technologies & Currently Working ──
  technologies: {
    // Your tech stack (icon is an emoji or text symbol)
    stack: [
      { name: "Python", icon: "🐍" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "LangGraph", icon: "🔗" },
      { name: "Agentic AI", icon: "🤖" },
      { name: "Power BI", icon: "📊" },
      { name: "Pandas", icon: "🐼" },
      { name: "MCP", icon: "⚙" },
      { name: "Git", icon: "⌥" }
    ],

    // Projects you're currently working on
    working_on: [
      {
        title: "IBM AI Engineering Certification",
        description: "Ongoing professional certification in AI Engineering from IBM, covering deep learning, computer vision, and NLP.",
        tags: ["AI", "Deep Learning", "Certification"],
        status: "active"  // active | paused | planned
      },
      {
        title: "Vibe Coding & MCP Exploration",
        description: "Exploring Vibe Coding paradigms and Model Context Protocol (MCP) for next-gen AI-assisted development workflows.",
        tags: ["MCP", "Vibe Coding", "Agentic AI"],
        status: "active"
      }
    ]
  },

  // ── GitHub ──
  // Set enabled: true and fill in the data to show real content.
  // Set enabled: false to show "Coming Soon" placeholder.
  github: {
    enabled: false,           // ← flip to true when ready
    username: "deepak-t-p",   // your GitHub username
    profileUrl: "https://github.com/deepak-t-p",

    // Stats shown at the top (fill in manually or leave empty)
    stats: {
      repos: 0,
      stars: 0,
      contributions: 0,
      followers: 0
    },

    // Pinned / featured repositories
    pinned: [
      // Uncomment and edit when ready:
      // {
      //   name: "my-cool-project",
      //   description: "A brief description of the repo",
      //   language: "Python",
      //   stars: 12,
      //   forks: 3,
      //   url: "https://github.com/deepak-t-p/my-cool-project"
      // },
    ]
  },

  // ── Resume ──
  resume: {
    pdfPath: "deepak_resume_04_2026.pdf"
  },

  // ── Contact ──
  // Paste your form embed URL below. Works with any form service that provides
  // an iframe embed (forms.space, Formspree, Google Forms, Tally, etc.)
  contact: {
    formEmbedUrl: "https://bacterial-omelette-342.forms.space/019d789e-aa16-771c-86e7-929aacd96194",
    email: "deepaktp.tech@gmail.com",
    location: "Bangalore, Karnataka, India",
    availability: "Open to opportunities",
    // Optional: additional links displayed on the contact page
    links: [
      // { label: "Telegram", url: "https://t.me/yourhandle", icon: "✈" },
      // { label: "Discord", url: "https://discord.gg/xxx", icon: "💬" },
    ]
  }
};

// Make available globally
window.siteConfig = siteConfig;
