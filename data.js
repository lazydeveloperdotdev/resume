const userDetails = {
    name: "Raj Yadav",
    designation: "Full Stack Software Developer",
    description: "A multi-skilled and dedicated IT professional with over 5 years of experience, adept in software development, well-versed in different programming languages. Well-rounded experience in OOPs, mobile development and user-centered design. A prodigy in learning new technologies. Strong background in team management and delegation.",
    picture: {
        src: "raj.jpg",
        link: "https://www.linkedin.com/in/rajyadavnp"
    },
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
            link: "https://github.com/rajyadavnp",
        },
        {
            icon: "fab fa-stack-overflow",
            tooltip: "Stack Overflow",
            link: "https://stackoverflow.com/users/6230166/raj-yadav",
        },
        {
            icon: "fab fa-linkedin",
            tooltip: "LinkedIn",
            link: "https://www.linkedin.com/in/rajyadavnp/",
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
        icon: "fab fa-android",
        title: "Android",
        scale: 5,
        tech: ["Java", "Kotlin", "XML", "Gradle"],
        lib: ["RxJava", "Room", "Dagger", "LiveData", "Retrofit", "Firebase"]
    },
    {
        icon: "fab fa-apple",
        title: "iOS",
        scale: 3,
        tech: ["Swift", "Cocoapod"],
        lib: ["Alamofire", "SQLite.swift", "Firebase"]
    },
    {
        icon: "<div class='flutter-icon'></div>",
        title: "Flutter",
        scale: 5,
        tech: ["Dart", "pub"],
        lib: ["Provider", "BLoC", "GetX", "Scoped Model", "Firebase"]
    },
    {
        icon: "fab fa-react",
        title: "React Native",
        scale: 4,
        tech: ["JavaScript", "TypeScript", "npm"],
        lib: ["Redux", "FCM"]
    },
    {
        icon: "fab fa-react",
        title: "ReactJS",
        scale: 4,
        tech: ["JavaScript", "TypeScript", "npm"],
        lib: ["Redux", "FCM", "AntD"]
    },
    {
        icon: "fab fa-python",
        title: "Python",
        scale: 5,
        tech: ["Python", "Django", "pip"],
        lib: ["TensorFlow", "OpenCV", "celery", "geodjango", "channels"]
    },
    {
        icon: "fab fa-rust",
        title: "Rust",
        scale: 2,
        tech: ["Rust", "cargo"],
        lib: ["Rocket", "Diesel"]
    },
    {
        icon: "fa fa-globe",
        title: "Web",
        scale: 5,
        tech: ["HTML", "CSS", "JavaScript"],
        lib: ["jQuery", "Bootstrap", "UIKit"]
    },
    {
        icon: "fa fa-database",
        title: "Databases",
        scale: 4,
        tech: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
        lib: ["PostGIS"]
    },
    {
        icon: "fab fa-git-alt",
        title: "Version Control",
        scale: 5,
        tech: ["Git", "Mercurial"],
        lib: []
    },
    {
        icon: "fa fa-server",
        title: "Server & Scripting",
        scale: 3,
        tech: ["NGINX", "Shell"],
        lib: []
    },
    {
        icon: "fa fa-code",
        title: "Other Languages & Frameworks",
        scale: 3,
        tech: ["C", "C++", "C#.NET"],
        lib: ["ASP.NET", "Lucene Elastic Search"]
    },
    {
        printBreak: true,
        icon: "fab fa-app-store-ios",
        title: "Applications",
        scale: 4,
        tech: ["Adobe Illustrator", "Adobe AfterEffects", "CorelDRAW", "Microsoft Office"],
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
        position: "Senior Engineer",
        company: "Falabella India, Bangalore",
        duration: "Oct 2020 - Present",
        tech: ["Flutter", "ReactJS"],
        achievements: [
            "Developed applications for Android and iOS using Flutter framework",
            "Designed elegant and user-friendly interfaces for mobiles and web",
            "Produced clean, efficient code based requirement specifications",
            "Integrated software components and third-party APIs",
            "Written unit and integration test cases",
            "Troubleshot, fixed and/or improved existing software",
            "Created technical documentation for reference and reporting",
        ],
    },
    {
        position: "Team Lead and Manager",
        company: "Netzary Infodynamics",
        duration: "Sep 2018 - Sep 2020",
        tech: [],
        achievements: [
            "Supervised and managed all the activities within the team",
            "Identified team goal and evaluated their progress",
            "Coached team members to develop necessary skills",
            "Delegated tasks to individual team members comprehending their abilities",
            "Helped the team accomplish the set goals"
        ],
    },
    {
        position: "Software Developer",
        company: "Netzary Infodynamics",
        duration: "Jul 2017 - Aug 2018",
        tech: ["Android", "iOS", "Flutter", "Python", "Web"],
        achievements: [
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
            "Designed and developed an online University data processing system using ASP MVC, MS SQL Express, web technologies as an academic project",
            "Designed and developed an SIMS Windows Form Application using C#.NET and MS SQL Express as an academic project",
            "Created an Android application for cultural event held in the college with features like registration, information about events, etc.",
            "Participated and won inter-college competition for web application development"
        ]
    },
    {
        board: "Higher Secondary Education Board (HSEB)",
        school: "Dang Valley College/Dang, Nepal",
        concentration: "10+2 (Science - PCM)",
        percentage: 53,
        duration: "Apr 2011 - Mar 2013",
        achievements: []
    },
    {
        board: "Private And Boarding School Organization of Nepal (PABSON)",
        school: "Buddha Jyoti HSS/Gadhawa, Nepal",
        concentration: "School Leaving Certificate (SLC)",
        percentage: 68,
        duration: "Apr 1999 - Mar 2011",
        achievements: []
    },
];

const personalProjects = [
    {
        name: "rHotspot",
        description: "rHotspot is a windows application that allows to enable Wi-Fi hotspot on windows platform.",
        duration: "Sep 2015",
        tech: ["C#.NET", "Batch"],
        refs: [
            {
                icon: "fa fa-download",
                tooltip: "Download",
                url: "https://rajyadav-np.blogspot.com/2016/03/rhotspot-hotspot-application-for.html"
            }
        ]
    },
    {
        name: "Urdu Audio",
        description: "Urdu audio is an audio streaming mobile application available on Android and iOS platform.",
        duration: "Feb 2018 - Mar 2018",
        tech: ["Flutter", "Scoped Model", "FCM"],
        refs: [
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
    {
        name: "Petzapp",
        description: "Petzapp is an online platform to grab facilities for pet animals like consultation, health services, food, accessories, etc.",
        duration: "Aug 2019 - Sep 2020",
        tech: ["Flutter", "Provider", "Django", "FCM", "Razorpay", "PostGIS", "PWA", "UIKit"],
        refs: [
            {
                icon: "fab fa-google-play",
                tooltip: "View in play store",
                url: "https://play.google.com/store/apps/details?id=com.petzappin&hl=en_IN&gl=US",
            },
            {
                icon: "fab fa-app-store",
                tooltip: "View in app store",
                url: "https://apps.apple.com/ni/app/petzapp-find-pets-animals/id1530977281",
            },
            {
                icon: "fa fa-globe",
                tooltip: "View website",
                url: "http://petzapp.in/",
            },
        ],
    },
];

const companyProjects = [
    {
        name: "VDOT",
        description: "VDOT is a hyper-local delivery application featuring package delivery, anything anywhere, realtime tracking, etc.",
        duration: "Feb 2020 - May 2020",
        tech: ["Flutter", "Google Maps API", "FCM", "Django", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
        refs: [
            {
                icon: "fab fa-google-play",
                tooltip: "View in play store",
                url: "https://play.google.com/store/apps/details?id=com.netzary.vdot",
            },
        ],
        team: ["Raj Yadav"]
    },
    {
        name: "Volkswagen Wellness",
        description: "COVID-19 tracking application for Volkswagen India (Kerala).",
        duration: "Mar 2020 - Apr 2020",
        tech: ["Flutter", "Django", "FCM"],
        refs: [],
        team: ["Raj Yadav", "Ramdas S"]
    },
];

