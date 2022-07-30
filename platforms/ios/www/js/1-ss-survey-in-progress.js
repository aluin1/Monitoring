   
///load service Page  
myApp.onPageInit("1-ss-survey-in-progress", function(page){
	 
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

$$('.btn-ss-survey-in-progress-detail').on('click', function () {
 
 mainView.router.loadPage('1-ss-survey-in-progress-detail.html');

});
 


 var dtProjectAllProg = [];
 var dtProjectPeriodNameProg = [];
  
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #002e66; font-size: 14px;  margin: 20px 0 0 ; '>Loading Aplikasi</p>");	
		 
$$.ajax({
    url: myApp.getWebApi('APPS-GET-Active-Seismic-IsShowOnOps'),
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
				'<tr class="btn-detail-pra-progress" '+
				'SeismicId="'+objReturn[i].SeismicId+'"  '+
				'OperatorName="'+objReturn[i].OperatorName+'"  '+
				'WorkingArea="'+objReturn[i].WorkingArea+'"  '+
				'WorkAreaStatus="'+objReturn[i].WorkAreaStatus+'"  '+
				'ActivityStatus="'+objReturn[i].ActivityStatus+'"  '+
				'ActivityType="'+objReturn[i].ActivityType+'"  '+
				'ActivityArea="'+objReturn[i].ActivityArea+'"  '+
				'ProjectName="'+objReturn[i].ProjectName+'"  '+
				'ExecutorOfWork="'+objReturn[i].ExecutorOfWork+'"  '+
				'OperatorsArroundTheSurveyArea="'+objReturn[i].OperatorsArroundTheSurveyArea+'"  '+
				'SurveyAreaDistrict="'+objReturn[i].SurveyAreaDistrict+'"  '+
				'SurveyAreaCity="'+objReturn[i].SurveyAreaCity+'"  '+
				'RepresentativeSKKMIGAS="'+objReturn[i].RepresentativeSKKMIGAS+'"  '+
				'ReportNo="'+objReturn[i].ReportNo+'"  '+
				'BudgetSchedule="'+objReturn[i].BudgetSchedule+'"  '+
				'FinalAFENumber="'+objReturn[i].FinalAFENumber+'"  '+
				'FinalBudgetPlan="'+objReturn[i].FinalBudgetPlan+'"  '+
				'FinalBudgetActual="'+objReturn[i].FinalBudgetActual+'"  '+
				'AFEStatus="'+objReturn[i].AFEStatus+'"  '+
				'ScopePlan="'+objReturn[i].ScopePlan+'"  '+
				'ScopeActual="'+objReturn[i].ScopeActual+'"  '+
				'Summary="'+objReturn[i].Summary+'"  '+
				'Objective="'+objReturn[i].Objective+'"  '+
				'TotalReport="'+objReturn[i].TotalReport+'"  > '+
				 
				'<td style="padding: 10px;"> '+
				'<b style="font-size:12px">'+objReturn[i].ProjectName+'  </b></td>'+
				
				'<td style="font-size:15px;text-align: right;color: #002e66;padding: 10px;"> <span class="mdi mdi-arrow-right-bold-circle-outline" style="font-size: 25px;"></span></td>'+
				'</tr></tbody></table>'+
				'</div></div>';
				 
			 dtProjectAllProg.push(dtProject); 
			 
			 
 
  
 myApp.hidePreloader();
}

document.getElementById("data-project-progress").innerHTML = dtProjectAllProg.join(" ");

$$('.btn-detail-pra-progress').on('click', function () {
	   var SeismicId  = $$(this).attr("SeismicId");
	   var OperatorName  = $$(this).attr("OperatorName");
	   var WorkingArea  = $$(this).attr("WorkingArea");
	   var WorkAreaStatus  = $$(this).attr("WorkAreaStatus");
	   var ActivityStatus  = $$(this).attr("ActivityStatus");
	   var ActivityType  = $$(this).attr("ActivityType");
	   
	   var ActivityArea  = $$(this).attr("ActivityArea");
	   var ProjectName  = $$(this).attr("ProjectName");
	   var ExecutorOfWork  = $$(this).attr("ExecutorOfWork");
	   var OperatorsArroundTheSurveyArea  = $$(this).attr("OperatorsArroundTheSurveyArea");
	   var SurveyAreaDistrict  = $$(this).attr("SurveyAreaDistrict");
	   var SurveyAreaCity  = $$(this).attr("SurveyAreaCity");
	   var RepresentativeSKKMIGAS  = $$(this).attr("RepresentativeSKKMIGAS");
	   var ReportNo  = $$(this).attr("ReportNo");
	   var BudgetSchedule  = $$(this).attr("BudgetSchedule");
	   var FinalAFENumber  = $$(this).attr("FinalAFENumber");
	   var FinalBudgetPlan  = $$(this).attr("FinalBudgetPlan");
	   var FinalBudgetActual  = $$(this).attr("FinalBudgetActual");
	   var AFEStatus  = $$(this).attr("AFEStatus");
	   var ScopePlan  = $$(this).attr("ScopePlan");
	   var ScopeActual  = $$(this).attr("ScopeActual");
	   var Summary  = $$(this).attr("Summary");
	   var Objective  = $$(this).attr("Objective");
	   var TotalReport  = $$(this).attr("TotalReport"); 
	console.log(
		$$(this)
	);
	localStorage.setItem('SeismicId', SeismicId);
	localStorage.setItem('OperatorName', OperatorName);
	localStorage.setItem('WorkingArea', WorkingArea);
	localStorage.setItem('WorkAreaStatus', WorkAreaStatus);
	localStorage.setItem('ActivityStatus', ActivityStatus);
	localStorage.setItem('ActivityType', ActivityType);
	localStorage.setItem('ActivityArea', ActivityArea);
	
	localStorage.setItem('ProjectName', ProjectName);
	localStorage.setItem('ExecutorOfWork', ExecutorOfWork);
	localStorage.setItem('OperatorsArroundTheSurveyArea', OperatorsArroundTheSurveyArea);
	localStorage.setItem('SurveyAreaDistrict', SurveyAreaDistrict);
	localStorage.setItem('SurveyAreaCity', SurveyAreaCity);
	localStorage.setItem('RepresentativeSKKMIGAS', RepresentativeSKKMIGAS);
	localStorage.setItem('ReportNo', ReportNo);
	localStorage.setItem('BudgetSchedule', BudgetSchedule);
	localStorage.setItem('FinalAFENumber', FinalAFENumber);
	localStorage.setItem('FinalBudgetPlan', FinalBudgetPlan);
	localStorage.setItem('FinalBudgetActual', FinalBudgetActual);
	localStorage.setItem('AFEStatus', AFEStatus);
	localStorage.setItem('ScopePlan', ScopePlan);
	localStorage.setItem('ScopeActual', ScopeActual);
	localStorage.setItem('Summary', Summary);
	localStorage.setItem('Objective', Objective);
	localStorage.setItem('TotalReport', TotalReport);
	
	mainView.router.loadPage('1-ss-survey-in-progress-detail.html');
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