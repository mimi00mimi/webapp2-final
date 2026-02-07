const toggleButton = document.getElementById("toggle-command-visibility");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const isHidden = document.body.classList.toggle("hide-commands");
    toggleButton.textContent = isHidden ? "コマンドを表示" : "コマンドを隠す";
  });
}