export const site = {
  name: "Ocean State Marketing",
  shortName: "OSM",
  tagline: "Rhode Island SEO, Web Design & Marketing Agency",
  description:
    "Ocean State Marketing is a Providence, Rhode Island digital marketing agency providing SEO, custom website design, Google Ads management, and custom platforms to local and regional businesses across Rhode Island, Connecticut, Massachusetts, and New England.",
  url: "https://oceanstatemarketing.com",
  email: "hello@oceanstatemarketing.com",
  phone: "(401) 533-4916",
  phoneHref: "tel:+14015334916",
  address: {
    street: "Serving Southern New England",
    city: "Providence",
    state: "RI",
    region: "Rhode Island, Connecticut & Massachusetts",
  },
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const serviceNav = [
  {
    href: "/seo",
    label: "SEO Services",
    description: "Dominate Google rankings",
  },
  {
    href: "/website-design",
    label: "Website Design",
    description: "High-converting websites",
  },
  {
    href: "/platforms",
    label: "Custom Platforms",
    description: "Portals, booking & tools",
  },
  {
    href: "/google-ads",
    label: "Ad Campaign Management",
    description: "ROI-driven paid ads",
  },
  {
    href: "/local-seo",
    label: "Local SEO",
    description: "Win the map pack",
  },
  {
    href: "/branding",
    label: "Branding",
    description: "A mark people remember",
  },
  {
    href: "/growth",
    label: "Growth Program",
    description: "SEO, site, and ads on one plan",
  },
] as const;

export const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
] as const;
