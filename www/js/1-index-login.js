


myApp.onPageInit('1-index-login', function(page) { 
  
	$$('.btndata').on('click', function () {
 
 mainView.router.loadPage('1-homepage.html');

});
	$$('.btnlogin2').on('click', function () {
 
 mainView.router.loadPage('1-home.html');

});
 

	
	
$$(".btnlogin").on("click", function(){
	

		var strUsername = $$(".txtUserName").val();
		var strPass = $$(".txtUserPassword").val(); 
		  if (strUsername != '' & strPass != '') { 
		  	 
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #002e66; font-size: 14px;  margin: 20px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 
 $.ajax({
    //  url: "https://apps.pertamina.com/api/loginprod/Users/loginLDAP/",
	
   url: "https://apps.pertamina.com/api/login/Users/loginLDAP",
    type: "POST",
    data:' {"username" : "'+strUsername.trim()+'"  ,  "password" : "'+strPass+'"}' ,
    
    success: function (data) {
       // callback(data);
	    console.log(data);
		var datalogin=data;
		var statuslogin=datalogin.dataLDAP;
		var dtSAP=datalogin.dataSAP; 
	    console.log(statuslogin);
	    console.log(dtSAP);
		
		  if (statuslogin.Status=='00'){
			  
			 
				   
				   
			  for (i = 0; i < dtSAP.length; i++) {  
			      
	localStorage.setItem('LogonUsername', dtSAP[i].USERNAME);
	 localStorage.setItem('LogonNip', dtSAP[i].EMPLOYEE_NOPEK);
	 localStorage.setItem('Logon-EMPLOYEE_NAMA', dtSAP[i].EMPLOYEE_NAMA);
	 localStorage.setItem('Logon-EMPLOYEE_POSIDI', dtSAP[i].EMPLOYEE_POSIDI);
	 localStorage.setItem('Logon-EMPLOYEE_POSTEXT', dtSAP[i].EMPLOYEE_POSTEXT);
	 localStorage.setItem('Logon-EMPLOYEE_CC', dtSAP[i].EMPLOYEE_CC);
	 localStorage.setItem('Logon-EMPLOYEE_LAYER', dtSAP[i].EMPLOYEE_LAYER);
	 localStorage.setItem('Logon-EMPLOYEESUBGROUP', dtSAP[i].EMPLOYEESUBGROUP);
	 localStorage.setItem('Logon-EMPLOYEE_EMAIL', dtSAP[i].EMPLOYEE_EMAIL);
	 localStorage.setItem('Logon-GENDER', dtSAP[i].GENDER);
	 localStorage.setItem('Logon-ISCHIEF', dtSAP[i].ISCHIEF);
	 localStorage.setItem('Logon-ATASAN_USERNAME', dtSAP[i].ATASAN_USERNAME);
	 localStorage.setItem('Logon-ATASAN_NOPEK', dtSAP[i].ATASAN_NOPEK);
	 localStorage.setItem('Logon-ATASAN_POSIDI', dtSAP[i].ATASAN_POSIDI);
	 localStorage.setItem('Logon-ATASAN_EMAIL', dtSAP[i].ATASAN_EMAIL);
	 localStorage.setItem('Logon-ATASAN_LAYER', dtSAP[i].ATASAN_LAYER);
	 localStorage.setItem('Logon-ATASAN_EMPLOYEESUBGROUP', dtSAP[i].ATASAN_EMPLOYEESUBGROUP);
	 localStorage.setItem('Logon-COSTCENTERNAME', dtSAP[i].COSTCENTERNAME); 
	 localStorage.setItem('Logon-ZONE', dtSAP[i].ZONA);
	 
	 
			  console.log(dtSAP[i].ZONA);
	
			  }
			  
			 
		 mainView.router.loadPage('1-home.html'  ); 
			
			 
	   myApp.hidePreloader();
			 
   
		 }
		  else{
			 
			  myApp.modal({
		 title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-close-circle-outline"></i> </div><p style="color:#047edf;font-size:15px;    text-transform: uppercase;margin: 0px;">'+statuslogin.Message+'</p> ',
		 buttons: [
		    {
		 	text: '<div style="color:#047edf;font-size:15px;">OK</div>',
         bold: true 		
		   }  
	 	]
	 });
	   myApp.hidePreloader();
	   
	 
			 
			 
		 }
		  
					
					
					
					
    },
                    failure: function (errMsg) {
                        alert("ERRO");
						   
                    }
					
					
				   });
				   
/*
 $$.ajax({
      url: "https://apps.pertamina.com/api/login/Users/loginLDAP",
    method: "POST",
  //  data:' {"username" : "'+strUsername.trim()+'"  ,  "password" : "'+strPass+'", "appname" : 'DOA'}' ,
    data: { 
      "username": strUsername.trim(),
      "password": strPass,
	  "appname" : 'DOA',
		 
    },
	 contentType: "application/json", 
    timeout: (5 * 60 * 1000), 
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn = JSON.parse(data);


    },

    error: function (xhr, status) {
      console.log('login failed')
      $$('.errmsg').html('Username not found or password incorrect');
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  }); */

  
     }); 
 
	 
				   
				    }
			 else if  (strUsername != '' ) { 
		  myApp.modal({
		title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#002e66" class="mdi mdi-key-variant"></i> </div><p style="color:#002e66;font-size:15px;margin:0px">Mohon password diisi</p> ',
		buttons: [
		   {
			text: '<div style="color:#002e66;font-size:15px;">OK</div>' 
		  }  
		]
	})
	 }
	else if   (  strPass = !'') {  
   myApp.modal({
		title:  '  <div style="margin-bottom:5px"> <i style="font-size:40px;color:#002e66" class="mdi mdi-account-key"></i></div>  <p style="color:#002e66;font-size:15px;margin:0px">Mohon username diisi</p> ',
		buttons: [
		   {
			text: '<div style="color:#002e66;font-size:15px;">OK</div>' 
		  }  
		]
	})
	 }
	else{
	myApp.modal({
		title:  '<div style="margin-bottom:15px"><img src="icon/user.png" width="50"><img src="icon/lock.png" width="50"></div>  <p style="color:#002e66;font-size:15px;margin:0px">username atau password Kosong</p> ',
		buttons: [
		   {
			text: '<div style="color:#002e66;font-size:15px;">OK</div>' 
		  }  
		]
	})
	}
		
	});	
	 
}); 