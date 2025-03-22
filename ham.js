// ham binh thuong
function sayHello(name) { // name laf 1 tham so
    console.log(`hello ${name}`);
}
sayHello('Kiet')

// HAM KO TEN
const greet = function() {
    console.log("hE LO"); 
}
greet();

//THAM SO MAC DINH
function greet1(name = "Guest") {
    console.log(`hello ${name}`);
}
greet1(); // name = Guest ko chuyen gia tri in ra la hello Guest
greet1('HUS'); // truyen vao in ra la hello HUS

//Rest Parameters 
function sumAll(...numbers) {
    // return numbers.reduce((total, num) => total + num, 0);
    console.log('numbers',numbers); // can khai bao input dau vao
    console.log('arguments',arguments) // chinh sua vaf thay doi dc inout dau vao, ko can khai bao input dau vao
}
sumAll(1, 2, 3, 4 , 5);

// callback'
function processUserinput(callback){
    let name2 = 'kET'
    callback(name2);
}

processUserinput((name2) => {
  console.log(`Hi ${name2}`);
})

// ham an danh
setTimeout(function() {
    console.log("Hàm này chạy sau 2 giây!");
}, 2000);