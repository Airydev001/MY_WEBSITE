$(function() {

  $('input').blur(function() {
    if ($('this').val() == "" ) {
       $('this').css('border', 'solid 1px red');
       $('this').alert("This can't be blank");
    };

  });

 
});
