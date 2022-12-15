var formValid = document.getElementById('envoyer');
formValid.addEventListener('click', envoyer)

    let nom = document.getElementById('nom');
    let prenom = document.getElementById('prenom');
    let sexe = document.getElementById('sexe');
    let ddn =  document.getElementById('date');
    let postal = document.getElementById('postal');
    let email = document.getElementById('email');
    let sujet = document.getElementById('sujet');
    let commentaire = document.getElementById('commentaire'); 
    let checkbox = document.getElementById('checkbox');
    
    let missNom = document.getElementById('missNom');
    let missPrenom = document.getElementById('missPrenom');
    let missSexe = document.getElementById('missSexe');
    let missDate =  document.getElementById('missDate');
    let missPostal = document.getElementById('missPostal');
    let missEmail = document.getElementById('missEmail');
    let missSujet = document.getElementById('missSujet');
    let missCommentaire = document.getElementById('missCommentaire'); 
    let missCheckbox = document.getElementById('missMessage');
    let regexCP = /[0-9]{5}/g;
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //code a exécuter lorsque le formulaire sera validé
function envoyer(event) {

    if(nom.validity.valueMissing) {
        event.preventDefault();
        missNom.textContent = 'Veillez saisir votre nom !';
        missNom.style.color = 'red';
    }
    else { missNom.textContent = '';}
    
    if(prenom.validity.valueMissing) {
        event.preventDefault();
        missPrenom.textContent = 'Veillez saisir votre prenom !';
        missPrenom.style.color = 'red';
    }
    else { missPrenom.textContent = '';}

    if(commentaire.validity.valueMissing) {
        event.preventDefault();
        missCommentaire.textContent = 'Écrivez un commentaire.';
        missCommentaire.style.color = 'red';
    }
    else { missCommentaire.textContent = '';}

    if(checkbox.checked == false) {
        event.preventDefault();
        missCheckbox.textContent = 'Checkbox manquant';
        missCheckbox.style.color = 'red';
    }
    else { missCheckbox.textContent = '';}

    if (postal.validity.valueMissing) {
        event.preventDefault();
        missPostal.textContent = 'Veillez saisir un code postal ';
        missPostal.style.color = 'red';
    }
    else { missPostal.textContent = '';}

    if (email.validity.valueMissing) {
        event.preventDefault();
        missEmail.textContent = "Veillez saisir une adresse email valide!";
        missEmail.style.color = 'red';
    }
    else { missEmail.textContent = '';}

    if(ddn.validity.valueMissing) {
        event.preventDefault();
        missDate.textContent = 'Veillez saisir  votre date de naissance';
        missDate.style.color = 'red';
    }
    else { missDate.textContent  = '';}

    if(sujet.value == 'Veuillez séléctionner un sujet') {
        event.preventDefault();
        missSujet.textContent = 'sujet manquant';
        missSujet.style.color = 'red';
    }
    else { missSujet.textContent = '';}

    if (!(sexe[0].checked || sexe[1].checked)) {
        event.preventDefault();
        missSexe.textContent = 'Sexe manquant';
        missSexe.style.color = 'red';
    }
    else { missSexe.textContent = '';}

   
    if(!postal.value.match(regexCP)){
        event.preventDefault();
        missPostal.textContent = 'Veillez saisir un Code postal invalide';
        missPostal.style.color = 'red';
    }
    else { missPostal.textContent = '';}


    if(!email.value.match(regexEmail)){
        event.preventDefault();
        missEmail.textContent = 'Veillez saisir  votre dresse mail invalide';
        missEmail.style.color = 'red';
    }
    else { missEmail.textContent = '';}

    
}  

