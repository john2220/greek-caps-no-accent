const stress = document.querySelectorAll('.make-capitals');
const newLetter = [];

const LETTERS = {
   A: 'ά',
   E: 'έ',
   H: 'ή',
   I: 'ί',
   O: 'ό',
   Y: 'ύ',
   V: 'ώ'
};

window.addEventListener('load', function() {
   stress.forEach((eachWord) => {
      const word = eachWord.textContent;

      convertTones(word);

      eachWord.innerHTML = newLetter.join('').toUpperCase();
   });
});

function convertTones(word) {
   for (let i = 0; i < word.length; i++) {
      newLetter.push(findLetter(word.charAt(i)));
   }
}

function findLetter(character) {
   switch (character) {
      case LETTERS.A:
         return 'α';
      case LETTERS.E:
         return 'ε';
      case LETTERS.H:
         return 'η';
      case LETTERS.I:
         return 'ι';
      case LETTERS.O:
         return 'ο';
      case LETTERS.Y:
         return 'υ';
      case LETTERS.V:
         return 'ω';
      default:
         return character;
   }
}
