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

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-text", {
        strings: [
            "I'm Muzammi Fahmi", 
            "I'm Junior Programming", 
            "I'm Student in UM"
        ],
        typeSpeed: 100, // Kecepatan mengetik (ms per karakter)
        backSpeed: 50, // Kecepatan menghapus
        backDelay: 1000, // Waktu jeda sebelum menghapus
        startDelay: 500, // Waktu tunggu sebelum mulai mengetik
        loop: true // Animasi berulang
    });
});
