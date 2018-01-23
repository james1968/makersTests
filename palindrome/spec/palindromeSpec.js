describe('palindrome', function() {

  it('should be able to identify if a word is a palindrome', function() {
    string = 'racecar';
    expect(palindrome(string)).toEqual('racecar is a palindrome');
  });

  it('should be able to identify if a number is a palindrome', function() {
    string = '1234321';
    expect(palindrome(string)).toEqual('1234321 is a palindrome');
  });

  it('should be able to identify if a word is not a palindrome', function() {
    string = 'test';
    expect(palindrome(string)).toEqual('test is not a palindrome');
  });

  it('should be able to identify if a number is not a palindrome', function() {
    string = 'test';
    expect(palindrome(string)).toEqual('test is not a palindrome');
  });
});