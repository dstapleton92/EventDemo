document.addEventListener('DOMContentLoaded', function() {

   var paras = document.getElementsByClassName('thing');
   for (var i = 0; i < paras.length; i++) {
       paras[i].addEventListener('click', someFunc);
   }

   function someFunc(e) {
       console.log(e.target.id);
   }
});