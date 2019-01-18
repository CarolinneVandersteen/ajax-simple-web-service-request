/*
Opdracht

Publiceer een webpagina die een willekeurige quote van een beschikbare webservice laat zien: That's the spirit

De webservice bevindt zich op deze URL. Dit heet het eindpunt.

Indien het verzoek aan de webservice mislukt, geef dan een foutmelding. Indien het verzoek slaagt, vorm het JSON antwoord om in HTML en geef deze weer.
 Laat je webpagina er leuk uitzien m.b.v. CSS / SCSS.

Doe dezelfde oefening met jQuery. Vergelijk de syntaxis. Wat zijn de voor- en nadelen van elke benadering (jQuery vs vanilla JavaScript) ?*/


document.getElementById("btn").addEventListener("click", randomQuote);
document.addEventListener("DOMContentLoaded", randomQuote);

function randomQuote(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://thatsthespir.it/api", true);

  xhr.onload = function() {
    if(this.status == 200) {
      var text = JSON.parse(this.responseText);

      console.log(this.responseText);

      document.getElementById("img").src = text.photo;
      document.getElementById("quote").innerHTML = text.quote;
      document.getElementById("author").innerHTML = "-" + text.author;
    }
  }

  xhr.onerror = function() {
    console.log("error!");
  }

  xhr.send();
}