const changeText = document.querySelector(".change");
const text = ["TEACHING", "GUIDING"];

let index = 0;

function textChanger() {
    changeText.style.opacity = "0"; // Start fading out

    setTimeout(() => {
        changeText.textContent = text[index]; 
        changeText.style.opacity = "1"; 
        index = (index + 1) % text.length; 
    }, 300);
}

setInterval(textChanger, 2000);

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
