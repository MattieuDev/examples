
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'
  //déclaration du Formulaire
  let form = document.getElementById('lessonForm');
  //écoute de l'action submit et lancement de la fonction
  form.addEventListener('submit',function(event){
    
    Array.from(form.elements).forEach((input) => {
      if(input.type !== "submit"){
        
        if(!validateFields(input)){

          event.preventDefault(); //bloque la suite des opérations
          event.stopPropagation(); //Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.

          input.classList.remove('is-valid');
          input.classList.add('is-invalid');
          input.nextElementSibling.style.display = 'block';

        }else{

          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          input.nextElementSibling.style.display = 'none';

        }
      }
    });
 },false)
  
})()

//champ REQUIRED,si non vide et non null, donc champ rempli 
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}
//validation nombre de caractère
function validateLenght(input, minLength, maxLength){
  return !(input.value.length< minLength || input.value.length > maxLength);
}
//Validation type de caractère
function validateText(input){
  return input.value.match("[A-Za-z]+$");//Toutes les majuscules et minuscules de l'alphabet latin et 
}
//validation des mails
function validateEmail(input){

  let EMAIL = input.value;
  let POSAT = EMAIL.indexOf("@");
  let POSDOT = EMAIL.lastIndexOf(".");

  return !(POSAT < 1 || (POSDOT - POSAT < 2));
}

//fonction validation code postal
function validatePostalcode(input){
return input.value.match("^(0[1-9]|[1-9][0-9])[0-9][0-9][0-9]$");
}
//fonction validation des champs
function validateFields(input) {
  let fieldName = input.name;

  // Validaton de l'input PRENOM
  if (fieldName == "firstName") {
    //si le champ n'est pas rempli 
      if (!validateRequired(input)) {
          return false;
      }
      //
      if(!validateLenght(input,3,20)){
        return false;
      }
      //
      if(!validateText(input)){
        return false;
      }
      return (true);
  }
  //Validaton de l'input mail
  if (fieldName == "email") {
         
        if(!validateEmail(input)){
          return false;
        }
    return (true);
  }
  //Validaton de l'input code postal
  if (fieldName == "postCode") {
         
    if(!validatePostalcode(input)){
      return false;
    }
return (true);
}  
}