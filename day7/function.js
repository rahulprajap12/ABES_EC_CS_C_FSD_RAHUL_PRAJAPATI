function isODD(a){
    if(a%2!=0){
        return "value is true";
    }else{
        return "value is false";
    }
}
console.log(" isODD(3)", isODD(3));
console.log(" isODD(4)", isODD(4));

function isoddUsingTernary(a){
    return (a%2!=0) ? "value is true" : "value is false";
}
console.log(" isoddUsingTernary(3)", isoddUsingTernary(3));
console.log(" isoddUsingTernary(4)", isoddUsingTernary(4));

let funAsExpression=function isODD(a){
    return (a%2!=0) ? "value is true" : "value is false";
}
console.log(" funAsExpression(3)", funAsExpression(3));
console.log(" funAsExpression(4)", funAsExpression(4));

const arrowFun=(a)=>{
    return (a%2!=0) ? "value is true" : "value is false";
}
console.log(" arrowFun(3)", arrowFun(3));
console.log(" arrowFun(4)", arrowFun(4)); 

(function iifeFen(){
    console.log("inside iifeFen function");
})();

// console.log(" iifeFen()", iifeFen()); //error