

export const getAllProduct = () => {
    return fetch("/api/product")
        .then(res => res.json())
        .catch(err => console.log(err))

}


export const getProductByCategory = (id) => {
    // console.log(id, "id from product API")
    return fetch(`/api/product?id=${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}