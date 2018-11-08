// add solution here
function theBeatlesPlay(musician, instrument) {
  var array = {};
  var temp = "";
  for (var i = 0; i < musician.length; i++) {
    temp = musician[i] + " plays " + instrument[i];
    array.push(temp);
  }
  return array;
}

function johnLennonFacts(facts) {
  var j = facts.length;
  while (j >= 0) {
    j--;
    facts[j] = facts[j] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array2 = {};
  do {
    array2 = "I love the Beatles!";
    if (number === 14) {
      array2 = "I love the Bea";
    }
    number++;
  } while (number < 15)
  return array2;
}