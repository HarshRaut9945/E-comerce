function prom(complete){
    return new Promise(function(resolve, reject){
        console.log("loading...");
        setTimeout(()=>{
            if(complete){
                resolve("I am successful");
            } else {
                reject("I am failed");
            }
        }, 1000);
    });
}

let onfulfillment = (result) => {
   console.log(result);
};

let onRejection = (err) => {
   console.error(err);
};

// example usage
prom(true).then(onfulfillment).catch(onRejection);