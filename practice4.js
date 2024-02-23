const myNum = [1,3,5,7,9,11];
// // rules 1:
let myStore =[]
for (let i = 0; i < myNum.length; i++) {
    result = myNum[i] *2;
    myStore.push(result)
    
}
console.log(myStore);


// rules 2:
const resuls =myNum.map(n => n*2)
console.log(resuls);