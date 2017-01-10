

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

// document.getElementById("Gallery").onmouseover = function() {mouseOver()};
// document.getElementById("Gallery").onmouseout = function() {mouseOut()};

// function mouseOver() {
//     document.getElementById("drop").style.display = 'block';
// }

// function mouseOut() {
//     document.getElementById("drop").style.display = "none";
// }

// setInterval(function(){document.getElementById("head").style.backgroundColor='red';},3000);
// setInterval(function(){document.getElementById("tab").style.backgroundColor='red';},3000);

// setInterval(function(){document.getElementById("head").style.backgroundColor='orange';},4500);
// setInterval(function(){document.getElementById("tab").style.backgroundColor='orange';},4500);



