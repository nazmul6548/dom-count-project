// task1:console log the secondary school location of shopia .
let data = {
    sophia :{
        id:33,
        study:[
            {
                primary:[
                    {school_name:"abc primary school"},
                    {location:"peters burg"}
                ]
            },
            {
                secondary:[
                    {school_name:"abc secondary school"},
                    {location:"st lorence"}
                ]
            }
        ]
    }
}

const secSclLoc = data.sophia.study[1].secondary[1].location;
console.log(secSclLoc);