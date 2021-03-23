// Khai báo biến dạng obj
let obj = { name: "Khanh", age: 28 }

// Trích các phần tử bên trong obj ra các biến có tên tương đương
let { name, age } = obj
// Như vậy ta có 2 biến, name = "Khanh" và age = 28

// Trích các phần tử bên trong obj ra các biến có tên khác
let { name: newName, age: newAge } = obj
// Như vậy ta có 2 biến, newName = "Khanh" và newAge = 28

// Tương đương với vòng if...else if...else...
var a = 1 + 1 == 3 ? "tung" : 1 + 1 == 2 ? "khoa" : "nam";

// Tạo mảng:
let arr = [1, 2, 3, 4];

// Trích dữ liệu từ array
// Cách 1: 
var a = arr[0];
var b = arr[1];
var c = arr[2];
// Cách 2: 
var [a, b, c] = arr
// Cách 3: Gán a là phần tử đầu, b là những phần tử còn lại
var [a, ...b] = arr;

// Cũng có thể áp dụng cho function.
function f() { return [1, 2, 3]; }
var [a, , b] = f();
// Tại đây a = 1, b = 3.
// console.log(b)

// Trích giá trị dựa theo vị trí
var mixed = { one: 1, two: 2, values: [3, 4, 5] };
var { one: a, two: b, values: [c, , e] } = mixed;

// Ví dụ khác
var [ {prop : x} = {prop : 123}] = []
// console.log(`x`,x) // x=123


// Sự khác nhau giữa const, let, var


// Phạm vi scope {} như: if, for, while ...
// let chỉ hoạt động trong phạm vi scope {}
// var có thể hoạt động ngoài scope {}, nhưng không thể hoạt động ngoài function


function checkScope (){
    var d = "checking";
}
// console.log(`q`, q)  // => error: d is not defined

let test = document.getElementById('test');
test.addEventListener('click', function(){
    console.log(this)
});

// var dù khai báo ở đâu cũng được hiểu là khai báo trên đầu, nhưng khi đó var chưa có giá trị
// console.log(`r`,r);
// var r = "ok"; // r undefined
// let r = "ok"; // Cannot access 'r' before initialization

// Const không thể thay đổi vùng nhớ. Nhưng giá trị bên trong obj có thể thay đổi
const n = {
    name: 'Khanh',
    age: 16
}

n.age = 17;

// console.log(n)

// Dạng viết khác của function
// function tinhtong (a,b){
//     return a + b
// }
// let tong = tinhtong(5,6)

let tinhtong = (a,b) => a+b
let tong = tinhtong (5,6)

// Sử dụng map để tạo một mảng mới dựa trên mảng cũ và thỏa mãn điều kiện nếu có.
let arr1 = [5,6,7,8,9]
let new1 = arr1.map((item, index) => ({key:index, value:item}))


// Tạo hàm returnObj để sử lý thao tác bên trên
let returnObj = (arr) => arr.map((item, index) => ({key:index, value:item}))
console.log(`returnObj`,returnObj(arr1))
