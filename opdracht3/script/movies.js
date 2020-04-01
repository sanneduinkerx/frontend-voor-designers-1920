/* jslint browser:true, devel:true, eqeq:true, plusplus:true, sloppy:true, vars:true, white:true*/
/* eslint-env browser */
/*eslint 'no-console':0 */

// ----------------------JSON FILE + elementen maken en vullen ---------------------------- //

var section = document.querySelector('section'); // selecteert section element in html

// ---------------------------------- json file aanvragen ------------------------------------------------------------------- //

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; //de url van de json file
var request = new XMLHttpRequest(); //aanvraag voor een api in de vorm van XMLHttpRequest

request.open('GET', requestURL); //om de aanvraag te starten wordt .open gebruikt en wordt de var request opgehaalt en de URL
request.responseType = 'json'; // hierbij wordt tegen de opgehaalde variable gezegt een json file is
request.send(); //hiermee wordt de aanvraag opgestuurt

// ----------------------------------- Gegevens laden van jsonfile en functie aanmaken --------------------------------------- //

request.onload = function () {
    var films = request.response; //var aanmaken titles die wacht op aanvraag van de json file
    ophalenfilms(films); //functie wordt gestart en de var wordt meegegeven
}

//------------------------------------- HTML elementen vullen met gegevens uit JSON file -------------------------------------- //

function ophalenfilms(jsonObj) {

    var bestand = jsonObj; //

    // -- loop herhaalt dit voor elk object in jsonfile

    for (let i = 0; i < bestand.length; i++) {

        //  -- aanmaken elementen binnen html section -- //

        var article = document.createElement('article'); //article aanmaken in html genaamd myArticle
        var myDiv = document.createElement('div'); // div aanmaken in html
        var title = document.createElement('h2'); //h2 in html aanmaken genaamd title
        var cover = document.createElement('img'); //img in html aanmaken genaamd cover
        var date = document.createElement('p'); //p aanmaken in html genaamd date
        var genre = document.createElement('p'); //p aanmaken in html genaamd genre
        var plot = document.createElement('p'); //p aanmaken in html genaamd plot
        var meerInfo = document.createElement('button');


        // -- class toevoegen voor het veranderen van stijl -- //

        genre.classList.add('genre')

        // -- vullen html elementen -- //

        cover.src = bestand[i].cover; //de img bron aangeven in de html file en haalt dit uit de json file
        title.textContent = bestand[i].title; //de content van de h2 vullen, pakt daarmee de jsonfile en voegt daarom de gegevens toe die achter title staan in de json file
        date.textContent = bestand[i].release_date.split(' ')[2]; //.split, opdelen met string patroon () de spatie ertussen, zodat het kan zien dat er 3 delen zijn. En dan kies het 3de item.
        genre.textContent = bestand[i].genres;
        plot.textContent = bestand[i].simple_plot;

        // reviews - score gemiddelde pakken

//        var reviews = bestand[i].reviews;
//
//
//        int scoretot = 0;
//        for (let i = 0; i < reviews.length; i++) {
//            var score = reviews[i].score;
//            scoretot += score.toint;
//        }

        //  -- plaatsen in html structuur, appendchild = voegt in article de img toe als child --

        section.appendChild(article);

        article.appendChild(cover);
        article.appendChild(myDiv);

        myDiv.appendChild(title);
        myDiv.appendChild(date);
        myDiv.appendChild(genre);
        myDiv.appendChild(plot);

    }

}

// ----- wishlist ---- Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image //


var main = document.querySelector('main'); // selecteer de main om daarin de wishlist te plaatsen
var divlist = document.createElement('div'); // maak een div aan

var wishlist = new Image; // image aanmaken met een var
wishlist.src = 'wishlist.png'; // de bron opgeven welke afbeelding

main.appendChild(divlist); // toevoegen onderaan de main
divlist.append(wishlist); // wishlist binnen div toevoegen

divlist.classList.add('wishlist');

// new thing

