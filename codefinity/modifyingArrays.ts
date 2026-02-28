let firstArray: (number | string)[] = [0, 1, 2, 3, 4, 5];
let secondArray: (number | string)[] = ['zero', 'one', 'two', 'three', 'four', 'five']
firstArray.pop(); //removing the last element  
secondArray.pop(); //removing the last element 
firstArray.shift(); //removing the first element 
secondArray.shift(); //removing the first element
let mixedArray: (number | string)[] = firstArray.concat(secondArray); //mixing two arrays into one
console.log(mixedArray); // printing mixed array 