let skills = document.querySelector("#skills");
let task = document.querySelector("#task");
let dd = document.querySelector("#dd");

const requestURL1 = "/assets/DATA/data1.json";
const requestURL2 = "/assets/DATA/data2.json"
let xhr1 = new XMLHttpRequest();
let xhr2 = new XMLHttpRequest();

xhr1.open("GET", requestURL1);
xhr2.open("GET", requestURL2);
xhr1.responseType = "json";
xhr2.responseType = "json";

xhr1.onload = function () {
    if (xhr1.status === 200) {
        console.log("La requête xhr1 a réussi !");
    }
    let response = xhr1.response;
    console.log(response);
    let skill = response.skill;
    let skill1 = document.createElement("li");
    let skill2 = document.createElement("li");
    let skill3 = document.createElement("li");
    let skill4 = document.createElement("li");
    let skill5 = document.createElement("li");
    skills.append(skill1);
    skills.append(skill2);
    skills.append(skill3);
    skills.append(skill4);
    skills.append(skill5);
    skill1.innerHTML = skill[0].one;
    skill2.innerHTML = skill[0].two;
    skill3.innerHTML = skill[0].three;
    skill4.innerHTML = skill[0].four;
    skill5.innerHTML = skill[0].five;
}

xhr2.onload = function () {
    if (xhr2.status === 200) {
        console.log("La requête xhr2 a réussi !");
    }
    let response = xhr2.response;
    console.log(response);
    let task0 = response.task;
    let task1 = document.createElement("p");
    let task2 = document.createElement("p");
    let task3 = document.createElement("p");
    let task4 = document.createElement("p");
    let task5 = document.createElement("p");
    let task6 = document.createElement("p");
    task.append(task1);
    task.append(task2);
    task.append(task3);
    task.append(task4);
    dd.append(task5);
    dd.append(task6);
    task1.innerHTML = task0[0].one;
    task2.innerHTML = task0[0].two;
    task3.innerHTML = task0[0].three;
    task4.innerHTML = task0[0].four;
    task5.innerHTML = task0[0].five;
    task6.innerHTML = task0[0].six;
}

xhr1.send();
xhr2.send();


