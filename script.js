document.addEventListener('DOMContentLoaded', function() {

   var paras = document.getElementsByClassName('thing');
   for (var i = 0; i < paras.length; i++) {
       paras[i].addEventListener('click', someFunc);
   }

   function someFunc(e) {
       // Store the target of the click event (i.e. what was clicked upon) in a variable for easy use
       var clickedElement = e.target;
       console.log(clickedElement.id);
       // Here, clickedElement (or whatever variable name you choose) gives you access to the same functions/properties
       // you normally have on the result of document.createElement or document.getElementsBy...
       // ex, clickedElement.className, clickedElement.style, clickedElement.id
   }
});