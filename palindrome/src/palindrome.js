function palindrome(string) {
	string = string.toString();
	if ((string == string.split('').reverse().join('')) === true) {
	return ''+ string +' is a palindrome';
    }
	else {
	return ''+ string +' is not a palindrome';
    }
}