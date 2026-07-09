export const projects = [
    {
    slug: "iom-itb-website",
    title: "IOM-ITB Website",
    category: "Full Stack Web Development",
    summary:
        "Reengineered the official IOM-ITB website by modernizing the system architecture, improving user experience, and integrating multiple academic services.",
    description:
        "This project focused on redesigning and reengineering the IOM-ITB (Ikatan Orang Tua Mahasiswa ITB) website to improve maintainability, usability, and performance. The system integrates authentication, role-based access control, dashboard visualization, and multiple internal web services while providing a more modern and responsive user experience.",

    projectType: "Team Project",
    duration: "Feb 2026 - Jun 2026",
    team: "5 Developers",

    tech: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Keycloak",
        "Docker"
    ],

    thumbnail: "/img/iom-thumb.png",

    screenshots: [
        "/img/iom-thumb.png",
        "/img/iom-login.png",
        "/img/iom-sso.png",
        "/img/iom-home.png",
        "/img/iom-email.png"
    ],

    demoUrl: "https://www.iom-itb.id/",
    sourceUrl: "",

    features: [
        "Redesigned the website with a modern and responsive user interface.",
        "Integrated Single Sign-On (SSO) authentication using Keycloak.",
        "Implemented Role-Based Access Control (RBAC) for administrators and users.",
        "Developed an administrative dashboard with statistics and data visualization.",
        "Integrated multiple internal web services into a unified platform.",
        "Implemented online forms with automated confirmation workflow.",
        "Improved website performance, navigation, and maintainability."
    ],

    learned: [
        "Designed scalable full-stack web architecture.",
        "Implemented authentication and authorization using Keycloak.",
        "Collaborated within a team using Git-based development workflow.",
        "Integrated multiple backend services into a single frontend application.",
        "Applied responsive UI design and component-based development with React.",
        "Experienced agile software development through sprint planning and backlog management."
    ],

    challenges: [
        "Integrating several independent web services into a unified application.",
        "Implementing secure authentication and authorization across multiple systems.",
        "Maintaining consistent user experience while supporting different user roles.",
        "Handling deployment and environment configuration using Docker.",
        "Coordinating feature development and integration among multiple team members."
    ]
    },
  {
    slug: "nimonspedia",
    title: "Nimonspedia - E-Commerce App",
    category: "Full Stack Web Development",
    summary:
      "Full-stack e-commerce application with product catalog, shopping cart, authentication, and transaction management.",
    description:
      "Developed a full-stack e-commerce application featuring product catalog, shopping cart, user authentication, and transaction management. Optimized data flow to ensure a smooth and responsive shopping experience.",
    projectType: "Academic Project",
    duration: "2025",
    team: "Team Project",
    tech: ["React", "PHP","Node.js", "Express.js", "PostgreSQL"],
    thumbnail: "/img/nimons-thumb.png",
    screenshots: ["/img/nimons-thumb.png", "/img/nimons-1.png", "/img/nimons-2.png", "/img/nimons-3.png", "/img/nimons-4.png", "/img/nimons-5.png", "/img/nimons-6.png", "/img/nimons-7.png", "/img/nimons-8.png"],
    demoUrl: "",
    sourceUrl: "https://github.com/Labpro-22/milestone-1-tugas-besar-if-3110-web-based-development-k01-16/releases/tag/v2.1",
    features: [
      "Product catalog and shopping cart.",
      "User authentication.",
      "Transaction management.",
      "Responsive web interface."
    ],
    learned: [
      "Full-stack application development.",
      "REST API integration.",
      "Database design using PostgreSQL."
    ],
    challenges: [
      "Maintaining data consistency between frontend and backend.",
      "Designing scalable application architecture."
    ]
  },
  {
  slug: "nimons360",
  title: "Nimons360",
  category: "Android Development",
  summary:
    "Android application for real-time family location sharing with GPS tracking, WebSocket communication, and secure authentication.",
  description:
    "Nimons360 is a native Android application developed to help family members share and monitor each other's locations in real time. The application integrates GPS, WebSocket communication, Room Database, and device orientation sensors to provide a secure and responsive location-sharing experience. It enables users to create family groups, track member locations, and maintain reliable communication while following Android security best practices.",

  projectType: "Academic Project",
  duration: "2026",
  team: "3 Developers",

  tech: [
    "Kotlin",
    "Jetpack Compose",
    "Android",
    "Room Database",
    "WebSocket"
  ],

  thumbnail: "/img/360.png",

  screenshots: [
    "/img/360.png",
    "/img/361.png",
    "/img/362.png",
    "/img/363.png",
    "/img/364.png",
    "/img/365.png"
  ],

  demoUrl: "",
  sourceUrl: "https://github.com/Labpro-22/ms1-k01-tbd/releases/tag/V2.3.1",

  features: [
    "Real-time family location tracking using GPS.",
    "Live location synchronization through WebSocket communication.",
    "Family group management with member presence monitoring.",
    "Interactive map displaying member locations and movement.",
    "Offline local data storage using Room Database.",
    "Secure authentication with encrypted token storage.",
    "Device orientation integration to indicate user heading on the map."
  ],

  learned: [
    "Developed native Android applications using Kotlin and Jetpack Compose.",
    "Implemented real-time communication using WebSocket.",
    "Integrated GPS and Android location services.",
    "Applied Room Database for efficient local data persistence.",
    "Managed authentication securely using EncryptedSharedPreferences.",
    "Designed responsive mobile UI following Android best practices."
  ],

  challenges: [
    "Maintaining stable real-time location synchronization under varying network conditions.",
    "Optimizing battery consumption while continuously accessing GPS.",
    "Handling Android runtime permissions for location services.",
    "Managing WebSocket connection lifecycle during app background and foreground transitions.",
    "Ensuring secure storage of authentication tokens and user credentials."
  ]
},

  {
    slug: "irk-library",
    title: "IRK Library",
    category: "Android Development",
    summary:
      "Android application for accessing IRK course materials and built-in calculators.",
    description:
      "Developed an Android application that centralizes IRK course materials and provides integrated calculators such as matrix operations to support learning.",
    projectType: "Academic Project",
    duration: "2025",
    team: "Solo Project",
    tech: ["Kotlin", "Android"],
    thumbnail: "/img/irk.png",
    screenshots: ["/img/irk.png", "/img/irk-1.png", "/img/irk-2.png", "/img/irk-3.png", "/img/irk-4.png", "/img/irk-5.png", "/img/irk-6.png"],
    demoUrl: "",
    sourceUrl: "https://github.com/orvin14/irk-library/releases/tag/v2",
    features: [
      "Centralized learning materials.",
      "Matrix calculator.",
      "Structured navigation.",
      "Built-in learning tools."
    ],
    learned: [
      "Android application development.",
      "UI/UX design.",
      "Local data management."
    ],
    challenges: [
      "Designing an intuitive navigation flow.",
      "Implementing mathematical calculators."
    ]
  },
  {
    slug: "judol-detector",
    title: "Judol Detector",
    category: "Machine Learning",
    summary:
      "YouTube comment classifier for online gambling detection.",
    description:
      "Developed a text classification system to automatically detect and filter online gambling-related comments on YouTube.",
    projectType: "Personal Project",
    duration: "2025",
    team: "Solo Project",
    tech: ["Python", "NLP", "String Matching"],
    thumbnail: "/img/judol.png",
    screenshots: ["/img/judol.png", "/img/judol-1.png", "/img/judol-2.png"],
    demoUrl: "https://judol-detector-kappa.vercel.app/",
    sourceUrl: "https://github.com/orvin14/judol-detector/releases/tag/v2",
    features: [
      "Automatic text classification.",
      "Comment filtering.",
      "Moderation dashboard."
    ],
    learned: [
      "Natural Language Processing.",
      "Text classification.",
      "Model evaluation."
    ],
    challenges: [
      "Reducing false positives.",
      "Handling diverse writing styles."
    ]
  },

  {
    slug: "chess-endgame-solver",
    title: "Chess Endgame Solver",
    category: "Artificial Intelligence",
    summary:
      "Chess endgame solver using Minimax and Alpha-Beta Pruning.",
    description:
      "Developed a chess endgame solver implementing the Minimax algorithm with Alpha-Beta Pruning to determine optimal moves efficiently.",
    projectType: "Personal Project",
    duration: "2025",
    team: "Solo Project",
    tech: ["Python", "AI", "Algorithms"],
    thumbnail: "/img/magnus.png",
    screenshots: ["/img/magnus.png", "/img/magnus-1.png", "/img/magnus-2.png"],
    demoUrl: "https://ai-magnus-vs-gukesh-rho.vercel.app/",
    sourceUrl: "https://github.com/orvin14/ai-magnus-vs-gukesh/releases/tag/v1",
    features: [
      "Minimax search.",
      "Alpha-Beta pruning.",
      "Optimal move evaluation."
    ],
    learned: [
      "Game AI.",
      "Adversarial search.",
      "Heuristic evaluation."
    ],
    challenges: [
      "Reducing search space.",
      "Improving evaluation performance."
    ]
  },
  {
    slug: "little-alchemy-finder",
    title: "Little Alchemy 2 Recipe Finder",
    category: "Algorithms",
    summary:
      "Algorithm-based recipe finder using graph traversal techniques.",
    description:
      "Built an algorithm-based tool to efficiently discover crafting combinations in Little Alchemy 2 using graph traversal algorithms.",
    projectType: "Academic Project",
    duration: "2025",
    team: "3 Developers",
    tech: ["Go", "Algorithms", "Graph"],
    thumbnail: "/img/la-thumb.png",
    screenshots: ["/img/la-thumb.png","/img/la.png", "/img/la-recipe.png"],
    demoUrl: "",
    sourceUrl: "https://github.com/orvin14/Tubes2_BayuSangAlkemis/releases/tag/v1.0",
    features: [
      "Fast recipe search.",
      "Graph traversal algorithm.",
      "Interactive interface."
    ],
    learned: [
      "Graph algorithms.",
      "Search optimization.",
      "Efficient data structures."
    ],
    challenges: [
      "Reducing search complexity.",
      "Managing large crafting graphs."
    ]
  },

  {
    slug: "ats-cv-finder",
    title: "ATS CV Finder",
    category: "Artificial Intelligence",
    summary:
      "Resume screening system using keyword extraction and scoring.",
    description:
      "Built a CV analysis tool that matches resumes with job descriptions through keyword extraction and scoring methods to improve recruitment efficiency.",
    projectType: "Academic Project",
    duration: "2025",
    team: "Solo Project",
    tech: ["Python", "NLP", "String Matching"],
    thumbnail: "/img/cv.png",
    screenshots: ["/img/cv.png"],
    demoUrl: "",
    sourceUrl: "https://github.com/orvin14/Tubes3_MeACavemanDoesntHaveReligion/releases/tag/v1.0",
    features: [
      "Keyword extraction.",
      "Resume ranking.",
      "Matching score visualization."
    ],
    learned: [
      "Natural Language Processing.",
      "Text preprocessing.",
      "Machine learning workflow."
    ],
    challenges: [
      "Handling diverse CV formats.",
      "Improving matching accuracy."
    ]
  },

  {
    slug: "course-scheduler-ai",
    title: "AI-Based Course Scheduling Optimizer",
    category: "Artificial Intelligence",
    summary:
      "AI-based timetable optimizer using search and optimization algorithms.",
    description:
      "Developed an AI-driven scheduling system to optimize course timetables under multiple constraints while minimizing scheduling conflicts.",
    projectType: "Academic Project",
    duration: "2025",
    team: "Team Project",
    tech: ["Python", "Optimization", "AI"],
    thumbnail: "/img/sche.png",
    screenshots: ["/img/sche.png"],
    demoUrl: "",
    sourceUrl: "https://github.com/orvin14/AI-1-mendaki-gunung-lewati-lembah",
    features: [
      "Automatic scheduling.",
      "Constraint handling.",
      "Conflict minimization."
    ],
    learned: [
      "Optimization algorithms.",
      "Constraint satisfaction problems.",
      "AI search techniques."
    ],
    challenges: [
      "Handling multiple scheduling constraints.",
      "Finding near-optimal solutions efficiently."
    ]
  },

  {
    slug: "quadtree-compressor",
    title: "Quadtree Compressor",
    category: "Algorithms",
    summary:
      "Image compression using quadtree spatial partitioning.",
    description:
      "Implemented an image compression system based on quadtree data structures to reduce storage while maintaining visual quality.",
    projectType: "Academic Project",
    duration: "2025",
    team: "Solo Project",
    tech: ["Java", "Algorithms"],
    thumbnail: "/img/quadtree.png",
    screenshots: ["/img/quadtree.png"],
    demoUrl: "",
    sourceUrl: "https://github.com/orvin14/Tucil2_13523017",
    features: [
      "Recursive image partitioning.",
      "Image compression.",
      "Spatial optimization."
    ],
    learned: [
      "Tree data structures.",
      "Image processing.",
      "Recursive algorithms."
    ],
    challenges: [
      "Balancing compression ratio and quality.",
      "Efficient recursive implementation."
    ]
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}