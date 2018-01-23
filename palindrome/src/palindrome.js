function palindrome(string) {
	if (string.length === 0) { return true; }
	if (string[0] !== string[string.length-1]) { return false;}
	return palindrome(string.slice(1, string.length-1));	
}