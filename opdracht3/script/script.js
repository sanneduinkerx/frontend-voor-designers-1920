/* jslint browser:true, devel:true, eqeq:true, plusplus:true, sloppy:true, vars:true, white:true*/
/* eslint-env browser */
/*eslint 'no-console':0 */

// selecteert header in de html

var header = document.querySelector('header');

// selecteert de section in de html

var section = document.querySelector('section');

//stap 1 - je maakt hier een variable aan om de json file, de url, op te halen

var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

//stap 2 - om de de jsonfile aan te vragen moet er een nieuwe aanvraag gemaakt worden met een API genoemd XMLHttpRequest

var request = new XMLHttpRequest();

// stap 3 - om de aanvraag te starten wordt 'open' gebruikt en haalt dan de variable van stap 1 op

request.open('GET', requestURL);

//stap 4 - opsturen en aanvragen van json file

request.responseType = 'json'; // hierbij wordt tegen de opgehaalde variable gezegt dat het terug moeten worden gegeven als een json file
request.send(); //hiermee wordt de aanvraag opgestuurt

//stap 5 - Laden, wachten op de file die van de server wordt gehaald, en dan er iets mee gaan doen

request.onload = function() {
  var superHeroes = request.response; //var aanmaken SuperHeroes die wacht op de json file
  populateHeader(superHeroes); // functie PopulateHeader wordt aangestuurt, zie stap 6 en geeft daarmee de jsonfile mee
  showHeroes(superHeroes); // functie Showheroes wordt aangestuurt, zie stap 7 en geeft daarmee de json file mee
}

//Stap 6 - Header invullen

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1'); // er wordt een var aangemaakt die een h1 element aanmaakt in de html
  myH1.textContent = jsonObj['squadName']; //json file object dat squadname heet wordt aangevraagd
  header.appendChild(myH1); //appendChild, voegt daarmee de SquadName, dat zo heet in de json file, toe aan de header onderaan

  var myPara = document.createElement('p'); // maakt een var aan die een paragraaf element toevoegd aan de html
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed']; //voegt in de p de 'hometown' toe die staat in de jsonfile samen met 'formed'
  header.appendChild(myPara); //en voegt dit via hier toe aan de header
}

// stap 7 - De rest van de body invullen

function showHeroes(jsonObj) {
  var heroes = jsonObj['members']; // maakt een var aan die de 'members' pakt vanuit de jsonfile

//for loop - per kolom wordt dit hetzelfde gedaan per Member zeg maar

  for (let i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article'); //in deze alinea worden elementen aangemaakt via een variable, een article, h2, p en een ul
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name; //de h2 bevat alle namen van de helden, en pakt dan 'name', i is daarbij het aantal namen die in de jsonfile staat
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity; //bij var paragraaf 1 wordt de secret Identity neergezet vanuit de json file en daarvoor staat de tekst 'Secret Identity'
    myPara2.textContent = 'Age: ' + heroes[i].age; // pakt de 'age' uit jsonfile en zet er tekst voor
    myPara3.textContent = 'Superpowers:'; // zet tekst neer bij paragraaf nummer 3

    var superPowers = heroes[i].powers; // var aangemaakt genaamd SuperPowers, en haalt daarbij de 'powers' uit de jsonfile

//for loop - SuperPowers

    for (let j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li'); //var aangemaakt die aan de html een li element aanmaakt
      listItem.textContent = superPowers[j]; //vult in de li de 'superpowers' vanuit de jsonfile in
      myList.appendChild(listItem); //en voegt dit toe als listitem
    }

    myArticle.appendChild(myH2); //voegt dit toe binnen de article in de html
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle); //voegt dit toe binnen de section
  }
}
