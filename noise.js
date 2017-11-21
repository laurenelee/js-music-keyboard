$(document).ready( function() {

  // pressing keys
  $('body').on('keydown', function(event) {
    let possKeys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    if (possKeys.includes(event.key)) {
      let audio = ('#' + event.key + 'Audio');
      audio.get(0).currentTime = 0;
      audio.get(0).play();
    }
  });

  // clicking boxes
  $('.instrument').on('click', 'button', function() {
    let audio = $('#' + $(this).html() + 'Audio');
    audio.get(0).currentTime = 0;
    audio.get(0).play();

  });

});
