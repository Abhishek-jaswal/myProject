function asyncFunction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
       
        resolve("sucess");
        },2000);

    });
}

function asyncFunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
       
        resolve("sucess");
        },2000);

    });
}

console.log("fetching data.....1")
asyncFunction1().then((res)=>{
    console.log("result is successfull data_1");
    console.log("fetching data.....2");
    let p2 = asyncFunction2();
    p2.then((res)=>{
        console.log("result is successfull data_2");
    });
});