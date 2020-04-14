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


# Opdracht 3 - Top Rated Movies

Met deze opdracht heb ik een door middel van een JSON file informatie ingeladen in de HTML via Javascript. De JSON file die ik gebruikt heb is: https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json. Op deze webbrowser die ik gemaakt  staat een lijst van een aantal films, vormgeven in css. Op de site kan je meer informatie vinden per film, filteren en er zit een functie bij waarbij je darkmode of lightmode kan kiezen.

## UI stack -States
[UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) worden opgevangen en zijn vormgegeven.

## UI events
meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen.

---
De website bevat UI events, zoals het gebruiken van toetsenbord om van darkmode naar lightmode te gaan. Klikken op meer details en de genre knoppen bevatten een click event. En door middel van scrollen worden de andere 3 films geladen.

## principles
de interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).
