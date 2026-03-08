import { Building2, Home, LayoutDashboard, Wrench } from "lucide-react";

export type ProjectCategory =
  | "All Projects"
  | "Residential Projects"
  | "Commercial Projects"
  | "Renovation Projects"
  | "Ongoing Projects";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  location: string;
  category: ProjectCategory;
  year: number | "Ongoing";
  startDate: string;
  completionDate: string;
  image: string;
  gallery: string[];
  description: string;
  totalArea: string;
  materials: string[];
  client: string;
  servicesProvided: string[];
  workUndertaken: { title: string; desc: string }[];
  videoUrl?: string;
}

// export const projectsData: Project[] = [
//   {
//     id: 'luxury-villa-gomti-nagar',
//     title: 'Luxury Villa Construction',
//     tagline: 'Residential Project – Gomti Nagar, Lucknow',
//     location: 'Gomti Nagar, Lucknow',
//     category: 'Residential Projects',
//     year: 2024,
//     startDate: 'March 2023',
//     completionDate: 'January 2024',
//     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     gallery: [
//       'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1600607687931-ce8e00201408?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     ],
//     description: 'This project involved the complete construction of a modern residential luxury villa including foundational structural work, premium interior finishing, and landscaped exterior design. The building was executed with a focus on durability, contemporary architectural principles, and highly efficient spatial planning.',
//     totalArea: '5,500 sq ft',
//     materials: ['Italian Marble', 'Teak Wood', 'Exposed Concrete', 'High-Performance Glass'],
//     client: 'Mr. Rajesh Sharma',
//     servicesProvided: ['Full Construction Contract', 'Architectural Planning', 'Interior Design'],
//     workUndertaken: [
//       { title: 'Site Preparation', desc: 'Clearing, excavation, and deep foundation structural work for a robust base.' },
//       { title: 'Structural Construction', desc: 'Erection of reinforced concrete columns, beams, and highly durable multi-level slabs.' },
//       { title: 'Brickwork & Plastering', desc: 'High-quality AAC block masonry with weather-resistant exterior plastering.' },
//       { title: 'MEP Installations', desc: 'Premium electrical routing and concealed plumbing systems including HVAC.' },
//       { title: 'Interior Finishing', desc: 'Italian marble flooring, bespoke teak wood cabinetry, and modular kitchen.' },
//       { title: 'Exterior Elevation', desc: 'Modern facade treatment with exposed concrete elements and custom landscaping.' },
//     ],
//     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Example embedded video URL
//   },
// {
//   id: 'tech-hub-hazratganj',
//   title: 'Modern Tech Hub Plaza',
//   tagline: 'Commercial IT Complex',
//   location: 'Hazratganj, Lucknow',
//   category: 'Commercial Projects',
//   year: 2023,
//   startDate: 'January 2022',
//   completionDate: 'November 2023',
//   image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//   gallery: [
//     'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     'https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//   ],
//   description: 'A premium commercial complex designed specifically for modern tech companies and startups. The facility features sustainable green building practices, highly flexible open workspaces, and an iconic glass curtain wall facade that stands out dramatically in the city skyline.',
//   totalArea: '45,000 sq ft',
//   materials: ['Structural Steel', 'Energy-Efficient Glass', 'Aluminium Cladding'],
//   client: 'InnovateCorp Ltd',
//   servicesProvided: ['Turnkey Commercial Construction', 'Structural Engineering', 'Facade Installation'],
//   workUndertaken: [
//     { title: 'Foundation Engineering', desc: 'Deep pile foundations supporting a multi-story structural steel grid.' },
//     { title: 'Steel Superstructure', desc: 'Prefabricated structural steel framework for rapid and robust assembly.' },
//     { title: 'Glass Facade', desc: 'Installation of high-performance double-glazed structural glass.' },
//     { title: 'Commercial MEP', desc: 'Heavy-duty commercial HVAC, power backup, and fire suppression systems.' },
//     { title: 'Interior Core buildup', desc: 'Elevator shafts, stairwells, and generic open-plan flooring setups.' },
//     { title: 'Exterior Groundwork', desc: 'Parking infrastructure, pathway paving, and perimeter security fencing.' },
//   ]
// },
//   {
//     id: 'heritage-restoration',
//     title: 'Heritage Estate Renovation',
//     tagline: 'Restoration & Modernization Project',
//     location: 'Cantonment, Lucknow',
//     category: 'Renovation Projects',
//     year: 2023,
//     startDate: 'June 2022',
//     completionDate: 'April 2023',
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     gallery: [
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1600585154526-990dce070dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     ],
//     description: 'Careful restoration and complete modernization of a defunct 1940s estate. Our expert team preserved the historical architectural elements (like columns and arches) while completely upgrading the underlying structural integrity, electrical systems, and plumbing, seamlessly blending old-world charm with modern smart amenities.',
//     totalArea: '8,200 sq ft',
//     materials: ['Reclaimed Wood', 'Lime Mortar', 'Custom Wrought Iron', 'Modern Insulation'],
//     client: 'Heritage Trust Foundation',
//     servicesProvided: ['Heritage Restoration', 'Structural Retrofitting', 'Plumbing & Electrical Overhaul'],
//     workUndertaken: [
//       { title: 'Structural Assessment', desc: 'Detailed structural audit and precise material testing of historic elements.' },
//       { title: 'Wall Reinforcement', desc: 'Strengthening load-bearing walls using micro-piling and modern tie-backs.' },
//       { title: 'Heritage Plastering', desc: 'Application of traditional lime mortar to match the original acoustic properties.' },
//       { title: 'Modern Upgrades', desc: 'Invisible routing of modern smart-home wiring and HVAC climate control.' },
//       { title: 'Woodwork Restoration', desc: 'Painstaking restoration of the original 80-year-old teak roofing beams.' },
//       { title: 'Bespoke Ironwork', desc: 'Custom fabrication of wrought iron gates and balcony railings to match the era.' },
//     ]
//   },
//   {
//     id: 'skyline-residences',
//     title: 'Skyline Premium Apartments',
//     tagline: 'Luxury High-Rise Phase 1',
//     location: 'Sushant Golf City, Lucknow',
//     category: 'Ongoing Projects',
//     year: 'Ongoing',
//     startDate: 'August 2023',
//     completionDate: 'Est. December 2025',
//     image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     gallery: [
//       'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     ],
//     description: 'An upcoming luxury high-rise residential complex offering panoramic skyline views over the adjacent golf course. The massive project includes state-of-the-art amenities, an expansive central clubhouse, olympic pool, and IGBC green building certification.',
//     totalArea: '120,000 sq ft',
//     materials: ['Reinforced Concrete M40 Grade', 'Premium Vitrified Tiles', 'UPVC Soundproof Windows'],
//     client: 'Ansh Developers internally',
//     servicesProvided: ['Real Estate Development', 'High-Rise Construction', 'General Contracting'],
//     workUndertaken: [
//       { title: 'Excavation & Shoring', desc: 'Deep basement excavation supported by continuous concrete shoring walls.' },
//       { title: 'Raft Foundation', desc: 'Massive reinforced concrete raft foundation for high-rise stability.' },
//       { title: 'Slipform Construction', desc: 'Rapid upward construction of the central elevator core using slipform methods.' },
//       { title: 'Slab Casting', desc: 'Post-tensioned concrete slab casting allowing broader span open layouts.' },
//       { title: 'Façade Scaffolding', desc: 'Erection of extensive safety netting and peripheral scaffolding for masonry.' },
//       { title: 'Ongoing MEP', desc: 'Currently routing main vertical risers for water, electricity, and fire safety.' },
//     ]
//   },
//   {
//     id: 'boutique-hotel-indira-nagar',
//     title: 'Urban Boutique Hotel',
//     tagline: 'Luxury Hospitality Venue',
//     location: 'Indira Nagar, Lucknow',
//     category: 'Commercial Projects',
//     year: 2022,
//     startDate: 'March 2021',
//     completionDate: 'September 2022',
//     image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     gallery: [
//       'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     ],
//     description: 'A stunning 40-room luxury boutique hotel featuring a completely bespoke interior design, a structurally complex rooftop infinity pool, and a multi-level award-winning restaurant. The construction required highly precise detailing to match international high-end hospitality finishing standards.',
//     totalArea: '22,000 sq ft',
//     materials: ['Acoustic Panels', 'Imported Granite', 'Solid Brass Fixtures', 'Custom Imported Millwork'],
//     client: 'Zenith Hospitality Group',
//     servicesProvided: ['Turnkey Construction', 'Interior Fit-outs', 'Pool Construction'],
//     workUndertaken: [
//       { title: 'Demolition & Site Clearance', desc: 'Removal of the previous structure and preparing the narrow urban footprint.' },
//       { title: 'Rooftop Pool Engineering', desc: 'Heavy structural reinforcements to sustain the water volume on the top floor.' },
//       { title: 'Acoustic Insulation', desc: 'Installation of specialized in-wall acoustic panels between all guest rooms.' },
//       { title: 'Bespoke Millwork', desc: 'Installation of high-end wood paneling and architectural brass features.' },
//       { title: 'Commercial Kitchen', desc: 'Full-scale restaurant kitchen buildout with complex exhaust routing.' },
//       { title: 'Luxury Finishes', desc: 'Application of imported marble, custom lighting fixtures, and plush carpets.' },
//     ]
//   },
//   {
//     id: 'modern-farmhouse',
//     title: 'Modern Farmhouse Retreat',
//     tagline: 'Private Agricultural Estate',
//     location: 'Ring Road, Lucknow',
//     category: 'Residential Projects',
//     year: 2021,
//     startDate: 'September 2020',
//     completionDate: 'December 2021',
//     image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     gallery: [
//       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//       'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
//     ],
//     description: 'A sprawling, idyllic modern farmhouse combining rugged rustic charm with sleek contemporary architectural lines. The project involved constructing large barn-style outbuildings, incredibly high vaulted cathedral ceilings, and extensive outdoor living spaces seamlessly integrated with the natural surroundings.',
//     totalArea: '7,500 sq ft',
//     materials: ['Natural Field Stone', 'Standing Seam Metal Roofing', 'Exposed Timber Glulam Beams'],
//     client: 'Private Client',
//     servicesProvided: ['Custom Home Construction', 'Landscaping', 'Off-Grid Systems Installation'],
//     workUndertaken: [
//       { title: 'Earthworks', desc: 'Extensive grading and contouring of the sprawling 2-acre plot.' },
//       { title: 'Timber Framing', desc: 'Erection of the massive exposed glulam timber frame superstructure.' },
//       { title: 'Stone Masonry', desc: 'Hand-laid natural field stone for massive indoor/outdoor feature fireplaces.' },
//       { title: 'Metal Roofing', desc: 'Installation of durable and weather-proof standing seam metal roofs.' },
//       { title: 'Off-grid Systems', desc: 'Implementation of solar arrays, battery banks, and deep well water routing.' },
//       { title: 'Hardscaping', desc: 'Installation of flagstone patios, retaining walls, and outdoor fire pits.' },
//     ],
//     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Example embedded video URL
//   }
// ];

export const projectsData = [
  {
    id: "hcl-it-city-tower",
    title: "Office Tower Development – HCL IT City",
    tagline: "",
    location: "HCL IT City, Lucknow, Uttar Pradesh",
    category: "Commercial Projects",
    scope:
      "Construction of a complete office tower section within the IT campus",
    year: null,
    developer: "Ansh Developers",
    startDate: "",
    completionDate: "",
    image: "/projects/project1/p1.jpeg",
    gallery: [
      "/projects/project1/p1.jpeg",
      "/projects/project1/2.jpeg",
      "/projects/project1/p2.jpeg",
      "/projects/project1/4.jpeg",
      "/projects/project1/p3.jpeg",
    ],
    description: `This project involved the development of a complete tower section within the HCL IT City
campus located in Lucknow. The project focused on constructing a modern corporate office
building designed to support large-scale IT operations and professional workspaces.
HCL IT City is one of the major technology hubs in the region, developed to support the
growing IT and technology industry. As part of the campus development, Ansh Developers
was involved in executing the construction of a full tower section of the office building,
developed from the ground up.
The project included structural construction, infrastructure development, and finishing work
required to deliver a functional and modern corporate office space. The construction work
was carried out with attention to structural strength, safety standards, and modern
architectural design suitable for a large corporate environment.`,
    status: "Completed",
    materials: [],
    client: "HCL IT City",
    projectHighlights: [
      "Development within HCL IT City technology campus",
      "Construction of a complete office tower section",
      "Large-scale corporate infrastructure project",
      "Modern office building architecture",
      "Construction executed according to commercial building standards",
    ],
    workUndertaken: [
      {
        desc: "Site preparation and structural foundation work.",
      },
      {
        desc: "RCC structural framework construction for the tower section.",
      },
      {
        desc: "Floor slab and structural development.",
      },
      {
        desc: "Exterior façade and finishing work.",
      },
      {
        desc: "Internal infrastructure development.",
      },
      {
        desc: "Electrical and utility infrastructure preparation.",
      },
      {
        desc: "Office building structural completion and finishing.",
      },
    ],
  },
  {
    id: "delhi-airport-underpass",
    title: "4-Lane Underpass Road Development – Delhi Airport Corridor",
    tagline: "",
    location: "Near Delhi Airport, Delhi",
    category: "Commercial Projects",
    projectLength: "1.2 km",
    scope:
      "Complete development of a 4-lane underpass road from foundation to final completion",
    year: null,
    developer: "Ansh Developers",
    startDate: "",
    completionDate: "",
    videoUrl: "/projects/project2/video1.mp4",
    image: "/projects/project2/1.jpeg",
    gallery: [
      "/projects/project2/1.jpeg",
      "/projects/project2/2.jpeg",
      "/projects/project2/3.jpeg",
    ],
    description: `This project represents one of the most significant and premium infrastructure works
executed by Ansh Developers. The project involved the complete development of a 4-lane
underpass road covering a stretch of approximately 1.2 kilometers near the Delhi Airport
corridor.
The work was carried out from the initial site preparation stage through to the final road
construction and finishing, requiring careful engineering planning, large-scale coordination,
and high construction standards.
The objective of the project was to enhance traffic flow, improve urban connectivity, and
support high-volume transportation near one of the busiest airport zones in the country.
Due to its scale, strategic location, and engineering complexity, this project stands as one of
the flagship infrastructure projects in the portfolio of Ansh Developers, demonstrating the
company’s capability to execute large-scale premium civil and infrastructure developments.`,
    status: "Completed",
    materials: [],
    projectHighlights: [
      "One of the premium infrastructure projects by Ansh Developers",
      "Development of 1.2 km road infrastructure stretch",
      "4-lane underpass road construction",
      "Strategic location near Delhi Airport corridor",
      "Executed with high engineering and durability standards",
    ],
    workUndertaken: [
      {
        desc: "Site preparation and large-scale earthwork.",
      },
      {
        desc: "Foundation and road base development.",
      },
      {
        desc: "Construction of underpass road structure.",
      },
      {
        desc: "Installation of drainage and water management systems.",
      },
      {
        desc: "Pavement development and road surfacing.",
      },
      {
        desc: "Lane marking and road safety infrastructure.",
      },
      {
        desc: "Final structural finishing and road quality inspection.",
      },
    ],
  },
  {
    id: "gulmohar-society-residence",
    title: "Residential Property Development – Gulmohar Society",
    tagline: "Modern Residential Construction",
    location: "Gulmohar Society, Lucknow, Uttar Pradesh",
    category: "Residential Projects",
    year: null,
    startDate: "",
    completionDate: "",
    projectHighlights: [],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    gallery: [],
    description:
      "Modern residential property developed with contemporary architecture, efficient layout planning, and durable construction standards. Built on a 1250 sq ft plot with spacious balconies, decorative lighting, and high-quality finishing.",
    totalArea: "1250 sq ft",
    materials: [],
    client: "Private Residential Client",
    servicesProvided: [
      "Architectural Planning",
      "Structural Construction",
      "Interior Finishing",
      "Exterior Development",
    ],
    workUndertaken: [
      {
        title: "Architectural Planning",
        desc: "Residential layout design ensuring efficient space utilization.",
      },
      {
        title: "Foundation Construction",
        desc: "Site preparation and structural foundation development.",
      },
      {
        title: "RCC Structural Framework",
        desc: "Reinforced concrete structural framework construction.",
      },
      {
        title: "Electrical & Plumbing",
        desc: "Complete electrical wiring and plumbing installations.",
      },
      {
        title: "Exterior Elevation",
        desc: "Stone cladding façade with modern balcony railings.",
      },
      {
        title: "Final Finishing",
        desc: "Interior plastering, flooring, lighting, and final inspection.",
      },
    ],
  },

  {
    id: "madhav-green-society-duplex",
    title: "Residential Property Development – Madhav Green Society",
    tagline: "Modern Duplex Residential Home",
    location: "Madhav Green Society, Lucknow, Uttar Pradesh",
    category: "Residential Projects",
    projectHighlights: [],
    year: null,
    startDate: "",
    completionDate: "",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    gallery: [],
    description:
      "Modern duplex residential house developed with elegant architecture, symmetrical elevation design, and spacious balconies. Built with high construction standards ensuring comfortable urban living.",
    totalArea: "2000 sq ft",
    materials: [],
    client: "Private Residential Client",
    servicesProvided: [
      "Architectural Planning",
      "Structural Construction",
      "Interior & Exterior Finishing",
    ],
    workUndertaken: [
      {
        title: "Planning & Layout",
        desc: "Architectural planning and residential layout design.",
      },
      {
        title: "Foundation Development",
        desc: "Excavation and structural foundation construction.",
      },
      {
        title: "RCC Framework",
        desc: "Reinforced concrete structural framework development.",
      },
      {
        title: "Balcony Construction",
        desc: "Balcony structures with decorative railing design.",
      },
      {
        title: "Interior Finishing",
        desc: "Flooring, plastering, and wall finishing.",
      },
      {
        title: "Exterior Elevation",
        desc: "Modern façade finishing with premium exterior lighting.",
      },
    ],
  },

  {
    id: "omaxe-heights-maintenance",
    title: "Building Maintenance Work – Omaxe Heights",
    tagline: "Residential Apartment Maintenance",
    location: "Lucknow, Uttar Pradesh",
    category: "Maintenance Projects",
    year: null,
    startDate: "",
    completionDate: "",
    projectHighlights: [],
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    gallery: [],
    description:
      "Professional building maintenance and repair work executed for a premium residential apartment society to ensure structural durability, infrastructure upkeep, and aesthetic quality.",
    totalArea: "",
    materials: [],
    client: "Omaxe",
    servicesProvided: [
      "Structural Maintenance",
      "Infrastructure Repair",
      "Exterior Maintenance",
    ],
    workUndertaken: [
      {
        title: "Structural Inspection",
        desc: "Inspection and repair of building structural components.",
      },
      {
        title: "Exterior Maintenance",
        desc: "Repair and improvement of exterior finishing.",
      },
      {
        title: "Plumbing Maintenance",
        desc: "Servicing and maintenance of plumbing systems.",
      },
      {
        title: "Common Area Repair",
        desc: "Maintenance of shared infrastructure and facilities.",
      },
      {
        title: "Lighting Checks",
        desc: "Exterior lighting system inspection and repair.",
      },
    ],
  },

  {
    id: "gomti-hatchery-infrastructure",
    title: "Infrastructure Development – Gomti Hatchery",
    tagline: "Government Infrastructure Project",
    location: "Lucknow, Uttar Pradesh",
    category: "Government Projects",
    projectHighlights: [],
    year: null,
    startDate: "",
    completionDate: "",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    gallery: [],
    description:
      "Infrastructure development work executed for the Uttar Pradesh Fisheries Department to improve hatchery campus facilities and structural infrastructure.",
    totalArea: "",
    materials: [],
    client: "Uttar Pradesh Matsya (Fisheries) Department",
    servicesProvided: [
      "Infrastructure Construction",
      "Facility Development",
      "Campus Improvement",
    ],
    workUndertaken: [
      {
        title: "Entrance Infrastructure",
        desc: "Development of entrance structural elements.",
      },
      {
        title: "Facility Construction",
        desc: "Construction and improvement of hatchery facility buildings.",
      },
      {
        title: "Campus Development",
        desc: "General campus infrastructure development.",
      },
      {
        title: "Structural Finishing",
        desc: "Exterior finishing and structural improvements.",
      },
    ],
  },

  {
    id: "govardhan-enclave-residential",
    title: "Residential Building Development – Govardhan Enclave",
    tagline: "Government Housing Scheme Construction",
    location: "Vrindavan Awas Yojana, Lucknow, Uttar Pradesh",
    category: "Government Projects",
    projectHighlights: [],
    year: null,
    startDate: "",
    completionDate: "",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1600&q=80",
    gallery: [],
    description:
      "Residential building construction executed under the Uttar Pradesh Government housing scheme at Vrindavan Awas Yojana, developed according to approved architectural plans.",
    totalArea: "",
    materials: [],
    client: "Uttar Pradesh Government Housing Scheme",
    servicesProvided: [
      "Residential Building Construction",
      "Structural Development",
      "Government Housing Infrastructure",
    ],
    workUndertaken: [
      {
        title: "Site Preparation",
        desc: "Excavation and groundwork preparation.",
      },
      {
        title: "Foundation Construction",
        desc: "Foundation and structural framework development.",
      },
      {
        title: "RCC Structure",
        desc: "Reinforced concrete structural development.",
      },
      {
        title: "Electrical & Plumbing",
        desc: "Infrastructure installation for utilities.",
      },
      {
        title: "Exterior Finishing",
        desc: "Exterior finishing and structural detailing.",
      },
    ],
  },

  {
    id: "mi-rustle-court-apartment",
    title: "Building Construction – MI Rustle Court Apartment",
    tagline: "Premium Residential Apartment Construction",
    location: "Lucknow, Uttar Pradesh",
    category: "Residential Projects",
    projectHighlights: [],
    year: null,
    startDate: "",
    completionDate: "",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1600&q=80",
    gallery: [],
    description:
      "Construction of a residential apartment building within the MI Rustle Court premium housing society, focusing on structural durability and modern residential infrastructure.",
    totalArea: "",
    materials: [],
    client: "",
    servicesProvided: [
      "Apartment Construction",
      "Structural Development",
      "Residential Infrastructure",
    ],
    workUndertaken: [
      {
        title: "Foundation Work",
        desc: "Site preparation and building foundation development.",
      },
      {
        title: "RCC Structural Framework",
        desc: "Reinforced concrete structure construction.",
      },
      {
        title: "Building Structure",
        desc: "Full building structural development.",
      },
      {
        title: "Brickwork & Finishing",
        desc: "Wall construction, plastering, and finishing.",
      },
      {
        title: "Final Structural Completion",
        desc: "Inspection and structural alignment finishing.",
      },
    ],
  },
];
export const statistics = [
  { value: 50, label: "Completed Projects", icon: Building2, suffix: "+" },
  { value: 10, label: "Years Experience", icon: Wrench, suffix: "+" },
  { value: 100, label: "Client Satisfaction", icon: Home, suffix: "%" },
  {
    value: 150,
    label: "Skilled Professionals",
    icon: LayoutDashboard,
    suffix: "+",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Homeowner, Luxury Villa",
    text: "Ansh Developers brought our dream home to life. Their attention to detail, commitment to quality, and professional approach made the entire construction process smooth and stress-free. The final result exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Desai",
    role: "CEO, InnovateCorp",
    text: "Working with Ansh Developers on our commercial headquarters was a fantastic experience. They delivered the project on time and within budget, with an incredible architectural finish that our team loves.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Director, Heritage Trust",
    text: "Renovating a heritage property requires sensitivity and profound structural knowledge. Ansh Developers handled our estate renovation flawlessly, preserving its soul while upgrading it for the 21st century.",
    rating: 5,
  },
];
