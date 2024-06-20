import "../../../Database/connection"
const Product = require("../../../Models/productModel")


export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const { title, about, application, category, capacity, head, temperature, motor_rating, tank_capacity, image } = req.body;
            if (!title || !about || !application || !category) {
                return res.status(400).json({ error: "All required fields (title, about, application, category) must be provided" });
            }
            let productToAdd = await Product.create({
                title,
                about,
                application,
                // image,
                category,
                capacity,
                head,
                temperature,
                motor_rating,
                tank_capacity
            });
            if (!productToAdd) {
                return res.status(400).json({ error: "Something went wrong" })
            }
            res.send(productToAdd)

        } else if (req.method === "GET") {
            if (req.query.category) {
                let categoryId = req.query.category;
                let products = await Product.find({ category: categoryId })
                return res.send(products);
            } else if (req.query.product) {
                let productId = req.query.product;
                let product = await Product.findById(productId);
                if (!product) {
                    return res.status(404).json({ error: "Product not found" })
                }
                return res.send(product);
            } else {

                let products = await Product.find().populate('category', 'category_name')

                res.send(products);
            }

        }
        else if (req.method == "PATCH") {
            let productToUpdate = await Product.findByIdAndUpdate(req.query.id, {
                title: req.body.title,
                about: req.body.about,
                application: req.body.application,
                category: req.body.category,
            }, { new: true })
            if (!productToUpdate) {
                return res.status(400).json({ error: "Something went wrong" })
            }
            res.send(productToUpdate)
        }
        else if (req.method == "DELETE") {
            let deleteProduct = await Product.findByIdAndDelete(req.query.id)
            if (!deleteProduct) {
                return res.status(400).json({ error: "Something went wrong." })
            }
            res.send({ message: "Product deleted successfully" })
        }
        else {
            res.status(405).json({ error: "Method not allowed" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

