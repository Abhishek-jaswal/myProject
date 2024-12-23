const URL = "https://api.spoonacular.com/recipes/findByNutrients?ref=apilist.fun";

// let promise = fetch(URL);
// console.log(promise);
const factpara = document.querySelector('#fact');

const getFacts = async()=>{
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);//JSON Format
    let data = await response.json();
    factpara.innerHTML = data;
    

}