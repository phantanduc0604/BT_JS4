/**
 * Khối 1 : Input 
 * Mảng chứa 3 số nguyên
 * Khối 2 :
 * B1 : Khai báo các biến thẻ input, output
 * B2 : Gắn sự kiện cho nutb button
 * B3 : Xây dụng hàm với công thức tính các số chẵn, lẻ
 * 
 * Khối 3 : Output
 * Hiện thị có nhiêu số chẵn, lẻ
 */
var Num = [];
document.getElementById("button__HW3").onclick = function () {
    var x = 0, y = 0;
    Num.push(parseInt(document.getElementById("Num1__HW3").value));
    Num.push(parseInt(document.getElementById("Num2__HW3").value));
    Num.push(parseInt(document.getElementById("Num3__HW3").value));

    for (var i = 0; i < 3; i++) {
        if (Num[i] % 2 == 0) {
            x++;
        } else { y++; }
    }

    console.log("So chan" + x);
    console.log("So le" + y);

    document.getElementById("Res__HW3").innerHTML = "Số chẵn: " + x +"  Số lẻ:" + y;
    document.getElementById("Res__HW3").style.display = "block";
    document.getElementById("OUTPUT__textHW3").style.display = "block";
    Num = [];
}
