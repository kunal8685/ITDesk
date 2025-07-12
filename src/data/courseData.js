// src/data/courseData.js

export const individualCourses = [
  // Mechanical Courses
  {
    id: 'autocad-mechanical',
    name: 'AutoCAD Mechanical',
    category: 'mechanical',
    description: 'A powerful draponents. This course covers everything from basic drafting to advanced parametric modeling.',
    image: 'https://i.pinimg.com/1200x/a4/ec/de/a4ecde35a5808707795ba710a9000252.jpg',
    slug: 'autocad-mechanical', // Unique slug for detail page
    learningOutcomes: [
      'Master 2D drafting and detailing',
      'Understand parametric drawing techniques',
      'Create and manage mechanical designs',
      'Generate BOMs and standard parts',
      'Collaborate on design projects'
    ],
    prerequisites: 'Basic computer literacy. No prior CAD experience required.'
  },
  {
    id: 'solidworks',
    name: 'Solidworks',
    category: 'mechanical',
    description: 'Popular in Product Industries for 3D mechanical design, simulation, and product data management. Learn to create complex parts, assemblies, and detailed drawings.',
    image: 'https://i.pinimg.com/736x/fa/b1/ee/fab1ee1d321b37b6fadfd4dc37a60e04.jpg',
    slug: 'solidworks',
    learningOutcomes: [
      'Design 3D models and assemblies',
      'Perform basic simulations (FEA)',
      'Create technical drawings and documentation',
      'Understand surface modeling and sheet metal design',
      'Utilize PDM workflows'
    ],
    prerequisites: 'Basic engineering concepts are beneficial.'
  },
  {
    id: 'cnc-programming',
    name: 'CNC Programming',
    category: 'mechanical',
    description: 'CNC Programming is the manual coding done by G-code and M-code for automated machine tools. This course covers both milling and turning operations.',
    image: 'https://i.pinimg.com/1200x/62/6a/a6/626aa60ddecdd7b41d9655e265828f2b.jpg',
    slug: 'cnc-programming',
    learningOutcomes: [
      'Write and interpret G-code and M-code',
      'Set up CNC machines for milling and turning',
      'Understand tool paths and offsets',
      'Perform basic machining operations',
      'Troubleshoot common CNC issues'
    ],
    prerequisites: 'Familiarity with basic machining principles is recommended.'
  },
  {
    id: 'catia',
    name: 'CATIA',
    category: 'mechanical',
    description: 'Used by most of the Automobile and aerospace companies for comprehensive product development. CATIA offers advanced capabilities in surfacing, solid modeling, and analysis.',
    image: 'https://i.pinimg.com/1200x/29/b3/17/29b3176e9ff0f5e83d517a3e42d0c1fa.jpg',
    slug: 'catia',
    learningOutcomes: [
      'Master Part Design and Assembly Design',
      'Create complex surfaces using Generative Shape Design',
      'Perform kinematic simulations',
      'Generate detailed manufacturing drawings',
      'Work with large assemblies'
    ],
    prerequisites: 'Basic CAD knowledge is helpful but not strictly required.'
  },
  {
    id: 'creo',
    name: 'Creo',
    category: 'mechanical',
    description: 'Powerful 3D CAD software for product design and development, offering capabilities in surfacing, simulation, and manufacturing. Formerly known as Pro/ENGINEER.',
    image: 'https://i.pinimg.com/736x/d2/10/e9/d210e94a8a0596ccf30684e16ef2180a.jpg',
    slug: 'creo',
    learningOutcomes: [
      'Perform parametric solid modeling',
      'Design assemblies and create exploded views',
      'Generate detailed engineering drawings',
      'Understand sheet metal and surfacing features',
      'Utilize basic simulation tools'
    ],
    prerequisites: 'No prior CAD experience necessary.'
  },
  {
    id: 'ansys',
    name: 'Ansys (WB/CFD)',
    category: 'mechanical',
    description: 'Simulation software for structural analysis (Workbench) and fluid dynamics (CFD), widely used in engineering. Gain expertise in finite element analysis and computational fluid dynamics.',
    image: 'https://i.pinimg.com/736x/46/5e/5d/465e5d048a79be32a14c74d602c57692.jpg',
    slug: 'ansys',
    learningOutcomes: [
      'Conduct structural (FEA) and thermal analysis',
      'Perform fluid flow simulations (CFD)',
      'Interpret simulation results and validate designs',
      'Understand meshing techniques',
      'Optimize product performance through simulation'
    ],
    prerequisites: 'Strong foundation in engineering mechanics and fluid dynamics.'
  },
  {
    id: 'nx-cad',
    name: 'NX CAD',
    category: 'mechanical',
    description: 'Integrated CAD/CAM/CAE solution from Siemens, used for product design, engineering, and manufacturing. Learn advanced modeling, assembly, and drafting.',
    image: 'https://i.pinimg.com/736x/37/c2/55/37c2551feeb70d6178ef5e87b31534fd.jpg', // Replace with relevant image
    slug: 'nx-cad',
    learningOutcomes: [
      'Master synchronous technology for flexible modeling',
      'Create complex surfaces and solids',
      'Manage large assemblies efficiently',
      'Generate manufacturing drawings and annotations',
      'Understand basic CAM processes'
    ],
    prerequisites: 'Prior CAD experience is beneficial.'
  },
  {
    id: 'gd-t',
    name: 'GD & T',
    category: 'mechanical',
    description: 'Geometric Dimensioning and Tolerancing for defining and communicating engineering product design and manufacturing information. Essential for precision engineering.',
    image: 'https://i.pinimg.com/1200x/82/68/1b/82681bd18812fb595924afe206f50dd0.jpg', // Replace with relevant image
    slug: 'gd-t',
    learningOutcomes: [
      'Interpret GD&T symbols and principles',
      'Apply GD&T to engineering drawings',
      'Understand datum features and frames',
      'Analyze tolerance stack-ups',
      'Communicate design intent effectively'
    ],
    prerequisites: 'Basic understanding of mechanical drawings.'
  },
  {
    id: 'del-cam',
    name: 'DEL CAM',
    category: 'mechanical',
    description: 'Advanced CAM software for complex machining, especially in mold, die, and tool making industries. Focuses on high-speed and multi-axis machining.',
    image: 'https://i.pinimg.com/1200x/97/d5/db/97d5db0d90d5c9bb39e27c74ceccc43f.jpg', // Replace with relevant image
    slug: 'del-cam',
    learningOutcomes: [
      'Generate complex tool paths for 3-axis and 5-axis machining',
      'Optimize machining strategies for molds and dies',
      'Understand post-processing and machine simulation',
      'Apply advanced cutting techniques',
      'Improve machining efficiency and surface finish'
    ],
    prerequisites: 'Familiarity with CNC machining and CAD concepts.'
  },
  {
    id: 'master-cam',
    name: 'Master CAM',
    category: 'mechanical',
    description: 'Industry-leading CAM software for various machining operations, from 2-axis milling to multi-axis routing. Ideal for manufacturing professionals.',
    image: 'https://i.pinimg.com/736x/13/03/9d/13039d783c73c48f13d90b20b82f48ab.jpg', // Replace with relevant image
    slug: 'master-cam',
    learningOutcomes: [
      'Program 2D and 3D machining operations',
      'Utilize advanced toolpath strategies',
      'Create efficient and safe NC code',
      'Perform machine simulation and collision detection',
      'Work with various material types'
    ],
    prerequisites: 'Basic understanding of CNC machining is recommended.'
  },

  // Electrical Courses
  {
    id: 'autocad-electrical',
    name: 'AutoCAD Electrical',
    category: 'electrical',
    description: 'AutoCAD Electrical for designing and documenting electrical control systems. Learn schematic design, panel layouts, and report generation.',
    image: 'https://i.pinimg.com/1200x/96/7d/22/967d22ea4022dd2cc0a5c100115ec5d4.jpg',
    slug: 'autocad-electrical',
    learningOutcomes: [
      'Create and manage electrical schematics',
      'Design panel layouts and wiring diagrams',
      'Generate automatic reports (BOMs, wire lists)',
      'Utilize symbol libraries and component databases',
      'Perform error checking and design validation'
    ],
    prerequisites: 'Basic understanding of electrical circuits.'
  },
  {
    id: 'hmi',
    name: 'HMI',
    category: 'electrical',
    description: 'Human-Machine Interface training for designing and implementing effective operator interfaces. Focuses on intuitive control and monitoring systems.',
    image: 'https://i.pinimg.com/736x/8b/8f/bc/8b8fbcdbead8254ff1d020c273a3f67a.jpg', // Replace with relevant image
    slug: 'hmi',
    learningOutcomes: [
      'Design user-friendly HMI screens',
      'Integrate HMI with PLCs and other control systems',
      'Configure alarms, trends, and data logging',
      'Understand industrial communication protocols',
      'Develop effective visualization for operators'
    ],
    prerequisites: 'Basic knowledge of industrial automation.'
  },
  {
    id: 'e-plan',
    name: 'E-Plan',
    category: 'electrical',
    description: 'EPLAN Electric P8 for professional electrical engineering and automated design of schematics. Streamline your electrical design processes.',
    image: 'https://i.pinimg.com/1200x/a5/cf/c5/a5cfc559bba1603ca862812f29aaa7d3.jpg', // Replace with relevant image
    slug: 'e-plan',
    learningOutcomes: [
      'Create intelligent electrical schematics',
      'Generate automatic project documentation',
      'Manage devices and components efficiently',
      'Utilize macros and master data',
      'Integrate with other engineering tools'
    ],
    prerequisites: 'Understanding of electrical design principles.'
  },
  {
    id: 'matlab',
    name: 'MATLAB',
    category: 'electrical',
    description: 'MATLAB for numerical computing, visualization, and programming, essential for electrical engineers. Learn data analysis, algorithm development, and modeling.',
    image: 'https://i.pinimg.com/736x/35/de/56/35de56c4d541c63425fcea8af55265bf.jpg', // Replace with relevant image
    slug: 'matlab',
    learningOutcomes: [
      'Perform data analysis and visualization',
      'Develop algorithms for signal processing and control',
      'Simulate electrical systems',
      'Write M-file scripts and functions',
      'Utilize toolboxes for specific applications'
    ],
    prerequisites: 'Basic programming knowledge and calculus.'
  },
  {
    id: 'plc',
    name: 'PLC',
    category: 'electrical',
    description: 'Programmable Logic Controllers for industrial automation and control systems. Hands-on training on various PLC platforms and programming languages.',
    image: 'https://i.pinimg.com/736x/1f/8f/de/1f8fde58f2a464800fac1c55ee765584.jpg', // Replace with relevant image
    slug: 'plc',
    learningOutcomes: [
      'Program PLCs using Ladder Logic, FBD, ST',
      'Configure I/O modules and communication networks',
      'Implement control strategies for industrial processes',
      'Troubleshoot PLC programs and hardware',
      'Understand safety PLCs and industrial standards'
    ],
    prerequisites: 'Basic electrical engineering knowledge.'
  },
  {
    id: 'ev-technology-electrical',
    name: 'EV Technology',
    category: 'electrical',
    description: 'Covers the fundamentals of Electric Vehicle technology, including power electronics, charging systems, and battery management from an electrical perspective.',
    image: 'https://i.pinimg.com/1200x/89/25/30/892530a04075266b49c248343c1f2bce.jpg', // Replace with relevant image
    slug: 'ev-technology-electrical',
    learningOutcomes: [
      'Understand EV powertrain components (motors, inverters)',
      'Learn about different battery technologies and BMS',
      'Explore EV charging infrastructure and standards',
      'Analyze electric vehicle control systems',
      'Examine renewable energy integration with EVs'
    ],
    prerequisites: 'Basic electrical engineering principles.'
  },
  {
    id: 'scada',
    name: 'SCADA',
    category: 'electrical',
    description: 'Supervisory Control and Data Acquisition systems for monitoring and controlling industrial processes. Learn data acquisition, alarming, and historical trending.',
    image: 'https://ctisupply.vn/wp-content/uploads/2020/09/scada.png', // Replace with relevant image
    slug: 'scada',
    learningOutcomes: [
      'Design SCADA system architectures',
      'Configure RTUs and PLCs for SCADA integration',
      'Develop graphical user interfaces (HMIs) for SCADA',
      'Implement alarming, trending, and reporting functionalities',
      'Understand cybersecurity in SCADA systems'
    ],
    prerequisites: 'Familiarity with industrial automation and networking.'
  },
  {
    id: 'embedded-systems',
    name: 'Embedded Systems',
    category: 'electrical',
    description: 'Design and development of embedded systems, integrating hardware and software for specialized functions. Covers microcontrollers, sensors, and real-time operating systems.',
    image: 'https://i0.wp.com/electricalfundablog.com/wp-content/uploads/2018/09/Embedded-Systems-Feature-Image_thumb.png?resize=640%2C383&ssl=1', // Replace with relevant image
    slug: 'embedded-systems',
    learningOutcomes: [
      'Program microcontrollers (e.g., Arduino, PIC)',
      'Interface with sensors and actuators',
      'Understand real-time operating systems (RTOS)',
      'Debug embedded software and hardware',
      'Design basic embedded applications'
    ],
    prerequisites: 'Basic electronics and programming (C/C++).'
  },
  {
    id: 'etap',
    name: 'ETAP',
    category: 'electrical',
    description: 'ETAP for power system analysis, simulation, and operation, crucial for electrical engineers. Perform load flow, short circuit, and protection studies.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EUa8fYB-7iLrFAa9nYpeBOFHHzDvC6rRuw&s', // Replace with relevant image
    slug: 'etap',
    learningOutcomes: [
      'Model power systems in ETAP',
      'Perform load flow and short circuit analysis',
      'Conduct protective device coordination studies',
      'Analyze motor starting and transient stability',
      'Generate comprehensive reports for power system design'
    ],
    prerequisites: 'Strong understanding of power system fundamentals.'
  },

  // Civil Courses
  {
    id: 'autocad-civil',
    name: 'AutoCAD Civil',
    category: 'civil',
    description: 'AutoCAD for civil engineering, including drafting, design, and documentation of infrastructure projects. Focuses on tools for civil and architectural drafting.',
    image: 'https://i.pinimg.com/736x/ff/49/6b/ff496b016174bc54f0b872b0cf738482.jpg',
    slug: 'autocad-civil',
    learningOutcomes: [
      'Master 2D and 3D drafting for civil structures',
      'Create plans for roads, pipelines, and drainage',
      'Understand survey data integration and site planning',
      'Generate cross-sections and profiles',
      'Prepare construction documents'
    ],
    prerequisites: 'Basic knowledge of civil engineering concepts.'
  },
  {
    id: 'staad-pro',
    name: 'STAAD Pro',
    category: 'civil',
    description: 'Structural analysis and design software widely used in civil engineering for various structures. Perform analysis for buildings, bridges, towers, etc.',
    image: 'https://i.pinimg.com/1200x/58/dd/80/58dd80670da048e87407248e9a715219.jpg', // Replace with relevant image
    slug: 'staad-pro',
    learningOutcomes: [
      'Model various structural systems (frames, trusses, slabs)',
      'Apply loads and analyze internal forces',
      'Design concrete and steel members as per codes',
      'Perform seismic and wind analysis',
      'Generate structural reports and drawings'
    ],
    prerequisites: 'Strong foundation in structural mechanics.'
  },
  {
    id: 'revit',
    name: 'Revit',
    category: 'civil',
    description: 'Building Information Modeling (BIM) software for architects, structural engineers, and MEP engineers. Learn collaborative design and documentation.',
    image: 'https://i.pinimg.com/736x/68/16/90/6816904414f26e75dae2a7f889636441.jpg', // Replace with relevant image
    slug: 'revit',
    learningOutcomes: [
      'Create intelligent 3D building models',
      'Generate plans, sections, and elevations automatically',
      'Understand BIM collaboration workflows',
      'Manage families and project templates',
      'Perform quantity take-offs and cost estimation'
    ],
    prerequisites: 'Basic understanding of architectural or structural drawings.'
  },
  {
    id: 'bim',
    name: 'BIM',
    category: 'civil',
    description: 'Comprehensive Building Information Modeling training, covering collaboration and project management. Learn the principles and practical application of BIM workflows.',
    image: 'https://i.pinimg.com/1200x/b0/74/5d/b0745dc08bc3e19d6f98ac82d80880dc.jpg', // Replace with relevant image
    slug: 'bim',
    learningOutcomes: [
      'Understand BIM concepts and benefits',
      'Implement BIM in various project phases',
      'Collaborate using BIM tools and platforms',
      'Manage BIM data and deliverables',
      'Explore BIM for facility management and sustainability'
    ],
    prerequisites: 'Familiarity with construction project lifecycles.'
  },
  {
    id: '3ds-max',
    name: '3ds Max',
    category: 'civil',
    description: '3D modeling, animation, and rendering software used for architectural visualization and design. Create stunning photorealistic renders of civil and architectural projects.',
    image: 'https://i.pinimg.com/736x/98/6a/4e/986a4ef13edd785aa879c355cdf97887.jpg', // Replace with relevant image
    slug: '3ds-max',
    learningOutcomes: [
      'Model 3D architectural and civil structures',
      'Apply materials and textures',
      'Set up lighting and camera views',
      'Render high-quality images and animations',
      'Utilize V-Ray for advanced rendering'
    ],
    prerequisites: 'Basic computer graphics understanding.'
  },
  {
    id: 'ms-project',
    name: 'MS Project',
    category: 'civil',
    description: 'Project management software for planning, tracking, and managing construction projects. Learn to create schedules, allocate resources, and monitor progress.',
    image: 'https://i.pinimg.com/736x/ba/1e/db/ba1edb9c4d373540ae949c2a889efdb7.jpg', // Replace with relevant image
    slug: 'ms-project',
    learningOutcomes: [
      'Develop project schedules and Gantt charts',
      'Assign resources and manage costs',
      'Track project progress and critical path',
      'Generate project reports and dashboards',
      'Understand project management best practices'
    ],
    prerequisites: 'Basic understanding of project management concepts.'
  },
  {
    id: 'sketchup',
    name: 'SketchUp',
    category: 'civil',
    description: '3D modeling software for various drawing applications such as architectural, interior design, and civil engineering. Quick and intuitive 3D creation.',
    image: 'https://i.pinimg.com/736x/2e/1e/ca/2e1ecab36da0aa12ff647a26f2a933c3.jpg', // Replace with relevant image
    slug: 'sketchup',
    learningOutcomes: [
      'Create 3D models of buildings and landscapes',
      'Apply textures and materials',
      'Generate elevations and sections',
      'Utilize extensions for advanced functionalities',
      'Prepare models for presentation and rendering'
    ],
    prerequisites: 'No prior 3D modeling experience required.'
  },
  {
    id: 'revit-mep',
    name: 'Revit MEP',
    category: 'civil',
    description: 'BIM software for Mechanical, Electrical, and Plumbing (MEP) design within the Revit platform. Learn to design integrated building systems.',
    image: 'https://i.pinimg.com/736x/ef/b7/ee/efb7eed452943e59b9b815de2dd9543c.jpg', // Replace with relevant image
    slug: 'revit-mep',
    learningOutcomes: [
      'Design HVAC systems in Revit',
      'Model electrical power and lighting layouts',
      'Create plumbing and fire protection systems',
      'Perform clash detection and coordination',
      'Generate MEP system documentation'
    ],
    prerequisites: 'Basic understanding of building services and Revit fundamentals.'
  },
  {
    id: 'tekla',
    name: 'Tekla',
    category: 'civil',
    description: 'Tekla Structures for BIM and structural engineering, providing detailed 3D modeling for steel and concrete. Focuses on constructible modeling for real-world projects.',
    image: 'https://5.imimg.com/data5/IOS/Default/2024/2/391415621/IE/WN/IG/49456356/product-jpeg.png', // Replace with relevant image
    slug: 'tekla',
    learningOutcomes: [
      'Model steel and concrete structures in 3D',
      'Generate fabrication drawings and reports',
      'Perform clash detection and coordination',
      'Understand constructible modeling principles',
      'Integrate with analysis and detailing software'
    ],
    prerequisites: 'Basic knowledge of structural engineering.'
  },
  {
    id: 'etab',
    name: 'ETAB',
    category: 'civil',
    description: 'ETABS for structural analysis and design of building systems, especially for earthquake engineering. Comprehensive tools for multi-story building analysis.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/420907302/II/WM/WK/55304525/etabs-academic-software-500x500.jpg', // Replace with relevant image
    slug: 'etab',
    learningOutcomes: [
      'Model complex building structures',
      'Apply static and dynamic loads',
      'Perform seismic and wind analysis as per codes',
      'Design concrete and steel components',
      'Interpret analysis results and optimize designs'
    ],
    prerequisites: 'Strong foundation in structural analysis and design.'
  },

  // Advance Courses - Domain Courses
  {
    id: 'biw-fixture-design',
    name: 'BIW Fixture Design',
    category: 'domain-courses',
    description: 'Specialized course in designing fixtures for Body-in-White (BIW) assembly processes in automotive industry. Learn to create robust and efficient tooling.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/QC/TF/MC/11281517/biw-welding-fixtures.jpg', // Replace with relevant image
    slug: 'biw-fixture-design',
    learningOutcomes: [
      'Understand BIW assembly processes',
      'Design welding and inspection fixtures',
      'Apply GD&T principles to fixture design',
      'Utilize CAD software for fixture modeling',
      'Ensure fixture functionality and ergonomics'
    ],
    prerequisites: 'Basic CAD and mechanical design knowledge.'
  },
  {
    id: 'plastic-mould',
    name: 'Plastic Mould Design',
    category: 'domain-courses',
    description: 'Design and manufacturing principles for plastic injection molds. Covers hot runner, cold runner systems, and various mold components.',
    image: 'https://i.pinimg.com/1200x/9a/9e/08/9a9e0885b28e8197356c413a374cfbdc.jpg', // Replace with relevant image
    slug: 'plastic-mould',
    learningOutcomes: [
      'Understand plastic injection molding process',
      'Design core and cavity inserts',
      'Implement gating and cooling systems',
      'Select appropriate mold materials',
      'Analyze mold flow and optimize design'
    ],
    prerequisites: 'Familiarity with 3D CAD software.'
  },
  {
    id: 'biw-product-design',
    name: 'BIW Product Design',
    category: 'domain-courses',
    description: 'Focuses on designing the unpainted car body structure, including sheet metal components and assemblies. Learn automotive design standards and practices.',
    image: 'https://i.pinimg.com/1200x/b6/d7/22/b6d722cff0a7cef98f61eaecbfa7c9ff.jpg', // Replace with relevant image
    slug: 'biw-product-design',
    learningOutcomes: [
      'Design sheet metal components for BIW',
      'Understand stamping and joining processes',
      'Apply automotive design guidelines and regulations',
      'Manage complex BIW assemblies',
      'Optimize designs for manufacturing and weight'
    ],
    prerequisites: 'Knowledge of 3D CAD and mechanical design.'
  },
  {
    id: 'wire-harness',
    name: 'Wire Harness Design',
    category: 'domain-courses',
    description: 'Design and routing of electrical wire harnesses, crucial for automotive and aerospace industries. Learn to create efficient and manufacturable harness designs.',
    image: 'https://i.ytimg.com/vi/GUkvw1Nv5fk/maxresdefault.jpg', // Replace with relevant image
    slug: 'wire-harness',
    learningOutcomes: [
      'Understand wire harness components and standards',
      'Design 2D and 3D wire harness layouts',
      'Perform wire routing and bundle management',
      'Generate manufacturing documentation (nailboards)',
      'Optimize designs for space and cost'
    ],
    prerequisites: 'Basic electrical and CAD knowledge.'
  },
  {
    id: 'plastic-product-design',
    name: 'Plastic Product Design',
    category: 'domain-courses',
    description: 'Covers the principles and best practices for designing various plastic products. Focuses on design for manufacturing (DFM) and material selection.',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQEphXr7WMoDQw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691425792561?e=2147483647&v=beta&t=lNEA1jr8CXyYsh39juO4dOgYRq9BSPFXT6N7Hbbwzek', // Replace with relevant image
    slug: 'plastic-product-design',
    learningOutcomes: [
      'Understand properties of common plastics',
      'Apply design guidelines for injection molding',
      'Design features like ribs, bosses, and snaps',
      'Optimize parts for manufacturability and cost',
      'Consider aesthetics and ergonomics in design'
    ],
    prerequisites: 'Familiarity with 3D CAD software.'
  },
  {
    id: 'ev-technology-domain',
    name: 'EV Technology (Domain)',
    category: 'domain-courses',
    description: 'Advanced insights into Electric Vehicle architecture, battery systems, and integration for product designers. Focuses on mechanical and packaging aspects of EVs.',
    image: 'https://i.pinimg.com/1200x/66/15/09/6615098d0d65b86e77d61644dc291804.jpg', // Replace with relevant image
    slug: 'ev-technology-domain',
    learningOutcomes: [
      'Understand EV chassis and body design considerations',
      'Design battery packs and cooling systems',
      'Integrate electric motors and power electronics',
      'Analyze crashworthiness and safety features',
      'Explore lightweighting and sustainable materials for EVs'
    ],
    prerequisites: 'Basic mechanical engineering principles.'
  },
  {
    id: 'press-tool-design',
    name: 'Press Tool Design',
    category: 'domain-courses',
    description: 'Specialized course in the design of press tools for sheet metal forming operations. Covers blanking, piercing, bending, and deep drawing dies.',
    image: 'https://i.pinimg.com/1200x/1d/f9/eb/1df9eb8e2e34f43f268358a821534d8d.jpg', // Replace with relevant image
    slug: 'press-tool-design',
    learningOutcomes: [
      'Understand sheet metal forming processes',
      'Design various types of press tools',
      'Calculate cutting forces and clearances',
      'Select appropriate die materials',
      'Optimize tool design for production efficiency'
    ],
    prerequisites: 'Knowledge of sheet metal and CAD software.'
  },
  {
    id: 'casting-design',
    name: 'Casting Design',
    category: 'domain-courses',
    description: 'Principles and practices for designing components suitable for various casting processes. Focuses on optimizing part geometry for manufacturability and performance.',
    image: 'https://i.pinimg.com/1200x/de/c0/78/dec0789dd06aa0ab078b76cdfb906f2b.jpg', // Replace with relevant image
    slug: 'casting-design',
    learningOutcomes: [
      'Understand different casting processes (sand, die, investment)',
      'Design parts for optimal castability',
      'Manage features like fillets, ribs, and draft angles',
      'Avoid common casting defects',
      'Select appropriate casting alloys'
    ],
    prerequisites: 'Basic mechanical engineering and materials knowledge.'
  },

  // Advance Courses - Graphic Design
  {
    id: 'photoshop',
    name: 'Photoshop',
    category: 'graphic-design',
    description: 'Master image editing, manipulation, and graphic design with Adobe Photoshop. From basic retouching to complex compositions, unleash your creativity.',
    image: 'https://i.pinimg.com/1200x/c6/cb/46/c6cb46e898757fd90857826455e3785f.jpg', // Replace with relevant image
    slug: 'photoshop',
    learningOutcomes: [
      'Understand Photoshop interface and tools',
      'Perform photo retouching and color correction',
      'Create digital paintings and illustrations',
      'Work with layers, masks, and smart objects',
      'Design graphics for web and print'
    ],
    prerequisites: 'Basic computer skills.'
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    category: 'graphic-design',
    description: 'Learn vector graphics creation, logos, icons, and illustrations with Adobe Illustrator. Ideal for scalable artwork for any medium.',
    image: 'https://i.ytimg.com/vi/sRmO0ha1Vbg/maxresdefault.jpg', // Replace with relevant image
    slug: 'illustrator',
    learningOutcomes: [
      'Create and manipulate vector shapes',
      'Design logos, icons, and branding elements',
      'Illustrate complex artwork',
      'Work with typography and special effects',
      'Prepare files for print and web'
    ],
    prerequisites: 'Basic computer skills.'
  },
  {
    id: 'corel-draw',
    name: 'Corel Draw',
    category: 'graphic-design',
    description: 'Comprehensive training in CorelDRAW for graphic design, page layout, and photo editing. A versatile tool for print and digital design.',
    image: 'https://i.pinimg.com/1200x/04/07/8d/04078d97f512c0495236b6f7d655dd5b.jpg', // Replace with relevant image
    slug: 'corel-draw',
    learningOutcomes: [
      'Design vector graphics and layouts',
      'Perform photo editing and enhancement',
      'Create brochures, flyers, and posters',
      'Understand color management and print preparation',
      'Utilize various design tools and effects'
    ],
    prerequisites: 'Basic computer skills.'
  },
  {
    id: 'maya-design',
    name: 'Maya Design',
    category: 'graphic-design',
    description: 'Explore 3D animation, modeling, simulation, and rendering with Autodesk Maya. Used extensively in film, games, and architectural visualization.',
    image: 'https://i.pinimg.com/736x/02/1a/dd/021add08efb34878f8c1d2782788e966.jpg', // Replace with relevant image
    slug: 'maya-design',
    learningOutcomes: [
      'Model 3D objects and environments',
      'Create realistic textures and materials',
      'Animate characters and objects',
      'Set up lighting and render scenes',
      'Understand dynamics and visual effects'
    ],
    prerequisites: 'Familiarity with 3D concepts is beneficial.'
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'graphic-design',
    description: 'Learn to create stunning designs effortlessly using Canva for social media, presentations, and more. Master this popular online design tool for quick, professional results.',
    image: 'https://i.pinimg.com/736x/fe/a0/9d/fea09d47b90e285ea188398003ba8f6a.jpg', // Replace with relevant image
    slug: 'canva',
    learningOutcomes: [
      'Create engaging social media graphics',
      'Design professional presentations and documents',
      'Utilize Canva templates and design elements',
      'Understand branding and visual consistency',
      'Work with images, text, and layouts'
    ],
    prerequisites: 'No prior design experience required.'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'graphic-design',
    description: 'Collaborative interface design tool for creating prototypes, wireframes, and user interfaces. Ideal for UI/UX designers working in teams.',
    image: 'https://i.pinimg.com/1200x/78/e4/07/78e407855cd0e9a261f08b9d6e4206bd.jpg', // Replace with relevant image
    slug: 'figma',
    learningOutcomes: [
      'Design user interfaces and experiences',
      'Create interactive prototypes',
      'Collaborate in real-time with team members',
      'Develop design systems and components',
      'Export assets for development'
    ],
    prerequisites: 'Basic understanding of design principles.'
  },
];