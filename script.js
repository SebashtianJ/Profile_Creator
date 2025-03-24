document.getElementById("title").textContent = "📱 Create your Profile Page! 📱";

let username;
let emoji;
let fact;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("usernameText").value;
    emoji = document.getElementById("emojiText").value;
    fact = document.getElementById("factText").value;
    document.getElementById("welcome").textContent = `Hello! My name is ${username}. My favorite Emoji is the ${emoji} Emoji, and a little Fun Fact about myself is that ${fact}.`;
    console.log(username);
};

const element = document.getElementById("mySubmit");
element.style.display = "block";
element.style.color = "white";
element.style.backgroundColor = "violet";

document.getElementById("title").style.fontSize = "50px";
document.getElementById("welcome").style.fontSize = "20px";
document.getElementById("mySubmit").style.fontSize = "20px";
document.getElementById("UsernameText").style.fontSize = "25px";
document.getElementById("EmojiText").style.fontSize = "25px";
document.getElementById("FactText").style.fontSize = "25px";
document.getElementsByName("myText").style.fontSize = "20px";