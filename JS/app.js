// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
    p1.dataset.age = (parseInt(p1.dataset.age) + 10).toString();
    let age = p1.dataset.age;
    p1.innerHTML += " : " + age;

let p2 = document.getElementById('p2');
    let job = p2.dataset.job.length;
    p2.dataset.job = job.toString();
    p2.innerHTML = "La longueur totale de la chaine de caractère est de : " + job;

let p3 = document.getElementById('p3');
    let hobbies = p3.dataset.hobbies.split('|');
    for(let hobby of hobbies) {
        p3.innerHTML += " J'aime le " + hobby.trim();
    }

let p4 = document.getElementById('p4');
    let boolean = p4.dataset.boolean;
    boolean = boolean.toLowerCase() === 'true';
        if (boolean) {
            p4.innerHTML += " : la valeur est vrai";
        }
        else {
            p4.innerHTML += " : la valeur est fausse";
        }

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
        p5.dataset.age = "37";

let p6 = document.getElementById('p6');
        p6.dataset.job = "DWWM";

let p7 = document.getElementById('p7');
        p7.dataset.hobbies = "the chess|playing video games|the movie theater";

let p8 = document.getElementById('p8');
        p8.dataset.boolean = "false";


// Bonus
let newDiv = document.createElement("div");


let user = {
    name: "LECLERCQ",
    firstName: "Jean-Michel",
}



