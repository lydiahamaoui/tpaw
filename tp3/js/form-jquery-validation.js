$(document).ready(function () {

    
    $("#Valider").on("click", function (e) {
        e.preventDefault();

       
        console.log("DOM ready!");

        



        if ($('#nom').val().length < 5 || $('#nom').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }


        else if ($('#prenom').val().length < 5 || $('#prenom').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }


        else if ($('#date').val().length < 5 || $('#date').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }


        else if ($('#adresse').val().length < 5 || $('#adresse').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }
        else if ($('#mail').val().length < 5 || $('#mail').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }
        else {
            $('#myModal2').modal("show");
            document.getElementById('welcome').innerHTML= "Bienvenue  "+ document.querySelector("#prenom").value;
            document.getElementById('message').innerHTML= "Vous etes nés le  "+ document.querySelector("#date").value +" et vous habitez à  ";
            document.getElementById('message2').innerHTML=  document.querySelector("#adresse").value ;

            
        
        var urls = document.querySelectorAll('.mapUrl');

        [].forEach.call(urls, function (item) {
            
            item.setAttribute("href", "https://maps.googleapis.com/maps/api/staticmap?markers="+  $("#adresse").val()+"&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg");
        });

        }

       

    });
});