/**
 * Khối 1 : Input 
 * Ba cạnh của 1 tam giác
 * Khối 2 :
 * B1 : Khai báo các biến thẻ input, output
 * B2 : Gắn sự kiện cho nút button
 * B3 : Xây dụng hàm với công thức kiểm tra là tam giác gì
 * 
 * Khối 3 : Output
 * Hiện thị loại tam giác sau khi kiểm tra
 */


document.getElementById("button__HW4").onclick = function () {

    var x = Number(document.getElementById("Num1__HW4").value);
    var y = Number(document.getElementById("Num2__HW4").value);
    var z = Number(document.getElementById("Num3__HW4").value);
    console.log(x,y,z);
    if (x == y && x == z) {
        document.getElementById("Res__HW4").innerHTML = "Đây là tam giác đều";
    } else if (x == y || y == z || z == x) {
        if (x * x == y * y + z * z || y * y == x * x + z * z || z * z == x * x + y * y) {
            document.getElementById("Res__HW4").innerHTML = "Đây là tam giác vuông cân";
        } else { document.getElementById("Res__HW4").innerHTML = "Đây là tam giác cân"; }

    } else {
        if (x * x == y * y + z * z || y * y == x * x + z * z || z * z == x * x + y * y) {
            document.getElementById("Res__HW4").innerHTML = "Đây là tam giác vuông";
        } else { document.getElementById("Res__HW4").innerHTML = "Đây là tam giác thường"; }
    }


    document.getElementById("Res__HW4").style.display = "block";


}