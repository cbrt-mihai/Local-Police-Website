function ChangeNumeInfractor() {
    var textbox = document.getElementById("nume_infractor");

    if( textbox.disabled ) textbox.disabled = false;
    else
    {
        textbox.disabled = true;
        textbox.value = "";
    }

}

function ShowVarsta() {
    var slider = document.getElementById("varsta");
    var paragraf = document.getElementById("range");
    
    paragraf.innerHTML = slider.value;
    
}

function GetValues() {
    var paragraf = document.getElementById("declaratie");
    var continut = "";
    var ok = true;

    var nume = document.getElementById("nume");
    var prenume = document.getElementById("prenume");
    var sexm = document.getElementById("sexm");
    var sexf = document.getElementById("sexf");
    
    var varsta = document.getElementById("varsta");
    
    var nume_infractor = document.getElementById("nume_infractor");
    
    var infractiuni_raportate = document.getElementById("infractiune");
    
    var descriere_infractiune = document.getElementById("descriere_infractiune");
    
    var sex_infractor = document.getElementById("sex_infractor");
    
    var signalmente = document.getElementById("signalmente");
    
    if(nume.value == "") {ok = false; nume.previousSibling.style.color = "red";}
    else {nume.previousSibling.style.color = "black";}
    
    if(prenume.value == "") {ok = false; prenume.previousSibling.style.color = "red";}
    else {prenume.previousSibling.style.color = "black";}
    
    if(infractiuni_raportate.value == "") {ok = false; infractiuni_raportate.previousSibling.style.color = "red";}
    else {infractiuni_raportate.previousSibling.style.color = "black";}
    
    if(signalmente.value == "") {ok = false; signalmente.previousSibling.style.color = "red";}
    else {signalmente.previousSibling.style.color = "black";}
    
    if(ok)
    { 
        continut = continut + "<b>Nume:</b> " + nume.value + " <br>";
        continut = continut + "<b>Prenume:</b> " + prenume.value + " <br>";
        continut = continut + "<b>Sex:</b> ";

        if( sexm.checked ) continut = continut + "Masculin <br>"
        else continut = continut + "Feminin <br>"

        continut = continut + "<b>Varsta:</b> " + varsta.value + " <br>";

        continut += "<br>"

        if( nume_infractor.disabled == false ) continut = continut + "<b>Nume infractor:</b> " + nume_infractor.value + " <br>";

        continut = continut + "<b>Infractiune:</b> " + infractiuni_raportate.value + " <br>";

        continut = continut + "<b>Descriere infractiune:</b> " + descriere_infractiune.value + " <br>";

        continut = continut + "<b>Sex infractor:</b> " + sex_infractor.value + " <br>";

        continut += "<b>Semnalmente:</b> ";
        for(var i = 0; i < signalmente.length; i++)
        {
            if( signalmente[i].selected == true ) continut = continut + signalmente[i].value + " ";
        }
        continut += " <br>";

        paragraf.innerHTML = continut;
    }
}
