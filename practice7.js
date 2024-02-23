const people = [
    {name :'meena',age :20},
    {name :'rina',age:15},
    {name : "suchorita",age:22},
    
]
let sum =0;
for (let i = 0; i < people.length; i++) {
    const age = people[i].age;
    sum = sum + age

    
}
console.log(sum);

const total = people.reduce((a,b) =>a + b.age, 0);
console.log(total);