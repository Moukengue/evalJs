
   // Eval 4:::::::::::::::
   let  monliens4 = document.getElementById("exo4");
   monliens4.addEventListener("click",exo_4);
   function exo_4() {
    let pu = parseFloat(window.prompt("veillez saisir un prix"));
    let qtecom = parseFloat(window.prompt("Veillez saisir la quantite commandée"));
    let tot = pu * qtecom;
    let remise = 0;
    let port = 0;
    let totapresremise = 0;
    let totapresport = 0;

    if(tot > 200){
        remise=tot*0.1;
    }
    if(tot >=100 && tot <=200){
        remise = tot * 0.05;
    }
    totapresremise = tot - remise;
    if (totapresremise < 500) {
        port = totapresremise * 0.02;
        if (port < 6) {
            port = 6;
        }
    }
    totapresport = totapresremise + port;
    console.log("Prix unitaire = " + pu);
    console.log("Quantite = " + qtecom);
    console.log("Total avant remise = " + tot);
    console.log("Remise= " + remise);
    console.log("Total apres remise = " + totapresremise);
    console.log("Port= " + port);
    console.log("Total apres port = " +totapresport);
}

