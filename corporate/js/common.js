$('#slideMenuButton').on('click',function(){
  if(!$(this).hasClass('open')){
    $('#slideMenuIn').addClass('open');
    $('#slideMenuOut').addClass('open');
    $('#slideMenuButton').addClass('open');
    $('#slideMenuOverlay').addClass('open');
  } else {
    $('#slideMenuIn').removeClass('open');
    $('#slideMenuOut').removeClass('open');
    $('#slideMenuButton').removeClass('open');
    $('#slideMenuOverlay').removeClass('open');
  }
})

$('#slideMenuOverlay').on('click',function(){
  if($('#slideMenuButton').hasClass('open')){
    $('#slideMenuIn').removeClass('open');
    $('#slideMenuOut').removeClass('open');
    $('#slideMenuButton').removeClass('open');
    $('#slideMenuOverlay').removeClass('open');
  }
})
