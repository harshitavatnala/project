// app.post("/signup", (req, res) => {
//     try {
//         const { name, email, branch, password } = req.body;

//         const filePath = path.join(__dirname, "data", "users.json");

//         let users = [];

//         // ✅ SAFE READ
//         if (fs.existsSync(filePath)) {
//             users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//         }

//         // ✅ CHECK EXISTING USER
//         const existingUser = users.find(u => u.email === email);
//         if (existingUser) {
//             return res.status(400).json({ error: "User already exists" });
//         }

//         // ✅ HASH PASSWORD
//         const hashedPassword = bcrypt.hashSync(password, 10);

//         users.push({
//             name,
//             email,
//             branch,
//             password: hashedPassword
//         });

//         fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

//         // ✅ ALWAYS SEND JSON
//         res.json({ message: "Signup successful" });

//     } catch (err) {
//         console.error("SIGNUP ERROR:", err);

//         // ✅ VERY IMPORTANT
//         res.status(500).json({ error: "Server error" });
//     }
// });

document.getElementById("signupForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const branch = document.getElementById("branch").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, branch, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Signup successful!");
            window.location.href = "frontpage.html";
        } else {
            alert(data.error);
        }

    } catch (err) {
        console.error(err);
        alert("Server error");
    }
});

