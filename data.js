const userDetails = {
    name: "Raj Yadav",
    designation: "Staff Engineer",
    description: "Software Engineer with 8+ years of experience designing, building, and scaling distributed backend systems in production. Strong background in authentication and authorization platforms, including multi-tenant SSO and access control systems, with hands-on experience across web and mobile applications. Experienced in system design, performance optimization, and providing technical leadership across backend, frontend, and mobile teams.",
    picture: {
        src: "raj.jpg", link: "https://www.linkedin.com/in/lazydeveloperdotdev",
    },
    startDate: "01 Jul 2017",
    updateDate: "11 Mar 2024",
    links: [{
        icon: "fa fa-envelope-open",
        tooltip: "Send mail",
        label: "rajyadav_np@outlook.com",
        link: "mailto:rajyadav_np@outlook.com?subject=Job%20offer",
    }, {
        icon: "fa fa-map-marker-alt",
        tooltip: "View in maps",
        label: "Bangalore, India",
        link: "https://goo.gl/maps/srwPcAxy5S32",
    }, {
        icon: "fa fa-mobile-alt", tooltip: "Call", label: "+91-733 8305986", link: "tel:+917338305986",
    }, {
        icon: "fa fa-globe", tooltip: "Visit", label: "www.lazydeveloper.dev", link: "https://www.lazydeveloper.dev",
    },],
    sns: [{
        icon: "fa fa-link", tooltip: "Lazy Developer", link: "https://lazydeveloper.dev",
    }, {
        icon: "fab fa-github", tooltip: "Github", link: "https://github.com/lazydeveloperdotdev",
    }, {
        icon: "fab fa-stack-overflow",
        tooltip: "Stack Overflow",
        link: "https://stackoverflow.com/users/6230166/raj-yadav",
    }, {
        icon: "fab fa-linkedin", tooltip: "LinkedIn", link: "https://www.linkedin.com/in/lazydeveloperdotdev/",
    }, {
        icon: "fab fa-quora", tooltip: "Quora", link: "https://www.quora.com/profile/Raj-Yadav-133",
    },],
    qrCode: "qr-code.png",
};

const skills = [{
    icon: "fa fa-project-diagram",
    title: "System Design & Architecture",
    scale: 5,
    since: "01-10-2020",
    tech: ["Microservices", "Distributed Systems", "Event-Driven Architecture", "Scalability & Reliability"],
    lib: ["OAuth2 / OIDC / SSO", "RBAC / ReBAC"],
}, {
    icon: "fab fa-golang",
    title: "Backend Engineering",
    scale: 5,
    since: "01-07-2017",
    tech: ["Go", "Python", "gRPC", "Django", "Flask",],
    lib: ["Production Systems", "API Design", "Concurrency", "Service Ownership"],
}, {
    icon: "fab fa-react",
    title: "Frontend & Mobile",
    scale: 5,
    since: "11-01-2017",
    till: "",
    tech: ["ReactJS", "Flutter", "Android"],
    lib: ["Performance Optimizations", "Lazy Loading"],
}, {
    icon: "fa fa-database",
    title: "Databases & Analytics",
    scale: 5,
    since: "07-01-2017",
    tech: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse"],
    lib: ["OLAP / OLTP", "Query Optimization", "Schema Design"],
}, {
    icon: "fa fa-chart-line",
    title: "Performance & Observability",
    scale: 5,
    tech: ["Performance Optimization", "Monitoring", "Observability", "Distributed Tracing", "APM"],
    lib: ["Newrelic", "FluentBit"],
}, {
    icon: "fa fa-server",
    title: "Cloud & Infrastructure",
    scale: 4,
    since: "01-02-2021",
    tech: ["Amazon AWS", "GCP", "CI/CD", "Kubernetes"],
    lib: ["NGINX", "Kafka", "Docker",],
}, {
    icon: "fa fa-users",
    title: "Leadership & Mentorship",
    scale: 5,
    since: "01-06-2019",
    tech: ["Technical Leadership", "Architecture Review", "Engineering Standards"],
    lib: ["Code Review", "Mentorship", "Team Building"],
}, {
    icon: "fab fa-git-alt",
    title: "VCS & Project Management",
    since: "01-07-2017",
    scale: 5,
    tech: ["Git"],
    lib: ["Jira", "Confluence"],
},];

const languages = [{
    icon: "A", name: "English", scale: 5, proficiency: "Full Professional Proficiency",
}, {
    icon: "&#x0905;", name: "Hindi", scale: 5, proficiency: "Full Professional Proficiency",
}, {
    icon: "&#x0905;", name: "Nepali", scale: 5, proficiency: "Native or Bilingual Proficiency",
},];

const interests = [{
    icon: "fa fa-swimming-pool", title: "Swimming",
}, {
    icon: "fa fa-paint-brush", title: "Sketching",
}, {
    icon: "fas fa-plane-departure", title: "Travelling",
},];

const experiences = [{
    position: "Staff Engineer",
    company: "Sanas.AI, Bangalore",
    duration: "Feb 2023 - Present",
    tech: ["OAuth/SSO", "Go", "React.JS", "Flutter", "ClickHouse"],
    achievements: [
        "Architected and owned a multi-client SSO authentication and authorization platform used across multiple products.",
        "Designed analytics architecture using ClickHouse, achieving 80-90% improvement in query performance.",
        "Led schema and infrastructure optimizations for multi-tenant systems, resulting in ~30% cost reduction.",
        "Defined and enforced backend architecture standards (onion architecture) across engineering teams.",
        "Established observability and monitoring practices, reducing MTTR by ~60%.",
        "Improved end-to-end system performance across backend and frontend, including reducing frontend re-renders and application load times.",
        "Mentored senior engineers and led system design and architecture reviews."
    ],
}, {
    position: "Full Stack - SDE III",
    company: "ShopUp, Bangalore",
    duration: "Dec 2022 - Jan 2023",
    tech: ["Go", "gRPC", "AWS", "React.JS", "Flutter", "Android (Native)"],
    achievements: ["Designed microservices architecture using Golang (gRPC) for high-throughput, low-latency backend systems handling 10K+ requests per second.", "Architected cross-platform mobile solutions using Flutter, reducing development time by 50% while maintaining native-level performance.", "Built scalable web applications with React.JS, focusing on component reusability and optimal rendering performance.", "Led technical initiatives across cross-functional teams, driving architectural decisions that improved system reliability and developer velocity.", "Established design patterns and architectural guidelines that became engineering standards across multiple teams.",],
}, {
    position: "Full Stack - SDE II",
    company: "Falabella, Bangalore",
    duration: "Oct 2020 - Nov 2022",
    tech: ["Python (Django)", "GCP", "Flutter", "React.JS"],
    achievements: ["Designed and implemented event-driven microservices using Django and GCP Pub/Sub, supporting 1M+ daily transactions.", "Architected Flutter applications with clean architecture principles, enabling rapid feature development and seamless cross-platform experiences.", "Built responsive web interfaces with React.JS, improving user engagement metrics by 35% through performance optimization.", "Established comprehensive testing strategies and CI/CD pipelines, reducing production incidents by 45%.", "Led technical design reviews and architecture discussions, ensuring alignment with business objectives and scalability requirements.", "Integrated complex third-party systems and APIs, creating abstraction layers that simplified future integrations.", "Optimized critical database queries and implemented caching strategies, reducing response times by 60%.",],
}, {
    position: "Team Lead and Full Stack Developer",
    company: "Netzary Infodynamics",
    duration: "Jul 2017 - Sep 2020",
    printBreak: true,
    tech: ["Python (Django)", "NGINX", "E2E Networks", "Android (Native)", "Flutter", "React.JS"],
    achievements: ["Led engineering team of 5+ developers, coordinating project delivery and establishing development standards and workflows.", "Architected and delivered mobile applications for Android and iOS using both native and Flutter frameworks, serving 50K+ users.", "Designed scalable backend systems using Django and PostgreSQL, handling complex business logic and data processing.", "Established code quality practices including comprehensive testing, code reviews, and technical documentation standards.", "Integrated multiple third-party services and APIs, creating unified interfaces for seamless data flow across systems.", "Drove technical decisions on architecture, technology stack selection, and development processes.", "Mentored junior developers on best practices, design patterns, and problem-solving approaches.",],
},];

const education = [{
    board: "Bangalore University",
    school: "RR Institutions/Bangalore, IN",
    concentration: "Bachelor of Computer Application",
    percentage: 86,
    duration: "Apr 2014 - Jun 2017",
    achievements: ["Developed Android application with Django backend for university cultural event, demonstrating early full-stack capabilities.", "Designed online University data processing system using ASP MVC and MS SQL Express, showcasing system design skills.", "Won inter-college application development competition, demonstrating technical excellence and competitive edge.",],
}, {
    board: "Higher Secondary Education Board (HSEB)",
    school: "Dang Valley College/Dang, Nepal",
    concentration: "10+2 (Science - PCM)",
    percentage: 53,
    duration: "Apr 2011 - Mar 2013",
    achievements: [],

}, {
    board: "Private And Boarding School Organization of Nepal (PABSON)",
    school: "Buddha Jyoti HSS/Gadhawa, Nepal",
    concentration: "School Leaving Certificate (SLC)",
    percentage: 68,
    duration: "Apr 1999 - Mar 2011",
    achievements: [],
},];

const personalProjects = [{
    name: "Flutter Packages",
    description: "r_nav_n_sheet, time_dropper, safe_device_check and more",
    duration: "2020 - 2022",
    tech: ["Flutter", "Dart", "Android", "Kotlin", "iOS", "Swift"],
    refs: [{
        icon: "fa fa-link", tooltip: "Check it out", url: "https://pub.dev/publishers/lazydeveloper.dev/packages",
    },],
}, {
    name: "rBase",
    description: "Agentic AI knowledge-base system enabling conversational querying over crawled web content.",
    duration: "Jul 2024 - Present",
    tech: ["Python", "BeautifulSoup", "FAISS", "SBERT", "Gemma 3", "RAG", "Web Scraping"],
    refs: [],
}, {
    name: "Others",
    description: "Packages and contributions for Python, Android, Web, Flutter ecosystems",
    duration: "2018 - ...",
    tech: ["Python", "Kotlin", "Dart", "JavaScript"],
    refs: [{
        icon: "fa fa-link", tooltip: "Check it out", url: "https://github.com/lazydeveloperdotdev?tab=repositories",
    },],
},];
