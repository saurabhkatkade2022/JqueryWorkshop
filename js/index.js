$('document').ready(
    ()=>{
        var button = $('#btn');
         var email= $('#email').val();
         var pwd=  $('#pwd').val();
       console.log(button);

       button.click(
           (e)=>{
               e.preventDefault();
               $.ajax( {
                   url:"http://myjson.dit.upm.es/api/bins/5dmb",
                  
                   method:"GET",
                //    dataType:'json',
                   success:(x)=>{

                    //    console.log(x.email);
                     JSON.stringify(x);
                       var em = x.data.email;
                       var pass= x.data.password;

                    if(email==em && pass==pass){
                        console.log("Login Succesfull");
                    }
                      
                       console.log(email);
                   },

                   
               })
           }
       )
      


        

    }

   

)