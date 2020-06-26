var express = require('express');/*include modulul express*/
var path = require('path');/*include modulul express
memorand in variabila express obiectul asociat modulului(exportat de modul)*/
var formidable = require('formidable');
var fs = require('fs');
var crypto = require('crypto');
var session = require('express-session');
var app = express();

// pentru folosirea ejs-ului 
app.set('view engine', 'ejs');

app.use(session(
	{
		secret:"cheie_sesiune",
		resave: true,
		saveUninitialized:false
	}
)); // crreaza campul session in request: req.session (req.session e acelasi obiect pentru toate cererile)


app.use(express.static(path.join(__dirname, 'resurse')));

// cand se face o cerere get catre pagina de index 
app.get('/', function(req, res) {
	/*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
    res.render('html/index');
});


app.get('/bla', function(req, response) {
            console.log("bla bla")
        response.setHeader('Content-Type', 'text/html');

        response.write("<html><body>O pagina cu node</body></html>");
        response.end();

});

app.get("/logout", function(req, res){
	req.session.destroy();
	res.render("html/index")
});

app.post('/login',function(req,res) {
  var dateForm=new formidable.IncomingForm()
	dateForm.parse(req, function(err, fields, files){
		//<input type="file" name="fis1" /> ----> files.fis1
		//fields e pentru restul de inputuri <input name="ceva" ---> fields.ceva
		var textJson=fs.readFileSync("resurse/json/useri.json","utf8"); //cale relativa la fisierul index.js
		var obJson=JSON.parse(textJson);
		var parolaCriptata;
		var algoritmCriptare=crypto.createCipher("aes-128-cbc", "cheie_criptare")
		parolaCriptata=algoritmCriptare.update(fields.parola, "utf-8","hex");
		parolaCriptata+=algoritmCriptare.final("hex");
    var user= obJson.useri.find(function(elem){
			return elem.username == fields.username &&  elem.parola==parolaCriptata
		})
		if(user){
			console.log("Exista utilizatorul")
			req.session.utilizator=user;
			res.render("html/index", {username: user.username})
		}
    
	})
})

// -------------------- cereri de tip post----------------
//<form method="post" action="/inreg"
app.post('/inreg',function(req,res) {
  var dateForm=new formidable.IncomingForm()
	dateForm.parse(req, function(err, fields, files){
		//<input type="file" name="fis1" /> ----> files.fis1
		//fields e pentru restul de inputuri <input name="ceva" ---> fields.ceva
		var textJson=fs.readFileSync("resurse/json/useri.json","utf8"); //cale relativa la fisierul index.js
		var obJson=JSON.parse(textJson);
		var parolaCriptata;
		var algoritmCriptare=crypto.createCipher("aes-128-cbc", "cheie_criptare")
		parolaCriptata=algoritmCriptare.update(fields.parola, "utf-8","hex");
		parolaCriptata+=algoritmCriptare.final("hex");
    
		var userNou={
      id: obJson.lastId,
      username: fields.username,
      nume: fields.nume,
      prenume: fields.prenume,
      sex: fields.sex,
      email: fields.email,
      parola: parolaCriptata,
      dataInreg: new Date(),
      rol: "user"
    }
		obJson.useri.push(userNou);
		obJson.lastId+=1;
		//JSON.stringify opusul lui JSON.parse --->  din obiect imi face string
		var jsonNou=JSON.stringify(obJson);
		fs.writeFileSync("resurse/json/useri.json",jsonNou);
		res.redirect("/");
	})
})

app.get("/*",function(req, res){
	
	console.log("============================");
	console.log(req.url);
	//err este null daca randarea s-a terminat cu succes, si contine eroarea in caz contrar (a survenit o eroare)
	//rezRandare - textul in urma randarii (compilarii din ejs in html)
	var un= req.session? (req.session.utilizator? req.session.utilizator.username: null)  :  null; 

	res.render("html"+req.url, {username: un}, function(err, rezRandare){
		if (err){
			if(err.message.includes("Failed to lookup view")){
				res.status(404).render("html/404", {username: un});
			}
			else{
				throw err;
			}
		}
		else{
			res.send(rezRandare);
		}
	});
})

app.use(function(req, res) {
	res.status(404).render('html/404');
}
)

app.listen(8080);
console.log('Aplicatia se va deschide pe portul 8080.');