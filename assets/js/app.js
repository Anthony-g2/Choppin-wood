$(document).ready(function(){
// Neccessary Variables
let keyPress = 0;
let keyPress2 = 0;
// Load Title Page
  $('.loading-page').fadeIn(1000);
// Load question1
  $('.start').click(function(){
     $('.loading-page').css({
     'display':'none'
      });
     $('.question1').fadeIn(1000);
   });
//  Question 1
  $('.q1a').click(function(){
    $('.conceq1a').fadeIn(1000);
    $('.q1b').off();
  });

  $('.q1b').click(function(){
    $('.conceq1b').fadeIn(1000);
    $('.q1a').off();
  });
    // q1 Concequences
  $('.cont1a').click(function(){
    $('.question1').css({
    'display':'none'
     });
    $('.conceq1a').css({
    'display':'none'
    });
    $('.minigame').fadeIn(1000);
    $(document).keydown(moveL);
  });

  $('.cont1b').click(function(){
    $('.conceq1ba').fadeIn(1000);
  });
// Question 3
  $('.q3a').click(function(){
    $('.question3a').fadeIn(1000);
    $('.q3b').off();
  });

  $('.q3b').click(function(){
    $('.conceq3b').fadeIn(1000);
    $('.q3a').off();
  });

  $('.q3ab').click(function(){
    $('.conceq3b').fadeIn(1000);
    $('.q3aa').off();
  });

  $('.q3aa').click(function(){
    $('.conceq3a').fadeIn(1000);
  });

  $('.cont3').click(function(){
    $('.que3').css({
    'display':'none'
     });
     $('.question4').fadeIn(1000);
  });
// Question 4
  $('.q4a').click(function(){
    $('.conceq4a').fadeIn(1000);
    $('.q4b').off();
  });

  $('.q4b').click(function(){
    $('.conceq4b').fadeIn(1000);
    $('.q4a').off();
  });

  $('.cont4').click(function(){
    $('.que4').css({
    'display':'none'
     });
     $('.question5').fadeIn(1000);
  });
// Question 5
  $('.q5a').click(function(){
    $('.conceq5a').fadeIn(1000);
    $('.q5b').off();
  });

  $('.q5b').click(function(){
    $('.conceq5b').fadeIn(1000);
    $('.q5a').off();
  });

  $('.cont5').click(function(){
    $('.que5').css({
    'display':'none'
     });
     $('.finish1').fadeIn(1000);
  });
// Final screen
  $('.f1').click(function(){
    $('.finish1').css({
    'display':'none'
     });
     $('.minigame2').fadeIn(1000);
     $(document).keydown(moveR);
  });
// Game Over
   $('.gOver').click(function() {
    location.reload();
    });

    // helper functions
    function moveL(e) {
      if(e.keyCode == 37) {
        // left arrow moves lumJack
        $('.lumJack').css({
          'margin-left': '-=40'
        });
        keyPress++;
      };
      if (keyPress === 9){
        $('.minigame').css({
        'display':'none'
        });
        $('.question3').fadeIn(1000);
      };
    };

    function moveR(e) {
      if(e.keyCode == 39) {
        // right arrow moves lumJack
        $('.lumJack2').css({
          'margin-left': '+=40'
        });
        keyPress2++;
      };
      if (keyPress2 === 6){
        $('.minigame2').css({
        'display':'none'
        });
        $('.conceqF').fadeIn(1000);
      };
    };
});
