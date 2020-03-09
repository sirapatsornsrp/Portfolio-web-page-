
window.onload = pageLoad;
function pageLoad(){
    var clickbutton = document.getElementById("myForm");
    clickbutton.onsubmit = validateForm;
}

function validateForm() {
    
    var b = document.forms["myForm"]["password1"].value;
    
    var c = document.forms["myForm"]["password2"].value;
    
    if (b==c){
        
    }
    else if(b!=c){
        
        var password = document.getElementById("errormsg");
        password.innerHTML = "Password is not correct";
        return false;
    }

       
    
    
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}