// collby hell
console.log("hello world");
const ordercoffee=(type,callbck)=>{
    console.log("order coffee for "+type);
    setTimeout(()=>{
        console.log("coffee is ready");
        callbck();
    },3000);
}
// callback hell with timeout
ordercoffee("black",()=>{
    ordercoffee("milk",()=>{
        ordercoffee("sugar",()=>{
            ordercoffee("lemon",()=>{
                console.log("all coffee are ready");
            });
        });
    }); 
}); 