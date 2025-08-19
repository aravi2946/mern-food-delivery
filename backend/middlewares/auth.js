import jwt from "jsonwebtoken";


const authMiddleware = (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({success:false,msg:"Please Login to continue"})
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log("decoded",decode);
        
        req.body.userId = decode.id;
        next();
        
    } catch (err) {
        console.log("Error",err);
        res.json({success:false,msg:"Error in middleware"})
        
    }
    
}


export default authMiddleware;