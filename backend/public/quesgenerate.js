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
    document.getElementById("classConfigForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const subject = document.getElementById("addSubjectSelect").value;
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

    const questions = document.querySelectorAll(".questions");
    const marks = document.querySelectorAll(".marks");

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
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                branch,
                semester,
                subject,
                difficulty,
                sections
            })
        });

        if (!response.ok) {
            const err = await response.text();
            alert("Error: " + err);
            return;
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Show PDF preview
        document.getElementById("pdfPreview").src = url;

        // Enable download
        document.getElementById("downloadBtn").href = url;

    } catch (err) {
        console.error(err);
        alert("Failed to connect to server");
    }
});
    });
});

