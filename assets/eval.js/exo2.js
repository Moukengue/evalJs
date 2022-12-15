
let  monliens2 = document.getElementById("exo2");
monliens2.addEventListener("click",exo_2);


function mutiplier(p1) {
    for (let i = 0; i <= 12; i++) {
        console.log(i + " x " + p1 + " = " + i * p1);
    }
}

function exo_2() {
    let nombre = parseInt(window.prompt("Veillez saisir le nombre"));
    mutiplier(nombre);

    }