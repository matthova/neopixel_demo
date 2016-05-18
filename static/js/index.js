// color mapping
var h;
var s;
var l;

$(".bg").mousemove(function( event ) {

  $('.color').css('opacity', 1);

  var w = $( document ).width();
  h = $( document ).height();

  var x = event.pageX;
  var y = event.pageY;	

  var relW = w / 360;
  var relH = h / 100;

  var relX = x / relW;
  var relY = y / relH;

  var invX = relW - relX;
  var invY = relH - relY;

  var inv = 100 - relY;

  var scroll = $(document).scrollTop();
  var relScroll = scroll / relH * 4;

  h = Math.floor(relX);
  console.log('h', h);
  s = 75;
  l = Math.floor(inv);

  var hsl = h + 'º' + ', ' + s + '%, ' + l + '%';
  var css = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';

  $('.color').text(hsl);
  $(".bg").css('background', css);
  $('.copy').val(css);

  if (l >= 86) {
    $(".color").css('color', '#999999');
  }
  if (l <= 85) {
    $(".color").css('color', '#FFFFFF');
  }
});

$(".bg").click(function( event ) {
  console.log(h, s, l);

});
