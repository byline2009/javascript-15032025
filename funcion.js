// //ham return
// function calulateArea(width, height){
//     return width * height;

// }

// console.log(calulateArea(5,10))

// //ham dieu kien
// function isPositive(number)
// {
//     if (number > 0){
//         return "So duong";
//     }else if (number < 0){
//         return "So am";
//     } else{
//         return "So 0"
//     }
// };


// //ham vong lap
// function sumTon(n){
//     let sum = 0;
//     for (let i = 1, i <= n, i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumToN(5));

// //ham voi chuoi chu hoa dau
// function capitalizeWords(str) {
//     return str.split(" ")
//               .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//               .join(" ");
// }

// console.log(capitalizeWords("chao quy vi"));

// //ham mui ten (Arrow Function)
// const isEven = number => number % 2 ===0;
// console.log(isEven(4)); // Output: true
// console.log(isEven(7)); // Output: false


// //ham return
// const calculateArea = (width, height) => width * height;

// console.log(calculateArea(5, 10)); // Output: 50

const dientich = function(d, r){
    
    return d*r;
}

console.log(dientich(5,2));

// // ham callback
// function inArray (arr, callback){
//     arr.forEach(callback);
// }

// inArray([1,2,3,4], num => console.log(num * 2));

//
