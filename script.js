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