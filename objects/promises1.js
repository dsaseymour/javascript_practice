//========================
//CREATE AN ASYNCHRONOUS PROMISE FOR LOADING DATA FROM THE RANDOMUSER.ME API
//========================
//the getFakeMembers function returns a promise 
//this promise makes a request to the API 
//if the promise is successful the data will load
//if the promise is unsuccessful an error will occur
//------------Creating the Promise BEGINS 
const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () =>
    (request.status === 200) ?
    resolves(JSON.parse(request.response).results) :
    reject(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
    })
//------------Creating the Promise ENDS 


//We use the promise by calling the getFakeMembers function and passing in the number of members that should be loaded 
//the then function can be chained on to do something once the promise has been fulfilled this is called composition
//we use an additional callback that handles errors 

getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
    new Error("cannot load members from randomuser.me"))
    )

