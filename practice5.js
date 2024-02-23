const myArray = [33,50,79,78,90,101,30];
const evennumber = myArray.filter(n => n %10 === 0);
console.log(evennumber);

const evenNum = myArray.find(n => n %10 === 0);
console.log(evenNum);