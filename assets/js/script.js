AOS.init();
function toggleChat() {
    var chat = document.getElementById("chatContainer");
    var chatButton = document.getElementById("chatButton");
    if (chat.style.display === "none" || chat.style.display === "") {
        chat.style.display = "block";
        chatButton.style.display = "none";
    } else {
        chat.style.display = "none";
        chatButton.style.display = "block";
    }
}

async function sendMessage() {
    var inputField = document.getElementById("chatInput");
    var message = inputField.value;
    if (!message) return;

    var chatBody = document.getElementById("chatBody");
    chatBody.innerHTML += `<div><b>You:</b> ${message}</div>`;
    inputField.value = "";

    const apiKey = "AIzaSyDOt2KK4-IVcFhFQk33WweKv-K4nN_Nytg";
    const response = await fetch("https://api.generativeai.google/v1/models/gemini:generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({ prompt: message })
    });

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content || "Sorry, I didn't understand that.";
    chatBody.innerHTML += `<div><b>AI:</b> ${reply}</div>`;
}

// const text = document.querySelector(".name_text");
// const textLoad = () => {
//     setTimeout(() => {
//         text.textContent = "Achmad Muzammi Fahmi";
//     }, 0);
//     setTimeout(() => {
//         text.textContent = "I'm Junior Programming";
//     }, 4000);
//     setTimeout(() => {
//         text.textContent = "I'm Student in UM";
//     }, 8000)
// }
// textLoad();
// setInterval(textLoad, 12000);

var typed = new Typed("#typed", {
    string: [
        "Achmad Muzammi Fahmi",
        "I'm Junior Programming",
        "I'm Student in UM",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true
});