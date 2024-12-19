const getProimise =()=>{
   return new Promise((resolve,reject)=>{
        console.log("i am a promises");
        resolve("success");
        // reject("network error");
    });
};

let promise =getProimise();
promise.then((res)=>{
    console.log("promises fulfield",res)
});
promise.then(()=>{
    console.log("promises completed")
});
promise.catch(()=>{
    console.log("data rejected")
})