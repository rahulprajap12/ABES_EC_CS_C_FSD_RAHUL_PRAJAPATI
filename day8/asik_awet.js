console.log("Hello World");

// const syncUsingTime=()=>{
//     console.log("Synchronous operation started");
//     for(let i=0;i<1000000000;i++){}
//     console.log("Synchronous operation ended");
// }

// syncUsingTime();

// const waitForSomeTime=(time)=>{
//     const start=Date.now();
//     while(Date.now()-start<time){
//         //do nothing

//     }
// }

// const asyncUsingTime=()=>{
//     waitForSomeTime(1000);
//     console.log("Asynchronous operation started");

// }
// waitForSomeTime();
// console.log("Before async function call");
// asyncUsingTime();
// console.log("After async function call


// setTimeout

// console.log("Before setTimeout");
// setTimeout(()=>{
//     console.log("Inside setTimeout");
// },1000);
// console.log("After setTimeout");

const waitForSomeTime=(time)=>{
    const start=Date.now();
    while(Date.now()-start<time){
        //do nothing
    }   
}
const asyncUsingTime=()=>{
    waitForSomeTime(1000);
    console.log("Asynchronous operation started");  
}

const asyncUsingTime1=()=>{
    setTimeout(()=>{
        console.log("Asynchronous operation started after 1 sec");
    },1000);
}
console.log("Before async function call");
asyncUsingTime();
asyncUsingTime1();
console.log("After async function call");
