// xác định input:
// loại xe
// số KM
// thời gian chờ.

// xác định output: tổng tiền
// hàm main: xử lý chức năng chính là tính tổng tiền

//-------------------------------------------
// CÁCH 1:
//-------------------------------------------
// function tinhTienUber() {
//   var loaiXe = document.querySelector("input[name='selector']:checked").value;
//   console.log("loaiXe: ", loaiXe);
//   var soKm = +document.getElementById("txt-km").value;
//   console.log("soKm: ", soKm);
//   var thoiGianCho = +document.getElementById("thoiGianCho").value;
//   console.log("thoiGianCho: ", thoiGianCho);
//   var tongTien;
//   var tienCho;

//   if (loaiXe === "uberCar") {
//     if (soKm === 1) {
//       tongTien = 8000;
//     } else if (soKm > 1 && soKm <= 19) {
//       tongTien = 8000 + (soKm - 1) * 7500;
//     } else {
//       tongTien = 8000 + 18 * 7500 + (soKm - 19) * 7000;
//     }

//     // if (thoiGianCho > 3) {
//     //   tienCho = ((thoiGianCho - 3) / 3) * 2000;
//     //   console.log("tienCho: ", tienCho);
//     // } else {
//     //   tienCho = 0;
//     // }

//     tienCho = thoiGianCho > 3 ? ((thoiGianCho - 3) / 3) * 2000 : 0;

//     tongTien += tienCho;
//     console.log("tongTien: ", tongTien);
//   } else if (loaiXe === "uberSUV") {
//     if (soKm === 1) {
//       tongTien = 8000;
//     } else if (soKm > 1 && soKm <= 19) {
//       tongTien = 8000 + (soKm - 1) * 7500;
//     } else {
//       tongTien = 8000 + 18 * 7500 + (soKm - 19) * 7000;
//     }

//     // if (thoiGianCho > 3) {
//     //   tienCho = ((thoiGianCho - 3) / 3) * 2000;
//     //   console.log("tienCho: ", tienCho);
//     // } else {
//     //   tienCho = 0;
//     // }

//     tienCho = thoiGianCho > 3 ? ((thoiGianCho - 3) / 3) * 2000 : 0;

//     tongTien += tienCho;
//     console.log("tongTien: ", tongTien);
//   } else {
//     if (soKm === 1) {
//       tongTien = 8000;
//     } else if (soKm > 1 && soKm <= 19) {
//       tongTien = 8000 + (soKm - 1) * 7500;
//     } else {
//       tongTien = 8000 + 18 * 7500 + (soKm - 19) * 7000;
//     }

//     // if (thoiGianCho > 3) {
//     //   tienCho = ((thoiGianCho - 3) / 3) * 2000;
//     //   console.log("tienCho: ", tienCho);
//     // } else {
//     //   tienCho = 0;
//     // }

//     tienCho = thoiGianCho > 3 ? ((thoiGianCho - 3) / 3) * 2000 : 0;

//     tongTien += tienCho;
//     console.log("tongTien: ", tongTien);
//   }
// }

//-------------------------------------------
// CÁCH 2:
//-------------------------------------------
function tinhGiaTienKmDauTien(loaiXe) {
  if (loaiXe === "uberCar") {
    return 8000;
  } else if (loaiXe === "uberSUV") {
    return 9000;
  } else {
    return 10000;
  } // hàm trả về số tiền km đầu tiên của từng loại xe
}
function tinhGiaTienKm1Den19(loaiXe) {
  if (loaiXe === "uberCar") {
    return 7500;
  } else if (loaiXe === "uberSUV") {
    return 8500;
  } else {
    return 9500;
  }
}
function tinhGiaTienKm19TroDi(loaiXe) {
  switch (loaiXe) {
    case "uberCar": {
      return 7000;
    }
    case "uberSUV": {
      return 8000;
    }
    case "uberBlack": {
      return 9000;
    }
  }
}
function tinhSoTienCho(loaiXe) {
  switch (loaiXe) {
    case "uberCar": {
      return 2000;
    }
    case "uberSUV": {
      return 3000;
    }
    case "uberBlack": {
      return 3500;
    }
  }
}

function tinhTienUber() {
  var loaiXe = document.querySelector("input[name='selector']:checked").value;
  var soKm = +document.getElementById("txt-km").value;
  var thoiGianCho = +document.getElementById("thoiGianCho").value;
  var tongTien = 0;
  var tienCho;
  //tính giá tiền theo km của từng loại xe
  var giaTienKmDauTien = tinhGiaTienKmDauTien(loaiXe);
  var giaTienKm1Den19 = tinhGiaTienKm1Den19(loaiXe);
  var giaTienKm19TroDi = tinhGiaTienKm19TroDi(loaiXe);

  if (soKm <= 1) {
    tongTien = giaTienKmDauTien * soKm;
  } else if (soKm < 19) {
    tongTien = giaTienKmDauTien + (soKm - 1) * giaTienKm1Den19;
  } else {
    tongTien =
      giaTienKmDauTien + 18 * giaTienKm1Den19 + (soKm - 19) * giaTienKm19TroDi;
  }

  tienCho =
    thoiGianCho > 3 ? ((thoiGianCho - 3) / 3) * tinhSoTienCho(loaiXe) : 0;
  tongTien += tienCho;
  console.log("tongTien: ", tongTien);

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien;
  document.getElementById("txt-loaiXe").innerHTML = loaiXe;
}

//-------------------------------------------
// CÁCH 3:
//-------------------------------------------
// function tinhTongTien(
//   soKm,
//   tien1KM,
//   tien1Den19Km,
//   tienTren19Km,
//   giaTienCho,
//   thoiGianCho
// ) {
//   var tongTien = 0;
//   if (soKm <= 1) {
//     tongTien = tien1KM * soKm;
//   } else if (soKm < 19) {
//     tongTien = tien1KM + (soKm - 1) * tien1Den19Km;
//   } else {
//     tongTien = tien1KM + 18 * tien1Den19Km + (soKm - 19) * tienTren19Km;
//   }

//   var tienCho = thoiGianCho > 3 ? ((thoiGianCho - 3) / 3) * giaTienCho : 0;
//   tongTien += tienCho;
//   return tongTien;
// }
// function tinhTienUber() {
//   var loaiXe = document.querySelector("input[name='selector']:checked").value;
//   var soKm = +document.getElementById("txt-km").value;
//   var thoiGianCho = +document.getElementById("thoiGianCho").value;
//   var tongTien = 0;

//   switch (loaiXe) {
//     case "uberCar":
//       tongTien = tinhTongTien(soKm, 8000, 7500, 7000, 2000, thoiGianCho);
//       break;
//     case "uberSUV":
//       tongTien = tinhTongTien(soKm, 9000, 8500, 8000, 3000, thoiGianCho);
//       break;
//     case "uberBlack":
//       tongTien = tinhTongTien(soKm, 10000, 9500, 9000, 3500, thoiGianCho);
//       break;
//     default:
//       console.log("hãy chọn xe");
//       break;
//   }

//   document.getElementById("divThanhTien").style.display = "block";
//   document.getElementById("xuatTien").innerHTML = tongTien;
// }

//in hóa đơn
document.getElementById("inHoaDon").onclick = function () {
  // gọi lại hàm tính tiền để có kết quả tổng tiền và loại xe để in giá trị vào bảng hóa đơn
  tinhTienUber();
  document.querySelector(".action").style.display = "none";
  document.querySelector(".hoaDon").style.display = "block";
  window.print();
};

// nhiệm vụ về nhà:
// 1.sửa table hóa đơn cho giống với đề yêu cầu.
// 2. gán id cho thẻ td, và gán giá trị cho nó.
