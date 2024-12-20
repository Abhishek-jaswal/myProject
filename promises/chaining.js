function getData(id) {
    //2second
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", id);
            resolve("success");
        }, 2000);
    })
};
//promise chain
// getData(1).then((res)=>{
//     console.log("new data_1");
//     getData(2).then(()=>{
//         console.log("new data_2")
//     })
// });


//promise chaining 
console.log("getting data 1....");
getData(1).then((res)=>{
    console.log("getting data 2....");
    return getData(2);
}).then(()=>{
    console.log("getting data 3....");
    return getData(3);
}).then(()=>{
    console.log("getting data 4....");
    return getData(4);
})