function stringArray(array) {
  let i = 1;
  let j = 0;
  let headerData = array[0];
  let currentElement;
  let currentElement2;
  let textTable = document.createElement("table");
  document.body.appendChild(textTable);

  let textHead = document.createElement("thead");
  textTable.appendChild(textHead);
  let textHeadTR = document.createElement("tr");
  textHead.appendChild(textHeadTR);
  let textTH;
  textHead.style.color="red"
  textHead.style.weight="bold";
  let textBody = document.createElement("tbody");
  textTable.appendChild(textBody);
  let textTR;
  let textTD;
  while (j < headerData.length) {
    currentElement=headerData[j];
    textTH = document.createElement("th");
    textHeadTR.appendChild(textTH);
    textTH.textContent=currentElement;
    j++;
}

  while(i < array.length){
    currentElement = array[i];
    textTR = document.createElement("tr");
    textBody.appendChild(textTR);
    j=0;
    while (j < currentElement.length){
      currentElement2 = currentElement[j];
      textTD = document.createElement("td");
      textTR.appendChild(textTD);
      textTD.textContent = currentElement2;
      j++;
    }
    i++;
  }
}

let fishList = [
  ["Ordre","Famille","Nom vernaculaire","Nom binomial"],
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Atheriniformes", "Atherinidae", "JoËl", "Atherina boyeri"],
];

stringArray(fishList);
