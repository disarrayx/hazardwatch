/** Single source of truth for the navigation, used by desktop and mobile menus. */
export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/beaches", label: "Beaches" },
  { to: "/safety", label: "Safety" },
  { to: "/about", label: "About Us" },
] as const;