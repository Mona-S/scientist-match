$(document).ready(initializeApp);

function handleCardClick(event){
console.log(event);

   var a= (event.currentTarget.nextElementSibling.className);
   console.log(a);


   $(event.currentTarget).toggleClass(a);


    
}

function initializeApp(){
    $(".first").click(handleCardClick);
    $(".second").click(handleCardClick);
}
