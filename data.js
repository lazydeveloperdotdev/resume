const userDetails = {
    name: "Raj Yadav",
    designation: "Staff Engineer",
    description: "Software Engineer with 8+ years of experience designing, building, and scaling distributed backend systems in production. Strong background in authentication and authorization platforms, including multi-tenant SSO and access control systems, with hands-on experience across web and mobile applications. Experienced in system design, performance optimization, and providing technical leadership across backend, frontend, and mobile teams.",
    picture: {
        src: "raj.jpg", link: "https://www.linkedin.com/in/lazydeveloperdotdev",
    },
    startDate: "01 Jul 2017",
    updateDate: "11 Dec 2025",
    links: [{
        icon: "fa fa-at",
        tooltip: "Send mail",
        label: "rajyadav_np@outlook.com",
        link: "mailto:rajyadav_np@outlook.com?subject=Job%20offer",
    }, {
        icon: "fa fa-map-marker-alt",
        tooltip: "View in maps",
        label: "Bangalore, India",
        link: "https://maps.app.goo.gl/pux7EqEUnDoRKnNs8",
    }, {
        icon: "fa fa-phone", tooltip: "Call", label: "+91-733 8305986", link: "tel:+917338305986",
    }, {
        icon: "fa fa-link", tooltip: "Visit", label: "www.lazydeveloper.dev", link: "https://www.lazydeveloper.dev",
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
    icon: "fa fa-cubes",
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
    tech: ["React.JS", "Flutter", "Android"],
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
    icon: "fa fa-code-branch",
    title: "VCS & Project Management",
    since: "01-07-2017",
    scale: 5,
    printBreak: true,
    tech: ["Git"],
    lib: ["Jira", "Confluence"],
},];

const languages = [{
    icon: "https://flagsapi.com/US/flat/32.png",
    name: "English",
    scale: 5,
    proficiency: "Full Professional Proficiency",
}, {
    icon: "https://flagsapi.com/IN/flat/32.png", name: "Hindi", scale: 5, proficiency: "Full Professional Proficiency",
}, {
    icon: "https://flagsapi.com/NP/flat/32.png",
    name: "Nepali",
    scale: 5,
    proficiency: "Native or Bilingual Proficiency",
},];

const interests = [{
    icon: "fa fa-person-swimming", title: "Swimming",
}, {
    icon: "fa fa-paint-brush", title: "Sketching",
}, {
    icon: "fas fa-plane-departure", title: "Travelling",
},];

const experiences = [{
    position: "Staff Engineer",
    company: "Sanas.AI, Bangalore",
    duration: "Feb 2023 - Present",
    tech: ["Go", "OAuth2 / SSO", "AWS", "ClickHouse", "React.JS", "Flutter",],
    achievements: ["Architected and owned a multi-client OAuth2/SSO platform powering authentication across multiple products.", "Designed analytics systems using ClickHouse, achieving 80-90% query performance improvements.", "Led multi-tenant schema and infrastructure optimizations, driving ~30% reduction in platform costs.", "Defined backend architecture standards (onion architecture) and led system design reviews across teams.", "Established observability and monitoring practices, reducing MTTR by ~60%.", "Improved end-to-end performance across backend and frontend, including API latency and frontend rendering.", "Mentored senior engineers and provided technical leadership on scalability and reliability initiatives."],
}, {
    position: "SDE III",
    company: "ShopUp, Bangalore",
    duration: "Dec 2022 - Jan 2023",
    tech: ["Go", "gRPC", "AWS", "React.JS", "Flutter", "Android"],
    achievements: ["Designed high-throughput microservices using Go and gRPC, handling 10K+ requests per second.", "Architected cross-platform mobile applications with Flutter, reducing development time by 50%.", "Built scalable React.JS web applications with focus on performance and component reusability.", "Led cross-team technical initiatives, improving system reliability and developer productivity.", "Established architectural patterns and design guidelines adopted across multiple teams."],
}, {
    position: "SDE II",
    company: "Falabella, Bangalore",
    duration: "Oct 2020 - Nov 2022",
    tech: ["Python", "GCP", "Flutter", "React.JS"],
    achievements: ["Architected event-driven microservices using Django and GCP Pub/Sub, supporting 1M+ daily transactions.", "Defined clean architecture for Flutter applications, improving maintainability and release velocity.", "Led React.JS frontend performance optimization, increasing user engagement by 35%.", "Established automated testing and CI/CD pipelines, reducing production incidents by 45%.", "Owned system design decisions and scalability planning aligned with business requirements.", "Optimized database queries and caching strategies, reducing response times by 60%."],
}, {
    position: "Team Lead & SDE",
    company: "Netzary Infodynamics",
    duration: "Jul 2017 - Sep 2020",
    printBreak: true,
    tech: ["Python", "NGINX", "E2E Networks", "Android", "Flutter", "React.JS"],
    achievements: ["Led a team of 5+ engineers, delivering multiple web and mobile products end-to-end.", "Architected and delivered Android, iOS, and Flutter applications serving 50K+ users.", "Designed scalable backend systems with Django and PostgreSQL for complex business workflows.", "Established engineering best practices including testing, code reviews, and documentation.", "Integrated multiple third-party APIs, designing abstraction layers for scalable integrations.", "Mentored junior engineers on system design, clean code, and software engineering fundamentals."],
}];

const education = [{
    board: "Bangalore University",
    school: "RR Institutions/Bangalore, IN",
    concentration: "Bachelor of Computer Application",
    percentage: 86,
    duration: "April 2014 - June 2017",
    achievements: ["Developed Android application with Django backend for university cultural event, demonstrating early full-stack capabilities.", "Designed online University data processing system using ASP MVC and MS SQL Express, showcasing system design skills.", "Won inter-college application development competition, demonstrating technical excellence and competitive edge.",],
}, {
    board: "Higher Secondary Education Board (HSEB)",
    school: "Dang Valley College/Dang, Nepal",
    concentration: "10+2 (Science - PCM)",
    percentage: 53,
    duration: "April 2011 - March 2013",
    achievements: [],

}, {
    board: "Private And Boarding School Organization of Nepal (PABSON)",
    school: "Buddha Jyoti HSS/Gadhawa, Nepal",
    concentration: "School Leaving Certificate (SLC)",
    percentage: 68,
    duration: "April 1999 - March 2011",
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
