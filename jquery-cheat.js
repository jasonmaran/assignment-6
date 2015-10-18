// JQUERY CHEAT SHEET
----------------------------------------------------
/* Javascript Library
  - a collection of functions
  - include library in code to have access to functions
  - keeps code-base small
  - less code to write means fewer bugs */
----------------------------------------------------
/* Single Responsibility Principle
  - divide code into modules
  - each module should have only one responsibility
  - no module should encroach on another */
----------------------------------------------------
/* Loading a library
 - create a new file - library.js
 - add to HTML using script tag*/
 ex. <script src="library.js"></script>
----------------------------------------------------
/* A Javascript Library is a tool;
   A Javascript Framework is a structure (toolbox) */

/* jQuery is a Javascipt library
 - syntax is succint
 - implementation is almost 100% cross-browser
 - single-responsibility
 - use to add, remove, or modify elements to the DOM*/

/* Get a link from Google Developers CDN index;
   reference this URL in a <script> tag in project */
ex. <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>   
-----------------------------------------------------
// To use jQuery, select an element
ex. $("body")
    $("h1")
    $(".movie")
    $("#novel")

// then modify it
ex. $(."movie").hide();
    $(."movie").show();
    $(."movie").fadeOut(); //timed in milliseconds  
    $(."movie").fadeIn();  //timed in milliseconds
    $(."movie").slideUp();  //timed in milliseconds
    $(."movie").slideDown();  //timed in milliseconds           
    $(."movie").animate( {
    	opacity: 0.25,
    	width: "70%"
    } , 2000 ); 
---------------------------------------------------
/* Anonymous functions can be called in two ways:
   1) assign the function to a variable */
ex. var ozu = function(myString) {
	//whatever function does
    }
    ozu("movies") //calls

// 2) pass anonymous function as an argument to another function
ex. function ozu(num, func) {
  for (var i=0; i < 100; i++) {
    console.log(i);
  }
  func();
}

ozu(1000, function() {
  console.log('Loop is complete')
})
-----------------------------------------------------
// JQuery's click() can change an element when it's clicked
ex. $(".movies").click(function() {
	console.log("someone likes Ozu");
});
-----------------------------------------------------
/* show() and hide() take an optional callback argument;
   when complete, the callback will execute */
ex. $(".movie").show( function() {
	   $(".movie").slideUp(2000);
});
------------------------------------------------------
/* $(document).ready() fires a ready event once browser
 has loaded all DOM elements */
ex. <script>
     $(document).read(function() {
     	// code will execute once doc has loaded
     });
     </script>
------------------------------------------------------
// Use API documentation on jQuery website as a resource




