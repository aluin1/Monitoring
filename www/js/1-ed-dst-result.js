   
///load service Page  
myApp.onPageInit("1-ed-dst-result", function(page){
	 
/*
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	console.log(window.location.href);  
	
	const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
	console.log(getLastItem(window.location.href)); 	
	localStorage.setItem('FirstUrl', getLastItem(window.location.href));
	myApp.hidePreloader();
		 });
		 */

$$('.btn-ed-dst-result-detail').on('click', function () {
 
 mainView.router.loadPage('1-ed-dst-result-detail.html');

});
 



 var dtWellAll = [];
 var dtWellPeriodName = [];
  
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #002e66; font-size: 14px;  margin: 20px 0 0 ; '>Loading Aplikasi</p>");	
		 
$$.ajax({
    url: myApp.getWebApi('APPS-GET-Active-Well-PostDrill'),
    method: 'POST',
    data: {},
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn = JSON.parse(data);

		  for (i = 0; i < objReturn.length; i++) {
      console.log(objReturn[i]);
	/*
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period'),
        data: {"txtWellId":""+objReturn[i].WellId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn2 = JSON.parse(data);

 

		  for (i = 0; i < objReturn2.length; i++) {
      console.log(objReturn2[i].PeriodId); 
      console.log(objReturn2[i].WellPeriodName); 
	  var WellPeriodName= objReturn2[i].WellPeriodName;
	   
			 
	localStorage.setItem('Well'+objReturn[i].WellId, WellPeriodName);
	    }
  
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
*/
	 	
			 var dtWell='<div class="card   "> <div class="card-body" style="padding: 0px 10px;">'+
				'<table class="table">	'+
				'<tbody> '+
				'<tr class="btn-detail" '+
				'WellName="'+objReturn[i].WellName+'" '+
				'WellId="'+objReturn[i].WellId+'" '+
				'ContractorName="'+objReturn[i].ContractorName+'" '+
				'AFENumber="'+objReturn[i].AFENumber+'"  '+
				'AFECost="'+objReturn[i].AFECost+'"  '+
				'CummulativeCost="'+objReturn[i].CummulativeCost+'"  '+
				'WellType="'+objReturn[i].WellType+'" '+
				'WellEnv="'+objReturn[i].WellEnv+'"  '+
				'TotalReport="'+objReturn[i].TotalReport+'"  '+
				'WaterDepth="'+objReturn[i].WaterDepth+' '+objReturn[i].UOMWaterDepth+'" '+
				'LastDDR="'+objReturn[i].LastReportDate+'"  '+
				'WellImageUrl="'+objReturn[i].WellImageUrl+'"  '+
				'OperatorName="'+objReturn[i].OperatorName+'"  '+
				'FieldName="'+objReturn[i].FieldName+'"> '+
				'<td style="padding: 10px;"> '+
				'<b>'+objReturn[i].WellName+' </b></td>'+
				'<td style="font-size:15px;text-align: right;color: #002e66;padding: 10px;"> <span class="mdi mdi-arrow-right-bold-circle-outline" style="font-size: 25px;"></span></td>'+
				'</tr></tbody></table>'+
				'</div></div>';
				//'<div class="accordion-item-content">'+
				//'<div class="card" style="padding: 10px;">'+
				//'<table>'+
				//// '<tr><td width="60%">Contractor: <br><b>'+objReturn[i].ContractorName+'</b></td><td>AFE No: <br><b>'+objReturn[i].AFENumber+'</b> </td></tr> '+
				 //'<tr><td> </td><td>AFE Cost:<br> <b>'+objReturn[i].AFECost+'</b> </td></tr> '+
				 //'<tr><td> </td><td>Cum. Cost: <br><b>'+objReturn[i].CummulativeCost+'</b> </td></tr> '+
				//		 '<tr><td>Well Type: <b>'+objReturn[i].WellType+'</b></td><td></td></tr> '+
					//	 '<tr><td>Env: <b>'+objReturn[i].WellEnv+'</b></td><td>Total Report: <b>'+objReturn[i].TotalReport+'</b></td></tr> '+
					//	 '<tr><td>Water Depth: <b>'+objReturn[i].WaterDepth+'</b></td><td>Last DDR: <b>???</b></td></tr> '+ 
					//	 '<tr><td colspan="2"><br> </td></tr> '+
					//	 '<tr><td colspan="2"> <img src="'+objReturn[i].WellImageUrl+'" style=" width: 100%;    height: 150px;    border-radius: 0;" > </td></tr> '+
						 
				//' </table> </div>';
			//	
			// var dtWell2='<div class="card" style="padding: 10px;">'+
			//	//'<table>'+
				//		 '<tr><td>Well Period Name: <br><b  > '+objReturn[i].WellPeriodName+'</b> </td></tr>'+
				//		 '<tr> <td style="text-align: right;"><label class="btn-detail badge badge-info" data-name="'+objReturn[i].WellName+'" data-id="'+objReturn[i].WellId+'">Report</label></td></tr>'+
						
				//' </table>  </div>'+
				//'</div></div>';	 
			 dtWellAll.push(dtWell);
			// dtWellAll.push(dtWell2);
			 
			 
 
  
 myApp.hidePreloader();
}

document.getElementById("data-well-dst-result").innerHTML = dtWellAll.join(" ");

$$('.btn-detail').on('click', function () {
	   var WellId  = $$(this).attr("WellId");
	   var WellName  = $$(this).attr("WellName");
	   var ContractorName  = $$(this).attr("ContractorName");
	   var AFENumber  = $$(this).attr("AFENumber");
	   var AFECost  = $$(this).attr("AFECost");
	   var CummulativeCost  = $$(this).attr("CummulativeCost");
	   var WellType  = $$(this).attr("WellType");
	   var WellEnv  = $$(this).attr("WellEnv");
	   var TotalReport  = $$(this).attr("TotalReport");
	   var WaterDepth  = $$(this).attr("WaterDepth");
	   var LastDDR  = $$(this).attr("LastDDR");
	   var WellImageUrl  = $$(this).attr("WellImageUrl");
	   var OperatorName  = $$(this).attr("OperatorName");
	   var FieldName  = $$(this).attr("FieldName");
 
 //mainView.router.loadPage('1-ed-drilling-in-progress-detail.html?WellId='+WellId+'&&WellName='+WellName+'&&ContractorName='+ContractorName+'&&AFENumber='+AFENumber);



	console.log(
		$$(this)
	);
	localStorage.setItem('WellId', WellId);
	localStorage.setItem('WellName', WellName);
	localStorage.setItem('ContractorName', ContractorName);
	localStorage.setItem('AFENumber', AFENumber);
	localStorage.setItem('AFECost', AFECost);
	localStorage.setItem('CummulativeCost', CummulativeCost);
	localStorage.setItem('WellType', WellType);
	localStorage.setItem('WellEnv', WellEnv);
	localStorage.setItem('TotalReport', TotalReport);
	localStorage.setItem('WaterDepth', WaterDepth);
	localStorage.setItem('LastDDR', LastDDR);
	localStorage.setItem('WellImageUrl', WellImageUrl);
	localStorage.setItem('OperatorNameDST', OperatorName);
	localStorage.setItem('FieldNameDST', FieldName);
	
	mainView.router.loadPage('1-ed-dst-result-detail.html');
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