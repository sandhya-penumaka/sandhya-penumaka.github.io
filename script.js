function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.createElement("button");
    btn.innerText = "Toggle Dark Mode";
    btn.onclick = toggleDarkMode;
    document.body.appendChild(btn);
});

