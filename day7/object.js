const student={
    name:"xyz",
    age:20,
    branch:"CSE",
    section:"c",
    phoneNO:{
        personal:1234567890,
        parent:9876543210
    },
    address:{
        city:"hyd",
        state:"TS",
        pincode:500081,
        state:"UP",
        country:"India",
    }

}
console.log(student);
console.log(" student name", student.name);
console.log(" student age", student.age);
console.log(" student branch", student.branch);
console.log(" student section", student.section);
console.log(" student phone number", student.phoneNO);
console.log(" student address", student.address);

console.log(student["name"]);