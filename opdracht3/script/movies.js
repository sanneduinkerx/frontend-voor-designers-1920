/* jslint browser:true, devel:true, eqeq:true, plusplus:true, sloppy:true, vars:true, white:true*/
/* eslint-env browser */
/*eslint 'no-console':0 */

// ----------------------JSON FILE + elementen maken en vullen ---------------------------- //

var section = document.querySelector('main section'); // selecteert section element in html

// ---------------------------------- json file aanvragen ------------------------------------------------------------------- //

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; //de url van de json file
var request = new XMLHttpRequest(); //aanvraag voor een api in de vorm van XMLHttpRequest

request.open('GET', requestURL); //om de aanvraag te starten wordt .open gebruikt en wordt de var request opgehaalt en de URL
request.responseType = 'json'; // hierbij wordt tegen de opgehaalde variable gezegt een json file is
request.send(); //hiermee wordt de aanvraag opgestuurt

// ----------------------------------- Gegevens laden van jsonfile en functie aanmaken --------------------------------------- //

request.onload = function () {
    var films = request.response; //var aanmaken titles die wacht op aanvraag van de json file
    ophalenfilms(films, 0, 2); //functie wordt gestart en de var wordt meegegeven, geeft daarbij ook een start en eind hoeveel films

};

//------------------------------------- HTML elementen vullen met gegevens uit JSON file -------------------------------------- //

function ophalenfilms(jsonObj, start, eind) {

    var bestand = jsonObj;


    //More details, aanmaken var en array voor in de loop: hulp en uitleg van Marco Duinker
    var moreInfo = [document.createElement('button'), document.createElement('button'), document.createElement('button'), document.createElement('button'), document.createElement('button'), document.createElement('button')];
    var plot = [document.createElement('p'), document.createElement('p'), document.createElement('p'), document.createElement('p'), document.createElement('p'), document.createElement('p')];

    // -- loop herhaalt dit voor elk object in jsonfile - i= start, dus positie 0 en i is gelijk aan eind dus 2, daarbij worden de eerste 3 films geladen en erin gezet.

    for (let i = start; i <= eind; i++) {

        //  -- aanmaken elementen binnen html section -- //

        var article = document.createElement('article'); //article aanmaken in html genaamd myArticle
        var myDiv = document.createElement('div'); // div aanmaken in html
        var title = document.createElement('h2'); //h2 in html aanmaken genaamd title
        var cover = document.createElement('img'); //img in html aanmaken genaamd cover
        var date = document.createElement('p'); //p aanmaken in html genaamd date

        // -- vullen html elementen -- //

        cover.src = bestand[i].cover; //de img bron aangeven in de html file en haalt dit uit de json file
        title.textContent = bestand[i].title; //de content van de h2 vullen, pakt daarmee de jsonfile en voegt daarom de gegevens toe die achter title staan in de json file
        date.textContent = bestand[i].release_date.split(' ')[2]; //.split, opdelen met string patroon () de spatie ertussen, zodat het kan zien dat er 3 delen zijn. En dan kies het 3de item.

        plot[i].textContent = bestand[i].simple_plot; // plot[i] staat voor welke plaats in de array

        moreInfo[i].innerHTML = '+ more details';

        //  -- plaatsen in html structuur, appendchild = voegt in article de img toe als child --

        section.appendChild(article);

        article.appendChild(cover);
        article.appendChild(myDiv);

        article.appendChild(moreInfo[i]);

        myDiv.appendChild(title);
        myDiv.appendChild(date);


        // For Each: elke element in array apart functie uitvoeren, geholpen en uitleg door Marco Duinker en vanuit boek van Jon Duckett: 'Javascript & JQuery'//
        bestand[i].genres.forEach(function (genre) {

            var genreElement = document.createElement('p'); //p aanmaken in html genaamd genre

            genreElement.textContent = genre; //vult de paragraaf met 1 genre

            genreElement.classList.add('genre'); //geeft een class voor stijlen in css
            myDiv.appendChild(genreElement); // voegt het toe aan de div
        });

        myDiv.appendChild(plot[i]);

        // UI EVENT - CLICK more details -

        moreInfo[i].addEventListener("click", show);

        function show() {


            // bron if else statement: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_read_more
            if (plot[i].textContent === bestand[i].simple_plot) {
                console.log('you clicked for more details');
                plot[i].textContent = bestand[i].plot;
                moreInfo[i].innerHTML = '- less details';
            } else {
                console.log('you clicked for less details');
                plot[i].textContent = bestand[i].simple_plot;
                moreInfo[i].innerHTML = '+ more details';

            };
        }

    }

}

// -------------------------- WISHLIST BUTTON ------------------ //

// Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image //


var main = document.querySelector('main'); // selecteer de main om daarin de wishlist te plaatsen
var divlist = document.createElement('div'); // maak een div aan

var wishlist = new Image; // image aanmaken met een var
wishlist.src = 'img/wishlist.png'; // de bron opgeven welke afbeelding

main.appendChild(divlist); // toevoegen onderaan de main
divlist.append(wishlist); // wishlist binnen div toevoegen

divlist.classList.add('wishlist');


// ----------------------- GENRE FILTEREN -------------------//

var genre = ['Thriller', 'Horror', 'Crime', 'Drama', 'Adventure', 'Action'];
var vulButtons = document.querySelector('main div button p');

for (let i = 0; i < genre.length; i++) {
    vulButtons.innerHTML = genre[i];

    vulButtons.addEventListener('click', filterGenre1);

    function filterGenre1() {
        console.log('you clicked on ' + genre[i]);
    }
}

// ------------------------ UI STACK - STATES ---------------------------- //

//loading OKAY DOESNT WORK noted denk ik...  - bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState

var html = document.querySelector('html');
var body = document.querySelector('body');

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    initLoader();
  }
  else if (event.target.readyState === 'complete') {
//    initApp();
    setTimeout(initApp, 2000);
  }
});

function initLoader(){
    html.classList.add('loading');
    var imgGif = document.createElement('img');
    var overlayBlock = document.createElement('div');
    imgGif.src = "img/LOADING.gif";
    body.appendChild(overlayBlock);
    overlayBlock.appendChild(imgGif);
    overlayBlock.classList.add('overlay')
    imgGif.classList.add('loadinggif');
}

function initApp(){
    html.classList.remove('loading');

}

// --------------------------- UI EVENTS -------------------------- //

// SCROLL //

window.addEventListener('scroll', loadingContent); // event toevoegen, scrollen en activeert functie LoadingContent

// laden van meer films wanneer je scrollt - bron: hulp van Marco Duinker en via Jon Ducket boek Javascript and Jquery

var eventGescrolled = false; //een var die false is, aangeven dat er nog niet gescrollt is

function loadingContent() {

    console.log('you scrolled'); //in console zie je dat je gescrolled hebt

    // if statement - !: niet, alleen als de var evenGescrolled false(!) is wordt de if statement gestart en wordt er nieuwe content geladen daarna wordt de var true en bij opnieuw scrollen laadt hij niet nog eens de content

    if (!eventGescrolled) {
        var films = request.response;
        ophalenfilms(films, 3, 5); // functie ophalenfilms wordt gestart en vult de volgende 3 films aan
        eventGescrolled = true; // var wordt nu true en daarom herhaalt hij maar 1 keer de functie als je scrollt
    }

};

// KEYPRESS  - bron: toetsenbordevent bron: https://eloquentjavascript.net/15_event.html //

// - press D on keyboard - Darkmode activated


// var aanmaken selecteren img en p in header
var imgVullen = document.querySelector('header section img')
var pVullen = document.querySelector('header section p');

// vullen van de content - automatisch darkmode, dus dit is default
imgVullen.src = 'img/lightmode.png';
pVullen.innerHTML = 'L - Key';


window.addEventListener("keydown", event => {

    if (event.key == "d") {
        keypushedD();
        document.querySelector('body').classList.remove('lightmode'); //als je op darkmode wilt maar de class voor lightmode staat nog aan wordt het verwijdert door deze functie, doordat de website al in darkmode is gestijlt komt er geen class bij

        // content vullen html
        imgVullen.src = 'img/lightmode.png';
        pVullen.innerHTML = 'L - Key';

    }
});

// functie die wordt uitgevoerd bij drukken op toets D

function keypushedD() {
    console.log('you pushed key D, darkmode is now activated');
};

// - press L - Lightmode activated

window.addEventListener("keydown", event => {

    if (event.key == "l") {
        keypushedL();

        //content vullen html
        imgVullen.src = 'img/darkmode.png';
        pVullen.innerHTML = 'D - Key';
    }

});

function keypushedL() {
    console.log('you pushed key L, lightmode is now activated');
    document.querySelector('body').classList.add('lightmode');
};

//click event staat ergens anders bovenin


