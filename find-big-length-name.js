var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let longest = friends.reduce((a, b) => a.length > b.length ? a : b);
console.log(longest); 
