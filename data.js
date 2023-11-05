const userDetails = {
    name: "Raj Yadav",
    designation: "Full Stack Software Developer",
    description: "A multi-skilled and dedicated IT professional with over %expYears% years of experience, adept in software development, well-versed in different programming languages. Well-rounded experience in OOPs, mobile development and user-centered design. A prodigy in learning new technologies. Strong background in team management and delegation.",
    picture: {
        src: "raj.jpeg",
        link: "https://www.linkedin.com/in/lazydeveloperdotdev"
    },
    startDate: "01 Jul 2017",
    links: [
        {
            icon: "fa fa-envelope-open",
            tooltip: "Send mail",
            label: "rajyadav_np@outlook.com",
            link: "mailto:rajyadav_np@outlook.com?subject=Job%20offer",
        },
        {
            icon: "fa fa-map-marker-alt",
            tooltip: "View in maps",
            label: "JP Nagar Phase 5, Bangalore, India",
            link: "https://goo.gl/maps/srwPcAxy5S32",
        },
        {
            icon: "fa fa-mobile-alt",
            tooltip: "Call",
            label: "+91-733 8305986",
            link: "tel:+917338305986",
        },
        {
            icon: "fa fa-globe",
            tooltip: "Visit",
            label: "www.lazydeveloper.dev",
            link: "https://www.lazydeveloper.dev",
        },
    ],
    sns: [
        {
            icon: "fab fa-github",
            tooltip: "Github",
            link: "https://github.com/lazydeveloperdotdev",
        },
        {
            icon: "fab fa-stack-overflow",
            tooltip: "Stack Overflow",
            link: "https://stackoverflow.com/users/6230166/raj-yadav",
        },
        {
            icon: "fab fa-linkedin",
            tooltip: "LinkedIn",
            link: "https://www.linkedin.com/in/lazydeveloperdotdev/",
        },
        {
            icon: "fab fa-quora",
            tooltip: "Quora",
            link: "https://www.quora.com/profile/Raj-Yadav-133",
        },
    ],
    qrCode: "qr-code.png"
}

const skills = [
    {
        icon: "fab fa-python",
        title: "Python",
        scale: 5,
        tech: ["Python", "Django", "pip"],
        lib: ["TensorFlow", "OpenCV", "celery", "geodjango", "channels"]
    },
    {
        icon: "fab fa-golang",
        title: "GoLang",
        scale: 5,
        tech: ["Go", "gRPC"],
        lib: ["Gorm", "Ginkgo"]
    },
    {
        icon: "fab fa-react",
        title: "ReactJS",
        scale: 5,
        tech: ["JavaScript", "TypeScript", "npm"],
        lib: ["Redux", "FCM"]
    },
    {
        icon: "<div class='flutter-icon'></div>",
        title: "Flutter",
        scale: 5,
        tech: ["Dart", "pub"],
        lib: ["Provider", "BLoC", "GetX", "Scoped Model", "Firebase"]
    },
    {
        icon: "fab fa-android",
        title: "Android",
        scale: 5,
        tech: ["Java", "Kotlin", "XML", "Gradle"],
        lib: ["RxJava", "Room", "LiveData", "Retrofit", "Firebase"]
    },
    {
        icon: "fa fa-globe",
        title: "Web",
        scale: 5,
        tech: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"],
        lib: ["jQuery", "Bootstrap"]
    },
    {
        icon: "fa fa-database",
        title: "Databases",
        scale: 4,
        tech: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
        lib: ["PostGIS"]
    },
    {
        icon: "fab fa-apple",
        title: "iOS",
        scale: 2,
        tech: ["Swift", "Cocoapod"],
        lib: ["Alamofire", "SQLite.swift", "Firebase"]
    },
    {
        icon: "fab fa-git-alt",
        title: "VCS & Issue Tracking",
        scale: 5,
        tech: ["Git"],
        lib: ["Jira"]
    },
    {
        icon: "fa fa-server",
        title: "Server & Scripting",
        scale: 3,
        tech: ["NGINX", "Shell"],
        lib: ["Docker"]
    },
    {
        icon: "fa fa-code",
        title: "Other Languages & Frameworks",
        scale: 3,
        tech: ["C", "C++", "Rust", "C#.NET"],
        lib: ["ASP.NET"]
    },
    {
        icon: "fab fa-app-store-ios",
        title: "Applications",
        scale: 4,
        tech: ["Adobe Illustrator", "CorelDRAW", "Microsoft Office"],
        lib: []
    }
];


const languages = [
    {
        icon: "A",
        name: "English",
        scale: 5,
        proficiency: "Full Professional Proficiency"
    },
    {
        icon: "&#x0905;",
        name: "Hindi",
        scale: 5,
        proficiency: "Full Professional Proficiency"
    },
    {
        icon: "&#x0905;",
        name: "Nepali",
        scale: 5,
        proficiency: "Native or Bilingual Proficiency"
    }
];

const interests = [
    {
        icon: "fa fa-swimming-pool",
        title: "Swimming"
    },
    {
        icon: "fa fa-paint-brush",
        title: "Sketching"
    },
    {
        icon: "fas fa-plane-departure",
        title: "Travelling"
    },
];

const personal = [
    {
        icon: "fa fa-birthday-cake",
        label: "Born",
        value: "Dec 05, 1994"
    },
    {
        icon: "fa fa-user",
        label: "Father's Name",
        value: "Ram Bahadur Yadav"
    },
    {
        icon: "fa fa-language",
        label: "Nationality",
        value: "Nepali"
    },
    {
        icon: "fa fa-heart",
        label: "Marital Status",
        value: "Single"
    },
];

const experiences = [
    {
        position: "Full Stack Engineer - SDE III",
        company: "ShopUp India, Bangalore",
        duration: "Dec 2022 - Present",
        tech: ["GoLang", "Flutter", "Android Native"],
        achievements: [
            "Led cross-functional teams, fostering innovation and collaboration.",
            "Designed scalable, robust architectures, enhancing performance and reliability.",
            "Enforced coding standards and best practices, resulting in cleaner codes.",
            "Collaborated closely with various teams to ensure project milestones."
        ],
    },
    {
        position: "Front-End Engineer - SDE II",
        company: "Falabella India, Bangalore",
        duration: "Oct 2020 - Nov 2022",
        tech: ["Flutter", "ReactJS"],
        achievements: [
            "Developed applications for Android and iOS using Flutter framework",
            "Designed elegant and user-friendly interfaces for mobiles and web",
            "Produced clean, efficient code based on requirement specifications",
            "Integrated software components and third-party APIs",
            "Written unit and integration test cases",
            "Troubleshot, fixed and/or improved existing software",
            "Created technical documentation for reference and reporting",
        ],
    },
    {
        position: "Team Lead and Full Stack Developer",
        company: "Netzary Infodynamics",
        duration: "Jul 2017 - Sep 2020",
        tech: ["Django", "Android", "Flutter", "ReactJS"],
        achievements: [
            "Supervised and managed all the activities within the team",
            "Identified team goal and evaluated their progress",
            "Coached team members to develop necessary skills",
            "Delegated tasks to individual team members comprehending their abilities",
            "Helped the team accomplish the set goals",
            "Developed applications for Android and iOS using native as well as hybrid tool (Flutter)",
            "Developed applications for Web with Python on top of Django framework",
            "Designed elegant and user-friendly interfaces for mobiles and web",
            "Produced clean, efficient code based requirement specifications",
            "Integrated software components and third-party APIs",
            "Tested and deployed programs and/or systems",
            "Troubleshot, fixed and/or improved existing software",
            "Created technical documentation for reference and reporting",
        ],
    },
];

const education = [
    {
        board: "Bangalore University",
        school: "RR Institutions/Bangalore, IN",
        concentration: "Bachelor of Computer Application",
        percentage: 86,
        duration: "Apr 2014 - Jun 2017",
        achievements: [
            "Created an Android application backed by Django and PostgreSQL for cultural event held in the college.",
            "Designed and developed an online University data processing system using ASP MVC, MS SQL Express, web technologies as an academic project",
            "Designed and developed an SIMS Windows Form Application using C#.NET and MS SQL Express as an academic project",
            "Participated and won inter-college competition for web application development"
        ]
    },
    {
        board: "Higher Secondary Education Board (HSEB)",
        school: "Dang Valley College/Dang, Nepal",
        concentration: "10+2 (Science - PCM)",
        percentage: 53,
        duration: "Apr 2011 - Mar 2013",
        achievements: [],
        printBreak: true,
    },
    {
        board: "Private And Boarding School Organization of Nepal (PABSON)",
        school: "Buddha Jyoti HSS/Gadhawa, Nepal",
        concentration: "School Leaving Certificate (SLC)",
        percentage: 68,
        duration: "Apr 1999 - Mar 2011",
        achievements: [],
    },
];

const personalProjects = [
    {
        name: "time_dropper",
        description: "Gorgeous, fully animated, round dial time picker for flutter",
        duration: "May 2022",
        tech: ["Flutter", "Dart"],
        refs: [
            {
                icon: "fa fa-link",
                tooltip: "Check it out",
                url: "https://pub.dev/packages/time_dropper/"
            }
        ]
    },
    {
        name: "r_nav_n_sheet",
        description: "Animated, modern and highly customisable bottom navigation bar for flutter",
        duration: "Apr 2022",
        tech: ["Flutter", "Dart"],
        refs: [
            {
                icon: "fa fa-link",
                tooltip: "Check it out",
                url: "https://pub.dev/packages/r_nav_n_sheet/"
            }
        ]
    },
    {
        name: "safe_device_check",
        description: "Check whether the device rooted/Jail broken, is an Emulator, has Developer mode on (Android only), is app installed on external storage (Android only)",
        duration: "Aug 2021",
        tech: ["Flutter", "Dart", "Kotlin", "Swift"],
        refs: [
            {
                icon: "fa fa-link",
                tooltip: "Check it out",
                url: "https://pub.dev/packages/safe_device_check/"
            }
        ]
    },
    {
        name: "PopupMenu (not maintained)",
        description: "Customizable android popup menu with support support for icons",
        duration: "Sep 2018",
        tech: ["Android", "Kotlin"],
        refs: [
            {
                icon: "fa fa-link",
                tooltip: "Check it out",
                url: "https://github.com/rajyadavnp/PopupMenu"
            }
        ]
    },


];

const companyProjects = [
    {
        name: "Nexus Ventures",
        description: "Nexus ventures application for internal financial data records and reporting.",
        duration: "Sep 2018 - Dec 2018",
        tech: ["Django", "PostgreSQL", "Celery", "XlsxWriter", "HTML", "CSS", "JavaScript"],
        refs: [
            {
                icon: "fa fa-link",
                tooltip: "Visit",
                url: "https://nexusvc.com"
            },
        ]
    },
    {
        name: "Urdu Audio",
        description: "Urdu audio is an audio streaming mobile application available on Android and iOS platform.",
        duration: "Feb 2018 - Mar 2018",
        tech: ["Django", "PostgreSQL", "Flutter", "Scoped Model", "FCM", "HTML", "CSS", "JavaScript"],
        refs: [
            {
                icon: "fa fa-link",
                tooltip: "Visit",
                url: "https://bhatkallys.com"
            },
            {
                icon: "fab fa-google-play",
                tooltip: "View in play store",
                url: "https://play.google.com/store/apps/details?id=com.bhatkallys.urduaudio",
            },
            {
                icon: "fab fa-app-store",
                tooltip: "View in app store",
                url: "https://apps.apple.com/us/app/urdu-audio/id885622514",
            },
        ]
    },
];

