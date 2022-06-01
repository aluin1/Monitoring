   
///load service Page  
myApp.onPageInit("1-new-prospective-resources-home", function(page){
	 


$$('.btn-pr-funneling-shu').on('click', function () {
 
 mainView.router.loadPage('1-pr-funneling-shu.html');

});

$$('.btn-pr-pre-funneling').on('click', function () {
 
  mainView.router.loadPage('1-pr-pre-funneling.html');

});


$$('.btn-pr-prospect-big-fish').on('click', function () {
 
  mainView.router.loadPage('1-pr-prospect-big-fish.html');

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