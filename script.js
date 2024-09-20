document.addEventListener("DOMContentLoaded", () => {
    const codeBackground = document.getElementById("code-background");
    const codeLines = [
        "You Can do it",
        "00101101",
        "Java",
        "Max()",
        "Code",
        "Error 404"
    ];

    function createCodeLine() {
        const codeLine = document.createElement("div");
        codeLine.className = "code-line";
        codeLine.textContent = codeLines[Math.floor(Math.random() * codeLines.length)];
        codeLine.style.left = Math.random() * 100 + "%";
        codeLine.style.animationDuration = Math.random() * 3 + 5 + "s"; // random duration between 5-8s
        codeBackground.appendChild(codeLine);

        // Remove the line after animation
        codeLine.addEventListener("animationend", () => {
            codeBackground.removeChild(codeLine);
        });
    }

    setInterval(createCodeLine, 1000); // Create a new line every second
});
