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

console.log(sumArray([101,-2,15,-26,13,17,23]));