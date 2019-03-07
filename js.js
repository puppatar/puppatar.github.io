

function buttonName() {
    let name = window.prompt("type a name");
    document.getElementById('nick').innerText = name;
    console.log(name);
}
function object() {
    let object = window.prompt("type a handheld object");
    document.getElementById('object').innerText = object;
    }
function verb3 () {
    let verb3 = window.prompt('type a past tense verb');
    document.getElementById('verb').innerText = verb3 ;
        }

    

let verb = window.prompt("type a verb");
document.getElementById('verb').innerText = verb;
let verb1 = window.prompt("type a present verb");
document.getElementById('verb1').innerText = verb1;
let word = window.prompt("past tense verb");
document.getElementById('word').innerText = word;

document.getElementById('nick1').onclick = buttonName;
document.getElementById('handheld').onclick = object;
document.getElementById('verbs').onclick = verb3;



