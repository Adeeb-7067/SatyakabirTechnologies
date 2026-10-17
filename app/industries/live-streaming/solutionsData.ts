export interface SolutionHeroTitle {
  line1: string;
  line2Pink: string;
}

export interface SolutionFloatingBadge {
  title: string;
  subtitle: string;
  type: "encryption" | "latency" | "security" | "speed" | "audio" | "payout";
}

export interface SolutionMetric {
  value: string;
  label: string;
}

export interface SolutionSpec {
  label: string;
  value: string;
}

export interface SolutionFeature {
  title: string;
  description: string;
}

export interface SolutionLayer {
  title: string;
  description: string;
  tech: string;
}

export interface SolutionEcosystemPillar {
  title: string;
  subtitle: string;
  color: "purple" | "cyan" | "pink" | "green" | string;
}

export interface SolutionEcosystemSection {
  eyebrow: string;
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  checklist: string[];
  image: string;
  pillars: SolutionEcosystemPillar[];
}

export interface SolutionArchitectureCard {
  iconType: "smile" | "sparkle" | "star" | "shield" | string;
  title: string;
  description: string;
}

export interface SolutionCoreArchitectureSection {
  eyebrow: string;
  heading: string;
  subtitle: string;
  cards: SolutionArchitectureCard[];
}

export interface SolutionScreenshotsSection {
  eyebrow: string;
  heading: string;
  subtitle: string;
  image: string;
}

export interface SolutionTechItem {
  name: string;
  category?: string;
  color: string;
  iconType: "react" | "node" | "flutter" | "aws" | "websocket" | "postgres" | "webrtc" | "redis" | "docker" | "kubernetes" | "python" | "kafka" | string;
}

export interface SolutionTechStackSection {
  heading: string;
  subtitle: string;
  technologies: SolutionTechItem[];
}

export interface SolutionCTASection {
  eyebrow: string;
  heading: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface LiveStreamingSolutionData {
  slug: string;
  eyebrow: string;
  breadcrumbLabel: string;
  heroTitle: SolutionHeroTitle;
  subtitle: string;
  heroImage: string;
  floatingBadge1: SolutionFloatingBadge;
  floatingBadge2: SolutionFloatingBadge;
  heroMetrics: SolutionMetric[];
  ecosystemSection: SolutionEcosystemSection;
  coreArchitectureSection: SolutionCoreArchitectureSection;
  screenshotsSection: SolutionScreenshotsSection;
  techStackSection: SolutionTechStackSection;
  ctaSection: SolutionCTASection;
  overview: {
    image: string;
    paragraphs: string[];
    floatingPills: string[];
  };
  benchmarksHeading: {
    white: string;
    pink: string;
  };
  benchmarks: SolutionMetric[];
  specHeading: {
    white: string;
    pink: string;
  };
  specs: SolutionSpec[];
  featuresHeading: {
    white: string;
    pink: string;
  };
  features: SolutionFeature[];
  layersHeading: {
    white: string;
    pink: string;
  };
  layers: SolutionLayer[];
  ctaHeading: {
    white: string;
    pink: string;
  };
  ctaSubtitle: string;
}

export const defaultLiveTechStack: SolutionTechItem[] = [
  { name: "React JS", color: "#38bdf8", iconType: "react" },
  { name: "Node.js", color: "#22c55e", iconType: "node" },
  { name: "Flutter", color: "#0ea5e9", iconType: "flutter" },
  { name: "AWS Cloud", color: "#f59e0b", iconType: "aws" },
  { name: "WebSockets", color: "#3b82f6", iconType: "websocket" },
  { name: "PostgreSQL", color: "#06b6d4", iconType: "postgres" },
  { name: "WebRTC", color: "#ff2a85", iconType: "webrtc" },
  { name: "Redis", color: "#ef4444", iconType: "redis" },
  { name: "Docker", color: "#38bdf8", iconType: "docker" },
  { name: "Kubernetes", color: "#6366f1", iconType: "kubernetes" },
  { name: "FastAPI", color: "#10b981", iconType: "python" },
  { name: "Apache Kafka", color: "#d946ef", iconType: "kafka" },
];

export const liveStreamingSolutionsData: Record<string, LiveStreamingSolutionData> = {
  // 1. LIVE STREAMING PLATFORM
  "live-streaming-platform": {
    slug: "live-streaming-platform",
    breadcrumbLabel: "LIVE STREAMING",
    eyebrow: "NEXT-GEN MOBILE ECOSYSTEM V3.0",
    heroTitle: {
      line1: "A Perfect Live Streaming",
      line2Pink: "Application",
    },
    subtitle:
      "Go live, interact, receive gifts aur build karein ek ultimate creator economy ultra-low latency broadcasting ke sath.",
    heroImage: "/images/live-stream-hero-phone-clean.png",
    floatingBadge1: {
      title: "End-to-End Encrypted",
      subtitle: "Zero-knowledge secure enclave",
      type: "encryption",
    },
    floatingBadge2: {
      title: "Ultra-Low Latency",
      subtitle: "99.96% instantaneous sync rate",
      type: "latency",
    },
    heroMetrics: [
      { value: "1M+", label: "CONCURRENT USERS" },
      { value: "<200ms", label: "VIDEO LATENCY" },
      { value: "1080p", label: "HD STREAMING" },
      { value: "99.9%", label: "APP UPTIME" },
    ],
    ecosystemSection: {
      eyebrow: "COMING UP IN NEXT SPRINT",
      heading: {
        line1: "The Ultimate Broadcasting",
        line2: "Ecosystem",
      },
      description:
        "We build a scalable live streaming architecture that connects creators and agencies with their audience in real time. This platform eliminates buffering and high-latency issues to provide a seamless virtual engagement experience.",
      checklist: [
        "Ultra-low latency WebRTC and RTMP streaming protocols.",
        "In-built virtual gifting and coin-based monetization wallet.",
        "High-throughput real-time chat and PK battles integration.",
        "AI-driven automated moderation for a safe community environment.",
      ],
      image: "/images/live-solution-ecosystem.jpg",
      pillars: [
        { title: "Broadcast", subtitle: "Seamlessly", color: "purple" },
        { title: "Interact", subtitle: "Instantly", color: "cyan" },
        { title: "Monetize", subtitle: "Easily", color: "pink" },
        { title: "Grow", subtitle: "Massively", color: "green" },
      ],
    },
    coreArchitectureSection: {
      eyebrow: "CORE ARCHITECTURE",
      heading: "Revolutionize Creator Engagement",
      subtitle:
        "A flawless broadcasting experience that deeply connects creators with their audience and helps generate direct revenue.",
      cards: [
        {
          iconType: "smile",
          title: "Zero-Lag Streaming",
          description:
            "Real-time interaction with <200ms delay, ensuring seamless video playback even with thousands of concurrent viewers.",
        },
        {
          iconType: "sparkle",
          title: "Virtual Gifting Economy",
          description:
            "Viewers can send animated 3D gifts, which creators can instantly redeem for real money.",
        },
        {
          iconType: "star",
          title: "Co-Hosting & PK Battles",
          description:
            "Split-screen live broadcasting for multiple hosts and competitive tipping battles to boost audience engagement.",
        },
        {
          iconType: "shield",
          title: "Auto Content Moderation",
          description:
            "AI filters that detect and block inappropriate language and visuals in real time.",
        },
      ],
    },
    screenshotsSection: {
      eyebrow: "MODERN INTERFACE",
      heading: "Our App Screenshots",
      subtitle:
        "Experience the dark, sleek UI carefully tailored for distraction-free workflows.",
      image: "/images/live-solution-screenshots-clean.png",
    },
    techStackSection: {
      heading: "Enterprise-Grade Technology Stack",
      subtitle:
        "Engineered for high concurrency and zero-downtime deployments.",
      technologies: defaultLiveTechStack,
    },
    ctaSection: {
      eyebrow: "STAY AHEAD",
      heading: "Ready to build your streaming empire?",
      subtitle: "Launch a scalable and highly profitable live video platform today.",
      primaryButtonText: "Book a Demo",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Talk to Experts",
      secondaryButtonLink: "/contact",
    },
    overview: {
      image: "/images/live-pocket-phones.jpg",
      paragraphs: [
        "Our enterprise live streaming infrastructure is engineered for hyper-scale creator broadcasts, interactive e-commerce live shopping, and real-time audience engagement.",
        "Built on low-latency WebRTC and adaptive HLS fallback, broadcasts seamlessly scale from 10 viewers to over 1,000,000 concurrent participants without frame drops or audio desync.",
        "Monetize instantly with multi-tier virtual gifts, interactive real-time polls, dynamic PK battles, creator tipping pools, and complete automated agency revenue split calculations."
      ],
      floatingPills: ["WebRTC & CMAF Sub-Second Sync", "Animated 3D Gift Engine", "PK Battles & Split Screens", "AI Moderation Guard"]
    },
    benchmarksHeading: {
      white: "Proven metrics from a",
      pink: "production deployment.",
    },
    benchmarks: [
      { value: "1,200,000+", label: "Peak Concurrent Broadcasters" },
      { value: "<180ms", label: "Global Edge Stream Latency" },
      { value: "60 FPS", label: "Smooth Visual Rendition" },
      { value: "99.99%", label: "Broadcast Uptime SLA" },
    ],
    specHeading: {
      white: "Engineered to production specs, not an",
      pink: "MVP prototype.",
    },
    specs: [
      { label: "Streaming Protocols", value: "WebRTC, RTMP, SRT, HLS Adaptive Bitrate" },
      { label: "Encoding Pipeline", value: "Hardware NVENC, H.264, H.265 (HEVC), AV1" },
      { label: "Audio Fidelity", value: "Opus 48kHz Full-Band Stereo, Noise Suppression" },
      { label: "Gift Engine", value: "SVGA, Lottie, WebGL 3D Real-Time Particle Physics" },
      { label: "Security & Encryption", value: "DTLS-SRTP, AES-256, DRM Tokenization" },
      { label: "Edge CDN Coverage", value: "320+ Global PoPs with Anycast BGP Routing" },
    ],
    featuresHeading: {
      white: "Core features of the",
      pink: "streaming engine.",
    },
    features: [
      {
        title: "Ultra-Low Latency Ingestion",
        description: "Sub-200ms glass-to-glass latency enabling real-time voice chat, question answers, and spontaneous creator reactions."
      },
      {
        title: "Virtual Gifting & Tipping",
        description: "Spectacular full-screen 3D animated gifts with customized sound effects, diamond conversions, and instant wallet credit."
      },
      {
        title: "Co-Hosting & PK Battles",
        description: "Multi-guest live split screens, interactive timed versus battles, fan voting meters, and automated winner calculations."
      },
      {
        title: "AI Real-Time Content Shield",
        description: "Automated computer vision filter detecting explicit content, copyrighted audio, hate speech, and policy violations within 350ms."
      },
      {
        title: "Adaptive Bitrate Streaming",
        description: "Dynamic multi-resolution ladder adjusting from 360p on 3G to 1080p60 on 5G without buffering or disconnecting users."
      },
      {
        title: "Agency & Talent Management",
        description: "Dedicated agency command center to recruit talent, track streaming hours, audit revenue shares, and execute automated batch payouts."
      }
    ],
    layersHeading: {
      white: "Enterprise live streaming",
      pink: "architecture stack.",
    },
    layers: [
      {
        title: "Client & Presentation Layer",
        description: "Native iOS (Swift), Android (Kotlin), and Web (React/Next.js) video renderers utilizing Metal, Vulkan, and WebGL hardware acceleration.",
        tech: "Swift, Kotlin, WebGL, Metal, WebRTC C++ Core"
      },
      {
        title: "Selective Forwarding Unit (SFU)",
        description: "High-throughput clustered SFU media servers redistributing incoming video feeds across global edge nodes with zero transcode overhead.",
        tech: "Mediasoup, LiveKit, Rust Edge Relay, Go WebRTC"
      },
      {
        title: "Real-Time Signaling & Chat Hub",
        description: "Distributed WebSocket and gRPC message bus delivering up to 500,000 chat messages and gift events per second per live room.",
        tech: "Redis Cluster, Apache Kafka, Go WebSockets, gRPC"
      },
      {
        title: "Security, Ledger & Billing Enclave",
        description: "Cryptographically verified virtual ledger managing coin balances, in-app purchases, tax withholding, and instant automated bank payouts.",
        tech: "PostgreSQL, Stripe, Razorpay, Cashfree, AWS KMS"
      }
    ],
    ctaHeading: {
      white: "Launch your own live streaming platform in",
      pink: "7 days.",
    },
    ctaSubtitle: "Complete source code ownership, zero monthly royalties, and turnkey deployment on your AWS or Google Cloud infrastructure."
  },

  // 2. DATING APPLICATION
  "dating-application": {
    slug: "dating-application",
    breadcrumbLabel: "DATING APPLICATION",
    eyebrow: "AI MATCHMAKING ECOSYSTEM V3.0",
    heroTitle: {
      line1: "Next-Gen Smart Dating",
      line2Pink: "Application",
    },
    subtitle:
      "Match, chat and build meaningful connections using smart matchmaking algorithms, verified profiles and interactive icebreakers.",
    heroImage: "/images/live-dating-devices.jpg",
    floatingBadge1: {
      title: "AI Profile Verification",
      subtitle: "Facial liveness verification",
      type: "security",
    },
    floatingBadge2: {
      title: "Smart Match Score",
      subtitle: "98.4% compatibility accuracy",
      type: "speed",
    },
    heroMetrics: [
      { value: "5M+", label: "ACTIVE MATCHES" },
      { value: "<100ms", label: "CHAT LATENCY" },
      { value: "4.8★", label: "APP STORE RATING" },
      { value: "99.9%", label: "SECURE UPTIME" },
    ],
    ecosystemSection: {
      eyebrow: "SMART MATCHING ENGINE",
      heading: {
        line1: "The Intelligent Matchmaking",
        line2: "Ecosystem",
      },
      description:
        "We engineer high-conversion dating platforms that connect verified singles through intelligent compatibility algorithms, real-time video speed dating, and secure geolocation.",
      checklist: [
        "Biometric facial verification and liveness anti-fraud shield.",
        "High-definition video speed dating with conversation prompts.",
        "Hyper-local radar discovery with privacy distance masking.",
        "In-app wallet for coins, super likes, and profile spotlight boosts.",
      ],
      image: "/images/live-dating-devices.jpg",
      pillars: [
        { title: "Discover", subtitle: "Intelligently", color: "purple" },
        { title: "Connect", subtitle: "Instantly", color: "cyan" },
        { title: "Engage", subtitle: "Safely", color: "pink" },
        { title: "Match", subtitle: "Meaningfully", color: "green" },
      ],
    },
    coreArchitectureSection: {
      eyebrow: "CORE ARCHITECTURE",
      heading: "Intelligent Matchmaking Mechanics",
      subtitle:
        "High-conversion connection workflows that elevate profile authenticity, prevent ghosting, and foster real romance.",
      cards: [
        {
          iconType: "smile",
          title: "AI Chemistry Matching",
          description:
            "Multi-dimensional algorithmic pairing based on personality traits, verified interests, and behavioral engagement patterns.",
        },
        {
          iconType: "sparkle",
          title: "Icebreakers & Prompts",
          description:
            "Interactive voice prompts and speed-date question games that spark effortless, engaging first conversations.",
        },
        {
          iconType: "star",
          title: "VIP Profile Spotlight",
          description:
            "Boost profile visibility up to 10x in local radar feeds with animated super-like badges and priority inbox placement.",
        },
        {
          iconType: "shield",
          title: "Biometric Liveness Shield",
          description:
            "Automated facial recognition verification preventing fake profiles, catfishing, and automated spam bots.",
        },
      ],
    },
    screenshotsSection: {
      eyebrow: "INTUITIVE MATCH UI",
      heading: "Our App Screenshots",
      subtitle:
        "Sleek dark interface designed for seamless profile discovery, swipe interactions, and authentic conversation flows.",
      image: "/images/live-solution-screenshots-clean.png",
    },
    techStackSection: {
      heading: "Enterprise-Grade Technology Stack",
      subtitle:
        "Engineered for high concurrency and zero-downtime deployments.",
      technologies: defaultLiveTechStack,
    },
    ctaSection: {
      eyebrow: "STAY AHEAD",
      heading: "Ready to build your dating empire?",
      subtitle: "Launch a scalable and highly profitable matchmaking platform today.",
      primaryButtonText: "Book a Demo",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Talk to Experts",
      secondaryButtonLink: "/contact",
    },
    overview: {
      image: "/images/live-case-study-banner.jpg",
      paragraphs: [
        "A luxury, high-conversion dating ecosystem built with intuitive swipe gestures, AI facial recognition verification, smart geolocation radar, and interactive video speed dating.",
        "Tackle catfishing and spam upfront with biometric liveness checks, automated phone and Aadhaar/Govt ID verification, and end-to-end encrypted direct messaging.",
        "Monetize sustainably through premium subscription tiers, profile boosts, super likes, travel pass mode, and virtual gifting inside one-on-one video dates."
      ],
      floatingPills: ["Biometric Liveness Verification", "Geo-Proximity Distance Radar", "Video Speed Dating", "VIP Gold & Platinum Tiers"]
    },
    benchmarksHeading: {
      white: "Numbers from proven",
      pink: "dating platforms.",
    },
    benchmarks: [
      { value: "5,000,000+", label: "Matches Formed" },
      { value: "94%", label: "Fake Profile Reduction" },
      { value: "<100ms", label: "Direct Message Latency" },
      { value: "4.8 / 5.0", label: "User App Rating" },
    ],
    specHeading: {
      white: "Engineered to clear architectural",
      pink: "benchmarks.",
    },
    specs: [
      { label: "Matching Algorithms", value: "Collaborative Filtering, Vector Distance & Geo-Radius" },
      { label: "Verification Security", value: "3D Face Biometric Liveness, OCR Govt ID Matching" },
      { label: "Messaging Engine", value: "E2E Encrypted XMPP / WebSockets with Signal Protocol" },
      { label: "Video Call Engine", value: "Peer-to-Peer WebRTC with AI Blur & Filter Canvas" },
      { label: "Monetization Tiers", value: "Boost, Super Like, Rewind, Incognito & Passport" },
      { label: "Cloud Infrastructure", value: "Multi-Region AWS ECS, Redis Cache, Postgres DB" },
    ],
    featuresHeading: {
      white: "Core features of the",
      pink: "dating platform.",
    },
    features: [
      {
        title: "Smart Compatibility Engine",
        description: "Deep learning algorithms calculating interest affinities, lifestyle habits, and personality compatibility percentages."
      },
      {
        title: "Verified Badge with Liveness Detection",
        description: "Users capture a 3-second live selfie pose to unlock verified profile checkmarks, eliminating fake accounts."
      },
      {
        title: "Video Speed Dating",
        description: "Timed 3-minute blind video dates where mutual likes reveal names and unlock private chat threads."
      },
      {
        title: "Geo-Radius Passport & Map",
        description: "Interactive map view showing singles in nearby cafes, events, and college campuses, or change location globally."
      },
      {
        title: "Anti-Screenshot & Safe Media",
        description: "Ephemerally encrypted photos with screenshot detection alerts and automatic blur on unrequested media."
      },
      {
        title: "Comprehensive Admin Moderation",
        description: "Complete user audit logs, instant shadow-banning, report triage dashboards, and automated refund management."
      }
    ],
    layersHeading: {
      white: "Dating platform technical",
      pink: "architecture stack.",
    },
    layers: [
      {
        title: "Mobile Client Experience",
        description: "Fluid 120Hz gesture navigation, custom haptic feedback, local caching, and offline profile swipe queues.",
        tech: "React Native / Flutter / Native iOS & Android"
      },
      {
        title: "Matchmaking & Recommendation Microservice",
        description: "Elasticsearch and vector embeddings running spatial-temporal ranking queries in under 15ms per swipe batch.",
        tech: "Python FastAPI, PyTorch, Pinecone, Redis"
      },
      {
        title: "Encrypted Chat & Real-Time Presence",
        description: "End-to-end encrypted messaging with typing indicators, audio voice notes, and read receipt sync.",
        tech: "Elixir / Phoenix Channels, WebSockets, WebRTC"
      },
      {
        title: "In-App Purchases & Subscriptions",
        description: "Apple In-App Purchases, Google Play Billing, and Stripe integration with automated receipt validation.",
        tech: "Node.js, RevenueCat, PostgreSQL, Redis"
      }
    ],
    ctaHeading: {
      white: "Launch your custom dating app in",
      pink: "7 days.",
    },
    ctaSubtitle: "100% intellectual property rights, source code handover, and customizable UI design for your target demographic."
  },

  // 3. RANDOM VIDEO CALLING
  "random-video-calling": {
    slug: "random-video-calling",
    breadcrumbLabel: "RANDOM VIDEO CALLING",
    eyebrow: "PEER-TO-PEER WEBRTC V3.0",
    heroTitle: {
      line1: "High-Speed Random Video",
      line2Pink: "Calling Platform",
    },
    subtitle:
      "1-to-1 and group video chat with instant interest filters, dynamic gender matching and ultra-fast WebRTC speeds.",
    heroImage: "/images/live-pocket-phones.jpg",
    floatingBadge1: {
      title: "Instant Pairing",
      subtitle: "<1.2s random match speed",
      type: "speed",
    },
    floatingBadge2: {
      title: "Direct P2P WebRTC",
      subtitle: "60FPS encrypted stream",
      type: "latency",
    },
    heroMetrics: [
      { value: "10M+", label: "DAILY CALLS" },
      { value: "<150ms", label: "P2P LATENCY" },
      { value: "60 FPS", label: "HD QUALITY" },
      { value: "99.95%", label: "CALL SUCCESS" },
    ],
    ecosystemSection: {
      eyebrow: "HIGH-THROUGHPUT WEBRTC",
      heading: {
        line1: "High-Speed Real-Time",
        line2: "Video Mesh",
      },
      description:
        "Engineered for instantaneous 1-to-1 and group video roulette with zero connection dropouts, AI toxicity filters, and custom interest-based routing algorithms.",
      checklist: [
        "Sub-150ms connection latency via distributed global TURN/STUN relays.",
        "On-device computer vision for automated NSFW blur and user safety.",
        "Dynamic gender, country, and shared-interest pairing filters.",
        "Duration-based calling coins and virtual gift monetization.",
      ],
      image: "/images/live-pocket-phones.jpg",
      pillars: [
        { title: "Connect", subtitle: "Randomly", color: "purple" },
        { title: "Protect", subtitle: "Automated", color: "cyan" },
        { title: "Filter", subtitle: "Accurately", color: "pink" },
        { title: "Monetize", subtitle: "Continuously", color: "green" },
      ],
    },
    coreArchitectureSection: {
      eyebrow: "CORE ARCHITECTURE",
      heading: "Instantaneous Global Video Mesh",
      subtitle:
        "Ultra-fast peer matching infrastructure with automatic safety controls and crystal-clear WebRTC video fidelity.",
      cards: [
        {
          iconType: "smile",
          title: "Sub-Second Pairing",
          description:
            "Intelligent matching queue connects callers in under 800ms across 150+ countries with adaptive bandwidth optimization.",
        },
        {
          iconType: "sparkle",
          title: "Virtual Filters & Masks",
          description:
            "Real-time 3D AR face filters, background blur, and lighting enhancement running directly on user devices.",
        },
        {
          iconType: "star",
          title: "Gender & Region Selectors",
          description:
            "Customizable discovery filters enabling users to connect specifically with matching demographics and shared hobbies.",
        },
        {
          iconType: "shield",
          title: "Automated NSFW Blur",
          description:
            "On-device neural network monitors video frames in real time and instantly blanks camera feeds upon guideline violations.",
        },
      ],
    },
    screenshotsSection: {
      eyebrow: "REAL-TIME WEBRTC INTERFACE",
      heading: "Our App Screenshots",
      subtitle:
        "Instantaneous connection controls with zero-latency video rendering and automated camera privacy filters.",
      image: "/images/live-solution-screenshots-clean.png",
    },
    techStackSection: {
      heading: "Enterprise-Grade Technology Stack",
      subtitle:
        "Engineered for high concurrency and zero-downtime deployments.",
      technologies: defaultLiveTechStack,
    },
    ctaSection: {
      eyebrow: "STAY AHEAD",
      heading: "Ready to build your video chat empire?",
      subtitle: "Launch a scalable and ultra-fast real-time video platform today.",
      primaryButtonText: "Book a Demo",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Talk to Experts",
      secondaryButtonLink: "/contact",
    },
    overview: {
      image: "/images/live-solution-stream-phone.jpg",
      paragraphs: [
        "A hyper-responsive random video calling platform connecting global users instantly using peer-to-peer WebRTC mesh routing and intelligent pairing algorithms.",
        "Users can filter by country, language, gender, and mutual interests with a simple swipe to skip to the next caller in under 800 milliseconds.",
        "Includes real-time AI computer vision moderation that blurs camera feeds on suspicious or indecent behavior, safeguarding community guidelines automatically."
      ],
      floatingPills: ["P2P Direct WebRTC", "Instant 800ms Skip Matching", "AI Live Camera Guard", "Country & Gender Filters"]
    },
    benchmarksHeading: {
      white: "High-throughput calling",
      pink: "benchmarks.",
    },
    benchmarks: [
      { value: "10,000,000+", label: "Daily Connected Calls" },
      { value: "<1.2s", label: "Average Match Connection Time" },
      { value: "99.95%", label: "Call Connection Success Rate" },
      { value: "0.01%", label: "Reported Community Violations" },
    ],
    specHeading: {
      white: "Engineered for maximum speed and",
      pink: "safety.",
    },
    specs: [
      { label: "Signaling Speed", value: "WebSocket cluster with <45ms message broadcast" },
      { label: "Connection Protocol", value: "STUN / TURN traversal with ICE Candidate ranking" },
      { label: "Client Video Engine", value: "WebRTC M98+, Hardware VP8/VP9/H.264 codecs" },
      { label: "AI Safety Filter", value: "TensorFlow Lite on-device live nudity & policy scanner" },
      { label: "Coin Monetization", value: "Gender filter coins, friend requests, match boosters" },
      { label: "Turnover Scalability", value: "Autoscaling Kubernetes Coturn & Go Signaling Nodes" },
    ],
    featuresHeading: {
      white: "Core features of the",
      pink: "video calling platform.",
    },
    features: [
      {
        title: "Sub-Second Pairing Engine",
        description: "Optimized queue system pairing users by shared topics, mutual preferences, and geographic proximity in under a second."
      },
      {
        title: "Live Camera AI Blurring",
        description: "Real-time on-device machine learning that instantaneously blurs the video feed if inappropriate gestures or content are spotted."
      },
      {
        title: "Coin & Filter Economy",
        description: "Users spend coins to choose specific countries, select gender preferences, or send animated gifts during calls."
      },
      {
        title: "Friend List & Re-Dialing",
        description: "Save favorite callers to a private contact list to initiate direct scheduled calls and private chat threads."
      },
      {
        title: "Global TURN Server Fallback",
        description: "Worldwide TURN relay network ensuring 100% call success even across strict corporate firewalls and symmetric NATs."
      },
      {
        title: "Real-Time Moderation Console",
        description: "Instant screenshot audits on reported calls, device IP bans, and automated machine learning user risk scores."
      }
    ],
    layersHeading: {
      white: "High-speed WebRTC",
      pink: "platform architecture.",
    },
    layers: [
      {
        title: "Edge Client WebRTC Engine",
        description: "Hardware-accelerated video rendering, dynamic echo cancellation, and real-time AR face stickers.",
        tech: "WebRTC Native C++, Banuba / DeepAR SDK"
      },
      {
        title: "Pairing & Signaling Cluster",
        description: "Ultra-fast Go microservices handling queue pools, match ranking, and ICE SDP negotiation.",
        tech: "Golang, Gorilla WebSocket, Redis Streams"
      },
      {
        title: "Global TURN / STUN Mesh",
        description: "Geo-distributed Coturn relay clusters deployed across 15 cloud regions for zero-buffer peer connections.",
        tech: "Coturn, AWS Global Accelerator, Terraform"
      },
      {
        title: "Real-Time Safety & Billing",
        description: "Microservice running automated risk telemetry, credit deductions, and instant payment gateway webhooks.",
        tech: "Node.js, PostgreSQL, Stripe, Razorpay"
      }
    ],
    ctaHeading: {
      white: "Build your random video calling app in",
      pink: "7 days.",
    },
    ctaSubtitle: "Turnkey enterprise WebRTC codebase with ready-to-deploy iOS, Android, and web client apps."
  },

  // 4. SOCIAL DISCOVERY
  "social-discovery": {
    slug: "social-discovery",
    breadcrumbLabel: "SOCIAL DISCOVERY",
    eyebrow: "GEOLOCATION & SOCIAL FEEDS V3.0",
    heroTitle: {
      line1: "Hyper-Local Social Discovery",
      line2Pink: "Application",
    },
    subtitle:
      "Meet new people, follow trending creators, chat and expand your global network through interactive stories and geo-radius radar.",
    heroImage: "/images/live-case-study-banner.jpg",
    floatingBadge1: {
      title: "Geo-Radius Radar",
      subtitle: "Hyperlocal precision filter",
      type: "speed",
    },
    floatingBadge2: {
      title: "Real-Time Feeds",
      subtitle: "Instant socket story sync",
      type: "latency",
    },
    heroMetrics: [
      { value: "2.5M+", label: "DISCOVERIES" },
      { value: "50+", label: "COUNTRIES" },
      { value: "100K+", label: "COMMUNITIES" },
      { value: "99.9%", label: "FEED UPTIME" },
    ],
    ecosystemSection: {
      eyebrow: "NEXT-GEN COMMUNITY ENGINE",
      heading: {
        line1: "The Interactive Community",
        line2: "Ecosystem",
      },
      description:
        "A feature-rich social ecosystem combining vertical video feeds, live audio lounges, interactive group broadcasts, and direct creator monetization.",
      checklist: [
        "Algorithmic short-form video feed with sub-second swipe latency.",
        "Interactive drop-in audio stages with speaker queue management.",
        "Direct fan tipping with zero-delay creator wallet synchronization.",
        "End-to-end encrypted direct messaging and ephemeral stories.",
      ],
      image: "/images/live-case-study-banner.jpg",
      pillars: [
        { title: "Publish", subtitle: "Effortlessly", color: "purple" },
        { title: "Socialize", subtitle: "Seamlessly", color: "cyan" },
        { title: "Reward", subtitle: "Directly", color: "pink" },
        { title: "Expand", subtitle: "Globally", color: "green" },
      ],
    },
    coreArchitectureSection: {
      eyebrow: "CORE ARCHITECTURE",
      heading: "Dynamic Community Exploration",
      subtitle:
        "Interactive social tools empowering users to discover creators, join vibrant sub-communities, and consume trending media.",
      cards: [
        {
          iconType: "smile",
          title: "Hyperlocal Radar Feeds",
          description:
            "Explore creators and trending events within an adjustable kilometer radius with real-time presence indicators.",
        },
        {
          iconType: "sparkle",
          title: "Ephemeral Story Engine",
          description:
            "24-hour interactive multimedia stories with animated polls, link stickers, and direct private story replies.",
        },
        {
          iconType: "star",
          title: "Creator VIP Lounges",
          description:
            "Exclusive gated community spaces where top fans access premium posts, behind-the-scenes streams, and direct chats.",
        },
        {
          iconType: "shield",
          title: "Proactive Spam Defender",
          description:
            "Autonomous threat intelligence models detect malicious links, coordinated harassment, and bulk bot accounts.",
        },
      ],
    },
    screenshotsSection: {
      eyebrow: "COMMUNITY DISCOVERY RADAR",
      heading: "Our App Screenshots",
      subtitle:
        "Modern interactive UI built for creator feeds, live vertical video consumption, and dynamic community exploration.",
      image: "/images/live-solution-screenshots-clean.png",
    },
    techStackSection: {
      heading: "Enterprise-Grade Technology Stack",
      subtitle:
        "Engineered for high concurrency and zero-downtime deployments.",
      technologies: defaultLiveTechStack,
    },
    ctaSection: {
      eyebrow: "STAY AHEAD",
      heading: "Ready to build your social discovery empire?",
      subtitle: "Launch an engaging community-driven live platform today.",
      primaryButtonText: "Book a Demo",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Talk to Experts",
      secondaryButtonLink: "/contact",
    },
    overview: {
      image: "/images/live-dating-devices.jpg",
      paragraphs: [
        "A vibrant social discovery hub that blends short-form stories, geo-located discovery radars, interest-based groups, and direct messaging.",
        "Allows users to discover like-minded creators, attend local meetups, post real-time multimedia updates, and participate in community discussions.",
        "Equipped with comprehensive monetization tools including creator subscription feeds, sponsored post placements, and virtual event tickets."
      ],
      floatingPills: ["Location-Based Radar", "Ephemeral Video Stories", "Interest Communities", "Creator VIP Feeds"]
    },
    benchmarksHeading: {
      white: "Social discovery platform",
      pink: "scale metrics.",
    },
    benchmarks: [
      { value: "2,500,000+", label: "Community Connections" },
      { value: "<85ms", label: "Feed Load Time" },
      { value: "12 mins", label: "Average Session Duration" },
      { value: "99.9%", label: "API Availability" },
    ],
    specHeading: {
      white: "Built for massive feeds and",
      pink: "infinite scrolling.",
    },
    specs: [
      { label: "Feed Architecture", value: "Fan-out on write Redis feed cache with timeline sharding" },
      { label: "Geo-Location Query", value: "PostGIS spatial index with H3 geospatial hexagonal grids" },
      { label: "Media CDN Ingestion", value: "Automated transcode to WebP & HLS with thumbnail sprite generation" },
      { label: "Community Structure", value: "Public, private, and token-gated membership tiers" },
      { label: "Chat Architecture", value: "Persistent group messaging with voice clips and stickers" },
      { label: "Data Compliance", value: "GDPR compliant data purge and user location fuzzing option" },
    ],
    featuresHeading: {
      white: "Core features of social",
      pink: "discovery.",
    },
    features: [
      {
        title: "Geo-Radius Discovery Radar",
        description: "Interactive visual radar showing nearby users, public stories, and trending venues with privacy distance fuzzing."
      },
      {
        title: "Interactive Video Stories",
        description: "24-hour ephemeral video stories with stickers, music overlays, polls, question boxes, and reaction meters."
      },
      {
        title: "Niche Interest Communities",
        description: "Custom forums for hobbies, fitness, gaming, and local networking with moderator controls and pin boards."
      },
      {
        title: "Creator VIP Subscription Feeds",
        description: "Creators offer subscriber-only premium posts, backstage video drops, and exclusive community group chats."
      },
      {
        title: "Smart Spam & Bot Defense",
        description: "Automated behavioral rate-limiting, shadow-bans for spam accounts, and sentiment analysis on comments."
      },
      {
        title: "Live Audio & Video Meetups",
        description: "Instant drop-in voice rooms and group video lounges for community discussions and virtual hangout nights."
      }
    ],
    layersHeading: {
      white: "Social discovery technical",
      pink: "architecture stack.",
    },
    layers: [
      {
        title: "Interactive Client Framework",
        description: "Cross-platform mobile apps with optimized image caching, virtualized lists, and buttery 120fps physics animations.",
        tech: "React Native, Reanimated 3, FastImage, Native Modules"
      },
      {
        title: "Feed Generation & Timeline Pipeline",
        description: "High-performance timeline generator serving personalized activity feeds with sub-80ms p95 latency.",
        tech: "Node.js / Go, Redis Cluster, Apache Cassandra"
      },
      {
        title: "Geospatial Indexing Engine",
        description: "Hyper-optimized PostGIS and Uber H3 spatial index mapping coordinates to neighborhood hexagonal cells.",
        tech: "PostgreSQL, PostGIS, Uber H3, Elastic"
      },
      {
        title: "Multimedia Pipeline & CDN",
        description: "Event-driven serverless video processing pipeline generating adaptive streams and watermarked images.",
        tech: "AWS Lambda, FFmpeg, Cloudflare Stream, S3"
      }
    ],
    ctaHeading: {
      white: "Launch your social discovery platform in",
      pink: "7 days.",
    },
    ctaSubtitle: "Complete white-label solution with full source code ownership, customizable branding, and turnkey deployment."
  },

  // 5. CREATOR PLATFORM
  "creator-platform": {
    slug: "creator-platform",
    breadcrumbLabel: "CREATOR PLATFORM",
    eyebrow: "CREATOR MONETIZATION SUITE V3.0",
    heroTitle: {
      line1: "Ultimate Creator Economy",
      line2Pink: "Platform",
    },
    subtitle:
      "Monetization tools for creators and hosts, including exclusive VIP content, virtual gifts tipping, and automated agency revenue splits.",
    heroImage: "/images/live-solution-stream-phone.jpg",
    floatingBadge1: {
      title: "Automated Payouts",
      subtitle: "Direct bank & UPI splits",
      type: "payout",
    },
    floatingBadge2: {
      title: "Virtual Gifting Engine",
      subtitle: "Instant creator tipping engine",
      type: "speed",
    },
    heroMetrics: [
      { value: "₹25Cr+", label: "CREATOR PAYOUTS" },
      { value: "15K+", label: "VERIFIED HOSTS" },
      { value: "500+", label: "ACTIVE AGENCIES" },
      { value: "0%", label: "PAYOUT DELAYS" },
    ],
    ecosystemSection: {
      eyebrow: "ENTERPRISE MONETIZATION",
      heading: {
        line1: "The Full-Stack Creator",
        line2: "Economy Suite",
      },
      description:
        "Empower talent agencies and independent creators with tiered fan subscriptions, pay-per-view live broadcast gates, digital merchandise, and automated payouts.",
      checklist: [
        "Tiered monthly fan memberships with exclusive content vaults.",
        "Pay-per-view live ticketed concerts, masterclasses, and Q&As.",
        "Multi-agency commission split calculations and automated payouts.",
        "Comprehensive creator analytics dashboard and retention heatmaps.",
      ],
      image: "/images/live-solution-ecosystem.jpg",
      pillars: [
        { title: "Produce", subtitle: "Exclusively", color: "purple" },
        { title: "Retain", subtitle: "Loyalty", color: "cyan" },
        { title: "Earn", subtitle: "Uncapped", color: "pink" },
        { title: "Scale", subtitle: "Seamlessly", color: "green" },
      ],
    },
    coreArchitectureSection: {
      eyebrow: "CORE ARCHITECTURE",
      heading: "Enterprise Creator Monetization",
      subtitle:
        "Turn broadcast viewership into recurring revenue with multi-tier agency dashboards, tipping engines, and instant payouts.",
      cards: [
        {
          iconType: "smile",
          title: "Recurring Memberships",
          description:
            "Customizable multi-tier subscription plans unlocking exclusive badges, private chatrooms, and subscriber-only streams.",
        },
        {
          iconType: "sparkle",
          title: "Gamified Gift Leaderboards",
          description:
            "Competitive in-room tipping animations and real-time top donor leaderboards that motivate higher contribution volume.",
        },
        {
          iconType: "star",
          title: "Agency Split Calculations",
          description:
            "Automated revenue sharing rules split gross earnings among creator, talent manager, and platform operator in real time.",
        },
        {
          iconType: "shield",
          title: "Ledger Financial Security",
          description:
            "Tamper-proof virtual coin accounting, double-entry ledger audits, and PCI-DSS compliant payment gateway integrations.",
        },
      ],
    },
    screenshotsSection: {
      eyebrow: "CREATOR STUDIO INTERFACE",
      heading: "Our App Screenshots",
      subtitle:
        "Enterprise-grade creator control dashboards with real-time revenue analytics, gifting monitors, and audience retention metrics.",
      image: "/images/live-solution-screenshots-clean.png",
    },
    techStackSection: {
      heading: "Enterprise-Grade Technology Stack",
      subtitle:
        "Engineered for high concurrency and zero-downtime deployments.",
      technologies: defaultLiveTechStack,
    },
    ctaSection: {
      eyebrow: "STAY AHEAD",
      heading: "Ready to build your creator economy empire?",
      subtitle: "Empower creators with direct monetization and live tipping today.",
      primaryButtonText: "Book a Demo",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Talk to Experts",
      secondaryButtonLink: "/contact",
    },
    overview: {
      image: "/images/live-pocket-phones.jpg",
      paragraphs: [
        "An all-in-one creator economy ecosystem empowering influencers, live broadcasters, and agency managers with end-to-end monetization tools.",
        "Features customizable VIP membership subscriptions, pay-per-view private live streams, interactive 3D gift tipping, and digital merchandise stores.",
        "Built-in multi-tier agency command dashboards automate talent tracking, stream hour auditing, agency commissions, and instant one-click bank payouts."
      ],
      floatingPills: ["Automated Agency Revenue Split", "Pay-Per-View Streams", "VIP Subscription Passes", "Instant Bank & UPI Payouts"]
    },
    benchmarksHeading: {
      white: "Proven creator revenue",
      pink: "benchmarks.",
    },
    benchmarks: [
      { value: "₹25,00,00,000+", label: "Total Host Earnings Distributed" },
      { value: "15,000+", label: "Active Verified Content Creators" },
      { value: "99.8%", label: "Automated Payout Success Rate" },
      { value: "0 hrs", label: "Manual Commission Calculation Time" },
    ],
    specHeading: {
      white: "Enterprise fintech-grade",
      pink: "monetization specs.",
    },
    specs: [
      { label: "Commission Splits", value: "Multi-tier rule engine (Platform 20%, Agency 10%, Host 70%)" },
      { label: "Payout Gateways", value: "Stripe Connect, RazorpayX, Cashfree, PayPal, Wire Transfer" },
      { label: "Virtual Currency", value: "In-app Coins, Diamonds, Gems with dynamic exchange ledger" },
      { label: "Tax & Compliance", value: "Automated TDS deduction, 1099/GST invoice generation" },
      { label: "VIP Content Access", value: "DRM-protected video on demand, watermarked live feeds" },
      { label: "Talent CRM", value: "Recruitment tracking, stream attendance, penalty system" },
    ],
    featuresHeading: {
      white: "Core features of the creator",
      pink: "ecosystem.",
    },
    features: [
      {
        title: "Multi-Tier Agency Management",
        description: "Agencies manage host rosters, set custom split percentages, track daily broadcast targets, and audit monthly revenue."
      },
      {
        title: "Dynamic Virtual Gift Store",
        description: "Host custom gift collections with seasonal effects, sound overlays, and real-time revenue leaderboard competitions."
      },
      {
        title: "Pay-Per-View Live Events",
        description: "Ticketed exclusive streams for concerts, private workshops, and 1-on-1 VIP interactive sessions."
      },
      {
        title: "Automated Instant Payouts",
        description: "One-click batch payouts directly to creator bank accounts, UPI IDs, or digital wallets with automated TDS statements."
      },
      {
        title: "Host Analytics & Growth Insights",
        description: "Detailed creator dashboards showing viewer retention curves, top gifters, peak streaming hours, and earnings breakdown."
      },
      {
        title: "Digital Merch & Fanshop",
        description: "Integrated merchandise storefront allowing creators to sell custom branded items, digital presets, and shoutouts."
      }
    ],
    layersHeading: {
      white: "Creator platform technical",
      pink: "architecture stack.",
    },
    layers: [
      {
        title: "Creator Studio & Agency Console",
        description: "Responsive Next.js web portal and tablet app with real-time stream telemetry, revenue charts, and talent rosters.",
        tech: "Next.js, Tailwind CSS, Tremor Charts, WebSockets"
      },
      {
        title: "Virtual Ledger & Double-Entry Accounting",
        description: "Cryptographically immutable double-entry accounting engine ensuring zero coin leakage and instant reconciliations.",
        tech: "PostgreSQL, TigerBeetle / Event Sourcing, Redis"
      },
      {
        title: "Payout Orchestration Service",
        description: "Automated payout engine executing scheduled and instant payouts via Stripe Connect, RazorpayX, and bank APIs.",
        tech: "Golang Worker, Temporal.io, Banking APIs"
      },
      {
        title: "Security & DRM Video Vault",
        description: "Encrypted media storage with forensic dynamic watermarking to protect exclusive creator content against leaks.",
        tech: "AWS CloudFront, Signed URLs, Widevine DRM"
      }
    ],
    ctaHeading: {
      white: "Launch your creator economy platform in",
      pink: "7 days.",
    },
    ctaSubtitle: "Complete intellectual property ownership, zero recurring SaaS fees, and white-label branding tailored to your vision."
  },

  // 6. AUDIO ROOMS
  "audio-rooms": {
    slug: "audio-rooms",
    breadcrumbLabel: "AUDIO ROOMS",
    eyebrow: "INTERACTIVE VOICE LOUNGE V3.0",
    heroTitle: {
      line1: "Spatial Audio Social",
      line2Pink: "Rooms & Lounges",
    },
    subtitle:
      "Live audio rooms for discussions, stages, multi-seat stages and interactive voice lounge communities.",
    heroImage: "/images/live-solution-stream-phone.jpg",
    floatingBadge1: {
      title: "Spatial Audio 3D",
      subtitle: "Studio sound fidelity",
      type: "audio",
    },
    floatingBadge2: {
      title: "Multi-Seat Stages",
      subtitle: "Up to 16 co-hosts live",
      type: "latency",
    },
    heroMetrics: [
      { value: "500K+", label: "ROOM HOURS" },
      { value: "16 Seats", label: "STAGE CAPACITY" },
      { value: "<80ms", label: "AUDIO LATENCY" },
      { value: "99.9%", label: "VOICE UPTIME" },
    ],
    ecosystemSection: {
      eyebrow: "HIGH-FIDELITY SPATIAL AUDIO",
      heading: {
        line1: "Low-Latency Spatial",
        line2: "Audio Platform",
      },
      description:
        "High-concurrency drop-in audio discussion stages with studio-grade audio codecs, dynamic role permissions, background noise suppression, and virtual tipping.",
      checklist: [
        "Opus 48kHz stereo codecs delivering crystal-clear multi-party voice.",
        "Granular stage permissions for hosts, co-hosts, speakers, and listeners.",
        "Automated AI noise suppression and acoustic echo cancellation.",
        "Ticketed audio rooms, sponsored stage banners, and in-room gifting.",
      ],
      image: "/images/live-pocket-phones.jpg",
      pillars: [
        { title: "Speak", subtitle: "Crystal-Clear", color: "purple" },
        { title: "Moderate", subtitle: "Effortlessly", color: "cyan" },
        { title: "Tip", subtitle: "In-Room", color: "pink" },
        { title: "Amplify", subtitle: "Worldwide", color: "green" },
      ],
    },
    coreArchitectureSection: {
      eyebrow: "CORE ARCHITECTURE",
      heading: "High-Concurrency Spatial Audio",
      subtitle:
        "Studio-quality drop-in voice rooms with active speaker queues, soundboards, and frictionless audience interaction.",
      cards: [
        {
          iconType: "smile",
          title: "Opus 48kHz Stereo Fidelity",
          description:
            "Studio-grade audio fidelity with spatial stereo separation, dynamic sound balancing, and zero microphone clipping.",
        },
        {
          iconType: "sparkle",
          title: "Interactive Soundboard",
          description:
            "Hosts and moderators can trigger high-energy sound effects, background ambience, and applause tracks on the fly.",
        },
        {
          iconType: "star",
          title: "16-Seat Speaker Stage",
          description:
            "Seamless multi-party stage management with granular speaker permissions, hand-raising queues, and mute controls.",
        },
        {
          iconType: "shield",
          title: "Acoustic Noise Filter",
          description:
            "Advanced neural network audio suppression eliminates room echo, background chatter, and keyboard clicks instantly.",
        },
      ],
    },
    screenshotsSection: {
      eyebrow: "SPATIAL AUDIO INTERFACE",
      heading: "Our App Screenshots",
      subtitle:
        "Drop-in voice stages with multi-speaker avatars, active audio waveform indicators, and soundboard controls.",
      image: "/images/live-solution-screenshots-clean.png",
    },
    techStackSection: {
      heading: "Enterprise-Grade Technology Stack",
      subtitle:
        "Engineered for high concurrency and zero-downtime deployments.",
      technologies: defaultLiveTechStack,
    },
    ctaSection: {
      eyebrow: "STAY AHEAD",
      heading: "Ready to build your audio spaces empire?",
      subtitle: "Launch crystal-clear interactive voice rooms and stages today.",
      primaryButtonText: "Book a Demo",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Talk to Experts",
      secondaryButtonLink: "/contact",
    },
    overview: {
      image: "/images/live-dating-devices.jpg",
      paragraphs: [
        "A clubhouse-style live social audio lounge ecosystem delivering crystal-clear 48kHz voice fidelity with spatial stereo positioning and active speaker indicators.",
        "Supports interactive multi-seat speaker stages, audience hand-raising queues, real-time background music mixing, and integrated audio soundboards.",
        "Monetize voice lounges with paid ticketed stages, exclusive VIP speaker lounges, host tipping, and branded audio sponsorship placements."
      ],
      floatingPills: ["Crystal 48kHz Opus Voice", "16-Seat Speaker Stage", "Interactive Audio Soundboard", "Audience Hand-Raising Queue"]
    },
    benchmarksHeading: {
      white: "Social audio platform",
      pink: "performance metrics.",
    },
    benchmarks: [
      { value: "500,000+", label: "Voice Room Hours Hosted" },
      { value: "<80ms", label: "Voice Packet Delivery Latency" },
      { value: "16 Hosts", label: "Simultaneous Stage Broadcasters" },
      { value: "99.99%", label: "Voice Server Reliability" },
    ],
    specHeading: {
      white: "High-fidelity audio room",
      pink: "specifications.",
    },
    specs: [
      { label: "Audio Codec", value: "Opus 48kHz full-band stereo, AI dynamic noise cancellation" },
      { label: "Stage Concurrency", value: "Up to 16 speakers on stage, 10,000+ silent listeners per room" },
      { label: "Spatial Sound", value: "HRTF 3D positional audio placing speakers around the listener" },
      { label: "Interactive Tools", value: "Sound effects pad, background BGM fader, hand raise queue" },
      { label: "Recording & Podcasts", value: "Automated cloud recording with instant MP3/podcast export" },
      { label: "Moderation Controls", value: "Mute all, stage eject, co-host transfers, word blocklist" },
    ],
    featuresHeading: {
      white: "Core features of social",
      pink: "audio rooms.",
    },
    features: [
      {
        title: "16-Seat Interactive Stage",
        description: "Seamlessly promote audience members from listeners to stage speakers with customizable permission controls."
      },
      {
        title: "Spatial 3D Audio Experience",
        description: "Position speakers dynamically in virtual stereo space for a natural, in-person room conversation feel."
      },
      {
        title: "DJ Music & Soundboard FX",
        description: "Hosts can play royalty-free background chillout tracks, applaud sounds, and funny sound clips during shows."
      },
      {
        title: "Private VIP Voice Lounges",
        description: "Token-gated or paid-entry rooms for masterminds, private consultations, and celebrity AMAs."
      },
      {
        title: "Automated Room Recording",
        description: "Record entire discussions with high-quality multitrack audio, ready to publish as podcasts or highlight reels."
      },
      {
        title: "AI Voice Moderation",
        description: "Real-time speech-to-text safety filter scanning conversations for hate speech, harassment, and compliance."
      }
    ],
    layersHeading: {
      white: "High-concurrency voice",
      pink: "server architecture.",
    },
    layers: [
      {
        title: "Client Audio Processing Layer",
        description: "Low-overhead audio engine utilizing native hardware acoustic echo cancellation and automatic gain control.",
        tech: "WebRTC Audio Processing Engine, Opus Codec"
      },
      {
        title: "SFU Voice Relay Cluster",
        description: "Distributed Selective Forwarding Units routing audio packets directly to edge servers without CPU-heavy mixing.",
        tech: "LiveKit SFU / Mediasoup, Rust Audio Workers"
      },
      {
        title: "Signaling & Hand-Raise Hub",
        description: "Low-latency WebSocket pub/sub infrastructure managing stage seats, mic mutes, and listener counts.",
        tech: "Go WebSockets, Redis Pub/Sub, gRPC"
      },
      {
        title: "Recording & Transcription Pipeline",
        description: "Server-side audio recorder rendering mixed stereo WAV/MP3 files and streaming transcripts to storage.",
        tech: "FFmpeg Cloud Workers, AWS S3, Whisper AI"
      }
    ],
    ctaHeading: {
      white: "Launch your custom audio room app in",
      pink: "7 days.",
    },
    ctaSubtitle: "100% source code ownership, zero recurring SaaS costs, and complete branding control on your own servers."
  },
};

export const defaultLiveSolutionSlug = "live-streaming-platform";

// Slugs mapping aliases
export function resolveLiveSolutionSlug(slug: string): string {
  if (liveStreamingSolutionsData[slug]) return slug;
  if (slug === "live-streaming") return "live-streaming-platform";
  if (slug === "dating") return "dating-application";
  if (slug === "video-calling") return "random-video-calling";
  if (slug === "social") return "social-discovery";
  if (slug === "creator") return "creator-platform";
  if (slug === "audio") return "audio-rooms";
  return defaultLiveSolutionSlug;
}
