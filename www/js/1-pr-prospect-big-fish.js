   
///load service Page  
myApp.onPageInit("1-pr-prospect-big-fish", function(page){
	  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	console.log(window.location.href);  
	
	const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
	console.log(getLastItem(window.location.href)); 	
	localStorage.setItem('FirstUrl', getLastItem(window.location.href));
	myApp.hidePreloader();
		 });
 
 
$$('.btn-pr-prospect-big-fish-detail').on('click', function () {
 
 mainView.router.loadPage('1-pr-prospect-big-fish-detail.html');

});
	 
 
}); 