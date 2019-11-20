window.addEventListener("load", function() {
   const stress = document.querySelectorAll(".caps");

   stress.forEach(eachWord => {
      let word = eachWord.textContent;

      function convertTones(word) {
         let newLetter = [];

         for (var i = 0; i < word.length; i++) {
            if (word.charAt(i) === "ά") {
               let greek_a = (word.charAt(i).value = "α");
               newLetter.push(greek_a);
            } else if (word.charAt(i) === "έ") {
               let greek_e = (word.charAt(i).value = "ε");
               newLetter.push(greek_e);
            } else if (word.charAt(i) === "ή") {
               let greek_e = (word.charAt(i).value = "η");
               newLetter.push(greek_e);
            } else if (word.charAt(i) === "ί") {
               let greek_e = (word.charAt(i).value = "ι");
               newLetter.push(greek_e);
            } else if (word.charAt(i) === "ό") {
               let greek_e = (word.charAt(i).value = "ο");
               newLetter.push(greek_e);
            } else if (word.charAt(i) === "ύ") {
               let greek_e = (word.charAt(i).value = "υ");
               newLetter.push(greek_e);
            } else if (word.charAt(i) === "ώ") {
               let greek_e = (word.charAt(i).value = "ω");
               newLetter.push(greek_e);
            } else {
               newLetter.push(word.charAt(i));
            }
         }
         eachWord.innerHTML = newLetter.join("").toUpperCase();
      }
      convertTones(word);
   });
});
