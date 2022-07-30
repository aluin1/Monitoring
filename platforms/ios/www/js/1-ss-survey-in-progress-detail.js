   
///load service Page  
myApp.onPageInit("1-ss-survey-in-progress-detail", function(page){
	 
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


	 
var OperatorName = localStorage.getItem("OperatorName");
var ProjectName = localStorage.getItem("ProjectName");

var SeismicId = localStorage.getItem("SeismicId");
var WorkingArea = localStorage.getItem("WorkingArea");
var WorkAreaStatus = localStorage.getItem("WorkAreaStatus");
var ActivityStatus = localStorage.getItem("ActivityStatus");
var ActivityType = localStorage.getItem("ActivityType");
var ActivityArea = localStorage.getItem("ActivityArea");


var ExecutorOfWork = localStorage.getItem("ExecutorOfWork");
var OperatorsArroundTheSurveyArea = localStorage.getItem("OperatorsArroundTheSurveyArea");
var SurveyAreaDistrict = localStorage.getItem("SurveyAreaDistrict");
var SurveyAreaCity = localStorage.getItem("SurveyAreaCity");
var RepresentativeSKKMIGAS = localStorage.getItem("RepresentativeSKKMIGAS");
var ReportNo = localStorage.getItem("ReportNo");
var BudgetSchedule = localStorage.getItem("BudgetSchedule");
var FinalAFENumber = localStorage.getItem("FinalAFENumber");
var FinalBudgetPlan = localStorage.getItem("FinalBudgetPlan");
var FinalBudgetActual = localStorage.getItem("FinalBudgetActual");
var AFEStatus = localStorage.getItem("AFEStatus");
var ScopePlan = localStorage.getItem("ScopePlan");
var ScopeActual = localStorage.getItem("ScopeActual");
var Summary = localStorage.getItem("Summary");
var Objective = localStorage.getItem("Objective");
var TotalReport = localStorage.getItem("TotalReport");


const months = ["Januari", "Februari", "Maret","April", "Mei", "Juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
 
 var dtSeismicAllDetail = [];
 var dtSeismicAllDetail2 = [];
 var dtSeismicDetail = [];
 var dtSeismicAllDetailSeismicReport = [];

document.getElementById("strNameProjProg").innerHTML = ProjectName;

	 var detailSeismic='<div class="card" style="padding: 10px;margin: 10px 10px 0px 10px;" >'+
	   
	   '<table  style="font-size:12px">'+
			'<tbody>	'+
			'<tr><td><b>Project Name:</b> <br>'+ProjectName+'</td><td><b>Operator Name:</b> <br>'+OperatorName+'</td></tr>'+  
			'<tr><td><b>Working Area:</b> <br>'+WorkingArea+'</td><td><b>WorkArea Status:</b> <br>'+WorkAreaStatus+'</td></tr>'+  
			'<tr><td><b>Activity Status:</b> <br>'+ActivityStatus+'</td><td><b>Activity Type:</b> <br>'+ActivityType+'</td></tr>'+  
			'<tr><td><b>Activity Area:</b> <br>'+ActivityArea+'</td><td><b>Executor Of Work:</b> <br>'+ExecutorOfWork+'</td></tr>'+  
			'<tr><td><b>Operators Arround The Survey Area:</b> <br>'+OperatorsArroundTheSurveyArea+'</td><td><b>Survey Area District:</b> <br>'+SurveyAreaDistrict+'</td></tr>'+  
			'<tr><td><b>Survey Area City:</b> <br>'+SurveyAreaCity+'</td><td><b>Representative SKKMIGAS:</b> <br>'+RepresentativeSKKMIGAS+'</td></tr>'+  
			'	</tbody></table> </div> ';
			 dtSeismicAllDetail.push(detailSeismic); 
			 
			 
/*		 
 var detailSeismic2='<div class="card" style="padding: 10px;margin: 10px 10px 0px 10px;" >'+
	   
	   '<table  style="font-size:12px">'+
			'<tbody>	'+
			'<tr><td><b>Report No:</b> <br>'+ReportNo+'</td><td><b>Budget Schedule:</b> <br>'+BudgetSchedule+'</td></tr>'+  
			'<tr><td><b>Final AFE Number:</b> <br>'+FinalAFENumber+'</td><td><b>Final Budget Plan:</b> <br>'+FinalBudgetPlan+'</td></tr>'+  
			'<tr><td><b>Final Budget Actual:</b> <br>'+FinalBudgetActual+'</td><td><b>AFE Status:</b> <br>'+AFEStatus+'</td></tr>'+  
			'<tr><td><b>Scope Plan:</b> <br>'+ScopePlan+'</td><td><b>Scope Actual:</b> <br>'+ScopeActual+'</td></tr>'+  
			'<tr><td><b>Summary:</b> <br>'+Summary+'</td><td><b>Objective:</b> <br>'+Objective+'</td></tr>'+  
			'<tr><td colspan="2"><b>Total Report:</b> <br>'+TotalReport+'</td> </tr>'+  
			'	</tbody></table> </div> ';
			 dtSeismicAllDetail2.push(detailSeismic2); 
*/
document.getElementById("data-seismic-pra-detail").innerHTML = dtSeismicAllDetail;
//document.getElementById("data-seismic-pra-detail2").innerHTML = dtSeismicAllDetail2;
 
 
 
 
 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report'),
    method: 'POST',
   data: {"txtSeismicId":""+SeismicId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn = JSON.parse(data);

		  for (i = 0; i < objReturn.length; i++) {
      console.log(objReturn[i]); 
	 	
	let currentReportDate=  new Date(objReturn[i].ReportDate);
  let formattedReportDate = currentReportDate.getDate() + " " + months[currentReportDate.getMonth()] + " " + currentReportDate.getFullYear();		  
		 
			 
 var detailSeismicReport='<div class="card" style="padding: 10px;margin: 10px 10px 0px 10px;" >'+
	   
	   '<table  style="font-size:12px">'+
			'<tbody>	'+
			'<tr><td><b>Report No:</b> <br>'+objReturn[i].ReportNumber+'</td><td><b>Report Date:</b> <br>'+formattedReportDate+'</td></tr>'+  
			'<tr><td><b>Budget Schedule:</b> <br>'+objReturn[i].BudgetSchedule+'</td><td><b>Final AFE Number:</b> <br>'+objReturn[i].FinalAFENumber+'</td></tr>'+  
			'<tr><td><b>AFE Status:</b> <br>'+objReturn[i].AFEStatus+'</td><td><b>Operation Status:</b> <br>'+objReturn[i].OperationStatus+'</td></tr>'+  
			'<tr><td><b>Budget Plan:</b> <br>'+objReturn[i].BudgetPlan+'</td><td><b>Budget Plan Revision:</b> <br>'+objReturn[i].BudgetPlanRevision+'</td></tr>'+  
			'<tr><td><b>Budget Actual:</b> <br>'+objReturn[i].BudgetActual+'</td><td><b>Scope Plan:</b> <br>'+objReturn[i].ScopePlan+'</td></tr>'+  
			'<tr><td colspan="2"><b>Scope Actual:</b> <br>'+objReturn[i].ScopeActual+'</td> </tr>'+  
			'<tr><td><b>Summary:</b> <br>'+objReturn[i].Summary+'</td><td><b>Objective:</b> <br>'+objReturn[i].Objective+'</td></tr>'+  
			
			
			'<tr><td colspan="2" style="text-align:right;"><label ReportId="'+objReturn[i].ReportId+'" ReportDate="'+formattedReportDate+'"  style="margin:10px" class="btn-ss-progress-detail badge badge-info">Detail</label></td></tr>'+  
			'	</tbody></table> </div> ';
			 dtSeismicAllDetailSeismicReport.push(detailSeismicReport); 
			 
			 
 
  
 myApp.hidePreloader();
}

document.getElementById("data-project-ss-report").innerHTML = dtSeismicAllDetailSeismicReport.join(" ");

$$('.btn-ss-progress-detail').on('click', function () {
	   var ReportId  = $$(this).attr("ReportId"); 
	   var ReportDate  = $$(this).attr("ReportDate"); 
	console.log(
		$$(this)
	);
	localStorage.setItem('ReportId', ReportId); 
	localStorage.setItem('ReportDate', ReportDate); 
	
	mainView.router.loadPage('1-ss-survey-in-prgress-detail-report.html');
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