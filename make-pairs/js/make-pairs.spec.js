var MakePairs = require('./scripts');

describe('pairUp()', function() {
  var pairs = new MakePairs();

  it('matches two names to each other', function() {
    var expectedMatches = { 'Rachel': 'Shannon', 'Shannon': 'Rachel' };
    expect(pairs.pairUp('Rachel,Shannon')).toEqual(expectedMatches);
  });

  it('throws an error if the list is 0 or 1', function() {
    var expectedMatches = "Cannot have a list of words less than or equal to one";
    expect(function(){ pairs.pairUp('Rachel') }).toThrow(new Error("Cannot use a list containing fewer than two words"));
  });

  it('removes spaces in the list', function() {
    var expectedMatches = { 'Rachel': 'Shannon', 'Shannon': 'Rachel' };
    expect(pairs.pairUp('Rachel, Shannon')).toEqual(expectedMatches);
  });

  it('removes SO MANY spaces in the list', function() {
    var expectedMatches = { 'Rachel': 'Shannon', 'Shannon': 'Rachel' };
    expect(pairs.pairUp('Rachel,    \nShannon')).toEqual(expectedMatches);
  });

});
