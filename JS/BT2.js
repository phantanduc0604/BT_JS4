/**
 * Khối 1 : Input 
 * Ai đang sử dụng máy
 * Khối 2 :
 * B1 : Khai báo các biến thẻ input, output
 * B2 : Gắn sự kiện cho nút button
 * B3 : Xây dụng hàm với công thức chào hỏi người đang dùng
 * 
 * Khối 3 : Output
 * Hiện thị lời chào hỏi phù hợp với người đang dùng
 */
document.getElementById("button__HW2").onclick = function () {
    var x = document.getElementById("Name__HW2").value;
    switch (x) {
        case "B":
            document.getElementById("Res__HW2").innerHTML = "Xin chào bố";
            document.getElementById("Res__HW2").style.display = "block";
            break;
        case "E":
            document.getElementById("Res__HW2").innerHTML = "Xin chào em gái";
            document.getElementById("Res__HW2").style.display = "block";
            break;
        case "M":
            document.getElementById("Res__HW2").innerHTML = "Xin chào mẹ";
            document.getElementById("Res__HW2").style.display = "block";
            break;
        case "A":
            document.getElementById("Res__HW2").innerHTML = "Xin chào anh trai";
            document.getElementById("Res__HW2").style.display = "block";
            break;
    }
}