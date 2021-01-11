// Code your solutions in this file

const arrOfNames = (["Lisa", "Kaitlin", "Jan"]);
const event = "birthday"

function writeCards(arrOfNames, event) { 
    let greetingArrays= [] 
    for (let i = 0; i < arrOfNames.length; i++) {
        greetingArrays.push(`Thank you, ${arrOfNames[i]}, for the wonderful ${event} gift!`)
    }
    return greetingArrays;
}

function countDown(i) { 
    // let i = number; 
    while (i>= 0) {
        console.log(i--);
    }
}
