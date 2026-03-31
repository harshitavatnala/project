const PDFDocument = require("pdfkit");
const fs = require("fs");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("public"));
// Test route
app.get("/api", (req, res) => {
    res.send("Backend is working 🚀");
});

// Question bank
const questionBank = {
    "Data Structures": [
        "Explain Stack",
        "What is Queue?",
        "Define Linked List",
        "Explain Trees",
        "What is Graph?"
    ]
};

app.post("/generate-paper", (req, res) => {

    const { subject, semester, sections } = req.body;

    let filePath = path.join(__dirname, "data",branchFiles[branch]);

    if(branch === "First Year Engineering") filePath = "firstyear.json";
    else if(branch === "Computer Engineering") filePath = "computer.json";
    else if(branch === "Information Technology") filePath = "it.json";
    else if(branch === "Electronics") filePath = "electronics.json";
    else if(branch === "Mechanical") filePath = "mechanical.json";
    else if(branch === "Civil") filePath = "civil.json";
    else if(branch === "Data Engineering") filePath = "data.json";

    let questionBank = JSON.parse(fs.readFileSync(filePath));

    let questionsArr = [];
    let sectionLabel = "A";
    let questionCount = 1;

    sections.forEach(section => {

        for(let i = 1; i <= section.numQuestions; i++) {

        let questions = questionBank[semester][subject] || [];

// Filter by difficulty
let easy = questions.filter(q => q.difficulty === "easy");
let medium = questions.filter(q => q.difficulty === "medium");

// Combine
let filtered = [...easy, ...medium];

// Fallback if empty
if(filtered.length === 0){
    filtered = questions;
}

// Pick random
let randomQ = filtered[Math.floor(Math.random() * filtered.length)];
            questionsArr.push({
                qNo: questionCount,
                text: randomQ,
                marks: section.marks,
                section: sectionLabel
            });

            questionCount++;
        }

        sectionLabel = String.fromCharCode(sectionLabel.charCodeAt(0) + 1);
    });

    // 📄 Create PDF
    const doc = new PDFDocument();
    const paper = `generated_${Date.now()}.pdf`;

    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // 🎯 Title
    doc.fontSize(16).text("Mumbai University", { align: "center" });
    doc.moveDown();
    doc.text(`${subject} - ${semester}`, { align: "center" });
    doc.moveDown();
    doc.text("Time: 2 Hours      Max Marks: 60");
    doc.moveDown();

    // 🎯 Questions
    let currentSection = "";

    questionsArr.forEach(q => {

        if (currentSection !== q.section) {
            doc.moveDown();
            doc.text(`Section ${q.section}`, { underline: true });
            currentSection = q.section;
        }

        doc.text(`Q${q.qNo}. ${q.text} (${q.marks} Marks)`);
    });

    doc.end();

    // 📥 Send file after creation
    stream.on("finish", () => {
        res.download(filePath);
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});