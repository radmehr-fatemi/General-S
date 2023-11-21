import connectDB from "../../../utils/connectDB";
import CustomerC from "../../../model/CustomerC";

export default async function handler(req, res) {

    const { method, query, body } = req;

    try {
        await connectDB()
    } catch (err) {
        console.log("Error in connected to DB #/api/cart/[productId]")
        return res.status(500).json({
            status: "failed",
            massage: "Error in sever"
        })
    }

    if (method === "GET") {
        try {
            const customer = await CustomerC.findOne({ _id : query.customerId });

            res.status(201).json({
                status: "success",
                massage: "Received data",
                data: customer
            })
        } catch (err) {
            console.log("Error in get data #/api/cart/[customerId] ")
            res.status(500).json({
                status: "failed",
                massage: "Error in server",
            })
        }
    }

    if (method === "DELETE") {
        try {
            const customer = await CustomerC.findOneAndDelete({ _id : query.customerId });

            res.status(201).json({
                status: "success",
                massage: "Deleted data",
            })
        } catch (err) {
            console.log("Error in delete data #/api/cart/[customerId] ")
            res.status(500).json({
                status: "failed",
                massage: "Error in server",
            })
        }
    }
}