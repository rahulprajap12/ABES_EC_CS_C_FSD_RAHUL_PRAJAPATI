const sum=(...args)=>{
    console.log(args);
    let sum1=0;
    args.forEach((element)=>{
        console.log(element);
        sum1+=element;
    });
    return sum1;
}
const isDiv=(num)=>{
    forEach((element)=>{
        if(num%element==0){
            return true;
        }
    });
    return false;
}
const output=sum(1,2,3,4,5,6,7,8,9);
console.log("output", output);
const isDiv1=isDiv(10);
console.log("isDiv1", isDiv1);