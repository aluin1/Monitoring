   
///load service Page  
myApp.onPageInit("1-seismic-survey-home", function(page){
	 
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	console.log(window.location.href);  
	
	const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
	console.log(getLastItem(window.location.href)); 	
	localStorage.setItem('FirstUrl', getLastItem(window.location.href));
	myApp.hidePreloader();
		 });

$$('.btn-ss-pra-operasi').on('click', function () {
 
 mainView.router.loadPage('1-ss-pra-operasi.html');

});

$$('.btn-ss-survey-in-progress').on('click', function () {
 
  mainView.router.loadPage('1-ss-survey-in-progress.html');

});


$$('.btn-survey-result').on('click', function () {
 
  mainView.router.loadPage('1-ss-survey-result.html');

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