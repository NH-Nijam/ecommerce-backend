import userModel from "../models/user.model"

export const register =(req, res)=>{
    try{
        const {name, email, phone, password} =res.body
        if(!name || !email || !phone || password){
            res.status(400).send({
                error: false,
                msg: 'Invalid field ! '
            })
        }
    }catch(err){
        res.status(400).send({
            error: false,
            msg:err
        })
    }
}