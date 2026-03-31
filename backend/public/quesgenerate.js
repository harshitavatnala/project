// const numInput = document.getElementById('numQuestions');
// const marksInput = document.getElementById('marksPerQuest');
// const display = document.getElementById('totalMarksDisplay');

// function updateTotal(){
// const total = (numInput.value || 0) * (marksInput.value || 0);
// display.innerText = total;
// }

// numInput.addEventListener('input',updateTotal);
// marksInput.addEventListener('change',updateTotal);

// let sectionCount = 0;

// function addSection(){
//     sectionCount++;

//     const sectionHTML = `
//     <div class="card p-3 mb-3">
//         <h6>Section ${sectionCount}</h6>

//         <input type="number" class="form-control mb-2 questions" placeholder="No. of Questions">

//         <select class="form-select mb-2 marks">
//             <option value="1">1 Mark</option>
//             <option value="2">2 Marks</option>
//             <option value="5">5 Marks</option>
//             <option value="10">10 Marks</option>
//         </select>
//     </div>
//     `;

//     document.getElementById("sectionsContainer").insertAdjacentHTML("beforeend", sectionHTML);
// }

// document.getElementById("classConfigForm").addEventListener("submit", async function(e){
//     e.preventDefault();

//     const subject = document.getElementById("subjectInput").value;
//     const semester = document.getElementById("semester").value;

//     const questions = document.querySelectorAll(".questions");
//     const marks = document.querySelectorAll(".marks");

//     let sections = [];

//     for(let i=0;i<questions.length;i++){
//         sections.push({
//             numQuestions: questions[i].value,
//             marks: marks[i].value
//         });
//     }

//     // Send to backend
//     const response = await fetch("http://localhost:5000/generate-paper", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             branch: document.getElementById("branch").value,
//             subject,
//             semester,
//             sections
//         })
//     });

//     const data = await response.json();

//     document.getElementById("output").innerHTML = data.paper;
//     document.getElementById("outputSection").style.display="block";
// });
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("branch").addEventListener("change", updateSubjects);
    document.getElementById("semester").addEventListener("change", updateSubjects);
});
// 🎯 SUBJECT MAP
const subjectMap = {
    "First Year Engineering": {
        "Semester 1": ["Applied Mathematics I", "Applied Physics I", "Applied Chemistry I", "Basic Electrical and Electronics Engineering", "Engineering Mechanics", "Professional and Communication Ethics"],
        "Semester 2": ["Applied Mathematics II", "Semiconductor Physics", "Data Structure", "Elements of electrical systems", "Elements of Mechanical Engineering", "Elements of Telecommunication", "Engineering Materials", "Environmental Chemistry and Non-Conventional Energy Sources", "Introduction to Chemical Engineering", "Physics of Measurements and Sensors"]
    },

    "Computer Engineering": {
        "Semester 3": ["Digital Logic and Computer Architecture", "Data Structure", "Discrete Structures and Graph Theory", "Engineering Mathematics III"],
        "Semester 4": ["Analysis of Algorithm", "Database Management System", "Engineering Mathematics IV", "Operating System"]
    },

    "Information Technology": {
        "Semester 3": ["Data Structure Analysis", "Database Management System", "Principle of Communication", "Engineering Mathematics III"],
        "Semester 4": ["Automata Theory", "Computer Network and Network Design", "Engineering Mathematics IV", "Computer Organization and Architecture", "Operating System"]
    },

    "Data Engineering": {
        "Semester 3": ["Digital Logic and Computer Architecture", "Data Structure", "Discrete Structures and Graph Theory", "Engineering Mathematics III"],
        "Semester 4": ["Analysis of Algorithm", "Database Management System", "Engineering Mathematics IV", "Operating System"]
    },

    "Mechanical Engineering": {
        "Semester 3": ["Engineering Mathematics III", "Material Metallurgy", "Thermodynamics", "Production Processes", "Strength of Materials"],
        "Semester 4": ["CAD/CAM", "Engineering Mathematics IV", "Fluid Mechanics", "Industrial Electronics", "Kinematics of Machinery"]
    },

    "Civil Engineering": {
        "Semester 3": ["Architectural Planning and Design of Buildings", "Building Materials and Construction", "Engineering Mathematics III", "Structural Analysis I", "Surveying I"],
        "Semester 4": ["Building Services", "Engineering Mathematics IV", "Structural Analysis II", "Surveying II", "Transportation Engineering"]
    },

    "Electrical Engineering": {
        "Semester 3": ["Engineering Mathematics III", "Electrical Circuit Analysis", "Electrical Machines I", "Electronic Devices and Circuits", "Signals and Systems"],
        "Semester 4": ["Engineering Mathematics IV", "Electrical Machines II", "Control Systems", "Power Systems I", "Power Electronics"]
    }
};

// document.getElementById("branch").addEventListener("change", updateSubjects);
//     document.getElementById("semester").addEventListener("change", updateSubjects);

function updateSubjects() {


    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const dropdown = document.getElementById("addSubjectSelect");

    dropdown.innerHTML = `<option selected disabled>Choose Subject</option>`;

    if (!branch || !semester) return;

    const subjects = subjectMap[branch]?.[semester];

    if (!subjects) {
        dropdown.innerHTML += `<option>No subjects available</option>`;
        return;
    }

    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        dropdown.appendChild(option);
    });
    // try (error) {
    //         console.error("Error:", error);
    //         alert("Something went wrong!");
}
// 🎯 SECTION BUILDER
let sectionCount = 0;

function addSection() {

    sectionCount++;

    const sectionHTML = `
    <div class="section-card p-3 mb-3">
        <h6>Section ${sectionCount}</h6>

        <input type="number" class="form-control mb-2 questions" placeholder="No. of Questions" required>

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


// 🎯 FORM SUBMIT
document.getElementById("classConfigForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const subject = document.getElementById("addSubjectSelect").value;
    const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

    if (!subject) {
        alert("Please select a subject.");
        return;
    }
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
                subject,
                semester,
                difficulty,
                sections
            })
        });

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Show preview
        document.getElementById("pdfPreview").src = url;
        document.getElementById("previewSection").style.display = "block";

        // Download button
        document.getElementById("downloadBtn").href = url;

    } catch (error) {
        console.error("Error generating paper:", error);
        alert("Failed to generate paper. Please try again.");
    }



});