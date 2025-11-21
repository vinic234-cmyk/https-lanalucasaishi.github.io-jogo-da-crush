const heart = document.getElementById("heartBtn");
const choices = document.getElementById("choices");
const msg = document.getElementById("msgBox");
const foto = document.getElementById("foto");

function randomPosition() {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;

    heart.style.left = Math.random() * maxX + "px";
    heart.style.top  = Math.random() * maxY + "px";
}

heart.addEventListener("mouseover", randomPosition);

heart.addEventListener("click", () => {
    heart.style.display = "none";
    choices.style.display = "block";
});

function showLove() {
    choices.style.display = "none";
    msg.style.display = "block";
    foto.style.display = "block";
}

// corações subindo
setInterval(() => {
    const h = document.createElement("div");
    h.classList.add("heart");
    h.innerHTML = "💜";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (20 + Math.random() * 30) + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
}, 350);
