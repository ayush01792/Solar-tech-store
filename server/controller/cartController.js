import cartt from "../model/cartModel.js"


export const addToCart = async (req, res) => {
    try {
        const data = await cartt.create({ ...req.body, userId: req.user._id, status: 1 })
        return res.json({
            success: "true",
            status: 200,
            message: "Succesfully added to cart",
            body: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAllCart = async (req, res) => {
    try {
        const data = await cartt.find({ userId: req.user._id }).populate("productId").populate("userId")
        return res.json({
            success: "true",
            status: 200,
            message: "Here is all items",
            body: data
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateStatusInCart = async (req, res) => {
    try {
        const data = await cartt.updateMany({ userId: req.user._id, status: 0 })
        return res.json({
            success: "true",
            status: 200,
            message: "status Updated",
            body: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteCart = async (req, res) => {
    try {
        const data = await cartt.deleteMany({ userId: req.user._id })
        return res.json({
            success: "true",
            status: 200,
            message: "Item deleted",
            body: {}
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteSingleCartItem = async (req, res) => {
    try {
        const data = await cartt.deleteOne({ _id: req.params.id })
        return res.json({
            success: "true",
            status: 200,
            message: "Item deleted",
            body: {}
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateCart = async (req, res) => {
    try {
        const data = await cartt.findByIdAndUpdate({ _id: req.params.id },
            { quantity: req.body.quantity },
            { raw: true })
        return res.json({
            success: "true",
            status: 200,
            message: "Items updated",
            body: data
        })
    } catch (error) {
        console.log(error)
    }
}