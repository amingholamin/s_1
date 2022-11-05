const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const user =[
    {
        id:1,
        name:'amin',
        phone:2302
    },  {
        id:2,
        name:'reza',
        phone:1120
    }
    ,  {
        id:3,
        name:'javad',
        phone:4589
    },
    {
        id:4,
        name:'ahmad',
        phone:5663
    }
]
app.get('/',(req,res,next)=>{
    res.status(200).json({number:user.length,user})
})
app.delete('/:id',(req,res,next)=>{
    user.forEach(e => {
        if(e.id==req.params.id){
            user.pop(e)
            res.status(200).json({message:'delete'})

        }
    });
    res.status(200).json({message:'not found'})

})
app.post('/',(req,res,next)=>{
    const{name,phone}=req.body
    user.forEach(e=>{
        console.log("000000000000000000000");
        if(e.phone==phone){
            console.log("111111111111111111111");
            
           return res.status(400).json({message:'phone exist'})
        }
    })

    // for(var i=0;i<user.length;++i){
    //     if(user[i].phone==phone){
    //         return res.status(400).json({message:'phone exist'})
    //     }
    // }
    // let a =  user.find(p=>p.phone==phone);
    // if(a){
    //     return res.status(400).json({message:'phone exist'})
    // }
    let u = {
        id:5,
        name:name,
        phone:phone
    }
    user.push(u);
    res.status(200).json({message:'added'})
})

app.patch('/:id',(req,res,next)=>{

    
})


app.listen("3000");
