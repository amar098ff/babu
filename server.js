const express=require('express')
const port=4004
const map=express()
map.use(express.json())
map.listen(port,()=>{console.log(`server not connected http://localhost:${port}`)})
map.get('/',(req,res)=>{
    res.status(202).send('hi friends')
})
map.post('/',(req,res)=>{
    const{user_name,password,email,date_of_birth}=reqbody
    if(!user_name){
        return res.status(404).json({message:`user_name can't be empty`})
    }
    if(!password){
        return res.status(404).json({message:`password leangth shoud be greaterthan 8 and lessthan 16`})
    }
    if(!email){
        return res.status(404).json({message:`email cannot be empty`})
    }
    if(!date_of_birth){
        return res.status(404).json({message:`date of birth not given`})
    }
    return res.status(202).json({message:`all are given`})
})