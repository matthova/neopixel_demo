// color mapping
var h;
var s;
var l;
var r;
var g;
var b;

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  hue
 * @param   {number}  saturation
 * @param   {number}  lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(hue, saturation, lightness){
  if (saturation == 0) {
    r = g = b = lightness; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t){
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    var q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    var p = 2 * lightness - q;
    r = hue2rgb(p, q, hue + 1/3);
    g = hue2rgb(p, q, hue);
    b = hue2rgb(p, q, hue - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

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
  // hard coded saturation to 1
  var rgb = hslToRgb(h / 255, 1, l / 255);
  $.ajax({
    type: "POST",
    url: '/',
    data: {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2]
    },
    success: function(data) {
      console.log(data);
    }
  });

  console.log(h, s, l);

});
