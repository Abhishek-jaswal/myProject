// lets start with synchronous code
// console.log("check");
// function new_function(){
//     console.log("hello world");
//     console.log("welcome to world");
   
// }new_function();
// console.log("new work");

// lets start with asynchronous code & callback
// console.log("this will be a asychronous code");
// function newCall(id,getnext){
//     setTimeout(()=>{
//         console.log("this is asynchronous code" ,id);
//         if(getnext){
//             getnext();
//         }
//     },2000)
// }
// console.log("waiting for 1....");
// newCall(1,()=>{
//     console.log("waiting for 2....");
//     newCall(2,()=>{
//         console.log("waiting for 3....");
//         newCall(3)})
// });

//lets start with promises
console.log("this will be a asychronous code");
function newCall(id){
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("this is asynchronous code" ,id);
       resolve(200)
    },2000)})
}

function check(){
    let star="* ";
    let space=" ";
    for(let i=0;i<=5;i++){
       
       
        star.repeat(2*i);
        console.log(star +"<br>")

    }
}
console.log("getting data 1.....")
newCall(1).then(()=>{
    console.log("getting data 2.....");
    return newCall(2);
}).then(()=>{
    console.log("getting data 3.....");
    return  newCall(3);
}).then(()=>{
    console.log("wait for star");
    return  check();
})
