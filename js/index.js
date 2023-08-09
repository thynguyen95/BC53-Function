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

function tinhLuong(ngayCong, soNgayLam) {
  var luong = ngayCong * soNgayLam;
  return luong;
  console.log("luong", luong);
}

var tienLuong = tinhLuong(200, 5);
console.log("tienLuong: ", tienLuong);

// if (!dieukien) {
//   return;
// }

const methodtest = () => {
  var n = 1;
  switch (n) {
    case 1:
      // bbbbb
      // break;
      return;
    default:
      break;
  }

  console.log("test");
};

methodtest();

console.log("test 2");
