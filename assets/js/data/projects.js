// projects.js - Modular projects data (EN + AR)

export const projects = [
  {
    id: "ccms",
    title: {
      en: "CCMS – Citizens Complaints Management System",
      ar: "CCMS – نظام إدارة شكاوى المواطنين",
    },
    subtitle: {
      en: "Enterprise-Grade Public Service Request Platform",
      ar: "منصة مؤسسية لإدارة طلبات الخدمة العامة",
    },
    description: {
      en: "A robust, high-performance platform designed to streamline the lifecycle of citizen complaints. Enables seamless routing between Ministries, Governorates, and Branches with real-time tracking and advanced analytics. Built with Scalability, Observability, and modern design patterns.",
      ar: "منصة قوية وعالية الأداء مصممة لتبسيط دورة حياة شكاوى المواطنين. تتيح التوجيه السلس بين الوزارات والمحافظات والفروع مع التتبع اللحظي والتحليلات المتقدمة. مبنية مع التركيز على القابلية للتوسع والمراقبة وأنماط التصميم الحديثة.",
    },
    highlights: {
      en: [
        "AOP (Aspect-Oriented Programming) for logging, security & monitoring",
        "DAO Pattern for clean data access abstraction",
        "API Versioning for backward compatibility",
        "Caching + Apache JMeter stress testing",
        "Spatie Activity Log + deep Tracing & Auditing",
        "Automated Backups + Multi-channel Notifications",
        "Hierarchical Management (Ministries → Branches)",
        "Professional PDF Reports + Full i18n (AR/EN)",
      ],
      ar: [
        "AOP لفصل المخاوف العرضية (التسجيل، الأمان، المراقبة)",
        "نمط DAO لفصل طبقة الوصول إلى البيانات",
        "دعم إصدارات الـ API للتوافق المستقبلي",
        "التخزين المؤقت + اختبارات الضغط بـ Apache JMeter",
        "Spatie Activity Log + تتبع وتدقيق عميق",
        "نسخ احتياطي آلي + نظام إشعارات متعدد القنوات",
        "إدارة هرمية (وزارات ← فروع)",
        "تقارير PDF احترافية + دعم كامل للغتين",
      ],
    },
    tech: [
      "Laravel",
      "MySQL",
      "Spatie",
      "AOP",
      "DAO",
      "JMeter",
      "Caching",
      "i18n",
    ],
    links: {},
    status: "completed",
    featured: true,
    category: "enterprise",
  },
  {
    id: "platinum",
    title: {
      en: "Platinum Real Estate Platform",
      ar: "منصة بلاتينيوم للعقارات",
    },
    subtitle: {
      en: "Graduation Project – Construction & Real Estate ERP",
      ar: "مشروع التخرج – نظام ERP للعقارات والبناء",
    },
    description: {
      en: "Comprehensive platform for Platinum Real Estate company. Facilitates apartment purchasing and service requests. Provides company managers with financial monitoring and analytics for under-construction projects. Engineers use geofencing for site attendance verification and submit complete work reports.",
      ar: "منصة شاملة لشركة بلاتينيوم للعقارات. تسهل عملية شراء الشقق وطلب الخدمات. توفر لمديري الشركة مراقبة مالية وتحليلات للمشاريع قيد البناء. يستخدم المهندسون الـ Geofencing للتحقق من الحضور في موقع المشروع ورفع تقارير عمل كاملة.",
    },
    highlights: {
      en: [
        "Enterprise ERP (SOA Architecture): Engineered a real estate platform supporting apartment purchasing, analytics, and financial monitoring[cite: 10].",
        "DevOps & Geofencing: Fully Dockerized with S3 Storage integration; built Geofencing module for site attendance verification[cite: 10].",
        "AI Features: Integrated Generative AI APIs for automated interior design rendering and multi-language client request translations[cite: 10].",
        "Deployed on production server with full S3 object storage capabilities.",
      ],
      ar: [
        "ERP مؤسسي (معمارية SOA): بناء منصة عقارية تدعم شراء الشقق، التحليلات، والمراقبة المالية[cite: 10].",
        "DevOps و Geofencing: تطبيق الحاويات بـ Docker وتكامل S3، مع وحدة Geofencing للتحقق من حضور المهندسين[cite: 10].",
        "ميزات الذكاء الاصطناعي: دمج واجهات Generative AI لتوليد التصاميم الداخلية وترجمة الطلبات بلغات متعددة[cite: 10].",
        "نشر المنصة على سيرفر إنتاجي مع ربط تخزين السحاب S3.",
      ],
    },
    tech: [
      "Laravel",
      "Docker",
      "S3 Storage",
      "SOA",
      "Generative AI",
      "Geofencing",
      "MySQL",
    ],
    links: {
      github: "https://github.com/AliMoZaitoun/Platinum_back-end",
    },
    status: "completed",
    featured: true,
    category: "enterprise",
  },
  {
    id: "rectify",
    title: {
      en: "Rectify – SPOT Complex Complaints Platform",
      ar: "Rectify – منصة شكاوى مجمع SPOT",
    },
    subtitle: {
      en: "Multi-branch Complaints & Transparency System",
      ar: "نظام شكاوى وشفافية متعدد الفروع",
    },
    description: {
      en: "Complaints management platform for the SPOT complex which has multiple branches. Designed to improve complaint handling, correction processes, and transparency across all branches. Available as Web + Mobile. Backend follows the same solid architecture patterns used in the graduation project.",
      ar: "منصة إدارة شكاوى لمجمع SPOT الذي يضم فروعاً متعددة. مصممة لتحسين معالجة الشكاوى وعمليات التصحيح والشفافية عبر جميع الفروع. متوفرة كتطبيق ويب + موبايل. الباك إند يتبع نفس أنماط المعمارية القوية المستخدمة في مشروع التخرج.",
    },
    highlights: {
      en: [
        "AI Integration: Implemented Gemini API for automated complaint priority classification, AI agent responses, and root-cause analytics[cite: 10].",
        "Architecture & DevOps: Built multi-branch complaint workflow using Laravel, Docker, and S3 Storage with deep audit logging[cite: 10].",
        "Frontend: Developed a type-safe dashboard using React & TypeScript with modular Feature-Based Architecture[cite: 10].",
      ],
      ar: [
        "دمج الذكاء الاصطناعي: استخدام Gemini API للتصنيف التلقائي لأولوية الشكاوى ورسائل الرد وتحليلات الأسباب الجذرية[cite: 10].",
        "المعمارية والـ DevOps: بناء سير عمل الشكاوى متعدد الفروع باستعمال Laravel, Docker, S3 مع سجلات تدقيق عميقة[cite: 10].",
        "الفرونت إند: تطوير لوحة تحكم آمنة الأنماط بـ React & TypeScript وفق معمارية Feature-Based[cite: 10].",
      ],
    },
    tech: [
      "Laravel",
      "Docker",
      "AWS S3",
      "Gemini API",
      "React",
      "TypeScript",
      "Audit Logging",
    ],
    links: {
      github: "https://github.com/AliMoZaitoun/Rectify",
      frontend: "https://github.com/AliMoZaitoun/Rectify-UI",
    },
    status: "completed",
    featured: true,
    category: "enterprise",
  },
  {
    id: "paramedic",
    title: {
      en: "Smart Paramedic Notebook",
      ar: "المفكرة الذكية للمسعف",
    },
    subtitle: {
      en: "Field-Ready First Aid Quick Reference",
      ar: "مرجع سريع للإسعافات الأولية في الميدان",
    },
    description: {
      en: "This notebook is not a theoretical book — it is a rapid linking tool between what you learned in training and the real moment of intervention. In the field there is no time for long reading, so every lecture was condensed to give you the correct step immediately without distraction. Includes Dark Mode support.",
      ar: "هذه المفكرة ليست كتاباً نظرياً، بل أداة ربط سريعة بين ما تعلمته في التدريب وبين لحظة التدخل الحقيقي. في الميدان لا يوجد وقت للقراءة الطويلة، لذلك تم اختصار كل محاضرة لتمنحك الخطوة الصحيحة مباشرة دون تشتيت. تدعم الوضع الداكن.",
    },
    highlights: {
      en: [
        "Condensed lectures for instant field use",
        "Direct action steps – no fluff",
        "Dark Mode support",
        "Pure HTML / CSS / JS – lightweight & fast",
      ],
      ar: [
        "محاضرات مختصرة للاستخدام الميداني الفوري",
        "خطوات عمل مباشرة بدون حشو",
        "دعم الوضع الداكن",
        "HTML / CSS / JS نقي – خفيف وسريع",
      ],
    },
    tech: ["HTML", "CSS", "JavaScript", "Dark Mode"],
    links: {
      live: "https://alimozaitoun.github.io/Smart-Paramedic-Notebook/",
    },
    status: "completed",
    featured: false,
    category: "utility",
  },
  {
    id: "quran",
    title: {
      en: "Quran Memorization Platform + Parent Portal",
      ar: "منصة تحفيظ القرآن + بوابة الوالدين",
    },
    subtitle: {
      en: "Currently under active development",
      ar: "قيد التطوير الفعلي حالياً",
    },
    description: {
      en: "A comprehensive platform for managing Quran memorization (Hifz) with a dedicated parent portal to track children's progress. Experimental/demo version is currently being built.",
      ar: "منصة شاملة لإدارة تحفيظ القرآن مع بوابة مخصصة للوالدين لمتابعة تقدم أبنائهم. يجري العمل حالياً على نسخة تجريبية.",
    },
    highlights: {
      en: [
        "Hifz management system",
        "Parent progress tracking portal",
        "Experimental version in progress",
      ],
      ar: [
        "نظام إدارة التحفيظ",
        "بوابة متابعة تقدم الأبناء للوالدين",
        "نسخة تجريبية قيد العمل",
      ],
    },
    tech: ["Laravel", "In Progress"],
    links: {},
    status: "in-progress",
    featured: false,
    category: "education",
  },
];
