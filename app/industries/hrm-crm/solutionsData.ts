export interface HrmSolutionHeroTitle {
  line1: string;
  line2: string;
  line2Blue: string;
}

export interface HrmProcessStep {
  title: string;
  description: string;
}

export interface HrmAboutModuleSection {
  kicker: string;
  heading: {
    white: string;
    blue: string;
  };
  steps: HrmProcessStep[];
}

export interface HrmSpecificationItem {
  label: string;
  value: string;
  isTimeline?: boolean;
}

export interface HrmSpecificationSection {
  kicker: string;
  heading: {
    white: string;
    blue: string;
  };
  items: HrmSpecificationItem[];
  laptopImage: string;
}

export interface HrmScopeCard {
  title: string;
  description: string;
}

export interface HrmScopeSection {
  kicker: string;
  heading: {
    white: string;
    blue: string;
  };
  subtitle: string;
  cards: HrmScopeCard[];
}

export interface HrmArchitecturePoint {
  title: string;
  description: string;
}

export interface HrmArchitectureSection {
  kicker: string;
  heading: {
    white: string;
    blue: string;
  };
  image: string;
  points: HrmArchitecturePoint[];
}

export interface HrmBenchmarkMetric {
  value: string;
  label: string;
  percent: number; // 0 to 100 for gauge arc
}

export interface HrmBenchmarksSection {
  kicker: string;
  heading: {
    white: string;
    blue: string;
  };
  metrics: HrmBenchmarkMetric[];
}

export interface HrmHighVelocityCard {
  icon: "lead" | "conversion" | "mobile" | "data" | string;
  title: string;
  description: string;
}

export interface HrmHighVelocitySection {
  heading: {
    white: string;
    blue: string;
  };
  cards: HrmHighVelocityCard[];
}

export interface HrmFinalCtaSection {
  heading: {
    white: string;
    blue: string;
  };
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export interface HrmSolutionData {
  slug: string;
  badgeText: string;
  breadcrumbIndustry: string;
  breadcrumbLabel: string;
  heroTitle: HrmSolutionHeroTitle;
  subtitle: string;
  laptopImage: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  aboutModule: HrmAboutModuleSection;
  specifications: HrmSpecificationSection;
  scopeSection: HrmScopeSection;
  architectureSection: HrmArchitectureSection;
  benchmarksSection: HrmBenchmarksSection;
  highVelocitySection: HrmHighVelocitySection;
  finalCtaSection: HrmFinalCtaSection;
}

export const hrmSolutionsData: Record<string, HrmSolutionData> = {
  crm: {
    slug: "crm",
    badgeText: "SOLUTION MODULE • 04 OF 06",
    breadcrumbIndustry: "HRM CRM AI AUTOMATION",
    breadcrumbLabel: "CRM",
    heroTitle: {
      line1: "Intelligent Customer",
      line2: "Management",
      line2Blue: "Platform",
    },
    subtitle:
      "We engineer highly scalable, custom CRM platforms that break down data silos, automate sales pipelines, and provide a unified 360-degree view of your customers to maximize retention and revenue",
    laptopImage: "/images/crm-laptop-hero.png",
    primaryButtonText: "Get Started",
    primaryButtonLink: "/#contact-cta",
    secondaryButtonText: "View Architecture",
    secondaryButtonLink: "#architecture",
    aboutModule: {
      kicker: "01 — ABOUT THIS MODULE",
      heading: {
        white: "How We Build Your",
        blue: "Sales Operations.",
      },
      steps: [
        {
          title: "Process Audit",
          description: "Deep dive into your existing sales funnel and bottlenecks.",
        },
        {
          title: "Database Architecture",
          description: "Structuring scalable, relational data models for customer logs.",
        },
        {
          title: "Custom UI/UX",
          description: "Designing frictionless Kanban boards and entry forms for reps.",
        },
        {
          title: "Deployment & Training",
          description: "Secure cloud launch with dedicated team onboarding.",
        },
      ],
    },
    specifications: {
      kicker: "02 — SPECIFICATION",
      heading: {
        white: "Itemized CRM",
        blue: "specification.",
      },
      laptopImage: "/images/spec-laptop-showcase.png",
      items: [
        { label: "Platform Type", value: "Enterprise CRM & Sales Suite" },
        { label: "Modules", value: "Lead Tracker · Pipeline · Analytics · Email Sync" },
        { label: "Pipeline Engine", value: "Modular drag-and-drop Kanban & stages" },
        { label: "Data Sync", value: "Two-way Gmail, Outlook & WhatsApp sync" },
        { label: "Access & Security", value: "Role-Based Access Control (RBAC) & AES-256" },
        { label: "Delivery Timeline", value: "10–12 Weeks", isTimeline: true },
      ],
    },
    scopeSection: {
      kicker: "03 — SCOPE",
      heading: {
        white: "Tailored For Every",
        blue: "Fleet Scale",
      },
      subtitle: "Scale your travel agency from single-region tours to a nationwide marketplace.",
      cards: [
        {
          title: "B2B Sales Teams",
          description: "Complex, multi-touchpoint deal tracking with hierarchy-based approvals.",
        },
        {
          title: "Support Hubs",
          description: "Unified ticketing systems with SLA tracking and automated escalations.",
        },
        {
          title: "Real Estate & Finance",
          description: "High-volume lead nurturing with strict regulatory data compliance.",
        },
      ],
    },
    architectureSection: {
      kicker: "04 — SYSTEM ARCHITECTURE",
      heading: {
        white: "Engineered for Enterprise",
        blue: "Reliability",
      },
      image: "/images/architecture-workflow.png",
      points: [
        {
          title: "API-First Architecture",
          description: "Seamlessly connects with your legacy systems and external marketing tools without data lag.",
        },
        {
          title: "Role-Based Access Control (RBAC)",
          description: "Granular permission settings ensuring territory managers only see their specific regional data.",
        },
        {
          title: "Real-Time Data Sync",
          description: "Instant updates across mobile and web platforms ensuring field agents and desk teams are always aligned.",
        },
        {
          title: "Bank-Grade Encryption",
          description: "Data at rest and in transit is fully encrypted to meet international privacy standards.",
        },
      ],
    },
    benchmarksSection: {
      kicker: "06 — PROVEN BENCHMARKS",
      heading: {
        white: "Verified Metrics From Live",
        blue: "Deployments",
      },
      metrics: [
        { value: "3x", label: "Lead Conversion", percent: 70 },
        { value: "100%", label: "Data Sync", percent: 100 },
        { value: "<50ms", label: "Query Time", percent: 82 },
        { value: "99.9%", label: "Server Uptime", percent: 95 },
      ],
    },
    highVelocitySection: {
      heading: {
        white: "Built for High-Velocity",
        blue: "Operations",
      },
      cards: [
        {
          icon: "lead",
          title: "Zero Lead Leakage",
          description: "Automated capturing of leads from web forms, social media, and third-party aggregators.",
        },
        {
          icon: "conversion",
          title: "Faster Conversions",
          description: "Smart nudges and automated email sequences keep prospects warm without manual effort.",
        },
        {
          icon: "mobile",
          title: "Mobile Workforce",
          description: "Fully functional mobile apps for field reps to log notes and update statuses on the go.",
        },
        {
          icon: "data",
          title: "Data-Driven Decision",
          description: "Real-time visibility into conversion bottlenecks and pipeline health.",
        },
      ],
    },
    finalCtaSection: {
      heading: {
        white: "Ready to launch your",
        blue: "travel marketplace?",
      },
      primaryButtonText: "Book a Free Consultation",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "Back to Tour & Travel",
      secondaryButtonLink: "/industries/tour-travels",
    },
  },
  hrm: {
    slug: "hrm",
    badgeText: "SOLUTION MODULE • 02 OF 06",
    breadcrumbIndustry: "HRM CRM AI AUTOMATION",
    breadcrumbLabel: "HRM",
    heroTitle: {
      line1: "Unified Workforce &",
      line2: "Human Capital",
      line2Blue: "Platform",
    },
    subtitle:
      "Streamline talent acquisition, automated onboarding, performance tracking, and self-service HR operations on a single unified platform.",
    laptopImage: "/images/crm-laptop-hero.png",
    primaryButtonText: "Get Started",
    primaryButtonLink: "/#contact-cta",
    secondaryButtonText: "View Architecture",
    secondaryButtonLink: "#architecture",
    aboutModule: {
      kicker: "01 — ABOUT THIS MODULE",
      heading: {
        white: "How We Build Your",
        blue: "Workforce Operations.",
      },
      steps: [
        {
          title: "Process Audit",
          description: "Analyzing shift policies, statutory requirements, and leave workflows.",
        },
        {
          title: "Database Architecture",
          description: "Structuring scalable, relational data models for employee and biometric logs.",
        },
        {
          title: "Custom UI/UX",
          description: "Designing frictionless self-service employee portals and manager approvals.",
        },
        {
          title: "Deployment & Training",
          description: "Secure cloud launch with payroll compliance and dedicated team onboarding.",
        },
      ],
    },
    specifications: {
      kicker: "02 — SPECIFICATION",
      heading: {
        white: "Itemized HRM",
        blue: "specification.",
      },
      laptopImage: "/images/spec-laptop-showcase.png",
      items: [
        { label: "Platform Type", value: "Unified Human Capital Management (HCM)" },
        { label: "Modules", value: "Recruitment · Attendance · Payroll · Appraisals" },
        { label: "Attendance Engine", value: "Geo-fencing & Biometric hardware sync" },
        { label: "Payroll Processing", value: "Automated tax deductions & direct disbursals" },
        { label: "Self-Service Portal", value: "Mobile employee app for leaves & claims" },
        { label: "Delivery Timeline", value: "10–12 Weeks", isTimeline: true },
      ],
    },
    scopeSection: {
      kicker: "03 — SCOPE",
      heading: {
        white: "Tailored For Every",
        blue: "Workforce Scale",
      },
      subtitle: "Scale your organization from growing startups to multi-branch enterprises.",
      cards: [
        {
          title: "Corporate Enterprises",
          description: "Multi-tiered management hierarchies with automated appraisals and leaves.",
        },
        {
          title: "Field & Shift Staff",
          description: "Mobile GPS geo-fenced attendance clock-ins with biometric verification.",
        },
        {
          title: "Payroll & Finance",
          description: "Automated tax deductions, statutory PF/ESI compliance, and instant payslips.",
        },
      ],
    },
    architectureSection: {
      kicker: "04 — SYSTEM ARCHITECTURE",
      heading: {
        white: "Engineered for Enterprise",
        blue: "Reliability",
      },
      image: "/images/architecture-workflow.png",
      points: [
        {
          title: "API-First Architecture",
          description: "Seamlessly connects with biometric turnstiles, ERPs, and banking disbursal gateways.",
        },
        {
          title: "Role-Based Access Control (RBAC)",
          description: "Granular permission settings ensuring employees and managers only see their designated scopes.",
        },
        {
          title: "Real-Time Data Sync",
          description: "Instant clock-in sync between mobile apps, turnstiles, and central HR servers.",
        },
        {
          title: "Bank-Grade Encryption",
          description: "Salary records and personal identity documents protected with AES-256 encryption.",
        },
      ],
    },
    benchmarksSection: {
      kicker: "06 — PROVEN BENCHMARKS",
      heading: {
        white: "Verified Metrics From Live",
        blue: "Deployments",
      },
      metrics: [
        { value: "4x", label: "Faster Onboarding", percent: 88 },
        { value: "100%", label: "Payroll Accuracy", percent: 100 },
        { value: "<30s", label: "Claim Approvals", percent: 94 },
        { value: "99.9%", label: "System Uptime", percent: 99.9 },
      ],
    },
    highVelocitySection: {
      heading: {
        white: "Built for High-Velocity",
        blue: "Operations",
      },
      cards: [
        {
          icon: "lead",
          title: "Zero Attendance Leakage",
          description: "Geo-fenced mobile punches and biometric sync prevent time theft and proxy marking.",
        },
        {
          icon: "conversion",
          title: "Faster Onboarding",
          description: "Digital document collection and self-service verification streamline hire-to-desk time.",
        },
        {
          icon: "mobile",
          title: "Mobile Workforce",
          description: "Self-service mobile apps for employees to apply for leaves, access payslips, and log shifts.",
        },
        {
          icon: "data",
          title: "Data-Driven Decisions",
          description: "Real-time visibility into employee turnover, overtime costs, and departmental productivity.",
        },
      ],
    },
    finalCtaSection: {
      heading: {
        white: "Ready to launch your",
        blue: "workforce platform?",
      },
      primaryButtonText: "Book a Free Consultation",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "Back to HRM CRM",
      secondaryButtonLink: "/industries/hrm-crm",
    },
  },
  "business-automation": {
    slug: "business-automation",
    badgeText: "SOLUTION MODULE • 05 OF 06",
    breadcrumbIndustry: "HRM CRM AI AUTOMATION",
    breadcrumbLabel: "BUSINESS AUTOMATION",
    heroTitle: {
      line1: "Autonomous Process &",
      line2: "Workflow AI",
      line2Blue: "Platform",
    },
    subtitle:
      "Eliminate repetitive manual busywork with event-driven bot triggers, document parsers, WhatsApp integrations, and self-optimizing pipelines.",
    laptopImage: "/images/crm-laptop-hero.png",
    primaryButtonText: "Get Started",
    primaryButtonLink: "/#contact-cta",
    secondaryButtonText: "View Architecture",
    secondaryButtonLink: "#architecture",
    aboutModule: {
      kicker: "01 — ABOUT THIS MODULE",
      heading: {
        white: "How We Build Your",
        blue: "Workflow Operations.",
      },
      steps: [
        {
          title: "Process Audit",
          description: "Identifying manual handoffs, error-prone data entry, and slow response loops.",
        },
        {
          title: "Database Architecture",
          description: "Configuring distributed event brokers and multi-step webhook listeners.",
        },
        {
          title: "Custom UI/UX",
          description: "Crafting drag-and-drop triggers, conditions, and custom fallback branches.",
        },
        {
          title: "Deployment & Training",
          description: "Deploying automated retry mechanisms with real-time alerting dashboards.",
        },
      ],
    },
    specifications: {
      kicker: "02 — SPECIFICATION",
      heading: {
        white: "Itemized workflow",
        blue: "specification.",
      },
      laptopImage: "/images/spec-laptop-showcase.png",
      items: [
        { label: "Platform Type", value: "Autonomous Enterprise Workflow Engine" },
        { label: "Modules", value: "Bot Triggers · Document OCR · Webhook Hub" },
        { label: "Process Execution", value: "Sub-second asynchronous task queues" },
        { label: "Integrations", value: "WhatsApp Business API, ERPs, Banking gateways" },
        { label: "Audit & Compliance", value: "Immutable event logs & automated alerts" },
        { label: "Delivery Timeline", value: "8–10 Weeks", isTimeline: true },
      ],
    },
    scopeSection: {
      kicker: "03 — SCOPE",
      heading: {
        white: "Tailored For Every",
        blue: "Operation Scale",
      },
      subtitle: "Eliminate bottlenecks from internal operations to high-throughput customer portals.",
      cards: [
        {
          title: "Customer Support Bots",
          description: "24/7 conversational AI resolving queries and booking tickets without humans.",
        },
        {
          title: "Document Ingestion",
          description: "Automated invoice parsing and KYC verification with 99.8% precision.",
        },
        {
          title: "Finance & Accounting",
          description: "Reconciliation robots matching ledger entries across multiple bank gateways.",
        },
      ],
    },
    architectureSection: {
      kicker: "04 — SYSTEM ARCHITECTURE",
      heading: {
        white: "Engineered for Enterprise",
        blue: "Reliability",
      },
      image: "/images/architecture-workflow.png",
      points: [
        {
          title: "API-First Architecture",
          description: "Connects legacy mainframes, modern microservices, and third-party SaaS APIs seamlessly.",
        },
        {
          title: "Role-Based Access Control (RBAC)",
          description: "Granular access tokens ensuring bots execute strictly within permitted boundary boundaries.",
        },
        {
          title: "Real-Time Data Sync",
          description: "Sub-second message broker queues preventing data loss during traffic spikes.",
        },
        {
          title: "Bank-Grade Encryption",
          description: "Payload data encrypted with TLS 1.3 in transit and cryptographic hashing at rest.",
        },
      ],
    },
    benchmarksSection: {
      kicker: "06 — PROVEN BENCHMARKS",
      heading: {
        white: "Verified Metrics From Live",
        blue: "Deployments",
      },
      metrics: [
        { value: "10x", label: "Throughput Multiplier", percent: 95 },
        { value: "100%", label: "Audit Trail", percent: 100 },
        { value: "<20ms", label: "Queue Latency", percent: 98 },
        { value: "99.99%", label: "Uptime SLA", percent: 99.99 },
      ],
    },
    highVelocitySection: {
      heading: {
        white: "Built for High-Velocity",
        blue: "Operations",
      },
      cards: [
        {
          icon: "lead",
          title: "Zero Task Leakage",
          description: "Automated event triggers eliminate missed workflow steps and manual reminders.",
        },
        {
          icon: "conversion",
          title: "Faster Turnarounds",
          description: "Parallel task workers and webhook handlers cut operational processing cycles by 80%.",
        },
        {
          icon: "mobile",
          title: "Mobile Operations",
          description: "Instant notifications with one-tap action approvals directly on mobile channels.",
        },
        {
          icon: "data",
          title: "Data-Driven Decisions",
          description: "Live SLA metrics, execution trace logs, and pipeline health monitoring dashboards.",
        },
      ],
    },
    finalCtaSection: {
      heading: {
        white: "Ready to launch your",
        blue: "automation engine?",
      },
      primaryButtonText: "Book a Free Consultation",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "Back to HRM CRM",
      secondaryButtonLink: "/industries/hrm-crm",
    },
  },
  "intelligent-crm": {
    slug: "intelligent-crm",
    badgeText: "SOLUTION MODULE • 04 OF 06",
    breadcrumbIndustry: "HRM CRM AI AUTOMATION",
    breadcrumbLabel: "CRM",
    heroTitle: {
      line1: "Intelligent Customer",
      line2: "Management",
      line2Blue: "Platform",
    },
    subtitle:
      "We engineer highly scalable, custom CRM platforms that break down data silos, automate sales pipelines, and provide a unified 360-degree view of your customers to maximize retention and revenue",
    laptopImage: "/images/crm-laptop-hero.png",
    primaryButtonText: "Get Started",
    primaryButtonLink: "/#contact-cta",
    secondaryButtonText: "View Architecture",
    secondaryButtonLink: "#architecture",
    aboutModule: {
      kicker: "01 — ABOUT THIS MODULE",
      heading: {
        white: "How We Build Your",
        blue: "Customer Intelligence.",
      },
      steps: [
        {
          title: "Process Audit",
          description: "Aggregating omnichannel touchpoints into unified customer vector records.",
        },
        {
          title: "Database Architecture",
          description: "Training fine-tuned machine learning models on conversion and churn signals.",
        },
        {
          title: "Custom UI/UX",
          description: "Designing contextual AI assistants that draft replies and recommend actions.",
        },
        {
          title: "Deployment & Training",
          description: "Low-latency inference pipelines with SOC-2 compliant tenant isolation.",
        },
      ],
    },
    specifications: {
      kicker: "02 — SPECIFICATION",
      heading: {
        white: "Itemized intelligence",
        blue: "specification.",
      },
      laptopImage: "/images/spec-laptop-showcase.png",
      items: [
        { label: "Platform Type", value: "AI-Powered Predictive CRM Suite" },
        { label: "Modules", value: "Deal Forecaster · Smart Churn Alert · Auto-Quotes" },
        { label: "Scoring Engine", value: "ML lead scoring with behavioral telemetry" },
        { label: "Omnichannel Sync", value: "Unified inbox for calls, chats & emails" },
        { label: "Security & Governance", value: "SOC2 compliant encryption & multi-tenancy" },
        { label: "Delivery Timeline", value: "10–12 Weeks", isTimeline: true },
      ],
    },
    scopeSection: {
      kicker: "03 — SCOPE",
      heading: {
        white: "Tailored For Every",
        blue: "Fleet Scale",
      },
      subtitle: "Scale your travel agency from single-region tours to a nationwide marketplace.",
      cards: [
        {
          title: "B2B Sales Teams",
          description: "Complex, multi-touchpoint deal tracking with hierarchy-based approvals.",
        },
        {
          title: "Support Hubs",
          description: "Unified ticketing systems with SLA tracking and automated escalations.",
        },
        {
          title: "Real Estate & Finance",
          description: "High-volume lead nurturing with strict regulatory data compliance.",
        },
      ],
    },
    architectureSection: {
      kicker: "04 — SYSTEM ARCHITECTURE",
      heading: {
        white: "Engineered for Enterprise",
        blue: "Reliability",
      },
      image: "/images/architecture-workflow.png",
      points: [
        {
          title: "API-First Architecture",
          description: "Seamlessly connects with your legacy systems and external marketing tools without data lag.",
        },
        {
          title: "Role-Based Access Control (RBAC)",
          description: "Granular permission settings ensuring territory managers only see their specific regional data.",
        },
        {
          title: "Real-Time Data Sync",
          description: "Instant updates across mobile and web platforms ensuring field agents and desk teams are always aligned.",
        },
        {
          title: "Bank-Grade Encryption",
          description: "Data at rest and in transit is fully encrypted to meet international privacy standards.",
        },
      ],
    },
    benchmarksSection: {
      kicker: "06 — PROVEN BENCHMARKS",
      heading: {
        white: "Verified Metrics From Live",
        blue: "Deployments",
      },
      metrics: [
        { value: "3x", label: "Lead Conversion", percent: 70 },
        { value: "100%", label: "Data Sync", percent: 100 },
        { value: "<50ms", label: "Query Time", percent: 82 },
        { value: "99.9%", label: "Server Uptime", percent: 95 },
      ],
    },
    highVelocitySection: {
      heading: {
        white: "Built for High-Velocity",
        blue: "Operations",
      },
      cards: [
        {
          icon: "lead",
          title: "Zero Lead Leakage",
          description: "Automated capturing of leads from web forms, social media, and third-party aggregators.",
        },
        {
          icon: "conversion",
          title: "Faster Conversions",
          description: "Smart nudges and automated email sequences keep prospects warm without manual effort.",
        },
        {
          icon: "mobile",
          title: "Mobile Workforce",
          description: "Fully functional mobile apps for field reps to log notes and update statuses on the go.",
        },
        {
          icon: "data",
          title: "Data-Driven Decision",
          description: "Real-time visibility into conversion bottlenecks and pipeline health.",
        },
      ],
    },
    finalCtaSection: {
      heading: {
        white: "Ready to launch your",
        blue: "travel marketplace?",
      },
      primaryButtonText: "Book a Free Consultation",
      primaryButtonLink: "/#contact-cta",
      secondaryButtonText: "Back to Tour & Travel",
      secondaryButtonLink: "/industries/tour-travels",
    },
  },
};

export function resolveHrmSolutionSlug(slug: string): string {
  if (hrmSolutionsData[slug]) {
    return slug;
  }
  const normalized = slug.toLowerCase().trim();
  if (hrmSolutionsData[normalized]) {
    return normalized;
  }
  if (normalized.includes("hrm") || normalized.includes("human")) {
    return "hrm";
  }
  if (normalized.includes("automation") || normalized.includes("business")) {
    return "business-automation";
  }
  if (normalized.includes("intelligent")) {
    return "intelligent-crm";
  }
  return "crm";
}
