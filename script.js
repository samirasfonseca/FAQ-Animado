const chatWindow = document.getElementById("chat-window");
const buttons = document.querySelectorAll(".faq-questions button");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);

  // Avatar
  const avatar = document.createElement("div");
  avatar.classList.add("avatar");
  avatar.style.backgroundImage =
    sender === "user"
      ? "url('https://cdn-icons-png.flaticon.com/512/1077/1077012.png')" // avatar usuário
      : "url('https://cdn-icons-png.flaticon.com/512/1046/1046784.png')"; // avatar bot/pizzaria

  // Balão
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.textContent = text;

  msg.appendChild(avatar);
  msg.appendChild(bubble);

  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const question = button.dataset.question;
    const answer = button.dataset.answer;

    // Mensagem do usuário
    addMessage(question, "user");

    // "Digitando..."
    const typing = document.createElement("div");
    typing.classList.add("message", "bot");
    typing.innerHTML = `
      <div class="avatar" style="background-image:url('https://cdn-icons-png.flaticon.com/512/1046/1046784.png')"></div>
      <div class="bubble typing">Digitando...</div>
    `;
    chatWindow.appendChild(typing);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    setTimeout(() => {
      typing.remove();
      addMessage(answer, "bot");
    }, 1500);
  });
});
