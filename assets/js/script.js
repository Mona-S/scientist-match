$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var firstcard = null;
var nextcard = null;
var max_matches = 2;
var attempts;
var games_played;

function handleCardClick(event){
    console.log(event);
    //console.log (firstCardClicked + ' ' + secondCardClicked);
    $(event.currentTarget).toggleClass(event.currentTarget.nextElementSibling.className);

   if (firstCardClicked === null){
        firstCardClicked = event.currentTarget.nextElementSibling;
        console.log("firstcardclicked", firstCardClicked);
        firstcard = event.currentTarget;  
        console.log("firstcard",firstcard);   
    }
    else{
        secondCardClicked = event.currentTarget.nextElementSibling;
        nextcard = event.currentTarget; 
        console.log("secondcard",nextcard);     
        //console.log (firstCardClicked + ' ' + secondCardClicked);
      
        if ($(firstCardClicked).css("background-image") === $(secondCardClicked).css("background-image")){
            matches += 1;
            if(matches === max_matches){
                console.log('iamhere');
                console.log($("container2"));
               $(".overlay").show();
               $("tryagain").click(initializeApp);
            }
            console.log(matches);
            firstCardClicked = null;
            secondCardClicked = null;
            firstcard = null;
            nextcard = null;
            //console.log (firstCardClicked + ' ' + secondCardClicked);
        } else {
            console.log("no matches");
            //console.log (firstCardClicked + ' ' + secondCardClicked);
            //console.log ('hi '+ $(firstcard) + ' ' + $(nextcard));
            
                setTimeout(function(){
                    $(firstcard).toggleClass("hidden"); 
                    $(nextcard).toggleClass("hidden");
                }, 1500); 
                firstCardClicked = null;
                secondCardClicked = null;
               // firstcard = null;
                //nextcard = null;
        } 
    } 
    //console.log (firstCardClicked + ' ' + secondCardClicked);
    //console.log (firstcard + ' ' + nextcard);
}

function initializeApp(){
    $(".first").click(handleCardClick);
    $(".second").click(handleCardClick);
    $(".third").click(handleCardClick);
    $(".fourth").click(handleCardClick);
    $(".fifth").click(handleCardClick);
    $(".six").click(handleCardClick);
    $(".seven").click(handleCardClick);
    $(".eight").click(handleCardClick);
    $(".nine").click(handleCardClick);
    $(".ten").click(handleCardClick);
    $(".eleven").click(handleCardClick);
    $(".twelve").click(handleCardClick);
    $(".thirteen").click(handleCardClick);
    $(".fourteen").click(handleCardClick);
    $(".fifteen").click(handleCardClick);
    $(".sixteen").click(handleCardClick);
    $(".seventeen").click(handleCardClick);
    $(".eighteen").click(handleCardClick);
  
}
