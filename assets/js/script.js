// membuat efek seperti mengetik
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-text", {
        strings: [
            "My name is Muzammi", 
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
