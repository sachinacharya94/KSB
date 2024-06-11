export const addMessage = (contact) => {
  return fetch('api/product',{
    method:"POST",
    headers: {
      accept: "Application/json",
      "Content-Type": "Application/json",
  },
  body: contact
  })
  .then(res=>res.json())
  .then(err=>console.log(err))
}


export const getAllMessages = () =>{
  return fetch('api/contact')
  .then(res=>res.json())
  .then(err=>console.log(err))
}

export const deleteMessage = () =>{
  return fetch(`api/contact?id=${id}`,{
    method:"DELETE",
    headers: {
      accept: "Application/json",
      "Content-Type": "Application/json",
  },
  })
  .then(res=>res.json())
  .then(err=>console.log(err))
}


export const getMessageById = (id) =>{
  return fetch(`api/contact?id=${id}`)
  .then(res=>res.json())
  .then(err=>console.log(err))
}

