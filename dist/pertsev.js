mark = function() {
   try {
      headersList = document.getElementsByTagName("h1")
      for (i in headersList) {
         if (headersList[i].checkVisibility()) {
            articleHeader = headersList[i];
            break;
         }
      }
      if (! articleHeader.textContent.includes("Андрей Перцев") ) {
         var s = document.getElementsByTagName("strong");
         for (i in s) {
            if (s[i].innerText.includes("Андрей Перцев")) {
               articleHeader.innerHTML += '<span style="color:red"> — Андрей Перцев</span>'
               break;
            }
         }
      }
   } catch {
      //
   }
}

window.addEventListener("load", mark);
var interval = setInterval(mark, 100);