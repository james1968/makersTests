function palindrome(string) {
	if (string.length === 0) { return 'string is empty'; }
	if (string[0] !== string[string.length-1]) { return false;}
	return palindrome(string.slice(1, string.length-1));
}

function isPalindrome(string) {
	if (string.length === 0) { return 'string is empty'; }
	else if (palindrome(string)) { return ''+string+' is a palindrome';}
	else { return ''+string+' is not a palindrome';}
}