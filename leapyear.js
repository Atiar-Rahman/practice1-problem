let year=2100

if(year%400==0){
    console.log('leapyear');
}else if(year%100==0){
    console.log('not leapyear');
}else if(year%4==0){
    console.log('leapyear');
}else{
    console.log('not leapyear');
}