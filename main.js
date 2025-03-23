//Lấy độ dài chuỗi
let text = "Have a good day";
console.log(text.length); 

//Chuyển đổi chữ hoa, chữ thường
let message = "Have a good day";
console.log(message.toUpperCase()); 
console.log(message.toLowerCase()); 

//Cắt chuỗi
let str = "Have a good day";
console.log(str.slice(0, 4)); 
console.log(str.substring(7, 11)); 
console.log(str.substr(12, 15)); 

//Tìm kiếm trong chuỗi
console.log(text.includes("Have"));   
console.log(text.indexOf("good"));    
console.log(text.lastIndexOf("y"));   

//Thay thế chuỗi
console.log(text.replace("good", "nice")); 
console.log(text.replaceAll("Have a good day", "Good luck")); 

//Tách chuỗi thành mảng và nối lại thành chuỗi
let names = "Khang; TramAnh; ThayDuong";

let nameArray = names.split("; ");
console.log(nameArray); 

console.log(nameArray.join(" | ")); 

//Xóa khoảng trắng
console.log(text.trim()); 
console.log(text.trimStart());
console.log(text.trimEnd()); 

//Kiểm tra chuỗi bắt đầu và kết thúc bằng một từ cụ thể
console.log(str.startsWith("Have")); 
console.log(str.endsWith("good")); 

//Lấy kí tự từ vị trí nhất định
console.log(text.charAt(1)); 
console.log(text[2]); 

//Lặp chuỗi nhiều lần
let greeting = "Hi! ";
console.log(greeting.repeat(5)); 

//Viết hoa chữ cái đầu mỗi từ
function capitalizeWords(sentence) {
    return sentence.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("have a good day"));

//Đảo ngược một chuỗi
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Have a good day")); 

