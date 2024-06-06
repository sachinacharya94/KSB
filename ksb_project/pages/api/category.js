import "../../Database/connection"
const Category = require("../../Models/categoryModel")

export default async function handler(req, res) {
    if (req.method == "post") {
        let categoryToAdd = await Category.create({
            category_name: req.body.category_name
        })
        if (!categoryToAdd) {
            return res.status(400).json({ error: "Something went wrong" })
        }
        res.send(categoryToAdd)
    }
    else if (req.method == 'GET') {

        let categories = await Category.find()
        res.send(categories)
    }
    else {
        res.send("OK")
    }


}