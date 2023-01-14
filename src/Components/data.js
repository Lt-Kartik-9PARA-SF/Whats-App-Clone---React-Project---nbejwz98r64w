let data = [
    {name: "Kartik",
    msg:["hello","hi","bye",'data is stored in local storage'],
    msg2:["this is an example text"],
    id:0,
    },
    {
        name:"Bhai",
        msg:["example1","exapmple2"],
        msg2:[],
        id:1
    },
    {
        name:"Shobi",
        msg:["ok baad me milte hai","bye"],
        msg2:[],
        id:2
    },
    {
        name:"Alok",
        msg:["This is an Example","Another example"],
        msg2:[],
        id:3
    },
    {
        name:"Mohit",
        msg:["example1","exapmple2"],
        msg2:[],
        id:4
    },
    {
        name:"Vivek",
        msg:["example1","Msg 2"],
        msg2:["sent"],
        id:5
    }
    
];
 let local = () =>{
    if(localStorage.getItem('userData') !== null){
        console.log(JSON.parse(localStorage.getItem('userData')));
        var x = JSON.parse(localStorage.getItem('userData'));
        data  = x;
    }
 }
 local();
export default data;