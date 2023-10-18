function sendEmail(){
    Email.send({
        Host: "smtp.gmail.com",
        Username: " ",
        Password: " ",
        To: 'rohitsp341@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: "+document.getElementById("name").value
                +"<br> Email: "+document.getElementById("email").value
                +"<br> Phone No: "+document.getElementById("phone").value
                +"<br> Message : "+document.getElementById("message").value
                
    }).then(
        message => alert("Message Sent Succennfully ")
    );
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));