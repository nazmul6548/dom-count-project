// task 3 :access and then show habluder adda.

let data = {
    data:
    [
        {
            bookId : 1,
            bookDetails : {
                name:"habluder adda",
                category :"xyz",
                price :"20$",
            },
            bookCategory :"Basic",
        },
        {
            bookId : 2,
            bookDetails : {
                name:"gobluder adda",
                category :"abc",
                price :"40$",
            },
            bookCategory :"beginner",        
        }
    ]
}


const name =data.data[0].bookDetails.name;
console.log(name);