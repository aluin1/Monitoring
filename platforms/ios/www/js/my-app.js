var myApp = new Framework7({
    modalTitle: 'EXPLORATION MONITORING',
   //fastClicks: true,
    tapHold: true,
    tapHoldDelay: 1000,
    tapHoldPreventClicks: true,
	pushState : true,
     precompileTemplates: true,
    cache: true, 
	
	 
});


var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: false
}); 
  

  var strUsername = localStorage.getItem("LogonUsername");
var globalApiDefaultWeb = 'http://monitor.gura.me';
var globalApiSubUrl = '/DesktopModules/DnnSharp/DnnApiEndpoint/Api.ashx?method=';
var globalApiKey = 'Aw3QgAsTr1dfvOS4ngVpjNGur1t4hGU6';


 
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
   
myApp.getWebApi = function (sApiName) {

  var strUrl = globalApiDefaultWeb + globalApiSubUrl + sApiName + '&apikey=' + globalApiKey;
  console.log(strUrl);

  return strUrl;
}
	 
Date.prototype.yyyymmddOnly = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = this.getDate().toString();

    return yyyy + '-' + (mm[1]
        ? mm
        : '0' + mm[0]) + '-' + (dd[1]
        ? dd
        : '0' + dd[0]); // padding
};
 

 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	if (strUsername!=null){ 
		  mainView.router.loadPage('1-home.html');  
		  
		 }else{
			mainView.router.loadPage('1-index-login.html'); 
			 
		 }
		 
	   myApp.hidePreloader();
		 });

 
	  
	  
	
 
$$('.alert-logout').on('click', function () {
 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#002e66" class="mdi mdi-logout"></i></div><p style="color: #002e66; font-size: 15px;  margin: 20px 0 0 ;">Anda Yakin akan keluar?</p> ',
		buttons: [
		  {
			text: '<div style="color:#002e66;font-size:15px;">Batal</div>',
			bold: true
		  } , {
			text: '<div style="color:#002e66;font-size:15px;">Ya</div>',
			bold: true,
			 onClick: function () {
				 localStorage.clear();
				 mainView.router.loadPage('1-index-login.html'); 
			
				}
		  }  
		]
	})

});

$$('.profil-user').on('click', function () {
 
 mainView.router.loadPage('6-profil-user.html');

});


  