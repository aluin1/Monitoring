   
///load service Page  
myApp.onPageInit("1-ed-pra-operasi-detail", function(page){
	 
 

var WellId = localStorage.getItem("WellId");
var WellName = localStorage.getItem("WellName");
var ContractorName = localStorage.getItem("ContractorName");
var AFENumber =localStorage.getItem("AFENumber");
 var AFECost = localStorage.getItem("AFECost"); 
 var CummulativeCost = localStorage.getItem("CummulativeCost"); 
 var WellType = localStorage.getItem("WellType"); 
 var WellEnv = localStorage.getItem("WellEnv"); 
 var TotalReport = localStorage.getItem("TotalReport");; 
 var WaterDepth = localStorage.getItem("WaterDepth"); 
 var LastDDR = localStorage.getItem("LastDDR");
 var WellImageUrl = localStorage.getItem("WellImageUrl"); 
 
 
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
  
 
 var dtWellAllDetail = [];
document.getElementById("strNamePra").innerHTML = WellName;
	 
 $$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Schedule'),
        data: {"txtWellId":""+WellId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnPra = JSON.parse(data);

 

		  for (i = 0; i < objReturnPra.length; i++) {
      console.log(objReturnPra[i].PeriodId); 

 let formattedScheduleReportDate="";
 //let formattedEndDate="";	  
	  if(objReturnPra[i].ScheduleReportDate!=""){ 
 let currentScheduleReportDate =  new Date(objReturnPra[i].ScheduleReportDate);
  formattedScheduleReportDate = currentScheduleReportDate.getDate() + " " + months[currentScheduleReportDate.getMonth()] + " " + currentScheduleReportDate.getFullYear();
 	 }
	 
	 
	// if(objReturnPra[i].EndDate!=""){ 
//let currentEndDate =  new Date(objReturnPra[i].EndDate);
 // formattedEndDate = currentEndDate.getDate() + " " + months[currentEndDate.getMonth()] + " " + currentEndDate.getFullYear();
	//   }
	   var dtWelldtl='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<table style="font-size:12px">	'+
				 '<tbody> '+ 
				  '<tr><td ><b  > Schedule Report Date: </b> <br>'+formattedScheduleReportDate+'  </td> <td><b  > Schedule Report Name: </b> <br>'+objReturnPra[i].ScheduleReportName+'  </td></tr>'+
				  '<tr><td width="50%"><b  > Prognosis Start: </b> <br>'+objReturnPra[i].PrognosisStart+'  </td> <td><b  >Prognosis Date: </b> <br>'+objReturnPra[i].PrognosisDate+'  </td> </tr>'+
			  '<tr><td width="50%"><b  > Target Start: </b> <br>'+objReturnPra[i].TargetStart+'  </td> <td><b  >Target End: </b> <br>'+objReturnPra[i].TargetEnd+'  </td> </tr>'+
			  '<tr><td width="50%"><b  > Focus Item: </b> <br>'+objReturnPra[i].FocusItem+'  </td> <td><b  >Focus Item Detail: </b> <br>'+objReturnPra[i].FocusItemDetail+'  </td> </tr>'+
			  '<tr><td width="50%"><b  > Focus Item Progress: </b> <br>'+objReturnPra[i].FocusItemProgress+'  </td> <td><b  >Focus Item Status: </b> <br>'+objReturnPra[i].FocusItemStatus+'  </td> </tr>'+
			  '<tr><td width="50%"><b  > Focus Item Issue: </b> <br>'+objReturnPra[i].FocusItemIssue+'  </td> <td><b  >Focus Item Plan: </b> <br>'+objReturnPra[i].FocusItemPlan+'  </td> </tr>'+
			  '<tr><td width="50%" colspan="2"><b  >FocusItem Target Date: </b> <br>'+objReturnPra[i].FocusItemTargetDate+'  </td>  </tr>'+
			 
				  '</tbody></table>'+
				 '</div> ';  
			 dtWellAllDetail.push(dtWelldtl); 
			 
      myApp.hidePreloader();
} 
 
document.getElementById("data-well-pra-detail").innerHTML =dtWellAllDetail.join(" ");

//$$('.btn-well-report').on('click', function () {
	 //  var dataid  = $$(this).attr("data-id");
	  // var dataname  = $$(this).attr("data-name"); 
	  // var dataWellName  = $$(this).attr("dataWellName"); 
	  // var ChartUrl  = $$(this).attr("ChartUrl");
 
 // mainView.router.loadPage('1-ed-drilling-in-progress-report.html');


	//localStorage.setItem('dataid', dataid);
	//localStorage.setItem('dataname', dataname);
	//localStorage.setItem('dataWellName', dataWellName); 
	////localStorage.setItem('ChartUrl', ChartUrl); 
//});
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