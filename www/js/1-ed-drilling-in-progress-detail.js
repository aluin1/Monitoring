   
///load service Page  
myApp.onPageInit("1-ed-drilling-in-progress-detail", function(page){
	
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
/*	 
var WellId = page.query.WellId;  
var WellName = page.query.WellName;  
var ContractorName = page.query.ContractorName; 
var AFENumber = page.query.AFENumber; 
 var AFECost = page.query.AFECost; 
 var CummulativeCost = page.query.CummulativeCost; 
 var WellType = page.query.WellType; 
 var WellEnv = page.query.WellEnv; 
 var TotalReport = page.query.TotalReport; 
 var WaterDepth = page.query.WaterDepth; 
 var LastDDR = page.query.LastDDR; 
 */
 
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
var OperatorName = localStorage.getItem("OperatorName");
var FieldName = localStorage.getItem("FieldName");
var Currency = localStorage.getItem("Currency");


let formattedLastDDR = "";
const months = ["Januari", "Februari", "Maret","April", "Mei", "Juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
 
 var dtWellAllDetail = [];
 
 var dtWellAll2 = [];
 console.log(WellImageUrl);
  
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #002e66; font-size: 14px;  margin: 20px 0 0 ; '>Loading Aplikasi</p>");	
	if(LastDDR!=""){
let currentLastDDR=  new Date(LastDDR);
  formattedLastDDR = currentLastDDR.getDate() + " " + months[currentLastDDR.getMonth()] + " " + currentLastDDR.getFullYear();	 
	}
	var dtWell2 = '<div class="card" style="padding: 10px;margin: 10px 10px 0px 10px;" >'+
				 '<table style="font-size:12px">'+
				  '<tr><td width="50%"><b>Rig Contractor: </b><br>'+ContractorName+' </td><td><b>AFE No:</b> <br> '+AFENumber+' </td></tr> '+
				  '<tr><td> </td><td><b>AFE Budget:</b><br>  '+Currency+' '+AFECost+'  </td></tr> '+
				  '<tr><td> </td><td><b>Cum. Cost: </b><br> '+Currency+' '+CummulativeCost+'  </td></tr> '+
				 	 	 '<tr><td><b>Well Type: </b><br>'+WellType+' </td><td></td></tr> '+
					  	 '<tr><td><b>Env: </b><br>'+WellEnv+' </td><td><b>Total Report: </b><br> '+TotalReport+' </td></tr> '+
					 	 '<tr><td><b>Water Depth: </b><br>'+WaterDepth+' </td><td><b>Last DDR: </b><br >'+formattedLastDDR+' </td></tr> '+ 
					   '<tr><td colspan="2"><br> </td></tr> '+
					 	  '<tr><td colspan="2"> <img src="'+WellImageUrl+'" style=" width: 100%;    height: 180px;    border-radius: 0;" > </td></tr> '+
						 
				 ' </table> </div>';
 
  
			 dtWellAll2.push(dtWell2);
			 
//document.getElementById("OperatorNameDrill").innerHTML = OperatorName;
document.getElementById("FieldNameDrill").innerHTML = FieldName;
document.getElementById("strNameDrill").innerHTML = WellName;
document.getElementById("data-well-dtl").innerHTML = dtWellAll2.join(" ");


$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period'),
        data: {"txtWellId":""+WellId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn = JSON.parse(data);

 

		  for (i = 0; i < objReturn.length; i++) {
      console.log(objReturn[i].PeriodId); 

let formattedStartDate="";
let formattedEndDate="";	  
	 if(objReturn[i].StartDate!=""){ 
let currentStartDate =  new Date(objReturn[i].StartDate);
  formattedStartDate = currentStartDate.getDate() + " " + months[currentStartDate.getMonth()] + " " + currentStartDate.getFullYear();
	 }
	 
	 
	 if(objReturn[i].EndDate!=""){ 
let currentEndDate =  new Date(objReturn[i].EndDate);
  formattedEndDate = currentEndDate.getDate() + " " + months[currentEndDate.getMonth()] + " " + currentEndDate.getFullYear();
	   }
	   var dtWelldtl='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<table style="font-size:12px">	'+
				 '<tbody> '+ 
				  '<tr><td colspan="2"><b  > Activity Name: </b> <br>'+objReturn[i].WellPeriodName+'  </td> </tr>'+
				  '<tr><td width="50%"><b  > (Est) Spud Date: </b> <br>'+formattedStartDate+'  </td> <td><b  >  (Est) Rig Release Date: </b> <br>'+formattedEndDate+'  </td> </tr>'+
				  '<tr><td colspan="2"> <br>   </td> </tr>'+
				 '<tr><td  colspan="2" style="font-size:15px;text-align: right;color: #002e66;"> <label class="btn-well-report badge badge-info"   dataWellName="'+WellName+'" data-name="'+objReturn[i].WellPeriodName+'" data-id="'+objReturn[i].PeriodId+'" ChartUrl="'+objReturn[i].ChartUrl+'">Report</label></td></tr>'+
			 			  '</tbody></table>'+
				 '</div> ';  
			 dtWellAllDetail.push(dtWelldtl); 
			 
      myApp.hidePreloader();
} 
 
document.getElementById("data-well-detail").innerHTML =dtWellAllDetail;

$$('.btn-well-report').on('click', function () {
	   var dataid  = $$(this).attr("data-id");
	   var dataname  = $$(this).attr("data-name"); 
	   var dataWellName  = $$(this).attr("dataWellName"); 
	   var ChartUrl  = $$(this).attr("ChartUrl");
 
  mainView.router.loadPage('1-ed-drilling-in-progress-report.html');


	localStorage.setItem('dataid', dataid);
	localStorage.setItem('dataname', dataname);
	localStorage.setItem('dataWellName', dataWellName); 
	localStorage.setItem('ChartUrl', ChartUrl); 
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