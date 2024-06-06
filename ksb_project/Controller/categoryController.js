const Category = require("../Models/categoryModel")


export default async function handler (req, res){
    try {
        let categoryToAdd = await Category.create({
            category_name: req.body.category_name
        })
        if(!categoryToAdd){
            return res.status(400).json({error:"Something went wrong"})
        }
        res.send(categoryToAdd)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}