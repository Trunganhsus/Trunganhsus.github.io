document.getElementById("nextPageButton").addEventListener("click", function() {
    // Ẩn phần Contact và Click on this
    document.getElementById("contact-section").style.display = "none";
    document.getElementById("intro").style.display = "none";

    // Hiện menu 3 nút
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("menu").classList.add("full-screen");
});

// Gửi email khi bấm vào các nút
function sendEmail(subject) {
    window.location.href = `mailto:nguyentrunganh2403@gmail.com?subject=${subject}`;
}

document.getElementById("foodBtn").addEventListener("click", function() {
    sendEmail("Foods");
});

document.getElementById("englishBtn").addEventListener("click", function() {
    sendEmail("English");
});

document.getElementById("motivationBtn").addEventListener("click", function() {
    sendEmail("Motivation");
});
document.getElementById("foodBtn").addEventListener("click", function() {
    sendEmail("Foods");
});

document.getElementById("englishBtn").addEventListener("click", function() {
    sendEmail("English");
});

document.getElementById("motivationBtn").addEventListener("click", function() {
    sendEmail("Motivation");
});

function sendEmail(subject) {
    fetch("https://formspree.io/f/meoezlyv", {  // Đổi ID form của bạn tại đây!
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            subject: subject,
            message: `User clicked on ${subject}`
        })
    })
    .then(response => response.json())
    .then(data => alert("Email sent successfully! ✅")) 
    .catch(error => alert("Error sending email ❌"));
}
