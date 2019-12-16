$("#connexion_form").submit(function (event) {
    event.preventDefault();
    $(".alert").hide()
    checkConnexion($("#email").val(), $("#password").val())
});

$("#inscription_form").submit(function (event) {
    event.preventDefault();
    $(".alert").hide()
    checkInscription($("#nom").val(), $("#prenom").val(), $("#email").val(), $("#password").val())
});

function checkConnexion(email, password){
    if(!(email == "admin@gmail.com" && password=="admin")){
        $(".alert.alert-danger").show()
    }
    else{        
        $(".alert.alert-success").show()
    }
}   

function checkInscription(nom, prenom, email, password) {
    if (email == "admin@gmail.com") {
        $(".alert.alert-danger").show()
    }
    else{
        $(".alert.alert-success").show()
    }
}