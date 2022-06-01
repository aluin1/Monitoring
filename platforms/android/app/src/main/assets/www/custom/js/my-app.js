// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true,
    // Enable templates auto precompilation
    precompileTemplates: true,
    // Enabled pages rendering using Template7
	swipeBackPage: false,
	swipePanelOnlyClose: true,
	pushState: true,
    template7Pages: true 
});

// Export selectors engine
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: false
});
  
 myApp.preloaderStart = function()
{
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color:#000;font-size:15px;'>Loading Aplikasi</p>");
    setTimeout(function () {
       myApp.hidePreloader();
		mainView.router.loadPage('index.html'); 
    }, 3000);
	
}
                 
