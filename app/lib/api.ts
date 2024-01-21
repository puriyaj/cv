export const sendContact = async (data) => fetch('/api/contact',{
  method: "POST",
  body: JSON.stringify(data),
  headers:{
    "content-type":"application/json",
    Accept: "application/json",
  }
})
