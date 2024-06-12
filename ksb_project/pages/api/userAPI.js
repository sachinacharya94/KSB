export const registerUser = (user) =>{
  return fetch('api/user',{
    method:"POST",
    headers:{
      accept : "Application/json",
      "Content-Type": "Application/json"
    },
    body: JSON.stringify(user)
  })
  .then(res=>{return res.json()})
  .then(err=>console.log(err))
}

export const login = (user) =>{
  return fetch('api/user',{
    method:"POST",
    headers:{
      accept : "Application/json",
      "Content-Type": "Application/json"
    },
    body: JSON.stringify(user)
  })
  .then(res=>{return res.json()})
  .then(err=>console.log(err))
}