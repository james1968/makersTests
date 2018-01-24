describe('isPalindrome', function() {

  it('1. should be able to identify if the string is empty', function() {
    string = '';
    expect(isPalindrome(string)).toEqual('string is empty');
  });

  it('2. should be able to identify if the string has only one character', function() {
    string = 'a';
    expect(isPalindrome(string)).toEqual('a is a palindrome');
  });

  it('3. should be able to identify if a word is a palindrome', function() {
    string = 'racecar';
    expect(isPalindrome(string)).toEqual('racecar is a palindrome');
  });

  it('4. should be able to identify if a number is a palindrome', function() {
    string = '1234321';
    expect(isPalindrome(string)).toEqual('1234321 is a palindrome');
  });

  it('5. should be able to identify if an alphanumeric is a palindrome', function() {
    string = '123abba321';
    expect(isPalindrome(string)).toEqual('123abba321 is a palindrome');
  });

  it('6. should be able to identify if a word is not a palindrome', function() {
    string = 'test';
    expect(isPalindrome(string)).toEqual('test is not a palindrome');
  });

  it('7. should be able to identify if a number is not a palindrome', function() {
    string = '123456';
    expect(isPalindrome(string)).toEqual('123456 is not a palindrome');
  });

  it('8. should be able to identify if an alphanumeric is not a palindrome', function() {
    string = '123abcd456';
    expect(isPalindrome(string)).toEqual('123abcd456 is not a palindrome');
  });
});