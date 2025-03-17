// Arithmetic Operators (Toan tu so hoc)
console.log ("TOAN TU SO HOC");
let a = 20;
let b = 4;
let c = a + b;
console.log("Cong: " + c);
let d = a - b;
console.log("Tru: " + d);
let e = a * b;
console.log("Nhan: " + e);
let f = a / b;
console.log("Chia: " + f);
let g = a % b;
console.log("Chia du: " + g);
console.log("Luy thua: " + a ** b);
let h = a++;
console.log("Tang mot don vi: " + h);
let i = b++;
console.log("Giam mot don vi: " + i);

//Assignment Operators (Toan tu gan)
console.log ("TOAN TU GAN");
let x = 10;
x += 5;
console.log ("x = " + x);
x -= 3;
console.log ("x = " + x);
x *= 2;
console.log ("x = " + x);
x /= 2;
console.log ("x = " + x);
x %= 3;
console.log ("x = " + x);
x **= 2;
console.log ("x = " + x);

// Comparision Operators (Toan tu so sanh)
console.log ("TOAN TU SO SANH");
console.log (5 == "5");
console.log (5 === "5");
console.log (10 != "10");
console.log (8 > 3);
console.log (4 < 7);
console.log (6 >= 6);
console.log (2 <= 9);

// Logical Operators (Toan tu logic)
console.log("TOAN TU LOGIC");
console.log(5 > 3 && 10 > 2);
console.log(5 > 3 || 10 < 2);
console.log(!(5>3));

// String Operators (Toan tu chuoi)
console.log("TOAN TU CHUOI");
let string1 = "Hello";
let string2 = "World";
console.log(string1 + " " + string2);
let msg = "Hello";
msg += " Van";
console.log(msg);

// Ternary Operator (Toan tu dieu kien)
console.log("TOAN TU DIEU KIEN");
let age = 18;
let result = (age >= 18) ? "Bạn đã đủ tuổi nè!" : "Chưa đủ tuổi nhé!";
console.log(result);

// Toan tu typeof va instacnceof 
console.log(typeof 123);
console.log(typeof "Hello");   // "string"
console.log(typeof 123);       // "number"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"
console.log(typeof []);        // "object" (Mảng cũng là object)
console.log(typeof function(){}); // "function"
console.log(typeof null);      // "object" (Lỗi của JavaScript)
console.log(typeof undefined); // "undefined"
console.log(typeof BigInt(10)); // "bigint"

console.log(new Date() instanceof Date);

//Toan tu nullish coalescing 
console.log("TOAN TU NULLIS COALESCING");
let name = null;
let username = name ?? "Guest";
console.log(username);


//Toan tu optional chaining 
console.log("TOAN TU OPTIONAL CHAINING");
let user = {name: "Van Thai"};
console.log(user?.address?.city);
console.log(user?.username);