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
    tagline: `Modern residential property developed with contemporary architecture, efficient layout 
planning, and durable construction standards.`,
    location: "Gulmohar Society, Lucknow, Uttar Pradesh",
    category: "Residential Projects",
    year: null,
    startDate: "",
    completionDate: "",
    projectHighlights: [
      "Contemporary modern elevation design",
      "Decorative stone cladding façade",
      "Spacious balcony with modern railing design",
      "Premium exterior lighting",
      "Modern entrance gate and boundary wall",
      "Efficient residential space planning"
    ],
    image:
      "/projects/gulmohar-society-proj/gulmoharimg1.jpeg",
    gallery: [
      "/projects/gulmohar-society-proj/gulmoharimg1.jpeg"
    ],
    description:
      `This project involved the complete development of a residential house located in 
Gulmohar Society, Lucknow.The property was constructed from the initial planning stage 
to the final construction and finishing phase. 
The goal of the project was to build a modern and comfortable residential home that 
combines architectural aesthetics with strong structural quality.The design features a 
contemporary façade, spacious balconies, decorative exterior lighting, and modern material 
f
inishes. 
The house was developed on a 1250 sq ft plot, ensuring optimal space utilization while 
maintaining an elegant and functional residential layout suitable for urban living in Lucknow. 
The project reflects Ansh Developers’ commitment to quality construction, attention to 
detail, and modern residential design standards.`,
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
    tagline: `A modern residential duplex developed with elegant architectural design, functional 
planning, and high-quality construction standards.`,

    location: "Madhav Green Society, Lucknow, Uttar Pradesh",
    category: "Residential Projects",
    projectHighlights: [
      "Elegant modern duplex elevation",
      "Decorative balcony railing design",
      "Symmetrical front façade architecture",
      "Spacious balcony areas for outdoor use",
      "Premium exterior lighting and wall finish",
      "Functional residential layout for family living"
    ],
    year: null,
    startDate: "",
    completionDate: "",
    image:
      "/projects/madhav-green-proj/madhavgreenimg1.jpeg",
    gallery: [
      "/projects/madhav-green-proj/madhavgreenimg1.jpeg",
    ],
    description:
      `This project involved the complete construction and development of a residential property
located in Madhav Green Society, Lucknow. The house was built from the initial planning
stage through structural development and final finishing.
The design of the property reflects a modern residential architecture with balanced
symmetry, decorative balcony railings, and spacious outdoor areas. The home was planned
to provide comfortable family living while maintaining a visually appealing exterior elevation.
Constructed on a 2000 sq ft area, the residence focuses on efficient space utilization, strong
structural integrity, and aesthetic finishing. The project demonstrates Ansh Developers’
expertise in delivering modern residential homes that combine durability with elegant
architectural design. `,
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
    tagline: `Professional maintenance and structural upkeep work carried out for a premium residential 
apartment society in Lucknow.`,
    location: "Lucknow, Uttar Pradesh",
    category: "Maintenance Projects",
    year: null,
    startDate: "",
    completionDate: "",
    projectHighlights: [
      "Maintenance work for a premium residential apartment society",
      "Large-scale residential complex infrastructure",
      "Focus on structural durability and resident safety",
      "Professional maintenance executed with minimal disruption",
      "High-quality repair and finishing standards"
    ],

    image: "/projects/omaxe-heights-proj/omaxeimg1.jpeg",
    gallery: [
      "/projects/omaxe-heights-proj/omaxeimg1.jpeg",
      "/projects/omaxe-heights-proj/omaxeimg2.jpeg",
    ],
    description:
      `This project involved maintenance and building upkeep work at Omaxe Heights, a premium
residential apartment society located in Lucknow. The maintenance work was carried out
to ensure the long-term structural durability, functionality, and aesthetic quality of the
residential complex.
Omaxe Heights is a large multi-tower residential development, and regular maintenance is
essential for preserving the infrastructure and ensuring comfortable living for residents.
Ansh Developers was entrusted with executing the required maintenance activities to
maintain the building’s structural integrity and exterior appearance.
The work was completed with a focus on quality standards, safety measures, and minimal
disruption to residents within the society.`,
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
    tagline: `Infrastructure and building development work executed for the Fisheries Department of 
Uttar Pradesh.`,
    location: "Lucknow, Uttar Pradesh",
    category: "Government Projects",
    projectHighlights: [
      "Government infrastructure development project",
      "Work executed for Uttar Pradesh Fisheries Department",
      "Improvement of hatchery facility infrastructure",
      "Institutional campus development",
      "Durable construction following government standards"
    ],
    year: null,
    startDate: "",
    completionDate: "",
    image: "/projects/gomti-hatchery-proj/gomtimg1.jpeg",
    gallery: [
      "/projects/gomti-hatchery-proj/gomtimg1.jpeg",
      "/projects/gomti-hatchery-proj/gomtiimg2.jpeg",

    ],
    description:
      `This project involved infrastructure development and construction work at the Gomti
Hatchery facility in Lucknow, which operates under the Uttar Pradesh Matsya (Fisheries)
Department.
The work focused on improving and developing the institutional infrastructure of the
hatchery campus, including structural development and facility improvements. Hatchery
facilities play an important role in fish breeding, aquaculture development, and fisheries
management within the state.
Ansh Developers contributed to the development and enhancement of the hatchery
infrastructure, ensuring that the construction work met government standards, durability
requirements, and functional needs of the facility.
The project demonstrates Ansh Developers’ capability in executing government
infrastructure and institutional development projects.`,
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
    title: `Development of a residential building under the Uttar Pradesh Government housing scheme 
in Lucknow.`,
    tagline: "Government Housing Scheme Construction",
    location: "Vrindavan Awas Yojana, Lucknow, Uttar Pradesh",
    category: "Government Projects",
    projectHighlights: [
      "Residential building development under Vrindavan Awas Yojana",
      "Government housing scheme infrastructure project",
      "Construction executed as per approved development plans",
      "Durable and functional residential building structure",
      "Project completed according to construction standards for housing developments"
    ],
    year: null,
    startDate: "",
    completionDate: "",
    image: "/projects/govardhan-enclave-proj/govardhanimg1.jpeg",
    gallery: [
      "/projects/govardhan-enclave-proj/govardhanimg1.jpeg",
      "/projects/govardhan-enclave-proj/govardhanimg2.jpeg",
      "/projects/govardhan-enclave-proj/govardhanimg3.jpeg",

    ],
    description:
      `This project involved the construction and development of a residential building at
Govardhan Enclave, located within the Vrindavan Awas Yojana housing scheme in
Lucknow. The project was executed in accordance with the approved architectural plans
and development guidelines provided under the housing scheme.
Vrindavan Awas Yojana is a major residential development initiative in Lucknow aimed at
providing modern housing infrastructure and planned residential communities. As part of
this project, Ansh Developers carried out the complete construction of the building from
the initial foundation stage to the final structural completion.
The work included structural development, building construction, and finishing work
necessary to deliver a durable and well-planned residential structure aligned with the
standards required for government housing developments.
This project demonstrates Ansh Developers’ capability in executing government residential
housing projects with precision and adherence to approved construction plans. `,
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
    tagline: `Construction work undertaken for a premium residential apartment society in Lucknow.`,
    location: "Lucknow, Uttar Pradesh",
    category: "Residential Projects",
    projectHighlights: [
      "Construction work in a premium residential housing society",
      "Modern apartment building infrastructure",
      "High-quality residential construction standards",
      "Durable structural development for long-term use",
      "Project executed within a planned residential community"
    ],
    year: null,
    startDate: "",
    completionDate: "",
    image:
      "/projects/mi-rustle-court-proj/mirustle3.jpg",
    gallery: [
      "/projects/mi-rustle-court-proj/mirustle3.jpg",
      "/projects/mi-rustle-court-proj/mirustle2.jpg",
      "/projects/mi-rustle-court-proj/mirustle1.jpeg",
    ],
    description:
      `This project involved building construction work at MI Rustle Court Apartment, a premium
residential housing society located in Lucknow. The project focused on developing a high
quality residential building structure designed to meet modern housing standards and
provide comfortable urban living spaces.
MI Rustle Court is known as a well-developed residential society in Lucknow, offering
modern apartment living with strong infrastructure and planned residential amenities. Ansh
Developers carried out the construction of the building structure, ensuring the project was
executed with strong structural integrity and quality construction standards.
The work was performed with attention to durability, architectural design, and structural
reliability, ensuring that the building meets the requirements of a modern residential
society.`,
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
