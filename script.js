function zoomIn(event) {
  event.target.style.transform = "scale(1.05)";
  event.target.style.zIndex = 1;
  event.target.style.transition = "all 0.5s";
}
function zoomOut(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transition = "all 0.5s";
}
var currentDate = new Date();
function showDate(){
  var dateClock = document.getElementById("clock");
  var month = ("00"+(currentDate.getMonth()+1)).slice(-2);
  var date = ("00"+currentDate.getDate()).slice(-2);
  var year =  (currentDate.getFullYear().toString()).slice(-2);
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var time = year+"."+month+"."+date+" "+hours+":"+minutes+" 기준";
  dateClock.innerHTML = time;
}

