

export const getAllCategories = () => {
    return fetch("/api/category")
        .then(res => res.json())
        .catch(err => console.log(err))

}


// export const addCategory = (category_name) => {
//     return fetch(`${API}/addcategory`, {
//         method: "POST",
//         headers: {
//             accept: "Application/json",
//             "Content-Type": "Application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ category_name })
//     })
//         .then(response => { return response.json() })
//         .catch(error => console.log(error))
// }