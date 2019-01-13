$(document).ready(function(e) {
 
  $(document).keyup(function(){

    var nombreCaractere = $("#name").val().length;
    var msg = nombreCaractere + ' car';

    $('#compteur1').text(msg);


    var nombreCaractere2 = $("#firstname").val().length;
    var msg2 = nombreCaractere2 + ' car';

    $('#compteur2').text(msg2);
    
  });

  $("#valide").on("click",function store(event) { 
    event.preventDefault();
    
        var inputNom= document.getElementById("name");
        var inputPrenom= document.getElementById("firstname");
        var inputDn= document.getElementById("birth");
        var inputAdresse= document.getElementById("adresse");
        var inputEmail= document.getElementById("mail");
        
        if($("#name").val() !== "" && $("#firstname").val() !== "" && $("#birth").val() !== "" && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
        
        localStorage.setItem("name", inputNom.value);
        localStorage.setItem("firstname", inputPrenom.value);
        localStorage.setItem("birth", inputDn.value);
        localStorage.setItem("adresse", inputAdresse.value);
        localStorage.setItem("mail", inputEmail.value);

       $('#success').addClass("alert alert-success").text("Bravo! le formulaire est sauvegardé.");

      $("#table").show();
      $("#liste_des_contacts").show()
       
       document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
       .innerHTML +'<tr><td>'+localStorage.getItem("name")+'</td><td>'+localStorage.getItem("firstname") +'</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q=' +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
       }
      
       document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
       .innerHTML +'<tr><td>'+contactStore.getList.name.val()+
       '</td><td>'+localStorage.getItem("firstname") +
       '</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q=' +
       localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
       
     
       
      
  });

 

}); 
   
 



R