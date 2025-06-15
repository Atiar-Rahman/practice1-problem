let numbers = [1,4,6,3,2,8,7,5,10,14,16,13,12,20,19,18,17,15,11]

for(let i=0;i<=numbers.length;i++){
    for(let j=1;j<numbers.length-1-i;j++){
        if(numbers[j]>numbers[j+1]){
            let temp=numbers[j]
            numbers[j]=numbers[j+1]
            numbers[j+1]=temp;
        }
    }
}

console.log(numbers);