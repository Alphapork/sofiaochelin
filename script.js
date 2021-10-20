function myFunction() {
    var x = document.getElementById("menuList");
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}

window.addEventListener('resize', function(event) {
    if(this.window.innerWidth > 1081) {
        var x = document.getElementById("menuList");
        x.style.display = "block";
    } else {
        var x = document.getElementById("menuList");
        x.style.display = "none";
    }
}, true);
var current = null;
function scrollToElem(id, selfId) {
    if(current != null) {
        current.classList.remove("selected");
    }
    current = document.getElementById(selfId);
    current.classList.add("selected");

    var ham = document.getElementById("hamburger");
    if(window.getComputedStyle(ham).display == 'block') {
        document.getElementById("menuList").style.display = 'none';
        console.log("why")
    } 
    var elem = document.getElementById(id);
    var header = document.getElementById("headerId");
    var y = elem.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    window.scrollTo({top: y-header.clientHeight, behavior: 'smooth'});
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}