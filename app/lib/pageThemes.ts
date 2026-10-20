export interface PageThemeConfig {
  name: string;
  // Header container & Navbar bar
  headerBg: string;
  navBorder: string;
  navBg: string;
  navActiveBorder: string;
  navActiveBg: string;
  navShadow: string;
  navActiveShadow: string;

  // Accents
  accentChevron: string;
  accentText: string;

  // Dropdowns / Mega Menu
  dropdownBg: string;
  dropdownBorder: string;
  dropdownDivider: string;
  dropdownRightPanelBg: string;
  dropdownCardBg: string;
  dropdownCardBorder: string;
  dropdownCardHoverBorder: string;
  dropdownHoverBg: string;
  dropdownAccentText: string;
  dropdownActiveIconBg: string;
  dropdownActiveIconBorder: string;

  // Mobile Menu
  mobileMenuBg: string;
  mobileMenuBorder: string;

  // Footer
  footerBg: string;
  footerBorder: string;
  footerLegalBorder: string;
  footerWatermark: string;
  footerAccent: string;
}

export const themes: Record<string, PageThemeConfig> = {
  default: {
    name: "default",
    headerBg: "bg-[#070b16]/80",
    navBorder: "border-[#2b3552]",
    navBg: "bg-[#0c1326]/75",
    navActiveBorder: "border-[#2b3a5c]",
    navActiveBg: "bg-[#070e24]",
    navShadow: "shadow-xl",
    navActiveShadow: "shadow-2xl shadow-blue-950/40",

    accentChevron: "text-blue-400",
    accentText: "text-blue-400",

    dropdownBg: "bg-[#050c20]/98",
    dropdownBorder: "border-[#1b2744]",
    dropdownDivider: "border-[#14203a]",
    dropdownRightPanelBg: "bg-[#030714]",
    dropdownCardBg: "bg-[#0c1630]",
    dropdownCardBorder: "border-[#1c2b50]",
    dropdownCardHoverBorder: "group-hover:border-blue-500/40",
    dropdownHoverBg: "hover:bg-[#0c1630]",
    dropdownAccentText: "text-blue-400",
    dropdownActiveIconBg: "bg-blue-600/20",
    dropdownActiveIconBorder: "border-blue-500/50",

    mobileMenuBg: "bg-[#070e24]/95",
    mobileMenuBorder: "border-[#2b3a5c]",

    footerBg: "bg-[#050810]",
    footerBorder: "border-[#131b2e]",
    footerLegalBorder: "border-[#131b2e]",
    footerWatermark: "text-[#101728]",
    footerAccent: "text-[#7c9bf5]",
  },

  agriculture: {
    name: "agriculture",
    headerBg: "bg-[#07130c]/85",
    navBorder: "border-[#1b2f23]",
    navBg: "bg-[#0d1c14]/80",
    navActiveBorder: "border-[#2a4736]",
    navActiveBg: "bg-[#08160e]",
    navShadow: "shadow-xl shadow-black/40",
    navActiveShadow: "shadow-2xl shadow-emerald-950/50",

    accentChevron: "text-[#6de784]",
    accentText: "text-[#6de784]",

    dropdownBg: "bg-[#08160e]/98",
    dropdownBorder: "border-[#1b2f23]",
    dropdownDivider: "border-[#14251a]",
    dropdownRightPanelBg: "bg-[#050e09]",
    dropdownCardBg: "bg-[#0c1c13]",
    dropdownCardBorder: "border-[#1c3324]",
    dropdownCardHoverBorder: "group-hover:border-emerald-500/40",
    dropdownHoverBg: "hover:bg-[#0c1c13]",
    dropdownAccentText: "text-[#6de784]",
    dropdownActiveIconBg: "bg-emerald-600/20",
    dropdownActiveIconBorder: "border-emerald-500/50",

    mobileMenuBg: "bg-[#08160e]/95",
    mobileMenuBorder: "border-[#1b2f23]",

    footerBg: "bg-[#06100a]",
    footerBorder: "border-[#15271c]",
    footerLegalBorder: "border-[#15271c]",
    footerWatermark: "text-[#0d2114]",
    footerAccent: "text-[#6de784]",
  },

  liveStreaming: {
    name: "liveStreaming",
    headerBg: "bg-[#0b030e]/85",
    navBorder: "border-[#2e0e33]",
    navBg: "bg-[#14061a]/80",
    navActiveBorder: "border-[#4a1452]",
    navActiveBg: "bg-[#0f0414]",
    navShadow: "shadow-xl shadow-black/40",
    navActiveShadow: "shadow-2xl shadow-pink-950/50",

    accentChevron: "text-[#ff2a85]",
    accentText: "text-[#ff2a85]",

    dropdownBg: "bg-[#0e0413]/98",
    dropdownBorder: "border-[#2e0e33]",
    dropdownDivider: "border-[#220726]",
    dropdownRightPanelBg: "bg-[#08020b]",
    dropdownCardBg: "bg-[#16061c]",
    dropdownCardBorder: "border-[#340f3b]",
    dropdownCardHoverBorder: "group-hover:border-pink-500/40",
    dropdownHoverBg: "hover:bg-[#16061c]",
    dropdownAccentText: "text-[#ff2a85]",
    dropdownActiveIconBg: "bg-pink-600/20",
    dropdownActiveIconBorder: "border-pink-500/50",

    mobileMenuBg: "bg-[#0e0413]/95",
    mobileMenuBorder: "border-[#2e0e33]",

    footerBg: "bg-[#08020a]",
    footerBorder: "border-[#220726]",
    footerLegalBorder: "border-[#220726]",
    footerWatermark: "text-[#18051e]",
    footerAccent: "text-[#ff2a85]",
  },

  securityManpower: {
    name: "securityManpower",
    headerBg: "bg-[#060b13]/85",
    navBorder: "border-[#1c293c]",
    navBg: "bg-[#09121d]/80",
    navActiveBorder: "border-[#253d5a]",
    navActiveBg: "bg-[#07111c]",
    navShadow: "shadow-xl",
    navActiveShadow: "shadow-2xl shadow-cyan-950/40",

    accentChevron: "text-cyan-400",
    accentText: "text-cyan-400",

    dropdownBg: "bg-[#050b13]/98",
    dropdownBorder: "border-[#152336]",
    dropdownDivider: "border-[#101b2a]",
    dropdownRightPanelBg: "bg-[#03070c]",
    dropdownCardBg: "bg-[#091321]",
    dropdownCardBorder: "border-[#18273d]",
    dropdownCardHoverBorder: "group-hover:border-cyan-500/40",
    dropdownHoverBg: "hover:bg-[#091321]",
    dropdownAccentText: "text-cyan-400",
    dropdownActiveIconBg: "bg-cyan-600/20",
    dropdownActiveIconBorder: "border-cyan-500/50",

    mobileMenuBg: "bg-[#07111c]/95",
    mobileMenuBorder: "border-[#253d5a]",

    footerBg: "bg-[#04080f]",
    footerBorder: "border-[#131f30]",
    footerLegalBorder: "border-[#131f30]",
    footerWatermark: "text-[#0b1420]",
    footerAccent: "text-cyan-400",
  },

  tourTravels: {
    name: "tourTravels",
    headerBg: "bg-[#060b13]/85",
    navBorder: "border-[#1a2d46]",
    navBg: "bg-[#081324]/80",
    navActiveBorder: "border-[#1d4ed8]",
    navActiveBg: "bg-[#09182e]",
    navShadow: "shadow-xl",
    navActiveShadow: "shadow-2xl shadow-blue-950/40",

    accentChevron: "text-[#38bdf8]",
    accentText: "text-[#38bdf8]",

    dropdownBg: "bg-[#061020]/98",
    dropdownBorder: "border-[#162a45]",
    dropdownDivider: "border-[#112035]",
    dropdownRightPanelBg: "bg-[#040a14]",
    dropdownCardBg: "bg-[#0a182c]",
    dropdownCardBorder: "border-[#1b3456]",
    dropdownCardHoverBorder: "group-hover:border-cyan-500/40",
    dropdownHoverBg: "hover:bg-[#0a182c]",
    dropdownAccentText: "text-[#38bdf8]",
    dropdownActiveIconBg: "bg-blue-600/20",
    dropdownActiveIconBorder: "border-blue-500/50",

    mobileMenuBg: "bg-[#071324]/95",
    mobileMenuBorder: "border-[#1b3456]",

    footerBg: "bg-[#040810]",
    footerBorder: "border-[#122034]",
    footerLegalBorder: "border-[#122034]",
    footerWatermark: "text-[#0a1524]",
    footerAccent: "text-[#38bdf8]",
  },

  hrmCrm: {
    name: "hrmCrm",
    headerBg: "bg-[#040711]/85",
    navBorder: "border-[#16233b]",
    navBg: "bg-[#070e1c]/80",
    navActiveBorder: "border-[#2563eb]",
    navActiveBg: "bg-[#0a1428]",
    navShadow: "shadow-xl",
    navActiveShadow: "shadow-2xl shadow-blue-950/40",

    accentChevron: "text-[#60a5fa]",
    accentText: "text-[#60a5fa]",

    dropdownBg: "bg-[#050a16]/98",
    dropdownBorder: "border-[#15233c]",
    dropdownDivider: "border-[#0e182b]",
    dropdownRightPanelBg: "bg-[#03060e]",
    dropdownCardBg: "bg-[#091224]",
    dropdownCardBorder: "border-[#172744]",
    dropdownCardHoverBorder: "group-hover:border-blue-500/40",
    dropdownHoverBg: "hover:bg-[#091224]",
    dropdownAccentText: "text-[#60a5fa]",
    dropdownActiveIconBg: "bg-blue-600/20",
    dropdownActiveIconBorder: "border-blue-500/50",

    mobileMenuBg: "bg-[#050a16]/95",
    mobileMenuBorder: "border-[#172744]",

    footerBg: "bg-[#03060c]",
    footerBorder: "border-[#111c2e]",
    footerLegalBorder: "border-[#111c2e]",
    footerWatermark: "text-[#08101e]",
    footerAccent: "text-[#60a5fa]",
  },
};

/**
 * Route-based theme resolver.
 * Easily extendable: simply add your route check here to apply any theme to any page.
 */
export function getPageTheme(pathname: string | null): PageThemeConfig {
  if (!pathname) return themes.default;

  // Match all agriculture pages (/industries/agriculture and any sub-routes)
  if (pathname.startsWith("/industries/agriculture")) {
    return themes.agriculture;
  }

  // Match live streaming & dating pages (/industries/live-streaming and any sub-routes)
  if (pathname.startsWith("/industries/live-streaming")) {
    return themes.liveStreaming;
  }

  // Match security & manpower pages (/industries/security-manpower and any sub-routes)
  if (pathname.startsWith("/industries/security-manpower")) {
    return themes.securityManpower;
  }

  // Match tour & travels pages (/industries/tour-travels and any sub-routes)
  if (pathname.startsWith("/industries/tour-travels")) {
    return themes.tourTravels;
  }

  // Match HRM, CRM & AI Automation pages (/industries/hrm-crm and any sub-routes)
  if (
    pathname.startsWith("/industries/hrm-crm") ||
    pathname.startsWith("/industries/crm-hrm-automation")
  ) {
    return themes.hrmCrm;
  }

  return themes.default;
}
