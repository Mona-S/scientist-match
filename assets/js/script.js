$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var firstcard = null;
var nextcard = null;
var max_matches = 1;
var attempts = null;
var games_played = 0;
var openCheck = false;


function handleCardClick(event){

    if (firstCardClicked == null){
        var card1 = $(event.currentTarget).children();
        firstcard = $(card1[0]).addClass("hidden"); 
        firstCardClicked = card1[1];
    }
    else {
        var card2 = $(event.currentTarget).children();
        nextcard = $(card2[0]).addClass("hidden"); 
        secondCardClicked = card2[1];
        openCheck = true;
        if ($(firstCardClicked).css("background-image") === $(secondCardClicked).css("background-image")){
       
            matches += 1;
            attempts += 1;
            firstCardClicked = null;
            secondCardClicked = null;

             if(matches === max_matches){ 
                games_played += 1;
                modalDisplay();     
            } 
        } 
        else { 
            attempts += 1;
                setTimeout(function(){
                    $(firstcard).removeClass("hidden"); 
                    $(nextcard).removeClass("hidden");
                }, 300);  
            }  
            firstCardClicked = null;
        }
    displayStats();
} 
     

function initializeApp(){

    $(".cards").on("click", handleCardClick); 
 } 

//Calculate Accuracy
function calculateAccuracy(){

    var accuracy = ((matches/attempts)*100).toFixed(2);
    return accuracy;
}

//Stats
function displayStats(){

    var game_accuracy = 0;
    var game_accuracy =  calculateAccuracy();
    var stats = $(".container1").children();
    $(stats[2]).text(games_played);
    $(stats[4]).text(attempts);
    $(stats[6]).text(game_accuracy + '%');
}

//Modal
function modalDisplay(){

    $(".overlay").show(); 
    $("#tryagain").on("click", resetStats);
    
}

//Reset Game
function resetStats(){

    matches = 0;
    attempts = 0; 
    game_accuracy = 0;
    $(".cards > div").removeClass("hidden");
    $(".overlay").hide();
    displayStats();
}

