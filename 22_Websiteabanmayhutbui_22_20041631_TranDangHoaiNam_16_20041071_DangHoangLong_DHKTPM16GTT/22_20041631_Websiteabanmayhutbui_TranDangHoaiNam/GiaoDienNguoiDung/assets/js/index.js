$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
   // Viết code vào
   $("#btn2").click(function(){
       $("#myModal").modal();
   });

   function kiemTraTen(){
       var i = 1;
       let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
       if ($("#Name").val() == ""){
           $("#tbName").html("không để trống");
           return false;
       }
       if (!mauKT.test($("#Name").val())){
           $("#tbName").html("mõi kí tự đầu viết hoa, ko sữ dụng số ");
           return true;
       }
       $("#tbName").html("*");
       return true;
   }
   $("#Name").blur(kiemTraTen);

   

   
   function kiemTraNS(){
    if ($("#NS").val() == ""){
        $("#tbNS").html("Không để trống");
        return false;
    }
    var today = new Date();
    var ntt = new Date($("#NS").val());
    today = today.setDate(today.getDate() + 7);
    if (today > ntt) {
        $("#tbNS").html("Sau ngày hiện tại 7 ngày");
        return false;
    }
     $("#tbNS").html("*");
     return true;
}
$("#NS").blur(kiemTraNS);

    function kiemTraEmail(){
        var reg =/^\w+@[a-zA-Z]{3,1}$/i;
        if ($("#Email").val() == ""){
            $("#tbEmail").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#Email").val())){
            $("#tbEmail").html("mõi kí tự đầu đặt ");
            return true;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#Email").blur(kiemTraTen);





   $("#Sava").click(function(){
       if (kiemTraTen() == true && kiemTraSoAo() == true && kiemTraSDT() == true && kiemTraNTT() == true && kiemTraDiaChi() == true){
           row = "<tr>";
           row += "<th>" + (i++) + "</th>";
           row += "<th>" + $("#Name").val() + "</th>";
           row += "<th>" + $("#NS").val() + "</th>";
           row += "<th>" + $("#SDT").val() + "</th>";
           


           $("#danhSach").append(row);
           $("#myModal").modal("hide");
       }
   })











})