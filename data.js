const userDetails = {
    name: "Raj Yadav",
    designation: "Full Stack Software Developer",
    description: "A multi-skilled and dedicated IT professional with over %expYears% years of experience, adept in software development, well-versed in different programming languages. Well-rounded experience in OOPs, mobile development and user-centered design. A prodigy in learning new technologies. Strong background in team management and delegation.",
    picture: {
        src: "raj.jpeg", link: "https://www.linkedin.com/in/lazydeveloperdotdev",
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
    icon: "fab fa-python",
    title: "Python",
    scale: 5,
    since: "07-01-2017",
    tech: ["Python", "Django", "pip"],
    lib: ["TensorFlow", "OpenCV", "celery", "geodjango", "channels", "confluent-kafka",],
}, {
    icon: "fab fa-golang",
    title: "GoLang",
    scale: 4,
    since: "12-01-2022",
    tech: ["Go", "gRPC"],
    lib: ["Gorm", "Ginkgo"],
}, {
    icon: "fa fa-database",
    title: "Databases",
    scale: 5,
    since: "07-01-2017",
    tech: ["PostgreSQL", "MySQL", "NoSQL", "Redis"],
    lib: ["PostGIS"],
}, {
    icon: "fa fa-server",
    title: "Server & More",
    scale: 4,
    tech: ["Shell", "Amazon AWS", "GCP"],
    lib: ["NGINX", "Kafka", "Docker"],
}, {
    icon: "fab fa-react",
    title: "React.JS",
    scale: 5,
    since: "11-01-2017",
    tech: ["JavaScript", "TypeScript", "npm"],
    lib: ["Redux", "FCM"],
}, {
    icon: "<div class='flutter-icon'></div>",
    title: "Flutter",
    scale: 5,
    since: "01-01-2018",
    tech: ["Dart", "pub"],
    lib: ["Provider", "BLoC", "GetX", "Scoped Model", "Firebase"],
}, {
    icon: "fab fa-android",
    title: "Android",
    scale: 5,
    since: "07-01-2017",
    tech: ["Java", "Kotlin", "XML", "Gradle"],
    lib: ["RxJava", "Room", "LiveData", "Retrofit", "Firebase"],
}, {
    icon: "fa fa-globe",
    title: "Web",
    scale: 5,
    since: "07-01-2017",
    tech: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"],
    lib: ["jQuery", "Bootstrap", "UIKit"],
}, {
    icon: "fab fa-apple",
    title: "iOS",
    scale: 1,
    since: "01-02-2018",
    to: "10-01-2020",
    tech: ["Swift", "Cocoapod"],
    lib: ["Alamofire", "SQLite.swift", "Firebase"],
}, {
    icon: "fab fa-git-alt", title: "VCS & Issue Tracking", scale: 5, tech: ["Git"], lib: ["Jira"],
}, {
    icon: "fab fa-app-store-ios",
    title: "Applications",
    scale: 5,
    tech: ["Adobe Illustrator", "Microsoft Office"],
    lib: [],
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

const personal = [{
    icon: "fa fa-birthday-cake", label: "Born", value: "Dec 05, 1994",
}, {
    icon: "fa fa-user", label: "Father's Name", value: "Ram Bahadur Yadav",
}, {
    icon: "fa fa-language", label: "Nationality", value: "Nepali",
}, {
    icon: "fa fa-heart", label: "Marital Status", value: "Single",
},];

const experiences = [{
    position: "Full Stack Engineer",
    company: "Sanas.AI, Bangalore",
    duration: "Feb 2023 - Present",
    tech: ["Python", "AWS", "React.JS", "ASP.NET"],
    achievements: ["Lead engineering teams, coordinate project tasks, and ensure successful project delivery.", "Proficient in ASP.NET, Python, and React.JS, with hands-on experience in web development and API integration.", "Oversee project lifecycles from planning to deployment, ensuring adherence to deadlines and quality standards.", "Identify and resolve technical challenges efficiently, contributing to the smooth execution of projects.", "Foster teamwork and communication among cross-functional teams, facilitating a collaborative work environment.", "Stay updated with the latest technologies and industry trends, actively seeking opportunities for skill enhancement and professional growth.",],
}, {
    position: "Full Stack Engineer - SDE III",
    company: "ShopUp, Bangalore",
    duration: "Dec 2022 - Jan 2023",
    tech: ["GoLang", "AWS", "React.JS", "Flutter", "Android (Native)"],
    achievements: ["Designed and developed microservices using Golang (gRPC) for scalable and efficient backend solutions.", "Created cross-platform applications for Android and iOS using the Flutter framework, ensuring consistent user experiences across devices.", "Developed elegant and user-friendly web applications using React.JS, focusing on intuitive interfaces and seamless functionality.", "Led cross-functional teams, fostering innovation and collaboration to achieve project goals effectively.", "Designed scalable and robust architectures, enhancing performance and reliability of software systems."],
}, {
    position: "Full Stack Engineer - SDE II",
    company: "Falabella, Bangalore",
    duration: "Oct 2020 - Nov 2022",
    tech: ["Python (Django)", "GCP (Pub/Sub)", "Flutter", "React.JS"],
    achievements: ["Utilized Django for scalable microservices architecture.", "Built cross-platform apps with Flutter for consistent experiences.", "Designed intuitive interfaces with React.JS for user satisfaction.", "Engineered clean, efficient code for maintainable solutions.", "Integrated software components and third-party APIs for enhanced functionality.", "Developed comprehensive test cases for software reliability.", "Troubleshot and improved existing software for optimal performance.", "Created technical documentation for clear communication."],
}, {
    position: "Team Lead and Full Stack Developer",
    company: "Netzary Infodynamics",
    duration: "Jul 2017 - Sep 2020",
    tech: ["Python (Django)", "AWS", "Android (Native)", "Flutter", "React.JS"],
    achievements: ["Supervised and managed all the activities within the team", "Delegated tasks to individual team members comprehending their abilities", "Developed applications for Android and iOS using native as well as hybrid tool (Flutter)", "Developed applications for Web with Python on top of Django framework", "Produced clean, efficient code based requirement specifications", "Integrated software components and third-party APIs", "Tested and deployed programs and/or systems", "Troubleshot, fixed and/or improved existing software", "Created technical documentation for reference and reporting",],
},];

const education = [{
    board: "Bangalore University",
    school: "RR Institutions/Bangalore, IN",
    concentration: "Bachelor of Computer Application",
    percentage: 86,
    duration: "Apr 2014 - Jun 2017",
    achievements: ["Created an Android application backed by Django and PostgreSQL for cultural event held in the college.", "Designed and developed an online University data processing system using ASP MVC, MS SQL Express, web technologies as an academic project", "Designed and developed an SIMS Windows Form Application using C#.NET and MS SQL Express as an academic project", "Participated and won inter-college competition for web application development",],
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
    name: "time_dropper",
    description: "Gorgeous, fully animated, round dial time picker for flutter",
    duration: "May 2022",
    tech: ["Flutter", "Dart"],
    refs: [{
        icon: "fa fa-link", tooltip: "Check it out", url: "https://pub.dev/packages/time_dropper/",
    },],
}, {
    name: "r_nav_n_sheet",
    description: "Animated, modern and highly customisable bottom navigation bar for flutter",
    duration: "Apr 2022",
    tech: ["Flutter", "Dart"],
    refs: [{
        icon: "fa fa-link", tooltip: "Check it out", url: "https://pub.dev/packages/r_nav_n_sheet/",
    },],
}, {
    name: "safe_device_check",
    description: "Check whether the device rooted/Jail broken, is an Emulator, has Developer mode on (Android only), is app installed on external storage (Android only)",
    duration: "Aug 2021",
    tech: ["Flutter", "Dart", "Kotlin", "Swift"],
    refs: [{
        icon: "fa fa-link", tooltip: "Check it out", url: "https://pub.dev/packages/safe_device_check/",
    },],
}, {
    name: "Other packages (not maintained)",
    description: "Customized packages for android, web, flutter, etc.",
    duration: "-",
    tech: ["Python", "Kotlin", "Dart", "JavaScript"],
    refs: [{
        icon: "fa fa-link", tooltip: "Check it out", url: "https://github.com/lazydeveloperdotdev?tab=repositories",
    },],
},];

const companyProjects = [{
    name: "Nexus Ventures",
    description: "Nexus ventures application for internal financial data records and reporting.",
    duration: "Sep 2018 - Dec 2018",
    tech: ["Django", "PostgreSQL", "Celery", "XlsxWriter", "React.JS"],
    refs: [{
        icon: "fa fa-link", tooltip: "Visit", url: "https://nexusvp.com",
    },],
}, {
    name: "Urdu Audio",
    description: "Urdu audio is an audio streaming mobile application available on Android and iOS platform.",
    duration: "Feb 2018 - Mar 2018",
    tech: ["Django", "PostgreSQL", "Flutter", "Scoped Model", "FCM", "React.JS",],
    refs: [{
        icon: "fa fa-link", tooltip: "Visit", url: "https://bhatkallys.com",
    }, {
        icon: "fab fa-google-play",
        tooltip: "View in play store",
        url: "https://play.google.com/store/apps/details?id=com.bhatkallys.urduaudio",
    }, {
        icon: "fab fa-app-store",
        tooltip: "View in app store",
        url: "https://apps.apple.com/us/app/urdu-audio/id885622514",
    },],
},];
