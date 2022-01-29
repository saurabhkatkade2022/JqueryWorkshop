$('document').ready(
    ()=>{
        $.get("http://localhost:3000/users", (res)=> {
            $("button").click(function(e) {
                e.preventDefault();
                uname=$("input[type=text]#email").val();
                 upwd=$("input[type=password]#pwd").val();
                // console.log(uname);

                 for(var index=0;index<res.length;index++) {
                     console.log(res[index].username);
                      if(uname===res[index].username && upwd===res[index].pass){
                        console.log("match");
                     window.location="http://127.0.0.1:5500/html/register.html";
                        break;
                    }
                    else{
                        alert("Username or password is incorrect");
                        break;
                    }
                 }
                   
            })
        }) 
        var formData = JSON.stringify($("#myForm").serializeArray());
        $("#formSubmit").click(function(e) {
            e.preventDefault();
            $.ajax({
                type:"POST",
                url:"db.json",
                data:formData,
                success: ()=>{
                    alert("Saved Successfully");
                    console.log(data);

                },
                dataType:"json",
                contentType:"application/json"
            })
        })

    }

   

)