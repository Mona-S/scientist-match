$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var firstcard = null;
var nextcard = null;
var max_matches = 9;
var attempts = null;
var games_played = 0;

function handleCardClick(event){
    attempts += 1;
    if (firstCardClicked === null){
        var y = $(event.currentTarget).children();
        firstcard = $(y[0]).addClass("hidden"); 
        firstCardClicked = y[1];
    }
    else{
        var x = $(event.currentTarget).children();
        nextcard = $(x[0]).addClass("hidden"); 
        secondCardClicked = x[1];
        games_played += 1;
        if ($(firstCardClicked).css("background-image") === $(secondCardClicked).css("background-image")){
            matches += 1;
            console.log(matches);
             if(matches === max_matches){
                modalDisplay();
            } 
        } 
        else { 
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
    var accuracy = (matches/games_played)*100;
    return accuracy;
}

function displayStats(){
    var game_accuracy = 0;
    var game_accuracy =  calculateAccuracy();
    var a = $(".container1").children();
    $(a[2]).text(games_played);
    $(a[4]).text(attempts);
    $(a[6]).text(game_accuracy+'%');
}

function modalDisplay(){
    console.log('games played '+ games_played);
    $(".overlay").show();
    console.log('inside');
    $("#tryagain").click(resetStats());
               
}

function resetStats (){
    console.log('inside reset');
    console.log(event);
    var matches = null;
    var attempts = null; 
    var game_accuracy = 0;
   $(".overlay").hide();
    initializeApp();
}