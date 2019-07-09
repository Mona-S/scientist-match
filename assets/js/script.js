$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var firstcard = null;
var nextcard = null;
var max_matches = 4;
var attempts = null;
var games_played = 0;


function handleCardClick(event){
    
    if (firstCardClicked === null){
        var card1 = $(event.currentTarget).children();
        firstcard = $(card1[0]).addClass("hidden"); 
        firstCardClicked = card1[1];
    }
    else{
        var card2 = $(event.currentTarget).children();
        nextcard = $(card2[0]).addClass("hidden"); 
        secondCardClicked = card2[1];
        
        if ($(firstCardClicked).css("background-image") === $(secondCardClicked).css("background-image")){
            matches += 1;
            attempts += 1;
            $(firstCardClicked).fadeOut(3000);
            $(secondCardClicked).fadeOut(3000);
             if(matches === max_matches){
                games_played += 1;
                modalDisplay();
                
            } 
        } 
        else { 
            attempts += 1;
            console.log("no matches");
                setTimeout(function(){
                    $(firstcard).removeClass("hidden"); 
                    $(nextcard).removeClass("hidden");
                }, 1500);  
            }  
            firstCardClicked = null;
        }
    displayStats();
} 
     

function initializeApp(){
    $(".cards").click(handleCardClick);
 } 


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


function modalDisplay(){
    $(".overlay").show();
    $("#tryagain").click(resetStats);
               
}

//Reset Game
function resetStats (){
    matches = 0;
    attempts = 0; 
    game_accuracy = 0;
    games_played += 1;
    displayStats();
    $(".cards  > div").removeClass("hidden");
    $(".overlay").hide();
    initializeApp();
}