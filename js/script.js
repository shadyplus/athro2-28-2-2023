$(document).on('ready', function(){
/*countdown*/
 function Random(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 var count = $('.left-pack:eq(0)').text(),
   time = setTimeout(function t() {
     count--;
     $('.left-pack').text(count);
     var b = Random(1, 75);
     if (count > 4) {
       time = setTimeout(t, b * 1000);
     }
   }, Random(5, 10) * 1000);


 $('a').not('.ac_footer a').on('click touch',function (e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('.form-main').offset().top
   }, 500);
 });
  
  });