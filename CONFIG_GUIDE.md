# Portfolio Configuration Guide

## 📖 Overview

Your portfolio is now **100% config-driven**! All content is loaded from a single `config.js` file. Simply edit the config file to update your entire portfolio—no need to touch HTML files!

## 🎯 Quick Start

1. **Edit Content**: Open `config.js` and modify any values
2. **View Changes**: Refresh your browser to see updates instantly
3. **No HTML edits needed**: Everything is data-driven!

## 📝 Configuration Sections

### Personal Information
```javascript
personal: {
    name: "Your Name",
    title: "Your Job Title",
    company: "Company Name",
    email: "your@email.com",
    phone: "+91 XXXXX XXXXX",
    location: "City, Country",
    // ... more fields
}
```

### Stats/Achievements
```javascript
stats: [
    { icon: "fas fa-briefcase", number: 4, label: "Years Experience", suffix: "+" },
    // Add more stats...
]
```

### Services/What I Do
```javascript
services: [
    {
        icon: "fas fa-chart-line",
        title: "Service Name",
        description: "What you offer...",
        gradient: "gradient-1"  // gradient-1 to gradient-6
    },
    // Add unlimited services...
]
```

### Work Experience
```javascript
experience: [
    {
        date: "Nov 2023 - Present",
        title: "Job Title",
        company: "Company Name",
        description: [
            "Responsibility 1",
            "Responsibility 2"
        ],
        tags: ["Skill1", "Skill2"]
    },
    // Add unlimited positions...
]
```

### Education
```javascript
education: [
    {
        year: "2018 - 2020",
        degree: "Degree Name",
        institution: "School Name",
        description: "Brief description",
        icon: "fas fa-university"
    },
    // Add more degrees...
]
```

### Skills
```javascript
skills: {
    "Category Name": [
        { name: "Skill Name", percentage: 90, gradient: "gradient-1" },
        // Add more skills...
    ],
    "Another Category": [
        // More skills...
    ]
}
```

### Projects/Portfolio
```javascript
projects: [
    {
        category: "financial",  // Used for filtering
        title: "Project Name",
        description: "Project description...",
        tags: ["Tech1", "Tech2"],
        icon: "fas fa-chart-line",
        gradient: "gradient-1"
    },
    // Add unlimited projects...
]
```

### Certifications
```javascript
certifications: [
    {
        title: "Certification Name",
        issuer: "Issuing Organization",
        icon: "fas fa-certificate",
        badge: "Certified"
    },
    // Add more certifications...
]
```

## 🎨 Available Icons

Use Font Awesome icons (6.4.0). Examples:
- `fas fa-chart-line` - Chart
- `fas fa-calculator` - Calculator
- `fas fa-briefcase` - Briefcase
- `fas fa-university` - University
- `fab fa-linkedin` - LinkedIn

[Browse all icons →](https://fontawesome.com/icons)

## 🌈 Available Gradients

Use these gradient classes:
- `gradient-1` - Blue gradient
- `gradient-2` - Purple gradient
- `gradient-3` - Pink gradient
- `gradient-4` - Orange gradient
- `gradient-5` - Green gradient
- `gradient-6` - Teal gradient

## ✅ How It Works

1. **config.js** - Contains all your data
2. **config-loader.js** - Reads config and generates HTML
3. **HTML files** - Just templates, filled by config

## 🔄 Adding New Items

### Add a New Project
```javascript
projects: [
    // Existing projects...
    {
        category: "automation",
        title: "New Automation Project",
        description: "Automated workflow using Python",
        tags: ["Python", "Automation", "API"],
        icon: "fas fa-robot",
        gradient: "gradient-4"
    }
]
```

### Add a New Skill
```javascript
skills: {
    "Software Applications": [
        // Existing skills...
        { name: "Python", percentage: 85, gradient: "gradient-6" }
    ]
}
```

### Add New Work Experience
```javascript
experience: [
    {
        date: "Dec 2020 - Oct 2021",
        title: "Senior Accountant",
        company: "Finance Corp",
        description: [
            "Managed accounts payable/receivable",
            "Prepared monthly financial statements"
        ],
        tags: ["Accounting", "QuickBooks"]
    },
    // Existing experience...
]
```

## 🗑️ Removing Items

Simply delete the object from the array:

```javascript
// Before:
projects: [
    { title: "Project 1", ... },
    { title: "Project 2", ... },  // ← Delete this
    { title: "Project 3", ... }
]

// After:
projects: [
    { title: "Project 1", ... },
    { title: "Project 3", ... }
]
```

## 📊 Portfolio Filters

Add or remove filter categories:

```javascript
portfolioFilters: [
    { id: "all", label: "All Projects", icon: "fas fa-th" },
    { id: "financial", label: "Financial", icon: "fas fa-chart-line" },
    { id: "reporting", label: "Reporting", icon: "fas fa-file-invoice" },
    // Add your own...
    { id: "custom", label: "Custom Category", icon: "fas fa-star" }
]
```

**Important**: Make sure project `category` matches filter `id`.

## 🎯 Pro Tips

1. **Consistent Data**: Keep percentages between 0-100
2. **Icon Names**: Use exact Font Awesome classes
3. **Gradients**: Stick to gradient-1 through gradient-6
4. **Arrays**: Use square brackets `[]`
5. **Objects**: Use curly braces `{}`
6. **Strings**: Use quotes `"text"`
7. **Numbers**: No quotes `90`

## 🔍 Validation

After editing, check browser console (F12) for errors:
- "Configuration file not loaded!" - Include config.js in HTML
- "portfolioConfig is not defined" - Check syntax errors in config.js
- Other errors - Look for missing commas, brackets, or quotes

## 📦 Deployment

After making changes:

```bash
git add config.js
git commit -m "Update portfolio content"
git push
```

Changes will appear on `https://deepak-t-p.github.io` within minutes!

## 🎓 Examples

### Change Your Name
```javascript
personal: {
    name: "Deepak Kumar",  // ← Edit this
    // ...
}
```

### Update Stats
```javascript
stats: [
    { icon: "fas fa-briefcase", number: 5, label: "Years Experience", suffix: "+" },
    //  ...                             ↑ Change number
]
```

### Add Social Link
```javascript
personal: {
    social: {
        linkedin: "https://linkedin.com/in/your-profile",
        github: "https://github.com/your-username",
        twitter: "https://twitter.com/your-handle",  // ← Add new
        // ...
    }
}
```

## ❓ Need Help?

- Check browser console for errors
- Verify JSON syntax at [JSONLint](https://jsonlint.com/)
- Review existing examples in config.js
- All changes are instant—just refresh!

---

**Remember**: `config.js` is your single source of truth. Edit it to update your entire portfolio!
