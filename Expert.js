

//Modal display on appointment

var appoint=document.getElementById("appointModal");
var appointButton=document.getElementById("makingingAppointment");
var span= document.getElementsByClassName("close")[0];
appointButton.onclick = function() {
    appoint.style.display = "block";
}

span.onclick = function() {
    appoint.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == appoint) {
        appoint.style.display = "none";
    }
}	



function openTab(evt, tabName){

var i,totalNav, tablinks;
totalNav=document.getElementsByClassName("dispalyContent");
for(i=0;i<totalNav.length;i++)
{
 totalNav[i].style.display="none";
}
tablinks = document.getElementsByClassName("navigation");
  for (i = 0; i < totalNav.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("navSelected", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " navSelected";
}