document.addEventListener("DOMContentLoaded", () => {
    const codeBackground = document.getElementById("code-background");
    const codeLines = [
        "function helloWorld() { console.log('Hello, World!'); }",
        "let x = 10; while(x > 0) { x--; }",
        "const array = [1, 2, 3, 4, 5]; array.forEach(num => console.log(num));",
        "if (true) { console.log('This is true!'); }",
        "const sum = (a, b) => a + b;",
        "try { throw new Error('Oops!'); } catch (e) { console.error(e); }"
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
