export const galleryItems = [
  {
    slug: "peptides",
    title: "Premium Research Peptides",
    category: "Ecommerce",
    summary: "Product catalog, lab-tested trust bar, and a clean storefront built to sell.",
    image: "/gallery/peptides.png",
  },
  {
    slug: "plumbing",
    title: "Providence Plumbing & Heating",
    category: "Home services",
    summary: "Local hero, phone-first calls to action, and proof stacked above the fold.",
    image: "/gallery/plumbing.jpg",
  },
  {
    slug: "thrift-sharks",
    title: "Thrift Sharks",
    category: "Marketplace",
    summary: "Marketplace homepage with shop rail, live listings, and a bold brand banner.",
    image: "/gallery/thrift-sharks.jpg",
  },
  {
    slug: "excavation",
    title: "Eastern CT & Western RI Construction",
    category: "Construction",
    summary: "Full-bleed jobsite hero for excavation and construction across two states.",
    image: "/gallery/excavation.jpg",
  },
  {
    slug: "willies",
    title: "Willie's Barbershop",
    category: "Local brand",
    summary: "Westerly barbershop site with a strong pattern, booking path, and review proof.",
    image: "/gallery/willies.jpg",
  },
  {
    slug: "immigration",
    title: "Immigration Law",
    category: "Professional",
    summary: "Street-level photography and a clear consultation path for a family practice.",
    image: "/gallery/immigration.jpg",
  },
  {
    slug: "launchpad",
    title: "Launchpad",
    category: "Web3",
    summary: "Dark marketplace for ordinal collections, with price, supply, and mint actions.",
    image: "/gallery/launchpad.jpg",
  },
  {
    slug: "skillmint",
    title: "SkillMint Courses",
    category: "Education",
    summary: "Course platform hero with a clear browse path and featured programs below.",
    image: "/gallery/skillmint.jpg",
  },
  {
    slug: "wd-glow",
    title: "WD Glow",
    category: "Home services",
    summary: "Christmas light installation site for homes and businesses across Rhode Island and Connecticut.",
    image: "/gallery/wd-glow.jpg",
  },
  {
    slug: "from-the-desk",
    title: "From the Desk",
    category: "Content",
    summary: "Article desk for Rhode Island marketing notes, measurement, and local brand briefings.",
    image: "/gallery/from-the-desk.png",
  },
] as const;

export type GalleryItem = (typeof galleryItems)[number];
