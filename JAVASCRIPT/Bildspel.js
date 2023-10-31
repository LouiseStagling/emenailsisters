let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 4000); // byt bild var 4 sekund
}

// meny
//<ul>
//<li> <a href="index.html"> Start</a></li>
//<li> <a href="kontakt.html"> Om oss</a></li>
//<li> <a href="omoss.html"> Prislista</a></li>
//<li> <a href="Inspo.html"> Inspo</a></li>
//<li> <a href="Kontakt.html"> Kontakt</a></li>
//<li> <a href=".html"> Boka</a></li>

// Meny javascript. Används ej just nu

function buildMenu()
{
    var links = [
        ["Start","index.html"],
        ["Om oss","omoss.html"],
        ["Prislista", "prislista.html"],
        ["Inspo", "Inspo.html"],
        ["Kontakt", "kontakt.html"],
        ["Boka", "boka.html"]
    ]

    var menyHTML = ""
    for(var i = 0; i < links.length; i = i + 1)
    {

menyHTML += "<li><a href='" + links [i][1] + "'> "+ links[i][0] +" </a></li>"
    }
    document.getElementById("meny").innerHTML = menyHTML 

    }