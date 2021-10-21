if(this.window.innerWidth > 1261) {
        var x = document.getElementById("menuList");
        /*x.style.display = "block";*/
        x.classList.add("disp_block");
        x.classList.remove("disp_none");
        x.classList.remove("menu_open");
        x.classList.remove("menu_closed");
    } else {
        var x = document.getElementById("menuList");
        x.classList.add("menu_closed");
        x.classList.remove("menu_open");
        x.classList.remove("disp_none");
        x.classList.remove("disp_block");
        /*x.style.display = "none";*/
    }

function myFunction() {
    var x = document.getElementById("menuList");
    var y = document.getElementById("hamId");
    if (x.classList.contains("menu_open")) {
        x.classList.remove("menu_open");
        /*x.style.display = "none";*/
        x.classList.add("menu_closed");
        y.classList.add("fa-bars");
        y.classList.remove("fa-times");
      } else {
        x.classList.add("menu_open");
        x.classList.remove("menu_closed");
        x.classList.remove("disp_none");
        y.classList.remove("fa-bars");
        y.classList.add("fa-times");
        /*x.style.display = "block";*/
      }
}

window.addEventListener('resize', function(event) {
    if(this.window.innerWidth > 1261) {
        var x = document.getElementById("menuList");
        /*x.style.display = "block";*/
        x.classList.add("disp_block");
        x.classList.remove("disp_none");
        x.classList.remove("menu_open");
        x.classList.remove("menu_closed");
    } else {
        var x = document.getElementById("menuList");
        var y = document.getElementById("hamId");
        x.classList.add("menu_closed");
        y.classList.add("fa-bars");
        y.classList.remove("fa-times");
        x.classList.remove("menu_open");
        x.classList.remove("disp_none");
        x.classList.remove("disp_block");
        /*x.style.display = "none";*/
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
    var hamIco = document.getElementById("hamId");
    if(window.getComputedStyle(ham).display == 'block') {
        document.getElementById("menuList").classList.remove("menu_open");/*.style.display = 'none';*/
        document.getElementById("menuList").classList.add("menu_closed");
        hamIco.classList.add("fa-bars");
        hamIco.classList.remove("fa-times");
    } 
    var elem = document.getElementById(id);
    var header = document.getElementById("headerId");
    var y = elem.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    window.scrollTo({top: y-header.clientHeight -20, behavior: 'smooth'});
}

function scrollToTop() {
    if(current != null) {
        current.classList.remove("selected");
    }
    current = null;
    window.scrollTo({top: 0, behavior: "smooth"});
}