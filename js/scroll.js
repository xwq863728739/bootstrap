
$(".img-list .pic").eq(0).show();
var i=0;
function fad(){
  var m = i%5;
  var n = (i+1)%5;
  $(".img-list .pic").eq(m).fadeOut(1000);
  $(".img-list .pic").eq(n).fadeIn(1000);
  $(".num a").eq(m).removeClass("active");
  $(".num a").eq(n).addClass("active");
  i++;
  return n;
};

// $(".banner .num li").click(function(){
//     clearInterval(int);
//     // var index=fad();
//     var index=$(this).index();
//     $(".img-list .pic").eq(index).fadeIn(1000).siblings().fadeOut();
//     $(".num a").eq(index).addClass("active").siblings().removeClass("active");
//     int = setInterval(fad,3000);
// })

int = setInterval(fad,3000);