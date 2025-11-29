const validator = require("validator");

console.log(validator.isEmail("test@test.com")); // true unda iyos
console.log(validator.isEmail("abcDE123")); // false unda iyos
