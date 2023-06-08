"use strict"
// let rdm = Math.floor(Math.random() * 10);

// let count = 3;
// console.log(rdm);

// function leftclk() {
//     count--;
//     let inpleft = document.getElementById('leftInp');
//     let num = Number(inpleft.value)
//     if (num === rdm) {
//         alert('You are winner')
//         count = 3;
//         // rdm = Math.round(Math.random() * 10);
//     }
//     else if (count === 0) {
//         alert('You lost. Do you wanna to start again?');
//         count = 3;
//         // rdm = Math.round(Math.random() * 10);  
//         return;
//     }
//     else if (num > rdm) {
//         alert('your number is highe');
//         //  inpleft = '';
//     }
//     else {
//         alert('Your number is low');
//         // inpleft='';
//     }
//     inpleft.value = '';
// }

let count;
let rdm;
start();

function leftclk() {
    let inpleft = document.getElementById('leftInp').trim();
    let num = +inpleft.value;
    count--;
    if (num === rdm) {
        let rest = confirm('You are winner. Do you want to start again?');
        rest ? start() : alert('See you soon!');
    }
    else if (count === 0) {
        let rest = confirm('You lost. Do you want to try again?');
        rest ? start() : alert('See you soon!');
    }
    else if (num > rdm) {
        alert('your number is higher');
    }
    else {
        alert('Your number is low');
    }
    inpleft.value = '';
}

function start() {
    count = 3;
    rdm = getRandomNum();
}

function getRandomNum() {
    return Math.floor(Math.random() * 10);
}
