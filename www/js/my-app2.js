var myApp = new Framework7({
    modalTitle: 'EXPLORATION MONITORING',
    fastClicks: true,
    tapHold: true,
    tapHoldDelay: 1000,
    tapHoldPreventClicks: true,
  //  pushState : true,
     //precompileTemplates: true,
    cache: false,
	/*methods: {
        onBackKeyDown: function() {

            var leftp = app.panel.left && app.panel.left.opened;
            var rightp = app.panel.right && app.panel.right.opened;

            if ( leftp || rightp ) {

                app.panel.close();
                return false;
            }else if ($$('.modal-in').length > 0) {
              
                app.dialog.close();
                app.popup.close();
                return false;
            } else if (app.views.main.router.url == '/1-home/') {

                    navigator.app.exitApp();
            } else {

                mainView.router.back();
           }
	 } }*/
	
});

var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: false
});

 //document.addEventListener("backbutton", onBackKeyDown, false);
 
 $(window).on("navigate", function (event, data) {
	 
var direction = data.state.direction;
if (direction == 'back') {
 var leftp = app.panel.left && app.panel.left.opened;
            var rightp = app.panel.right && app.panel.right.opened;

            if ( leftp || rightp ) {

                app.panel.close();
                return false;
            }else if ($$('.modal-in').length > 0) {
              
                app.dialog.close();
                app.popup.close();
                return false;
            } else if (app.views.main.router.url == '/1-home/') {

                    navigator.app.exitApp();
            } else {

                mainView.router.back();
           }
}
});

/*
function onBackKeyDown() {
	 var leftp = app.panel.left && app.panel.left.opened;
            var rightp = app.panel.right && app.panel.right.opened;

            if ( leftp || rightp ) {

                app.panel.close();
                return false;
            }else if ($$('.modal-in').length > 0) {
              
                app.dialog.close();
                app.popup.close();
                return false;
            } else if (app.views.main.router.url == '/1-home/') {

                    navigator.app.exitApp();
            } else {

                mainView.router.back();
           }
}
 */

 var strUsername = localStorage.getItem("LogonUsername");
var globalApiDefaultWeb = 'http://monitor.gura.me';
var globalApiSubUrl = '/DesktopModules/DnnSharp/DnnApiEndpoint/Api.ashx?method=';
var globalApiKey = 'Aw3QgAsTr1dfvOS4ngVpjNGur1t4hGU6';
  
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


  