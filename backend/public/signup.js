document.getElementById("signupForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:5001/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Signup successful!");

            // ✅ REDIRECT TO MAIN PAGE
            window.location.href = "frontpage.html";
        } else {
            alert(data.error);
        }

    } catch (err) {
        console.error(err);
        alert("Server error");
    }
});