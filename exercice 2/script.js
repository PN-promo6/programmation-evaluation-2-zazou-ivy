let title_h1= document.createElement("h1"); //h1's creation
let description=document.createElement("p"); //p's creation
let button= document.createElement("input"); //button's creation


function displayCinema(){

  document.body.appendChild(title_h1);
  document.body.appendChild(description);
  document.body.appendChild(button);


  title_h1.textContent="Cinéma le Dauphin"; //the title gets the next content
  description.textContent="Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des cinés-repas, des débats, des ateliers, des ciné-goûteers, de 11H30 à 23h du mardi au dimanche(jusqu'a minuit le vendredi et le samedi)." ;
  button.type="button";
  button.value="Voir les films à l'affiche cette semaine";
  button.style.margin="2rem";

}

displayCinema(); //function's call


// part 2.2


function stringArray(array) {
  let i = 0;
  let j = 0;
  let textTrBody;
  let textTD;
  let currentElement;
  let currentElement2;
  let textTable = document.createElement("table");
  let textBody = document.createElement("tbody");

  document.body.appendChild(textTable);
  textTable.appendChild(textBody);

  while (i < array.length) {
    currentElement = array[i];
    textTrBody = document.createElement("tr");
    textBody.appendChild(textTrBody);
    j = 0;
    while (j < currentElement.length) {
      currentElement2 = currentElement[j];
      textTD = document.createElement("td");
      textTrBody.appendChild(textTD);
      textTD.textContent = currentElement2;
      j++;
    }
    i++;
  }
}

let array_1 = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM ", "Ulrich Kohler ", "Allemagne ", "2019 ", "2h ", "vf "],
  ["UN VIOLENT DÉSIR DE BONHEUR ", "Clément Schneider", "France ", "2018 ", "1h15 ", "vf "],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE?", "Roberto Minervini", "Etats-uni/Italie ", "2018 ", "2h03 ", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du sud", "2018 ", "1h06 ", "vostfr"],

];
stringArray(array_1);

function moviesArray(array){
let ttable= document.createElement("table");
document.body.appendChild(ttable);
// ttable=array[O];

}
