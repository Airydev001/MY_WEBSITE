var modal = document.getElementById("modal_kick");
var btn = document.getElementById("getty");
var close = document.getElementsByClassName("close")[0];
  
//
window.onload = function() {
    
   modal.style.display="block";
    
}
//use to close the modalcontent 
close.onclick = function() {
   modal.style.display = "none";
}
//you can click anywhere outside the modal okay!
window.onclick = function(event){
    if(event.target==modal){
        modal.style.display = "none";
    }
}
