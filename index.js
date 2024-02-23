const myArr =[3,4,5,6,7,8,9,10]
// type 1 : normal rules
let store = []
for (const i of myArr) {
    let kim = i*2
    store.push(kim)
}
console.log(store);

// type 2 : traditional function
function myFunc(num) {
    return num * 2
}
const result = myArr.map(myFunc);
console.log(result);

// type 3 : arrow function

const myNum =n => n*2
const output =myArr.map(myNum);
console.log(output);


// type 4 : update arrow function 
const output2 =myArr.map(n => n*2);
console.log(output2);

const myName = ["jew","mew","keww"];
const nameResult = myName.map(name => name)
console.log(nameResult);
const nameResult2 = myName.map(name => name.length)
console.log(nameResult2);
const nameResult3 = myName.map(name => name[0])
console.log(nameResult3);
const nameResult4 = myName.map(name => name[1])
console.log(nameResult4);