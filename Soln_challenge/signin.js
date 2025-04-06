document.addEventListener("DOMContentLoaded", function () {
    const signinBtn = document.querySelector(".signin-btn");

    if (signinBtn) {
        signinBtn.addEventListener("click", function () {
            const inputs = document.querySelectorAll(".signin-box2 .cred");
            const username = inputs[0].value.trim();
            const password = inputs[1].value.trim();

            if (!username || !password) {
                alert("Please enter both username and password.");
                return;
            }

            // Example validation
            if (username === "User11" && password === "UserOnline") {
                localStorage.setItem("loggedInUser", username); // Save username
                
                window.location.href = "index.html";
            } else {
                alert("Invalid credentials!");
            }
        });
    }
});
