const flatten = function(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) ===  false) {
      newArray.push(array[i]);
    }
    for (let j = 0; j < array[i].length; j++) {
      newArray.push(array[i][j]);
    }
  }
  return newArray;
};





console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]