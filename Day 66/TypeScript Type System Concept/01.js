// UNION TYPES
let userPassword;
userPassword = "@Hello_How_are_You182"; // Valid assignment
console.log(userPassword);
userPassword = 10345; // Valid assignment
console.log(userPassword);
export {};
// Any Type other than "string" or "number" cannot be assignable and if assigned causes error.
// userPassword = false;  // Error: Type 'boolean' is not assignable to type 'string | number'.
