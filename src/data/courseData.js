// src/data/courseData.js

export const individualCourses = [
  // Mechanical Courses
  {
    id: 'autocad-mechanical',
    name: 'AutoCAD Mechanical',
    category: 'mechanical',
    description: 'AutoCAD is the most prominent designing and drafting software used to create precise 2D drawings and 3D models. AutoCAD Mechanical software helps the engineers to deliver their projects in a shorter time which eventually reduces the project costs and improves profitability. CAD DESK offers the best classroom trainings in India that helps the learner to get in-depth knowledge of various tools and libraries available in the AutoCAD software.',
    image: 'https://images.unsplash.com/photo-1y&cs=tinwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
    slug: 'autocad-mechanical', // Unique slug for detail page
    learningOutcomes: [
      'Master 2D drafting and detailing',
      'Understand parametric drawing techniques',
      'Create and manage mechanical designs',
      'Generate BOMs and standard parts',
      'Collaborate on design projects',
      'Layer Properties Manager',
      'Design Centre and Tool Pallets'
    ],
    prerequisites: 'Knowledge of 2D drafting standards, symbols, and drawing conventions.'
  },
  {
    id: 'solidworks',
    name: 'Solidworks',
    category: 'mechanical',
    description: 'SOLIDWORKS is powerful 3D CADD software that helps in shortening the design cycle and increases productivity. SOLIDWORKS is the world’s leading product design software that facilitates us to deliver innovative solutions to the engineering or technical industries. CAD DESK offers the best classroom training in India that helps the learner to get in-depth knowledge of various tools and features available in the Solidworks software.',
    image: 'https://images.unsplash.com/photo-1582234031945-8f6c1d5f2f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxzb2xpZHdvcmtzfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
    slug: 'solidworks',
    learningOutcomes: [
      'Design 3D models and assemblies',
      'Perform basic simulations (FEA)',
      'Create technical drawings and documentation',
      'Understand surface modeling and sheet metal design',
      'Utilize PDM workflows',
      'Sketch Entities',
      'Sketch Modifying Tools'
    ],
    prerequisites: 'Knowledge of 2D and 3D drawings, orthographic views, and basic drafting concepts.'
  },
  {
    id: 'cnc-programming',
    name: 'CNC Programming',
    category: 'mechanical',
    description: 'CNC programming (Computer Numerical Control Programming) is the software that is beneficial for creating computer program instructions to control machine tools. CNC is vastly used in the manufacturing process and promotes good mechanisms as well as flexibility. By joining CAD DESK classroom training for CNC Programming, students get an opportunity to learn from our expert trainers; who give a great emphasis on delivering the best quality training to each of its learners.',
    image: 'https://images.unsplash.com/photo-1542831371-d68a25c6a1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjbmMlMjBtYWNoaW5lfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
    slug: 'cnc-programming',
    learningOutcomes: [
      'Write and interpret G-code and M-code',
      'Set up CNC machines for milling and turning',
      'Understand tool paths and offsets',
      'Perform basic machining operations',
      'Troubleshoot common CNC issues',
      'CNC program for various Lathe operations',
      'Part Program Terminology'
    ],
    prerequisites: 'Ability to read and interpret 2D technical drawings and blueprints.Concepts like materials, machining processes, cutting tools, and tolerances.'
  },
  {
    id: 'catia',
    name: 'CATIA',
    category: 'mechanical',
    description: 'CATIA is the well-known CADD software developed and designed by Dassault Systemes. CATIA is widely used in various industries like automotive, aerospace, auto-manufacturing companies, and also in architectural and construction projects for designing, analyzing, and engineering insights. CAD DESK offers best class room trainings in India that helps the learner to get in depth knowledge of various tools and features that available in the CATIA software.',
    image: 'https://images.unsplash.com/photo-1547432854-c9f44f6f4e1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjYXRpYSUyMGRlc2lnbnxlbnwwfHx8fDE3MDA4MTU2MTF8MA&ixlib=rb-4.0.3&q=80&w=1080',
    slug: 'catia',
    learningOutcomes: [
      'Master Part Design and Assembly Design',
      'Create complex surfaces using Generative Shape Design',
      'Perform kinematic simulations',
      'Generate detailed manufacturing drawings',
      'Work with large assemblies',
      'Sketch-based Features',
      'Top-Bottom and Bottom-Up approach'
    ],
    prerequisites: 'Basic CAD knowledge is helpful but not strictly required. Knowledge of mechanical components, materials, tolerances, and manufacturing processes.'
  },
  {
    id: 'creo',
    name: 'Creo',
    category: 'mechanical',
    description: 'Creo is a 3D CAD software developed by PTC Corporation. CREO is a powerful software that takes care of all the aspects of product design including product development, designing, and analysis. CAD DESK classroom trainings helps the students to get best software training and let them understand all the important tools and commands of the software.',
    image: 'https://images.unsplash.com/photo-1581090122709-ae1524e9b9c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxpdHxlbnwwfHx8fDE3MTUyNDU0NTd8MA&ixlib=rb-4.0.3&q=80&w=1080',
    slug: 'creo',
    learningOutcomes: [
      'Perform parametric solid modeling',
      'Design assemblies and create exploded views',
      'Generate detailed engineering drawings',
      'Understand sheet metal and surfacing features',
      'Utilize basic simulation tools',
      'Creating Solid Feature',
      'Creating Cut Feature'
    ],
    prerequisites: 'Ability to read and interpret 2D mechanical drawings, symbols, and dimensions.'
  },
  {
    id: 'ansys',
    name: 'Ansys (WB/CFD)',
    category: 'mechanical',
    description: 'ANSYS Computational Fluid Dynamics (CFD) is one of the most powerful software through which engineers can create extremely reliable and user friendly projects with high productivity. ANSYS CFD consists of a modern user-friendly interface that reduces development time and efforts and provides more accurate results. By joining CAD DESK classroom training for ANSYS CFD, students get an opportunity to learn from our expert trainers; who give a great emphasis on delivering quality training to each of its learners.',
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxzaW11bGF0aW9uJTIwc29mdHdhcmV8ZW5mDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
    slug: 'ansys',
    learningOutcomes: [
      'Conduct structural (FEA) and thermal analysis',
      'Perform fluid flow simulations (CFD)',
      'Interpret simulation results and validate designs',
      'Understand meshing techniques',
      'Optimize product performance through simulation',
      'Turbulence Modelling',
      'Heat Transfer Modelling'
    ],
    prerequisites: 'Strong foundation in engineering mechanics and fluid dynamics. Knowledge of conduction, convection, and radiation, especially for thermal simulations.'
  },
  {
    id: 'nx-cad',
    name: 'NX CAD',
    category: 'mechanical',
    description: 'Siemens NX is a progressive high-end CAD/CAM/CAE software package that is widely used for mechanical product design, engineering, and manufacturing. NX CAD comes up with such a prominent designing tool that is widely used in industry and is setting high standards for speed performance. CAD DESK offers the best classroom training in India that helps the learner to get in-depth knowledge of various tools and features available in the NX CAD software.',
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'nx-cad',
    learningOutcomes: [
      'Master synchronous technology for flexible modeling',
      'Create complex surfaces and solids',
      'Manage large assemblies efficiently',
      'Generate manufacturing drawings and annotations',
      'Understand basic CAM processes',
      'Sketch Task environment'
    ],
    prerequisites: 'Prior CAD experience is beneficial. Prior exposure to any CAD software like AutoCAD, SolidWorks, or CATIA can ease learning'
  },
  {
    id: 'gd-t',
    name: 'GD & T',
    category: 'mechanical',
    description: 'Geometric Dimensioning and Tolerancing for defining and communicating engineering product design and manufacturing information. Essential for precision engineering. To provide learners with a comprehensive understanding of GD&T symbols, rules, and real-world application in engineering drawings, enabling accurate interpretation, improved design intent communication, and quality manufacturing.',
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'gd-t',
    learningOutcomes: [
      'Interpret GD&T symbols and principles',
      'Apply GD&T to engineering drawings',
      'Understand datum features and frames',
      'Analyze tolerance stack-ups',
      'Communicate design intent effectively',
      'Apply tolerance zones correctly for form, orientation, location, and runout'
    ],
    prerequisites: 'Basic understanding of mechanical drawings. Concepts like form, fit, function, and basic manufacturing processes.'
  },
  {
    id: 'del-cam',
    name: 'DEL CAM',
    category: 'mechanical',
    description: 'Advanced CAM software for complex machining, especially in mold, die, and tool making industries. Focuses on high-speed and multi-axis machining. To equip learners with the skills needed to use DELCAM software (PowerMILL or FeatureCAM) for creating efficient and accurate toolpaths for CNC machining operations in 2.5D, 3D, and multi-axis environments.',
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'del-cam',
    learningOutcomes: [
      'Generate complex tool paths for 3-axis and 5-axis machining',
      'Optimize machining strategies for molds and dies',
      'Understand post-processing and machine simulation',
      'Apply advanced cutting techniques',
      'Improve machining efficiency and surface finish',
      'Generating G-code for CNC machines',
      'Toolpath simulation'
    ],
    prerequisites: 'Familiarity with CNC machining and CAD concepts. Basic knowledge of CNC machines, machining processes, and cutting tools.'
  },
  {
    id: 'master-cam',
    name: 'Master CAM',
    category: 'mechanical',
    description: 'Industry-leading CAM software for various machining operations, from 2-axis milling to multi-axis routing. Ideal for manufacturing professionals. To train participants in using Mastercam software for designing, creating toolpaths, and generating CNC programs to produce precise parts in various machining environments including milling, turning, and multi-axis operations.',
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'master-cam',
    learningOutcomes: [
      'Program 2D and 3D machining operations',
      'Utilize advanced toolpath strategies',
      'Create efficient and safe NC code',
      'Perform machine simulation and collision detection',
      'Work with various material types',
      'Configure tooling, feeds, speeds, and machining strategies',
      'CAM Operators and Technicians'
    ],
    prerequisites: 'Basic understanding of CNC machining is recommended. Knowledge of engineering drawings and machining principles'
  },

  // Electrical Courses
  {
    id: 'autocad-electrical',
    name: 'AutoCAD Electrical',
    category: 'electrical',
    description: 'AutoCAD Electrical is one of the most dominant software programs developed by Autodesk which is widely used in creating and modifying electrical control systems. It has a complete toolset available which includes a number of drafting commands like wiring, circuiting, PLC modules, panels, and many more. The Electrical toolset boosts up the productivity level by 95% as compared to other traditional 2D drafting methods. CAD DESK offers the best classroom training in India that helps the learner to get in depth knowledge of various tools and features available in the AutoCAD Electrical software.',
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
    slug: 'autocad-electrical',
    learningOutcomes: [
      'Create and manage electrical schematics',
      'Design panel layouts and wiring diagrams',
      'Generate automatic reports (BOMs, wire lists)',
      'Utilize symbol libraries and component databases',
      'Perform error checking and design validation',
      'Terminals and Components'
    ],
    prerequisites: 'Basic understanding of electrical circuits. Ability to read and interpret electrical drawings and circuit diagrams.'
  },
  {
    id: 'hmi',
    name: 'HMI',
    category: 'electrical',
    description: 'Human-Machine Interface training for designing and implementing effective operator interfaces. Focuses on intuitive control and monitoring systems. To provide participants with comprehensive knowledge and practical skills in designing, programming, and troubleshooting Human-Machine Interfaces used in industrial automation systems, enabling efficient operator control and monitoring.',
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'hmi',
    learningOutcomes: [
      'Design user-friendly HMI screens',
      'Integrate HMI with PLCs and other control systems',
      'Configure alarms, trends, and data logging',
      'Understand industrial communication protocols',
      'Develop effective visualization for operators',
      'Electrical and Instrumentation Technicians',
      'Tag Management and Data Binding'
    ],
    prerequisites: 'Basic knowledge of industrial automation. Basic understanding of electrical circuits and control systems'
  },
  {
    id: 'e-plan',
    name: 'E-Plan',
    category: 'electrical',
    description: 'EPLAN Electric P8 for professional electrical engineering and automated design of schematics. Streamline your electrical design processes. To train participants in using EPLAN Electric P8 software for efficient design, documentation, and management of electrical control systems, enabling automation of engineering workflows and improved project accuracy.',
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'e-plan',
    learningOutcomes: [
      'Create intelligent electrical schematics',
      'Generate automatic project documentation',
      'Manage devices and components efficiently',
      'Utilize macros and master data',
      'Integrate with other engineering tools',
      'Integrate EPLAN projects with other CAD and ERP systems',
      'Manage electrical components and parts databases'
    ],
    prerequisites: 'Understanding of electrical design principles. Basic computer skills and experience with CAD tools'
  },
  {
    id: 'matlab',
    name: 'MATLAB',
    category: 'electrical',
    description: 'MATLAB is an abbreviation of Matrix Laboratory which is developed by MathWorks for providing a platform for engineers and scientists to perform numerical computing. MATLAB has a worldwide presence and is highly used in various backgrounds of engineering, science, and economics. CAD DESK classroom training helps the students to get the best software training and lets them understand all the important tools and commands of the software.',
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'matlab',
    learningOutcomes: [
      'Perform data analysis and visualization',
      'Develop algorithms for signal processing and control',
      'Simulate electrical systems',
      'Write M-file scripts and functions',
      'Utilize toolboxes for specific applications',
      'Working with the MATLAB user interface',
      'BODMAS Rules'
    ],
    prerequisites: 'Strong foundation in algebra, matrices, calculus, and basic linear algebra is essential for most MATLAB applications.'
  },
  {
    id: 'plc',
    name: 'PLC',
    category: 'electrical',
    description: 'Programmable logic controllers (PLCs) are one of the most useful technologies in the industries for automation. They are industrial computer systems that are used to control the electro-mechanical processes in various industries like manufacturing, plants, etc. CAD DESK provides classroom training for PLC, through which students get an opportunity to learn from our expert trainers; who give a great emphasis on delivering the best quality training to each of its learners.',
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'plc',
    learningOutcomes: [
      'Program PLCs using Ladder Logic, FBD, ST',
      'Configure I/O modules and communication networks',
      'Implement control strategies for industrial processes',
      'Troubleshoot PLC programs and hardware',
      'Understand safety PLCs and industrial standards',
      'Application of Industrial automation'
    ],
    prerequisites: 'Basic electrical engineering knowledge. Familiarity with digital and analog signals, logic gates, and basic electronic components.'
  },
  {
    id: 'ev-technology-electrical',
    name: 'EV Technology',
    category: 'electrical',
    description: 'Covers the fundamentals of Electric Vehicle technology, including power electronics, charging systems, and battery management from an electrical perspective. To provide learners with a comprehensive understanding of electric vehicle systems, components, and technologies, equipping them with the knowledge and skills to work in the growing EV industry.',
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'ev-technology-electrical',
    learningOutcomes: [
      'Understand EV powertrain components (motors, inverters)',
      'Learn about different battery technologies and BMS',
      'Explore EV charging infrastructure and standards',
      'Analyze electric vehicle control systems',
      'Examine renewable energy integration with EVs',
      'Entrepreneurs interested in EV design, manufacturing, or services'
    ],
    prerequisites: 'Basic electrical engineering principles. Familiarity with physics, electronics, and automotive systems'
  },
  {
    id: 'scada',
    name: 'SCADA',
    category: 'electrical',
    description: 'Supervisory Control and Data Acquisition (SCADA) is an automation control system that is widely used in various industries like energy, oil, and gas, water, power, etc. SCADA helps in monitoring and controlling various processes in industries. By joining CAD DESK classroom training for Scada, students get an opportunity to learn from our well experienced trainers; who give a great emphasis on delivering quality training to each of its learners.',
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'scada',
    learningOutcomes: [
      'Design SCADA system architectures',
      'Configure RTUs and PLCs for SCADA integration',
      'Develop graphical user interfaces (HMIs) for SCADA',
      'Implement alarming, trending, and reporting functionalities',
      'Understand cybersecurity in SCADA systems',
      'Creating of New project in SCADA',
      'The need for control and Monitoring process for Industrial Application'
    ],
    prerequisites: 'Familiarity with industrial automation and networking. '
  },
  {
    id: 'embedded-systems',
    name: 'Embedded Systems',
    category: 'electrical',
    description: 'Design and development of embedded systems, integrating hardware and software for specialized functions. Covers microcontrollers, sensors, and real-time operating systems. equip participants with the theoretical knowledge and practical skills required to design, program, and develop embedded systems used in a wide range of applications such as automotive, consumer electronics, robotics, IoT, and industrial automation.',
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'embedded-systems',
    learningOutcomes: [
      'Program microcontrollers (e.g., Arduino, PIC)',
      'Interface with sensors and actuators',
      'Understand real-time operating systems (RTOS)',
      'Debug embedded software and hardware',
      'Design basic embedded applications',
      'Interface microcontrollers with sensors, actuators, and communication modules',
      'Troubleshoot, debug, and test embedded systems'
    ],
    prerequisites: 'Basic electronics and programming (C/C++). Basic knowledge of electrical circuits and logic gates and Basic understanding of digital electronics and microprocessors'
  },
  {
    id: 'etap',
    name: 'ETAP',
    category: 'electrical',
    description: 'ETAP for power system analysis, simulation, and operation, crucial for electrical engineers. Perform load flow, short circuit, and protection studies. provide participants with comprehensive knowledge and practical skills in using ETAP software for modeling, analyzing, and simulating electrical power systems, focusing on real-world industrial and utility applications.',
    image: 'https://images.unsplash.com/photo-1579762590740-4f513d2a02b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxlbGVjdHJpY2FsfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'etap',
    learningOutcomes: [
      'Model power systems in ETAP',
      'Perform load flow and short circuit analysis',
      'Conduct protective device coordination studies',
      'Analyze motor starting and transient stability',
      'Generate comprehensive reports for power system design',
      'Perform load flow, short circuit, and motor starting analysis',
      'Simulate transient stability, harmonics, and power factor correction'
    ],
    prerequisites: 'Strong understanding of power system fundamentals. Basic knowledge of protection systems and electrical safety'
  },

  // Civil Courses
  {
    id: 'autocad-civil',
    name: 'AutoCAD Civil',
    category: 'civil',
    description: 'AutoCAD for civil engineering, including drafting, design, and documentation of infrastructure projects. Focuses on tools for civil and architectural drafting. ',
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080',
    slug: 'autocad-civil',
    learningOutcomes: [
      'Master 2D and 3D drafting for civil structures',
      'Create plans for roads, pipelines, and drainage',
      'Understand survey data integration and site planning',
      'Generate cross-sections and profiles',
      'Prepare construction documents',
      'Model pipe networks for stormwater and sanitary systems.',
      'Understand the Civil 3D interface and workflow.'
    ],
    prerequisites: 'Basic knowledge of civil engineering concepts. Familiarity with AutoCAD is recommended but not mandatory'
  },
  {
    id: 'staad-pro',
    name: 'STAAD Pro',
    category: 'civil',
    description: 'STAAD Pro stands for Structural Analysis and Design Program originally developed by Research Engineers International, which was later bought by Bentley STAAD Pro training is widely recommended in Structural Analysis and Design Software which simplifies the BIM workflow by automatically converting a physical model into an analytical model. CAD DESK classroom training helps the students to get the best software training and lets them understand all the important tools and commands of the software..',
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'staad-pro',
    learningOutcomes: [
      'Model various structural systems (frames, trusses, slabs)',
      'Apply loads and analyze internal forces',
      'Design concrete and steel members as per codes',
      'Perform seismic and wind analysis',
      'Generate structural reports and drawings',
      'Understanding and Calculating Building Loads',
      'Snap & Grid Method'
    ],
    prerequisites: 'Strong foundation in structural mechanics. Understanding of force systems, moments, equilibrium, and load calculations.Concepts such as bending, shear, axial loads, deflection, stress-strain relationships.'
  },
  {
    id: 'revit',
    name: 'Revit',
    category: 'civil',
    description: 'Autodesk Revit is the industry-standard tool designed for building information modeling or BIM. Revit Architecture training helps in enhancing the efficiency and accuracy across the project lifecycle, from concept to construction and later maintenance. As the model develops, Revit automatically updates the floor plans, elevations, and sections. CAD DESK offers the best classroom training in India that helps the learner to get in-depth knowledge of various tools and features available in the Revit Architecture software.',
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'revit',
    learningOutcomes: [
      'Create intelligent 3D building models',
      'Generate plans, sections, and elevations automatically',
      'Understand BIM collaboration workflows',
      'Manage families and project templates',
      'Perform quantity take-offs and cost estimation',
      'Ceiling & Lightening',
      'Create Wall & Curtain Walls'
    ],
    prerequisites: 'Basic understanding of architectural or structural drawings. Familiarity with terms such as floor plans, sections, elevations, slabs, beams, and foundations.'
  },
  {
    id: 'bim',
    name: 'BIM',
    category: 'civil',
    description: 'This course provides a comprehensive foundation in Building Information Modeling (BIM)—a digital methodology for designing, constructing, and managing buildings and infrastructure. Through a blend of theory and hands-on training with tools like Autodesk Revit, Navisworks, and BIM 360, participants will learn how BIM improves collaboration, reduces project risks, and enhances overall project efficiency in the architecture, engineering, and construction (AEC) industries.',
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'bim',
    learningOutcomes: [
      'Understand BIM concepts and benefits',
      'Implement BIM in various project phases',
      'Collaborate using BIM tools and platforms',
      'Manage BIM data and deliverables',
      'Explore BIM for facility management and sustainability',
      'Interpret BIM-based drawings, schedules, and 3D models.',
      'Perform basic clash detection and model coordination'
    ],
    prerequisites: 'Familiarity with construction project lifecycles. Familiarity with 2D CAD software (e.g., AutoCAD) is helpful'
  },
  {
    id: '3ds-max',
    name: '3ds Max',
    category: 'civil',
    description: 'Autodesk 3DS Max is a powerful software and is highly recommended among modeling and rendering tools. 3DS Max especially shows its strength in architecture, manufacturing, industrial design, and many more like visual graphics models. CAD DESK offers the best classroom training in India that helps the learner to get in-depth knowledge of various tools and features available in the 3DS Max software.',
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: '3ds-max',
    learningOutcomes: [
      'Model 3D architectural and civil structures',
      'Apply materials and textures',
      'Set up lighting and camera views',
      'Render high-quality images and animations',
      'Utilize V-Ray for advanced rendering',
      'Modelling with primitives and modifiers',
      'Standard and Extended Primitives'
    ],
    prerequisites: 'Basic computer graphics understanding. Understanding of basic 3D concepts like vertices, edges, polygons, and meshes helps but is not mandatory.'
  },
  {
    id: 'ms-project',
    name: 'MS Project',
    category: 'civil',
    description: 'Microsoft Project 2016 is a powerful project management software. It is developed and sold by Microsoft, and used in developing a schedule, tracking progress, budget management, and analyzing workloads. CAD DESK offers the best classroom trainings in India that helps the learner to get in-depth knowledge of various tools and libraries available in the AutoCAD software.',
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'ms-project',
    learningOutcomes: [
      'Develop project schedules and Gantt charts',
      'Assign resources and manage costs',
      'Track project progress and critical path',
      'Generate project reports and dashboards',
      'Understand project management best practices',
      'Maintaining calendars',
      'Explore the Project User Interface'
    ],
    prerequisites: 'Basic understanding of project management concepts. Comfortable using Microsoft Windows, managing files/folders, and navigating software interfaces.'
  },
  {
    id: 'sketchup',
    name: 'SketchUp',
    category: 'civil',
    description: 'SketchUp (formerly known as Google SketchUp) is a great tool to create 3D models in architecture, interior design, woodworking, or engineering. It has quite a user-friendly interface as compare to 3DS Max, with a splendid user environment than other computer-aided design programs. CAD DESK offers the best classroom training in India that helps the learner to get in-depth knowledge of various tools and features available in the Google SketchUp software.',
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'sketchup',
    learningOutcomes: [
      'Create 3D models of buildings and landscapes',
      'Apply textures and materials',
      'Generate elevations and sections',
      'Utilize extensions for advanced functionalities',
      'Prepare models for presentation and rendering',
      'Color-Coordinate the Model’s Lines',
      'The Views Toolbar: Generate Orthographic Drawings'
    ],
    prerequisites: 'No prior 3D modeling experience required. Knowing terms like “face,” “edge,” “component,” and “group” is beneficial but not required.'
  },
  {
    id: 'revit-mep',
    name: 'Revit MEP',
    category: 'civil',
    description: 'Revit Structure is a powerful platform or software in structural engineering, provides great exploration for cutting-edge tools and for creating design alternatives, building simulations, and publishing. . By joining CAD DESK classroom training for Revit Structure, students get an opportunity to learn from our expert trainers; who gives a great emphasis on delivering best quality training to each of its learners.',
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'revit-mep',
    learningOutcomes: [
      'Design HVAC systems in Revit',
      'Model electrical power and lighting layouts',
      'Create plumbing and fire protection systems',
      'Perform clash detection and coordination',
      'Generate MEP system documentation',
      'Creating View Templates',
      'Adding and Placing Steel Columns'
    ],
    prerequisites: 'Basic understanding of building services and Revit fundamentals. Familiarity with terms like walls, floors, doors, roofs, and sections'
  },
  {
    id: 'tekla',
    name: 'Tekla',
    category: 'civil',
    description: 'Tekla Structures is a building information modeling (BIM) software that is used to model structures that incorporate different kinds of building materials including steel, concrete, timber, and glass. Tekla Structures has such detailed information management available which optimizes the workflows with highly constructible design. CAD DESK classroom training helps the students to get the best software training and lets them understand various concepts and tools available in Tekla Structures.',
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'tekla',
    learningOutcomes: [
      'Model steel and concrete structures in 3D',
      'Generate fabrication drawings and reports',
      'Perform clash detection and coordination',
      'Understand constructible modeling principles',
      'Integrate with analysis and detailing software',
      'TEKLA BIM (Building Information Modelling)',
      'Generating the Model Geometry'
    ],
    prerequisites: 'Basic knowledge of structural engineering. Fundamental understanding of how structural systems work. Beams, columns, slabs, trusses, joints, anchors, reinforcements, etc.'
  },
  {
    id: 'etab',
    name: 'ETAB',
    category: 'civil',
    description: 'ETABS expands as Extended3D Analysis of Building System. ETABS is a structural analysis and design software developed by Computers and Structures, Inc. (CSI). ETABS is an Engineering software application that is highly used for multi-storied building structural analysis as well as structural design. CAD DESK offers the best classroom training for Civil 3D through which students understand the surfaces, lay out parcels, and design geometry by including the making of horizontal alignments and vertical profile, and many more.',
    image: 'https://images.unsplash.com/photo-1542468307-e54734e5a9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'etab',
    learningOutcomes: [
      'Model complex building structures',
      'Apply static and dynamic loads',
      'Perform seismic and wind analysis as per codes',
      'Design concrete and steel components',
      'Interpret analysis results and optimize designs',
      'Visualization Tools',
      'Shear Wall Design and Optimization',
      'Occupancy Loads using Shell Uniform Load Sets'
    ],
    prerequisites: 'Strong foundation in structural analysis and design. Knowledge of structural elements: beams, slabs, columns, shear walls, footings, etc.'
  },

  // Advance Courses - Domain Courses
  {
    id: 'biw-fixture-design',
    name: 'BIW Fixture Design',
    category: 'domain-courses',
    description: 'Specialized course in designing fixtures for Body-in-White (BIW) assembly processes in automotive industry. Learn to create robust and efficient tooling. This course provides in-depth knowledge and hands-on skills in Body-in-White (BIW) Fixture Design, a critical aspect of automotive manufacturing. BIW fixtures are essential tools used to hold and position sheet metal components during welding and assembly processes.',
    image: 'https://images.unsplash.com/photo-1621946026815-3e28c7c9c0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1fHxtZWNoYW5pY2FsJTIwY2FkJTIwZGVzaWdufGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'biw-fixture-design',
    learningOutcomes: [
      'Understand BIW assembly processes',
      'Design welding and inspection fixtures',
      'Apply GD&T principles to fixture design',
      'Utilize CAD software for fixture modeling',
      'Ensure fixture functionality and ergonomics',
      'Creation of part models, assemblies, and 2D drawings',
      'Welding, checking, assembly, and inspection fixtures'
    ],
    prerequisites: 'Basic CAD and mechanical design knowledge. Understanding of manufacturing processes (especially welding and assembly) is helpful'
  },
  {
    id: 'plastic-mould',
    name: 'Plastic Mould Design',
    category: 'domain-courses',
    description: 'This course provides a comprehensive introduction to Plastic Mould Design, focusing on the design and development of injection moulds used in mass production of plastic parts. It covers the entire mould development lifecycle—from component analysis to core/cavity design, parting lines, runners, gates, cooling systems, and ejection mechanisms',
    image: 'https://images.unsplash.com/photo-1582234031945-8f6c1d5f2f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxzb2xpZHdvcmtzfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'plastic-mould',
    learningOutcomes: [
      'Understand plastic injection molding process',
      'Design core and cavity inserts',
      'Implement gating and cooling systems',
      'Select appropriate mold materials',
      'Analyze mold flow and optimize design',
      'Material behavior, shrinkage, flow properties',
      'Apply industry standards and best practices in mould design'
    ],
    prerequisites: 'Familiarity with 3D CAD software. Engineering drawings and GD&T'
  },
  {
    id: 'biw-product-design',
    name: 'BIW Product Design',
    category: 'domain-courses',
    description: ' This course offers an in-depth understanding of Body-in-White (BIW) Product Design, which forms the foundation of automotive vehicle body structure development. The course covers complete design principles, component-level understanding, manufacturability, and industrial standards used in the design of car bodies, closures, pillars, roof panels, and reinforcements. ',
    image: 'https://images.unsplash.com/photo-1542831371-d68a25c6a1e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjbmMlMjBtYWNoaW5lfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'biw-product-design',
    learningOutcomes: [
      'Design sheet metal components for BIW',
      'Understand stamping and joining processes',
      'Apply automotive design guidelines and regulations',
      'Manage complex BIW assemblies',
      'Optimize designs for manufacturing and weight',
      'Understand the role and scope of BIW in vehicle development',
      'Create 3D CAD models of BIW parts with industry-standard best practices'
    ],
    prerequisites: 'Knowledge of 3D CAD and mechanical design. Familiarity with 3D CAD software (CATIA, NX, or SolidWorks preferred)'
  },
  {
    id: 'wire-harness',
    name: 'Wire Harness Design',
    category: 'domain-courses',
    description: 'This course provides a deep dive into Wire Harness Design, covering the complete process from schematic creation to 3D routing and manufacturing documentation. Wire harnesses are essential in vehicles, aircraft, and industrial systems for distributing electrical power and signals. ',
    image: 'https://images.unsplash.com/photo-1547432854-c9f44f6f4e1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjYXRpYSUyMGRlc2lnbnxlbnwwfHx8fDE3MDA4MTU2MTF8MA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'wire-harness',
    learningOutcomes: [
      'Understand wire harness components and standards',
      'Design 2D and 3D wire harness layouts',
      'Perform wire routing and bundle management',
      'Generate manufacturing documentation (nailboards)',
      'Optimize designs for space and cost'
    ],
    prerequisites: 'Basic electrical and CAD knowledge. Familiarity with 2D/3D CAD tools (AutoCAD, CATIA, NX, etc.) is helpful'
  },
  {
    id: 'plastic-product-design',
    name: 'Plastic Product Design',
    category: 'domain-courses',
    description: 'The course blends design theory with hands-on CAD practice and introduces key principles such as draft angles, wall thickness, ribs, snap-fits, bosses, and moldability. Learners will also gain exposure to industry standards, material selection, and Design for Manufacturing (DFM) techniques.',
    image: 'https://images.unsplash.com/photo-1581090122709-ae1524e9b9c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxpdHxlbnwwfHx8fDE3MTUyNDU0NTd8MA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'plastic-product-design',
    learningOutcomes: [
      'Understand properties of common plastics',
      'Apply design guidelines for injection molding',
      'Design features like ribs, bosses, and snaps',
      'Optimize parts for manufacturability and cost',
      'Consider aesthetics and ergonomics in design'
    ],
    prerequisites: 'Familiarity with 3D CAD software. 3D modeling using CAD software Manufacturing processes (especially injection molding) is helpful'
  },
  {
    id: 'ev-technology-domain',
    name: 'EV Technology (Domain)',
    category: 'domain-courses',
    description: 'This comprehensive course covers the fundamentals and advanced technologies behind Electric Vehicles (EVs). Participants will gain a solid understanding of EV architecture, components, powertrain systems, battery technology, control systems, and charging infrastructure. The course combines theoretical knowledge with practical insights into the design, operation, and maintenance of electric vehicles.',
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxzaW11bGF0aW9uJTIwc29mdHdhcmV8ZW5mDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'ev-technology-domain',
    learningOutcomes: [
      'Understand EV chassis and body design considerations',
      'Design battery packs and cooling systems',
      'Integrate electric motors and power electronics',
      'Analyze crashworthiness and safety features',
      'Explore lightweighting and sustainable materials for EVs'
    ],
    prerequisites: 'Basic mechanical engineering principles. Familiarity with automotive systems is helpful but not mandatory Willingness to learn interdisciplinary concepts involving electronics, software, and mechanics'
  },
  {
    id: 'press-tool-design',
    name: 'Press Tool Design',
    category: 'domain-courses',
    description: ' This course provides comprehensive training on Press Tool Design, a crucial aspect of sheet metal forming and manufacturing. Learners will explore the design and development of press tools used in blanking, piercing, bending, and forming operations. The curriculum covers fundamentals of press tool components, material selection, manufacturing processes, and design principles to create efficient, safe, and durable tooling solutions.',
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'press-tool-design',
    learningOutcomes: [
      'Understand sheet metal forming processes',
      'Design various types of press tools',
      'Calculate cutting forces and clearances',
      'Select appropriate die materials',
      'Optimize tool design for production efficiency'
    ],
    prerequisites: 'Knowledge of sheet metal and CAD software.Basic knowledge of manufacturing processes and engineering drawings Familiarity with CAD software is advantageous'
  },
  {
    id: 'casting-design',
    name: 'Casting Design',
    category: 'domain-courses',
    description: ' This course provides a comprehensive understanding of Casting Design, focusing on the design and development of cast components used across automotive, aerospace, machinery, and consumer product industries. It covers casting methods, material selection, design considerations, mold making, gating systems, and defect analysis. Participants will learn to optimize component design for manufacturability and quality while minimizing costs and defects.',
    image: 'https://images.unsplash.com/photo-1517032791404-367d3e6a4b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHx3ZWJzaXRlJTIwYmFubmVyfGVufDB8fHx8MTcwMDgxNTYxMXww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'casting-design',
    learningOutcomes: [
      'Understand different casting processes (sand, die, investment)',
      'Design parts for optimal castability',
      'Manage features like fillets, ribs, and draft angles',
      'Avoid common casting defects',
      'Select appropriate casting alloys'
    ],
    prerequisites: 'Basic mechanical engineering and materials knowledge. Basic understanding of manufacturing processes and engineering drawings Familiarity with 3D CAD tools is beneficial'
  },

  // Advance Courses - Graphic Design
  {
    id: 'photoshop',
    name: 'Photoshop',
    category: 'graphic-design',
    description: ' This course introduces participants to the powerful features of Adobe Photoshop, the industry-standard software for digital image editing, photo retouching, and graphic design. Learners will develop skills to create, manipulate, and enhance images for print, web, and multimedia applications. The course combines foundational techniques with creative projects to build practical expertise.',
    image: 'https://images.unsplash.com/photo-1596761504953-e9622d10c1f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxwaG90b3Nob3B8ZW58MHx8fHwxNzA4MTk3MjQ2fDA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'photoshop',
    learningOutcomes: [
      'Understand Photoshop interface and tools',
      'Perform photo retouching and color correction',
      'Create digital paintings and illustrations',
      'Work with layers, masks, and smart objects',
      'Design graphics for web and print'
    ],
    prerequisites: 'Basic computer skills. No prior Photoshop experience required'
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    category: 'graphic-design',
    description: 'This course introduces learners to Adobe Illustrator, the industry-leading vector graphics software used for logo design, illustration, typography, and digital artwork creation. Participants will develop skills to create scalable vector graphics suitable for print, web, and multimedia projects. The course balances foundational tools and techniques with hands-on creative exercises.',
    image: 'https://images.unsplash.com/photo-1611162617154-5a210d7a04a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxpbGx1c3RyYXRvcnxlbnwwfHx8fDE3MDg0NjY3NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'illustrator',
    learningOutcomes: [
      'Create and manipulate vector shapes',
      'Design logos, icons, and branding elements',
      'Illustrate complex artwork',
      'Work with typography and special effects',
      'Prepare files for print and web'
    ],
    prerequisites: 'Basic computer skills. No prior experience with Illustrator required'
  },
  {
    id: 'corel-draw',
    name: 'Corel Draw',
    category: 'graphic-design',
    description: 'This course introduces participants to CorelDRAW, a versatile vector graphic design software widely used for logo creation, illustration, page layout, and desktop publishing. Learners will develop skills to design professional vector artwork, manipulate graphics, and prepare designs for print and digital media. The course combines foundational design principles with practical tool application.',
    image: 'https://images.unsplash.com/photo-1574716752392-4d7a8d5f2a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjb3JlbCUyMGRyYXd8ZW58MHx8fHwxNzA4NDY2NzYyfDA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'corel-draw',
    learningOutcomes: [
      'Design vector graphics and layouts',
      'Perform photo editing and enhancement',
      'Create brochures, flyers, and posters',
      'Understand color management and print preparation',
      'Utilize various design tools and effects'
    ],
    prerequisites: 'Basic computer skills. No prior experience with CorelDRAW required'
  },
  {
    id: 'maya-design',
    name: 'Maya Design',
    category: 'graphic-design',
    description: 'This course offers comprehensive training in Autodesk Maya, a leading software used worldwide for 3D modeling, animation, rigging, rendering, and visual effects. Participants will learn how to create detailed 3D models, animate characters and objects, and develop professional visual effects for films, games, and multimedia.',
    image: 'https://images.unsplash.com/photo-1563242037-8f5b8c9d0a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxzdHVkaW8lMjBtYXlhfGVufDB8fHx8MTcwODQ2Njc2Mnww&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'maya-design',
    learningOutcomes: [
      'Model 3D objects and environments',
      'Create realistic textures and materials',
      'Animate characters and objects',
      'Set up lighting and render scenes',
      'Understand dynamics and visual effects'
    ],
    prerequisites: 'Familiarity with 3D concepts is beneficial. '
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'graphic-design',
    description: 'This course introduces Canva, a user-friendly online graphic design platform used for creating social media graphics, presentations, posters, flyers, and more. Perfect for beginners with no design background, this course covers the basics of Canva’s drag-and-drop interface, templates, and design tools to produce professional-looking visuals quickly.',
    image: 'https://images.unsplash.com/photo-1616421528612-4299b82772a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxjYW52YXxlbnwwfHx8fDE3MDg0NjY3NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'canva',
    learningOutcomes: [
      'Create engaging social media graphics',
      'Design professional presentations and documents',
      'Utilize Canva templates and design elements',
      'Understand branding and visual consistency',
      'Work with images, text, and layouts'
    ],
    prerequisites: 'No prior design experience required. No prior design experience required'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'graphic-design',
    description: 'This course introduces Figma, a leading cloud-based design and prototyping tool used extensively for UI/UX design, wireframing, and collaborative product development. Participants will learn how to design interactive user interfaces, create prototypes, and work efficiently in teams using Figma’s real-time collaboration features..',
    image: 'https://images.unsplash.com/photo-1628157573273-0ec353e8ddc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHxmaWdtYXxlbnwwfHx8fDE3MDg0NjY3NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080', // Replace with relevant image
    slug: 'figma',
    learningOutcomes: [
      'Design user interfaces and experiences',
      'Create interactive prototypes',
      'Collaborate in real-time with team members',
      'Develop design systems and components',
      'Export assets for development'
    ],
    prerequisites: 'Basic understanding of design principles.Basic understanding of UI/UX principles is helpful but not mandatory Familiarity with general design concepts and computer use'
  },
];