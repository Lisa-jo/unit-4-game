$( document ).ready(function() {
  //Needed to do the max-min in paranetheses after Math.random then the minimum is the +19
  
  //Start the score system with a variable set as 0
  var wins = 0;
  var losses = 0;
  var totalScore = 0;

  var randomNumber

  //Creates different number variables for each crystal
  startGame();

  function startGame(){
      
      totalScore = 0;
      
      randomNumber = Math.floor((Math.random() * (120-19)) + 19);
      console.log(randomNumber);
      
      var ranCrystal1 = Math.floor((Math.random() * (12-1)) + 1)
      var ranCrystal2 = Math.floor((Math.random() * (12-1)) + 1)
      var ranCrystal3 = Math.floor((Math.random() * (12-1)) + 1)
      var ranCrystal4 = Math.floor((Math.random() * (12-1)) + 1)

      $("img.crystal1").attr("data-value", ranCrystal1)//data-value = name of attribute
      $("img.crystal2").attr("data-value", ranCrystal2)//value = ranCrystal which is assigned above
      $("img.crystal3").attr("data-value", ranCrystal3)
      $("img.crystal4").attr("data-value", ranCrystal4)

      $("#numberToGuess").html("<h3>"+ randomNumber + "<h3>");
      $("#totalScore").html("<h3>"+ totalScore + "<h3>");

  }

  function update(){
      $("#totalScore").html("<h3>"+ totalScore + "<h3>");
  }

  function WinLose(){
      if (totalScore === randomNumber){
          alert("win");
          wins++
          $("#wins").html("<h3>"+ wins + "<h3>");
          startGame();
      }
        else if (totalScore > randomNumber){
            alert("lose");
            losses++;
            $("#losses").html("<h3>"+ losses + "<h3>");
            startGame();
        }
  }

  $("div.crystals img").on("click", function() {
      
      var value = $(this).attr("data-value");//this refers to the thing that was clicked on
      totalScore = parseInt(value) + totalScore;//learned the +value
      console.log("Your Total Score: " + totalScore);
      update()
      WinLose();
    });

    
});