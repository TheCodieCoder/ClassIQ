function updateValue(input) {
    let valueSpan = input.nextElementSibling; 
    valueSpan.textContent = input.value; 
}

document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("loggedInUser");

    if (username) {
        const authContainer = document.getElementById("authButtons");
        if (authContainer) {
            authContainer.innerHTML = `
    <div class="signed-in-box">
        <span class="signed-in-line1">Signed in as</span>
        <span class="signed-in-line2">${username}</span>
    </div>
`;

        }
    }
});