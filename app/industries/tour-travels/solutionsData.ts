export interface TourSolutionMetric {
  value: string;
  suffix: string;
  label: string;
}

export interface TourSolutionHeroTitle {
  line1: string;
  line2Blue: string;
}

export interface TourSolutionCoreModule {
  moduleNumber: string;
  title: string;
  description: string;
  image: string;
  iconType: "map" | "routing" | "pricing" | "safety" | "wallet" | "fleet" | "calendar" | "bell";
  specLeft: string;
  specRight: string;
}

export interface TourIntegrationItem {
  iconType: "map" | "gps" | "wallet" | "shield" | "cloud" | "phone";
  title: string;
  description: string;
}

export interface TourPlatformViewCard {
  pill: string;
  title: string;
  description: string;
  image: string;
  techStack: string;
  actionText: string;
  actionLink: string;
}

export interface TourSolutionCTASection {
  title?: string;
  pill?: string;
  heading?: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface TourPlatformBenefitCard {
  iconType: "timer" | "surge" | "safety" | "wallet";
  title: string;
  description: string;
  image?: string;
  widget?: {
    label: string;
    value: string;
    buttonText: string;
  };
}

export interface TourPlatformBenefitsSection {
  heading: {
    white: string;
    blue: string;
  };
  subtitle: string;
  card1: TourPlatformBenefitCard;
  card2: TourPlatformBenefitCard;
  card3: TourPlatformBenefitCard;
  card4: TourPlatformBenefitCard;
}

export interface TourTechItem {
  name: string;
  category?: string;
  iconType: "react" | "node" | "flutter" | "aws" | "websockets" | "postgres" | "redis" | "docker" | "next" | "maps";
}

export interface TourTechStackSection {
  title: string;
  subtitle: string;
  technologies: TourTechItem[];
}

export interface TourModuleTab {
  id: string;
  label: string;
  storyTitle: string;
  features: string[];
  mockupImage: string;
}

export interface TourCorePlatformModulesSection {
  heading: {
    white: string;
    blue: string;
  };
  subtitle: string;
  tabs: TourModuleTab[];
}

export interface TourSolutionData {
  benefitsSection: TourPlatformBenefitsSection;
  techStackSection: TourTechStackSection;
  corePlatformModulesSection: TourCorePlatformModulesSection;
  slug: string;
  badgeText: string;
  breadcrumbLabel: string;
  heroTitle: TourSolutionHeroTitle;
  aboutEcosystem: string;
  heroPhonesImage: string;
  metrics: TourSolutionMetric[];
  coreModulesSection: {
    eyebrow: string;
    heading: string;
    description: string;
    modules: TourSolutionCoreModule[];
  };
  integrationsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: TourIntegrationItem[];
    protocolsLabel: string;
    protocols: string;
    image: string;
  };
  platformViewsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    views: [TourPlatformViewCard, TourPlatformViewCard];
  };
  ctaSection: TourSolutionCTASection;
}

export const tourTravelsSolutionsData: Record<string, TourSolutionData> = {
  "taxi-booking": {
    slug: "taxi-booking",
    badgeText: "SOLUTION MODULE 01",
    breadcrumbLabel: "TEXI BOOKING APP",
    heroTitle: {
      line1: "Taxi Booking",
      line2Blue: "Platform",
    },
    aboutEcosystem:
      "An end-to-end digital mobility ecosystem designed to eliminate manual dispatch. We engineer high-concurrency customer and driver applications backed by a real-time GPS telemetry dispatcher, enabling zero-latency ride matching and automated dynamic pricing.",
    heroPhonesImage: "/images/tour-solution-hero-phones.png",
    metrics: [
      { value: "850", suffix: "+", label: "ACTIVE DRIVERS" },
      { value: "60", suffix: "%", label: "FASTER DISPATCH" },
      { value: "<3", suffix: "s", label: "GPS LATENCY" },
      { value: "99.9", suffix: "%", label: "UPTIME SLA" },
    ],
    benefitsSection: {
      heading: {
        white: "Platform",
        blue: "Benefits",
      },
      subtitle:
        "Why leading transport agencies switch to our custom-engineered mobility solutions instead of relying on boxed SaaS products.",
      card1: {
        iconType: "timer",
        title: "Zero Dispatch Delays",
        description:
          "Maximize Fleet Utilization: Reduce empty miles with smart return-trip matching algorithms.",
        image: "/images/tour-benefit-car-phone.png",
      },
      card2: {
        iconType: "surge",
        title: "Dynamic Surge Pricing",
        description:
          "Automated fare multipliers kick in based on real-time zone demand, traffic density, and weather conditions, maximizing your fleet revenue.",
      },
      card3: {
        iconType: "safety",
        title: "Military-Grade Safety",
        description:
          "Built-in SOS panic buttons, live trip link sharing, OTP-based ride starts, and automated route deviation alerts ensure maximum passenger safety.",
      },
      card4: {
        iconType: "wallet",
        title: "Automated Ledger & Settlements",
        description:
          "Stop calculating driver payouts manually. The system auto-deducts platform commissions, tracks wallet balances, and generates instant weekly driver payout manifests.",
        widget: {
          label: "Driver Wallet Balance",
          value: "$1,240.50",
          buttonText: "Initiate Payout",
        },
      },
    },
    techStackSection: {
      title: "Enterprise-Grade Technology Stack",
      subtitle: "Engineered for high concurrency and zero-downtime deployments.",
      technologies: [
        { name: "React JS", iconType: "react" },
        { name: "Node.js", iconType: "node" },
        { name: "Next.js", iconType: "next" },
        { name: "Flutter", iconType: "flutter" },
        { name: "AWS Cloud", iconType: "aws" },
        { name: "WebSockets", iconType: "websockets" },
        { name: "PostgreSQL", iconType: "postgres" },
        { name: "Redis", iconType: "redis" },
        { name: "Docker", iconType: "docker" },
        { name: "Google Maps", iconType: "maps" },
      ],
    },
    corePlatformModulesSection: {
      heading: {
        white: "Core Platform",
        blue: "Modules",
      },
      subtitle: "Three Distinct Interfaces Working In Absolute Synchronization.",
      tabs: [
        {
          id: "rider",
          label: "Rider App",
          storyTitle: "Our story",
          features: [
            "One-tap pickup location via accurate GPS auto-detect.",
            "Multiple vehicle class selections (Mini, Sedan, SUV).",
            "Live driver tracking & ETA countdown on map.",
            "Multiple payment gateways (Cards, UPI, Wallet, Cash).",
          ],
          mockupImage: "/images/tour-module-rider-mockup.png",
        },
        {
          id: "driver",
          label: "Driver App",
          storyTitle: "Driver Partner Suite",
          features: [
            "Instant ride broadcast with pickup distance & estimated earnings.",
            "Turn-by-turn in-app GPS navigation with heatmaps & traffic alerts.",
            "Daily & weekly automated earnings ledger with instant bank payout.",
            "Driver safety SOS trigger, emergency hotline & rating dispute portal.",
          ],
          mockupImage: "/images/tour-module-driver-mockup.png",
        },
        {
          id: "admin",
          label: "Admin Dashboard",
          storyTitle: "Central Dispatch & Ops Console",
          features: [
            "Real-time fleet telemetry & global dispatch heatmaps.",
            "Dynamic surge pricing algorithm configuration & peak zone geofencing.",
            "Comprehensive driver KYC verification & document compliance engine.",
            "Automated customer dispute resolution, commission ledger & tax reporting.",
          ],
          mockupImage: "/images/tour-module-admin-mockup.png",
        },
      ],
    },
    coreModulesSection: {
      eyebrow: "CORE DISPATCH ENGINE",
      heading: "Specialized Taxi & Fleet Modules",
      description:
        "Engineered for high ride volume, sub-second GPS updates, multi-stop trips, and seamless payment reconciliation.",
      modules: [
        {
          moduleNumber: "MODULE 01",
          title: "Real-Time Telemetry Dispatcher",
          description:
            "Automated nearest-driver assignment powered by geospatial indexing (H3/S2) to minimize passenger ETA and driver deadhead miles.",
          image: "/images/tour-popular-screen-3.png",
          iconType: "routing",
          specLeft: "Latency: <150ms",
          specRight: "Precision: <3m GPS",
        },
        {
          moduleNumber: "MODULE 02",
          title: "Dynamic Surge & Fare Engine",
          description:
            "Self-optimizing surge pricing rules reacting to local demand spikes, bad weather, traffic congestion, and holiday schedules.",
          image: "/images/tour-popular-screen-2.png",
          iconType: "pricing",
          specLeft: "Reconciliation: Real-time",
          specRight: "Toll Auto-detect: Yes",
        },
        {
          moduleNumber: "MODULE 03",
          title: "Driver & Passenger Safety Shield",
          description:
            "In-ride live trip sharing, emergency SOS dispatcher escalation, route deviation alerts, and cryptographic OTP trip start.",
          image: "/images/tour-popular-screen-1.png",
          iconType: "safety",
          specLeft: "SOS Alert: Instant",
          specRight: "2-Way OTP Verified",
        },
      ],
    },
    integrationsSection: {
      eyebrow: "MAPS & TELEMETRY PROTOCOLS",
      heading: "Real-Time GPS & Payment Architecture",
      subtitle:
        "Built on low-latency WebSockets, Mapbox GL routing, and automated multi-split driver payout gateways.",
      items: [
        {
          iconType: "map",
          title: "Mapbox GL & Google Maps Engine",
          description:
            "Vector tiles, turn-by-turn guidance, distance matrix, and geocoding with sub-second route calculation.",
        },
        {
          iconType: "gps",
          title: "High-Throughput MQTT Telemetry",
          description:
            "Lightweight publish/subscribe vehicle location updates reducing mobile battery consumption by 65%.",
        },
        {
          iconType: "wallet",
          title: "Automated Split-Payment Gateway",
          description:
            "Stripe Connect & Razorpay Route integration for instant driver commissions and platform commission settlement.",
        },
      ],
      protocolsLabel: "DEPLOYED PROTOCOLS & INTEGRATIONS",
      protocols: "MQTT 3.1.1 • WebSocket TLS 1.3 • Mapbox Navigation SDK • Stripe Connect Escrow",
      image: "/images/tour-ecosystem-highway-clean.png",
    },
    platformViewsSection: {
      eyebrow: "MULTI-SURFACE ECOSYSTEM",
      heading: "Synchronized Mobile & Web Platforms",
      subtitle:
        "Native Android & iOS rider/driver apps paired with an administrative command center.",
      views: [
        {
          pill: "MOBILE EXPERIENCE",
          title: "Customer & Driver Native Apps",
          description:
            "Sleek interfaces featuring one-tap booking, live vehicle animations, digital wallet top-ups, and driver earning statements.",
          image: "/images/tour-popular-screen-2.png",
          techStack: "React Native • Swift • Kotlin",
          actionText: "Request Demo",
          actionLink: "/#contact-cta",
        },
        {
          pill: "COMMAND CENTER",
          title: "Fleet Operations Admin Dashboard",
          description:
            "Central web cockpit for dispatcher oversight, live heatmaps, driver onboarding KYC, dispute resolution, and revenue analytics.",
          image: "/images/tour-popular-screen-1.png",
          techStack: "Next.js • Tailwind CSS • WebSockets",
          actionText: "View Features",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      title: "Launch Your Own Fleet Today",
      subtitle:
        "Stop paying massive commissions to aggregators. Own your technology, build your brand, and control your pricing with our custom-engineered mobility solutions.",
      primaryButtonText: "Request a Demo",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "View Pricing Models",
      secondaryButtonLink: "/#contact-cta",
    },
  },

  "travel-agency": {
    slug: "travel-agency",
    badgeText: "SOLUTION MODULE 02",
    breadcrumbLabel: "TRAVEL AGENCY APP",
    heroTitle: {
      line1: "Travel Agency",
      line2Blue: "Platform",
    },
    aboutEcosystem:
      "A unified multi-channel travel booking and management engine integrating international GDS systems (Amadeus/Sabre), global hotel inventories, and custom holiday package builders with instant confirmation and multi-currency billing.",
    heroPhonesImage: "/images/tour-solution-hero-phones.png",
    metrics: [
      { value: "120", suffix: "k+", label: "MONTHLY BOOKINGS" },
      { value: "99.4", suffix: "%", label: "GDS SYNC RATE" },
      { value: "<1.5", suffix: "s", label: "SEARCH LATENCY" },
      { value: "40", suffix: "+", label: "GLOBAL CURRENCIES" },
    ],
    benefitsSection: {
      heading: {
        white: "Platform",
        blue: "Benefits",
      },
      subtitle:
        "Why leading travel agencies switch to our custom-engineered GDS booking engines instead of generic travel templates.",
      card1: {
        iconType: "timer",
        title: "Zero Inventory Latency",
        description:
          "Real-time GDS seat holds and room inventory sync eliminate double bookings and expired fare rate quotes.",
        image: "/images/tour-popular-screen-1.png",
      },
      card2: {
        iconType: "surge",
        title: "Dynamic Commission Engine",
        description:
          "Configurable markup rules automatically apply agency commissions across flights, hotels, and custom travel packages.",
      },
      card3: {
        iconType: "safety",
        title: "PCI-DSS Level 1 Security",
        description:
          "Tokenized customer card storage, 3D Secure 2.0 multi-factor authentication, and automated fraud prevention.",
      },
      card4: {
        iconType: "wallet",
        title: "Automated BSP & Supplier Ledger",
        description:
          "Centralized IATA BSP billing reconciliation, sub-agent credit tracking, and instant automated vendor remittance.",
        widget: {
          label: "Agency Balance",
          value: "$48,920.00",
          buttonText: "Reconcile BSP",
        },
      },
    },
    techStackSection: {
      title: "Enterprise Travel Distribution Stack",
      subtitle: "Engineered for high GDS concurrency, sub-second fare caching, and zero-downtime booking engine.",
      technologies: [
        { name: "React JS", iconType: "react" },
        { name: "Node.js", iconType: "node" },
        { name: "Next.js", iconType: "next" },
        { name: "Flutter", iconType: "flutter" },
        { name: "AWS Cloud", iconType: "aws" },
        { name: "WebSockets", iconType: "websockets" },
        { name: "PostgreSQL", iconType: "postgres" },
        { name: "Redis", iconType: "redis" },
        { name: "Docker", iconType: "docker" },
        { name: "Google Maps", iconType: "maps" },
      ],
    },
    corePlatformModulesSection: {
      heading: {
        white: "Core Platform",
        blue: "Modules",
      },
      subtitle: "Three Distinct Interfaces Working In Absolute Synchronization.",
      tabs: [
        {
                "id": "traveler",
                "label": "Traveler Portal",
                "storyTitle": "Frictionless Holiday Discovery",
                "features": [
                        "Unified multi-destination flight, hotel, and transfer booking cart.",
                        "Instant dynamic itinerary builder with interactive day-by-day maps.",
                        "Real-time flight status alerts, e-ticket wallet & offline voucher sync.",
                        "Global multi-currency checkout supporting Cards, UPI & Pay-Later."
                ],
                "mockupImage": "/images/tour-module-rider-mockup.png"
        },
        {
                "id": "agent",
                "label": "Agent Desk",
                "storyTitle": "B2B Sub-Agent Workspace",
                "features": [
                        "Direct GDS & NDC inventory access with instant net-fare margins.",
                        "One-click PDF quotation generator with customized agency branding.",
                        "Credit line tracking, deposit wallet & automated commission invoicing.",
                        "Multi-tier agent markup controls & split-payment processing."
                ],
                "mockupImage": "/images/tour-module-driver-mockup.png"
        },
        {
                "id": "admin",
                "label": "Master Admin",
                "storyTitle": "Central Agency ERP",
                "features": [
                        "Live inventory synchronization across Amadeus, Sabre & Hotelbeds.",
                        "Automated supplier reconciliation and BSP settlement tracking.",
                        "Dynamic pricing yield management & seasonal promotion scheduler.",
                        "Omnichannel CRM integrating WhatsApp, Email & SMS ticketing notifications."
                ],
                "mockupImage": "/images/tour-module-admin-mockup.png"
        }
],
    },
    coreModulesSection: {
      eyebrow: "GLOBAL INVENTORY ENGINE",
      heading: "Enterprise Travel Management Modules",
      description:
        "Connect travelers with worldwide flights, curated hotel networks, visa support, and dynamic itinerary builders.",
      modules: [
        {
          moduleNumber: "MODULE 01",
          title: "GDS Flight & Hotel Aggregator",
          description:
            "Real-time integration with Amadeus, Sabre, and Hotelbeds delivering live seat maps, baggage allowance, and instant PNR issuance.",
          image: "/images/tour-popular-screen-1.png",
          iconType: "map",
          specLeft: "APIs: Amadeus / Sabre",
          specRight: "Cache: Redis 50ms",
        },
        {
          moduleNumber: "MODULE 02",
          title: "Dynamic Holiday Itinerary Builder",
          description:
            "Drag-and-drop itinerary creation combining flights, transfers, accommodation, and guided excursions into a single checkout.",
          image: "/images/tour-popular-screen-2.png",
          iconType: "calendar",
          specLeft: "Export: PDF & WhatsApp",
          specRight: "Multi-city: Supported",
        },
        {
          moduleNumber: "MODULE 03",
          title: "Agent B2B Portal & Sub-Agencies",
          description:
            "Tiered agent commission management, credit limits, markup configurations, and automated monthly statement reconciliation.",
          image: "/images/tour-popular-screen-3.png",
          iconType: "wallet",
          specLeft: "Markup Engine: Dynamic",
          specRight: "Credit Lines: Auto-enforced",
        },
      ],
    },
    integrationsSection: {
      eyebrow: "GLOBAL TRAVEL APIS",
      heading: "Worldwide GDS & Financial Connectivity",
      subtitle:
        "Seamless integration with IATA certified GDS pipelines, global hotel aggregators, and multi-currency payment rails.",
      items: [
        {
          iconType: "cloud",
          title: "IATA Certified GDS Connectors",
          description:
            "High-speed XML/JSON connections for flight search, availability, fare rules, seat selection, and automated e-ticketing.",
        },
        {
          iconType: "wallet",
          title: "Multi-Currency Dynamic Converter",
          description:
            "Live forex rate caching with automatic base-currency hedging and localized payment gateways across 40+ countries.",
        },
        {
          iconType: "shield",
          title: "Automated Visa & Travel Compliance",
          description:
            "Built-in destination visa requirement checker and passport verification with machine-readable zone (MRZ) scanners.",
        },
      ],
      protocolsLabel: "DEPLOYED PROTOCOLS & INTEGRATIONS",
      protocols: "Amadeus Web Services • Sabre REST • Travelport NDC • Redis Cluster • Stripe Global",
      image: "/images/tour-ecosystem-highway-clean.png",
    },
    platformViewsSection: {
      eyebrow: "OMNICHANNEL EXPERIENCES",
      heading: "B2C Travel Apps & B2B Partner Portals",
      subtitle:
        "High-converting booking funnels for travelers and comprehensive operational consoles for travel consultants.",
      views: [
        {
          pill: "TRAVELER APP",
          title: "Consumer Mobile & Web Experience",
          description:
            "Fast flight comparisons, immersive hotel room galleries, instant e-ticket wallet downloads, and live flight status alerts.",
          image: "/images/tour-popular-screen-1.png",
          techStack: "Next.js • Flutter • GraphQL",
          actionText: "Request Demo",
          actionLink: "/#contact-cta",
        },
        {
          pill: "B2B CONSOLE",
          title: "Travel Agent Operations Hub",
          description:
            "Comprehensive reservation management, offline voucher generator, supplier payout controls, and customer inquiry CRM.",
          image: "/images/tour-popular-screen-3.png",
          techStack: "React • Node.js • PostgreSQL",
          actionText: "Explore Console",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      title: "Scale Your Travel Agency Today",
      subtitle:
        "Upgrade from legacy software to an automated, cloud-native travel booking platform built to scale worldwide.",
      primaryButtonText: "Request a Demo",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "View Pricing Models",
      secondaryButtonLink: "/#contact-cta",
    },
  },

  "outstation-taxi": {
    slug: "outstation-taxi",
    badgeText: "SOLUTION MODULE 03",
    breadcrumbLabel: "OUTSTATION TAXI APP",
    heroTitle: {
      line1: "Outstation Taxi",
      line2Blue: "Platform",
    },
    aboutEcosystem:
      "Engineered specifically for intercity transfers, one-way drops, and multi-day round trips. Features automated toll calculation, dynamic driver allowance routing, advance booking schedules, and return-fare optimization for fleet operators.",
    heroPhonesImage: "/images/tour-solution-hero-phones.png",
    metrics: [
      { value: "450", suffix: "+", label: "INTERCITY ROUTES" },
      { value: "35", suffix: "%", label: "LOWER DEADHEAD KM" },
      { value: "100", suffix: "%", label: "AUTOMATED TOLLS" },
      { value: "99.8", suffix: "%", label: "SCHEDULE ACCURACY" },
    ],
    benefitsSection: {
      heading: {
        white: "Platform",
        blue: "Benefits",
      },
      subtitle:
        "Why leading intercity operators switch to our custom-engineered highway dispatch platforms.",
      card1: {
        iconType: "timer",
        title: "Automated Toll Estimation",
        description:
          "Eliminate fare disputes with pre-calculated FASTag tolls, state border taxes, and driver night allowances.",
        image: "/images/tour-benefit-car-phone.png",
      },
      card2: {
        iconType: "surge",
        title: "Corridor Fare Optimization",
        description:
          "Dynamically discounts empty return legs to secure return passengers along popular state highway routes.",
      },
      card3: {
        iconType: "safety",
        title: "Highway Corridor Tracking",
        description:
          "Continuous route deviation alerts, emergency highway towing dispatch, and live passenger family tracking.",
      },
      card4: {
        iconType: "wallet",
        title: "Multi-Day Driver Allowances",
        description:
          "Automated calculation of per-day driver allowances, interstate permits, and weekly driver settlement manifests.",
        widget: {
          label: "Fleet Settlement",
          value: "$8,450.00",
          buttonText: "Disburse Allowances",
        },
      },
    },
    techStackSection: {
      title: "Intercity Mobility Technology Stack",
      subtitle: "Engineered for long-haul GPS telemetry, highway toll reconciliation, and non-stop dispatch.",
      technologies: [
        { name: "React JS", iconType: "react" },
        { name: "Node.js", iconType: "node" },
        { name: "Next.js", iconType: "next" },
        { name: "Flutter", iconType: "flutter" },
        { name: "AWS Cloud", iconType: "aws" },
        { name: "WebSockets", iconType: "websockets" },
        { name: "PostgreSQL", iconType: "postgres" },
        { name: "Redis", iconType: "redis" },
        { name: "Docker", iconType: "docker" },
        { name: "Google Maps", iconType: "maps" },
      ],
    },
    corePlatformModulesSection: {
      heading: {
        white: "Core Platform",
        blue: "Modules",
      },
      subtitle: "Three Distinct Interfaces Working In Absolute Synchronization.",
      tabs: [
        {
                "id": "passenger",
                "label": "Passenger App",
                "storyTitle": "Seamless Highway Journeys",
                "features": [
                        "Advance round-trip & one-way outstation cab reservations.",
                        "All-inclusive transparent pricing with toll & state tax breakdown.",
                        "Live highway GPS trip telemetry & family safety tracking link.",
                        "Free cancellation & doorstep pickup verification with driver OTP."
                ],
                "mockupImage": "/images/tour-module-rider-mockup.png"
        },
        {
                "id": "pilot",
                "label": "Highway Pilot",
                "storyTitle": "Intercity Driver Experience",
                "features": [
                        "Advance route schedule with night allowance & rest stop guide.",
                        "FASTag automated toll deduction & state permit reimbursement.",
                        "Guaranteed return-trip matching to eliminate unpaid deadheads.",
                        "24/7 highway breakdown SOS with nearest towing dispatch."
                ],
                "mockupImage": "/images/tour-module-driver-mockup.png"
        },
        {
                "id": "dispatch",
                "label": "Dispatch Hub",
                "storyTitle": "Regional Fleet Operations",
                "features": [
                        "Corridor-based vehicle load balancing across 100+ interstate routes.",
                        "Dynamic interstate toll estimation & automated tax calculating engine.",
                        "Driver fitness, alcohol sensor & mandatory rest compliance audits.",
                        "Corporate monthly billing portal with consolidated GST invoicing."
                ],
                "mockupImage": "/images/tour-module-admin-mockup.png"
        }
],
    },
    coreModulesSection: {
      eyebrow: "INTERCITY ROUTING ENGINE",
      heading: "Purpose-Built Outstation Features",
      description:
        "Handle toll charges, state tax permits, driver night allowances, and one-way empty leg optimization seamlessly.",
      modules: [
        {
          moduleNumber: "MODULE 01",
          title: "Automated Fastag & Toll Estimator",
          description:
            "Pre-calculates exact highway toll charges and state entry taxes on every route, eliminating post-trip pricing disputes.",
          image: "/images/tour-popular-screen-3.png",
          iconType: "pricing",
          specLeft: "National Highway DB: Live",
          specRight: "Toll Variance: <1%",
        },
        {
          moduleNumber: "MODULE 02",
          title: "Return Trip & Empty Leg Matcher",
          description:
            "Smart reverse-route matching that pairs outbound one-way cabs with passengers returning on the same highway corridor.",
          image: "/images/tour-popular-screen-2.png",
          iconType: "routing",
          specLeft: "Corridor Match: Automated",
          specRight: "Deadhead Reduction: -35%",
        },
        {
          moduleNumber: "MODULE 03",
          title: "Multi-Day Chauffeur Package Manager",
          description:
            "Configurable daily km packages, night halt allowances, driver food stipends, and automated GPS odometer distance audits.",
          image: "/images/tour-popular-screen-1.png",
          iconType: "calendar",
          specLeft: "Night Halt: Automated",
          specRight: "Odometer Audit: Verified",
        },
      ],
    },
    integrationsSection: {
      eyebrow: "HIGHWAY CORRIDOR TELEMETRY",
      heading: "Intercity Highway Infrastructure",
      subtitle:
        "Toll plaza APIs, offline map caching for low-signal rural corridors, and emergency 24/7 highway patrol dispatch.",
      items: [
        {
          iconType: "map",
          title: "National Toll & Highway Permitting APIs",
          description:
            "Instant lookups for commercial vehicle interstate permit fees, toll booth rates, and green tax requirements.",
        },
        {
          iconType: "gps",
          title: "Offline-First Driver Telemetry",
          description:
            "Local queueing of GPS coordinates and trip milestones when passing through low-connectivity remote highway zones.",
        },
        {
          iconType: "shield",
          title: "24/7 Highway SOS & Breakdown Dispatch",
          description:
            "Emergency roadside assistance integration with towing networks and nearest mechanic dispatch.",
        },
      ],
      protocolsLabel: "DEPLOYED PROTOCOLS & INTEGRATIONS",
      protocols: "Fastag NETC APIs • Offline SQLite Cache • Mapbox Corridor Matrix • Twilio Voice Bridge",
      image: "/images/tour-ecosystem-highway-clean.png",
    },
    platformViewsSection: {
      eyebrow: "COMPLETE FLEET CONTROL",
      heading: "Intercity Highway Operating System",
      subtitle:
        "Equip passengers with transparent pricing and give fleet dispatchers total visibility across all state highways.",
      views: [
        {
          pill: "PASSENGER APP",
          title: "Outstation Booking & Trip Tracker",
          description:
            "Clear all-inclusive fare breakdowns (toll + fuel + driver allowance), car type selection (Sedan, SUV, Innova), and real-time highway ETA.",
          image: "/images/tour-popular-screen-2.png",
          techStack: "React Native • Mapbox • Redux",
          actionText: "Request Demo",
          actionLink: "/#contact-cta",
        },
        {
          pill: "DISPATCH CONSOLE",
          title: "Intercity Route Control Center",
          description:
            "Monitor ongoing multi-day journeys, manage driver allowances, assign return rides, and review route deviation notifications.",
          image: "/images/tour-popular-screen-3.png",
          techStack: "Next.js • Tailwind CSS • WebSockets",
          actionText: "View Console",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      title: "Dominate Highway Travel Today",
      subtitle:
        "Replace unorganized manual taxi stands with an automated intercity cab platform tailored for profitability.",
      primaryButtonText: "Request a Demo",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "View Pricing Models",
      secondaryButtonLink: "/#contact-cta",
    },
  },

  "car-rental": {
    slug: "car-rental",
    badgeText: "SOLUTION MODULE 04",
    breadcrumbLabel: "CAR RENTAL APP",
    heroTitle: {
      line1: "Car Rental",
      line2Blue: "Platform",
    },
    aboutEcosystem:
      "Next-generation self-drive and chauffeur rental management system with digital KYC, vehicle telemetry immobilizers, hourly-to-monthly flexible tariffs, automated security deposit refunds, and fleet maintenance telemetry.",
    heroPhonesImage: "/images/tour-solution-hero-phones.png",
    metrics: [
      { value: "2,400", suffix: "+", label: "FLEET VEHICLES" },
      { value: "<5", suffix: "min", label: "DIGITAL KYC TIME" },
      { value: "0", suffix: "", label: "DEPOSIT DISPUTES" },
      { value: "99.9", suffix: "%", label: "IOT TELEMETRY UPTIME" },
    ],
    benefitsSection: {
      heading: {
        white: "Platform",
        blue: "Benefits",
      },
      subtitle:
        "Why modern self-drive fleets switch to our keyless telematics and automated deposit engine.",
      card1: {
        iconType: "timer",
        title: "Instant Keyless Dispatch",
        description:
          "Renters unlock car doors via Bluetooth/cellular commands right after biometric identity approval.",
        image: "/images/tour-benefit-car-phone.png",
      },
      card2: {
        iconType: "surge",
        title: "Dynamic Weekend Tariffs",
        description:
          "Automated hourly, daily, and monthly rental tariffs adjust automatically according to holiday demand.",
      },
      card3: {
        iconType: "safety",
        title: "Remote Engine Immobilizer",
        description:
          "Anti-theft geofence tracking with the ability to safely immobilize the vehicle engine if boundary violations occur.",
      },
      card4: {
        iconType: "wallet",
        title: "Digital Security Deposit Escrow",
        description:
          "Pre-authorized card holds with instant automated refunds upon satisfactory vehicle return inspection.",
        widget: {
          label: "Escrow Held",
          value: "$14,500.00",
          buttonText: "Release Deposits",
        },
      },
    },
    techStackSection: {
      title: "Automated Car Rental Technology Stack",
      subtitle: "Engineered for IoT telematics, digital keyless access, and fleet security.",
      technologies: [
        { name: "React JS", iconType: "react" },
        { name: "Node.js", iconType: "node" },
        { name: "Next.js", iconType: "next" },
        { name: "Flutter", iconType: "flutter" },
        { name: "AWS Cloud", iconType: "aws" },
        { name: "WebSockets", iconType: "websockets" },
        { name: "PostgreSQL", iconType: "postgres" },
        { name: "Redis", iconType: "redis" },
        { name: "Docker", iconType: "docker" },
        { name: "Google Maps", iconType: "maps" },
      ],
    },
    corePlatformModulesSection: {
      heading: {
        white: "Core Platform",
        blue: "Modules",
      },
      subtitle: "Three Distinct Interfaces Working In Absolute Synchronization.",
      tabs: [
        {
                "id": "customer",
                "label": "Renter App",
                "storyTitle": "Keyless Self-Drive Freedom",
                "features": [
                        "Instant Bluetooth & NFC keyless vehicle lock/unlock from smartphone.",
                        "3-minute digital KYC verification with driving license OCR.",
                        "Real-time vehicle fuel & battery range meter before departure.",
                        "Contactless digital vehicle inspection with 360-degree damage upload."
                ],
                "mockupImage": "/images/tour-module-rider-mockup.png"
        },
        {
                "id": "inspector",
                "label": "Fleet Field App",
                "storyTitle": "Depot & Return Operations",
                "features": [
                        "Automated odometer & fuel level barcode scanner at depot entry.",
                        "AI image comparison comparing pickup vs drop-off scratch conditions.",
                        "Instant security deposit refund release & damage claim generation.",
                        "Maintenance & detailing scheduling triggered by mileage threshold."
                ],
                "mockupImage": "/images/tour-module-driver-mockup.png"
        },
        {
                "id": "admin",
                "label": "Fleet Command",
                "storyTitle": "Central Fleet Management",
                "features": [
                        "Live CAN-bus IoT engine diagnostics, battery status & odometer sync.",
                        "Geofence speed governing & remote engine immobilizer in theft alerts.",
                        "Dynamic duration-based & hourly rental yield pricing rules.",
                        "Automated FASTag, speeding fines & parking ticket billing ledger."
                ],
                "mockupImage": "/images/tour-module-admin-mockup.png"
        }
],
    },
    coreModulesSection: {
      eyebrow: "DIGITAL RENTAL SYSTEM",
      heading: "Automated Self-Drive Fleet Modules",
      description:
        "Remove paper contracts with instant AI document verification, keyless vehicle access, and digital deposit escrow.",
      modules: [
        {
          moduleNumber: "MODULE 01",
          title: "AI License & Document Verification",
          description:
            "Instant OCR and biometric facial matching for driving licenses, national IDs, and credit ratings before vehicle dispatch.",
          image: "/images/tour-popular-screen-1.png",
          iconType: "safety",
          specLeft: "OCR Accuracy: 99.8%",
          specRight: "Govt DB Check: Instant",
        },
        {
          moduleNumber: "MODULE 02",
          title: "IoT Keyless Lock & Remote Immobilizer",
          description:
            "Unlock cars via smartphone Bluetooth/cellular commands with geofence protection and anti-theft remote engine shutdown.",
          image: "/images/tour-popular-screen-2.png",
          iconType: "routing",
          specLeft: "Bluetooth Low Energy: BLE 5.2",
          specRight: "Geofence Perimeter: Active",
        },
        {
          moduleNumber: "MODULE 03",
          title: "Escrow Deposit & Damage Checklist",
          description:
            "Pre-trip 360° photo checklist with timestamped damage markers and automated escrow deposit pre-authorization.",
          image: "/images/tour-popular-screen-3.png",
          iconType: "wallet",
          specLeft: "Pre-Auth Hold: Supported",
          specRight: "Refund Speed: Under 2h",
        },
      ],
    },
    integrationsSection: {
      eyebrow: "CONNECTED VEHICLE TELEMATICS",
      heading: "OBD-II Telemetry & Digital KYC Rails",
      subtitle:
        "Integrated with smart car dongles, CAN-bus telemetry, credit bureau scoring, and banking escrow rails.",
      items: [
        {
          iconType: "gps",
          title: "OBD-II CAN-bus Telematics",
          description:
            "Live tracking of fuel level, battery health, odometer readings, harsh braking, and engine diagnostic trouble codes.",
        },
        {
          iconType: "shield",
          title: "Government ID & Bureau Scoring",
          description:
            "Direct API integration with national identity databases and credit bureaus to prevent rental fraud and car theft.",
        },
        {
          iconType: "wallet",
          title: "Automated Payment Pre-Authorization",
          description:
            "Stripe and Adyen payment holds for security deposits with automated release upon vehicle return inspection.",
        },
      ],
      protocolsLabel: "DEPLOYED PROTOCOLS & INTEGRATIONS",
      protocols: "CAN-bus ISO 15765 • BLE 5.2 • REST OCR • Stripe Pre-Auth Escrow • MQTT Telemetry",
      image: "/images/tour-ecosystem-highway-clean.png",
    },
    platformViewsSection: {
      eyebrow: "TOUCHLESS RENTAL JOURNEY",
      heading: "Self-Serve Renter App & Depot Management",
      subtitle:
        "Empower drivers to reserve, unlock, and return cars on their schedule while depot managers oversee vehicle turnaround.",
      views: [
        {
          pill: "CUSTOMER EXPERIENCE",
          title: "Keyless Self-Drive Mobile App",
          description:
            "Browse vehicle availability by location, complete KYC in minutes, unlock doors with a tap, and view fuel & distance stats.",
          image: "/images/tour-popular-screen-2.png",
          techStack: "React Native • BLE SDK • Mapbox",
          actionText: "Request Demo",
          actionLink: "/#contact-cta",
        },
        {
          pill: "DEPOT FLEET OPS",
          title: "Fleet Maintenance & Turnaround Web",
          description:
            "Track car readiness status (cleaning, fuel, inspection), schedule servicing, manage insurance renewals, and audit damage logs.",
          image: "/images/tour-popular-screen-1.png",
          techStack: "Next.js • Tailwind CSS • Node.js",
          actionText: "Explore Console",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      title: "Launch Your Digital Fleet Today",
      subtitle:
        "Transform your rental inventory into a seamless digital mobility service with automated keys and guaranteed asset security.",
      primaryButtonText: "Request a Demo",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "View Pricing Models",
      secondaryButtonLink: "/#contact-cta",
    },
  },

  "corporate-mobility": {
    slug: "corporate-mobility",
    badgeText: "SOLUTION MODULE 05",
    breadcrumbLabel: "CORPORATE MOBILITY APP",
    heroTitle: {
      line1: "Corporate Mobility",
      line2Blue: "Solutions",
    },
    aboutEcosystem:
      "Enterprise-grade employee commute, business travel allocation, and automated corporate billing portal with department-level cost centers, automated roster rostering, compliance tracking, and emergency panic buttons.",
    heroPhonesImage: "/images/tour-solution-hero-phones.png",
    metrics: [
      { value: "65", suffix: "k+", label: "DAILY COMMUTES" },
      { value: "45", suffix: "%", label: "BILLING AUDIT SAVINGS" },
      { value: "100", suffix: "%", label: "DUTY OF CARE SLA" },
      { value: "ISO 27001", suffix: "", label: "SECURITY COMPLIANT" },
    ],
    benefitsSection: {
      heading: {
        white: "Platform",
        blue: "Benefits",
      },
      subtitle:
        "Why enterprise corporations switch to our customized employee commute and transport portal.",
      card1: {
        iconType: "timer",
        title: "Automated Shift Routing",
        description:
          "Clusters hundreds of employee addresses into optimal high-occupancy shuttle and cab routes in seconds.",
        image: "/images/tour-benefit-car-phone.png",
      },
      card2: {
        iconType: "surge",
        title: "Cost-Center Fare Allocation",
        description:
          "Automated allocation of employee commute costs across departmental cost centers for streamlined internal auditing.",
      },
      card3: {
        iconType: "safety",
        title: "Duty of Care Compliance",
        description:
          "Guaranteed female employee safe-drop verification, certified security escorts, and real-time command center alerts.",
      },
      card4: {
        iconType: "wallet",
        title: "Monthly Vendor E-Invoicing",
        description:
          "Tax-compliant consolidated monthly billing manifests with GPS audit trails for corporate accounts payable.",
        widget: {
          label: "Monthly Commute Budget",
          value: "$32,800.00",
          buttonText: "Approve Invoices",
        },
      },
    },
    techStackSection: {
      title: "Enterprise Corporate Mobility Stack",
      subtitle: "Engineered for automated employee roster routing, duty of care compliance, and ERP integration.",
      technologies: [
        { name: "React JS", iconType: "react" },
        { name: "Node.js", iconType: "node" },
        { name: "Next.js", iconType: "next" },
        { name: "Flutter", iconType: "flutter" },
        { name: "AWS Cloud", iconType: "aws" },
        { name: "WebSockets", iconType: "websockets" },
        { name: "PostgreSQL", iconType: "postgres" },
        { name: "Redis", iconType: "redis" },
        { name: "Docker", iconType: "docker" },
        { name: "Google Maps", iconType: "maps" },
      ],
    },
    corePlatformModulesSection: {
      heading: {
        white: "Core Platform",
        blue: "Modules",
      },
      subtitle: "Three Distinct Interfaces Working In Absolute Synchronization.",
      tabs: [
        {
                "id": "employee",
                "label": "Employee App",
                "storyTitle": "Safe & Punctual Commuting",
                "features": [
                        "Automated shift cab schedule sync with corporate HR calendar.",
                        "Live bus/cab telemetry with precise countdown to arrival at gate.",
                        "Women safety night escorts with mandatory safe-drop verification.",
                        "Instant SOS panic button connected directly to corporate command center."
                ],
                "mockupImage": "/images/tour-module-rider-mockup.png"
        },
        {
                "id": "driver",
                "label": "Chauffeur App",
                "storyTitle": "Optimized Multi-Pickup Routing",
                "features": [
                        "AI-optimized pickup sequences to achieve 99.4% on-time arrivals.",
                        "Employee contactless NFC/QR employee ID badge board scan.",
                        "Automated no-show timer and alternate route recommendation.",
                        "Direct emergency dispatcher call channel with one-touch dial."
                ],
                "mockupImage": "/images/tour-module-driver-mockup.png"
        },
        {
                "id": "admin",
                "label": "Corporate Admin",
                "storyTitle": "Enterprise Mobility Management",
                "features": [
                        "Automated shift shift-roster routing clustering 1,000+ employees in seconds.",
                        "Duty of care SLA dashboard tracking punctuality, speed & route deviations.",
                        "Departmental cost-center billing & automated vendor trip reconciliation.",
                        "ISO 27001 compliant encrypted employee ride history & audit logging."
                ],
                "mockupImage": "/images/tour-module-admin-mockup.png"
        }
],
    },
    coreModulesSection: {
      eyebrow: "ENTERPRISE COMMUTE PLATFORM",
      heading: "Automated Shift Rostering & Cab Sharing",
      description:
        "Optimize employee pickup routes, enforce female employee travel safety policies, and automate enterprise corporate invoicing.",
      modules: [
        {
          moduleNumber: "MODULE 01",
          title: "AI Route Clustered Shift Roster",
          description:
            "Automated grouping of employee home addresses into optimized multi-passenger cab routes based on login and logout shifts.",
          image: "/images/tour-popular-screen-3.png",
          iconType: "routing",
          specLeft: "Clustering: Voronoi / K-Means",
          specRight: "Cab Occupancy: 85%+",
        },
        {
          moduleNumber: "MODULE 02",
          title: "Duty of Care & Female Safety Escort",
          description:
            "Enforces security guard escorts for late-night shifts, live command center tracking, and mandatory employee safe-drop confirmations.",
          image: "/images/tour-popular-screen-1.png",
          iconType: "safety",
          specLeft: "Safe Drop Confirmation: Required",
          specRight: "Guard Roster: Automatic",
        },
        {
          moduleNumber: "MODULE 03",
          title: "Cost Center Billing & Department Ledger",
          description:
            "Automated trip tagging to departmental cost codes, tax-compliant GST e-invoices, and manager ride-budget pre-approvals.",
          image: "/images/tour-popular-screen-2.png",
          iconType: "wallet",
          specLeft: "ERP Sync: SAP / Workday",
          specRight: "Invoicing: Automated Monthly",
        },
      ],
    },
    integrationsSection: {
      eyebrow: "ENTERPRISE HR & ERP SYSTEMS",
      heading: "Seamless Corporate Software Integration",
      subtitle:
        "Connects directly with enterprise HRMS platforms, SSO identity providers, and SAP/Oracle financial ledgers.",
      items: [
        {
          iconType: "cloud",
          title: "HRMS Roster Sync (Workday, Darwinbox)",
          description:
            "Automated daily synchronization of shift timings, employee leaves, office locations, and reporting managers.",
        },
        {
          iconType: "shield",
          title: "Enterprise SSO (SAML 2.0 / Okta)",
          description:
            "Secure corporate login authentication with automated employee offboarding revoking commute access instantly.",
        },
        {
          iconType: "wallet",
          title: "ERP & Accounting Integration (SAP, Oracle)",
          description:
            "Direct posting of approved monthly transportation invoices into accounts payable with full audit trails.",
        },
      ],
      protocolsLabel: "DEPLOYED PROTOCOLS & INTEGRATIONS",
      protocols: "SAML 2.0 • OAuth 2.0 • SAP OData • Workday REST • Webhook Roster Sync",
      image: "/images/tour-ecosystem-highway-clean.png",
    },
    platformViewsSection: {
      eyebrow: "ENTERPRISE ACCESS",
      heading: "Employee Commute App & Corporate Portal",
      subtitle:
        "Intuitive mobile experience for office workers and deep administrative governance for corporate facilities managers.",
      views: [
        {
          pill: "EMPLOYEE APP",
          title: "Corporate Commute Mobile App",
          description:
            "View assigned pickup time, track approaching cab on live map, request ad-hoc weekend rides, and trigger one-touch SOS.",
          image: "/images/tour-popular-screen-2.png",
          techStack: "React Native • WebSockets • PushKit",
          actionText: "Request Demo",
          actionLink: "/#contact-cta",
        },
        {
          pill: "TRANSPORT DESK",
          title: "Corporate Facilities Web Cockpit",
          description:
            "Live overview of all ongoing company shuttles, vendor performance SLA monitoring, route compliance logs, and cost analytics.",
          image: "/images/tour-popular-screen-3.png",
          techStack: "Next.js • Tailwind CSS • TimescaleDB",
          actionText: "Explore Console",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      title: "Transform Corporate Transit Today",
      subtitle:
        "Reduce transportation overhead by up to 45% while guaranteeing the highest level of employee safety and accountability.",
      primaryButtonText: "Request a Demo",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "View Pricing Models",
      secondaryButtonLink: "/#contact-cta",
    },
  },

  "tour-holiday-packages": {
    slug: "tour-holiday-packages",
    badgeText: "SOLUTION MODULE 06",
    breadcrumbLabel: "HOLIDAY PACKAGE APP",
    heroTitle: {
      line1: "Tour & Holiday",
      line2Blue: "Packages",
    },
    aboutEcosystem:
      "Comprehensive domestic and international holiday package creation and customer portal featuring day-by-day itinerary builders, activity vouchers, integrated local tour guides, and seamless customer group chat support.",
    heroPhonesImage: "/images/tour-solution-hero-phones.png",
    metrics: [
      { value: "350", suffix: "+", label: "CURATED DESTINATIONS" },
      { value: "94", suffix: "%", label: "FIVE-STAR ITINERARIES" },
      { value: "24/7", suffix: "", label: "LIVE TRIP SUPPORT" },
      { value: "4.9", suffix: "★", label: "TRAVELER SATISFACTION" },
    ],
    benefitsSection: {
      heading: {
        white: "Platform",
        blue: "Benefits",
      },
      subtitle:
        "Why premium tour operators switch to our interactive itinerary and holiday booking software.",
      card1: {
        iconType: "timer",
        title: "Instant Day-Wise Itineraries",
        description:
          "Create rich, multi-city day-by-day trip schedules with Google Maps waypoints and automated PDF vouchers.",
        image: "/images/tour-popular-screen-1.png",
      },
      card2: {
        iconType: "surge",
        title: "Peak Season Package Pricing",
        description:
          "Yield management for high-demand seasonal holiday packages, early-bird discounts, and group tier pricing.",
      },
      card3: {
        iconType: "safety",
        title: "24/7 Traveler Assistance",
        description:
          "In-app direct WhatsApp concierge bridge connecting travelers with dedicated trip managers on the ground.",
      },
      card4: {
        iconType: "wallet",
        title: "Automated Guide & Hotel Vouchers",
        description:
          "Instantly disburse digital QR activity vouchers to local suppliers and streamline agent commission payouts.",
        widget: {
          label: "Supplier Ledger",
          value: "$18,250.00",
          buttonText: "Settle Vouchers",
        },
      },
    },
    techStackSection: {
      title: "Experiential Travel Tech Stack",
      subtitle: "Engineered for immersive multi-day tour curation, voucher distribution, and traveler guidance.",
      technologies: [
        { name: "React JS", iconType: "react" },
        { name: "Node.js", iconType: "node" },
        { name: "Next.js", iconType: "next" },
        { name: "Flutter", iconType: "flutter" },
        { name: "AWS Cloud", iconType: "aws" },
        { name: "WebSockets", iconType: "websockets" },
        { name: "PostgreSQL", iconType: "postgres" },
        { name: "Redis", iconType: "redis" },
        { name: "Docker", iconType: "docker" },
        { name: "Google Maps", iconType: "maps" },
      ],
    },
    corePlatformModulesSection: {
      heading: {
        white: "Core Platform",
        blue: "Modules",
      },
      subtitle: "Three Distinct Interfaces Working In Absolute Synchronization.",
      tabs: [
        {
                "id": "traveler",
                "label": "Tour Companion",
                "storyTitle": "Seamless Vacation Guidance",
                "features": [
                        "Digital daily itinerary with meeting points, guide contacts & offline maps.",
                        "Interactive day-by-day sightseeing checklist with audio tour clips.",
                        "Instant e-voucher barcoding for theme parks, museums & hotel check-ins.",
                        "Direct in-app messaging with group tour manager and local guide."
                ],
                "mockupImage": "/images/tour-module-rider-mockup.png"
        },
        {
                "id": "guide",
                "label": "Guide App",
                "storyTitle": "Group Tour Management",
                "features": [
                        "Real-time tourist headcount & roll-call tracker with QR scan.",
                        "Broadcast meeting point alerts & schedule updates to all group members.",
                        "Incident report submission with instant photo & medical escalation.",
                        "Local vendor voucher redemption & tipping ledger."
                ],
                "mockupImage": "/images/tour-module-driver-mockup.png"
        },
        {
                "id": "admin",
                "label": "Operations Console",
                "storyTitle": "Central Tour Operator ERP",
                "features": [
                        "Visual multi-day tour builder with inventory slot allocation.",
                        "Automated hotel, bus coach & guide batch booking confirmation.",
                        "Multi-tier package pricing rules reacting to seasonal departure dates.",
                        "Real-time guest feedback telemetry & NPS sentiment tracking."
                ],
                "mockupImage": "/images/tour-module-admin-mockup.png"
        }
],
    },
    coreModulesSection: {
      eyebrow: "HOLIDAY CURATION ENGINE",
      heading: "End-to-End Tour & Vacation Management",
      description:
        "Create unforgettable holiday experiences with automated day-wise itineraries, instant hotel & activity vouchers, and local guide dispatch.",
      modules: [
        {
          moduleNumber: "MODULE 01",
          title: "Day-by-Day Interactive Itinerary",
          description:
            "Rich multimedia day-by-day trip schedules with integrated Google Maps waypoints, activity durations, and meal inclusions.",
          image: "/images/tour-popular-screen-1.png",
          iconType: "calendar",
          specLeft: "Offline Maps: Included",
          specRight: "PDF Voucher: Auto-generated",
        },
        {
          moduleNumber: "MODULE 02",
          title: "Activity Vouchers & Guide Dispatch",
          description:
            "Automated issuance of QR code activity entry tickets, excursion permits, and direct chat dispatch with certified local guides.",
          image: "/images/tour-popular-screen-2.png",
          iconType: "routing",
          specLeft: "QR Entry: Scannable",
          specRight: "Guide Rating: In-app",
        },
        {
          moduleNumber: "MODULE 03",
          title: "Group Traveler Coordination Hub",
          description:
            "Shared group chat, group expense split calculator, real-time bus meetup location beacons, and emergency roll calls.",
          image: "/images/tour-popular-screen-3.png",
          iconType: "safety",
          specLeft: "Group Chat: Encrypted",
          specRight: "Live Location: Opt-in",
        },
      ],
    },
    integrationsSection: {
      eyebrow: "GLOBAL TRAVEL ECOSYSTEM",
      heading: "Connected Destination Activities & Content",
      subtitle:
        "Integrates with TripAdvisor, Viator activity feeds, WeatherKit forecasts, and local emergency concierge networks.",
      items: [
        {
          iconType: "map",
          title: "Viator & GetYourGuide Activity Feeds",
          description:
            "Instant booking access to over 300,000 tours, museum skip-the-line passes, and extreme adventure experiences.",
        },
        {
          iconType: "cloud",
          title: "WeatherKit & Live Destination Updates",
          description:
            "Live destination weather forecasts, local festival alerts, and advisory notifications directly inside the traveler itinerary.",
        },
        {
          iconType: "phone",
          title: "In-App WhatsApp & Concierge Bridge",
          description:
            "Direct 24/7 communications bridge allowing travelers to reach their assigned holiday manager in 1 tap.",
        },
      ],
      protocolsLabel: "DEPLOYED PROTOCOLS & INTEGRATIONS",
      protocols: "Viator Partner API • Apple WeatherKit • WhatsApp Cloud API • Stripe Global Multi-Currency",
      image: "/images/tour-ecosystem-highway-clean.png",
    },
    platformViewsSection: {
      eyebrow: "MEMORABLE VACATIONS",
      heading: "Traveler Itinerary App & Tour Operator Console",
      subtitle:
        "Put the entire vacation experience in the traveler's pocket and give holiday planners powerful bulk package creation tools.",
      views: [
        {
          pill: "TRAVELER APP",
          title: "Pocket Holiday Companion App",
          description:
            "Access day-wise schedules offline, view hotel check-in vouchers, discover recommended local dining, and chat with tour guides.",
          image: "/images/tour-popular-screen-1.png",
          techStack: "React Native • SQLite • Redux",
          actionText: "Request Demo",
          actionLink: "/#contact-cta",
        },
        {
          pill: "OPERATOR CONSOLE",
          title: "Tour Operator Package Studio",
          description:
            "Build seasonal vacation packages, customize group departure dates, manage hotel allotments, and process traveler payments.",
          image: "/images/tour-popular-screen-2.png",
          techStack: "Next.js • Tailwind CSS • PostgreSQL",
          actionText: "Explore Studio",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      title: "Launch Your Tour Platform Today",
      subtitle:
        "Build a premium holiday booking platform that turns casual browsers into lifelong vacation travelers.",
      primaryButtonText: "Request a Demo",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "View Pricing Models",
      secondaryButtonLink: "/#contact-cta",
    },
  },
};

// Slug resolver for flexible routing
export function resolveTourSolutionSlug(slug: string): string {
  const normalized = slug.toLowerCase().trim();
  if (tourTravelsSolutionsData[normalized]) {
    return normalized;
  }

  // Alias maps
  if (normalized.includes("taxi") || normalized.includes("texi")) {
    return "taxi-booking";
  }
  if (normalized.includes("travel-agency") || normalized.includes("agency")) {
    return "travel-agency";
  }
  if (normalized.includes("outstation") || normalized.includes("intercity")) {
    return "outstation-taxi";
  }
  if (normalized.includes("rental") || normalized.includes("car")) {
    return "car-rental";
  }
  if (normalized.includes("corporate") || normalized.includes("mobility")) {
    return "corporate-mobility";
  }
  if (normalized.includes("holiday") || normalized.includes("package") || normalized.includes("tour")) {
    return "tour-holiday-packages";
  }

  return "taxi-booking";
}
