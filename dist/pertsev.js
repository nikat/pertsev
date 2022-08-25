window.addEventListener ("load", function() {
   var s = document.getElementsByTagName("strong");
   for(i in s){
      if (s[i].innerText.includes("Андрей Перцев")) {
         document.getElementsByTagName("h1")[0].innerHTML += '<span style="color:red"> — Андрей Перцев</span>'
         break;
      }
   }
});
