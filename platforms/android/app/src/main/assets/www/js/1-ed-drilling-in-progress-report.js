   
///load service Page  
myApp.onPageInit("1-ed-drilling-in-progress-report", function(page){ 
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	console.log(window.location.href);  
	
	const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
	console.log(getLastItem(window.location.href)); 	
	localStorage.setItem('FirstUrl', getLastItem(window.location.href));
	myApp.hidePreloader();
		 });
var dataid = localStorage.getItem("dataid");
var dataname = localStorage.getItem("dataname");
var dataWellName = localStorage.getItem("dataWellName"); 
var ChartUrl = localStorage.getItem("ChartUrl"); 
var OperatorName = localStorage.getItem("OperatorName");
var FieldName = localStorage.getItem("FieldName");

 
 var dtWellAllReport = [];
  
 var dtWellAllChart = [];
 console.log(dataid);
  
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #002e66; font-size: 14px;  margin: 20px 0 0 ; '>Loading Aplikasi</p>");	
	  if (ChartUrl==""){
			 
 var dtWellAllReportChart = '';	   
  var dtWellAllBtn = 'style="display:none"';
document.getElementById('divq').style.display ='none';  
		  }
		  else{
 var dtWellAllReportChart ='<img  src="'+ChartUrl+'" style=" width: 100%;    height: 180px;    border-radius: 0;" > ';	 
		 document.getElementById('divq').style.display = 'block';
			 }
			 dtWellAllChart.push(dtWellAllReportChart); 
var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos : [
        ChartUrl,
    ],
   // theme: 'dark',
    type: 'popup'
});
$$('.pb-popup-dark').on('click', function () {
    myPhotoBrowserPopupDark.open();
}); 

			  
document.getElementById("ChartUrl").innerHTML = dtWellAllReportChart; 
			 
//document.getElementById("OperatorNameReport").innerHTML = OperatorName; 
document.getElementById("FieldNameReport").innerHTML = FieldName; 
document.getElementById("strNameReport").innerHTML = dataWellName;  


$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report'),
        data: {"txtPeriodId":""+dataid+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn = JSON.parse(data);

 
const months = ["Januari", "Februari", "Maret","April", "Mei", "Juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
 
let formattedReportDate="";
let formattedSpudDate="";
 let formattedRigReleaseDate="";

		  for (i = 0; i < objReturn.length; i++) {
      console.log(objReturn[i].PeriodId); 
	  if(objReturn[i].ReportDate!=""){ 
		  
let currentReportDate=  new Date(objReturn[i].ReportDate);
  formattedReportDate= currentReportDate.getDate() + " " + months[currentReportDate.getMonth()] + " " + currentReportDate.getFullYear();
	  }
	  
	  if(objReturn[i].SpudDate!=""){ 
let currentSpudDate=  new Date(objReturn[i].SpudDate);
  formattedSpudDate= currentSpudDate.getDate() + " " + months[currentSpudDate.getMonth()] + " " + currentSpudDate.getFullYear();
}
 if(objReturn[i].RigReleaseDate!=""){ 
let currentRigReleaseDate=  new Date(objReturn[i].RigReleaseDate);
  formattedRigReleaseDate= currentRigReleaseDate.getDate() + " " + months[currentRigReleaseDate.getMonth()] + " " + currentRigReleaseDate.getFullYear();
}
	   var dtWellReport='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<table style="font-size:12px"  >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%" ><b>Rig Name: <br></b> '+objReturn[i].RigName+'</b> </td> <td><b>Report Date: <br></b> '+formattedReportDate+'  </td></tr> '+
				  '<tr><td width="50%"><b>Rig Type: <br></b> '+objReturn[i].RigType+'</b> </td> <td><b>Rig Power: <br></b> '+objReturn[i].RigPower+' '+objReturn[i].UOMRigPower+'  </td></tr> '+
				  '<tr><td width="50%"><b>KB Elevation: <br></b> '+objReturn[i].KBElevation+' '+objReturn[i].UOMKBElevation+'</b> </td> <td><b>Current MD: <br></b> '+objReturn[i].CurrentMD+' '+objReturn[i].UOMCurrentMD+' </td></tr> '+
				  '<tr><td width="50%"><b>Progress MD: <br></b> '+objReturn[i].ProgressMD+' '+objReturn[i].UOMProgressMD+'</b> </td> <td><b>PTMD: <br></b> '+objReturn[i].PTMD+' '+objReturn[i].UOMPTMD+'  </td></tr> '+  
				  '<tr><td width="50%"><b>Spud Date: <br></b> '+formattedSpudDate+' </b> </td> <td><b>Rig Release Date: <br></b> '+formattedRigReleaseDate+' </b> </td></tr> '+  
				   '<tr><td width="50%"><b>Planned Days: <br></b> '+objReturn[i].PlannedDays+' '+objReturn[i].UOMPlannedDays+' </b> </td> <td><b>Days From Spud: <br></b> '+objReturn[i].DaysFromSpud+'   </td></tr> '+  
				   '<tr><td width="50%" colspan="2"><br> </td>  </tr> '+  
				  '<tr><td width="50%" colspan="2"><b>Daily Summary: <br></b> '+objReturn[i].DailySummary+' </b> </td>  </tr> '+  
				    '<tr><td width="50%" colspan="2"><br> </td>  </tr> '+  
				  '<tr><td width="50%" colspan="2"><b>Daily Forecast: <br></b> '+objReturn[i].DailyForecast+' </b> </td>  </tr> '+  
				    '<tr><td width="50%" colspan="2"><br> </td>  </tr> '+  
				  '<tr><td width="50%" colspan="2"  style="font-size:15px;text-align: right;color: #002e66;"><label class="btn-well-afe badge badge-info"   ReportId="'+objReturn[i].ReportId+'" RigName="'+objReturn[i].RigName+'"  ReportDate="'+formattedReportDate+'">Detail</label> </td>  </tr> '+  
				  
				  
				  
				  '</tbody></table>'+
				 /* '<table ><tbody>'+
				  '<tr><th  width="30%" style="font-size:15px; color: #002e66;"><label class="btn-well-afe badge badge-info" ReportId="'+objReturn[i].ReportId+'" RigName="'+objReturn[i].RigName+'"  Reporthate="'+formattedReportDate+'">Report AFE</label></th>'+
				  '<th  width="30%" style="font-size:15px; color: #002e66;"><label class="btn-well-bit-record badge badge-info" ReportId="'+objReturn[i].ReportId+'" RigName="'+objReturn[i].RigName+'"  Reporthate="'+formattedReportDate+'">Report Bit Record</label></th>'+
				  '<th  width="30%" style="font-size:15px; color: #002e66;"><label class="btn-well-casing badge badge-info" ReportId="'+objReturn[i].ReportId+'" RigName="'+objReturn[i].RigName+'"  Reporthate="'+formattedReportDate+'">Report Casing</label></th></tr>'+
				  '<tr><th  width="30%" style="font-size:15px; color: #002e66;"><label class="btn-well-directional-survey badge badge-info" ReportId="'+objReturn[i].ReportId+'" RigName="'+objReturn[i].RigName+'"  Reporthate="'+formattedReportDate+'">Report Directional Survey</label></th></tr>'+
				  '</tbody></table>'+*/
				 '</div>';  
			 dtWellAllReport.push(dtWellReport); 
			 
      myApp.hidePreloader();
} 
 
document.getElementById("data-well-report").innerHTML =dtWellAllReport.join(" ");
 
$$('.btn-well-afe').on('click', function () {
	   var ReportId  = $$(this).attr("ReportId");
	   var RigName  = $$(this).attr("RigName");  
	   var ReportDate  = $$(this).attr("ReportDate");  
 
  mainView.router.loadPage('1-ed-drilling-in-progress-afe.html');


	localStorage.setItem('ReportId', ReportId);
	localStorage.setItem('RigName', RigName);
	localStorage.setItem('ReportDate', ReportDate);
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