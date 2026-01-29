const date=new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log(date.getDay());

const userDOB=new Date("1998-12-25");
console.log("userDOB", userDOB);
console.log("userDOB.getFullYear()", userDOB.getFullYear());
console.log("userDOB.getMonth()+1", userDOB.getMonth()+1);
console.log("userDOB.getDate()", userDOB.getDate());
console.log("userDOB.getDay()", userDOB.getDay());

// claculet the age to the user
const currentYear=date.getFullYear();
const userYear=userDOB.getFullYear();
const age=currentYear-userYear;
console.log("age", age);
