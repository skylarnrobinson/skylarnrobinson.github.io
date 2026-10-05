// Add verified project information and asset paths here.
// The site works when opened locally and from a GitHub Pages subdirectory.
window.portfolio = {
  contact: {
    email: "",
    linkedin: "",
    github: "",
    resume: ""
  },
  experience: [
    {
      organization: "Sandia National Laboratories",
      role: "R&D Year-Round Intern · Neutron Generators",
      dates: "May 2026 – Present",
      highlights: [
        "Developed MATLAB-based MBSE code to automate readiness-level calculations for components and systems, reducing manual data entry and calculation time.",
        "Automated recalculation as new data and requirements were introduced; GUI development and rollout to additional teams are in progress.",
        "Applied Digital Image Correlation to generate 3D models for post-manufacturing physics validation, including UV-excited phosphor experiments to reduce reflections."
      ]
    },
    {
      organization: "Sandia National Laboratories",
      role: "R&D Summer Intern · ND Governance & Engineering Processes",
      dates: "June 2025 – September 2025",
      highlights: [
        "Mapped federal requirements to engineering processes and addressed more than 100 gaps to support audit compliance.",
        "Used GENESYS and Cameo to model procedures and requirements, providing a visual process roadmap and requirements traceability."
      ]
    },
    {
      organization: "Aqua Research",
      role: "Mechanical Engineering Summer Intern",
      dates: "June 2024 – September 2024",
      highlights: [
        "Created, tested, and assembled water-purification devices and developed SolidWorks models of fluid-electrolyzing cells.",
        "Designed a float-valve mechanism to prevent tank overflow, compared three valve designs through testing, and presented the selected solution.",
        "Soldered circuit boards as part of device development and assembly."
      ]
    }
  ],
  projects: [
    {
      title: "Electrolytic cell housing",
      category: "Industry CAD",
      image: "assets/aqua-electrolytic-cell-housing.png",
      imageAlt: "Aqua Research electrolytic cell housing CAD model with a rectangular opening, perimeter groove, and hole patterns",
      summary: "A housing component created at Aqua Research, with detailed interface geometry.",
      overview: "Aqua Research · Electrolytic cell housing. A CAD model of a frame-shaped housing component with a large rectangular opening and features distributed around the perimeter.",
      contribution: "Created the CAD model of this electrolytic cell housing component at Aqua Research.",
      process: "The model shows a recessed perimeter groove, repeated holes around the face, additional holes on the outer edges, internal stepped features, and chamfered outer corners.",
      gallery: [{image: "assets/aqua-electrolytic-cell-housing.png", caption: "Electrolytic cell housing · isometric CAD view"}]
    },
    {
      title: "Digital Image Correlation",
      category: "Research & measurement",
      visualLabel: "DIC",
      visualSubtitle: "3D reconstruction / Optical measurement",
      summary: "Optical 3D modeling and reflection reduction for post-manufacturing physics validation.",
      overview: "Sandia National Laboratories · Neutron Generators internship. Applied Digital Image Correlation to generate high-fidelity 3D models that support post-manufacturing physics validation.",
      contribution: "Applied DIC and experimented with UV excitation of phosphor particles to address reflections that interfered with digital model generation.",
      process: "Investigated the use of UV-excited phosphor particles during imaging to reduce unwanted reflections and improve the conditions for digital reconstruction.",
      result: "The imaging approach reduced reflections interfering with model generation. The work supported 3D reconstruction for subsequent physics validation."
    },
    {
      title: "Electric ATV powertrain",
      contribution: "Designed the ATV drivetrain model and calculated gear ratios, stresses, output torques, and motor characteristics.",
      category: "CAD & analysis",
      image: "assets/powertrain-cad.png",
      imageAlt: "Exploded SolidWorks assembly of an electric ATV powertrain with gears, shafts, bearings, and a chain drive",
      summary: "Motor selection, gear reduction, shaft sizing, and manufacturing drawings for an electric drivetrain.",
      overview: "Cal Poly ME 329 · Team design project. The powertrain combines an electric motor, a multi-stage gear train, two custom shafts, four rolling-element bearings, and a final chain drive. An approximately 8:1 reduction was developed for the vehicle's speed and torque requirements.",
      process: "The team report connects preliminary vehicle calculations to motor selection, AGMA gear bending and contact analysis, shaft loading and fatigue calculations, bearing life, and chain sizing. The SolidWorks assembly documents component packaging, and detail drawings communicate custom shaft geometry and manufacturing features.",
      result: "A documented design proposal with a CAD assembly, engineering calculations, and shaft drawings. The report presents calculated performance; fabrication and vehicle testing are outside the documented results.",
      gallery: [
        {image: "assets/powertrain-cad.png", caption: "Exploded SolidWorks assembly · motor, reduction stages, and final chain drive"},
        {image: "assets/powertrain-assembly-drawing.png", caption: "Powertrain assembly drawing from the final design submission"},
        {image: "assets/powertrain-shaft-one.png", caption: "Custom shaft detail drawing · sheet from the team report"},
        {image: "assets/powertrain-shaft-two.png", caption: "Second custom shaft detail drawing · sheet from the team report"}
      ],
      downloads: [{label: "Download final design report (Word) ↗", url: "assets/atv-powertrain-report.docx"}]
    },
    {
      title: "PVC scooter design & testing",
      contribution: "Led a four-person team in designing and building the PVC vehicle, and performed FEA and stress calculations to iterate the design.",
      category: "CAD & analysis",
      image: "assets/scooter-fea.png",
      imageAlt: "SolidWorks finite element analysis of a PVC scooter frame with a colored stress plot",
      summary: "A team prototype connecting frame design and FEA with fabrication and physical testing.",
      overview: "Cal Poly ME 328 · Team design and build project. A lightweight PVC scooter was developed for an adult rider and a second user providing the pushing force, using readily available materials and a mechanically simple steering arrangement.",
      process: "Hand calculations and SolidWorks Simulation evaluated rider weight, pushing forces, and a curb-impact load case. The analysis identified highly loaded joints and compared predicted displacements with measurements from the constructed prototype.",
      result: "The prototype exposed differences between the model and the build, including changed member sizes, removal of a support truss, and additional steering and pulling forces. Initial testing produced a seating-joint failure; additional adhesive and reinforcement were applied. The project highlights the need to update analysis when geometry and load cases change.",
      gallery: [
        {image: "assets/scooter-prototype.jpg", caption: "Constructed PVC scooter prototype"},
        {image: "assets/scooter-fea.png", caption: "SolidWorks Simulation · loading case 2"},
        {image: "assets/scooter-joint-diagram.png", caption: "Frame schematic identifying joints discussed in the structural analysis"}
      ],
      downloads: [{label: "Download final project report (Word) ↗", url: "assets/pvc-scooter-report.docx"}]
    },
    {
      title: "Bottling station & Geneva drive",
      category: "CAD & motion",
      image: "assets/bottling-cover.jpg",
      imageAlt: "SolidWorks bottling station assembly showing the Geneva wheel and drive",
      summary: "A mechanical indexing assembly, documented through CAD motion and engineering drawings.",
      overview: "Cal Poly ME 251 coursework · Fall 2024. A bottling station assembly incorporating a five-slot Geneva wheel. The portfolio includes an assembly motion video, a multi-view assembly drawing, and a dimensioned wheel drawing.",
      contribution: "Drawing preparation for the bottling station assembly and Geneva wheel, credited to Skylar Robinson in the drawing title blocks.",
      process: "The assembly is presented in orthographic and isometric views. The component drawing documents five repeating slots at 72° spacing, a central through-hole, wheel thickness, radii, dimensional tolerances, and finishing notes.",
      result: "A CAD motion demonstration and two engineering drawing PDFs document the assembly and component geometry.",
      video: "assets/bottling-motion.mp4",
      poster: "assets/bottling-video-poster.jpg",
      gallery: [
        {image: "assets/bottling-assembly.png", caption: "Bottling station assembly · orthographic and isometric views"},
        {image: "assets/geneva-wheel.png", caption: "Five-slot Geneva wheel · dimensioned component drawing"}
      ],
      downloads: [
        {label: "Open assembly drawing (PDF) ↗", url: "assets/bottling-assembly.pdf"},
        {label: "Open Geneva wheel drawing (PDF) ↗", url: "assets/geneva-wheel.pdf"},
        {label: "Open motion video (MP4) ↗", url: "assets/bottling-motion.mp4"}
      ]
    },
    {
      title: "Shifter fork assembly",
      category: "Drawings & GD&T",
      image: "assets/shifter-cover.jpg",
      imageAlt: "Shifter fork assembly engineering drawing with section views and geometric tolerances",
      summary: "Component and assembly drawings with datum references, section views, and geometric tolerances.",
      overview: "Cal Poly ME 251 coursework · Fall 2024. A two-sheet drawing package documents a three-component shifter fork assembly: the shaft body, upper fork, and lower fork.",
      contribution: "Prepared the component and assembly drawings, credited to S. Robinson in the drawing title blocks.",
      process: "The drawing package uses section views, datum references, position and profile tolerances, limits of size, thread callouts, and surface-finish notes. The assembly sheet includes a bill of materials specifying 6061-T6 for the three components.",
      result: "A two-sheet technical drawing package communicates component geometry and assembly relationships.",
      gallery: [
        {image: "assets/shifter-fork.png", caption: "Sheet 1 · component dimensions, section views, and GD&T"},
        {image: "assets/shifter-fork-assembly.png", caption: "Sheet 2 · assembly views, geometric controls, and bill of materials"}
      ],
      downloads: [{label: "Open full shifter fork drawing (PDF) ↗", url: "assets/shifter-fork.pdf"}]
    }
  ]
};

/* Project entry example (replace every example field before adding):
{
  title: "Your project title",
  category: "CAD & design",
  image: "assets/project-name.jpg",
  imageAlt: "Description of the actual CAD image",
  summary: "One sentence describing the project.",
  overview: "The problem, requirements, and project context.",
  contribution: "Your personal contribution to the project.",
  process: "CAD approach, design decisions, analysis, and validation.",
  result: "The verified outcome, or current status if still in progress.",
  downloads: [{label: "View project report", url: "assets/project-report.pdf"}]
}
*/
