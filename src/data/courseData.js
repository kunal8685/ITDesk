// src/data/courseData.js

export const individualCourses = [
  // Mechanical Courses
  {
    id: 'autocad-mechanical',
    name: 'AutoCAD Mechanical',
    category: 'mechanical',
    description: 'A powerful draponents. This course covers everything from basic drafting to advanced parametric modeling.',
    image: 'https://images.unsplash.com/photo-1y&cs=tinwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1582234031945-8f6c1d5f2f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxzb2xpZHdvcmtzfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1542831371-d68a25c6a1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjbmMlMjBtYWNoaW5lfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1547432854-c9f44f6f4e1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjYXRpYSUyMGRlc2lnbnxlbnwwfHx8fDE3MDA4MTU2MTF8MA&ixlib=rb-4.0.3&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1581090122709-ae1524e9b9c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxpdHxlbnwwfHx8fDE3MTUyNDU0NTd8MA&ixlib=rb-4.0.3&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxzaW11bGF0aW9uJTIwc29mdHdhcmV8ZW5mDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1621946026815-3e28c7c9c0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1fHxtZWNoYW5pY2FsJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1582234031945-8f6c1d5f2f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxzb2xpZHdvcmtzfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1542831371-d68a25c6a1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjbmMlMjBtYWNoaW5lfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1547432854-c9f44f6f4e1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjYXRpYSUyMGRlc2lnbnxlbnwwfHx8fDE3MDA4MTU2MTF8MA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1581090122709-ae1524e9b9c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxpdHxlbnwwfHx8fDE3MTUyNDU0NTd8MA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxzaW11bGF0aW9uJTIwc29mdHdhcmV8ZW5mDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1596761504953-e9622d10c1f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxwaG90b3Nob3B8ZW58MHx8fHwxNzA4MTk3MjQ2fDA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1611162617154-5a210d7a04a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxpbGx1c3RyYXRvcnxlbnwwfHx8fDE3MDg0NjY3NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1574716752392-4d7a8d5f2a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjb3JlbCUyMGRyYXd8ZW58MHx8fHwxNzA4NDY2NzYyfDA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1563242037-8f5b8c9d0a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxzdHVkaW8lMjBtYXlhfGVufDB8fHx8MTcwODQ2Njc2Mnww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1616421528612-4299b82772a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjYW52YXxlbnwwfHx8fDE3MDg0NjY3NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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
    image: 'https://images.unsplash.com/photo-1628157573273-0ec353e8ddc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxmaWdtYXxlbnwwfHx8fDE3MDg0NjY3NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
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