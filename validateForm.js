function formError(domID, errorMessage ) {
    document.getElementById(domID).innerHTML = errorMessage;
}

function validateForm() {
    var nameCity = document.forms["modalCity"]["myCity"].value;
    var legalAge = document.forms["modalCity"]["mayordeEdad"];
    var errorAge = errorCity = true;
    if(nameCity == "") {
        //document.getElementsByClassName("errorMessage")[0].innerText = "MSG";
        formError("errorCity", "Por favor selecciona una ciudad" );
        } else {
        formError("errorCity", "" );
        errorCity = false;
        }
    if(!legalAge.checked){
        formError("errorAge","Debes ser mayor de edad");
    } else {
        formError("errorAge", "" );
        errorAge = false;
    }
    console.log(errorCity);
    console.log(errorAge);
    if((errorAge || errorCity ) == true) {
    return false;
    }
}
