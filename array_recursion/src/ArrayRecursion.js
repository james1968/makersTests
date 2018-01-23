var sumArray = function(array) {
  if (array.length === 0) {
	return "Array is empty";
  }
  if (array.length === 1) {
    return array[0];
  }
  else {
    return array.pop() + sumArray(array);
  }
};