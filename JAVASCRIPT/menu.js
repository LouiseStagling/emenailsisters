// meny
//<ul>
//<li> <a href="index.html"> Start</a></li>
//<li> <a href="kontakt.html"> Om oss</a></li>
//<li> <a href="omoss.html"> Prislista</a></li>
//<li> <a href="Inspo.html"> Inspo</a></li>
//<li> <a href="Kontakt.html"> Kontakt</a></li>
//<li> <a href=".html"> Boka</a></li>

function buildMenu() {
    var links = [
        ["Start", "index.html"],
        ["Om oss", "omoss.html"],
        ["Prislista", "prislista.html"],
        ["Inspo", "inspo.html"],
        ["Kontakt", "kontakt.html"],
        ["Boka", "https://www.bokadirekt.se/"]
    ];
  
    var menyHTML = "";
    for (var i = 0; i < links.length; i++) {
        menyHTML += "<li><a href='" + links[i][1] + "'> " + links[i][0] + " </a></li>";
    }
    document.getElementById("meny").innerHTML = menyHTML;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    buildMenu();
  });