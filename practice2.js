// task 2 console.log output :petersburg,herry
let students = {
    2222:{
        name:'jack',
        section:"c",
        class:"ix",
        adress:{
            "building no":12,
            "street":"st. jonson",
            "city":"petersburg",
            "country":"uk" 
        }
    },
    3333:{
        name:"herry",
        section:"d",
        class:"x",
        adress:{
            "building no":85,
            "street":"DC road",
            "city":"kachukhat",
            "country":"bangladesh"
        }
    }
}

const location = students["2222"].adress.city;
const name =students["3333"].name;
console.log(location,name);