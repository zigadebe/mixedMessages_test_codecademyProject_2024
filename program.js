/* Components for the messages */
let whoWords = ["Jakob", "Mariah", "John",  ];
let whatWords = ["is", "isn't", "was", "wasn't"];
let whereWords = ["in the kitchen", "on the balcony", "in the bathroom", "on the table"];
let doingWhatWords = ["making breakfast", "watering flowers", "taking care of my cats", "taking care of my dogs"];
let withWhomWords = ["my mom", "my dad", "my brother", "my sister"];
withWhomWords += whoWords;

/* Helper functions */
function pickRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

/* Main program */

function makeMessage() {
  const who = pickRandomWord(whoWords);
  const what = pickRandomWord(whatWords);
  const where = pickRandomWord(whereWords);
  const doingWhat = pickRandomWord(doingWhatWords);
  const withWhom = pickRandomWord(withWhomWords);

  return `${who} ${what} ${where} ${doingWhat} ${withWhom}.`;
}

console.log(makeMessage());
