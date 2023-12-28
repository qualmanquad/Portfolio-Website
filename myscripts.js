function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function addBox() {
    var x = document.getElementById("grid");
    x.innerHTML += "<div class='box' id='box'></div>";
  }