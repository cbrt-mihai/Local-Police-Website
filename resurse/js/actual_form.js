var img = "";
var nume;
var prenume;
var semnalment1;
var semnalment2;
var semnalment3;
var ultima_locatie;

var img_count = 0;

function AddImageInput() {
    if(img_count==0)
    {
        img_count++;
        var element = document.getElementById("formular");
        var firstNode = element.firstChild;
        var input;

        input = document.createElement("input");
        input.type = "file";
        input.id = "imagine";
        input.name = "imagine";
        input.setAttribute("accept","image/*");

        element.insertBefore(input, firstNode);

        input = document.getElementById("imagine");

        element.insertBefore(document.createElement("br"), input.nextSibling);
        element.insertBefore(document.createElement("br"), input.nextSibling);
    }
    else
        alert("Se poate insera maxim o imagine!");
}

function ResetValues() {
    alert("Formularul a fost resetat cu succes");
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    
    return vars;
}

function getValues() {
    var continut = "";
    if(getUrlVars()["imagine"]) img = getUrlVars()["imagine"];
    nume = getUrlVars()["nume"];
    prenume = getUrlVars()["prenume"];
    sex = getUrlVars()["sex"];
    semnalment1 = "" + getUrlVars()["semnalment1"];
    semnalment2 = "" + getUrlVars()["semnalment2"];
    semnalment3 = "" + getUrlVars()["semnalment3"];
    ultima_locatie = getUrlVars()["ultima_locatie"];
    
    localStorage.setItem("img", img);
    localStorage.setItem("nume", nume);
    localStorage.setItem("prenume", prenume);
    localStorage.setItem("sex", sex);
    localStorage.setItem("smn1", semnalment1);
    localStorage.setItem("smn2", semnalment2);
    localStorage.setItem("smn3", semnalment3);
    localStorage.setItem("loc", ultima_locatie);
    
    continut = continut + localStorage.getItem("img") + " " + localStorage.getItem("nume") + " " + localStorage.getItem("prenume") + " " + localStorage.getItem("sex") + " " + localStorage.getItem("smn1") + " " + localStorage.getItem("smn2") + " " + localStorage.getItem("smn3") + " " + localStorage.getItem("loc");
    
    localStorage.clear();
    
    alert(continut);
}

function Succes() {
    alert("Date preluate cu succes");
}