var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
function nextSequence(){
    userClickedPattern = [];
    ++level;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#' + randomChosenColour ).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}
$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
function playSound(name){
    var audio = new Audio( "sounds/" + name+".mp3");
    audio.play();

}
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  var started = false;
  var level = 0;

  $(document).on("keydown", function() {
    if (!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;

    }
    
  });
  function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length ){
            setTimeout(() => {nextSequence();
                
            }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {$("body").removeClass("game-over");
            
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }

  }
  function startOver(){
    level = 0;
    gamePattern = [];
    started = false;

  }
function simulateKeypress(key) {
    // Create a keyboard event object
    var event = new KeyboardEvent("keydown", {key: key});
    // Dispatch the event to the document
    document.dispatchEvent(event);
}
  