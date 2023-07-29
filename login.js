var mssv=document.querySelector('#mssv');
var pas=document.querySelector('#pas');
var showerror= document.querySelector('#showerror');
var data_login;
fetch('./data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        data_login=data;
    });
function check(){
    for(let Obj of data_login){
        if(Obj.mssv===mssv.value) {
            if(Obj.pas===pas.value) {
                window.location.href="./home.html";
                return;
            }
            else {
                showerror.innerHTML="Mật khẩu không chính xác !!!";
                return;
            }
        }
    }
    showerror.innerHTML="Không tìm thấy thông tin tài khoản sinh viên !!!";
}
