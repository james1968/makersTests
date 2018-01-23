describe('palindrome', function() {

  it('should be able to identify if a word is a palindrome', function() {
    string = 'racecar';
    expect(palindrome(string)).toEqual(true);
  });

  it('should be able to identify if a number is a palindrome', function() {
    string = '1234321';
    expect(palindrome(string)).toEqual(true);
  });

  it('should be able to identify if a word is not a palindrome', function() {
    string = 'test';
    expect(palindrome(string)).toEqual(false);
  });

  it('should be able to identify if a number is not a palindrome', function() {
    string = 'test';
    expect(palindrome(string)).toEqual(false);
  });
});