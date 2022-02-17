// DOM Elements
const modalbg = document.querySelector(".bground"); // crée une variable constante pour l'élément "class"
const modalBtn = document.querySelectorAll(".modal-btn"); // crée une variable constante pour l'élément "class"
const formData = document.querySelectorAll(".formData"); // crée une variable constante pour l'élément "class"
const modal = document.getElementById('modal'); // crée une variable constante pour l'élément "ID"
const $registrationForm = document.querySelector('.registration-form'); // crée une variable constante pour l'élément "class"



// crée la fonction qui permet d'afficher et de fermer le modal en modifiant son style
function modalDisplay(displayStyle) { 
  modal.style.display = displayStyle  
}


// Création des fonctions de vérification du formulaires pour chaqu'une des inputs obligatoires

// crée une fonction qui vérifie si la valeur entrée dans l'input pour le prénom est supérieur a 2 caractères
function checkFirstName() {
  const firstNameInput = document.getElementById('first').value; // crée une constante qui récupère la valeur entrée par le client dans l'input prénom
  const regExFirstName = /^[a-zA-Z\- ]+$/;
  const borderFirstError = document.getElementById('first');
  const $firstErrorMsg = document.querySelector(".firstErrorMsg"); // crée une constante qui selectionne le message d'erreur
  const isFirstNameValid = regExFirstName.test(firstNameInput) & firstNameInput.trim().length >= 2; // crée une constante qui vérifie le nombre de caractère récupéré dans l'input prénom

  if (isFirstNameValid) { // Appelle la constante de validation du prénom dans une booléene
    $firstErrorMsg.classList.add('hidden') & borderFirstError.classList.remove('inputError'); // "Si" elle est vrai alors le message d'erreur reste caché
  } else { // "Sinon" 
    $firstErrorMsg.classList.remove('hidden') & borderFirstError.classList.add('inputError'); // "Si" elle est fausse alors le message d'erreur s'affiche
  }
  return isFirstNameValid; // Enregistre la réponse a cette fonction dans la constante
}

function checkLastName() {// crée une fonction qui vérifie si la valeur entrée dans l'input pour le nom est supérieur a 2 caractères
  const lastNameInput = document.getElementById('last').value; // crée une constante qui récupère la valeur entrée par le client dans l'input nom
  const regExLastName = /^[a-zA-Z\- ]+$/;
  const borderLastError = document.getElementById('last');
  const $lastErrorMsg = document.querySelector('.lastErrorMsg'); // crée une constante qui selectionne le message d'erreur
  const isLastNameValid = regExLastName.test(lastNameInput) & lastNameInput.trim().length >= 2; // crée une constante qui vérifie le nombre de caractère récupéré dans l'input nom

  if (isLastNameValid) { // Appelle la constante de validation du nom dans un booléen
    $lastErrorMsg.classList.add('hidden') & borderLastError.classList.remove('inputError'); // "Si" elle est vrai alors le message d'erreur reste caché
  } else { // "Sinon" 
    $lastErrorMsg.classList.remove('hidden') & borderLastError.classList.add('inputError'); // "Si" elle est fausse alors le message d'erreur s'affiche
  }
  return isLastNameValid; // Enregistre la réponse à cette fonction
}

// Vérifie si le format de l'email est valide et correspond au regEx et renvoi un booléen
function checkEmail() { // crée la fonction qui vérifie si la valeur entrée dans l'input pour l'email est valide
  const emailInput = document.getElementById('email').value; // crée une constante qui récupère la valeur entrée par le client dans l'input
  const regExMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // crée un regEx pour définir le format OBLIGATOIRE de l'entrée (ex: monnom@mondomaine.xyz)
  const borderMailError = document.getElementById('email');  
  const $emailErrorMsg = document.querySelector('.emailErrorMsg'); // crée une constante qui selectionne le message d'erreur
  const isEmailValid = regExMail.test(emailInput); // crée une constante qui vérifie le format de l'email inscrit dans l'input email

  if (isEmailValid) { // Appelle la constante de validation de l'email dans un booléen
    $emailErrorMsg.classList.add('hidden') & borderMailError.classList.remove('inputError'); // "Si" l'email est valide alors cache le message d'erreur
  } else { // "Sinon"
    $emailErrorMsg.classList.remove('hidden') & borderMailError.classList.add('inputError'); // "Si" l'email n'est pas valide alors affiche le message d'erreur
  }
  return isEmailValid // Enregistre la réponse à cette fonction
}

// Vérifie l'age entrée
function checkAge() {

  let dateInput = document.querySelector("#birthdate").value;
  const borderAgeError = document.getElementById('birthdate');
  const $ageErrorMsg = document.querySelector(".ageErrorMsg");
  const date = new Date(dateInput);
  const limitYear = 1970;
  const timeStampDate = Date.parse(date);
  const actualDate = Date.now();
  
  if(timeStampDate > actualDate){
    $ageErrorMsg.classList.add('hidden') & borderAgeError.classList.remove('inputError');
  } else {
    $ageErrorMsg.classList.remove('hidden') & borderAgeError.classList.add('inputError');
  }
  
  const userDateYear = date.getFullYear();
  
  if(userDateYear < limitYear){
  
    $ageErrorMsg.classList.add('hidden') & borderAgeError.classList.remove('inputError');
  } else {
    $ageErrorMsg.classList.remove('hidden') & borderAgeError.classList.add('inputError');
  }

}

// Vérifie si la valeur entrée dans l'input et retourne un booléen
function checkTournamentCount() { // crée la fonction qui vérifie si la valeur entrée en input
  const tournamentInput = document.getElementById('quantity').value; // créer une constante qui récupère la valeur entrée dans l'input
  const borderTournamentError = document.getElementById('quantity');
  const $tournamentErrorMsg = document.querySelector('.tournamentErrorMsg'); // crée une constante qui selectionne le message d'erreur
  const isTournamentNumberIsValid = tournamentInput.length > 0; //créer une constante qui vérifie si la valeur entrée en input est supérieure a "0" 

  if (isTournamentNumberIsValid) { // Appelle la constante de validation du nombre de tournois
    $tournamentErrorMsg.classList.add('hidden') & borderTournamentError.classList.remove('inputError') ; // "Si" la valeur entrée est valide alors n'affiche pas le message
  } else { // "Sinon"
    $tournamentErrorMsg.classList.remove('hidden') & borderTournamentError.classList.add('inputError') ; // "Si" la valeur entrée n'est pas valide alors affiche le message
  }
  return isTournamentNumberIsValid // Enregistre la résultat a cette fonction
}

// Vérifie si un boutton radio a bien été sélectionné et renvoie la réponse dans un boolèen
function checkTournamentCity() { // crée une fonction qui vérifie si la valeur entrée en input
  const $cityRadios = document.querySelectorAll('.formData .checkbox-input'); // crée une constante qui récupère les check-box sélectionné
  const $tournamentCityErrorMsg = document.querySelector('.tournamentCityErrorMsg'); // crée une constante qui récupère le message d'erreur
  let isTournamentCityNumberValid = false; // crée une variable muable en fonction de la boolèen suivante

  for (let i = 0; i < $cityRadios.length; i++) { /** l'instruction "for (pour)" déclare une variable " i = 0 ".
                                                      La variable constante $cityRadios doit etre entre "i" et "i++" */
    if ($cityRadios[i].checked) { // "Si" une ville est sélectionnée dans une radio
      $tournamentCityErrorMsg.classList.add('hidden'); // n'affiche pas le message d'erreur
      isTournamentCityNumberValid = true;// modifie la valeur dans la variable "isTournamentCityNumberValid"
      break
    } else { // "Sinon"
      $tournamentCityErrorMsg.classList.remove('hidden'); // n'affiche pas le message
    }
  }
  return isTournamentCityNumberValid // Enregistre le résultats à cette fonction
}

// vérifie si l'utilisateur a bien accepté les conditions d'utilisation 
function checkTermsAndConditions() { // crée la fonction pour vérifier si les CGU on été acceptés
  const terms = document.querySelector('#acceptConditions')  // crée une variable constante qui récupère la valeur entrée dans l'id
  const $termsCheckMsg = document.querySelector('.termsCheckMsg'); // crée une variable constante pour l'élément "class"
  const termsAreChecked = terms.checked; // crée une variable pour vérifier si la radio "terms" est bien "check"

  if (termsAreChecked) { // "Si" la radio "terms" est bien check
    $termsCheckMsg.classList.add('hidden'); // n'affiche pas le message d'erreur
  } else { // " Sinon "
    $termsCheckMsg.classList.remove('hidden'); // affiche le message le message d'erreur
  }
  return termsAreChecked // Enregistre le resultat dans la variable "termsAreChecked"
}

// Crée une variable "isFormValid" qui récupère le résultat de toutes les fonctions
const isFormValid = () => checkFirstName() && checkLastName() && checkEmail() && checkAge() && checkTournamentCount() && checkTournamentCity() && checkTermsAndConditions()

//Fonction pour ouvrir les remerciements de l'inscription
const thank = document.getElementById('thank'); // créer une variable constante pour l'élément "ID"

  // crée la fonction qui modifiera le style de la variable "thank"
  function thankDisplay(displayStyle) {
    thank.style.display = displayStyle
  }

/**  Liste d'évènement 'submit' */
$registrationForm.addEventListener('submit', function(event) {
  event.preventDefault()
// si la valeur de la booléen est vrai
  if (isFormValid()) {
    // lance la fonction modalDisplay ligne 10 et modifie le style sur "none" 
    // ET 
    // lance la fonction thankDisplay ligne 127 et modifie le style sur "none"
    modalDisplay('none') & thankDisplay('block');
    
    $registrationForm.reset();// reset le contenu
  } 
})


