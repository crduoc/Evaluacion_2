function login() {
    var user , pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("password").value;

    if(user == "admin" && pass == "1234"){
        window.location= "index.html";
    }
}
