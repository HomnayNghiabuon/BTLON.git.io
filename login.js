var mssv=document.querySelector('#mssv');
var pas=document.querySelector('#pas');
var showerror= document.querySelector('#showerror');
var api = 'http://localhost:3000/login';
fetch(api)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        data_login=data;
    });
var data_login;
function check(){
    for(let Obj of data_login){
        if(Obj.mssv===mssv.value) {
            if(Obj.pas===pas.value) {
                window.location.href="https://tienichsv.ou.edu.vn/#/home";
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
