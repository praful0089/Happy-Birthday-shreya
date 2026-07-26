/* ==========================================
   Happy Birthday Shreya ❤️
   Part 1 - Magical Welcome
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const stars = document.getElementById("stars");
    const hearts = document.getElementById("hearts");
    const startBtn = document.getElementById("startBtn");

    // ⭐ Create Twinkling Stars
    for (let i = 0; i < 150; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.position = "absolute";
        star.style.width = "2px";
        star.style.height = "2px";
        star.style.background = "white";
        star.style.borderRadius = "50%";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animation = "blink " + (2 + Math.random() * 4) + "s infinite";

        stars.appendChild(star);
    }

    // Add blink animation
    const style = document.createElement("style");

    style.innerHTML = `
        @keyframes blink{
            0%,100%{
                opacity:.2;
                transform:scale(1);
            }
            50%{
                opacity:1;
                transform:scale(1.8);
            }
        }

        @keyframes floatHeart{
            from{
                transform:translateY(0);
                opacity:1;
            }
            to{
                transform:translateY(-110vh);
                opacity:0;
            }
        }
    `;

    document.head.appendChild(style);

    // 💖 Floating Hearts
    function createHeart(){

        const heart = document.createElement("div");

        heart.innerHTML =
            ["💖","💕","💗","💞","💝"][Math.floor(Math.random()*5)];

        heart.style.position = "absolute";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.bottom = "-40px";
        heart.style.fontSize = (20 + Math.random()*20) + "px";
        heart.style.animation = "floatHeart 8s linear forwards";

        hearts.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },8000);

    }

    setInterval(createHeart,500);

    // ==============================
// Part 2 Navigation
// ==============================

const welcome = document.getElementById("welcome");
const moodScreen = document.getElementById("moodScreen");
const teddyScreen = document.getElementById("teddyScreen");
const giftScreen = document.getElementById("giftScreen");
const giftBox = document.getElementById("giftBox");
const happyBtn = document.getElementById("happyBtn");
const sadBtn = document.getElementById("sadBtn");
const continueGift = document.getElementById("continueGift");

// Start button
startBtn.addEventListener("click", () => {

    welcome.style.display = "none";

    moodScreen.classList.add("show");

});

// Sad button
sadBtn.addEventListener("click", () => {

    moodScreen.classList.remove("show");

    teddyScreen.classList.add("show");

});

// Continue button
continueGift.addEventListener("click", () => {

    teddyScreen.classList.remove("show");

    giftScreen.classList.add("show");

});
giftBox.addEventListener("click", () => {

    giftBox.innerHTML = "🎉";

    setTimeout(() => {

        alert("🎂 The Birthday Cake is Coming Next!");

    },600);

});
});
