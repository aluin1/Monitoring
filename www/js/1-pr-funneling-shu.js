   
///load service Page  
myApp.onPageInit("1-pr-funneling-shu", function(page){
	  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	console.log(window.location.href);  
	
	const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
	console.log(getLastItem(window.location.href)); 	
	localStorage.setItem('FirstUrl', getLastItem(window.location.href));
	myApp.hidePreloader();
		 });


$$('.btn-pr-funneling-shu-sudah-psb').on('click', function () {
 
 mainView.router.loadPage('1-pr-funneling-shu-sudah-psb.html');

});
 


$$('.btn-pr-funneling-shu-tindak-lanjut').on('click', function () {
 
 mainView.router.loadPage('1-pr-funneling-shu-tindak-lanjut.html');

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