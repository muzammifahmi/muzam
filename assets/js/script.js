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

// membuat efek seperti mengetik
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-text", {
        strings: [
            "My name is Achmad Muzammi Fahmi.", 
            "Welcome to my Website.", 
            // "I am a student at the Malang State University (UM)."
        ],
        typeSpeed: 100, // Kecepatan mengetik (ms per karakter)
        backSpeed: 50, // Kecepatan menghapus
        backDelay: 1000, // Waktu jeda sebelum menghapus
        startDelay: 500, // Waktu tunggu sebelum mulai mengetik
        loop: true // Animasi berulang
    });
});

// menampilkan waktu
function updateTime() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('current-time').textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Durasi animasi dalam milidetik
        easing: "ease-in-out", // Efek animasi lebih halus
        once: true, // Animasi hanya terjadi sekali
    });
});
