import userModel from "../models/userModel.js"


const addToCart = async (req, res) => {
    try {

        const userData = await userModel.findOne({ _id: req.body.userId })
        const cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({ success: true, msg: "Item Added to Cart" })
    } catch (err) {
        console.log(err);
        res.json({ success: false, msg: "Error" })

    }

}
const removeFromCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId)
        const cartData = await userData.cartData;

        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({ success: true, msg: "Item removed from Cart" })

    } catch (err) {
        console.log(err);
        res.json({ success: 'false', msg: "Error in removeFromCart" })

    }



}
const getCart = async (req, res) => {
    try {

        const userData = await userModel.findById(req.body.userId)
        
        const cartData = await userData.cartData;
        return res.json({ success: true, cartData })
    } catch (err) {
        console.log(err);
        res.json({ success: false, msg: "Error" })

    }




}


export { addToCart, removeFromCart, getCart }