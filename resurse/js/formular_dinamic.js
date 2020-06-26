function GenerateDynamicForm() {
    var ok = confirm("Esti sigur ca vrei sa dai o declaratie? Declaratiile false pot avea consecinte penale.")
    if(ok){
        var container = document.getElementById("dynamicform");
        var minicnt;
        var option;
        var titlu;
        var input;
        var text;
        
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        
        titlu = document.createElement("h1");
        titlu.id = "titlu";
        container.appendChild(titlu);
        
        minicnt = document.getElementById("titlu");
        
        text = document.createTextNode("Declaratie");
        minicnt.appendChild(text);

        text = document.createElement("span");
        text.innerHTML = "Nume*: ";
        input = document.createElement("input");
        input.type = "text";
        input.id = "nume";
        input.name = "nume";
        container.appendChild(text);
        container.appendChild(input);

        container.appendChild(document.createElement("br"));

        text = document.createElement("span");
        text.innerHTML = "Prenume*: ";
        input = document.createElement("input");
        input.type = "text";
        input.id = "prenume";
        input.name = "prenume";
        container.appendChild(text);
        container.appendChild(input);

        container.appendChild(document.createElement("br"));

        text = document.createElement("span");
        text.innerHTML = "Sex: ";
        input = document.createElement("input");
        input.type = "radio";
        input.id = "sexm";
        input.name = "sex";
        input.value = "masculin";
        input.setAttribute("checked", true);
        container.appendChild(text);
        container.appendChild(input);

        text = document.createElement("span");
        text.innerHTML = "Masculin";
        container.appendChild(text);

        input = document.createElement("input");
        input.type = "radio";
        input.id = "sexf";
        input.name = "sex";
        input.value = "feminin";
        container.appendChild(text);
        container.appendChild(input);

        text = document.createElement("span");
        text.innerHTML = "Feminin";
        container.appendChild(text);

        container.appendChild(document.createElement("br"));
        
        text = document.createElement("span");
        text.innerHTML = "CNP: ";
        input = document.createElement("input");
        input.type = "text";
        input.id = "cnp";
        input.name = "cnp";
        container.appendChild(text);
        container.appendChild(input);
        
        container.appendChild(document.createElement("br"));

        text = document.createElement("span");
        text.innerHTML = "Ora Infractiune: ";
        input = document.createElement("input");
        input.setAttribute("onchange", "ShowVarsta();");
        input.type = "range";
        input.id = "ora_infractiune";
        input.min = 0;
        input.max = 24;
        input.value = 12;
        container.appendChild(text);
        container.appendChild(input);

        text = document.createElement("span");
        text.innerHTML = "";
        text.id = "range";
        container.appendChild(text);

        container.appendChild(document.createElement("br"));

        text = document.createElement("span");
        text.innerHTML = "Cunosti numele infractorului?<br>";
        input = document.createElement("input");
        input.type = "checkbox";
        input.id = "cunosc_infractor";
        input.setAttribute("onclick", "ChangeNumeInfractor();");
        container.appendChild(text);
        container.appendChild(input);

        text = document.createElement("span");
        text.innerHTML = "Da* | ";
        container.appendChild(text);

        input = document.createElement("input");
        input.type = "text";
        input.id = "nume_infractor";
        input.setAttribute("hidden", true);
        container.appendChild(input);

        container.appendChild(document.createElement("br"));

        text = document.createElement("span");
        text.innerHTML = "Infractiunea raportata*: ";
        input = document.createElement("input");
        input.id = "infractiune";
        input.setAttribute("list", "infractiuni");
        input.name = "infractiune";
        container.appendChild(text);
        container.appendChild(input);

        input = document.createElement("datalist");
        input.id = "infractiuni";
        container.appendChild(input);

        minicnt = document.getElementById("infractiuni");

        text = document.createElement("span");
        text.innerHTML = "Crima";
        input = document.createElement("option");
        input.id = "Crima";
        input.value = "Crima";
        minicnt.appendChild(input);

        option = document.getElementById("Crima");
        option.appendChild(text);

        text = document.createElement("span");
        text.innerHTML = "Furt";
        input = document.createElement("option");
        input.id = "Furt";
        input.value = "Furt";
        minicnt.appendChild(input);

        option = document.getElementById("Furt"); 
        option.appendChild(text);

        text = document.createElement("span");
        text.innerHTML = "Contraventie";
        input = document.createElement("option");
        input.id = "Contraventie";
        input.value = "Contraventie";
        minicnt.appendChild(input);

        option = document.getElementById("Contraventie");
        option.appendChild(text);

        container.appendChild(document.createElement("br"));

        text = document.createElement("span");
        text.innerHTML = "Descriere infractiune<br>";
        input = document.createElement("textarea");
        input.id = "descriere_infractiune";
        input.setAttribute("rows", 6);
        input.setAttribute("cols", 75);
        input.setAttribute("onkeyup", "gasesteCuvinte()");
        container.appendChild(text);
        container.appendChild(input);

        container.appendChild(document.createElement("br"));

        text = document.createElement("span");
        text.innerHTML = "Sex infractor<br>";
        input = document.createElement("select");
        input.id = "sex_infractor";
        container.appendChild(text);
        container.appendChild(input);

        minicnt = document.getElementById("sex_infractor");

        input = document.createElement("option");
        input.id = "infm";
        input.value = "Masculin";
        minicnt.appendChild(input);
        text = document.createElement("span");
        text.innerHTML = "Masculin";

        option = document.getElementById("infm");
        option.appendChild(text);

        input = document.createElement("option");
        input.id = "inff";
        input.value = "Feminin";
        minicnt.appendChild(input);
        text = document.createElement("span");
        text.innerHTML = "Feminin";

        option = document.getElementById("inff");
        option.appendChild(text);

        input = document.createElement("option");
        input.id = "infi";
        input.value = "Incert";
        minicnt.appendChild(input);
        text = document.createElement("span");
        text.innerHTML = "Incert";

        option = document.getElementById("infi");
        option.appendChild(text);

        container.appendChild(document.createElement("br"));

        text = document.createElement("span");
        text.innerHTML = "Semnalmente infractor*:";
        container.appendChild(text);
        input = document.createElement("select");
        input.id = "signalmente";
        input.style = "width: 100px; height: 100px;";
        input.setAttribute("multiple", true);
        input.setAttribute("onclick", "ChangeSemnalmente();");
        container.appendChild(input);

        minicnt = document.getElementById("signalmente");

        input = document.createElement("option");
        input.id = "inalt";
        input.value = "Inalt";
        minicnt.appendChild(input);

        option = document.getElementById("inalt");
        text = document.createElement("span");
        text.innerHTML = "Inalt";
        option.appendChild(text);

        input = document.createElement("option");
        input.id = "mediu";
        input.value = "Mediu";
        minicnt.appendChild(input);

        option = document.getElementById("mediu");
        text = document.createElement("span");
        text.innerHTML = "Mediu";
        option.appendChild(text);

        input = document.createElement("option");
        input.id = "scund";
        input.value = "Scund";
        minicnt.appendChild(input);

        option = document.getElementById("scund");
        text = document.createElement("span");
        text.innerHTML = "Scund";
        option.appendChild(text);

        input = document.createElement("option");
        input.id = "blond";
        input.value = "Blond";
        minicnt.appendChild(input);

        option = document.getElementById("blond");
        text = document.createElement("span");
        text.innerHTML = "Blond";
        option.appendChild(text);

        input = document.createElement("option");
        input.id = "saten";
        input.value = "Saten";
        minicnt.appendChild(input);

        option = document.getElementById("saten");
        text = document.createElement("span");
        text.innerHTML = "Saten";
        option.appendChild(text);

        input = document.createElement("option");
        input.id = "brunet";
        input.value = "Brunet";
        minicnt.appendChild(input);

        option = document.getElementById("brunet");
        text = document.createElement("span");
        text.innerHTML = "Brunet";
        option.appendChild(text);

        input = document.createElement("option");
        input.id = "robust";
        input.value = "Robust";
        minicnt.appendChild(input);

        option = document.getElementById("robust");
        text = document.createElement("span");
        text.innerHTML = "Robust";
        option.appendChild(text);

        input = document.createElement("option");
        input.id = "potrivit";
        input.value = "Potrivit";
        minicnt.appendChild(input);

        option = document.getElementById("potrivit");
        text = document.createElement("span");
        text.innerHTML = "Potrivit";
        option.appendChild(text);

        input = document.createElement("option");
        input.id = "slab";
        input.value = "Slab";
        minicnt.appendChild(input);

        option = document.getElementById("slab");
        text = document.createElement("span");
        text.innerHTML = "Slab";
        option.appendChild(text);

        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));

        input = document.createElement("button");
        input.id = "genereaza";
        input.setAttribute("onclick", "GetValues()");
        container.appendChild(input);

        minicnt = document.getElementById("genereaza");
        text = document.createElement("span");
        text.innerHTML = "Genereaza";
        minicnt.appendChild(text);
        
        /*
        input = document.createElement("button");
        input.id = "ofereastra";
        input.setAttribute("onclick", "openWindow()");
        container.appendChild(input);

        minicnt = document.getElementById("ofereastra");
        text = document.createElement("span");
        text.innerHTML = "Deschide intr-o alta fereastra";
        minicnt.appendChild(text);
        
        input = document.createElement("button");
        input.id = "cfereastra";
        input.setAttribute("onclick", "closeWindow()");
        container.appendChild(input);

        minicnt = document.getElementById("cfereastra");
        text = document.createElement("span");
        text.innerHTML = "Inchide fereastra";
        minicnt.appendChild(text);
        */
        
        var paragraf = document.createElement("p");
        paragraf.innerHTML = "";
        paragraf.id = "declaratie";
        container.appendChild(paragraf);
        
        load();
    }
}

function ChangeNumeInfractor() {
    var textbox = document.getElementById("nume_infractor");

    if( textbox.hidden ) textbox.hidden = false;
    else
    {
        textbox.hidden = true;
        textbox.value = "";
    }

}

function ChangeSemnalmente() {
    var semn11 = document.getElementById("inalt");
    var semn12 = document.getElementById("mediu");
    var semn13 = document.getElementById("scund");
    
    var semn21 = document.getElementById("blond");
    var semn22 = document.getElementById("saten");
    var semn23 = document.getElementById("brunet");
    
    var semn31 = document.getElementById("robust");
    var semn32 = document.getElementById("potrivit");
    var semn33 = document.getElementById("slab");
    
    if( semn11.selected ) { semn12.disabled = true; semn13.disabled = true; }
    else 
    { 
        semn12.disabled = false; 
        semn13.disabled = false; 
        
        if( semn12.selected ) { semn11.disabled = true; semn13.disabled = true; }
        else 
        { 
            semn11.disabled = false; 
            semn13.disabled = false; 
            
            if( semn13.selected ) { semn11.disabled = true; semn12.disabled = true; }
            else { semn11.disabled = false; semn12.disabled = false; }
        }
    }
    
    if( semn21.selected ) { semn22.disabled = true; semn23.disabled = true; }
    else 
    { 
        semn22.disabled = false; 
        semn23.disabled = false; 
        
        if( semn22.selected ) { semn21.disabled = true; semn23.disabled = true; }
        else 
        { 
            semn21.disabled = false; 
            semn23.disabled = false; 
            
            if( semn23.selected ) { semn21.disabled = true; semn22.disabled = true; }
            else { semn21.disabled = false; semn22.disabled = false; }
        }
    }
    
    if( semn31.selected ) { semn32.disabled = true; semn33.disabled = true; }
    else 
    { 
        semn32.disabled = false; 
        semn33.disabled = false; 
        
        if( semn32.selected ) { semn31.disabled = true; semn33.disabled = true; }
        else 
        { 
            semn31.disabled = false; 
            semn33.disabled = false; 
            
            if( semn33.selected ) { semn31.disabled = true; semn32.disabled = true; }
            else { semn31.disabled = false; semn32.disabled = false; }
        }
    }
    
    
    
    
    
}

function ShowVarsta() {
    var slider = document.getElementById("ora_infractiune");
    var paragraf = document.getElementById("range");
    
    paragraf.innerHTML = slider.value;
    
}

var ok_cuv = true;
var cuvinte_gasite = [];
var saving = false;
var saved = false;

var saveInterval;
var deleteInterval;

function save() {
    var container = document.getElementById("dynamicform");
    var descriere = document.getElementById("descriere_infractiune");
    
    var text;
            
    text = document.createElement("span");
    text.id = "saved";
    
    text.innerHTML = "<br>continut salvat...";
    container.insertBefore(text, descriere.nextElementSibling);
    
    localStorage.removeItem("desc");
    localStorage.setItem("desc", descriere.value);
    
    setTimeout("clear()", 1000);
}

function clear() {
    var ce = document.getElementById("saved");
    ce.innerHTML = "";
}

function load() {
    var descriere = document.getElementById("descriere_infractiune");
    
    if(localStorage.getItem("desc")) descriere.value = localStorage.getItem("desc");
}

function gasesteCuvinte() {
    if( !saving ) {
        saveInterval = setInterval("save()", 3000);
        saving = true;
    }
    
    var descriere = document.getElementById("descriere_infractiune").value;
    var cuvant_interzis = ["malefic", "rau"];
    cuvinte_gasite.length = 0;
    ok_cuv = true;
    
    for(let i=0; i <= cuvant_interzis.length; i++)
    {
        cuvinte_gasite.push( descriere.match(new RegExp("\\W"+ cuvant_interzis[i] +"\\W", 'g')) );
        if(descriere.match(new RegExp("\\W"+ cuvant_interzis[i] +"\\W", 'g'))) ok_cuv = false;
    }
}

var continut = "";
var cntint = 0;
var corectat = false;

function GetValues() {
    var container = document.getElementById("dynamicform");
    var paragraf = document.getElementById("declaratie");
    
    var ok = true;

    var nume = document.getElementById("nume");
    var prenume = document.getElementById("prenume");
    var sexm = document.getElementById("sexm");
    var sexf = document.getElementById("sexf");
    
    var ora_infractiune = document.getElementById("ora_infractiune");
    
    var nume_infractor = document.getElementById("nume_infractor");
    
    var infractiuni_raportate = document.getElementById("infractiune");
    
    var descriere_infractiune = document.getElementById("descriere_infractiune");
    
    var sex_infractor = document.getElementById("sex_infractor");
    
    var signalmente = document.getElementById("signalmente");
    
    var cnp = document.getElementById("cnp");
    
    var varsta;
    var an_cnp = "";
    var luna_cnp = "";
    var zi_cnp = "";
    var data_curenta = new Date();
    
    var rgb;
    
    if(parseInt(cnp.value[0], 10) <= 1) an_cnp = "1";
    else an_cnp = "2";
    
    an_cnp = parseInt((an_cnp + cnp.value.slice(1, 4)), 10);
    luna_cnp = parseInt(cnp.value.slice(4,5), 10);
    zi_cnp = parseInt(cnp.value.slice(5,7), 10);
    
    if(nume.value == "") {ok = false; nume.previousSibling.style.color = "red";}
    else {nume.previousSibling.style.color = "black";}
    
    if(prenume.value == "") {ok = false; prenume.previousSibling.style.color = "red";}
    else {prenume.previousSibling.style.color = "black";}
    
    if(infractiuni_raportate.value == "") {infractiuni_raportate.previousSibling.style.color = "red";}
    else {infractiuni_raportate.previousSibling.style.color = "black";}
    
    if(signalmente.value == "") {signalmente.previousSibling.style.color = "red";}
    else {signalmente.previousSibling.style.color = "black";}
    
    if( !nume_infractor.hidden && nume_infractor.value == "" ) {nume_infractor.previousSibling.style.color = "red";}
    else {nume_infractor.previousSibling.style.color = "black";}
    
    
    rgb = window.getComputedStyle(nume.previousSibling, null).getPropertyValue("color");
    rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');
    if(rgb[0] != rgb[1] || rgb[1] != rgb[2]) ok = false;
    
    rgb = window.getComputedStyle(prenume.previousSibling, null).getPropertyValue("color");
    rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');
    if(rgb[0] != rgb[1] || rgb[1] != rgb[2]) ok = false;
    
    rgb = window.getComputedStyle(infractiuni_raportate.previousSibling, null).getPropertyValue("color");
    rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');
    if(rgb[0] != rgb[1] || rgb[1] != rgb[2]) ok = false;
    
    rgb = window.getComputedStyle(signalmente.previousSibling, null).getPropertyValue("color");
    rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');
    if(rgb[0] != rgb[1] || rgb[1] != rgb[2]) ok = false;
    
    rgb = window.getComputedStyle(nume_infractor.previousSibling, null).getPropertyValue("color");
    rgb = rgb.substring(4, rgb.length-1)
         .replace(/ /g, '')
         .split(',');
    if(rgb[0] != rgb[1] || rgb[1] != rgb[2]) ok = false;
    
    
    if(ok)
    { 
        if( !ok_cuv )
        {
            var aici = document.getElementById("descriere_infractiune");
            var text;
            
            text = document.createElement("span");
            text.id = "cuvint";
            if( !cntint ) {
                text.innerHTML = "<br>Cuvinte interzise au fost introduse!!";
                text.style.color = "red";
                container.insertBefore(text, aici.nextElementSibling);
                cntint++;
                corectat = true;
            }
        }
        else
        {
            clearInterval(saveInterval);
            clearInterval(deleteInterval);
            localStorage.clear();
            
            if( corectat ) {
                var elim = document.getElementById("cuvint");
                elim.innerHTML = "";
                cntint--;
            }
            
            continut = continut + "<b>Nume:</b> " + nume.value + " <br>";
            continut = continut + "<b>Prenume:</b> " + prenume.value + " <br>";
            continut = continut + "<b>Initiale:</b> " + nume.value[0] + ". " + prenume.value[0] + ". " + " <br>";
            continut = continut + "<b>Sex:</b> ";

            if( sexm.checked ) continut = continut + "Masculin <br>"
            else continut = continut + "Feminin <br>"

            continut = continut + "<b>CNP: </b>" + cnp.value + " <br>";

            continut = continut + "<b>Data nasterii: </b>" + zi_cnp + " " + luna_cnp + " " + an_cnp + " <br>";

            if( (data_curenta.getMonth() + 1) <= luna_cnp && data_curenta.getDate() < zi_cnp) an_cnp++;

            continut = continut + "<b>Varsta: </b>" + (data_curenta.getFullYear() - an_cnp)+ " ani si " + (data_curenta.getMonth() - luna_cnp + 1) + " luni <br>"; 

            continut = continut + "<b>Ora infractiune:</b> " + ora_infractiune.value + " <br>";

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

            var newParagraf = document.createElement("p");
            newParagraf.innerHTML = continut;
            newParagraf.id = "declaratie";

            paragraf.parentNode.replaceChild(newParagraf, paragraf);

            alert("Declaratia a fost creata cu succes!");
            var win = confirm("Vreti sa vedeti datele intr-o fereastra noua?");
            if(win)
                openWindow();
        }
    }
    else
        alert("Nu ati completat toate campurile obligatorii marcate cu *");
}

var newWindow;

function openWindow() {
    newWindow = window.open("", "Date declarate", "width=450,height=600");
    newWindow.document.write("<h1>Rezumat declaratie</h2>");
    newWindow.document.write("<p></p>");
    
    var paragraf = newWindow.document.getElementsByTagName("p");
    paragraf[0].innerHTML = continut + "<br>";
    
    newWindow.alert("Fereastra se va inchide dupa 3 minute");
    setTimeout("closeWindow()", 3*60*1000);
}

function closeWindow() {
    newWindow.close();
}
