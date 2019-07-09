$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var card1 = null;
var card2 = null;

function handleCardClick(event){
    console.log(event);
    
    if (firstCardClicked === null){
        firstCardClicked = $(event.currentTarget).children();
        $(firstCardClicked[0]).addClass("hidden");
        card1 = firstCardClicked[1];
        console.log(card1);

    }
    else{
        secondCardClicked = $(event.currentTarget).children();
        $(secondCardClicked[0]).addClass("hidden");
        card2 = secondCardClicked[1];
        console.log(card2);

        console.log("matches 1");
        console.log(card1);
        if ($(card1).css("background-image")=== $(card2).css("background-image")){
        console.log("matches");
        matches +=1 ;
        }
    else{
        /* setTimeout(function(){
            $(firstcard).removeClass("hidden") */
        
    } 
    }   
}


function initializeApp(){
    $(".cards").click(handleCardClick);

}