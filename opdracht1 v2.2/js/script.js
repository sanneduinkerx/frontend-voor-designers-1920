/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/


/* jslint browser:true, devel:true, eqeq:true, plusplus:true, sloppy:true, vars:true, white:true*/
/* eslint-env browser */
/*eslint 'no-console':0 */

/* ----- geleerd via Inleiding Programmeren schooljaar 2018-2019, gehaald via mijn eindopdracht document mario.js ------*/


// knop button wijzigen


var wijzigen = document.querySelector("button:nth-child(3)");

wijzigen.addEventListener("click", wijzigvolgorde);

function wijzigvolgorde(){
    var classtoevoegen = document.querySelector("body"); //HTML element main geselecteerd
    classtoevoegen.classList.toggle("wijzigen");
//    classtoevoegen.classList.toggle("draggable");
}



// Verplaatsen nummers, bron: https://webdevtrick.com/html-drag-and-drop-list/, code werkt niet goed bij verplaatsing wordt de afbeelding super groot, heb alles geprobeert om het te fixen.

//var btn = document.querySelector('.add');
//var remove = document.querySelector('.draggable');
//
//function dragStart(e) {
//  this.style.opacity = '0.4';
//  dragSrcEl = this;
//  e.dataTransfer.effectAllowed = 'move';
//  e.dataTransfer.setData('text/html', this.innerHTML);
//};
//
//function dragEnter(e) {
//  this.classList.add('over');
//}
//
//function dragLeave(e) {
//  e.stopPropagation();
//  this.classList.remove('over');
//}
//
//function dragOver(e) {
//  e.preventDefault();
//  e.dataTransfer.dropEffect = 'move';
//  return false;
//}
//
//function dragDrop(e) {
//  if (dragSrcEl != this) {
//    dragSrcEl.innerHTML = this.innerHTML;
//    this.innerHTML = e.dataTransfer.getData('text/html');
//  }
//  return false;
//}
//
//function dragEnd(e) {
//  var listItens = document.querySelectorAll('.draggable');
//  [].forEach.call(listItens, function(item) {
//    item.classList.remove('over');
//  });
//  this.style.opacity = '1';
//}
//
//function addEventsDragAndDrop(el) {
//  el.addEventListener('dragstart', dragStart, false);
//  el.addEventListener('dragenter', dragEnter, false);
//  el.addEventListener('dragover', dragOver, false);
//  el.addEventListener('dragleave', dragLeave, false);
//  el.addEventListener('drop', dragDrop, false);
//  el.addEventListener('dragend', dragEnd, false);
//}
//
//var listItens = document.querySelectorAll('.draggable');
//[].forEach.call(listItens, function(item) {
//  addEventsDragAndDrop(item);
//});















