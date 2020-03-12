/* jslint browser:true, devel:true, eqeq:true, plusplus:true, sloppy:true, vars:true, white:true*/
/* eslint-env browser */
/*eslint 'no-console':0 */



// rechter button event list

var volgende = document.querySelector(".rightbutton");

volgende.addEventListener("click", right);

function right(){
    var classtoevoegen = document.querySelector("body"); //HTML element main geselecteerd
    classtoevoegen.classList.add("volgende");
}

//for loop!



// linker button event list

var vorige = document.querySelector(".leftbutton");

vorige.addEventListener("click", left);

function left(){
    var classtoevoegen = document.querySelector("body"); //HTML element main geselecteerd
    classtoevoegen.classList.add("vorige");
}

// toetsenbordevent bron: https://eloquentjavascript.net/15_event.html


 window.addEventListener("keydown", event => {
    if (event.key == "ArrowRight") /* toetsenbord pijl rechts */ {
        right();
    }
  });

window.addEventListener("keydown", event => {
    if (event.key == "ArrowLeft") /* toetsenbord pijl rechts */ {
        left();
    }
  });





