export type Location = {
  slug: string;
  name: string;
  state: "RI" | "CT" | "MA";
  stateName: string;
  region: string;
  headline: string;
  intro: string;
  industries: string[];
  nearby: string[];
};

export const locations: Location[] = [
  // Rhode Island
  {
    slug: "providence",
    name: "Providence",
    state: "RI",
    stateName: "Rhode Island",
    region: "Greater Providence",
    headline: "Providence SEO & digital marketing that fills your pipeline",
    intro:
      "From Federal Hill restaurants to downtown professional services, Providence businesses compete in a dense local market. We build SEO, websites, and ads that win the searches your customers already make.",
    industries: ["Restaurants & hospitality", "Healthcare", "Legal", "Home services", "Retail"],
    nearby: ["cranston", "east-providence", "pawtucket", "warwick"],
  },
  {
    slug: "warwick",
    name: "Warwick",
    state: "RI",
    stateName: "Rhode Island",
    region: "Kent County",
    headline: "Warwick web design & SEO for local growth",
    intro:
      "Warwick sits at the crossroads of Rhode Island commerce. We help Airport Connector businesses, retail corridors, and service companies dominate local search and convert more site visitors.",
    industries: ["Home services", "Auto & marine", "Retail", "Medical practices", "Restaurants"],
    nearby: ["cranston", "west-warwick", "east-greenwich", "providence"],
  },
  {
    slug: "cranston",
    name: "Cranston",
    state: "RI",
    stateName: "Rhode Island",
    region: "Providence County",
    headline: "Cranston digital marketing built for local demand",
    intro:
      "Cranston businesses need visibility across Garden City, Reservoir Avenue, and the greater Providence metro. Our local SEO and conversion-focused sites put you in front of ready-to-buy neighbors.",
    industries: ["Dental & medical", "Contractors", "Retail", "Food & beverage", "Professional services"],
    nearby: ["providence", "warwick", "johnston", "east-providence"],
  },
  {
    slug: "newport",
    name: "Newport",
    state: "RI",
    stateName: "Rhode Island",
    region: "Aquidneck Island",
    headline: "Newport SEO for tourism, luxury & local services",
    intro:
      "Newport’s seasonal swings reward businesses that own high-intent searches year-round. We blend local SEO, content, and ads so you capture visitors and residents when they’re ready to book.",
    industries: ["Hospitality", "Weddings & events", "Marine", "Retail", "Real estate"],
    nearby: ["middletown", "portsmouth", "bristol", "narragansett"],
  },
  {
    slug: "westerly",
    name: "Westerly",
    state: "RI",
    stateName: "Rhode Island",
    region: "South County",
    headline: "Westerly & South County marketing that travels with demand",
    intro:
      "From Watch Hill to downtown Westerly, South County businesses serve locals and weekenders. We optimize Google Business Profiles, maps, and service pages for both audiences.",
    industries: ["Hospitality", "Home services", "Retail", "Healthcare", "Restaurants"],
    nearby: ["narragansett", "south-kingstown", "charlestown", "stoughton"],
  },
  {
    slug: "pawtucket",
    name: "Pawtucket",
    state: "RI",
    stateName: "Rhode Island",
    region: "Blackstone Valley",
    headline: "Pawtucket website development & SEO",
    intro:
      "Pawtucket’s creative and industrial economy needs modern sites that load fast and rank. We rebuild outdated websites and layer SEO that captures Blackstone Valley search demand.",
    industries: ["Manufacturing", "Creative studios", "Healthcare", "Home services", "Nonprofits"],
    nearby: ["providence", "central-falls", "east-providence", "cumberland"],
  },
  {
    slug: "east-providence",
    name: "East Providence",
    state: "RI",
    stateName: "Rhode Island",
    region: "East Bay",
    headline: "East Providence local SEO & lead generation",
    intro:
      "East Providence businesses compete with Providence and East Bay markets. We map the keywords that drive calls and build pages that convert searchers into customers.",
    industries: ["Home services", "Healthcare", "Restaurants", "Auto", "Professional services"],
    nearby: ["providence", "barrington", "seekonk", "pawtucket"],
  },
  {
    slug: "east-greenwich",
    name: "East Greenwich",
    state: "RI",
    stateName: "Rhode Island",
    region: "Kent County",
    headline: "East Greenwich SEO for premium local brands",
    intro:
      "East Greenwich customers expect polish. We pair refined websites with disciplined SEO so Main Street and Quaker Lane businesses win high-value local searches.",
    industries: ["Boutique retail", "Dining", "Professional services", "Wellness", "Real estate"],
    nearby: ["warwick", "north-kingstown", "west-warwick", "coventry"],
  },
  {
    slug: "north-kingstown",
    name: "North Kingstown",
    state: "RI",
    stateName: "Rhode Island",
    region: "South County",
    headline: "North Kingstown digital agency for South County growth",
    intro:
      "Quonset, Wickford, and North Kingstown service businesses need clear positioning online. We deliver SEO, web design, and ads tailored to South County search behavior.",
    industries: ["Marine & industrial", "Home services", "Healthcare", "Retail", "Hospitality"],
    nearby: ["east-greenwich", "south-kingstown", "narragansett", "warwick"],
  },
  {
    slug: "narragansett",
    name: "Narragansett",
    state: "RI",
    stateName: "Rhode Island",
    region: "South County",
    headline: "Narragansett marketing for coastal businesses",
    intro:
      "Pier traffic and year-round locals create two search seasons. We build strategies that capture summer surge without abandoning winter demand.",
    industries: ["Hospitality", "Restaurants", "Retail", "Real estate", "Outdoor recreation"],
    nearby: ["south-kingstown", "westerly", "north-kingstown", "newport"],
  },
  {
    slug: "south-kingstown",
    name: "South Kingstown",
    state: "RI",
    stateName: "Rhode Island",
    region: "South County",
    headline: "South Kingstown SEO & website services",
    intro:
      "Kingston, Wakefield, and Peace Dale businesses benefit from strong local listings and clear service pages. We make South County search work harder for you.",
    industries: ["Education-adjacent services", "Home services", "Healthcare", "Retail", "Dining"],
    nearby: ["narragansett", "north-kingstown", "westerly", "charlestown"],
  },
  {
    slug: "woonsocket",
    name: "Woonsocket",
    state: "RI",
    stateName: "Rhode Island",
    region: "Northern RI",
    headline: "Woonsocket digital marketing for Northern RI",
    intro:
      "Northern Rhode Island search is competitive and underserved. We help Woonsocket businesses claim map pack and organic rankings before competitors catch up.",
    industries: ["Healthcare", "Home services", "Retail", "Manufacturing", "Professional services"],
    nearby: ["cumberland", "lincoln", "burrillville", "blackstone"],
  },
  {
    slug: "bristol",
    name: "Bristol",
    state: "RI",
    stateName: "Rhode Island",
    region: "East Bay",
    headline: "Bristol RI SEO for East Bay businesses",
    intro:
      "Bristol’s historic downtown and waterfront economy need modern digital presence. We connect your brand to the searches that drive foot traffic and booked jobs.",
    industries: ["Hospitality", "Marine", "Retail", "Home services", "Events"],
    nearby: ["warren", "barrington", "portsmouth", "east-providence"],
  },
  {
    slug: "barrington",
    name: "Barrington",
    state: "RI",
    stateName: "Rhode Island",
    region: "East Bay",
    headline: "Barrington marketing for high-intent local customers",
    intro:
      "Barrington households research carefully before they buy. We build trust-first websites and SEO content that earns the click—and the call.",
    industries: ["Professional services", "Home services", "Healthcare", "Education", "Retail"],
    nearby: ["bristol", "east-providence", "warren", "seekonk"],
  },
  {
    slug: "johnston",
    name: "Johnston",
    state: "RI",
    stateName: "Rhode Island",
    region: "Providence County",
    headline: "Johnston RI SEO & lead-focused websites",
    intro:
      "Johnston service businesses win when they show up first for emergency and project-based searches. We optimize for maps, mobile, and conversion.",
    industries: ["Contractors", "Auto", "Healthcare", "Restaurants", "Retail"],
    nearby: ["cranston", "providence", "smithfield", "north-providence"],
  },
  {
    slug: "cumberland",
    name: "Cumberland",
    state: "RI",
    stateName: "Rhode Island",
    region: "Northern RI",
    headline: "Cumberland SEO for Northern Rhode Island",
    intro:
      "Cumberland and Valley Falls businesses serve a growing residential base. We build local authority so you rank when neighbors need what you offer.",
    industries: ["Home services", "Healthcare", "Retail", "Professional services", "Dining"],
    nearby: ["lincoln", "woonsocket", "pawtucket", "attleboro"],
  },
  {
    slug: "lincoln",
    name: "Lincoln",
    state: "RI",
    stateName: "Rhode Island",
    region: "Northern RI",
    headline: "Lincoln RI digital marketing & local SEO",
    intro:
      "Lincoln’s mix of retail corridors and residential neighborhoods creates steady search demand. We turn that demand into measurable leads.",
    industries: ["Retail", "Home services", "Healthcare", "Dining", "Professional services"],
    nearby: ["cumberland", "smithfield", "central-falls", "woonsocket"],
  },
  {
    slug: "smithfield",
    name: "Smithfield",
    state: "RI",
    stateName: "Rhode Island",
    region: "Northern RI",
    headline: "Smithfield marketing that reaches the right zip codes",
    intro:
      "From Greenville to Bryant University corridors, Smithfield businesses need geo-precise SEO. We target the towns and keywords that actually convert.",
    industries: ["Education-adjacent", "Retail", "Home services", "Healthcare", "Dining"],
    nearby: ["lincoln", "johnston", "north-smithfield", "glocester"],
  },
  {
    slug: "middletown",
    name: "Middletown",
    state: "RI",
    stateName: "Rhode Island",
    region: "Aquidneck Island",
    headline: "Middletown RI SEO & website design",
    intro:
      "Middletown captures Aquidneck Island traffic that Newport alone doesn’t. We help you compete for island-wide and visitor searches.",
    industries: ["Hospitality", "Retail", "Home services", "Healthcare", "Dining"],
    nearby: ["newport", "portsmouth", "bristol", "jamestown"],
  },
  {
    slug: "portsmouth",
    name: "Portsmouth",
    state: "RI",
    stateName: "Rhode Island",
    region: "Aquidneck Island",
    headline: "Portsmouth RI local SEO & growth marketing",
    intro:
      "Portsmouth businesses serve island residents and East Bay commuters. We build digital systems that keep your calendar full year-round.",
    industries: ["Home services", "Marine", "Healthcare", "Retail", "Professional services"],
    nearby: ["middletown", "bristol", "newport", "tiverton"],
  },
  // Connecticut
  {
    slug: "hartford",
    name: "Hartford",
    state: "CT",
    stateName: "Connecticut",
    region: "Capitol Region",
    headline: "Hartford SEO company for competitive CT markets",
    intro:
      "Hartford’s insurance, healthcare, and professional markets demand serious SEO. We build keyword strategies and content systems that earn rankings in a crowded SERP.",
    industries: ["Insurance & finance", "Legal", "Healthcare", "B2B services", "Home services"],
    nearby: ["west-hartford", "east-hartford", "new-britain", "manchester"],
  },
  {
    slug: "new-haven",
    name: "New Haven",
    state: "CT",
    stateName: "Connecticut",
    region: "South Central CT",
    headline: "New Haven digital marketing & SEO",
    intro:
      "Yale-adjacent traffic, downtown retail, and surrounding towns make New Haven a layered market. We align SEO and ads to the audiences that matter for your business.",
    industries: ["Healthcare", "Education-adjacent", "Restaurants", "Professional services", "Retail"],
    nearby: ["west-haven", "hamden", "milford", "branford"],
  },
  {
    slug: "stamford",
    name: "Stamford",
    state: "CT",
    stateName: "Connecticut",
    region: "Fairfield County",
    headline: "Stamford SEO for Fairfield County growth",
    intro:
      "Stamford and Fairfield County CPC and competition run high. We prioritize high-intent organic wins and efficient paid media so you aren’t stuck renting traffic forever.",
    industries: ["Finance", "B2B services", "Legal", "Healthcare", "Real estate"],
    nearby: ["norwalk", "greenwich", "bridgeport", "darien"],
  },
  {
    slug: "bridgeport",
    name: "Bridgeport",
    state: "CT",
    stateName: "Connecticut",
    region: "Fairfield County",
    headline: "Bridgeport web design & local SEO",
    intro:
      "Bridgeport businesses need sites that load fast on mobile and rank for neighborhood + metro queries. We deliver both technical SEO and conversion design.",
    industries: ["Home services", "Healthcare", "Retail", "Manufacturing", "Professional services"],
    nearby: ["stratford", "fairfield", "trumbull", "milford"],
  },
  {
    slug: "norwalk",
    name: "Norwalk",
    state: "CT",
    stateName: "Connecticut",
    region: "Fairfield County",
    headline: "Norwalk CT marketing agency services",
    intro:
      "Norwalk’s coastal commerce and SoNo corridor reward brands with strong local presence. We connect SEO, content, and ads into one growth system.",
    industries: ["Hospitality", "Retail", "Professional services", "Home services", "Healthcare"],
    nearby: ["stamford", "westport", "darien", "bridgeport"],
  },
  {
    slug: "waterbury",
    name: "Waterbury",
    state: "CT",
    stateName: "Connecticut",
    region: "Naugatuck Valley",
    headline: "Waterbury SEO & digital advertising",
    intro:
      "Waterbury and the Naugatuck Valley offer strong local intent with less national noise. We help you own the map pack and organic results that drive phone calls.",
    industries: ["Home services", "Healthcare", "Auto", "Retail", "Manufacturing"],
    nearby: ["naugatuck", "bristol-ct", "middlebury", "wolcott"],
  },
  // Massachusetts
  {
    slug: "boston",
    name: "Boston",
    state: "MA",
    stateName: "Massachusetts",
    region: "Greater Boston",
    headline: "Boston digital marketing for brands ready to scale",
    intro:
      "Boston search is competitive—but winnable with the right architecture. We build topical authority, technical excellence, and paid funnels that support long-term growth.",
    industries: ["SaaS & tech", "Healthcare", "Legal", "Professional services", "Hospitality"],
    nearby: ["cambridge", "somerville", "brookline", "quincy"],
  },
  {
    slug: "worcester",
    name: "Worcester",
    state: "MA",
    stateName: "Massachusetts",
    region: "Central MA",
    headline: "Worcester SEO & website services",
    intro:
      "Central Massachusetts businesses often get overlooked by Boston agencies. We bring New England focus with strategies tuned to Worcester metro search behavior.",
    industries: ["Healthcare", "Education-adjacent", "Home services", "Manufacturing", "Retail"],
    nearby: ["shrewsbury", "auburn", "leicester", "holden"],
  },
  {
    slug: "springfield",
    name: "Springfield",
    state: "MA",
    stateName: "Massachusetts",
    region: "Western MA",
    headline: "Springfield MA SEO & local growth marketing",
    intro:
      "Pioneer Valley businesses need reliable local visibility. We optimize listings, service pages, and ads to capture Hartford–Springfield corridor demand.",
    industries: ["Healthcare", "Home services", "Education-adjacent", "Retail", "Professional services"],
    nearby: ["chicopee", "holyoke", "west-springfield", "agawam"],
  },
  {
    slug: "fall-river",
    name: "Fall River",
    state: "MA",
    stateName: "Massachusetts",
    region: "South Coast",
    headline: "Fall River SEO for South Coast businesses",
    intro:
      "Fall River and the South Coast sit at the RI–MA border—exactly where Ocean State Marketing thrives. We capture bilingual and cross-border search demand.",
    industries: ["Home services", "Healthcare", "Retail", "Manufacturing", "Restaurants"],
    nearby: ["new-bedford", "somerset", "swansea", "tiverton"],
  },
  {
    slug: "new-bedford",
    name: "New Bedford",
    state: "MA",
    stateName: "Massachusetts",
    region: "South Coast",
    headline: "New Bedford digital marketing & local SEO",
    intro:
      "New Bedford’s maritime and downtown economy needs modern digital channels. We build SEO and sites that convert locals and visitors alike.",
    industries: ["Marine", "Hospitality", "Healthcare", "Retail", "Home services"],
    nearby: ["fall-river", "fairhaven", "dartmouth", "wareham"],
  },
  {
    slug: "brockton",
    name: "Brockton",
    state: "MA",
    stateName: "Massachusetts",
    region: "South Shore / Metro South",
    headline: "Brockton SEO & lead generation",
    intro:
      "Brockton businesses compete across Metro South. We focus on high-intent local keywords and mobile-first sites that turn searches into booked jobs.",
    industries: ["Home services", "Healthcare", "Auto", "Retail", "Professional services"],
    nearby: ["stoughton", "bridgewater", "quincy", "taunton"],
  },
  {
    slug: "quincy",
    name: "Quincy",
    state: "MA",
    stateName: "Massachusetts",
    region: "South Shore",
    headline: "Quincy MA marketing for South Shore growth",
    intro:
      "Quincy’s density and transit access create constant local search demand. We help you capture it with SEO, Google Business optimization, and conversion-ready pages.",
    industries: ["Healthcare", "Dining", "Professional services", "Home services", "Retail"],
    nearby: ["boston", "braintree", "weymouth", "milton"],
  },
  {
    slug: "cambridge",
    name: "Cambridge",
    state: "MA",
    stateName: "Massachusetts",
    region: "Greater Boston",
    headline: "Cambridge SEO for innovative & local brands",
    intro:
      "Cambridge audiences research deeply. We create content and site experiences that earn trust—and rankings—in one of New England’s most competitive markets.",
    industries: ["Tech & startups", "Education-adjacent", "Healthcare", "Hospitality", "Professional services"],
    nearby: ["boston", "somerville", "arlington", "watertown"],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function locationsByState(state: Location["state"]) {
  return locations.filter((l) => l.state === state);
}

export const states = [
  {
    code: "RI" as const,
    name: "Rhode Island",
    slug: "rhode-island",
    blurb:
      "Home base. Deep coverage across Providence County, South County, Aquidneck Island, and the East Bay.",
  },
  {
    code: "CT" as const,
    name: "Connecticut",
    slug: "connecticut",
    blurb:
      "Hartford, New Haven, Fairfield County, and the Naugatuck Valley—SEO and ads tuned for CT competition.",
  },
  {
    code: "MA" as const,
    name: "Massachusetts",
    slug: "massachusetts",
    blurb:
      "Greater Boston, Central MA, Western MA, and the South Coast—with special strength on the RI border.",
  },
];
