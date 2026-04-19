// ─────────────────────────────────────────────────────────────
// SUBJECT MAP
// Keys must exactly match the option values in your HTML dropdowns
// Branch values and Semester values below are now in sync with HTML
// ─────────────────────────────────────────────────────────────
const subjectMap = {
    "First Year Engineering": {
        "Semester 1": [
            "Applied Mathematics I",
            "Applied Physics I",
            "Applied Chemistry I",
            "Basic Electrical and Electronics Engineering",
            "Engineering Mechanics",
            "Professional and Communication Ethics"
        ],
        "Semester 2": [
            "Applied Mathematics II",
            "Semiconductor Physics",
            "Data Structure",
            "Elements of Electrical Systems",
            "Elements of Mechanical Engineering",
            "Elements of Telecommunication",
            "Engineering Materials",
            "Environmental Chemistry and Non-Conventional Energy Sources",
            "Introduction to Chemical Engineering",
            "Physics of Measurements and Sensors"
        ]
    },

    "Computer Engineering": {
        "Semester 1": [
            "Applied Mathematics I",
            "Applied Physics I",
            "Basic Electrical and Electronics Engineering",
            "Engineering Mechanics",
            "Professional and Communication Ethics"
        ],
        "Semester 2": [
            "Applied Mathematics II",
            "Elements of Electrical Systems",
            "Elements of Mechanical Engineering",
            "Engineering Materials"
        ],
        "Semester 3": [
            "Digital Logic and Computer Architecture",
            "Data Structure",
            "Discrete Structures and Graph Theory",
            "Engineering Mathematics III"
        ],
        "Semester 4": [
            "Analysis of Algorithm",
            "Database Management System",
            "Engineering Mathematics IV",
            "Operating System"
        ]
    },

    "Information Technology": {
        "Semester 1": [
            "Applied Mathematics I",
            "Applied Physics I",
            "Basic Electrical and Electronics Engineering",
            "Engineering Mechanics",
            "Professional and Communication Ethics"
        ],
        "Semester 2": [
            "Applied Mathematics II",
            "Elements of Electrical Systems",
            "Elements of Mechanical Engineering",
            "Engineering Materials"
        ],
        "Semester 3": [
            "Data Structure Analysis",
            "Database Management System",
            "Principle of Communication",
            "Engineering Mathematics III"
        ],
        "Semester 4": [
            "Automata Theory",
            "Computer Network and Network Design",
            "Engineering Mathematics IV",
            "Computer Organization and Architecture",
            "Operating System"
        ]
    },

    "Data Engineering": {
        "Semester 1": [
            "Applied Mathematics I",
            "Applied Physics I",
            "Basic Electrical and Electronics Engineering",
            "Engineering Mechanics",
            "Professional and Communication Ethics"
        ],
        "Semester 2": [
            "Applied Mathematics II",
            "Elements of Electrical Systems",
            "Elements of Mechanical Engineering",
            "Engineering Materials"
        ],
        "Semester 3": [
            "Digital Logic and Computer Architecture",
            "Data Structure",
            "Discrete Structures and Graph Theory",
            "Engineering Mathematics III"
        ],
        "Semester 4": [
            "Analysis of Algorithm",
            "Database Management System",
            "Engineering Mathematics IV",
            "Operating System"
        ]
    },

    // FIX: HTML had value="Mechanical" — changed HTML option value to "Mechanical Engineering"
    "Mechanical Engineering": {
        "Semester 1": [
            "Applied Mathematics I",
            "Applied Physics I",
            "Basic Electrical and Electronics Engineering",
            "Engineering Mechanics",
            "Professional and Communication Ethics"
        ],
        "Semester 2": [
            "Applied Mathematics II",
            "Elements of Mechanical Engineering",
            "Engineering Materials"
        ],
        "Semester 3": [
            "Engineering Mathematics III",
            "Material Metallurgy",
            "Thermodynamics",
            "Production Processes",
            "Strength of Materials"
        ],
        "Semester 4": [
            "CAD/CAM",
            "Engineering Mathematics IV",
            "Fluid Mechanics",
            "Industrial Electronics",
            "Kinematics of Machinery"
        ]
    },

    "Civil Engineering": {
        "Semester 1": [
            "Applied Mathematics I",
            "Applied Physics I",
            "Basic Electrical and Electronics Engineering",
            "Engineering Mechanics",
            "Professional and Communication Ethics"
        ],
        "Semester 2": [
            "Applied Mathematics II",
            "Elements of Mechanical Engineering",
            "Engineering Materials"
        ],
        "Semester 3": [
            "Architectural Planning and Design of Buildings",
            "Building Materials and Construction",
            "Engineering Mathematics III",
            "Structural Analysis I",
            "Surveying I"
        ],
        "Semester 4": [
            "Building Services",
            "Engineering Mathematics IV",
            "Structural Analysis II",
            "Surveying II",
            "Transportation Engineering"
        ]
    },

    "Electrical Engineering": {
        "Semester 1": [
            "Applied Mathematics I",
            "Applied Physics I",
            "Basic Electrical and Electronics Engineering",
            "Engineering Mechanics",
            "Professional and Communication Ethics"
        ],
        "Semester 2": [
            "Applied Mathematics II",
            "Elements of Electrical Systems",
            "Engineering Materials"
        ],
        "Semester 3": [
            "Engineering Mathematics III",
            "Electrical Circuit Analysis",
            "Electrical Machines I",
            "Electronic Devices and Circuits",
            "Signals and Systems"
        ],
        "Semester 4": [
            "Engineering Mathematics IV",
            "Electrical Machines II",
            "Control Systems",
            "Power Systems I",
            "Power Electronics"
        ]
    }
};

// ============================================================
// CHAPTERS DATA — Auto-generated from MU JSON files
// Mumbai University | muquestionpapers.com
//
// Structure: chaptersData[branch][semesterKey][subjectCode] = [chapterNames]
//
// Semester Key Convention:
//   sem1_NEP  = Semester 1, NEP-2020 scheme
//   sem1_R19  = Semester 1, REV-2019-C (R-19) scheme
//   sem2_NEP  = Semester 2, NEP-2020
//   sem2_R19  = Semester 2, R-19
//   sem3      = Semester 3 (scheme-independent, code-based)
//   sem4      = Semester 4
// ============================================================
 
const chaptersData = {
 
  // ===== FIRST YEAR (FE) — Common for all branches =====
  'First Year Engineering': {
    'sem1_NEP': {
      'Applied Mathematics I': ["Complex Numbers and Hyperbolic Functions", "Successive Differentiation and Leibnitz Theorem", "Partial Differentiation and Applications", "Applications of Differential Calculus", "Integral Calculus"],
      'Applied Physics I': ["Interference of Light", "Diffraction of Light", "Lasers and Optical Fibers", "Ultrasonics", "Quantum Mechanics"],
      'Applied Chemistry': ["Electrochemistry", "Polymers", "Water Technology", "Fuels and Combustion", "Engineering Materials (Alloys and Composites)"],
      'Engineering Mechanics': ["Resultant of Force Systems", "Equilibrium of Forces", "Centroid and Moment of Inertia", "Kinematics of Particles", "Kinetics of Particles"],
      'Basic Electrical and Electronics Engineering': ["DC Circuits", "AC Circuits", "Single Phase Transformer", "DC Machines", "Semiconductor Devices"],
      'Professional and Communication Ethics': ["Communication Fundamentals", "Technical Writing", "Professional Ethics", "Presentation and Oral Communication", "Group Discussion and Interview Skills"],
    },
    'sem1_R19': {
      'Applied Mathematics I': ["Complex Numbers", "Differential Calculus I (Successive Differentiation)", "Differential Calculus II (Partial Derivatives)", "Matrices", "Integral Calculus and Applications"],
      'Applied Physics I': ["Crystal Structure and X-rays", "Interference and Diffraction", "Polarization and Laser", "Acoustics and Ultrasonics", "Modern Physics"],
      'Applied Chemistry': ["Electrochemistry and Corrosion", "Water Treatment", "Polymers and Plastics", "Fuels", "Engineering Materials"],
      'Engineering Mechanics': ["System of Forces", "Friction", "Centroid and Centre of Gravity", "Kinematics of Rigid Bodies", "Kinetics of Rigid Bodies"],
      'Basic Electrical and Electronics Engineering': ["Network Analysis", "Single Phase AC Circuits", "Three Phase Circuits", "Transformers", "Electrical Machines"],
    },
    'sem2_NEP': {
      'Applied Mathematics II': ["Differential Equations of First Order", "Linear Differential Equations with Constant Coefficients", "Laplace Transform", "Vector Calculus", "Numerical Methods"],
      'Data Structures': ["Introduction to Data Structures and Arrays", "Linked Lists", "Stacks and Queues", "Trees", "Graphs and Hashing"],
    },
    'sem2_R19': {
      'Applied Mathematics II': ["Differential Equations of First and Higher Order", "Laplace Transform", "Fourier Series", "Vector Calculus", "Numerical Methods and Statistics"],
      'Applied Physics II': ["Quantum Mechanics and Wave Mechanics", "Band Theory of Solids and Semiconductors", "Optoelectronics and Fiber Optics", "Superconductivity and Nanotechnology", "Applied Optics"],
      'Applied Chemistry II': ["Phase Equilibria", "Thermodynamics and Thermochemistry", "Chemical Kinetics", "Spectroscopy", "Green Chemistry and Environmental Engineering"],
      'Computer Programming': ["Introduction to C and Control Structures", "Functions and Recursion", "Arrays and Strings", "Pointers and Structures", "File Handling and Preprocessor"],
      'Engineering Graphics': ["Orthographic Projections", "Section and Development of Surfaces", "Isometric Views", "Introduction to AutoCAD / CAD", "Machine Drawing and Assembly"],
      'Professional and Communicational Ethics': ["Technical Communication", "Workplace Communication", "Professional Ethics and Values", "Verbal Communication and Presentations", "Critical Thinking and Problem Solving"],
    },
  },
 
  // ===== CIVIL ENGINEERING =====
  'Civil Engineering': {
    'sem1_NEP': {
      'Applied Mathematics I': ["Matrices", "Differential Calculus", "Partial Differentiation and Applications", "Integral Calculus", "Ordinary Differential Equations", "Numerical Methods"],
      'Applied Physics I': ["Interference and Diffraction", "Laser and Fiber Optics", "Quantum Mechanics"],
      'Applied Chemistry': ["Water Technology", "Corrosion and Its Prevention", "Fuels and Combustion"],
      'Engineering Mechanics': ["Resultant of Force Systems", "Equilibrium of Force Systems", "Centroid and Moment of Inertia", "Friction and Belt Drives"],
      'Basic Electrical and Electronics Engineering': ["DC Circuits", "Semiconductor Devices and Applications"],
      'Professional and Communicational Ethics': ["Engineering Ethics and Professionalism", "Technical Communication"],
    },
    'sem1_R19': {
      'Applied Mathematics I': ["Complex Numbers and Hyperbolic Functions", "Differential Calculus - I"],
      'Applied Physics I': ["Crystallography", "Band Theory of Solids"],
      'Applied Mathematics I': ["Electrochemistry", "Polymers"],
      'Engineering Mechanics': ["Resultant of Coplanar Force Systems"],
      'Basic Electrical and Electronics Engineering': ["AC Fundamentals"],
    },
    'sem2_NEP': {
      'Applied Mathematics II': ["Laplace Transform", "Fourier Series", "Vector Calculus"],
      'Applied Physics II': ["Superconductivity and Nanotechnology"],
      'Applied Chemistry II': ["Surface Chemistry and Catalysis"],
      'Engineering Graphics': ["Projections of Points and Lines"],
    },
    'sem3_R19': {
      'Applied Mathematics III': ["Laplace Transform", "Fourier Series", "Complex Variables", "Z-Transform"],
      'Mechanics of Solids': ["Stress and Strain", "Bending of Beams", "Deflection of Beams", "Torsion of Shafts", "Columns and Struts"],
      'Engineering Geology': ["Mineralogy", "Petrology", "Structural Geology and Geomorphology"],
      'Applied Practice in Building Design': ["Building Byelaws and Planning", "Building Components and Construction"],
      'Fluid Mechanics I': ["Properties of Fluid and Fluid Statics", "Kinematics and Dynamics of Fluid Flow"],
    },
    'sem4_R19': {
      'Applied Mathematics IV': ["Random Variables and Probability Distributions", "Sampling Theory and Hypothesis Testing", "Numerical Methods for Differential Equations"],
      'Structural Analysis': ["Influence Lines", "Arches", "Cables and Suspension Bridges", "Slope Deflection Method", "Moment Distribution Method"],
      'Surveying': ["Theodolite Surveying", "Tachymetry and Plane Table Surveying", "Curves"],
      'Building Materials and Construction Technology': ["Stones, Bricks and Lime", "Cement", "Concrete Technology"],
      'Fluid Mechanics II': ["Dimensional Analysis and Similitude", "Flow Through Pipes", "Open Channel Flow"],
    },
  },
 
  // ===== COMPUTER ENGINEERING =====
  'Computer Engineering': {
    'sem3': {
      'Applied Mathematics III': ["Laplace Transform", "Fourier Series", "Statistics and Probability", "Vector Calculus", "Complex Variables"],
      'Discrete Mathematics': ["Sets, Relations and Functions", "Mathematical Logic and Propositional Calculus", "Algebraic Structures (Groups and Lattices)", "Graph Theory"],
      'Data Structures': ["Introduction to Data Structures and Arrays", "Linked Lists", "Stacks and Queues", "Trees", "Graphs and Sorting"],
      'Digital Logic Design': ["Number Systems and Boolean Algebra", "Combinational Circuits", "Sequential Circuits"],
      'CSC305': ["Introduction and Output Primitives", "2D and 3D Transformations", "Clipping"],
    },
    'sem4': {
      'CSC401': ["Random Variables and Probability Distributions", "Sampling Theory and Estimation"],
      'CSC402': ["Introduction and Divide & Conquer", "Greedy Method", "Dynamic Programming", "Backtracking and Branch & Bound"],
      'CSC403': ["Introduction and ER Model", "Relational Model and SQL", "Normalization", "Transaction Management and Concurrency Control"],
      'CSC404': ["Process Management", "Memory Management", "File System and I/O Management"],
      'CSC405': ["8086 Architecture and Instruction Set", "Peripheral Interfacing and 8051"],
    },
  },
 
  // ===== INFORMATION TECHNOLOGY (IT) =====
  'Information Technology': {
    'sem1': {
      'M1': ["Complex Numbers and Functions", "Differential Calculus", "Integral Calculus", "Matrices", "Ordinary Differential Equations"],
      'PHY1': ["Interference and Diffraction", "Quantum Mechanics", "Lasers and Fibre Optics"],
      'CHEM1': ["Electrochemistry", "Polymers and Composites"],
      'EM': ["Statics", "Dynamics"],
      'BEE': ["DC Circuits", "AC Circuits and Transformers"],
    },
    'sem2': {
      'M2': ["Statistics and Probability", "Numerical Methods"],
      'PHY2': ["Dielectrics and Magnetics"],
      'CHEM2': ["Water Treatment"],
      'BEE2': ["Semiconductors and Diodes"],
    },
    'sem3': {
      'M3': ["Laplace Transform"],
      'DSA': ["Arrays and Linked Lists", "Sorting and Searching"],
      'DBMS': ["Relational Model and SQL", "NoSQL and Advanced Databases"],
      'POC': ["Analog Modulation"],
      'PCPF': ["OOP with Java"],
    },
    'sem4': {
      'M4': ["Complex Integration"],
      'AOA': ["Algorithm Design Paradigms", "Graph Algorithms"],
      'COA': ["CPU and Memory", "Input Output and Parallel Processing"],
      'OS': ["Process Management", "Memory and File Systems"],
      'MP': ["8086 Architecture"],
    },
  },
 
  // ===== MECHANICAL ENGINEERING =====
  'Mechanical Engineering': {
    'sem3': {
      'EMI': ["Laplace Transform", "Fourier Series", "Partial Differential Equations", "Complex Variables", "Probability and Statistics"],
      'T': ["Basic Concepts and Laws", "First Law of Thermodynamics", "Second Law of Thermodynamics", "Entropy", "Properties of Pure Substances"],
      'SOM': ["Simple Stresses and Strains", "Shear Force and Bending Moment", "Bending and Shear Stresses", "Torsion", "Deflection of Beams"],
      'PPI': ["Casting Process", "Special Casting Methods", "Welding Processes", "Metal Forming Processes", "Sheet Metal Operations"],
      'MS': ["Crystal Structure", "Crystal Imperfections", "Phase Diagrams", "Heat Treatment", "Engineering Materials"],
    },
    'sem4': {
      'EMI': ["Complex Integration", "Matrix Theory", "Correlation and Regression", "Probability Distributions", "Sampling Theory and Testing of Hypothesis"],
      'FM': ["Properties of Fluids", "Fluid Statics", "Fluid Kinematics", "Fluid Dynamics", "Flow Through Pipes"],
      'KOM': ["Fundamentals of Mechanisms", "Velocity and Acceleration Analysis", "Cams", "Gears", "Gear Trains"],
      'PPI': ["Theory of Metal Cutting", "Lathe Machine", "Drilling and Boring Machines", "Milling Machine", "Grinding and Finishing Processes"],
      'AT': ["Air Standard Cycles", "IC Engines", "Steam Nozzles and Turbines", "Gas Turbines", "Refrigeration and Air Conditioning"],
    },
  },
 
  // ===== ELECTRONICS ENGINEERING =====
  'Electronics Engineering': {
    'sem3': {
      'EMI': ["Laplace Transform", "Fourier Transform", "Z-Transform", "Vector Calculus", "Complex Variables"],
      'EDAC': ["Semiconductor Physics", "PN Junction Diode", "Bipolar Junction Transistor", "Field Effect Transistors", "Power Devices and Special Diodes"],
      'DCD': ["Number Systems and Boolean Algebra", "Combinational Logic Circuits", "Sequential Logic Circuits", "Counters", "Registers and Memory"],
      'ENA': ["Network Theorems", "Network Topology", "Transient Analysis", "Two-Port Networks", "Network Synthesis"],
      'EI': ["Measurement Fundamentals", "Analog Instruments", "Bridges and Potentiometers", "Oscilloscope", "Digital Instruments"],
    },
    'sem4': {
      'EMI': ["Complex Integration", "Probability and Random Variables", "Sampling Theory", "Vector Spaces and Linear Transformations", "Matrix Theory"],
      'LIC': ["Operational Amplifier Basics", "Op-Amp Applications", "Non-Linear Op-Amp Circuits", "Timers and PLL", "Data Converters"],
      'POCS': ["Introduction to Communication", "Amplitude Modulation", "Angle Modulation", "Pulse Modulation", "Digital Communication"],
      'CS': ["Introduction to Control Systems", "Time Domain Analysis", "Stability Analysis", "Root Locus Analysis", "Frequency Domain Analysis"],
      'MAM': ["8085 Microprocessor", "8085 Programming", "8085 Interfacing", "8051 Microcontroller", "8051 Programming and Interfacing"],
    },
  },
 
};


// // ─────────────────────────────────────────────────────────────
// // SUBJECT DROPDOWN UPDATER
// // Called whenever branch or semester selection changes
// // ─────────────────────────────────────────────────────────────
function updateSubjects() {
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const dropdown = document.getElementById("addSubjectSelect");

    // Reset subject dropdown
    dropdown.innerHTML = `<option selected disabled>Choose Subject</option>`;

    // Don't proceed if either dropdown is still on the placeholder
    if (!branch || branch === "Choose Branch" || !semester || semester === "Choose Semester") return;

    const subjects = subjectMap[branch]?.[semester];

    if (!subjects || subjects.length === 0) {
        dropdown.innerHTML += `<option disabled>No subjects available for this combination</option>`;
        return;
    }

    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        dropdown.appendChild(option);
    });
}



// ─────────────────────────────────────────────────────────────
// ATTACH LISTENERS after DOM is ready
// subjectMap is defined above so it is always available here
// ─────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("branch").addEventListener("change", updateSubjects);
    document.getElementById("semester").addEventListener("change", updateSubjects);
});

// Data structure for Branch → Subject → Chapters
const data = {
    "Computer Engineering": {
        "Database Management Systems": ["Introduction", "ER Model", "Normalization", "SQL Queries"],
        "Operating System": ["Processes", "Memory Management", "File System"]
    },
    "Information Technology": {
        "Web Development": ["HTML", "CSS", "JavaScript", "Bootstrap"],
        "Data Structures": ["Arrays", "Linked List", "Stack", "Queue"]
    },
    "Mechanical": {
        "Thermodynamics": ["Laws", "Entropy", "Cycles"]
    }
};

// Get elements
const branchSelect = document.getElementById("branch");
const subjectSelect = document.getElementById("addSubjectSelect");
const chapterSelect = document.getElementById("chapterSelect");

// When branch changes → load subjects
branchSelect.addEventListener("change", function () {
    const branch = this.value;

    subjectSelect.innerHTML = `<option selected disabled>Choose Subject</option>`;
    chapterSelect.innerHTML = `<option selected disabled>Choose Chapter</option>`;

    if (data[branch]) {
        Object.keys(data[branch]).forEach(subject => {
            let option = document.createElement("option");
            option.value = subject;
            option.textContent = subject;
            subjectSelect.appendChild(option);
        });
    }
});

// When subject changes → load chapters
subjectSelect.addEventListener("change", function () {
    const branch = branchSelect.value;
    const subject = this.value;

    chapterSelect.innerHTML = `<option selected disabled>Choose Chapter</option>`;

    if (data[branch] && data[branch][subject]) {
        data[branch][subject].forEach(chapter => {
            let option = document.createElement("option");
            option.value = chapter;
            option.textContent = chapter;
            chapterSelect.appendChild(option);
        });
    }
});


// ─────────────────────────────────────────────────────────────
// SECTION BUILDER
// ─────────────────────────────────────────────────────────────
let sectionCount = 0;

function addSection() {
    sectionCount++;

    const sectionHTML = `
    <div class="section-card p-3 mb-3">
        <h6>Section ${sectionCount}</h6>
        <input type="number" class="form-control mb-2 questions" placeholder="No. of Questions" min="1" required>
        <select class="form-select mb-2 marks">
            <option value="2">2 Marks</option>
            <option value="3">3 Marks</option>
            <option value="5">5 Marks</option>
            <option value="10">10 Marks</option>
        </select>
    </div>
    `;

    document.getElementById("sectionsContainer").insertAdjacentHTML("beforeend", sectionHTML);
}


// ─────────────────────────────────────────────────────────────
// FORM SUBMIT — sends data to backend
// ─────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("classConfigForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const branch = document.getElementById("branch").value;
        const semester = document.getElementById("semester").value;
        const subject = document.getElementById("addSubjectSelect").value;
        const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

        if (!subject || subject === "Choose Subject") {
            alert("Please select a subject.");
            return;
        }

        const questions = document.querySelectorAll(".questions");
        const marks = document.querySelectorAll(".marks");

        if (questions.length === 0) {
            alert("Please add at least one section.");
            return;
        }

        let sections = [];
        for (let i = 0; i < questions.length; i++) {
            sections.push({
                numQuestions: questions[i].value,
                marks: marks[i].value
            });
        }

        try {
            const response = await fetch("http://localhost:5000/generate-paper", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ branch, subject, semester, difficulty, sections })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Server error:", errorText);
                alert("Server error: " + errorText);
                return; 
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            document.getElementById("pdfPreview").src = url;
            document.getElementById("previewSection").style.display = "block";
            document.getElementById("downloadBtn").href = url;

        } catch (error) {
            console.error("Error generating paper:", error);
            alert("Failed to generate paper. Please try again.");
        }
//     document.getElementById("classConfigForm").addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const branch = document.getElementById("branch").value;
//     const semester = document.getElementById("semester").value;
//     const subject = document.getElementById("addSubjectSelect").value;
//     const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

//     const questions = document.querySelectorAll(".questions");
//     const marks = document.querySelectorAll(".marks");

//     let sections = [];

//     for (let i = 0; i < questions.length; i++) {
//         sections.push({
//             numQuestions: questions[i].value,
//             marks: marks[i].value
//         });
//     }

//     try {
//         const response = await fetch("http://localhost:5000/generate-paper", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 branch,
//                 semester,
//                 subject,
//                 difficulty,
//                 sections
//             })
//         });

//         if (!response.ok) {
//             const err = await response.text();
//             alert("Error: " + err);
//             return;
//         }

//         const blob = await response.blob();
//         const url = window.URL.createObjectURL(blob);

//         // Show PDF preview
//         document.getElementById("pdfPreview").src = url;

//         // Enable download
//         document.getElementById("downloadBtn").href = url;

//     } catch (err) {
//         console.error(err);
//         alert("Failed to connect to server");
//     }
// });
    });
});

