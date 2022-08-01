"use strict"
// import ratingArray from './rating.';

const buttonStartEl = document.querySelector("button[data-action='start']");
const formEl = document.querySelector(".input__form");

const selectFirstEl = document.querySelector("select[data-action='first-select']");
const selectSecondEl = document.querySelector("select[data-action='second-select']");
const selectThirdEl = document.querySelector("select[data-action='third-select']");
const selectFourthEl = document.querySelector("select[data-action='fourth-select']");

const inputFirstEl = document.querySelector("input[data-action='first-input']");
const inputSecondEl = document.querySelector("input[data-action='second-input']");
const inputThirdEl = document.querySelector("input[data-action='third-input']");
const inputFourthEl = document.querySelector("input[data-action='fourth-input']");

const outputFirstEl = document.querySelector("span[data-action='output-first']");
const outputSecondEl = document.querySelector("span[data-action='output-second']");
const outputThirdEl = document.querySelector("span[data-action='output-third']");
const outputFourthEl = document.querySelector("span[data-action='output-fourth']");
const outputFifthEl = document.querySelector("span[data-action='output-fifth']");
const outputSixthEl = document.querySelector("span[data-action='output-sixth']");
const outputSeventhEl = document.querySelector("span[data-action='output-seventh']");
const outputEighthEl = document.querySelector("span[data-action='output-eighth']");

const math = "Математика";
const ua = "Українська мова";
const eng = "Англійська мова";
const history = "Історія";

const userRating = [
    {},
    {},
    {},
    {},
];

let average;
let averageMath;
let averageEng;
let averageUa;
let averagehistory;

const averageZnoFree = 184.63;
const averageZnoPaid = 160.69;
const averageZno = (averageZnoFree + averageZnoPaid) / 2; 
const minZnoFree = 160;
const minZnoPaid = 141;
const minZno = (minZnoFree + minZnoPaid) / 2;
const amountOfFree = 84;
const amountOfPaid = 16;
const amountOfAll = 900;

// if () {

// }

function onForm(event) {
    event.preventDefault();
    // const elementsForm = event.currentTarget.elements;

    userRating[0].subject = selectFirstEl.value;
    userRating[1].subject = selectSecondEl.value;
    userRating[2].subject = selectThirdEl.value;
    userRating[3].subject = selectFourthEl.value;

    userRating[0].rating = Number(inputFirstEl.value);
    userRating[1].rating = Number(inputSecondEl.value);
    userRating[2].rating = Number(inputThirdEl.value);
    userRating[3].rating = Number(inputFourthEl.value);

    console.log(userRating);

    getAverage();
    getTop();
    getProbability();
    getProbabilityStipend();
    getAverageMath();
    getAverageUa();
    getAverageEng();
    getAveragehistory();
}

formEl.addEventListener("submit", onForm);

function getAverage() {
    const value = (userRating[0].rating + userRating[1].rating + userRating[2].rating + userRating[3].rating) / 4;
    outputFirstEl.textContent = value;
    average = value;
};

function getTop() {
    const intervalGeneral = (averageZno - minZno) * 2;
    const intervalUser = (average - minZno);
    const value = ((intervalUser / intervalGeneral) * 100).toFixed(1);
    if (value >= 100) {
        outputSecondEl.textContent = "100%";
    } else if (value <= 0) {
        outputSecondEl.textContent = "0%";
    } else {
        outputSecondEl.textContent = `${value}%`;
    }
    
};

// function getProbability() {
//     const value = ;
//     outputThirdEl.textContent = value;
// };

// function getProbabilityStipend() {
//     const value = ;
//     outputFourthEl.textContent = value;
// };

// function getAverageMath() {
//     const value = ;
//     outputFifthEl.textContent = value;
// };

// function getAverageUa() {
//     const value = ;
//     outputSixthEl.textContent = value;
// };

// function getAverageEng() {
//     const value = ;
//     outputSeventhEl.textContent = value;
// };

// function getAveragehistory() {
//     const value = ;
//     outputEighthEl.textContent = value;
// };

