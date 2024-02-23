const myObj = [
    {brandName:"lenovo",price:80000},
    {brandName:"dell",price:60000},
    {brandName:"lhp",price:10000}
]

const res1 =myObj.map(n => n.brandName);
console.log(res1);




const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);