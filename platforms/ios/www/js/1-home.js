 
///load service Page  
myApp.onPageInit("1-home", function(page){
	  
        document.addEventListener("deviceready", onDeviceReady, false);
   

    // Cordova is loaded and it is now safe to call Cordova methods
    //
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
    }
function onBackKeyDown() {
	if (mainView.activePage.name == "1-home" || mainView.activePage.name == "1-index-login" ) {

     
  myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#002e66" class="mdi mdi-logout"></i></div><p style="color: #002e66; font-size: 15px;  margin: 20px 0 0 ;">Anda Yakin Akan Keluar Aplikasi?</p> ',
		buttons: [
		  {
			text: '<div style="color:#002e66;font-size:15px;">Batal</div>',
			bold: true
		  } , {
			text: '<div style="color:#002e66;font-size:15px;">Ya</div>',
			bold: true,
			 onClick: function () {
				  navigator.app.exitApp();
			
				}
		  }  
		]
	})
  
            } else {

                mainView.router.back();
           }
}
var strUsername = localStorage.getItem("LogonUsername");
var strNip = localStorage.getItem("LogonNip");
var strEMPLOYEE_NAMA = localStorage.getItem("Logon-EMPLOYEE_NAMA");
var strEMPLOYEE_POSIDI = localStorage.getItem("Logon-EMPLOYEE_POSIDI");
var strEMPLOYEE_POSTEXT = localStorage.getItem("Logon-EMPLOYEE_POSTEXT");
var strEMPLOYEE_CC = localStorage.getItem("Logon-EMPLOYEE_CC");
var strEMPLOYEE_LAYER = localStorage.getItem("Logon-EMPLOYEE_LAYER");
var strEMPLOYEESUBGROUP = localStorage.getItem("Logon-EMPLOYEESUBGROUP");
var strEMPLOYEE_EMAIL = localStorage.getItem("Logon-EMPLOYEE_EMAIL");
var strGENDER = localStorage.getItem("Logon-GENDER");
var strISCHIEF = localStorage.getItem("Logon-ISCHIEF");
var strATASAN_USERNAME = localStorage.getItem("Logon-ATASAN_USERNAME");
var strATASAN_NOPEK = localStorage.getItem("Logon-ATASAN_NOPEK");
var strATASAN_POSIDI = localStorage.getItem("Logon-ATASAN_POSIDI");
var strATASAN_EMAIL = localStorage.getItem("Logon-ATASAN_EMAIL");
var strATASAN_LAYER = localStorage.getItem("Logon-ATASAN_LAYER");
var strATASAN_EMPLOYEESUBGROUP = localStorage.getItem("Logon-ATASAN_EMPLOYEESUBGROUP"); 

$$('.btn-exploration-drilling').on('click', function () {
 
 mainView.router.loadPage('1-exploration-drilling-home.html');

});

$$('.btn-seismic-survey').on('click', function () {
	/*
 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#002e66" class="mdi mdi-information-outline"></i></div><p style="color: #002e66; font-size: 15px;  margin: 20px 0 0 ;">Masih dalam tahap Development</p> ',
		buttons: [
		  {
			text: '<div style="color:#002e66;font-size:15px;">OK</div>',
			bold: true
		  }  
		]
	})
 */
mainView.router.loadPage('1-seismic-survey-home.html');

});


$$('.btn-new-prospective-resources').on('click', function () {
 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#002e66" class="mdi mdi-information-outline"></i></div><p style="color: #002e66; font-size: 15px;  margin: 20px 0 0 ;">Masih dalam tahap Development</p> ',
		buttons: [
		  {
			text: '<div style="color:#002e66;font-size:15px;">OK</div>',
			bold: true
		  }  
		]
	})
 
 // mainView.router.loadPage('1-new-prospective-resources-home.html');

});



	 var datauserq= []; 
						   
	var dataUser = ' <table width="80%" border="0" style="margin:20px;">'+
  '<tr >'+
    '<td width="25%" rowspan="3"><i style="font-size:40px;color:#002e66" class="mdi mdi-account-circle"></i></td>'+
    '<td>'+strEMPLOYEE_NAMA+'</td>'+
  '</tr>'+ 
  '<tr>'+
   ' <td style="color: #0a82e0 !important;  font-size: 13px;">'+strEMPLOYEE_POSTEXT+'</td>'+
  '</tr>'+
'</table>';
console.log(dataUser);
				datauserq.push(dataUser);
 				
 
	document.getElementById("data-user").innerHTML = datauserq.join(" ");	
	
/*
  
  
  var latitude =-6.25396244;
  var longitude = 108.27631255; 
		
		  
             var myLatlng = new google.maps.LatLng(latitude,longitude);
             var mapOptions = {
               zoom: 10,
               center: myLatlng 
            }
            var map = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions);
			
             var marker = new google.maps.Marker({
                 position: myLatlng,
                map: map,
                icon: 'icon/marker.png', 
          animation: google.maps.Animation.DROP				
             });
		 
		  */
	 
	 	
 
}); 