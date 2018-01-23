describe('palindrome', function() {

  it('should be able to identify a palindrome', function() {
    string = 'racecar';
    expect(palindrome(string)).toEqual('rececar is a palindrome');
  });

  it('should be able to identify a palindrome', function() {
    string = 'test';
    expect(palindrome(string)).toEqual('test is not a palindrome');
  });
});