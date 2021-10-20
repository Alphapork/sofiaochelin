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

function scrollToElem(id) {
    if(document.getElementById("hamburger").style.display != 'none') {
        document.getElementById("menuList").style.display = "none";
    }
    var elem = document.getElementById(id);
    var header = document.getElementById("headerId");
    var y = elem.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    console.log(y-header.clientHeight);
    window.scrollTo({top: y-header.clientHeight, behavior: 'smooth'});
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}