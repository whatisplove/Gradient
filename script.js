var i = 0;
var colors = ["#000000", "#007972", "#100076", "#930FC1", "#7C033D"];

$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

  $(".radial-gradient").css(
    "background",
    "repeating-radial-gradient(circle at " +
      mouseXpercentage +
      "%" +
      mouseYpercentage +
      "%, " +
      colors[0] +
      "," +
      colors[1] +
      "," +
      colors[2] +
      "," +
      colors[3] +
      "," +
      colors[4] +
      " 7%"
  );
});

setInterval(function() {
  var moveToLast = colors.shift();
  colors.push(moveToLast);
}, 300);