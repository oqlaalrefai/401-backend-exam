'use strict'
const axios =require('axios')

const getfruit = async (req,res)=>{
   try{ const fruitapi = await axios.get('https://fruit-api-301.herokuapp.com/getFruit')
    res.send(fruitapi.data)
}
catch(error){res.send(error)}
}

const getmyfruit = (req,res)=>{

    fruitmodel.find({email:req.query.email},(error,fruitdata)=>{
        res.json(fruitdata)
    })
}



const createfruit = (req,res)=>{
    const {name, image, price}=req.body;
    const newfruit = new fruitmodel({name, image, price})
    newfruit.save();
    res.json(newfruit)
}

const deletfruit =(req,res)=>{
    const fruitID = req.params._id;
    fruitmodel.deletone({_id: fruitID},(error,deleted)=>{
        res.json(deleted)
    })
}

const updatfruit = (req,res)=>{
    const {name, image, price}=req.body;
    const fruitID = req.params._id;
    fruitmodel.findandupdate(
        {_id: fruitID},
        {name, image, price},
        {new:true},
        (error,udatedata)=>{
            res.json(udatedata)
        }

    )
}
module.export ={
    getfruit,
    getmyfruit,
    updatfruit,
    deletfruit,
    createfruit

}