<!--
# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data

<!--Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.-->


<!--## Werkwijze-->
<!--Schets eerst hoe de functionaliteit er uit komt te zien. Maak daarna een breakdown-schets hoe de verschillende componenten technisch moeten gaan werken...-->

<!--Werk daarna je ontwerp uit in HTML, CSS en JavaScript.-->


<!--## Criteria-->
<!--1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze. CHECK!-->
<!--2. De data wordt van een externe bron ingeladen met Javascript. CHECK!-->
<!--3. Een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) worden opgevangen en zijn vormgegeven. 2 dus bijna zit op de helft, nog een kiezen-->
<!--4. In de demo maak je gebruik van meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen. 3 ui events, dus CHECK!-->
<!--5. In de demo dien je rekening te houden met de interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).-->
<!--6. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github-->

<!--## Resources-->
<!--- Gebruik verschillende [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) om de functionaliteit mee te bedienen.-->
<!--- Met behulp van [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) of [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) kan een [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) file worden geladen. Daarna kun je de HTML elementen aanmaken, de juiste content koppelen en aan de DOM toevoegen.-->
<!--- Hier staat een [tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) voor het laden van JSON data en het aanmaken van HTMl elementen.-->
<!--- Bij het laden van externe data kan de server verschillende [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) doorgeven, die kun je gebruiken om feedback te tonen.-->

# Opdracht 3: Een interactie met externe data - Een filmlijst met verschillende interacties

Met deze opdracht heb ik een door middel van een JSON file informatie ingeladen in de HTML via Javascript. De JSON file die ik gebruikt heb is: https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json. Op deze webbrowser die ik gemaakt  staat een lijst van een aantal films, vormgeven in css. Op de site kan je meer informatie vinden per film, filteren en er zit een functie bij waarbij je darkmode of lightmode kan kiezen. De webbrowser werkt het beste in Chrome via de laptop. Waar aan gedacht is binnen de website lees je hieronder.

---

## UI stack -States
Een van de criteria hield in om een aantal state uit de ui stack vorm te geven en op te vangen. Ik heb hierbij gebruik gemaakt van de loading state, wanneer de json file wordt ingeladen. En de ideal state, waarbij je alle films ziet.

## UI events
De website bevat ook meerdere zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen. Zoals het gebruiken van toetsenbord om van darkmode naar lightmode te gaan. Klikken op meer details en de genre knoppen bevatten een click event. En door middel van scrollen worden de andere 3 films geladen.

## Design Principles
Ik heb ook rekening gehouden met de interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/). Deze houden in:

4. Keep Users in Control
Door aan de gebruiker te laten zien wat er gebeurt als je op de knop drukt. En dat de gebruiker weet wat er gebeurt. In het ontwerp komt dat terug, zoals gebruik van toetsenbord voor lightmode en darkmode. Er staat wat je moet doen en met een icoontje wordt aangegeven dat het dark- of lightmode wordt. Maar ook bij '+ more details' is duidelijk dat je meer details kan bekijken van de film.

8. Provide a Natural Next Step
Het zegt het al, zorg voor een natuurlijke volgende stap voor de gebruiker. Laat de gebruiker niet zitten bij een dead end. Binnen het ontwerp kan de gebruiker een overzicht zien van alle films, maar zodra de gebruiker wilt zoeken in een genre kan dat door middel van de filter knoppen bovenaan. De gebruiker kan altijd nog terug en alle films bekijken. Als de gebruiker daarna per film meer informatie wilt zien kan dat ook, de gebruiker kan altijd terug.

9. Appearance follows Behaviour

11. Strong Hierarchy Works Best


