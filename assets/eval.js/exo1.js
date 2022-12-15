
let  monliens1 = document.getElementById("exo1");
monliens1.addEventListener("click",exo_1);



function exo_1() {
    let ages = [];
    let jeunes = [];
    let moyens = [];
    let vieux = [];
    let age = "";

    let i = 0;

    do {
        age = parseInt(window.prompt("Veillez saisir l'age"));
        ages.push(age);

        if (age < 20) {
            // la méthode push ajoute un nouvel élément à la fin du tableau
            jeunes.push(age);
        }
        if (age >= 20 && age <= 40) {
            moyens.push(age);
        }
        if (age > 40) {
            vieux.push(age);
        }
    } while (age < 100 && age > 0);
    console.log("Les jeunes " + jeunes );
    console.log("Les moyens  " + moyens );
    console.log("Les vieux " + vieux );
    console.log("Total jeunes " + jeunes.length);
    console.log("Total moyens " + moyens.length);
    console.log("Total vieux " + vieux.length);
} 


 