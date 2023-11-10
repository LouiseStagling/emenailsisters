document.addEventListener("DOMContentLoaded", function () {
    // Array med frågor och svar
    var faqs = [
      { question: "Vad är skillnaden mellan akryl- och gelenaglar?", answer: "Akrylnaglar är starka och tåliga, medan gelenaglar har en mer flexibel och naturlig känsla. Valet beror på dina preferenser och behov. 1." },
      { question: "Hur länge håller en manikyr eller pedikyr vanligtvis?", answer: "En vanlig manikyr varar vanligtvis upp till två veckor, medan en pedikyr kan hålla längre. Resultatet kan variera beroende på nagelns tillstånd och ditt dagliga aktivitetsnivå." },
      { question: "Kan jag få nagelförlängningar även om mina egna naglar är korta?", answer: "Ja, du kan få nagelförlängningar även om dina naturliga naglar är korta. Nagelteknikern kan skapa förlängningar med akryl, gel eller andra metoder för att ge dig önskad längd och form." },
      { question: "Hur ofta bör jag boka en fyllning för mina konstgjorda naglar?", answer: " För att hålla dina konstgjorda naglar ser snygga ut och håller längre, rekommenderas en fyllning var fjärde till sex vecka, beroende på hur snabbt dina naturliga naglar växer." },
      { question: "Är det säkert att få naglar gjorda under graviditet?", answer: "Generellt sett är det säkert att få naglar gjorda under graviditet. Men informera alltid din nageltekniker om din graviditet så att de kan använda säkra produkter och undvika starka kemikalier." },
      { question: "Hur kan jag ta hand om mina naglar mellan salongbesök?", answer: "Använd alltid handskar vid hushållsarbete, undvik att använda naglarna som verktyg och applicera nagelolja regelbundet för att hålla dem återfuktade. Det hjälper till att förlänga hållbarheten och utseendet på din manikyr." },
    ];
  
    var faqContainer = document.getElementById("faq-container");
  
    faqs.forEach(function (faq, index) {
      var faqBox = document.createElement("div");
      faqBox.classList.add("faq-box");
  
      var faqQuestion = document.createElement("div");
      faqQuestion.classList.add("faq-question");
      faqQuestion.textContent = faq.question;
      faqQuestion.addEventListener("click", function () {
        toggleAnswer(index);
      });
  
      var faqAnswer = document.createElement("div");
      faqAnswer.classList.add("faq-answer");
      faqAnswer.textContent = faq.answer;
  
      faqBox.appendChild(faqQuestion);
      faqBox.appendChild(faqAnswer);
      faqContainer.appendChild(faqBox);
    });
  
    function toggleAnswer(index) {
      var faqAnswer = faqContainer.children[index].querySelector(".faq-answer");
      faqAnswer.style.display = faqAnswer.style.display === "block" ? "none" : "block";
    }
  });