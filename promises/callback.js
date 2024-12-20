function getData(id,getNextData) {
    //2second
    setTimeout(() => {
        console.log("data", id);
        if(getNextData){
        getNextData();
    }
    }, 2000)
};
//callback hell
getData(1, () => {
    console.log("waiting....2");
    getData(2, () => {
        console.log("waiting....3");
        getData(3, () => {
            console.log("waiting....3");
            getData(3);
        });
    });
    
});

