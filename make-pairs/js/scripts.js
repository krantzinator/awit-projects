var MakePairs = function() {};

MakePairs.prototype.pairUp = function(list_of_words) {
  array_of_names = list_of_words.split(/\,\s*/);
  pairs = {};

  if (array_of_names.length <= 1) {
    throw new Error("Cannot use a list containing fewer than two words");
  }

  index = Math.floor(Math.random() * array_of_names.length);
  while (array_of_names.length > 1) {
    value = array_of_names.splice(index, 1);
    matched_index = Math.floor(Math.random() * array_of_names.length);
    pairs[value] = array_of_names[matched_index];
    index = matched_index;
  }
  pairs[array_of_names[0]] = Object.keys(pairs)[0];
  return pairs;
};

module.exports = MakePairs;
