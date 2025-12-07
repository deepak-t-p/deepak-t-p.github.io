// ====================================
// Portfolio Configuration File
// ====================================
// Edit this file to update your portfolio content
// No need to touch HTML files!

const portfolioConfig = {

    // ====================================
    // Personal Information
    // ====================================
    personal: {
        name: "Deepak",
        title: "Assistant Manager - Finance",
        company: "JSW Group",
        email: "deepak@example.com",
        phone: "+91 XXXXX XXXXX",
        location: "Hyderabad, India",
        profileImage: "assets/img/profile/avatar.jpg",
        resumePDF: "assets/pdf/Deepak_Resume.pdf",

        // About section
        about: {
            greeting: "Welcome, I'm",
            description: [
                "Finance professional with 4+ years of experience in financial analysis, accounting, and audit. Specializing in SAP, Tally, and advanced Excel for data-driven financial decision making.",
                "I am a dedicated finance professional currently serving as Assistant Manager - Finance at JSW Group. With a strong educational background including an MBA in Finance from ICFAI Business School and a B.Com from Osmania University, I bring comprehensive expertise in financial management, analysis, and reporting.",
                "My expertise spans across various financial technologies and methodologies including SAP, Tally, Advanced Excel, and Finacle. I specialize in financial analysis, GST compliance, TDS management, and accounts reconciliation. I'm passionate about leveraging technology to drive financial efficiency and accuracy."
            ]
        },

        // Social media links
        social: {
            linkedin: "https://linkedin.com/in/deepak",
            github: "https://github.com/deepak",
            email: "mailto:deepak@example.com",
            phone: "tel:+91XXXXXXXXXX"
        },

        // Typing animation texts
        typingTexts: [
            "Finance Professional",
            "Financial Analyst",
            "SAP Expert",
            "Tally Specialist",
            "Excel Expert"
        ]
    },

    // ====================================
    // Stats/Achievements Numbers
    // ====================================
    stats: [
        { icon: "fas fa-briefcase", number: 4, label: "Years Experience", suffix: "+" },
        { icon: "fas fa-project-diagram", number: 50, label: "Projects Completed", suffix: "+" },
        { icon: "fas fa-certificate", number: 3, label: "Certifications", suffix: "" },
        { icon: "fas fa-award", number: 100, label: "Success Rate %", suffix: "" }
    ],

    // ====================================
    // Services/What I Do
    // ====================================
    services: [
        {
            icon: "fas fa-chart-line",
            title: "Financial Analysis",
            description: "Expert in analyzing financial data, creating comprehensive reports, and providing strategic insights for business decision-making.",
            gradient: "gradient-1"
        },
        {
            icon: "fas fa-calculator",
            title: "Accounting & Audit",
            description: "Proficient in maintaining accurate financial records, conducting audits, and ensuring compliance with regulatory standards.",
            gradient: "gradient-2"
        },
        {
            icon: "fas fa-file-invoice-dollar",
            title: "GST & Tax Management",
            description: "Specialized in GST compliance, TDS processing, and tax planning to optimize financial operations.",
            gradient: "gradient-3"
        },
        {
            icon: "fas fa-laptop-code",
            title: "Financial Systems",
            description: "Expert in SAP FICO, Tally, Advanced Excel, and Power BI for efficient financial management and reporting.",
            gradient: "gradient-4"
        },
        {
            icon: "fas fa-balance-scale",
            title: "Reconciliation",
            description: "Skilled in accounts reconciliation, variance analysis, and maintaining financial accuracy across all transactions.",
            gradient: "gradient-5"
        },
        {
            icon: "fas fa-chart-pie",
            title: "Financial Reporting",
            description: "Creating detailed financial reports, dashboards, and presentations for stakeholders and management.",
            gradient: "gradient-6"
        }
    ],

    // ====================================
    // Work Experience
    // ====================================
    experience: [
        {
            date: "Nov 2023 - Present",
            title: "Assistant Manager - Finance",
            company: "JSW Group",
            description: [
                "Managing financial operations and reporting for a major industrial group",
                "Implementing SAP FICO S/4 HANA for improved financial management",
                "Coordinating with cross-functional teams for budget planning and analysis",
                "Ensuring compliance with GST, TDS, and other regulatory requirements"
            ],
            tags: ["SAP FICO", "Financial Analysis", "GST", "TDS"]
        },
        {
            date: "Jan 2021 - Oct 2023",
            title: "Finance Executive",
            company: "Previous Organization",
            description: [
                "Managed day-to-day accounting operations using Tally ERP",
                "Prepared financial statements and management reports",
                "Conducted account reconciliations and variance analysis",
                "Assisted in annual audits and tax filings"
            ],
            tags: ["Tally", "Audit", "Reconciliation"]
        },
        {
            date: "Jun 2020 - Dec 2020",
            title: "Accounts Intern",
            company: "Finance Firm",
            description: [
                "Assisted in maintaining books of accounts",
                "Learned practical applications of accounting software",
                "Supported senior accountants in financial reporting"
            ],
            tags: ["Accounting", "Excel"]
        }
    ],

    // ====================================
    // Education
    // ====================================
    education: [
        {
            year: "2018 - 2020",
            degree: "MBA in Finance",
            institution: "ICFAI Business School",
            description: "Specialized in Financial Management, Corporate Finance, and Investment Analysis",
            icon: "fas fa-university"
        },
        {
            year: "2015 - 2018",
            degree: "B.Com",
            institution: "Osmania University",
            description: "Foundation in Commerce, Accounting, and Business Studies",
            icon: "fas fa-book"
        }
    ],

    // ====================================
    // Skills (Organized by Category)
    // ====================================
    skills: {
        "Software Applications": [
            { name: "SAP FICO S/4 HANA", percentage: 90, gradient: "gradient-1" },
            { name: "Tally ERP", percentage: 95, gradient: "gradient-2" },
            { name: "Advanced Excel", percentage: 92, gradient: "gradient-3" },
            { name: "Power BI", percentage: 85, gradient: "gradient-4" },
            { name: "Finacle", percentage: 80, gradient: "gradient-5" }
        ],
        "Core Competencies": [
            { name: "Financial Analysis", percentage: 93, gradient: "gradient-6" },
            { name: "GST Compliance", percentage: 90, gradient: "gradient-1" },
            { name: "TDS Management", percentage: 88, gradient: "gradient-2" },
            { name: "Accounts Reconciliation", percentage: 91, gradient: "gradient-3" },
            { name: "Audit & Compliance", percentage: 87, gradient: "gradient-4" }
        ]
    },

    // ====================================
    // Certifications
    // ====================================
    certifications: [
        {
            title: "Stock Market",
            issuer: "Professional Certification",
            icon: "fas fa-chart-bar",
            badge: "Certified"
        },
        {
            title: "Advanced Excel & Power BI",
            issuer: "Data Analytics Certification",
            icon: "fas fa-table",
            badge: "Certified"
        },
        {
            title: "SAP FICO S/4 HANA",
            issuer: "SAP Certified",
            icon: "fas fa-laptop",
            badge: "Certified"
        }
    ],

    // ====================================
    // Portfolio Projects
    // ====================================
    projects: [
        {
            category: "financial",
            title: "SAP FICO Implementation",
            description: "Led the implementation of SAP FICO S/4 HANA system at JSW Group, streamlining financial processes and improving reporting accuracy by 35%.",
            tags: ["SAP FICO", "S/4 HANA", "Implementation"],
            icon: "fas fa-chart-line",
            gradient: "gradient-1"
        },
        {
            category: "reporting",
            title: "MIS Dashboard Development",
            description: "Created comprehensive MIS dashboards using Power BI for real-time financial tracking and executive decision-making.",
            tags: ["Power BI", "Excel", "Dashboards"],
            icon: "fas fa-file-invoice",
            gradient: "gradient-2"
        },
        {
            category: "financial",
            title: "Budget Planning & Analysis",
            description: "Developed comprehensive budget planning models and variance analysis reports for departmental cost optimization.",
            tags: ["Budgeting", "Analysis", "Excel"],
            icon: "fas fa-calculator",
            gradient: "gradient-3"
        },
        {
            category: "automation",
            title: "Tally ERP Automation",
            description: "Automated invoice processing and reconciliation workflows in Tally, reducing manual effort by 60% and improving accuracy.",
            tags: ["Tally", "Automation", "VBA"],
            icon: "fas fa-cogs",
            gradient: "gradient-4"
        },
        {
            category: "reporting",
            title: "GST Compliance System",
            description: "Implemented end-to-end GST compliance system with automated filing and reconciliation processes.",
            tags: ["GST", "Compliance", "Tally"],
            icon: "fas fa-receipt",
            gradient: "gradient-5"
        },
        {
            category: "financial",
            title: "Bank Reconciliation System",
            description: "Designed and implemented automated bank reconciliation system reducing reconciliation time from days to hours.",
            tags: ["Reconciliation", "Excel VBA", "Automation"],
            icon: "fas fa-balance-scale",
            gradient: "gradient-6"
        }
    ],

    // ====================================
    // Key Achievements
    // ====================================
    achievements: [
        {
            icon: "fas fa-trophy",
            title: "Reduced Processing Time",
            description: "Reduced month-end closing time by 40% through process optimization"
        },
        {
            icon: "fas fa-award",
            title: "Cost Savings",
            description: "Identified and implemented cost-saving measures worth ₹2.5 Crores annually"
        },
        {
            icon: "fas fa-medal",
            title: "Zero Compliance Issues",
            description: "Maintained 100% compliance rating in all statutory audits for 3 consecutive years"
        }
    ],

    // ====================================
    // Companies/Career Journey
    // ====================================
    companies: [
        {
            name: "JSW Group",
            role: "Assistant Manager - Finance",
            period: "2023 - Present",
            icon: "fas fa-building"
        },
        {
            name: "Previous Organization",
            role: "Finance Executive",
            period: "2021 - 2023",
            icon: "fas fa-building"
        }
    ],

    // ====================================
    // Contact Information
    // ====================================
    contactInfo: [
        {
            icon: "fas fa-envelope",
            title: "Email",
            text: "deepak@example.com",
            link: "mailto:deepak@example.com",
            linkText: "Send Email",
            gradient: "gradient-1"
        },
        {
            icon: "fas fa-phone",
            title: "Phone",
            text: "+91 XXXXX XXXXX",
            link: "tel:+91XXXXXXXXXX",
            linkText: "Call Now",
            gradient: "gradient-2"
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Location",
            text: "Hyderabad, India",
            link: "#",
            linkText: "View Map",
            gradient: "gradient-3"
        },
        {
            icon: "fab fa-linkedin",
            title: "LinkedIn",
            text: "Connect with me",
            link: "https://linkedin.com/in/deepak",
            linkText: "View Profile",
            gradient: "gradient-4"
        }
    ],

    // ====================================
    // Portfolio Filters
    // ====================================
    portfolioFilters: [
        { id: "all", label: "All Projects", icon: "fas fa-th" },
        { id: "financial", label: "Financial Analysis", icon: "fas fa-chart-line" },
        { id: "reporting", label: "Reporting", icon: "fas fa-file-invoice" },
        { id: "automation", label: "Automation", icon: "fas fa-cogs" }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
