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
    playAudio2();
    if (firstCardClicked == null){
        var card1 = $(event.currentTarget).children();
        firstcard = $(card1[0]).addClass("hidden"); 
        firstCardClicked = card1[1];
    }
    else {
        var card2 = $(event.currentTarget).children();
        nextcard = $(card2[0]).addClass("hidden"); 
        secondCardClicked = card2[1];
        if ($(firstCardClicked).css("background-image") === $(secondCardClicked).css("background-image")){
            playAudio1();
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

function calculateAccuracy(){

    var accuracy = ((matches/attempts)*100).toFixed(2);
    return accuracy;
}

function displayStats(){

    var game_accuracy = 0;
    var game_accuracy =  calculateAccuracy();
    
    if(isNaN(game_accuracy)){
        game_accuracy = 0;
    }
    var stats = $(".container1").children();
    $(stats[1]).text(games_played);
    if(attempts < 1){
        attempts = 0;
    }
    $(stats[3]).text(attempts);
    $(stats[5]).text(game_accuracy + '%');
}

function modalDisplay(){

    $(".overlay").show(); 
    $("#tryagain").on("click", resetStats);
    
}

function playAudio1() {
    var audio = new Audio("assets/audio/success.wav");
    setTimeout(function(){
        audio.play();
    }, 400);
}

function playAudio2() {
    var audio1 = new Audio("assets/audio/clicksound.mp3");
        audio1.play();
}

function resetStats(){

    matches = 0;
    attempts = 0; 
    game_accuracy = 0;
    $(".cards > div").removeClass("hidden");
    $(".overlay").hide();
    displayStats();
}

