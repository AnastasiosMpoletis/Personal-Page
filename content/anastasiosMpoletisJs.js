/* Smooth scrolling script */
$(document).ready(function(){
  $(".innerLinks a, .navbar a, footer a[href='#index']").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 900, function(){ window.location.hash = hash; }); } 
  });
})

/* Display delay of content script */
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if ( pos < winTop + (screen.height * 1.1) ) {
      $(this).addClass("slide");
    }
  });
});

/* "To Top" button tooltip script */
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
});

/* CV collapse glyphicon effect script */
$('#demo').on('shown.bs.collapse', function () {
  if($(window).width() > 768) {
    $("#cvButton .glyphicon").toggleClass('rotate-180'); 
  }
});
$('#demo').on('hidden.bs.collapse', function () {
  if($(window).width() > 768) {
    $("#cvButton .glyphicon").toggleClass('rotate-180'); 
  }
});

/* Hover button shadow effect deactivate for mobile. Button shadow instead */ 
$( window ).resize(function() {
  if($(window).width() < 768) {
    $("#cvButton, #profilePhoto, .portfolioLinkDiv, .img-thumbnail").removeClass("boxShadowEffect");
    $("#cvButton, #linkedInButton, .portfolioLinkDiv, .gitHub").addClass("boxShadow");
    $("#linkedInButton, .gitHub").removeClass("buttonHover");
  }
  else {
    $("#cvButton, #linkedInButton, .portfolioLinkDiv, .gitHub").removeClass("boxShadow");
    $("#cvButton, #profilePhoto, .portfolioLinkDiv, .img-thumbnail").addClass("boxShadowEffect"); 
    $("#linkedInButton, .gitHub").addClass("buttonHover");
  }
});
