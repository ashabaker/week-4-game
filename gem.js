$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var blue= Math.floor(Math.random()*11+1)
  var green= Math.floor(Math.random()*11+1)
  var pink= Math.floor(Math.random()*11+1)
  var white= Math.floor(Math.random()*11+1)
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  //
  var playerScore= 0;
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
$('#wins').text(wins);
$('#losses').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      blue= Math.floor(Math.random()*11+1);
      green= Math.floor(Math.random()*11+1);
      pink= Math.floor(Math.random()*11+1);
      white= Math.floor(Math.random()*11+1);
      playerScore= 0;
      $('#finalTotal').text(playerScore);
      }
//adds the wins to the playerScore
function wooHoo(){
alert("You Win!");
  wins++;
  $('#wins').text(wins);
  reset();
}
//addes the losses to the playerScore
function loser(){
alert ("Try Again!");
  losses++;
  $('#losses').text(losses);
  reset()
}
//sets up click for jewels
  $('#one').on ('click', function(){
    playerScore = playerScore + blue;
    console.log("New playerScore= " + playerScore);
    $('#finalTotal').text(playerScore);
          //sets win/lose conditions
        if (playerScore == Random){
          wooHoo();
        }
        else if ( playerScore > Random){
          loser();
        }
  })
  $('#two').on ('click', function(){
    playerScore = playerScore + green;
    console.log("New playerScore= " + playerScore);
    $('#finalTotal').text(playerScore);
        if (playerScore == Random){
          wooHoo();
        }
        else if ( playerScore > Random){
          loser();
        }
  })
  $('#three').on ('click', function(){
    playerScore = playerScore + pink;
    console.log("New playerScore= " + playerScore);
    $('#finalTotal').text(playerScore);
//sets win/lose conditions
          if (playerScore == Random){
          wooHoo();
        }
        else if ( playerScore > Random){
          loser();
        }
  })
  $('#four').on ('click', function(){
    playerScore = playerScore + white;
    console.log("New playerScore= " + playerScore);
    $('#finalTotal').text(playerScore);

          if (playerScore == Random){
          wooHoo();
        }
        else if ( playerScore > Random){
          loser();
        }
  });
});
