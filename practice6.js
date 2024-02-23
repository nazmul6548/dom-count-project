// you have an array of object
const instructor = [
    { name: "nodi", age: 28, position: "senior" },
    { name: "akil", age: 26, position: "junior" },
    { name: "shobuj", age: 30, position: "senior" }
];
// your task is to display the  instructor names that has the position senior using filter
const result = instructor.filter(n => n.position === "senior" );
const name =result.map(n => n.name)
console.log(name);