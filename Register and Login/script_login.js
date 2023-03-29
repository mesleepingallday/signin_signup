var loginAPI = "http://localhost:3000/users"

var createBtn = document.querySelector('#create1');
createBtn.onclick = function(){
    //Lấy ra dữ liệu từ input nhập vào
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;

    var formData = {
        email: email,
        password: password
    }
    let emailsArray = [];
    fetch(loginAPI)
        .then(function(response){
            return response.json();
        })
        .then(function(users){
            let count = 0;
            for (let i = 0; i < users.length; i++){
                if (formData.email == users[i].email && formData.password == users[i].password) {
                    count ++;                    
                }                
            }
            if (count != 0){
                    alert("Đăng nhập thành công!");
                    location.href = 'https://www.youtube.com/watch?v=kSjj0LlsqnI';
                }
            else {
                    alert("Tài khoản hoặc mật khẩu không hợp lệ! Vui lòng đăng nhập lại!");
                }                
        });
    

    // console.log(email);
    // console.log(password);
    
    

}

//Tạo function POST dữ liệu lên database - sử dụng fetch()
function createUser(data) {
    var option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
    };
    fetch(loginAPI, option);
}



function checkUser(users){
    for (let i = 0; i < users.length; i++){
        if (formData.email == usersArray[i].email) {
            alert("Tài khoản có email đã đăng ký tại web! Vui lòng nhập lại!");
        }
        else {
            createUser(formData);
            alert("Đăng ký thành công!");
        }
    }
}