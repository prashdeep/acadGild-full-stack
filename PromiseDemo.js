new Promise(function(resolve, reject){
    setTimeout(reject, 2000, new Error("test"));
})
.then(function(data){
    console.log(data[0]);
})
.catch(function(error){
    console.log("There was an error", error);
})
