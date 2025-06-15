var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let unique = numbers.filter((value, index, array) => {
    return array.indexOf(value) === array.lastIndexOf(value);
});

console.log(unique); 

