import userModel from "../models/userModel.js";
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const registerController = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({success:false,msg:"Email is already existed"})
        }

        if (!validator.isEmail(email)) {
            return res.json({success:false,msg:"Please Enter a valid"})
        }

        if (password.length < 8) {
            return res.json({ success: false, msg: "Please strong a strong password" })

        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        const newUser = new userModel({
            name: name,
            email: email,
            password:hashedPassword
        })
        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({
            success: true,
            token
        })



    } catch (err) {
        return res.status(404).json({success:false,msg:"Error in registerController"})
    }
    
}
const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({success:false,msg:"Email not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
           return res.json({success:false,msg:"Invalid credintails"})
        }
        const token = createToken(user._id)
        res.json({success:true,token})

    } catch (err) {
        console.log(err);
        res.json({success:false,msg:"Error in loginController"})
        
    }
    
}

export {registerController,loginController}