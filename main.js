// chat gpt
function decryptString(ciphertext, secretKey) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
}

// chatgpt
function encryptString(text, secretKey) {
    const ciphertext = CryptoJS.AES.encrypt(text, secretKey).toString();
    return ciphertext;
}


let myPattu = "U2FsdGVkX1+XXoPzkjEDAez62ulc4YIslAKqkxbuL2WzGNWKSsObjtOPx/x2GZx7";
myPattu = decryptString(myPattu, "my Life");

var Names = ["U2FsdGVkX1+3OIvmrVAvNwnMCNI5JZ2IRM3lS2GPfzM=", "U2FsdGVkX1+hSWqzQ8mVgXbolboUXU5sFgDakdD1OWw=", "U2FsdGVkX1+ygcDaLQGJJMlvYcailJdyLiZQ9wHMbgU=", "U2FsdGVkX1+SVsDSajhXy1uoK9P2k7FGevaT7MfY52E=", "U2FsdGVkX1+80ZKbl9jES2YMyt6/Nc/ZExIfiAG2d/w=", "U2FsdGVkX1+rgbBWPeNhDJgXrTaih410mwQsdQTa9AY=", "U2FsdGVkX1+mR9jGVR62iBCHakcJCTNdZrA0u1pcRmg=", "U2FsdGVkX1+zOG7oysTGCeTHoXtJhrNxFiY9M++pbRQ=", "U2FsdGVkX1/B3Xe+lQWGurxH+x9EwzUCvwlDomjTmCg=", "U2FsdGVkX180xmB+qGzoFbPckTd59hSCfpTr11K27P0=", "U2FsdGVkX18/ZMyWzm3cM+Bs33GsLAlKZGdhMWek9Us=", "U2FsdGVkX19HfGOdXKcq68EfHEtIy6C7+e6FzrtkxcE=", "U2FsdGVkX1+sfaGao/ENlgSA8fPilC4Hpnt6YuVW0ts=", "U2FsdGVkX19ZhszGOG9uUTQ3kbyYAIBXDlYKjKznYJ8=", "U2FsdGVkX1/LYI4Gp5dK8pvbSq2aZ7RDPMx62KPGdzc=", "U2FsdGVkX1+ZRLMZMf6Jnj3106qOVhAF5RvpHouqPQI=", "U2FsdGVkX19X41UCK+60JnIvPc6nq7fqIZMHnoggOgA=", "U2FsdGVkX1+k44WtVUBZEdhrzsu1wUZufC0S7CVaiOw=", "U2FsdGVkX19ZlwE3bsduonXqMQk4KhpL9puvh+yRiwI=", "U2FsdGVkX1+soJe9RkykxJqZSyAUCZidM5nMXJNEslQ=", "U2FsdGVkX1+4V+/ObFqs+FwIgekoxtjWTEJpffrxeC4=", "U2FsdGVkX19V0lHCOflZjJhoiZxMaFgSfuVOzFVXxFI=", "U2FsdGVkX1/SuiqusbJZJ5IjGgrdeLIrHxZw/trKMVI=", "U2FsdGVkX19QR+JcuO59YcTw3hmZz49AmeH1xhUxISg=", "U2FsdGVkX1/AAZiCslMK6Yr+OjoMlvxNRQ+8wgYAia0=", "U2FsdGVkX1+xrHcwR7blvIbb193aFDwsdOu98LQi9tA=", "U2FsdGVkX1+4qK9ns7yVyLiw7m8672BIdO449jDXHTM=", "U2FsdGVkX19Ea8LqLg5Xy4AnAwrMxyOImvA2oZ58Zik=", "U2FsdGVkX1+mmBkYY4a9otyofAu2+ghT5nYGmVMB4eU=", "U2FsdGVkX1/QRSilwiWThms5KQtl02wuBqgOyjApV34=", "U2FsdGVkX19jglr/xnTKURUcNYE1z2rIXDqRZfvRDXY=", "U2FsdGVkX1+6NqccMM+8jzxpxzHXnG8O2KqmnivJCdw="];
var chellaNames = [];
let free = 10;
Names.forEach(i => {
    chellaNames.push(decryptString(i, "love you"));
});

let myLove = myPattu.toLowerCase();
let someText = myLove.toLowerCase().split('');
let score = 0;
for (let i = 0; i < someText.length; i++) {
    let ind = Math.floor(Math.random() * 100) % someText.length;
    let temp = someText[ind];
    someText[ind] = someText[i];
    someText[i] = temp;
}
document.getElementById("Phrase").innerHTML = someText.join('');


var taken = new Array(chellaNames.length).fill(0);
var done = new Array(myPattu.length).fill(0);


function check(){
    let guess = document.getElementById("inputStr").value;
    if(myPattu == guess) alert("🥳🥳🥳🥳🥳🥳Wow, Awesome d chellam.....   Love you lot....🥳🥳🥳🥳🥳🥳🥳🥳");
    else alert("🥺 Pattu ma, try again 🥺");
}

function nameHint(){
    let guess = document.getElementById("guessString").value;
    document.getElementById('approve').innerHTML = "";
    document.getElementById("guessString").value = "";
    if(chellaNames.includes(guess)){
        let ind = chellaNames.indexOf(guess);
        if(taken[ind] == 0){
            taken[ind] = 1;
            document.getElementById('approve').innerHTML = "✅ Hint Approved";
        }
        else{
            document.getElementById('approve').innerHTML = "😂 Already Used";
            return;
        }
    }
    else if(guess == ""){
        document.getElementById('approve').innerHTML = "😈 Call me";
        return;
    }
    else{
        document.getElementById('approve').innerHTML = "❌ Sorry, I didnt taken this";
        return;
    }
    document.getElementById("guessString").value = "";

    FindTheChangeVariable();
}

function freeHint(){
    free -= 1;
    let x = "Free Hint (" + free.toString() + ")";
    if(free == 0)
        document.getElementById("free").style.display = "none";    
    else
        document.getElementById("free").innerHTML = x;
    FindTheChangeVariable();
}


function FindTheChangeVariable(){
    let x, y;
    let s = someText.join('')
    if(s == myLove){
        console.log("same");
        document.getElementById("Phrase").innerHTML = myLove;
        return;
    }
    
    while(true){
        let ind = Math.floor(Math.random() * 100) % someText.length;
        if(someText[ind] === myLove[ind]) continue;
        while(true){
            let sec = Math.floor(Math.random() * 100) % someText.length;
            if(sec == ind) continue;
            if(someText[sec] !== myLove[ind]) continue;
            x = ind;
            y = sec;
            
            let temp = someText[x];
            someText[x] = someText[y];
            someText[y] = temp;
            break;
        }        
        break;
    }
    
    let curr = "";
    for (let i = 0; i < someText.length; i++) {
        if(done[i] == 1)
            curr += '<span style="color: tomato;">' + someText[i] + "</span>";
        else if(i != x )
            curr += someText[i];
        else
            curr += '<span style="color: blue;">' + someText[i] + '</span>';
    }
    done[x] = 1;
    score += 1;
    document.getElementById("Phrase").innerHTML = curr;
    document.getElementById("score").innerHTML = score;

}

