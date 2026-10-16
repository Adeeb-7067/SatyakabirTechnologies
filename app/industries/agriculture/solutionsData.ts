export interface SolutionHeroTitle {
  line1: string;
  line2White?: string;
  line2Green: string;
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

export interface SolutionData {
  slug: string;
  eyebrow: string;
  heroTitle: SolutionHeroTitle;
  subtitle: string;
  overview: {
    image: string;
    paragraphs: string[];
    floatingPills: string[];
  };
  metricsHeading: {
    white: string;
    green: string;
  };
  metrics: SolutionMetric[];
  specHeading: {
    white: string;
    green: string;
  };
  specs: SolutionSpec[];
  specImage: string;
  featuresHeading: {
    white: string;
    green: string;
  };
  features: SolutionFeature[];
  layersHeading: {
    white: string;
    green: string;
  };
  layersImage: string;
  layers: SolutionLayer[];
  ctaHeading: {
    white: string;
    green: string;
  };
  ctaSubtitle: string;
}

export const agricultureSolutionsData: Record<string, SolutionData> = {
  // 1. AGRICULTURE MARKETPLACE
  "agriculture-marketplace": {
    slug: "agriculture-marketplace",
    eyebrow: "Multi-Vendor Marketplace",
    heroTitle: {
      line1: "Agriculture",
      line2Green: "Marketplace",
    },
    subtitle: "Multi-vendor platform connecting farmers, sellers, dealers, and customers.",
    overview: {
      image: "/images/agri-showcase-photo.jpg",
      paragraphs: [
        "This agriculture marketplace architecture provides a unified ecosystem where input producers, certified seed & pesticide dealers, farm equipment suppliers, regional cooperatives, and individual farmers connect, trade, and settle transactions seamlessly.",
        "Built for real-time agility and high-concurrency mobile access, the platform incorporates offline-first product synchronization, multi-tier commission structures, dealer escrow settlement, and regional language voice search.",
        "From automated harvest procurement orders to spot pricing and fertilizer batch verification, our solution delivers enterprise transparency, zero third-party platform licensing fees, and 100% intellectual property ownership."
      ],
      floatingPills: ["Farmer-to-Buyer Escrow", "Real-Time Spot Rates", "Offline-First Sync", "Multi-Tier Commissions"]
    },
    metricsHeading: {
      white: "Numbers from a",
      green: "live deployment."
    },
    metrics: [
      { value: "12,000+", label: "Farmers Onboarded" },
      { value: "40%", label: "Less Produce Wastage" },
      { value: "<200ms", label: "API Response Time" },
      { value: "99.9%", label: "Platform Uptime" }
    ],
    specHeading: {
      white: "Built to a clear spec, not a",
      green: "guess."
    },
    specs: [
      { label: "System Type", value: "Multi-vendor marketplace" },
      { label: "Expected Traffic", value: "25k Concurrent Users" },
      { label: "User Roles", value: "Farmer, Vendor, Buyer, Admin" },
      { label: "Front-End", value: "Web, Android, iOS apps" },
      { label: "API Protocol", value: "REST, gRPC & GraphQL" },
      { label: "Search Engine", value: "Vector + Algolia search" },
      { label: "Cloud Host", value: "Cloud (AWS/GCP) Enterprise" },
      { label: "SLA Delivery", value: "99.95% Uptime" }
    ],
    specImage: "/images/agri-product-showcase.png",
    featuresHeading: {
      white: "What's included out of the",
      green: "box."
    },
    features: [
      {
        title: "Vendor Onboarding",
        description: "Fast digital KYC verification for dealers, input manufacturers, and certified seed suppliers with license validation."
      },
      {
        title: "Product Catalog",
        description: "Hierarchical category management with SKU variations, regional pricing, and fertilizer chemical compliance."
      },
      {
        title: "Negotiation System",
        description: "Multi-tier pricing for volume procurement, cooperative bidding, and dealer discount threshold rules."
      },
      {
        title: "Payments & Escrow",
        description: "Integrated escrow payments, UPI, Net Banking, and rural Cash-on-Delivery verification with OTP reconciliation."
      },
      {
        title: "Logistics Integration",
        description: "Dispatch tracking, regional hub assignments, and last-mile farm gate delivery coordination with fleet telematics."
      },
      {
        title: "Admin Console",
        description: "Centralized telemetry for GMV, dispute resolution, commission settlements, and automated tax reporting."
      }
    ],
    layersHeading: {
      white: "Four layers,",
      green: "one clean data\nflow.",
    },
    layersImage: "/images/agri-architecture-mockup.png",
    layers: [
      {
        title: "Client Layer",
        description: "iOS, Android & Web storefronts for farmers, vendors and dealers.",
        tech: "React Native · Next.js · Tailwind"
      },
      {
        title: "API Gateway",
        description: "Autonomous REST/GraphQL layer with rate-limiting and caching.",
        tech: "Kong · Envoy · Node.js"
      },
      {
        title: "Service Layer",
        description: "Catalogue, order, payment and notification microservices.",
        tech: "NestJS · Go · BullMQ"
      },
      {
        title: "Data & Infrastructure",
        description: "PostgreSQL + Redis cache, deployed on AWS/GCP with auto-scaling.",
        tech: "PostgreSQL · Redis · AWS / GCP"
      }
    ],
    ctaHeading: {
      white: "Ready to launch",
      green: "your marketplace?"
    },
    ctaSubtitle: "Get a scoped proposal for this exact module, tailored to your region and vendor network — in 24 hours."
  },

  // 2. SINGLE-VENDOR AGRI COMMERCE
  "single-vendor-agri-commerce": {
    slug: "single-vendor-agri-commerce",
    eyebrow: "Direct-to-Farm Platform",
    heroTitle: {
      line1: "Single-Vendor",
      line2White: "Agri ",
      line2Green: "Commerce",
    },
    subtitle: "Multi-vendor platform for protecting farmers, sellers, dealers, and customers.",
    overview: {
      image: "/images/agri-proj-4.png",
      paragraphs: [
        "This single-vendor architecture transforms agricultural manufacturing by enabling direct-to-farm commerce, eliminated middleman friction, optimizing inventory across regional warehouses, and driving verified batch traceability for certified seeds, fertilizers, and farm equipment.",
        "The system features automated distributor routing, inventory reservation across regional warehouses, seasonal promotion rules, and field agent assisted-selling modes for low-connectivity rural hubs.",
        "Achieve uncompromised direct brand equity, capture real-time demand signals from farming clusters, and maintain complete compliance with agricultural input licensing and seed certification laws."
      ],
      floatingPills: ["Direct-to-Farm Channels", "Batch Seed Traceability", "Dealer Routing Engine", "Seasonal Bulks"]
    },
    metricsHeading: {
      white: "Numbers from a",
      green: "live deployment."
    },
    metrics: [
      { value: "10,000+", label: "Orders Fulfilled" },
      { value: "100%", label: "Traceability Score" },
      { value: "5,000+", label: "Active Farmers" },
      { value: "99.9%", label: "Platform Uptime" }
    ],
    specHeading: {
      white: "Built to a clear spec, not a",
      green: "guess."
    },
    specs: [
      { label: "System Type", value: "Enterprise Agri D2C Commerce" },
      { label: "Expected Traffic", value: "15k Concurrent Users" },
      { label: "User Roles", value: "Farmer, Enterprise, Dealer, Hub" },
      { label: "Front-End", value: "Web, Android, iOS apps" },
      { label: "API Protocol", value: "REST, gRPC & Event Streams" },
      { label: "ERP & Core Sync", value: "SAP, Dynamics, Tally Sync" },
      { label: "Cloud Host", value: "Cloud (AWS/GCP) Enterprise" },
      { label: "SLA Delivery", value: "99.95% Uptime" }
    ],
    specImage: "/images/agri-proj-1.png",
    featuresHeading: {
      white: "Comprehensive D2C Capabilities for",
      green: "Agricultural Enterprises"
    },
    features: [
      {
        title: "Direct-to-Farm Digital Catalog",
        description: "High-resolution product showcase with certified seed specifications, crop calendar recommendations, and dosage calculators."
      },
      {
        title: "Real-Time Order & Inventory Sync",
        description: "Multi-warehouse stock allocation preventing stockouts during peak pre-monsoon sowing windows."
      },
      {
        title: "Multi-Tier Pricing & Margin Rules",
        description: "Automated dealer discounts, seasonal bulk rebates, cooperative credit pricing, and loyalty point rewards."
      },
      {
        title: "Regulatory & Compliance Module",
        description: "Batch barcode tracking, pesticide licensing checks, chemical expiry management, and safety datasheet attachments."
      },
      {
        title: "Distributor Management Network",
        description: "Automatically route direct farm orders to nearest franchised dealer for fast local fulfillment and last-mile pickup."
      },
      {
        title: "Localised Multilingual Mobility",
        description: "Dialect-friendly vernacular interface with voice search and offline catalogue browsing for rural adoption."
      }
    ],
    layersHeading: {
      white: "Four layers, one clean data",
      green: "flow."
    },
    layersImage: "/images/agri-proj-4.png",
    layers: [
      {
        title: "Client Apps",
        description: "Farmer Commerce Mobile App, Field Representative Assisted-Selling Tablet App, and Enterprise ERP Sync Hub.",
        tech: "React Native · Next.js · Tailwind"
      },
      {
        title: "API Gateway",
        description: "Secure edge gateway with SSL termination, enterprise VPN connectivity, and resilient micro-caching.",
        tech: "Kong · Envoy · Node.js"
      },
      {
        title: "Core Microservices",
        description: "Dedicated microservices for D2C order processing, regional price rules, dealer allocation, and logistics tracking.",
        tech: "NestJS · Go · Redis"
      },
      {
        title: "Data & Cloud Infrastructure",
        description: "Enterprise PostgreSQL master-replica configuration with Redis clustering, backed by automated disaster recovery.",
        tech: "PostgreSQL · Redis · AWS / GCP"
      }
    ],
    ctaHeading: {
      white: "Ready to launch your",
      green: "direct-to-farm sales channel?"
    },
    ctaSubtitle: "Have a custom commerce requirement? Talk to our engineers today for a tailored architecture plan."
  },

  // 3. FARMER MOBILE APPLICATION
  "farmer-mobile-application": {
    slug: "farmer-mobile-application",
    eyebrow: "Farmer Mobile Experience",
    heroTitle: {
      line1: "Farmer Mobile",
      line2Green: "Application",
    },
    subtitle: "Voice-enabled mobile console giving growers hyper-local weather alerts, mandi crop spot prices, diagnostics, and subsidized govt schemes.",
    overview: {
      image: "/images/agri-proj-1.png",
      paragraphs: [
        "Architected specifically for smallholder and commercial growers, this mobile application delivers a hyper-local experience operable even in low-bandwidth 2G/3G conditions.",
        "Equipped with voice search in 14 regional dialects, integrated AI pest and crop disease detection, live mandi commodity spot prices, and weather advisory alerts calibrated to the exact plot coordinates.",
        "Includes seamless offline caching, enabling farmers to access agronomy schedules, spray recommendations, and fertilizer calculations without active internet connectivity."
      ],
      floatingPills: ["14 Regional Dialects", "AI Crop Diagnostics", "Live Mandi Rates", "Offline Agronomy Mode"]
    },
    metricsHeading: {
      white: "Numbers from a",
      green: "live deployment."
    },
    metrics: [
      { value: "450,000+", label: "Active Mobile Farmers" },
      { value: "98.4%", label: "Diagnostic Accuracy" },
      { value: "<150ms", label: "Voice Search Response" },
      { value: "99.9%", label: "Sync Availability" }
    ],
    specHeading: {
      white: "Built to a clear spec, not a",
      green: "guess."
    },
    specs: [
      { label: "System Type", value: "Native-Feel Farmer Mobility Pod" },
      { label: "Expected Traffic", value: "85k Daily Active Growers" },
      { label: "Supported OS", value: "Android (min SDK 24) · iOS 15+" },
      { label: "Local Database", value: "WatermelonDB / SQLite Local Cache" },
      { label: "AI Computer Vision", value: "On-Device TensorFlow Lite & Cloud API" },
      { label: "Languages", value: "Hindi, Telugu, Tamil, Marathi + 10 more" },
      { label: "Cloud Host", value: "Cloud Native (AWS/GCP, Kubernetes)" },
      { label: "SLA Delivery", value: "99.95% Mobile Uptime" }
    ],
    specImage: "/images/agri-proj-2.png",
    featuresHeading: {
      white: "Engineered specifically for",
      green: "rural mobile adoption."
    },
    features: [
      {
        title: "AI Crop Disease Diagnostics",
        description: "Point-and-shoot camera identification of crop leaf blight, fungal infections, and pest infestations with immediate cure advisories."
      },
      {
        title: "Real-Time Mandi Spot Prices",
        description: "Direct APMC mandi integration delivering daily trading volumes, historical price curves, and highest-bidder alerts."
      },
      {
        title: "Hyper-Local Weather Forecasts",
        description: "Micro-climate 7-day precipitation forecasts, wind velocity charts, and extreme heatwave spray warnings."
      },
      {
        title: "Government Subsidy Navigator",
        description: "Eligibility checkers and direct document upload integration for national and state agriculture subsidy programs."
      },
      {
        title: "Vernacular Voice Assistant",
        description: "Natural language voice query support enabling farmers to ask crop questions in their native mother tongue."
      },
      {
        title: "Soil & Water Test Telemetry",
        description: "Digital recordkeeping for soil health card parameters, NPK ratios, and customized fertilizer recommendations."
      }
    ],
    layersHeading: {
      white: "Four layers, one clean data",
      green: "flow."
    },
    layersImage: "/images/agri-mockup-cards.png",
    layers: [
      {
        title: "Edge Client App",
        description: "Lightweight React Native app optimized for entry-level Android smartphones with local SQLite sync queue.",
        tech: "React Native · TypeScript · WatermelonDB"
      },
      {
        title: "Vernacular & AI Gateway",
        description: "Speech-to-text NLP pipeline and image pre-processing edge layer for rapid diagnostics inference.",
        tech: "FastAPI · Whisper AI · Redis"
      },
      {
        title: "Agronomy Advisory Core",
        description: "Rules engine mapping crop phenology, soil test reports, and weather data into actionable farm alerts.",
        tech: "Python · Node.js · PostGIS"
      },
      {
        title: "High-Throughput Mandi Cloud",
        description: "Distributed scraping and API data ingestion pipeline aggregating real-time prices across 2,400+ APMC mandis.",
        tech: "PostgreSQL · Apache Kafka · AWS"
      }
    ],
    ctaHeading: {
      white: "Ready to launch your custom",
      green: "farmer mobile platform?"
    },
    ctaSubtitle: "Have a custom farmer application requirement? Talk to our engineering specialists today for an end-to-end plan."
  },

  // 4. SELLER / VENDOR APPLICATION
  "seller-vendor-application": {
    slug: "seller-vendor-application",
    eyebrow: "Vendor Command Portal",
    heroTitle: {
      line1: "Seller & Vendor",
      line2Green: "Application",
    },
    subtitle: "Streamlined vendor portal to update inventory SKU levels, handle regional dispatch slots, process farmer credit, and automate invoice settlements.",
    overview: {
      image: "/images/agri-showcase-photo.jpg",
      paragraphs: [
        "A dedicated operations console built for certified seed manufacturers, fertilizer distributors, agro-chemical dealers, and farm machinery suppliers.",
        "Provides real-time batch allocation, regional dealer inventory balancing, automated tax and invoice generation, and credit approval workflows for farmer cooperatives.",
        "Integrated with major ERP platforms such as SAP and Tally, ensuring synchronized accounting, ledger balances, and zero duplicate manual data entry across distribution tiers."
      ],
      floatingPills: ["Batch Inventory Control", "Dealer Credit Workflow", "ERP Synchronizer", "Automated GST Billing"]
    },
    metricsHeading: {
      white: "Numbers from a",
      green: "live deployment."
    },
    metrics: [
      { value: "8,500+", label: "Dealers Onboarded" },
      { value: "3.2x", label: "Inventory Velocity" },
      { value: "<300ms", label: "Order Dispatch Time" },
      { value: "99.9%", label: "Accounting Sync" }
    ],
    specHeading: {
      white: "Built to a clear spec, not a",
      green: "guess."
    },
    specs: [
      { label: "System Type", value: "Vendor & Distributor Command Portal" },
      { label: "Expected Traffic", value: "20k Concurrent Merchants" },
      { label: "User Roles", value: "Dealer, Regional Hub, Accountant, Admin" },
      { label: "Supported Platforms", value: "Web Console & Merchant Mobile App" },
      { label: "ERP Integration", value: "SAP S/4HANA, TallyPrime, Zoho Books" },
      { label: "Cloud Deployment", value: "Cloud Native (AWS/GCP, Kubernetes)" },
      { label: "Security", value: "SOC-2 Ready, Multi-Factor Authentication" },
      { label: "SLA Delivery", value: "99.95% Platform Uptime" }
    ],
    specImage: "/images/agri-product-showcase.png",
    featuresHeading: {
      white: "Complete merchant capabilities for",
      green: "agri distribution networks."
    },
    features: [
      {
        title: "Batch & Expiry Management",
        description: "Enforce strict FIFO allocation, chemical expiry date monitoring, and batch number tracking on every dispatch note."
      },
      {
        title: "Credit Guarantee Workflows",
        description: "Pre-approved credit limits, crop cycle pay-at-harvest terms, and automated repayment tracking for farmers."
      },
      {
        title: "Live Stock Replenishment",
        description: "Automated low-stock threshold triggers and supplier purchase order generation to prevent stockouts."
      },
      {
        title: "Multi-Location Depot Balancing",
        description: "Inter-depot stock transfer manifests, regional transit loss tracking, and hub capacity analytics."
      },
      {
        title: "Automated GST & E-Way Bills",
        description: "Instant generation of compliant e-way bills and GST-ready tax invoices directly upon shipment dispatch."
      },
      {
        title: "Performance & Margin Analytics",
        description: "Visual dashboards tracking gross margin per SKU, territory revenue trends, and top dealer rankings."
      }
    ],
    layersHeading: {
      white: "Four layers, one clean data",
      green: "flow."
    },
    layersImage: "/images/agri-mockup-cards.png",
    layers: [
      {
        title: "Merchant Web & Tablet App",
        description: "Fast Next.js web portal and high-contrast Android tablet application for dealer counter staff.",
        tech: "Next.js · React · Tailwind CSS"
      },
      {
        title: "High-Volume Transaction Hub",
        description: "Event-driven architecture processing bulk orders, credit checks, and inventory holds in milliseconds.",
        tech: "Node.js · Redis Queue · Kafka"
      },
      {
        title: "ERP & Financial Synchronizer",
        description: "Bi-directional connector syncing sales vouchers, tax ledgers, and inventory balances with enterprise ERPs.",
        tech: "Go · GraphQL · SAP Connectors"
      },
      {
        title: "Resilient Multi-Region Cloud",
        description: "High-availability PostgreSQL database cluster with encrypted daily backups and cloud failover.",
        tech: "PostgreSQL · AWS Aurora · Docker"
      }
    ],
    ctaHeading: {
      white: "Ready to streamline your",
      green: "seller & vendor operations?"
    },
    ctaSubtitle: "Have a vendor network requirement? Talk to our engineering specialists today for an enterprise rollout plan."
  },

  // 5. FARM LAND CRM
  "farm-land-crm": {
    slug: "farm-land-crm",
    eyebrow: "Agro-Realty & Farmland Management",
    heroTitle: {
      line1: "Farm Land",
      line2Green: "CRM Platform",
    },
    subtitle: "Specialized agro-realty and managed farmland CRM for spatial plot allocations, GIS telemetry, channel partners, and lease monetization.",
    overview: {
      image: "/images/agri-proj-3.png",
      paragraphs: [
        "Built for managed farmland operators, agro-forestry developers, collective farming ventures, and agro-realty investment firms.",
        "Combines spatial GIS cadastral mapping with investor relationship management, plot boundary digitization, fractional ownership ledgers, and automated lease returns calculation.",
        "Empowers management teams to track soil preparation milestones, drone flyover videos, and harvest profit-sharing dividends directly through investor web portals."
      ],
      floatingPills: ["Cadastral GIS Plotting", "Fractional Lease Ledgers", "Drone Telemetry Feed", "Dividend Distribution"]
    },
    metricsHeading: {
      white: "Numbers from a",
      green: "live deployment."
    },
    metrics: [
      { value: "45,000+", label: "Acres Digitized" },
      { value: "100%", label: "Title Traceability" },
      { value: "12,000+", label: "Farmland Investors" },
      { value: "99.9%", label: "Platform Uptime" }
    ],
    specHeading: {
      white: "Built to a clear spec, not a",
      green: "guess."
    },
    specs: [
      { label: "System Type", value: "Agro-Realty Spatial CRM Platform" },
      { label: "Expected Scale", value: "500k Farmland Plots" },
      { label: "GIS Mapping Engine", value: "Mapbox GL, Leaflet, GeoJSON, PostGIS" },
      { label: "Supported Devices", value: "Web GIS Console · Field Surveyor App" },
      { label: "Investor Portal", value: "Next.js Responsive Web & Mobile" },
      { label: "Document Vault", value: "S3 Encrypted Title Deed Storage" },
      { label: "Cloud Deployment", value: "AWS / GCP Dedicated Cluster" },
      { label: "SLA Delivery", value: "99.95% Availability" }
    ],
    specImage: "/images/agri-proj-4.png",
    featuresHeading: {
      white: "Tailored capabilities for",
      green: "managed farmland enterprises."
    },
    features: [
      {
        title: "Interactive GIS Cadastral Maps",
        description: "Zoomable plot master plans with color-coded availability, boundary polygon coordinates, and topography elevation lines."
      },
      {
        title: "Plot Reservation & Sales Pipeline",
        description: "Manage channel partner leads, plot holding timers, digital agreement signing, and automated payment milestone alerts."
      },
      {
        title: "Investor Telemetry Dashboard",
        description: "Private portal for plot owners to view live crop status, drone survey footage, and quarterly plantation health audits."
      },
      {
        title: "Lease & Dividend Engine",
        description: "Automated calculations for crop harvest yields, management expenses, and direct bank dividend disbursements."
      },
      {
        title: "Legal & Title Vault",
        description: "Tamper-proof digital repository for survey numbers, soil testing reports, water permits, and government registration deeds."
      },
      {
        title: "Field Maintenance Work Orders",
        description: "Assign boundary fencing, drip irrigation, and orchard maintenance work orders with before-and-after photo verification."
      }
    ],
    layersHeading: {
      white: "Four layers, one clean data",
      green: "flow."
    },
    layersImage: "/images/agri-proj-3.png",
    layers: [
      {
        title: "Spatial GIS & Investor Web App",
        description: "High-performance Mapbox GL vector map interface for lead generation, plot selection, and owner reporting.",
        tech: "Next.js · Mapbox GL · TypeScript"
      },
      {
        title: "GIS & Cadastral Gateway",
        description: "Spatial query optimizer converting GeoJSON polygons, elevation rasters, and boundary points in real time.",
        tech: "PostGIS · GeoServer · Node.js"
      },
      {
        title: "CRM & Accounting Core",
        description: "Lead distribution engine, installment schedule manager, and automated dividend distribution orchestrator.",
        tech: "Python · Django · Celery"
      },
      {
        title: "Secure Cloud & Document Store",
        description: "Encrypted AWS S3 document vault with multi-tier access control and spatial PostgreSQL database replica sets.",
        tech: "PostgreSQL · AWS S3 · Docker"
      }
    ],
    ctaHeading: {
      white: "Ready to scale your",
      green: "farmland CRM operations?"
    },
    ctaSubtitle: "Have a managed farmland requirement? Talk to our engineering specialists today for a customized GIS architecture."
  },

  // 6. AGRI WORKFORCE MANAGEMENT
  "agri-workforce-management": {
    slug: "agri-workforce-management",
    eyebrow: "Field Labor Automation",
    heroTitle: {
      line1: "Agri Workforce",
      line2Green: "Management",
    },
    subtitle: "Automated seasonal harvester booking, field agent GPS geofencing, daily biometric attendance, and direct Aadhaar/UPI wage distribution.",
    overview: {
      image: "/images/agri-showcase-photo.jpg",
      paragraphs: [
        "Built to solve the critical seasonal labor shortage in agriculture through smart crew scheduling, GPS-geofenced attendance, and instant wage payouts.",
        "Allows commercial orchard owners, sugarcane cooperatives, and tea estates to mobilize verified labor gangs, track piece-rate harvesting output, and prevent wage leakage.",
        "Features offline biometric mobile scanning, crew supervisor allocation tools, and automatic wage disbursement via direct UPI/Aadhaar payments."
      ],
      floatingPills: ["GPS Field Geofencing", "Biometric Mobile Attendance", "Piece-Rate Harvest Tracking", "Instant UPI Wage Payouts"]
    },
    metricsHeading: {
      white: "Numbers from a",
      green: "live deployment."
    },
    metrics: [
      { value: "35,000+", label: "Harvesters Deployed" },
      { value: "0%", label: "Ghost Worker Leakage" },
      { value: "100%", label: "Same-Day Wage Payouts" },
      { value: "99.9%", label: "System Uptime" }
    ],
    specHeading: {
      white: "Built to a clear spec, not a",
      green: "guess."
    },
    specs: [
      { label: "System Type", value: "Agri Workforce & Field Labor Platform" },
      { label: "Expected Scale", value: "100k Seasonal Field Workers" },
      { label: "Attendance Protocol", value: "GPS Geofence + Offline Facial/Fingerprint" },
      { label: "Hardware Support", value: "Mantra / Morpho Biometric Scanners · Mobiles" },
      { label: "Payout Gateway", value: "Direct Bank Transfer, UPI & Aadhaar AEPS" },
      { label: "Supervisor App", value: "Offline-First Android Tablet / Mobile" },
      { label: "Cloud Deployment", value: "AWS / GCP Managed Cluster" },
      { label: "SLA Delivery", value: "99.95% Availability" }
    ],
    specImage: "/images/agri-proj-2.png",
    featuresHeading: {
      white: "Engineered for harsh rural",
      green: "field conditions."
    },
    features: [
      {
        title: "GPS-Geofenced Plot Attendance",
        description: "Workers check in only when physically within the pre-defined polygon boundary of the farm plot."
      },
      {
        title: "Piece-Rate Weighment Integration",
        description: "Connect digital weighing scales via Bluetooth to log harvested fruit or leaf weight directly to the worker's badge."
      },
      {
        title: "Crew & Contractor Allocation",
        description: "Manage labor contractor contracts, crew rosters, transportation buses, and camp lodging assignments."
      },
      {
        title: "Same-Day Digital Wage Settlement",
        description: "Automated calculation of daily wages based on weight or hours, with instant one-click batch UPI disbursement."
      },
      {
        title: "Offline Supervisor Console",
        description: "Operates 100% offline in remote orchards; synchronizes records automatically when cellular connectivity is regained."
      },
      {
        title: "Labor Law & Safety Compliance",
        description: "Track mandatory rest intervals, minimum wage compliance, emergency medical contacts, and accident insurance."
      }
    ],
    layersHeading: {
      white: "Four layers, one clean data",
      green: "flow."
    },
    layersImage: "/images/agri-mockup-cards.png",
    layers: [
      {
        title: "Supervisor Mobile App",
        description: "Ruggedized Android mobile app for gang leaders with Bluetooth scanner pairing and offline local cache.",
        tech: "React Native · SQLite · Bluetooth Low Energy"
      },
      {
        title: "Geofencing & Sync Gateway",
        description: "Microservice verifying GPS polygons and resolving asynchronous attendance sync packets.",
        tech: "Node.js · Redis · PostGIS"
      },
      {
        title: "Wage Calculation Engine",
        description: "Rule-based payroll processor computing overtime, piece-rate incentives, contractor commissions, and tax deductions.",
        tech: "Python · Celery · PostgreSQL"
      },
      {
        title: "Banking & Disbursement Cloud",
        description: "Direct banking API integration executing bulk payment batches with webhook reconciliation.",
        tech: "AWS KMS · Docker · Kubernetes"
      }
    ],
    ctaHeading: {
      white: "Ready to modernize your",
      green: "agricultural workforce?"
    },
    ctaSubtitle: "Have a seasonal labor management requirement? Talk to our engineering team today for an operational rollout blueprint."
  },

  // 7. DEALER & DISTRIBUTOR NETWORK
  "dealer-distributor-network": {
    slug: "dealer-distributor-network",
    eyebrow: "Agri Supply Chain Orchestration",
    heroTitle: {
      line1: "Dealer & Distributor",
      line2Green: "Network Hub",
    },
    subtitle: "Multi-tiered distribution command managing stock replenishment quotas, territorial limits, credit guarantees, and incentive payouts.",
    overview: {
      image: "/images/agri-proj-4.png",
      paragraphs: [
        "Built for agri-input conglomerates, seed producers, and crop protection brands managing hundreds of territorial distributors and village-level retailers.",
        "Prevents cross-territory dumping, automates stock replenishment based on local sowing forecasts, and simplifies incentive settlement matrices.",
        "Equips brand executives with complete visibility into secondary and tertiary sales volumes, dealer inventory turn rates, and credit risk exposures."
      ],
      floatingPills: ["Territorial Geofencing", "Secondary Sales Tracking", "Credit Risk Engine", "Dynamic Incentive Schemes"]
    },
    metricsHeading: {
      white: "Numbers from a",
      green: "live deployment."
    },
    metrics: [
      { value: "14,000+", label: "Dealers Connected" },
      { value: "35%", label: "Faster Stock Turn" },
      { value: "<250ms", label: "Quotation Turnaround" },
      { value: "99.9%", label: "Ledger Accuracy" }
    ],
    specHeading: {
      white: "Built to a clear spec, not a",
      green: "guess."
    },
    specs: [
      { label: "System Type", value: "Multi-Tier Agri Distribution Command" },
      { label: "Tier Support", value: "National Depot · C&F · Distributor · Dealer" },
      { label: "Supported Platforms", value: "Enterprise Web Portal · Field Agent Mobile" },
      { label: "ERP Connectors", value: "SAP ECC / S4HANA, Oracle NetSuite, Tally" },
      { label: "Pricing Engine", value: "State-wise Tax & Seasonal Rebate Matrix" },
      { label: "Order Execution", value: "Real-Time Stock Hold & Automated Dispatch" },
      { label: "Cloud Deployment", value: "Cloud Native (AWS/GCP, Kubernetes)" },
      { label: "SLA Delivery", value: "99.95% Availability" }
    ],
    specImage: "/images/agri-proj-1.png",
    featuresHeading: {
      white: "Total visibility across your entire",
      green: "distribution chain."
    },
    features: [
      {
        title: "Secondary & Tertiary Sales Telemetry",
        description: "Capture actual sales from dealers to farmers with barcode scanning to measure genuine market demand."
      },
      {
        title: "Territory Protection & Geo-Locking",
        description: "Eliminate illegal cross-border product dumping by restricting product activations to authorized geographical pin codes."
      },
      {
        title: "Dynamic Incentive & Rebate Engine",
        description: "Automate early-order cash discounts, volume kickbacks, seasonal target rebates, and holiday incentive tiers."
      },
      {
        title: "Credit Exposure & Aging Reports",
        description: "Monitor outstanding balances, automated credit freeze triggers, and bank guarantee validity tracking."
      },
      {
        title: "Field Officer Route Tracking",
        description: "Beat plans, dealer visit geo-tagging, sample distribution logging, and feedback capture for territory managers."
      },
      {
        title: "Returns & Damage Authorization",
        description: "Standardized return authorization workflows for expired pesticides, broken packaging, and recall batches."
      }
    ],
    layersHeading: {
      white: "Four layers, one clean data",
      green: "flow."
    },
    layersImage: "/images/agri-proj-4.png",
    layers: [
      {
        title: "Dealer & Executive Apps",
        description: "Responsive Next.js web portal for dealers and React Native field force app with offline catalog.",
        tech: "Next.js · React Native · Tailwind CSS"
      },
      {
        title: "Pricing & Allocation Engine",
        description: "High-speed business logic microservice evaluating tax rates, freight subsidies, and dealer credit lines.",
        tech: "NestJS · Go · Redis"
      },
      {
        title: "Enterprise ERP Sync Layer",
        description: "Fault-tolerant messaging pipeline integrating sales orders, dispatch notes, and credit memos directly into SAP.",
        tech: "Apache Kafka · RabbitMQ · Node.js"
      },
      {
        title: "Secure Cloud Infrastructure",
        description: "High-availability PostgreSQL cluster with automated backups, VPC peering, and Cloudflare enterprise DDoS protection.",
        tech: "PostgreSQL · AWS Aurora · Kubernetes"
      }
    ],
    ctaHeading: {
      white: "Ready to command your",
      green: "dealer & distributor network?"
    },
    ctaSubtitle: "Have a distributor management requirement? Talk to our enterprise engineers today for a custom blueprint."
  },

  // 8. FRANCHISE MANAGEMENT
  "franchise-management": {
    slug: "franchise-management",
    eyebrow: "Rural Retail Expansion",
    heroTitle: {
      line1: "Franchise & Kendra",
      line2Green: "Management Hub",
    },
    subtitle: "Rapid rural Kendra and franchise onboarding, hardware kit provisioning, revenue sharing matrices, and real-time revenue audits.",
    overview: {
      image: "/images/agri-proj-3.png",
      paragraphs: [
        "A turn-key platform for agri-retail chains, rural franchise hubs (Kisan Kendras), and custom hiring centers seeking exponential geographical footprint expansion.",
        "Automates the end-to-end franchisee life cycle from territorial feasibility analysis and digital licensing to POS billing terminal provisioning and revenue-share audits.",
        "Includes unified point-of-sale software, centralized procurement order routing, customer loyalty points, and real-time store surveillance telemetry."
      ],
      floatingPills: ["Fast Franchise Onboarding", "Unified Cloud POS", "Automated Revenue Share", "Audit Telemetry"]
    },
    metricsHeading: {
      white: "Numbers from a",
      green: "live deployment."
    },
    metrics: [
      { value: "2,200+", label: "Kendras Active" },
      { value: "14 Days", label: "Average Launch Time" },
      { value: "<200ms", label: "Cloud POS Latency" },
      { value: "99.9%", label: "System Availability" }
    ],
    specHeading: {
      white: "Built to a clear spec, not a",
      green: "guess."
    },
    specs: [
      { label: "System Type", value: "Agri Retail Franchise Management Platform" },
      { label: "Store Pod Scale", value: "10k Rural Kisan Kendras" },
      { label: "POS Capabilities", value: "Offline-First Billing · Barcode Scan · Thermal Print" },
      { label: "Payment Modes", value: "UPI, Debit Card, Cash, Farmer Credit Line" },
      { label: "Hardware Support", value: "Android POS Terminals · Tablets · Desktop" },
      { label: "Accounting", value: "Automated Royalty & Franchise Revenue Share" },
      { label: "Cloud Deployment", value: "Cloud Native (AWS/GCP, Kubernetes)" },
      { label: "SLA Delivery", value: "99.95% Availability" }
    ],
    specImage: "/images/agri-product-showcase.png",
    featuresHeading: {
      white: "Everything required to operate a",
      green: "high-growth rural retail chain."
    },
    features: [
      {
        title: "Digital Franchise Onboarding",
        description: "Paperless application portal, background checks, territorial conflict screening, and digital franchise agreement signing."
      },
      {
        title: "Kendra Offline-First Cloud POS",
        description: "Ultra-fast billing counter software with barcode scanning, batch expiry validation, and thermal receipt printing."
      },
      {
        title: "Automated Royalty Settlements",
        description: "Split transactions automatically between franchise owner and central brand based on predefined margin formulas."
      },
      {
        title: "Centralized Supply Replenishment",
        description: "Automated stock ordering from regional mother warehouses triggered whenever store inventory reaches re-order point."
      },
      {
        title: "Omnichannel Farmer Loyalty Program",
        description: "Universal farmer points redeemable across any franchise store in the country with phone number verification."
      },
      {
        title: "Compliance & Audit Telemetry",
        description: "Digital logbooks for pesticide regulatory sales registers, inspection uploads, and mystery-shopper audit reports."
      }
    ],
    layersHeading: {
      white: "Four layers, one clean data",
      green: "flow."
    },
    layersImage: "/images/agri-mockup-cards.png",
    layers: [
      {
        title: "Kendra POS & Franchise Portal",
        description: "Fast offline-first Progressive Web App (PWA) and Android POS application for retail counter staff.",
        tech: "React · TypeScript · IndexedDB"
      },
      {
        title: "Store Transaction Gateway",
        description: "Event-driven edge router synchronizing offline sales tickets, tax calculations, and stock subtractions.",
        tech: "Node.js · Redis · GraphQL"
      },
      {
        title: "Royalty & Supply Orchestration",
        description: "Microservice calculating franchise split commissions, stock replenishment manifests, and distributor billing.",
        tech: "Go · BullMQ · PostgreSQL"
      },
      {
        title: "Secure Enterprise Cloud",
        description: "Multi-tenant PostgreSQL database cluster with encrypted backups, VPC isolation, and Prometheus telemetry.",
        tech: "PostgreSQL · AWS ECS · Docker"
      }
    ],
    ctaHeading: {
      white: "Ready to scale your",
      green: "rural franchise network?"
    },
    ctaSubtitle: "Have a franchise or Kendra management requirement? Talk to our engineering specialists today for an enterprise architecture plan."
  },

  // 9. FARM MANAGEMENT (FMS)
  "farm-management-fms": {
    slug: "farm-management-fms",
    eyebrow: "Enterprise Precision Agriculture",
    heroTitle: {
      line1: "Farm Management",
      line2Green: "System (FMS)",
    },
    subtitle: "End-to-end farm life cycle tracking: sowing dates, fertilizer dosage schedules, input expenditures, drone telemetry, and harvest ledgers.",
    overview: {
      image: "/images/agri-proj-4.png",
      paragraphs: [
        "A full-suite Enterprise Farm Management System built for corporate agro-holdings, contract farming enterprises, and seed multiplication programs.",
        "Integrates multi-polygon GIS cadastral mapping, crop growth stage monitoring, satellite vegetation indices (NDVI/NDRE), automated irrigation valves, and tractor OBD-II telematics.",
        "Delivers complete cost accounting per plot, enabling agricultural directors to track cost of cultivation, chemical consumption, and projected harvest revenues."
      ],
      floatingPills: ["Satellite NDVI Telemetry", "Plot Cost Accounting", "Tractor OBD-II Telematics", "Automated Irrigation"]
    },
    metricsHeading: {
      white: "Operational efficiency metrics from",
      green: "managed acreage."
    },
    metrics: [
      { value: "120,000+", label: "Acres Managed" },
      { value: "28%", label: "Input Cost Reduction" },
      { value: "100%", label: "GlobalGAP Compliance" },
      { value: "99.9%", label: "Cloud Availability" }
    ],
    specHeading: {
      white: "Built to a clear spec, not a",
      green: "guess."
    },
    specs: [
      { label: "System Type", value: "Enterprise Farm Management System" },
      { label: "Spatial Mapping", value: "GeoJSON, ESRI Shapefiles, Sentinel-2" },
      { label: "ERP Integration", value: "SAP Agri, Oracle NetSuite, Tally" },
      { label: "Machinery Telematics", value: "CAN Bus / ISOBUS OBD-II Vehicle Trackers" },
      { label: "Compliance Engines", value: "GlobalGAP, USDA Organic, Fair Trade" },
      { label: "Cost Accounting", value: "Activity-Based Costing (ABC) per Plot" },
      { label: "Deployment", value: "Private VPC / AWS Dedicated Cluster" },
      { label: "IP Ownership", value: "100% Perpetual Commercial License" }
    ],
    specImage: "/images/agri-proj-3.png",
    featuresHeading: {
      white: "End-to-end FMS capabilities for",
      green: "commercial farms."
    },
    features: [
      {
        title: "Crop Calendar Engine",
        description: "Automated agronomy task generation based on sowing date, regional soil composition, and weather forecasts."
      },
      {
        title: "Spatial Plot GIS Mapping",
        description: "Interactive polygon maps with color-coded harvest stages, NDVI health overlays, and soil test histories."
      },
      {
        title: "Machinery & Fuel Telematics",
        description: "Track tractor engine hours, fuel consumption, maintenance intervals, and implement usage across plots."
      },
      {
        title: "Labor Allocation & Payroll",
        description: "Biometric and mobile attendance, piece-rate harvest task tracking, and digital wage payouts."
      },
      {
        title: "Inventory & Warehouse Control",
        description: "Real-time stock tracking for seed bags, chemical drums, fertilizers, and spare parts across farm depots."
      },
      {
        title: "Harvest Yield & Profitability",
        description: "Track gross output, grade sorting, moisture levels, transport costs, and net margin per acre."
      }
    ],
    layersHeading: {
      white: "Four layers, one clean data",
      green: "flow."
    },
    layersImage: "/images/agri-proj-4.png",
    layers: [
      {
        title: "Web GIS & Mobile Pods",
        description: "High-performance Mapbox GL web portal for agronomy leads and offline mobile apps for field supervisors.",
        tech: "Next.js · Mapbox GL · React Native"
      },
      {
        title: "Telemetry & Task Pipeline",
        description: "Asynchronous task queue dispatching daily farm work orders and ingesting GPS telemetry streams.",
        tech: "RabbitMQ · Node.js · Go"
      },
      {
        title: "Cost Accounting & BI Core",
        description: "Activity-based cost calculation engine and automated farm balance sheet generator.",
        tech: "PostgreSQL · TimescaleDB · ClickHouse"
      },
      {
        title: "Enterprise Cloud Infra",
        description: "Containerized microservices deployed across AWS VPC with automated nightly database snapshots.",
        tech: "Kubernetes · AWS RDS · Terraform"
      }
    ],
    ctaHeading: {
      white: "Ready to modernize your",
      green: "farm management operations?"
    },
    ctaSubtitle: "Deploy a custom Enterprise FMS built for your acreage scale, crop profiles, and multi-branch teams."
  }
};

export const defaultSolutionSlug = "agriculture-marketplace";
