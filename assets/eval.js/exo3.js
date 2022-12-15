
// Eval 3:::::::::
let  monliens3 = document.getElementById("exo3");
monliens3.addEventListener("click",exo_3);

function exo_3() {
    let prenom = window.prompt("Veillez saisir votre prenom");
    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var newTab = tab.filter(pren => pren != prenom);
    console.log("La liste initiale " + tab);
    if (tab.length == newTab.length) {
        alert("Le prenom n'existe pas ")
    }
    if (tab.length > newTab.length) {
        newTab.push(" ")
        console.log("La nouvelle liste " + newTab);
    }

    }