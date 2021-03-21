$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
  });

  $(".rslides_portfolio").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
  });

// Visibility.onVisible(function(){
//   setTimeout(function () {
//     $(".intro h1").addClass("animate__animated animate__fadeInDown");
//   }, 400);
//     // setTimeout(function () {
//     //   $(".intro blockquote").addClass("animated fadeInDown");
//     // }, 800);
//     // setTimeout(function () {
//     //   $(".intro .btn").addClass("animated fadeInDown");
//     // }, 1200);
//     // setTimeout(function () {
//     //   $(".animar").addClass("animated fadeInDown");
//     // }, 1600);
  
//     // setTimeout(function () {
//     //   $(".intro-interna h1").addClass("animated fadeInDown");
//     // }, 400);
//     // setTimeout(function () {
//     //   $(".intro-interna p").addClass("animated fadeInDown");
//     // }, 800);
//     // setTimeout(function () {
//     //   $(".animar-interno").addClass("animated fadeInDown");
//     // }, 1200);
// });