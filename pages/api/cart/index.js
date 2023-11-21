import connectDB from "../../../utils/connectDB";
import CustomerC from "../../../model/CustomerC";

export default async function handler(req, res) {

    const { method, body } = req;

    try {
        await connectDB()
    } catch (err) {
        console.log("Error in connected to DB #/api/cart/")
        return res.status(500).json({
            status: "failed",
            massage: "Error in sever"
        })
    }


    if (method === "GET") {
        try {
            const customers = await CustomerC.find();

            res.status(201).json({
                status: "success",
                massage: "Data created",
                data: customers
            })
        } catch (err) {
            console.log("Error in get data #/api/cart ")
            res.status(500).json({
                status: "failed",
                massage: "Error in server",
            })
        }
    }

    if (method === "POST") {
        const customers = await CustomerC.find();

        if ( !customers.some( item => item._id === body._id )  ) {
            try {
                const customer = await CustomerC(body)
                await customer.save()

                res.status(201).json({
                    status: "success",
                    massage: "Data created",
                    data: customer
                })
            } catch (err) {
                console.log("Error in created data #/api/cart ")
                res.status(500).json({
                    status: "failed",
                    massage: "Error in server",
                })
            }
        }
    }

    if (method === "PATCH") {
        try {
            const customer = await CustomerC.findOne( body._id ? {_id: body._id } : { id: body.id } );
            customer.title = body.title
            customer.price = body.price
            customer.discountPercentage = body.discountPercentage
            customer.rating = body.rating
            customer.brand = body.brand
            customer.category = body.category
            customer.description = body.description
            customer.images = body.images
            customer.stock = body.stock
            customer.thumbnail = body.thumbnail
            customer.id = body.id
            customer.qty = body.qty

            await customer.save()

            res.status(201).json({
                status: "success",
                massage: "Data edited",
                data: customer
            })
        } catch (err) {
            console.log("Error in edited data #/api/cart ")
            res.status(500).json({
                status: "failed",
                massage: "Error in server",
            })
        }
    }

    if (method === "PURGE") {
        console.log(method)
        try {
            await CustomerC.deleteMany();

            res.status(201).json({
                status: "success",
                massage: "Cleared data",
            })
        } catch (err) {
            console.log("Error in delete data #/api/cart ")
            res.status(500).json({
                status: "failed",
                massage: "Error in server",
            })
        }
    }

    if (method === "DELETE") {
        try {
            const customer = await CustomerC.findOneAndDelete(body._id ? {_id: body._id } : { id: body.id });

            res.status(201).json({
                status: "success",
                massage: "Deleted data",
            })
        } catch (err) {
            console.log("Error in delete data #/api/cart")
            res.status(500).json({
                status: "failed",
                massage: "Error in server",
            })
        }
    }
}