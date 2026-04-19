
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/generate-paper", (req, res) => {
    try {
        const { branch, semester, subject, difficulty, sections } = req.body;

        const branchFileMap = {
            "Information Technology": "it.json",
            "Computer Engineering": "computer.json",
            "Mechanical Engineering": "mechanical.json",
            "Civil Engineering": "civil.json",
            "Electrical Engineering": "electrical.json",
            "Data Engineering": "computer.json",
            "First Year Engineering": "fe.json"
        };

        const fileName = branchFileMap[branch];
        if (!fileName) {
            return res.status(400).json({ error: "Invalid branch" });
        }

        const filePath = path.join(__dirname, "data", fileName);

        if (!fs.existsSync(filePath)) {
            return res.status(500).json({ error: "JSON file not found" });
        }

        // ✅ DEFINE data HERE (only once)
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        const semNumber = parseInt(semester.split(" ")[1]);

        const semesterData = data.semesters.find(s => s.semester === semNumber);

        if (!semesterData) {
            return res.status(400).json({ error: "Semester not found" });
        }

        const cleanInputSubject = subject.replace(/\s+/g, " ").trim().toLowerCase();

        const subjectData = semesterData.subjects.find(
            s => s.subject_name.replace(/\s+/g, " ").trim().toLowerCase() === cleanInputSubject
        );

        if (!subjectData) {
            console.log("Available subjects:", semesterData.subjects.map(s => s.subject_name));
            return res.status(400).json({ error: "Subject not found" });
        }

        const modules = subjectData.modules;

        let finalPaper = { sections: [] };

        sections.forEach((section, index) => {
            const marks = parseInt(section.marks);
            const numQ = parseInt(section.numQuestions);

            let pool = [];

            modules.forEach(mod => {
                mod.questions.forEach(q => {
                    if (
                        q.marks === marks &&
                        q.difficulty.toLowerCase() === difficulty.toLowerCase()
                    ) {
                        pool.push(q.question);
                    }
                });
            });

            pool.sort(() => 0.5 - Math.random());

            const selected = pool.slice(0, numQ);

            finalPaper.sections.push({
                sectionLabel: String.fromCharCode(65 + index),
                marks: marks,
                questions: selected
            });
        });

        generatePDF(finalPaper, branch, semester, subject, res);

    } catch (err) {
        console.error("ERROR:", err);
        res.status(500).json({ error: err.message });
    }
});

function generatePDF(paper, branch, semester, subject, res) {
    const doc = new PDFDocument();

    res.setHeader("Content-Type", "application/pdf");
    doc.pipe(res);

    doc.fontSize(16).text("Question Paper", { align: "center" });
    doc.moveDown();
    doc.text(`Branch: ${branch}`);
    doc.text(`Semester: ${semester}`);
    doc.text(`Subject: ${subject}`);
    doc.moveDown();

    paper.sections.forEach(sec => {
        doc.text(`Section ${sec.sectionLabel} (${sec.marks} marks)`);
        doc.moveDown(0.5);

        sec.questions.forEach((q, i) => {
            doc.text(`${i + 1}. ${q}`);
            doc.moveDown(0.5);
        });

        doc.moveDown();
    });

    doc.end();
}

app.get("/", (req, res) => {
    res.send("Server running ✅");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const bcrypt = require("bcryptjs");
const { use } = require("react");

// 🔹 SIGN UP
app.post("/signup", (req, res) => {
    const { name, email, branch, password } = req.body;

    const filePath = path.join(__dirname, "data", "users.json");
    let users = [];
    if (fs.existsSync(filePath)) {
        users = JSON.parse(fs.readFileSync(filePath));
    }
    // let users = JSON.parse(fs.readFileSync(filePath));

    // Check if user exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    users.push({
        name,
        email,
        password: hashedPassword
    });

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.json({ message: "Signup successful" });
});