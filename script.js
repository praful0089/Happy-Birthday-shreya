/* ==========================================
   Happy Birthday Shreya ❤️
========================================== */

document.addEventListener("DOMContentLoaded", () => {

const stars=document.getElementById("stars");
const hearts=document.getElementById("hearts");

const welcome=document.getElementById("welcome");
const moodScreen=document.getElementById("moodScreen");
const teddyScreen=document.getElementById("teddyScreen");
const giftScreen=document.getElementById("giftScreen");
const cakeScreen=document.getElementById("cakeScreen");

const startBtn=document.getElementById("startBtn");
const happyBtn=document.getElementById("happyBtn");
const sadBtn=document.getElementById("sadBtn");
const continueGift=document.getElementById("continueGift");

const giftBox=document.getElementById("giftBox");
const cake=document.getElementById("cake");


// ⭐ Stars
for(let i=0;i<150;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.position="absolute";
    star.style.width="2px";
    star.style.height="2px";
    star.style.background="white";
    star.style.borderRadius="50%";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animation="blink "+(2+Math.random()*4)+"s infinite";

    stars.appendChild(star);

}


// Animation CSS
const style=document.createElement("style");

style.innerHTML=`

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


// Floating Hearts

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML=["💖","💕","💗","💞","💝"][Math.floor(Math.random()*5)];

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-40px";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.animation="floatHeart 8s linear forwards";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,500);


// ===============================
// Navigation
// ===============================

// Start

startBtn.addEventListener("click",()=>{

welcome.classList.add("hidden");

moodScreen.classList.remove("hidden");
moodScreen.classList.add("show");

});


// Happy

happyBtn.addEventListener("click",()=>{

moodScreen.classList.remove("show");
moodScreen.classList.add("hidden");

giftScreen.classList.remove("hidden");
giftScreen.classList.add("show");

});


// Sad

sadBtn.addEventListener("click",()=>{

moodScreen.classList.remove("show");
moodScreen.classList.add("hidden");

teddyScreen.classList.remove("hidden");
teddyScreen.classList.add("show");

});


// Teddy Continue

continueGift.addEventListener("click",()=>{

teddyScreen.classList.remove("show");
teddyScreen.classList.add("hidden");

giftScreen.classList.remove("hidden");
giftScreen.classList.add("show");

});


// Gift

giftBox.addEventListener("click",()=>{

giftScreen.classList.remove("show");
giftScreen.classList.add("hidden");

cakeScreen.classList.remove("hidden");
cakeScreen.classList.add("show");

});


// Cake

cake.addEventListener("click",()=>{

    // Cut the cake
    cake.innerHTML="🍰";

    // Show celebration
    const celebration=document.getElementById("celebration");
    const confetti=document.getElementById("confetti");
    const balloons=document.getElementById("balloons");

    celebration.classList.remove("hidden");
    celebration.classList.add("show");

    // 🎊 Confetti
    const colors=[
        "#ff4ea3",
        "#ffd700",
        "#00e5ff",
        "#7CFC00",
        "#ff6347",
        "#ffffff"
    ];

    for(let i=0;i<150;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";
        piece.style.background=
            colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDelay=(Math.random()*2)+"s";

        confetti.appendChild(piece);

    }

    // 🎈 Balloons
    const emojis=["🎈","🎈","🎈","🎉","💖","🎊"];

    for(let i=0;i<25;i++){

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.innerHTML=
            emojis[Math.floor(Math.random()*emojis.length)];

        balloon.style.left=Math.random()*100+"vw";

        balloon.style.animationDelay=
            (Math.random()*3)+"s";

        balloons.appendChild(balloon);

    }

});

});
