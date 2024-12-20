// let promise = new Promise((resolve,reject)=>{
//     console.log("i am a promises");
//     // resolve("success")
//     reject("some error occured");
// })
function getData(id,getNextData) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data", id);
            resolve("success")
            if(getNextData){
            getNextData();
        }
        }, 2000)
    })}


   let result = getData(1, () => {
    console.log("waiting....2");
    getData(2, () => {
        console.log("waiting....3");
        getData(3, () => {
            console.log("waiting....3");
            getData(3);
        });
    });
    
});

       
 console.log(result)