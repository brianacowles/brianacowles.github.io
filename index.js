function collapsed() {
  var x = document.getElementById("topNav");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}    
function closeV() {
    
    document.getElementById("V").click();
}

function closeW() {
    
    document.getElementById("W").click();
}

$(document).ready(function() {
  $(".search input, .search button").css("height", $(".legs").height());
});

function Download(url) {
    document.getElementById('my_iframe').src = "VJMWordCounter.zip";
};
    
function info() {
    alert("This page is under construction!")
}