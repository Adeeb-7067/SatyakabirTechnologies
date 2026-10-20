export interface SecuritySolutionMetric {
  value: string;
  label: string;
  color: "white" | "blue" | "green";
}

export interface SecuritySolutionHeroTitle {
  line1: string;
  line2Blue: string;
}

export interface SolutionCoreModule {
  moduleNumber: string;
  title: string;
  description: string;
  image: string;
  iconType: "patrol" | "roster" | "sos" | "camera" | "visitor" | "checklist" | "compliance" | "payroll";
  specLeft: string;
  specRight: string;
}

export interface HardwareIntegrationItem {
  iconType: "maps" | "nfc" | "code" | "camera" | "qr" | "sensor";
  title: string;
  description: string;
}

export interface PlatformViewCard {
  pill: string;
  title: string;
  description: string;
  image: string;
  imageType: "mobile" | "desktop";
  techStack: string;
  actionText: string;
  actionLink: string;
}

export interface SolutionCTASection {
  pill: string;
  heading: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface SecuritySolutionData {
  slug: string;
  badgeText: string;
  breadcrumbLabel: string;
  heroTitle: SecuritySolutionHeroTitle;
  subtitle: string;
  demoLink: string;
  docsLink: string;
  metrics: SecuritySolutionMetric[];
  coreModulesSection: {
    eyebrow: string;
    heading: string;
    description: string;
    modules: SolutionCoreModule[];
  };
  hardwareIntegrationsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: HardwareIntegrationItem[];
    protocolsLabel: string;
    protocols: string;
    image: string;
  };
  platformViewsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    views: [PlatformViewCard, PlatformViewCard];
  };
  ctaSection: SolutionCTASection;
}

export const securityManpowerSolutionsData: Record<string, SecuritySolutionData> = {
  "security-guard-management": {
    slug: "security-guard-management",
    badgeText: "App Development & Integration  |  v4.2 PRO",
    breadcrumbLabel: "SECURITY GUARD MANAGMENT",
    heroTitle: {
      line1: "Security Guard",
      line2Blue: "Management",
    },
    subtitle:
      "Hum security agencies ke liye highly accurate guard tracking aur deployment systems engineer karte hain. Ye app manual registers ko replace karke real-time GPS tracking, shift automation, aur incident reporting provide karti hai.",
    demoLink: "/#contact-cta",
    docsLink: "/#contact-cta",
    metrics: [
      { value: "99.8%", label: "Shift Accuracy", color: "blue" },
      { value: "<2s", label: "SOS Telemetry", color: "green" },
      { value: "Zero", label: "Paper Logbooks", color: "white" },
    ],
    coreModulesSection: {
      eyebrow: "// CAPABILITIES",
      heading: "Core Modules We Build",
      description:
        "Production-tested architectural modules customized for large-scale facility management and manned guarding operations.",
      modules: [
        {
          moduleNumber: "MODULE #01",
          title: "Live Patrolling Engine",
          description:
            "QR aur NFC-based checkpoint scanning system, taaki guards ki movement real-time map ho sake aur geo-fenced logs create ho.",
          image: "/images/sec-module-1.jpg",
          iconType: "patrol",
          specLeft: "• NFC / QR Tags",
          specRight: "• Geo-Fencing",
        },
        {
          moduleNumber: "MODULE #02",
          title: "Automated Shift Roaster",
          description:
            "Dynamic scheduling jo automatically replacement guards ko alert bhejta hai agar koi designated guard duty par nahi aata.",
          image: "/images/sec-module-2.jpg",
          iconType: "roster",
          specLeft: "• Auto-Escalation",
          specRight: "• Overtime Sync",
        },
        {
          moduleNumber: "MODULE #03",
          title: "Instant Incident SOS",
          description:
            "Photo aur video upload ke sath live SOS trigger, jo direct command center par location aur severity alert bhejta hai.",
          image: "/images/sec-module-3.jpg",
          iconType: "sos",
          specLeft: "• <2s Alert Speed",
          specRight: "• Video / Photo Proof",
        },
      ],
    },
    hardwareIntegrationsSection: {
      eyebrow: "// HARDWARE & IOT SYNCHRONIZATION",
      heading: "Hardware & Tech Integrations",
      subtitle:
        "Hum sirf software nahi banate, hum IoT devices aur hardware ko directly cloud applications ke sath sync karte hain.",
      items: [
        {
          iconType: "maps",
          title: "Geofencing & Maps API",
          description:
            "Real-time location, polygon perimeter boundary fence, and sub-second radius tracking.",
        },
        {
          iconType: "nfc",
          title: "NFC & RFID Tags",
          description:
            "Physical checkpoint scanning integration with anti-tamper encryption.",
        },
        {
          iconType: "code",
          title: "Biometric Engine APIs",
          description:
            "Facial recognition, fingerprint attendance terminal sync, and automated EPF/ESI records.",
        },
      ],
      protocolsLabel: "HARDWARE PROTOCOLS SUPPORTED",
      protocols: "MQTT • WebSockets • RTSP Camera Streams • BLE Beacons",
      image: "/images/sec-hardware-integrations.jpg",
    },
    platformViewsSection: {
      eyebrow: "// CROSS-PLATFORM INTERFACES",
      heading: "Platform Views",
      subtitle:
        "One unified data flow across mobile and web interfaces, delivering synchronized visibility to field staff and remote commanders.",
      views: [
        {
          pill: "FIELD INTERFACE",
          title: "Guard Mobile App",
          description:
            "Lightweight Android/iOS app for check-ins, SOS, checkpoint verification, and shift viewing.",
          image: "/images/sec-platform-guard-mobile.jpg",
          imageType: "mobile",
          techStack: "iOS & Android Native / React Native",
          actionText: "Offline Sync Ready →",
          actionLink: "/#contact-cta",
        },
        {
          pill: "HQ DESKTOP PORTAL",
          title: "Command Center",
          description:
            "Web dashboard for live tracking, client reporting, real-time dispatch, and interactive map view.",
          image: "/images/sec-platform-command-center.jpg",
          imageType: "desktop",
          techStack: "Next.js • TailwindCSS • Leaflet / Mapbox",
          actionText: "Export CSV & Audit Logs →",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      pill: "READY TO DIGITIZE YOUR SECURITY FLEET?",
      heading: {
        line1: "Upgrade to Automated Guard",
        line2: "Operations Today",
      },
      subtitle:
        "Replace lost logbooks and manual errors with our real-time tracking, biometric verification, and centralized dispatch dashboard. Built at Bhopal IT Park with 100% source code ownership.",
      primaryButtonText: "Schedule a Free Architecture Audit",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "Chat on WhatsApp",
      secondaryButtonLink: "/#contact-cta",
    },
  },

  "manpower-supply-management": {
    slug: "manpower-supply-management",
    badgeText: "Workforce & Staffing Automation  |  v4.2 PRO",
    breadcrumbLabel: "MANPOWER SUPPLY MANAGEMENT",
    heroTitle: {
      line1: "Manpower Supply",
      line2Blue: "Management",
    },
    subtitle:
      "Hum manpower contractors aur staffing firms ke liye automated employee databases, biometric attendance, client deployment, aur payroll compliance platforms engineer karte hain taaki billing transparent rahe.",
    demoLink: "/#contact-cta",
    docsLink: "/#contact-cta",
    metrics: [
      { value: "100%", label: "Statutory Compliance", color: "blue" },
      { value: "4x", label: "Faster Deployment", color: "green" },
      { value: "Zero", label: "Payroll Discrepancy", color: "white" },
    ],
    coreModulesSection: {
      eyebrow: "// CAPABILITIES",
      heading: "Core Modules We Build",
      description:
        "Enterprise-grade workforce databases and compliance automation customized for high-volume staffing agencies.",
      modules: [
        {
          moduleNumber: "MODULE #01",
          title: "Biometric KYC & Onboarding",
          description:
            "Aadhaar, police verification, aur bank account validation ke sath fast paperless digital worker onboarding engine.",
          image: "/images/sec-module-2.jpg",
          iconType: "compliance",
          specLeft: "• Instant Aadhaar eKYC",
          specRight: "• Background Check",
        },
        {
          moduleNumber: "MODULE #02",
          title: "Client Skill Allocation",
          description:
            "Corporate clients aur manufacturing plants ke requirements ke according certified manpower auto-match aur deployment.",
          image: "/images/sec-module-1.jpg",
          iconType: "roster",
          specLeft: "• Skill Matrix Matching",
          specRight: "• Multi-Site Roster",
        },
        {
          moduleNumber: "MODULE #03",
          title: "Automated Statutory Payroll",
          description:
            "PF, ESIC, PT, TDS, aur overtime calculation ke sath 1-click salary slip generation aur bank payout batch integration.",
          image: "/images/sec-module-3.jpg",
          iconType: "payroll",
          specLeft: "• 100% PF & ESIC Sync",
          specRight: "• Bank Payout API",
        },
      ],
    },
    hardwareIntegrationsSection: {
      eyebrow: "// HARDWARE & IOT SYNCHRONIZATION",
      heading: "Hardware & Biometric Integrations",
      subtitle:
        "Industrial client gates, biometric terminals, aur payroll cloud systems ko seamlessly connect karte hain.",
      items: [
        {
          iconType: "code",
          title: "Biometric Terminal Sync",
          description:
            "ZKTeco, Mantra, aur Suprema biometric devices se attendance auto-pull engine.",
        },
        {
          iconType: "nfc",
          title: "Smart RFID ID Cards",
          description:
            "NFC enabled contractor worker badges with embedded digital KYC tokens.",
        },
        {
          iconType: "maps",
          title: "Multi-Plant Geofencing",
          description:
            "Manufacturing clusters aur factory gates ke around GPS perimeter validation.",
        },
      ],
      protocolsLabel: "HARDWARE PROTOCOLS SUPPORTED",
      protocols: "TCP/IP • REST APIs • Biometric SDKs • WebHooks",
      image: "/images/sec-hardware-integrations.jpg",
    },
    platformViewsSection: {
      eyebrow: "// CROSS-PLATFORM INTERFACES",
      heading: "Platform Views",
      subtitle:
        "Seamless cross-platform interfaces for field contract staff, site supervisors, and corporate HR directors.",
      views: [
        {
          pill: "WORKER PORTAL",
          title: "Worker Self-Service App",
          description:
            "Mobile app for digital attendance slips, salary advances, EPF balance checks, and site shifts.",
          image: "/images/sec-platform-guard-mobile.jpg",
          imageType: "mobile",
          techStack: "Flutter / React Native • Multi-Language Support",
          actionText: "Direct Salary Payouts →",
          actionLink: "/#contact-cta",
        },
        {
          pill: "ENTERPRISE HR SUITE",
          title: "Staffing Operations Dashboard",
          description:
            "Web portal for contractor billing, statutory compliance registers, and multi-site client allocation.",
          image: "/images/sec-platform-command-center.jpg",
          imageType: "desktop",
          techStack: "Next.js • PostgreSQL • Bulk Payroll Export",
          actionText: "PF/ESIC 1-Click Filing →",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      pill: "READY TO STREAMLINE CONTRACT WORKFORCE?",
      heading: {
        line1: "Upgrade to Automated Manpower",
        line2: "Supply Operations",
      },
      subtitle:
        "Automate contractor KYC, multi-client roster allocations, and statutory PF/ESIC payroll from a single compliance dashboard. Built with 100% source code ownership.",
      primaryButtonText: "Schedule a Free Architecture Audit",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "Chat on WhatsApp",
      secondaryButtonLink: "/#contact-cta",
    },
  },

  "cctv-monitoring-management": {
    slug: "cctv-monitoring-management",
    badgeText: "Video Surveillance & Telemetry  |  v4.2 PRO",
    breadcrumbLabel: "CCTV MONITORING & MANAGEMENT",
    heroTitle: {
      line1: "CCTV Monitoring",
      line2Blue: "& Management",
    },
    subtitle:
      "Enterprise multi-location CCTV telemetry, automated health monitoring, AI intrusion detection, aur comprehensive AMC management ke liye centralized video control command centers engineer karte hain.",
    demoLink: "/#contact-cta",
    docsLink: "/#contact-cta",
    metrics: [
      { value: "99.99%", label: "Camera Uptime", color: "blue" },
      { value: "<150ms", label: "Intrusion Alert", color: "green" },
      { value: "100%", label: "Automated AMC Audits", color: "white" },
    ],
    coreModulesSection: {
      eyebrow: "// CAPABILITIES",
      heading: "Core Modules We Build",
      description:
        "High-throughput video streaming pipelines and automated camera diagnostics designed for 24/7 security control centers.",
      modules: [
        {
          moduleNumber: "MODULE #01",
          title: "Cloud VMS & Multi-View Grid",
          description:
            "Hundreds of IP cameras aur NVRs ko single dashboard par low-latency WebRTC streams ke sath live monitor karein.",
          image: "/images/sec-module-1.jpg",
          iconType: "camera",
          specLeft: "• Low-Latency WebRTC",
          specRight: "• RTSP/ONVIF Ingest",
        },
        {
          moduleNumber: "MODULE #02",
          title: "AI Edge Intrusion Detection",
          description:
            "Perimeter tripwire, unauthorized motion, aur night-time loitering par automated visual bounding boxes aur alerts.",
          image: "/images/sec-module-3.jpg",
          iconType: "sos",
          specLeft: "• Real-Time Edge AI",
          specRight: "• Snapshot Evidence",
        },
        {
          moduleNumber: "MODULE #03",
          title: "Hardware Health & AMC Engine",
          description:
            "Camera offline status, hard drive failure, aur field technician SLA tracking ke liye predictive maintenance module.",
          image: "/images/sec-module-2.jpg",
          iconType: "checklist",
          specLeft: "• Auto-Ticket Generation",
          specRight: "• Warranty & AMC Track",
        },
      ],
    },
    hardwareIntegrationsSection: {
      eyebrow: "// HARDWARE & IOT SYNCHRONIZATION",
      heading: "Camera & Video Hardware Telemetry",
      subtitle:
        "Hikvision, Dahua, Axis aur custom edge devices ko single unified cloud control center se bind karte hain.",
      items: [
        {
          iconType: "camera",
          title: "ONVIF & RTSP Pipeline",
          description:
            "Universal camera discovery and low-latency H.264/H.265 video stream ingest.",
        },
        {
          iconType: "sensor",
          title: "Edge AI Accelerators",
          description:
            "NVIDIA Jetson & Intel OpenVINO compute on-premise for tripwire alarms.",
        },
        {
          iconType: "maps",
          title: "DVR / NVR Health Telemetry",
          description:
            "Hard disk SMART status, power supply health, and network ping monitoring.",
        },
      ],
      protocolsLabel: "HARDWARE PROTOCOLS SUPPORTED",
      protocols: "RTSP • ONVIF • WebRTC • H.265 • MQTT Ping",
      image: "/images/sec-hardware-integrations.jpg",
    },
    platformViewsSection: {
      eyebrow: "// CROSS-PLATFORM INTERFACES",
      heading: "Platform Views",
      subtitle:
        "Low-latency video telemetry across mobile surveillance guards and central multi-monitor command walls.",
      views: [
        {
          pill: "MOBILE PATROL FEED",
          title: "Field Guard Alert App",
          description:
            "Instant camera tripwire notification with 5-second video replay clip pushed to nearest patrolling guard.",
          image: "/images/sec-platform-guard-mobile.jpg",
          imageType: "mobile",
          techStack: "H.265 WebRTC • Ultra-Low Latency Feed",
          actionText: "Acknowledge & Dispatch →",
          actionLink: "/#contact-cta",
        },
        {
          pill: "HQ CONTROL WALL",
          title: "Central Video Matrix CMS",
          description:
            "Multi-screen browser console with customizable 16x16 video matrix, PTZ controls, and AI alarm history.",
          image: "/images/sec-platform-command-center.jpg",
          imageType: "desktop",
          techStack: "WebSockets • GPU Hardware Decoders • Canvas",
          actionText: "Live Incident Export →",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      pill: "READY FOR 24/7 AI SURVEILLANCE TELEMETRY?",
      heading: {
        line1: "Deploy Centralized CCTV Command",
        line2: "& AMC Monitoring",
      },
      subtitle:
        "Unify hundreds of multi-site camera streams with edge intrusion AI, automated camera health pings, and proactive AMC ticketing. 100% source code ownership.",
      primaryButtonText: "Schedule a Free Architecture Audit",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "Chat on WhatsApp",
      secondaryButtonLink: "/#contact-cta",
    },
  },

  "visitor-management": {
    slug: "visitor-management",
    badgeText: "Access Control & Gate Pass  |  v4.2 PRO",
    breadcrumbLabel: "VISITOR MANAGEMENT",
    heroTitle: {
      line1: "Visitor Access",
      line2Blue: "& Management",
    },
    subtitle:
      "Corporate tech parks, industrial plants, aur gated societies ke liye contactless QR code entry, pre-scheduled visitor passes, instant host approval, aur automated security verification provide karte hain.",
    demoLink: "/#contact-cta",
    docsLink: "/#contact-cta",
    metrics: [
      { value: "15s", label: "Average Gate Entry", color: "blue" },
      { value: "100%", label: "Digital Verification", color: "green" },
      { value: "Zero", label: "Unauthorized Access", color: "white" },
    ],
    coreModulesSection: {
      eyebrow: "// CAPABILITIES",
      heading: "Core Modules We Build",
      description:
        "High-speed digital gate passes and host authentication built for corporate headquarters and secure campuses.",
      modules: [
        {
          moduleNumber: "MODULE #01",
          title: "Touchless QR Check-In",
          description:
            "Pre-invited guests ko WhatsApp QR gate pass bhejkar 10-second express security checkpoint clearance provide karta hai.",
          image: "/images/sec-module-1.jpg",
          iconType: "visitor",
          specLeft: "• WhatsApp QR Passes",
          specRight: "• Kiosk Self Check-In",
        },
        {
          moduleNumber: "MODULE #02",
          title: "Host Approval & Notifications",
          description:
            "Visitor arrival par employee ko instant push notification aur 1-tap entry approve/reject capability milti hai.",
          image: "/images/sec-module-3.jpg",
          iconType: "sos",
          specLeft: "• Instant Push Alerts",
          specRight: "• Slack/Teams Webhooks",
        },
        {
          moduleNumber: "MODULE #03",
          title: "Blacklist & Overstay Watchdog",
          description:
            "Restricted individuals alert aur campus mein allowed time limit cross karne wale guests par automated supervisor notifications.",
          image: "/images/sec-module-2.jpg",
          iconType: "compliance",
          specLeft: "• Facial Blacklist Scan",
          specRight: "• Real-Time Headcount",
        },
      ],
    },
    hardwareIntegrationsSection: {
      eyebrow: "// HARDWARE & IOT SYNCHRONIZATION",
      heading: "Gate Barrier & Kiosk Integrations",
      subtitle:
        "Boom barriers, QR turnstiles, thermal cameras, aur visitor kiosks ko automated access provide karte hain.",
      items: [
        {
          iconType: "qr",
          title: "Turnstile & Boom Barriers",
          description:
            "Relay controller integration for sub-second gate opening on verified QR scan.",
        },
        {
          iconType: "camera",
          title: "ANPR Number Plate Cameras",
          description:
            "Automatic vehicle registration capture at entrance and exit checkpoints.",
        },
        {
          iconType: "code",
          title: "Thermal & Badge Printers",
          description:
            "High-speed badge printing with security watermark and visitor pass barcode.",
        },
      ],
      protocolsLabel: "HARDWARE PROTOCOLS SUPPORTED",
      protocols: "Wiegand • GPIO Relays • MQTT • ESC/POS • WebSockets",
      image: "/images/sec-hardware-integrations.jpg",
    },
    platformViewsSection: {
      eyebrow: "// CROSS-PLATFORM INTERFACES",
      heading: "Platform Views",
      subtitle:
        "Connected visitor entry interfaces for security gate guards, hosts, and facility administrators.",
      views: [
        {
          pill: "GATE SCANNER INTERFACE",
          title: "Gatekeeper Guard App",
          description:
            "Instant QR code gate pass verification, camera badge capture, and vehicle registration logging.",
          image: "/images/sec-platform-guard-mobile.jpg",
          imageType: "mobile",
          techStack: "Camera Barcode SDK • Offline Token Cache",
          actionText: "Fast 10s Clearance →",
          actionLink: "/#contact-cta",
        },
        {
          pill: "ADMINISTRATIVE SUITE",
          title: "Facility Visitor Portal",
          description:
            "Campus-wide real-time visitor directory, blacklist enforcement, and pre-scheduled meeting passes.",
          image: "/images/sec-platform-command-center.jpg",
          imageType: "desktop",
          techStack: "Next.js • Enterprise RBAC • Audit Trail",
          actionText: "Download Visitor Logs →",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      pill: "READY FOR TOUCHLESS CAMPUS ACCESS?",
      heading: {
        line1: "Deploy Digital Gate Passes &",
        line2: "Visitor Verification",
      },
      subtitle:
        "Replace paper entry slips with WhatsApp QR passes, biometric face scans, and instant host approval webhooks. Built with enterprise security and 100% code ownership.",
      primaryButtonText: "Schedule a Free Architecture Audit",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "Chat on WhatsApp",
      secondaryButtonLink: "/#contact-cta",
    },
  },

  "facility-site-management": {
    slug: "facility-site-management",
    badgeText: "Multi-Facility Orchestration  |  v4.2 PRO",
    breadcrumbLabel: "FACILITY & SITE MANAGEMENT",
    heroTitle: {
      line1: "Facility & Site",
      line2Blue: "Management",
    },
    subtitle:
      "Commercial properties aur large multi-building sites ke across digital checklists, housekeeping audit workflows, asset maintenance telemetry, aur transparent client SLA compliance ko centralized manage karein.",
    demoLink: "/#contact-cta",
    docsLink: "/#contact-cta",
    metrics: [
      { value: "98.5%", label: "SLA Adherence", color: "blue" },
      { value: "35%", label: "Lower OpEx Cost", color: "green" },
      { value: "Zero", label: "Missed Checklists", color: "white" },
    ],
    coreModulesSection: {
      eyebrow: "// CAPABILITIES",
      heading: "Core Modules We Build",
      description:
        "SLA-driven maintenance checklists and multi-property oversight engineered for facility leadership teams.",
      modules: [
        {
          moduleNumber: "MODULE #01",
          title: "Digital Checklist Auditing",
          description:
            "Restroom cleanliness, fire extinguisher checks, aur HVAC maintenance ke photo-verified geo-tagged inspection logs.",
          image: "/images/sec-module-1.jpg",
          iconType: "checklist",
          specLeft: "• Photo Evidence Req",
          specRight: "• Timestamp & GPS Tag",
        },
        {
          moduleNumber: "MODULE #02",
          title: "Asset QR Lifecycle Engine",
          description:
            "Campus assets par dynamic QR scan se breakdown ticket log, repair history, aur preventive maintenance schedule.",
          image: "/images/sec-module-2.jpg",
          iconType: "roster",
          specLeft: "• Dynamic Asset QR",
          specRight: "• Mean-Time-To-Repair",
        },
        {
          moduleNumber: "MODULE #03",
          title: "Client SLA Transparency Portal",
          description:
            "Property owners aur corporate tenants ke liye real-time SLA completion rates aur daily compliance reports.",
          image: "/images/sec-module-3.jpg",
          iconType: "compliance",
          specLeft: "• Automated PDF Digests",
          specRight: "• Tenant Ticket Portal",
        },
      ],
    },
    hardwareIntegrationsSection: {
      eyebrow: "// HARDWARE & IOT SYNCHRONIZATION",
      heading: "Facility Sensors & Building IoT",
      subtitle:
        "BMS telemetry, water tank level sensors, fire panel alerts, aur air quality meters ko single pane of glass mein dekhein.",
      items: [
        {
          iconType: "sensor",
          title: "LoRaWAN Environmental Sensors",
          description:
            "Temperature, humidity, and air quality telemetry for commercial buildings.",
        },
        {
          iconType: "qr",
          title: "Smart Asset QR Tags",
          description:
            "NFC and weatherproof metal QR plates on HVAC units, DG sets, and lifts.",
        },
        {
          iconType: "code",
          title: "BACnet & Modbus Ingest",
          description:
            "Direct industrial protocol gateway to legacy Building Management Systems.",
        },
      ],
      protocolsLabel: "HARDWARE PROTOCOLS SUPPORTED",
      protocols: "BACnet • Modbus • LoRaWAN • MQTT • Zigbee",
      image: "/images/sec-hardware-integrations.jpg",
    },
    platformViewsSection: {
      eyebrow: "// CROSS-PLATFORM INTERFACES",
      heading: "Platform Views",
      subtitle:
        "Synchronized digital inspection tools for roving facility janitors and enterprise property managers.",
      views: [
        {
          pill: "ON-SITE MOBILE TOOL",
          title: "Housekeeping & Inspection App",
          description:
            "Digital checklist verification with mandatory before/after photo evidence and GPS timestamp.",
          image: "/images/sec-platform-guard-mobile.jpg",
          imageType: "mobile",
          techStack: "Offline SQLite Sync • Image Geo-Tagging",
          actionText: "Instant Checklist Sync →",
          actionLink: "/#contact-cta",
        },
        {
          pill: "PROPERTY DIRECTOR PORTAL",
          title: "Multi-Building SLA Dashboard",
          description:
            "Executive view tracking cleaning ratings, preventive maintenance tickets, and SLA penalty alerts.",
          image: "/images/sec-platform-command-center.jpg",
          imageType: "desktop",
          techStack: "Interactive Heatmaps • Automated PDF Digests",
          actionText: "Generate SLA Summary →",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      pill: "READY TO MODERNIZE PROPERTY OPERATIONS?",
      heading: {
        line1: "Orchestrate Multi-Site Facility",
        line2: "Maintenance & SLAs",
      },
      subtitle:
        "Digitize cleaning checklists, preventive HVAC maintenance, and tenant SLA reporting with photo evidence and GPS timestamps. 100% source code ownership.",
      primaryButtonText: "Schedule a Free Architecture Audit",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "Chat on WhatsApp",
      secondaryButtonLink: "/#contact-cta",
    },
  },

  "field-workforce-management": {
    slug: "field-workforce-management",
    badgeText: "Geo-Tracking & Roster Ops  |  v4.2 PRO",
    breadcrumbLabel: "FIELD WORKFORCE MANAGEMENT",
    heroTitle: {
      line1: "Field Workforce",
      line2Blue: "Management",
    },
    subtitle:
      "Mobile service technicians, field inspection crews, aur roving patrol units ke liye geofenced mobile clock-in, live route tracking, dynamic ticket dispatch, aur daily productivity telemetry provide karte hain.",
    demoLink: "/#contact-cta",
    docsLink: "/#contact-cta",
    metrics: [
      { value: "100%", label: "Geofence Enforcement", color: "blue" },
      { value: "45m", label: "Daily Route Time Saved", color: "green" },
      { value: "Real-Time", label: "Telemetry Sync", color: "white" },
    ],
    coreModulesSection: {
      eyebrow: "// CAPABILITIES",
      heading: "Core Modules We Build",
      description:
        "Mobile telemetry and route optimization engineered for distributed field staff and patrolling operations.",
      modules: [
        {
          moduleNumber: "MODULE #01",
          title: "Dynamic Route Dispatch",
          description:
            "Service calls aur patrolling schedules ko nearest available field worker ke paas turn-by-turn navigation ke sath dispatch karein.",
          image: "/images/sec-module-1.jpg",
          iconType: "patrol",
          specLeft: "• Smart Route Mapping",
          specRight: "• Proximity Dispatch",
        },
        {
          moduleNumber: "MODULE #02",
          title: "Geofenced Mobile Clock-In",
          description:
            "Field staff sirf client premise perimeter ke andar hi attendance punch in/out kar sakte hain with selfie liveness.",
          image: "/images/sec-module-2.jpg",
          iconType: "roster",
          specLeft: "• Anti-Spoof GPS Engine",
          specRight: "• Face Liveness Check",
        },
        {
          moduleNumber: "MODULE #03",
          title: "Offline-First Task Sync",
          description:
            "Basements aur remote areas mein without internet connection checklist data save hota hai aur network aate hi auto-sync ho jata hai.",
          image: "/images/sec-module-3.jpg",
          iconType: "sos",
          specLeft: "• Local SQLite Sync",
          specRight: "• Auto-Conflict Resolve",
        },
      ],
    },
    hardwareIntegrationsSection: {
      eyebrow: "// HARDWARE & IOT SYNCHRONIZATION",
      heading: "Field Telemetry & Mobile Sensors",
      subtitle:
        "Ruggedized Android handhelds, GPS trackers, BLE beacons, aur offline SQLite sync ko unify karte hain.",
      items: [
        {
          iconType: "maps",
          title: "High-Precision GPS & AGPS",
          description:
            "Low-battery background location telemetry with accelerometer dead-reckoning.",
        },
        {
          iconType: "nfc",
          title: "BLE Micro-Beacons",
          description:
            "Indoor positioning where GPS signals fail in basements and heavy structures.",
        },
        {
          iconType: "sensor",
          title: "Rugged Barcode Imagers",
          description:
            "Zebra and Honeywell industrial barcode scanning SDK integration.",
        },
      ],
      protocolsLabel: "HARDWARE PROTOCOLS SUPPORTED",
      protocols: "BLE 5.2 • MQTT • SQLite Sync • Background Telemetry",
      image: "/images/sec-hardware-integrations.jpg",
    },
    platformViewsSection: {
      eyebrow: "// CROSS-PLATFORM INTERFACES",
      heading: "Platform Views",
      subtitle:
        "Dynamic field dispatch tools connecting on-ground technicians with central logistics coordinators.",
      views: [
        {
          pill: "TECHNICIAN MOBILE CONSOLE",
          title: "Field Crew Mobile App",
          description:
            "Turn-by-turn job navigation, digital customer signature capture, and geofenced attendance.",
          image: "/images/sec-platform-guard-mobile.jpg",
          imageType: "mobile",
          techStack: "Background GPS • Offline Task Queues",
          actionText: "Live Route Tracking →",
          actionLink: "/#contact-cta",
        },
        {
          pill: "HQ DISPATCH BOARD",
          title: "Live Workforce Command",
          description:
            "Real-time map tracking of all roving teams, auto-assignment algorithms, and SLA milestone alerts.",
          image: "/images/sec-platform-command-center.jpg",
          imageType: "desktop",
          techStack: "Mapbox GL • Dynamic Proximity Routing",
          actionText: "Re-Route Fleets Instantly →",
          actionLink: "/#contact-cta",
        },
      ],
    },
    ctaSection: {
      pill: "READY TO OPTIMIZE FIELD WORKFORCE ROSTERS?",
      heading: {
        line1: "Command Distributed Field Teams",
        line2: "With Real-Time Telemetry",
      },
      subtitle:
        "Equip roving field technicians and patrol guards with geofenced mobile clock-ins, turn-by-turn dispatch, and offline task sync. 100% source code ownership.",
      primaryButtonText: "Schedule a Free Architecture Audit",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "Chat on WhatsApp",
      secondaryButtonLink: "/#contact-cta",
    },
  },
};

export function resolveSecuritySolutionSlug(slug: string): string {
  const clean = slug?.toLowerCase().trim() || "";
  if (securityManpowerSolutionsData[clean]) {
    return clean;
  }
  // Fallbacks if trailing dashes or slight variations
  const match = Object.keys(securityManpowerSolutionsData).find(
    (key) => key.includes(clean) || clean.includes(key)
  );
  return match || "security-guard-management";
}
