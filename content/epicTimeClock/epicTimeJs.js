angular.module('rootApp', []).controller('rootCtrl', function($scope, $interval) {

 // Button 1 actions - Assassins Creed
 $scope.button1 = function () { return ( 
  document.body.style.backgroundImage = "url('backgrounds/assassinscreedBackground.jpg')",
  document.getElementById("clockDiv").style.fontFamily = "assassinfont",
  document.getElementById("clockDiv").style.fontSize = "8vw",
  document.getElementById("clockDiv").style.wordSpacing = "0.5vw",
  $scope.playAudio1()
 )};

 // Button 1 sound effect - Assassins Creed
 $scope.playAudio1 = function() { 
  var audio = new Audio('sounds/assassinsSound.mp3'); 
  if ($scope.toggleBool === true) audio.play(); 
 };

 // Button 2 actions - God of War
 $scope.button2 = function () { return ( 
  document.body.style.backgroundImage = "url('backgrounds/godofwarBackground.jpg')", 
  document.getElementById("clockDiv").style.fontFamily = "godofwarfont", 
  document.getElementById("clockDiv").style.fontSize = "8vw",
  document.getElementById("clockDiv").style.wordSpacing = "-0.9vw",
  $scope.playAudio2()     
 )};

 // Button 2 sound effect - God of War
 $scope.playAudio2 = function() { 
  var audio = new Audio('sounds/godofwarSound.mp3'); 
  if ($scope.toggleBool === true) audio.play(); 
 };

 // Button 3 actions - Prince of Persia
 $scope.button3 = function () { return ( 
  document.body.style.backgroundImage = "url('backgrounds/princeofpersiaBackground.jpg')", 
  document.getElementById("clockDiv").style.fontFamily = "popfont", 
  document.getElementById("clockDiv").style.fontSize = "5vw",
  document.getElementById("clockDiv").style.wordSpacing = "1vw",
  $scope.playAudio3()
 )}; 
  
 // Button 3 sound effect - Prince of Persia
 $scope.playAudio3 = function() { 
  var audio = new Audio('sounds/popSound.mp3'); 
  if ($scope.toggleBool === true) audio.play(); 
 };

 // Button 4 actions - The Witcher
 $scope.button4 = function () { return ( 
  document.body.style.backgroundImage = "url('backgrounds/thewitcherBackground.jpg')", 
  document.getElementById("clockDiv").style.fontFamily = "thewitcherfont", 
  document.getElementById("clockDiv").style.fontSize = "8vw",
  document.getElementById("clockDiv").style.wordSpacing = "-1vw",
  $scope.playAudio4()
 )};
  
 // Button 4 sound effect - The Witcher
 $scope.playAudio4 = function() {
  var audio = new Audio('sounds/thewitcherSound.mp3'); 
  if ($scope.toggleBool === true) audio.play(); 
 };

 // Add zero function for better display of clock digits
 function addzero(i) { 
  if (i < 10) { i = "0" +i; } return i; 
 };
  
 // Digital clock
 $scope.time = function () { 
  var date = new Date(); 
  return (addzero(date.getHours()) + " : " + addzero(date.getMinutes()) + " : " + addzero(date.getSeconds())); 
 };
 $interval( function() { $scope.time(); }, 1000);

 // Mute button code
 $scope.toggleBool = true;

 function toggleCustom() {
   if ($scope.toggleBool === true) {
    document.getElementById("backgroundMusic").volume = 0.0;
    $scope.toggleBool = false;
   } else {
    document.getElementById("backgroundMusic").volume = 1;
    $scope.toggleBool = true;
   }
 };

 $scope.muteFunc = function () { return ( toggleCustom() ); }; 

}); //end of angular controller

/* Information script */
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});
