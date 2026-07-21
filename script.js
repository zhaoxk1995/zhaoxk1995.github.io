let current="en";


function switchLang(lang){


current=lang;


document.querySelectorAll("[data-en]")
.forEach(el=>{


el.innerHTML=
el.getAttribute(
"data-"+lang
);


});


}






switchLang("en");
