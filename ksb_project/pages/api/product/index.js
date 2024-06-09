import "../../../Database/connection"
const Product = require("../../../Models/productModel")

export default async function handler(req, res) {
    if (req.method == "POST") {
        let productToAdd = await Product.create({
            title: req.body.title,
            about: req.body.about,
            application: req.body.application,
            category: req.body.category,


        })
        if (!productToAdd) {
            return res.status(400).json({ error: "Something went wrong" })
        }
        res.send(productToAdd)
    }
    else if (req.method == 'GET') {

        if (req.query.id) {
            let id = await req.query.id
            // let id = "6661c8e544b96bf31b45981c"

            // console.log(req.query.id, "req")
            let products = await Product.find({ category: id })
            return res.send(products)
        }



        let products = await Product.find()
        res.send(products)


    }
    else {
        res.send("OK")
    }


}