/**
 * Khối 1 : Input 
 * Mảng chứa 3 số nguyên
 * Khối 2 :
 * B1 : Khai báo các biến thẻ input, output
 * B2 : Gắn sự kiện cho nutb button
 * B3 : Xây dụng hàm với công thức so sánh các số trong mảng
 * 
 * Khối 3 : Output
 * Hiện thị mảng sau khi sắp xếp các số theo thứ tự
 */

var Num = [];
document.getElementById("button__HW1").onclick = function () {
    var x;
    Num.push(Number(document.getElementById("Num1").value));
    Num.push(Number(document.getElementById("Num2").value));
    Num.push(Number(document.getElementById("Num3").value));
    for (var i = 1; i < 3; i++) {
        if (Num[0] > Num[i]) {
            x = Num[0];
            Num[0] = Num[i];
            Num[i] = x;
        }
    }
    if (Num[1] > Num[2]) {
        x = Num[1];
        Num[1] = Num[2];
        Num[2] = x;
    }
    console.log(Num);
   
    document.getElementById("Descen__HW1").innerHTML = Num;
    document.getElementById("Descen__HW1").style.display = "block";
    document.getElementById("OUTPUT__textHW1").style.display = "block";
    Num = [];
}
