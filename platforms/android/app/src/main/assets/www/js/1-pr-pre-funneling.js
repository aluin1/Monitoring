   
///load service Page  
myApp.onPageInit("1-pr-pre-funneling", function(page){
 

 
 var dtProjectAllResultFurnelling = []; 
  
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #002e66; font-size: 14px;  margin: 20px 0 0 ; '>Loading Aplikasi</p>");	
		 
$$.ajax({
    url: myApp.getWebApi('APPS-GET-NPR-Pre-Funneling'),
    method: 'POST',
    data: {},
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn = JSON.parse(data);

		  for (i = 0; i < objReturn.length; i++) {
      console.log(objReturn[i]); 
	 	
			 var dtProject='<div class="card   "> <div class="card-body" style="padding: 0px 10px;">'+
				'<table class="table">	'+
				'<tbody> '+
				'<tr class="btn-pr-funneling-shu"  '+ 
				'PreFunneling="'+objReturn[i].PreFunneling+'"    '+
				'ProspectId="'+objReturn[i].ProspectId+'"  > '+
				 
				'<td style="padding: 10px;"> '+
				'<b  >'+objReturn[i].PreFunneling+'  </b></td>'+
				
				'<td style="font-size:15px;text-align: right;color: #002e66;padding: 10px;"> <span class="mdi mdi-arrow-right-bold-circle-outline" style="font-size: 25px;"></span></td>'+
				'</tr></tbody></table>'+
				'</div></div>';
				 
			 dtProjectAllResultFurnelling.push(dtProject); 
			 
			 
 
  
 myApp.hidePreloader();
}

document.getElementById("data-funneling").innerHTML = dtProjectAllResultFurnelling.join(" ");

$$('.btn-pr-funneling-shu').on('click', function () {
	   var ProspectId  = $$(this).attr("ProspectId");
	   var PreFunneling  = $$(this).attr("PreFunneling");
	    
	console.log(
		$$(this)
	);
	localStorage.setItem('ProspectId', ProspectId); 
	localStorage.setItem('PreFunneling', PreFunneling); 
	
	mainView.router.loadPage('1-pr-pre-funneling-detail.html');
});


    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
	
 
 
}); 