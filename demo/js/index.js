// function nameFunction(tham số) {
//     // nội dung xử lý của function
// }

console.log("hello abc");
console.log("xyz");

function printName(name) {
  console.log("Hi", name);
  // document.getElementById("id").innerHTML = name;
}

printName("Nam");
printName("T");

// global scope : biến toàn cục
//  những biến khai báo bên ngoài, không nằm trong hàm nào là biến toàn cục.

var test = "test";
console.log("test bên ngoài hàm: ", test);

function tinhLuong(ngayCong, soNgayLam) {
  // local scope: biến cục bộ
  // biến được khai báo bên trong hàm là biến cục bộ, sử dụng bên ngoài hàm sẽ bị lỗi
  var luong = ngayCong * soNgayLam;
  // return luong;
  console.log("luong", luong);
  console.log("test bên trong hàm ", test);
}

// console.log("luong", luong);

var tienLuong = tinhLuong(200, 5);
console.log("tienLuong: ", tienLuong);

// if (!dieukien) {
//   return;
// }

function createEleHTML(eleName, content, fs, color, idAppend, bg) {
  var ele = document.createElement(eleName);
  ele.innerHTML = content;
  ele.style.fontSize = fs;
  ele.style.color = color;
  ele.style.background = bg;
  // ele.style.cssText = `color: ${color} ; font-size: ${fs}`;
  document.getElementById(idAppend).appendChild(ele);
}

// document.getElementById("createEle").onclick = function () {
//   var ele = document.createElement("div");
//   ele.innerHTML = "thẻ mới tạo nè";
//   ele.style.fontSize = "20px";
//   ele.style.color = "red";
//   document.getElementById("content").appendChild(ele);
// };

// document.getElementById("createEle2").onclick = function () {
//   var ele = document.createElement("div");
//   ele.innerHTML = "thẻ mới tạo nè";
//   ele.style.fontSize = "20px";
//   ele.style.color = "red";
//   document.getElementById("content").appendChild(ele);
// };

document.getElementById("createEle").onclick = function () {
  createEleHTML("p", "thẻ p mới tạo", "30px", "blue", "content", "yellow");
};

// document.getElementById("createEle2").onclick = function () {
//   createEleHTML("p", "thẻ p mới tạo", "30px", "blue", "content", "yellow");
// };

function methodTest() {
  var n = 1;
  switch (n) {
    case 1:
      console.log("1");
      // break;
      return;
    case 2:
      console.log("2");
      break;
    default:
      console.log("default");
      break;
  }

  console.log("end switch");
}

methodTest();

console.log("bên ngoài methodTest");
