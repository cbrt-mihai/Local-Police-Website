/*jslint devel: true */

function func() {
    "use strict";
    var x;
    x = prompt("Dati un numar", "");
    alert(x);
}

function censor() {
    "use strict";
    var ok = confirm("Vrei sa cenzurati si CNP-ul?");
    var elem;
    var i,j,k;
    if(ok)
    {
        var cnp = document.getElementsByClassName("remove");
        for(j = 0; j < cnp.length; j++)
        {
            elem = document.getElementsByClassName("remove");
            for(k = 0; k < elem.length; k++)
            {
                elem[k].classList.add("censor");
            }
        }
    }
    
    var x = document.getElementsByClassName("censor");
    for (i = 0; i < x.length; i++)
    {
        x[i].innerHTML = "<strong><i>CENSORED</i></strong>";
        x[i].style.color = "red";
    }
    alert("Elemente cenzurate cu succes!");
}

function remove() {
    "use strict";
    var ok = confirm("Vrei sa stergeti si numarul de telefon?");
    var elem;
    var aux;
    var i,j,k;
    if(ok)
    {
        var nrtel = document.getElementsByClassName("censor");
        for(j = 0; j < nrtel.length; j++)
        {
            elem = document.getElementsByClassName("censor");
            for(k = 0; k < elem.length; k++)
            {
                elem[k].classList.add("remove");
            }
        }
    }
    
    var tbrow = document.getElementsByClassName("row");
    var nrlinii = tbrow.length;
    var nrelem;
    for(i = 0; i < nrlinii; i++)
    {
        nrelem = tbrow[i].children.length;
        for(j = 0; j < nrelem; j++)
        {
            if(tbrow[i].children[j].className == "remove" || tbrow[i].children[j].className == "censor remove" || tbrow[i].children[j].className == "remove censor")
            {
                tbrow[i].removeChild(tbrow[i].children[j]);
                nrelem--;
                j--;
            }
        }
    }
    
    alert("Elemente sterse cu succes!");
}