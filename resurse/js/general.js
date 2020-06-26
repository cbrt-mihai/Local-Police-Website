/*jslint devel: true */

var k = 1;

function WindowResized() {
    if(++k % 2 == 0) alert("Ati schimbat dimensiunea ferestrei, anumite elemente ar putea sa-si fi schimbat marimea");
    var iw = window.innerWidth;
    var ih = window.innerHeight;
    var ow = window.outerWidth;
    var oh = window.outerHeight;
    
    var text = document.getElementById("windowSize");
    text.innerHTML = "Continutul se afla intr-o fereastra de " + iw + "x" + ih + " (max " + ow + "x" + oh + ")";
}

var str_title;
var len;

function TitleAnimation(k) {
    var titlu = document.getElementById("title");
    if(!titlu) return;
    
    if(k==0)
    {
        str_title = titlu.innerHTML;
        len = str_title.length;
        titlu.innerHTML = ""; 
    }
    
    var n;
    var afisare = "";
    
    if(len % 2 == 0)
    {
        n = len/2;
    }
    else
    {
        n = (len+1)/2;
    }
    
    if(k < n)
    {
        for(let i = 0; i <= k; i++)
        {
            afisare = afisare + str_title[i];
        }

        for(let i = k; i >= 0; i--)
        {
             afisare = afisare + str_title[len-1-i];
        }
        
        titlu.innerHTML = afisare;
        k++;
        //setTimeout("TitleAnimation()",1000,k);
        setTimeout(function() { TitleAnimation(k); }, 100);
    }
}

function WordCount() {
	s = document.body.textContent;
    s.replace(/\n/g, ""); //inlocuieste toate enter-urile cu ""
	s = s.replace(/(^\s*)|(\s*$)/gi,""); //scoate whitespace-urile
	s = s.replace(/[ ]{2,}/gi," "); //transforma spatiile multiple in unul singur
	s = s.replace(/\n /,"\n");
	document.getElementById("wordcount").innerHTML = s.split(' ').length;
}

var afk = false;
var afisat = false;
var intervalSetat = false;
var seconds = 0;
var inc;
var afkStart = 5;

function notAfk() {
    afk = false;
    console.log("You are not AFK");
    Inactivitate();
}

function setAfk() {
    afk = true;
}

window.addEventListener('keyup', function (e) {
  notAfk();
  console.log("keyup");
});

window.addEventListener('keydown', function (e) {
  notAfk();
  console.log("keydown");
});

window.addEventListener('keypress', function (e) {
  notAfk();
  console.log("keypress");
});

function incrementSeconds() {
    seconds+= afkStart ;
}

if(!intervalSetat) { setInterval(Inactivitate, afkStart * 1000); intervalSetat=true; }

function Inactivitate() {
    if( afk )
    {
        //console.log("You are AFK");
        var tag = document.getElementById("afk");
        var text = document.getElementById("afkText");
        if(tag)
        {
            if( !afisat )
            {
                afisat = true;
                tag.id = "afk";
                tag.style.width = "500px";
                tag.style.height = "900px";
                tag.innerHTML = "Esti afk! de " + seconds + " secunde.";
            }
            else
            {
                tag.innerHTML = "Esti afk! de " + seconds + " secunde.";
            }
            incrementSeconds();
        }
    }
    else
    {
        setTimeout(setAfk, afkStart * 1000);
        afisat = false;
        seconds = 0;
        var tag = document.getElementById("afk");
        var text = document.getElementById("afkText");
        if( tag ) {
            tag.style.width = "0px";
            tag.style.height = "0px";
            tag.innerHTML = " ";
        }
    }
}