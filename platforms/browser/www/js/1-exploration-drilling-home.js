   
///load service Page  
myApp.onPageInit("1-exploration-drilling-home", function(page){
	 


$$('.btn-ed-pra-operasi').on('click', function () {
 // myApp.modal({
	//	title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#002e66" class="mdi mdi-information-outline"></i></div><p style="color: #002e66; font-size: 15px;  margin: 20px 0 0 ;">Masih dalam tahap Development</p> ',
	//	buttons: [
	//	  {
	//		text: '<div style="color:#002e66;font-size:15px;">OK</div>',
	//		bold: true
		//  }  
	//	]
	//})
 
 mainView.router.loadPage('1-ed-pra-operasi.html');

});

$$('.btn-ed-drilling-in-progress').on('click', function () {
 
  mainView.router.loadPage('1-ed-drilling-in-progress.html');

});


$$('.btn-ed-dst-result').on('click', function () {
  // myApp.modal({
	 //	title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#002e66" class="mdi mdi-information-outline"></i></div><p style="color: #002e66; font-size: 15px;  margin: 20px 0 0 ;">Masih dalam tahap Development</p> ',
	 //	buttons: [
		 //  {
	 //		text: '<div style="color:#002e66;font-size:15px;">OK</div>',
		 //	bold: true
		 //  }  
		 //]
	 //})
 
 mainView.router.loadPage('1-ed-dst-result.html');

});



/*	 
$$(".nextbutton").on("click", function(){
	
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 20px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	if (strUsername!=null){ 
		  mainView.router.loadPage('1-homepage.html');  
		  
		 }else{
			mainView.router.loadPage('1-index-login.html'); 
			 
		 }
		 
	   myApp.hidePreloader();
		 });
 
});

 */
	 
 
}); 