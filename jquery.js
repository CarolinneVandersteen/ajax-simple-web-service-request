/*
Opdracht

Publiceer een webpagina die een willekeurige quote van een beschikbare webservice laat zien: That's the spirit

De webservice bevindt zich op deze URL. Dit heet het eindpunt.

Indien het verzoek aan de webservice mislukt, geef dan een foutmelding. Indien het verzoek slaagt, vorm het JSON antwoord om in HTML en geef deze weer. 
Laat je webpagina er leuk uitzien m.b.v. CSS / SCSS.


Doe dezelfde oefening met jQuery. Vergelijk de syntaxis. Wat zijn de voor- en nadelen van elke benadering (jQuery vs vanilla JavaScript) ?*/



 $(document).ready(function() {
    $("#btn").trigger("click", myFunction());
  
    $("#btn").click(myFunction);
  
      function myFunction(){
      $.ajax({url: "https://thatsthespir.it/api", success: function(result){
        $("#img").attr("src", result.photo);
        $("#quote").html(result.quote);
        $("#author").html("-" + result.author);
        console.log(result);
      }});
    };
  })
  