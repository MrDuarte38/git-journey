// Primative Variables
let fname = "Thomas"   // string
let age = 16;          // integer
let savings = 14.05    // float
let isMarried = false;  // boolean
let creditScore;       // null
const career = "Teacher";  // variable that can't be reassigned

console.log("\nFirst name: " + fname); //string concatenation
console.log(`First name: ${fname}`); //back ticks - Template Literal

console.log(`\nNext year I will be ${age + 1} years old.`); //Template Literal
console.log("Next year I will be " + (age + 1) + " years old."); // concatenation

// Boolean Expression & Relational Operators - output to true or false
//    > , >= , < , <= , ==, !=, ===
console.log("\nage = " + age);
console.log("Is age >= 18? " + (age>=18));
console.log("Is age < 18? " + (age<18));
console.log("Is age == 18? " + (age==18));
console.log("Is age != 18? " + (age!=18) );

// Conditional Statements - manage decisions
if(age >= 18)
{
    console.log("You can vote");
}else{
    console.log("You can't vote yet");
}

if(isMarried)
{
    console.log("You are married");
} else {
    console.log("You are not married");
}



// Logical Operators
// !(Not), &&(And), ||(Or)
if(!isMarried)
{
    console.log("You are not married");
} else {
    console.log("You are married");
}

if(fname == "Thomas" && age > 18)
{
    console.log("Your name is Thomas and you can vote");
} else{
    console.log("One or both conditions are false");
}

if(age > 40 || isMarried)
{
    console.log("Married and over forty");
}