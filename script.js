let kissCount = 0;

document.getElementById("kissButton")
.addEventListener("click", function(){
const messages = [
    "Happy kiss day",
    "Wow! that was a sweet kiss",
    "sending you lots of love",
    "Thank you for the beautiful kiss",
    "you really know how to make someone feel special"
];

const randomIndex = Math.floor(Math.random() * messages.length);
const kissMessage = messages[randomIndex];

document.getElementById("kissMessage").innerHTML = kissMessage;

kissCount++;
document.getElementById("kissCounter").innerHTML = `Kisses given: ${kissCount}`

setTimeout(()=>{
    document.getElementById("kissMessage").innerHTML = "";
},3000);
})