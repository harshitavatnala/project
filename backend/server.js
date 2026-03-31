// // const PDFDocument = require("pdfkit");
// // const fs = require("fs");

// // const express = require("express");
// // const cors = require("cors");

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // app.use(express.static("public"));
// // // Test route
// // app.get("/api", (req, res) => {
// //     res.send("Backend is working 🚀");
// // });

// // // Question bank
// // const questionBank = {
// //     "Data Structures": [
// //         "Explain Stack",
// //         "What is Queue?",
// //         "Define Linked List",
// //         "Explain Trees",
// //         "What is Graph?"
// //     ]
// // };

// // app.post("/generate-paper", (req, res) => {

// //     const { subject, semester, sections } = req.body;

// //     let filePath = path.join(__dirname, "data",branchFiles[branch]);

// //     if(branch === "First Year Engineering") filePath = "firstyear.json";
// //     else if(branch === "Computer Engineering") filePath = "computer.json";
// //     else if(branch === "Information Technology") filePath = "it.json";
// //     else if(branch === "Electronics") filePath = "electronics.json";
// //     else if(branch === "Mechanical") filePath = "mechanical.json";
// //     else if(branch === "Civil") filePath = "civil.json";
// //     else if(branch === "Data Engineering") filePath = "data.json";

// //     let questionBank = JSON.parse(fs.readFileSync(filePath));

// //     let questionsArr = [];
// //     let sectionLabel = "A";
// //     let questionCount = 1;

// //     sections.forEach(section => {

// //         for(let i = 1; i <= section.numQuestions; i++) {

// //         let questions = questionBank[semester][subject] || [];

// // // Filter by difficulty
// // let easy = questions.filter(q => q.difficulty === "easy");
// // let medium = questions.filter(q => q.difficulty === "medium");

// // // Combine
// // let filtered = [...easy, ...medium];

// // // Fallback if empty
// // if(filtered.length === 0){
// //     filtered = questions;
// // }

// // // Pick random
// // let randomQ = filtered[Math.floor(Math.random() * filtered.length)];
// //             questionsArr.push({
// //                 qNo: questionCount,
// //                 text: randomQ,
// //                 marks: section.marks,
// //                 section: sectionLabel
// //             });

// //             questionCount++;
// //         }

// //         sectionLabel = String.fromCharCode(sectionLabel.charCodeAt(0) + 1);
// //     });

// //     // 📄 Create PDF
// //     const doc = new PDFDocument();
// //     const paper = `generated_${Date.now()}.pdf`;

// //     const stream = fs.createWriteStream(filePath);
// //     doc.pipe(stream);

// //     // 🎯 Title
// //     doc.fontSize(16).text("Mumbai University", { align: "center" });
// //     doc.moveDown();
// //     doc.text(`${subject} - ${semester}`, { align: "center" });
// //     doc.moveDown();
// //     doc.text("Time: 2 Hours      Max Marks: 60");
// //     doc.moveDown();

// //     // 🎯 Questions
// //     let currentSection = "";

// //     questionsArr.forEach(q => {

// //         if (currentSection !== q.section) {
// //             doc.moveDown();
// //             doc.text(`Section ${q.section}`, { underline: true });
// //             currentSection = q.section;
// //         }

// //         doc.text(`Q${q.qNo}. ${q.text} (${q.marks} Marks)`);
// //     });

// //     doc.end();

// //     // 📥 Send file after creation
// //     stream.on("finish", () => {
// //         res.download(filePath);
// //     });

// // });

// // app.listen(5000, () => {
// //     console.log("Server running on port 5000");
// // });

// require("dotenv").config();
// console.log("API Key Loaded:", !!process.env.ANTHROPIC_API_KEY ? "YES" : "NO");
// const express = require("express");
// const cors = require("cors");
// const PDFDocument = require("pdfkit");
// const Anthropic = require("@anthropic-ai/sdk");

// const client = new Anthropic({apiKey: process.env.ANTHROPIC_API_KEY});
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());


// // ─────────────────────────────────────────────
// // Helper: Build prompt for Claude
// // ─────────────────────────────────────────────
// function buildPrompt({ branch, semester, subject, difficulty, sections }) {
//   const sectionDescriptions = sections
//     .map(
//       (s, i) =>
//         `Section ${String.fromCharCode(65 + i)}: ${s.numQuestions} question(s) of ${s.marks} marks each`
//     )
//     .join("\n");

//   return `You are an expert professor creating a university-level engineering question paper.

// Details:
// - Branch: ${branch}
// - Semester: ${semester}
// - Subject: ${subject}
// - Difficulty: ${difficulty}

// Paper Structure:
// ${sectionDescriptions}

// Instructions:
// 1. Generate exactly the number of questions specified per section.
// 2. Questions must be appropriate for the subject and difficulty level.
// 3. Format your response STRICTLY as valid JSON in this exact structure:

// {
//   "sections": [
//     {
//       "sectionLabel": "A",
//       "marks": 2,
//       "questions": [
//         "Question text here?",
//         "Another question here?"
//       ]
//     }
//   ]
// }

// Only return valid JSON. No extra text, no markdown, no explanation.`;
// }

// // ─────────────────────────────────────────────
// // Helper: Generate PDF from structured data
// // ─────────────────────────────────────────────
// function generatePDF({ branch, semester, subject, difficulty, paperData }, res) {
//   const doc = new PDFDocument({ margin: 60 });

//   // Set response headers for PDF download
//   res.setHeader("Content-Type", "application/pdf");
//   res.setHeader(
//     "Content-Disposition",
//     `attachment; filename="question-paper-${subject.replace(/\s+/g, "-")}.pdf"`
//   );

//   doc.pipe(res);

//   // ── HEADER ──────────────────────────────────
//   doc
//     .fontSize(16)
//     .font("Helvetica-Bold")
//     .text("EDU TECH — ENGINEERING QUESTION PAPER", { align: "center" });

//   doc.moveDown(0.4);
//   doc
//     .fontSize(11)
//     .font("Helvetica")
//     .text(`Branch: ${branch}   |   ${semester}`, { align: "center" });

//   doc.moveDown(0.2);
//   doc.text(`Subject: ${subject}   |   Difficulty: ${difficulty.toUpperCase()}`, {
//     align: "center",
//   });

//   // Total marks calculation
//   const totalMarks = paperData.sections.reduce((sum, section) => {
//     return sum + section.marks * section.questions.length;
//   }, 0);

//   doc.moveDown(0.2);
//   doc.text(`Total Marks: ${totalMarks}`, { align: "center" });

//   // Horizontal rule
//   doc.moveDown(0.5);
//   doc
//     .moveTo(60, doc.y)
//     .lineTo(doc.page.width - 60, doc.y)
//     .strokeColor("#333333")
//     .lineWidth(1)
//     .stroke();

//   doc.moveDown(0.3);
//   doc
//     .fontSize(9)
//     .font("Helvetica-Oblique")
//     .text("Instructions: Answer all questions. Write clearly and legibly.", {
//       align: "left",
//     });

//   doc.moveDown(0.8);

//   // ── SECTIONS ────────────────────────────────
//   paperData.sections.forEach((section) => {
//     // Section heading
//     doc
//       .fontSize(12)
//       .font("Helvetica-Bold")
//       .text(
//         `Section ${section.sectionLabel}   [${section.marks} Mark${section.marks > 1 ? "s" : ""} each]`,
//         { underline: true }
//       );

//     doc.moveDown(0.4);

//     // Questions
//     section.questions.forEach((question, idx) => {
//       doc
//         .fontSize(11)
//         .font("Helvetica")
//         .text(`Q${idx + 1}.  ${question}`, {
//           indent: 10,
//           lineGap: 3,
//         });

//       doc.moveDown(0.6);
//     });

//     doc.moveDown(0.5);
//   });

//   // ── FOOTER ──────────────────────────────────
//   doc
//     .moveTo(60, doc.y)
//     .lineTo(doc.page.width - 60, doc.y)
//     .strokeColor("#aaaaaa")
//     .lineWidth(0.5)
//     .stroke();

//   doc.moveDown(0.3);
//   doc
//     .fontSize(9)
//     .font("Helvetica-Oblique")
//     .fillColor("#666666")
//     .text("Generated by Edu Tech Question Paper Generator", { align: "center" });

//   doc.end();
// }

// // ─────────────────────────────────────────────
// // POST /generate-paper
// // ─────────────────────────────────────────────
// // app.post("/generate-paper", async (req, res) => {
// //   const { branch, semester, subject, difficulty, sections } = req.body;

// //   // Basic validation
// //   if (!branch || !semester || !subject || !difficulty || !sections || sections.length === 0) {
// //     return res.status(400).json({ error: "Missing required fields." });
// //   }

// //   for (const section of sections) {
// //     if (!section.numQuestions || !section.marks) {
// //       return res.status(400).json({ error: "Each section must have numQuestions and marks." });
// //     }
// //   }

// //   try {
// //     // 1. Ask Claude to generate questions
// //     const prompt = buildPrompt({ branch, semester, subject, difficulty, sections });

// //     const message = await client.messages.create({
// //       model: "claude-sonnet-4-20250514",
// //       max_tokens: 2000,
// //       messages: [{ role: "user", content: prompt }],
// //     });

// //     const rawText = message.content
// //       .filter((block) => block.type === "text")
// //       .map((block) => block.text)
// //       .join("");

// //     // 2. Parse JSON response from Claude
// //     let paperData;
// //     try {
// //       // Strip markdown code fences if present
// //       const cleaned = rawText.replace(/```json|```/g, "").trim();
// //       paperData = JSON.parse(cleaned);
// //     } catch (parseErr) {
// //       console.error("Failed to parse Claude response:\n", rawText);
// //       return res.status(500).json({ error: "Failed to parse AI response. Please try again." });
// //     }

// //     // 3. Generate and stream PDF
// //     generatePDF({ branch, semester, subject, difficulty, paperData }, res);

// //   } catch (err) {
// //     console.error("Server error:", err);
// //     if (!res.headersSent) {
// //       res.status(500).json({ error: "Internal server error. Please try again." });
// //     }
// //   }
// // });

// // // ─────────────────────────────────────────────
// // // Health check
// // // ─────────────────────────────────────────────
// // app.get("/", (req, res) => {
// //   res.json({ status: "Edu Tech Backend is running ✅" });
// // });

// // app.listen(PORT, () => {
// //   console.log(`✅ Server running at http://localhost:${PORT}`);


// // });
// // const express = require("express");
// const fs = require("fs");
// const path = require("path");

// app.post("/generate-paper", (req, res) => {
//     try {
//         const { branch, subject, semester, difficulty, sections } = req.body;

//         // 🧠 STEP 1: Map branch → file
//         const branchFileMap = {
//             "Information Technology": "it.json",
//             "Computer Engineering": "computer.json",
//             "Mechanical Engineering": "mechanical.json",
//             "Civil Engineering": "civil.json",
//             "Electrical Engineering": "electrical.json",
//             "Data Engineering": "computer.json",
//             "First Year Engineering": "fe.json"
//         };

//         const fileName = branchFileMap[branch];

//         if (!fileName) {
//             return res.status(400).json({ error: "Invalid branch selected" });
//         }

//         const filePath = path.join(__dirname, "data", fileName);

//         if (!fs.existsSync(filePath)) {
//             return res.status(500).json({ error: "Question file not found" });
//         }

//         const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

//         // 🧠 STEP 2: Normalize names (VERY IMPORTANT)
//         const subjectKey = subject.replace(/\s+/g, "_"); 
//         const semesterKey = semester.toLowerCase().replace(" ", "_"); 

//         // 🧠 STEP 3: Access correct part of JSON
//         const subjectData = data.semesters[semesterKey]?.subjects[subjectKey];

//         if (!subjectData) {
//             return res.status(400).json({ error: "Subject not found in JSON" });
//         }

//         const modules = subjectData.modules;

//         let finalQuestions = [];

//         // 🧠 STEP 4: Loop through sections
//         sections.forEach(section => {
//             const marksKey = `${section.marks}_marks`;

//             for (let moduleName in modules) {
//                 const module = modules[moduleName];

//                 if (module[difficulty] && module[difficulty][marksKey]) {
//                     const qs = module[difficulty][marksKey];

//                     // take required number of questions
//                     finalQuestions.push(...qs.slice(0, section.numQuestions));
//                 }
//             }
//         });

//         if (finalQuestions.length === 0) {
//             return res.status(400).json({ error: "No questions found" });
//         }

//         // 👉 TEMP (for testing)
//         res.json({ questions: finalQuestions });

//         // 👉 Later replace with PDF generation

//     } catch (err) {
//         console.error("Backend Error:", err);
//         res.status(500).json({ error: err.message });
//     }
// });

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const PDFDocument = require("pdfkit");
// const fs = require("fs");
// const path = require("path");
// const app = express();
// const PORT = process.env.PORT ||5000;

// app.use(cors());
// app.use(express.json());


// function buildPrompt({ branch, semester, subject, difficulty, sections }) {
//   const sectionDescriptions = sections
//     .map((s, i) => `Section ${String.fromCharCode(65 + i)}: ${s.numQuestions} question(s) of ${s.marks} marks each`)
//     .join("\n");

//   return `You are an expert professor creating a university-level engineering question paper.
// Details:
// - Branch: ${branch}
// - Semester: ${semester}
// - Subject: ${subject}
// - Difficulty: ${difficulty}
// Paper Structure:
// ${sectionDescriptions}
// Instructions:
// 1. Generate exactly the number of questions specified per section.
// 2. Questions must be appropriate for the subject and difficulty level.
// 3. Format your response STRICTLY as valid JSON:
// {
//   "sections": [
//     { "sectionLabel": "A", "marks": 2, "questions": ["Question text?"] }
//   ]
// }
// Only return valid JSON. No extra text, no markdown.`;
// }

// function generatePDF({ branch, semester, subject, difficulty, paperData }, res) {
//   const doc = new PDFDocument({ margin: 60 });
//   res.setHeader("Content-Type", "application/pdf");
//   res.setHeader("Content-Disposition", `attachment; filename="question-paper.pdf"`);
//   doc.pipe(res);

//   doc.fontSize(16).font("Helvetica-Bold").text("EDU TECH — ENGINEERING QUESTION PAPER", { align: "center" });
//   doc.moveDown(0.4);
//   doc.fontSize(11).font("Helvetica").text(`Branch: ${branch}   |   ${semester}`, { align: "center" });
//   doc.moveDown(0.2);
//   doc.text(`Subject: ${subject}   |   Difficulty: ${difficulty.toUpperCase()}`, { align: "center" });

//   const totalMarks = paperData.sections.reduce((sum, s) => sum + s.marks * s.questions.length, 0);
//   doc.moveDown(0.2);
//   doc.text(`Total Marks: ${totalMarks}`, { align: "center" });
//   doc.moveDown(0.5);
//   doc.moveTo(60, doc.y).lineTo(doc.page.width - 60, doc.y).stroke();
//   doc.moveDown(0.8);

//   paperData.sections.forEach((section) => {
//     doc.fontSize(12).font("Helvetica-Bold").text(`Section ${section.sectionLabel}   [${section.marks} Mark(s) each]`, { underline: true });
//     doc.moveDown(0.4);
//     section.questions.forEach((q, idx) => {
//       doc.fontSize(11).font("Helvetica").text(`Q${idx + 1}.  ${q}`, { indent: 10, lineGap: 3 });
//       doc.moveDown(0.6);
//     });
//     doc.moveDown(0.5);
//   });

//   doc.fontSize(9).font("Helvetica-Oblique").fillColor("#666666").text("Generated by Edu Tech Question Paper Generator", { align: "center" });
//   doc.end();
// }

// app.post("/generate-paper", async (req, res) => {
//   const { branch, semester, subject, difficulty, sections } = req.body;

//   if (!branch || !semester || !subject || !difficulty || !sections?.length) {
//     return res.status(400).json({ error: "Missing required fields." });
//   }

//   try {
//     const prompt = buildPrompt({ branch, semester, subject, difficulty, sections });
//     const message = await client.messages.create({
//       model: "claude-sonnet-4-6", // ✅ correct model
//       max_tokens: 2000,
//       messages: [{ role: "user", content: prompt }],
//     });

//     const rawText = message.content.filter(b => b.type === "text").map(b => b.text).join("");
//     const cleaned = rawText.replace(/```json|```/g, "").trim();
//     const paperData = JSON.parse(cleaned);

//     generatePDF({ branch, semester, subject, difficulty, paperData }, res);
//   } catch (err) {
//     console.error("Server error:", err);
//     if (!res.headersSent) res.status(500).json({ error: "Internal server error." });
//   }
// });

// app.get("/", (req, res) => res.json({ status: "Edu Tech Backend running ✅" }));
// app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 🔹 Generate Paper Route
app.post("/generate-paper", (req, res) => {
    try {
        const { branch, semester, subject, difficulty, sections } = req.body;

        console.log("REQ:", req.body);

        // 🔹 Map branch to file
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
        if (!fileName) return res.status(400).json({ error: "Invalid branch" });

        const filePath = path.join(__dirname, "data", fileName);
 // 🔹 Convert "Semester 3" → 3
        const semNumber = parseInt(semester.split(" ")[1]);

        // 🔹 Find semester
        const semesterData = data.semesters.find(s => s.semester === semNumber);

        if (!semesterData) {
            return res.status(400).json({ error: "Semester not found" });
        }

        // 🔹 Normalize subject names (handles extra spaces)
        const cleanInputSubject = subject.replace(/\s+/g, " ").trim().toLowerCase();

        const subjectData = semesterData.subjects.find(
            s => s.subject_name.replace(/\s+/g, " ").trim().toLowerCase() === cleanInputSubject
        );
        // if (!fs.existsSync(filePath)) {
        //     return res.status(500).json({ error: "JSON file not found" });
        // }

        // const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        // // 🔹 Normalize
        // const subjectKey = subject.replace(/\s+/g, "_");
        // const semesterKey = semester.toLowerCase().replace(" ", "_");

        // const subjectData = data.semesters[semesterKey]?.subjects[subjectKey];

        if (!subjectData) {
            return res.status(400).json({ error: "Subject not found" });
        }

        const modules = subjectData.modules;

        let finalPaper = { sections: [] };

        sections.forEach((section, index) => {
            const marksKey = `${section.marks}_marks`;
            const numQ = parseInt(section.numQuestions);

            let pool = [];

           modules.forEach(mod => {
            mod.questions.forEach(q => {
              if (
                q.marks === marksKey &&
                q.difficulty.toLowerCase() === difficulty.toLowerCase()
              ) {
                pool.push({ q: q.question, marks: section.marks });
              }
              
           });  });

            // Shuffle
            pool.sort(() => 0.5 - Math.random());

            const selected = pool.slice(0, numQ).map(q => q.q);

            finalPaper.sections.push({
                sectionLabel: String.fromCharCode(65 + index),
                marks: section.marks,
                questions: selected
            });
        });

        generatePDF(finalPaper, branch, semester, subject, res);

    } catch (err) {
        console.error("ERROR:", err);
        res.status(500).json({ error: err.message });
    }
});

// 🔹 PDF Generator
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

// 🔹 Test route
app.get("/", (req, res) => {
    res.send("Server running ✅");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


