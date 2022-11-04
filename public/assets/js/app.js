import '/node_modules/jquery/dist/jquery.js';

$('#title').click(function () {
    alert("Ok");
})

let title1 = document.querySelector("#title");
let title2 = document.getElementsByClassName("title2")[0];
let title3 = document.getElementsByClassName("title2")[1];
let title4 = document.getElementsByClassName("title2")[2];
let title5 = document.getElementsByClassName("title3")[0];
let title6 = document.getElementsByClassName("title3")[1];
let title7 = document.getElementsByClassName("title3")[2];
let title8 = document.getElementsByClassName("title3")[3];
let section1 = document.querySelector('#section1');
let section2 = document.querySelector('#section2');
let section3 = document.querySelector('#section3');
let span1 = document.querySelector('#spanRight1');
let span2 = document.querySelector('#spanLeft1');
let span3 = document.querySelector('#spanRight2');
let span4 = document.querySelector('#spanLeft2');
let span5 = document.querySelector('#spanRight3');
let span6 = document.querySelector('#spanLeft3');

const titleSpinning = [
    {transform: 'rotate(10deg) scale(0.5)'},
    {transform: 'rotate(0deg) scale(1)'}
];

const titleTiming = {
    duration : 1000,
    iterations : 1,
};

const title2Scale = [
    {transform: 'scale(0.5)'}
];

const title3Scale = [
    {transform: 'scale(1.2)'}
];

function animate2() {
    title2.animate(title2Scale, titleTiming);
}

function animate3() {
    title3.animate(title2Scale, titleTiming);
}

function animate4() {
    title4.animate(title2Scale, titleTiming);
}

function animate5() {
    title5.animate(title3Scale, titleTiming);
}

function animate6() {
    title6.animate(title3Scale, titleTiming);
}

function animate7() {
    title7.animate(title3Scale, titleTiming);
}

function animate8() {
    title8.animate(title3Scale, titleTiming);
}

window.addEventListener('load', () => {
    title1.animate(titleSpinning, titleTiming);
    setTimeout(animate2, 1000);
    setTimeout(animate3, 2000);
    setTimeout(animate4, 3000);
    setTimeout(animate5, 4000);
    setTimeout(animate6, 5000);
    setTimeout(animate7, 6000);
    setTimeout(animate8, 7000);
});

section1.style.display = 'none';
span2.style.display = 'none';
section2.style.display = 'none';
span4.style.display = 'none';
section3.style.display = 'none';
span6.style.display = 'none';

function enable(span, span2, section) {
    if (span) {
        span.addEventListener('click', function () {
            section.style.display = 'block';
            span.style.display = 'none';
            span2.style.display = 'block';
        })
    }
}

function disable(span, span2, section) {
    if (span2) {
        span2.addEventListener('click', function () {
            section.style.display = 'none';
            span.style.display = 'block';
            span2.style.display = 'none';
        })
    }
}

enable(span1, span2, section1);
disable(span1, span2, section1);
enable(span3, span4, section2);
disable(span3, span4, section2);
enable(span5, span6, section3);
disable(span5, span6, section3);

let spanColor1 = document.querySelector('#spanColor1');
let spanColor2 = document.querySelector('#spanColor2');
let spanColor3 = document.querySelector('#spanColor3');
let spanColor4 = document.querySelector('#spanColor4');
let spanColor5 = document.querySelector('#spanColor5');
let spanColor6 = document.querySelector('#spanColor6');
let spanColor7 = document.querySelector('#spanColor7');
let spanColor8 = document.querySelector('#spanColor8');

let array = [
    spanColor1,
    spanColor2,
    spanColor3,
    spanColor4,
    spanColor5,
    spanColor6,
    spanColor7,
    spanColor8
]

function randomColor() {
    for (let i = 0; i < array.length; i++) {
        array[i].style.color ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }
}

setInterval(randomColor,500);



