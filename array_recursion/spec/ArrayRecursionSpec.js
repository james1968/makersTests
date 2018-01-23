describe("sumArray", function() {

	it("1. should return an empty message when array is empty", function() {
    array = [];
    expect(sumArray(array)).toEqual('Array is empty');
  });

	it("2. should return the correct sum for an array with one or more element", function() {
    array = [1];
    expect(sumArray(array)).toEqual(1);
  });

	it("3. should return the correct sum for an array with one or more element", function() {
    array = [1,2,3,4,5,6,7,8,9,10];
    expect(sumArray(array)).toEqual(55);
  });

	it("4. should return the correct sum for an array with one or more element", function() {
    array = [101,-2,15,-26,13,17,23];
    expect(sumArray(array)).toEqual(141);
  });

});