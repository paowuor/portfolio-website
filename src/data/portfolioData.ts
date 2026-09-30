export interface Project {
  id: string;
  title: string;
  category: 'Flagship' | 'Internal' | 'Commercial' | 'Systems';
  tagline: string;
  description: string;
  role?: string;
  technologies: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  articleUrl?: string;
  problem: string;
  contribution: string;
  outcome: string;
  architectureDetails?: string;
  interactiveType?: 'kopabridge' | 'flexirides' | 'marples' | 'djnextdoor' | 'forum';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'AI' | 'Backend' | 'Architecture' | 'Go' | 'Career';
  readTime: string;
  publishedDate: string;
  tags: string[];
  content: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Paul Owuor',
    title: 'Software Engineer · AI & Backend Developer · Project Manager',
    tagline: 'I build practical software systems that solve real-world problems—from financial infrastructure and mobility platforms to marketplaces and business applications.',
    location: 'Kisumu / Nairobi, Kenya',
    timezone: 'East Africa Time (UTC+3)',
    status: 'Available for full-time Software Engineer, AI, and Project roles',
    email: 'owuorpaul500@gmail.com',
    phone: '+254718676079',
    github: 'https://github.com/paowuor',
    linkedin: 'https://www.linkedin.com/in/paul-owuor-66a821397/',
    devto: 'https://dev.to/paowuor',
    whatsapp: 'https://wa.me/254718676079?text=Hi%20Paul,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!',
  },

  about: {
    pillars: [
      { step: '01', title: 'Build', description: 'Architecting resilient backend systems, typed APIs, and microservices with clean code.' },
      { step: '02', title: 'Solve', description: 'Untangling real-world fragmentation in transport, PAYGo solar energy, and commerce.' },
      { step: '03', title: 'Lead', description: 'Directing sprints, unblocking engineering teams, and aligning technical delivery with user needs.' },
    ],
    bioParagraphs: [
      "I'm a software engineer and engineering apprentice based in Kenya, focused on building reliable backend and full-stack applications. I enjoy working on problems where software intersects with real-world industries such as financial services, mobility, local businesses, and digital marketplaces.",
      "Alongside building software, I work as a project manager on FlexiRides and continuously develop my engineering skills through hands-on projects and collaborative development.",
      "My background bridges technical systems programming and AI evaluation: having annotated and evaluated large-scale LLMs at Cohere and managed enterprise client operations at Invisible Technologies, I bring both rigorous technical depth and strong cross-functional communication to engineering teams."
    ],
    currently: [
      { icon: 'GraduationCap', label: 'Computer Science', detail: 'University of the People' },
      { icon: 'Code', label: 'Software Engineering Apprentice', detail: 'Zone01 Kisumu' },
      { icon: 'Car', label: 'Project Manager', detail: 'FlexiRides (13-Service Platform)' },
      { icon: 'Globe', label: 'Location', detail: 'Based in Kenya (UTC+3)' },
    ]
  },

  skills: {
    languages: ['Python', 'Go', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Bash'],
    backend: ['Spring Boot', 'NestJS', 'Node.js', 'Django', 'Django REST Framework', 'REST APIs', 'Microservices', 'Prisma ORM'],
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Native', 'Expo'],
    databases: ['PostgreSQL', 'SQLite', 'Redis', 'Database Migrations'],
    devops: ['Docker', 'Docker Compose', 'Git', 'GitHub Actions', 'Maven', 'Linux', 'GraalVM', 'CI/CD', 'Railway', 'Render'],
    aiAndTools: ['LLM Evaluation', 'Data Annotation', 'Prompt Engineering', 'AI-assisted Development', 'Claude', 'ChatGPT', 'Google AI', 'Antigravity', 'GitHub Copilot']
  },

  flagshipProjects: [
    {
      id: 'kopabridge',
      title: 'KopaBridge',
      category: 'Flagship',
      tagline: 'Unified Financial Middleware & Energy API for Alternative Credit Scoring',
      description: 'A unified financial middleware and data-verification layer that normalizes fragmented PAYGo solar payment and energy-usage data across disparate providers for alternative credit underwriting in emerging markets.',
      technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'REST APIs', 'Swagger', 'Railway'],
      role: 'Lead Backend Engineer',
      problem: 'In sub-Saharan Africa, millions of off-grid households generate valuable financial histories through Pay-As-You-Go (PAYGo) solar energy payments. However, data formats between providers (SunKing, M-KOPA, Bboxx) are fragmented, proprietary, and inaccessible to lending institutions.',
      contribution: 'Designed the unified data transformation schemas, encrypted credential management for provider connectors, Redis caching layer for frequent credit queries, and built clean Swagger-documented REST endpoints in NestJS with automated health monitoring.',
      outcome: 'Transformed raw, disparate provider telemetry into standard RFC 7807 compliant JSON endpoints, calculating deterministic credit reliability scores (0-100) in under 85ms.',
      highlights: [
        'Unified Energy & Payment API across PAYGo providers',
        'Provider normalization pipeline with schema validation',
        'Deterministic alternative credit scoring algorithm',
        'Encrypted provider token storage & role-based authentication',
        'Redis-backed caching for sub-100ms response times',
        'Swagger / OpenAPI interactive documentation',
        'Containerized deployment on Railway'
      ],
      metrics: [
        { label: 'Query Latency', value: '<85ms' },
        { label: 'Architecture', value: 'Clean NestJS' },
        { label: 'Security', value: 'AES-256' },
      ],
      githubUrl: 'https://github.com/paowuor/kopabridge',
      liveUrl: 'https://kopabridge.railway.app/api/docs',
      interactiveType: 'kopabridge'
    },
    {
      id: 'flexirides',
      title: 'FlexiRides',
      category: 'Flagship',
      tagline: '13-Service Microservices Car-Hailing Platform for East Africa',
      description: 'A robust, microservices-based ride-hailing and transport operations platform engineered to handle real-time passenger booking, driver dispatch, vehicle tracking, and automated fare settlement across East African transit networks.',
      technologies: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Microservices', 'Docker', 'Maven', 'GraalVM', 'CI/CD'],
      role: 'Project Manager & Software Engineer',
      problem: 'Transport operators in East Africa face high network volatility, unique cash-and-mobile-money split payments, and unpredictable traffic patterns that monolithic architectures struggle to scale reliably.',
      contribution: 'Directing the engineering team building 13 microservices: facilitating sprint planning, unblocking developers, coordinating service dependencies, and reviewing PRs. Co-designed service contracts, Dockerized build automation with GraalVM native image optimization, and testing workflows.',
      outcome: 'Delivered an interconnected 13-service platform covering API Gateway, Auth, Driver, Passenger, Booking, Payments, Geolocation Matching, and Analytics with independent container scaling.',
      highlights: [
        '13 specialized backend microservices architecture',
        'Spring Cloud API Gateway with JWT authentication routing',
        'Driver lifecycle and KYC verification service',
        'Real-time passenger ride matching and geospatial tracking',
        'East Africa payment integration (M-Pesa / Mobile Money / Cards)',
        'GraalVM native compilation for rapid microservice startup',
        'Docker Compose orchestration & automated testing suite'
      ],
      metrics: [
        { label: 'Microservices', value: '13 Services' },
        { label: 'Language', value: 'Java 21' },
        { label: 'Leadership', value: 'Team PM' },
      ],
      githubUrl: 'https://github.com/paowuor/flexirides',
      interactiveType: 'flexirides'
    },
    {
      id: 'djnextdoor',
      title: 'DJNextDoor',
      category: 'Flagship',
      tagline: 'Two-Sided Marketplace Connecting DJs, Venues & Event Planners',
      description: 'A specialized talent and gig marketplace that streamlines discovery, contracts, booking requests, and audio-mix showcasing for performing DJs, lounge venues, and festival organizers.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Django REST Framework', 'JavaScript', 'Cloudinary', 'Sentry', 'Render'],
      role: 'Full-Stack Developer',
      problem: 'Independent DJs struggle with scattered booking inquiries across Instagram DMs and WhatsApp, missing payment security, and lack of organized portfolios with audio streaming and verified venue reviews.',
      contribution: 'Architected the relational schema in Django, created dual-persona user models (DJ vs Venue), implemented audio upload/playback pipelines with Cloudinary, real-time messaging, review workflows, and wrote 74 comprehensive unit & integration tests.',
      outcome: 'A production-ready platform deployed on Render with sub-second gig discovery, integrated sound previews, automated contract generation, and zero unhandled errors via Sentry telemetry.',
      highlights: [
        'Role-based account architecture (DJ, Venue, Event Host)',
        'Interactive gig discovery board with date & budget filtering',
        'In-browser audio mix player and cloud media pipeline',
        'Formal booking proposal & acceptance workflow',
        'Two-way verified review and rating system',
        '74 automated test suites covering edge cases',
        'Sentry error tracking & Redis cache invalidation'
      ],
      metrics: [
        { label: 'Automated Tests', value: '74 Tests' },
        { label: 'Stack', value: 'Django + DRF' },
        { label: 'Media', value: 'Cloudinary' },
      ],
      githubUrl: 'https://github.com/paowuor/djnextdoor',
      liveUrl: 'https://djnextdoor.onrender.com',
      interactiveType: 'djnextdoor'
    },
    {
      id: 'marples-cleaners',
      title: 'Marples Cleaners',
      category: 'Commercial',
      tagline: 'Commercial Customer Booking & Real-Time Cost Estimator Portal',
      description: 'A responsive commercial web application engineered for a cleaning and property-services company in Mombasa, featuring an interactive real-time cost calculator, direct WhatsApp quote dispatch, and service catalogues.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Google Maps API'],
      role: 'Frontend & Client Solutions Engineer',
      problem: 'The business lost potential clients due to slow telephone quoting, vague square-footage pricing inquiries, and manual scheduling friction.',
      contribution: 'Built a sleek client portal with an interactive cost estimator that calculates itemized cleaning charges based on room count, service tier, and property type, instantly outputting structured WhatsApp pre-filled booking messages.',
      outcome: 'Empowered real-time client self-service, eliminating quote turnaround delays and increasing inbound qualified leads with direct Google Maps location verification.',
      highlights: [
        'Interactive real-time cost estimator with itemized pricing',
        'Direct WhatsApp formatted quote string generator',
        'Google Maps location selector and radius verification',
        'Categorized service catalogue (Residential, Commercial, Deep Clean)',
        'Customer testimonials and visual before/after showcase',
        'Lightweight, high-performance Vite + Tailwind bundle'
      ],
      metrics: [
        { label: 'Lighthouse Score', value: '98/100' },
        { label: 'Client Impact', value: 'Mombasa Business' },
        { label: 'Feature', value: 'Live Estimator' },
      ],
      githubUrl: 'https://github.com/paowuor/marples-cleaners',
      liveUrl: 'https://marplescleaners.co.ke',
      interactiveType: 'marples'
    }
  ] as Project[],

  internalProjects: [
    {
      id: 'forum',
      title: 'Forum',
      category: 'Internal',
      tagline: 'Standard Library Go Community Forum from Scratch',
      description: 'A full-stack community forum engine written purely with Go standard library, SQLite, and Docker—implementing session-based authentication, post filtering, upvotes, and thread discussions.',
      technologies: ['Go', 'SQLite', 'HTML5', 'CSS3', 'Docker', 'Automated Tests'],
      role: 'Backend Engineer (Zone01 Project)',
      problem: 'Building a robust, concurrent web application without third-party frameworks like Gin or Fiber to deeply understand HTTP primitives, goroutines, cookie sessions, and raw SQL queries.',
      contribution: 'Implemented bcrypt password hashing, session UUID tracking in secure cookies, parameterized SQL queries preventing injection, threaded comment trees, and tag filtering.',
      outcome: 'A self-contained Go server with zero external framework dependencies, clean template rendering, and comprehensive automated test coverage containerized via Docker.',
      highlights: [
        'Zero external web framework dependencies (pure net/http)',
        'UUID session management with secure HttpOnly cookies',
        'SQLite schema with migrations, foreign keys, and indexes',
        'Upvote/downvote reaction engine with atomic counters',
        'Category and user-specific post filtering'
      ],
      metrics: [
        { label: 'Dependencies', value: 'Go StdLib Only' },
        { label: 'DB', value: 'SQLite3' },
        { label: 'Deploy', value: 'Docker' },
      ],
      githubUrl: 'https://github.com/paowuor/forum',
      interactiveType: 'forum'
    },
    {
      id: 'net-cat',
      title: 'Net-Cat TCP Chat Engine',
      category: 'Systems',
      tagline: 'Concurrent Terminal Chat Server in Go with Sockets & Goroutines',
      description: 'A concurrent terminal-based TCP chat room server replicating the behavior of Netcat with customized group broadcasting, connection limits, and join/leave logs.',
      technologies: ['Go', 'TCP Sockets', 'Goroutines', 'Channels', 'Sync Mutex', 'Linux'],
      role: 'Systems Programmer (Zone01 Project)',
      problem: 'Handling multiple simultaneous TCP client connections with race-condition-free state updates, buffer management, and terminal formatting.',
      contribution: 'Designed connection handler loops using Go channels, read/write mutexes for safe client registries, ANSI escape terminal coloring, and history buffers for incoming clients.',
      outcome: 'High-throughput socket server capable of supporting concurrent terminal clients with guaranteed message ordering and graceful disconnect cleanup.',
      highlights: [
        'Raw TCP socket server using net.Listen on custom port',
        'Thread-safe client manager using sync.RWMutex',
        'Formatted message broadcasting with timestamps',
        'Max connection enforcement with friendly rejected client notice',
        'Full connection lifecycle logging'
      ],
      metrics: [
        { label: 'Concurrency', value: 'Goroutines + Mutex' },
        { label: 'Protocol', value: 'Raw TCP' },
      ],
      githubUrl: 'https://github.com/paowuor/net-cat'
    },
    {
      id: 'ascii-art-web',
      title: 'ASCII Art Web Server',
      category: 'Internal',
      tagline: 'HTTP ASCII Typography Rendering Service',
      description: 'A Go web application that parses standard text inputs into stylized banner ASCII fonts with banner validation, error handling, and file downloads.',
      technologies: ['Go', 'HTML/CSS', 'Docker', 'HTTP Server'],
      role: 'Developer (Zone01 Project)',
      problem: 'Handling arbitrary character mapping, newline rendering, and multi-line font arrays across diverse banner template files.',
      contribution: 'Wrote the parsing algorithm for banner files (standard, shadow, thinkertoy), built the HTTP web server, and handled 400/404/500 status codes strictly.',
      outcome: 'A lightweight micro-utility containerized for fast execution with zero memory leaks.',
      highlights: [
        'Template parsing engine for ASCII glyph maps',
        'Robust edge-case handling for non-printable characters',
        'Clean responsive UI with copy-to-clipboard functionality',
        'Dockerized build'
      ],
      metrics: [
        { label: 'Stack', value: 'Go 1.22' },
        { label: 'Status Codes', value: 'Strict RFC' },
      ],
      githubUrl: 'https://github.com/paowuor/ascii-art-web'
    }
  ] as Project[],

  experience: [
    {
      id: 'zone01',
      role: 'Software Development Apprentice',
      company: 'Zone01 Kisumu',
      location: 'Kisumu, Kenya',
      period: 'April 2026 - Present',
      type: 'Full-Time Apprenticeship',
      highlights: [
        'Develop software projects using Go, Python, JavaScript, Java, Linux, Git, and databases through intensive project-based engineering training.',
        'Build backend and full-stack applications involving REST APIs, authentication, relational databases, algorithms, data structures, and software architecture.',
        'Apply software engineering practices including debugging, automated testing, peer code reviews, Git/GitHub workflows, and technical documentation.',
        'Leverage AI-assisted development tools (Claude, Google AI, Antigravity, GitHub Copilot) to research unfamiliar concepts, debug implementations, and accelerate project delivery.'
      ],
      skills: ['Go', 'Python', 'Java', 'Linux', 'PostgreSQL', 'Docker', 'Algorithms', 'Git']
    },
    {
      id: 'flexirides-pm',
      role: 'Project Manager - FlexiRides',
      company: 'Zone01 Kisumu',
      location: 'Kisumu, Kenya',
      period: 'May 2026 - Present',
      type: 'Leadership & Engineering',
      highlights: [
        'Leading an engineering team developing a 13-service microservices-based car-hailing platform for East African transport.',
        'Coordinate development tasks, sprint priorities, deliverables, dependencies, and blockers throughout the project lifecycle.',
        'Facilitate technical discussions, architecture planning, service contract documentation, and Git/GitHub collaboration standards.',
        'Translate complex product requirements into actionable engineering tasks and track delivery progress across the team.',
        'Use AI tools to test, review, debug, and improve pull requests before merging into the main deployment pipeline.'
      ],
      skills: ['Microservices', 'Spring Boot', 'Sprint Planning', 'PR Reviews', 'Docker', 'Architecture']
    },
    {
      id: 'cohere',
      role: 'AI Data Trainer',
      company: 'Cohere',
      location: 'Remote',
      period: 'June 2024 - December 2024',
      type: 'Contract',
      highlights: [
        'Evaluated and annotated large volumes of LLM-generated responses for quality, relevance, factual accuracy, and adherence to task-specific guidelines.',
        'Worked with prompt engineering and NLP concepts while contributing directly to responsible AI and model-quality workflows.',
        'Developed practical engineering experience understanding LLM behavior, identifying subtle hallucination errors, and applying structured evaluation criteria.'
      ],
      skills: ['LLM Evaluation', 'Prompt Engineering', 'NLP', 'Data Annotation', 'Model Quality']
    },
    {
      id: 'invisible',
      role: 'Customer Success Manager',
      company: 'Invisible Technologies',
      location: 'Remote',
      period: 'January 2024 - December 2024',
      type: 'Full-Time Remote',
      highlights: [
        'Managed relationships with 50+ global enterprise clients across the US, UK, and Europe in a fast-paced remote environment.',
        'Worked across technical and operational issues, translating client requirements into actionable solutions for internal technical teams.',
        'Communicated technical and operational updates clearly to both technical engineers and non-technical business stakeholders.'
      ],
      skills: ['Client Management', 'Technical Communication', 'Workflow Optimization', 'Operations']
    }
  ] as ExperienceItem[],

  education: [
    {
      institution: 'Zone01 Kisumu',
      program: 'Software Engineering & Systems Programming',
      period: 'Ongoing',
      focus: 'Peer-to-peer, project-driven engineering curriculum focusing on systems programming, Go, algorithms, and distributed systems.'
    },
    {
      institution: 'University of the People',
      program: "Bachelor's Degree in Computer Science",
      period: 'Ongoing',
      focus: 'Foundational computer science, data structures, algorithms, databases, discrete mathematics, and software design.'
    }
  ],

  articles: [
    {
      id: 'kopabridge-architecture',
      title: "Normalizing PAYGo Solar Data: Architecting KopaBridge's Alternative Credit Middleware",
      slug: 'normalizing-paygo-solar-data-kopabridge',
      summary: 'How we unified fragmented telemetry across off-grid solar providers into deterministic credit scoring models using NestJS, Prisma, and Redis.',
      category: 'Backend',
      readTime: '6 min read',
      publishedDate: 'Aug 2026',
      tags: ['NestJS', 'Fintech', 'PostgreSQL', 'Redis'],
      content: [
        "In sub-Saharan Africa, millions of individuals lack formal credit histories despite consistently paying for everyday services. Pay-As-You-Go (PAYGo) solar energy has emerged as one of the most reliable proxies for financial discipline: customers pay daily or weekly installments to keep their solar home systems active.",
        "However, integrating this data has historically been a nightmare. SunKing, M-KOPA, and Bboxx each use radically different API paradigms, proprietary timestamp formats, and varying status codes. When building KopaBridge, our goal was clear: create a normalized middleware layer that translates this chaos into a clean, unified REST interface.",
        "We chose NestJS with TypeScript for its robust dependency injection and modularity. By implementing the Provider Adapter pattern, each solar vendor communicates through a strictly typed interface that transforms raw payloads into a standardized `EnergyPaymentRecord`.",
        "To protect against high latency from external vendor APIs, we introduced Redis with a dual-tier cache: recent transaction lookups are cached with a short TTL, while calculated credit scores use a sliding-window invalidation policy based on new payment events. This brought average credit inquiry latency from 1.4 seconds down to 82 milliseconds."
      ]
    },
    {
      id: 'flexirides-microservices',
      title: 'Orchestrating 13 Microservices: Lessons from Project Managing FlexiRides in Spring Boot',
      slug: 'orchestrating-13-microservices-flexirides',
      summary: 'Managing sprint priorities, contract testing, and Dockerized deployments across a multi-service mobility platform in East Africa.',
      category: 'Architecture',
      readTime: '8 min read',
      publishedDate: 'Jul 2026',
      tags: ['Spring Boot', 'Microservices', 'Docker', 'Leadership'],
      content: [
        "Car-hailing platforms look deceptively simple from the client app: press a button, match with a car, reach your destination. Behind the scenes of FlexiRides, however, 13 independent microservices interact in real time to coordinate dispatch, driver KYC, geofencing, payment escrow, and trip telemetry.",
        "Stepping into the Project Manager role alongside my engineering duties taught me that microservices are as much an organizational challenge as they are an architectural one. Conway's Law is undeniable: if your team's communication channels are fractured, your microservice boundaries will be fractured too.",
        "We established strict API contracts using OpenAPI specifications before writing a single line of business logic. If the Booking Service needed a driver status from the Driver Management service, the JSON schema and error cases were agreed upon and mocked in tests first.",
        "Another crucial win was adopting GraalVM native compilation and standardized Docker Compose setups. By running lightweight native builds during local development, our developers could run the entire 13-service stack on a single development machine without melting their RAM."
      ]
    },
    {
      id: 'llm-eval-lessons',
      title: 'Evaluating LLMs for Production: What I Learned Annotating & Benchmarking at Cohere',
      slug: 'evaluating-llms-production-cohere',
      summary: 'Moving beyond naive vibe checks to deterministic rubrics, hallucination detection, and prompt resilience in generative AI.',
      category: 'AI',
      readTime: '5 min read',
      publishedDate: 'Jun 2026',
      tags: ['LLMs', 'Prompt Engineering', 'Evaluation', 'NLP'],
      content: [
        "Everyone can write a prompt that works once. Writing prompts and building AI systems that work 10,000 times without silent failure requires a completely different mindset. Working as an AI Data Trainer at Cohere gave me an under-the-hood perspective on how foundation models actually behave when pushed to their limits.",
        "The biggest takeaway was the necessity of rigorous evaluation rubrics. You cannot evaluate a model on 'goodness'—you must decompose quality into orthogonal axes: factual consistency, instruction following, boundary defense against jailbreaks, and tone adherence.",
        "I now apply these same principles to my everyday software engineering workflows. When using Claude or Google AI to assist with refactoring, code review, or writing unit tests, I treat the LLM as a junior engineer whose output requires systematic verification, automated test suites, and strict boundary constraints."
      ]
    },
    {
      id: 'go-stdlib-mastery',
      title: "Why Go's Standard Library is All You Need for Production Web Servers",
      slug: 'why-go-standard-library-is-enough',
      summary: 'Building our full-stack Forum project at Zone01 without third-party frameworks, and why simplicity triumphs in distributed systems.',
      category: 'Go',
      readTime: '4 min read',
      publishedDate: 'May 2026',
      tags: ['Go', 'Web Architecture', 'SQLite', 'Clean Code'],
      content: [
        "In modern web development, there is an instinct to reach for frameworks before understanding the underlying protocols. Need an API? Install Express or Gin. Need an ORM? Install Prisma or Gorm. But when we built Forum at Zone01 Kisumu, the constraint was absolute: standard library Go only.",
        "Initially, writing manual HTTP routing and SQL queries felt tedious. Within a week, however, the benefits became overwhelming. With `net/http` and `database/sql`, there are no hidden abstractions, no dependency version conflicts, and compilation completes in sub-second times.",
        "Go's `http.Handler` interface is one of the most elegant abstractions in computer science. By chaining middleware functions for authentication, logging, and CORS using standard Go idioms, we produced a binary that starts instantaneously and consumes less than 15MB of RAM."
      ]
    }
  ] as Article[],

  hobbies: [
    {
      icon: 'Headphones',
      title: 'Music & DJ Culture',
      description: 'Passionate about East African electronic music, Afrobeat rhythms, sound curation, and audio hardware. This passion directly inspired DJNextDoor to solve gig booking and mix discovery for local creators.'
    },
    {
      icon: 'Compass',
      title: 'Mobility & Urban Transit',
      description: 'Fascinated by matatu transport networks, route optimization, and solving transit inefficiencies in rapidly expanding African urban centers like Nairobi and Kisumu.'
    },
    {
      icon: 'Zap',
      title: 'Building for African Realities',
      description: 'Deeply driven by financial inclusion, off-grid solar energy systems, and software that thrives despite intermittent connectivity, cash-dominant markets, and diverse payment gateways.'
    },
    {
      icon: 'BookOpen',
      title: 'Continuous Mastery',
      description: 'Dedicated student of systems engineering, distributed architecture, and AI-assisted tooling through Zone01 and University of the People.'
    }
  ]
};
