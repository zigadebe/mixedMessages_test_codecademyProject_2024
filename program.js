/* Components for the messages */
let whoWords = ["Jakob", "Mariah", "John",  ];
let whatWords = ["is", "isn't", "was", "wasn't"];
let whereWords = ["in the kitchen", "on the balcony", "in the bathroom", "on the table"];
let doingWhatWords = ["making breakfast", "watering flowers", "taking care of my cats", "taking care of my dogs"];
let withWhomWords = ["my mom", "my dad", "my brother", "my sister"];
withWhomWords = withWhomWords.concat(whoWords);

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
  let withWhomOptions = withWhomWords.filter(word => !whoWords.includes(word));
  const withWhom = pickRandomWord(withWhomOptions);

  return `${who} ${what} ${where} ${doingWhat} with ${withWhom}.`;
}

console.log(makeMessage());

for (let i = 0; i < 20; i++) {
  console.log(makeMessage());
}