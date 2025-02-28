function display(value){
    document.getElementById('result').innerHTML = value;
}
async function add(a,b){
    var result = a*b;
    display(result);
}
add(4,5);

const code =document.getElementById('code');
code.style.color = 'lime';
code.style.fontWeight = 'bold';
code.style.fontFamily = 'monospace';
code.innerHTML ="function display(value){<br>document.getElementById('result').innerHTML = value;<br>}<br>async function add(a,b){<br>var result = a*b;<br>display(result);<br>}<br><br>add(4,5);<hr>";

const code1 =document.getElementById('code1');
code1.style.color = 'lime';
code1.style.fontWeight = 'bold';
code1.style.fontFamily = 'monospace';
code1.innerHTML ="document.getElementById('result1').innerHTML = result1;<br>var result1 = a*b;<hr>";

const footer = document.getElementById('footer');
const speed = 100;
const cursor = "<span class='cursor'>|</span>"
var index = 0;
var text = "Sorry, Mam for submiting my projects so lately. I'm trying to write my codes by my own hands and stop using automation.";

function typeanimation(){
    if(index < text.length){
        footer.innerHTML = text.substring(0 , index + 1 ) + cursor;
        index ++;
        setTimeout(typeanimation,speed)
    } else{
        setTimeout(() => {
            footer.innerHTML = text;
        },1000)
    }
}
typeanimation();

function createBinary() {
    const binary = document.createElement("binary");
    binary.classList.add("binary");
    binary.innerText = Math.random() < 0.5 ? "0" : "1"; 
    document.body.appendChild(binary);

    binary.style.left = Math.random() * window.innerWidth + "px";
    binary.style.animationDuration = (Math.random() * 2 + 3) + "s"; 

    setTimeout(() => {
        binary.remove();
    }, 5000);
}

setInterval(createBinary, 100);

document.getElementById('result1').innerHTML = total;
var total = a*b;