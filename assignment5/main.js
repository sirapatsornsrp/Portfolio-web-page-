var count = 1;

function postFunction(){
    var text = document.getElementById("text1").value;

    if (count==1){
        var post1 = document.getElementById("post1");
        post1.innerHTML=text;
        
    }
    else if (count==2){
        var reply1 = document.getElementById("reply1");
     reply1.innerHTML=text;
     
 
    }
    else if (count==3){
        var reply2 = document.getElementById("reply2");
     reply2.innerHTML=text;
     
    }
    count++
}

function clearFunction(){
    count=1;
    var post1 = document.getElementById("post1");
        post1.innerHTML="";
    var reply1 = document.getElementById("reply1");
        reply1.innerHTML="";
    var reply2 = document.getElementById("reply2");
     reply2.innerHTML="";
    
     

}
