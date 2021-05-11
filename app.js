document.getElementById("content").innerHTML =
  localStorage["text"] || "Type Here";

setInterval(function() {
 
  localStorage["text"] = document.getElementById("content").innerHTML;
}, 1000);