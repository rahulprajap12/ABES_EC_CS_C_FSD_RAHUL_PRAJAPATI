// claculet the age to the user
// const date = new Date();
// const userDOB = new Date("1998-12-25");
// const currentYear = date.getFullYear();
// const userYear = userDOB.getFullYear();
// const age = currentYear - userYear;
// console.log("age", age);


// get the user input from the input field and claculate the age and sow the age in the p tag when the button is clicked


function calculateAge() {
    const date = new Date();
    const userDOB = new Date(document.getElementById("dob").value);
    if (isNaN(userDOB)) {
        document.getElementById("age").innerText = "Please enter a valid date.";
        return;
    }
    const currentYear = date.getFullYear();
    const userYear = userDOB.getFullYear();
    const age = currentYear - userYear;
    document.getElementById("age").innerText = "Your age is " + age;
}




