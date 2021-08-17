
// submit button 
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(){
    const userEmail = document.getElementById("user-email").value;
    const userPassword = document.getElementById("user-password").value;

    if(userEmail == "hrhridoydigital@gmail.com" && userPassword == "1234"){
        window.location.href = "banking.html";
    }else{
       alert("Sorry don't match password!!!")
    }
})  












