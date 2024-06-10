import "../../Database/connection"
const Category = require("../../Models/categoryModel")

export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            let categoryToAdd = await Category.create({
                category_name: req.body.category_name
            });
            if (!categoryToAdd) {
                return res.status(400).json({ error: "Something went wrong" })
            }
            res.send(categoryToAdd)

        } else if (req.method === "GET") {
            if (req.query.id) {
                let category = await Category.findById(req.query.id)
                if (!category) {
                    return res.status(404).json({ error: "Category not found" })
                }
                res.send(category);
            } else {
                let categories = await Category.find()
                res.send(categories)
            }

        } else if (req.method === "PATCH") {
            let categoryToUpdate = await Category.findByIdAndUpdate(req.query.id, {
                category_name: req.body.category_name
            }, { new: true });
            if (!categoryToUpdate) {
                return res.status(400).json({ error: "Something went wrong, couldn't update" })
            }
            res.send(categoryToUpdate)

        } else if (req.method === "DELETE") {
            let deleteCategory = await Category.findByIdAndDelete(req.query.id)
            if (!deleteCategory) {
                return res.status(404).json({ error: "Category not found" })
            }
            res.send({ message: "Category deleted successfully" })
        } else {
            res.status(405).json({ error: "Method not allowed" })

        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}