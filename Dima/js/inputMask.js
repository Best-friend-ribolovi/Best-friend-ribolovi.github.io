jQuery(function($){
    $(".popup-tel").mask("+7 (999) 999-9999");
    $.mask.definitions['h'] = "[A-Za-z0-9]";
    $(".popup-tg").mask("@hh?hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",{placeholder:" "});
 });
 $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $('.popup-tel').click(function(){
    $(this).setCursorPosition(4);
  });