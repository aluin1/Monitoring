   
///load service Page  
myApp.onPageInit("1-ss-pra-operasi-detail", function(page){
	 
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
 
 var dtSeismicAllDetail = [];
 var dtSeismicAllDetail2 = [];
 var dtSeismicDetail = [];
document.getElementById("strNameProj").innerHTML = ProjectName;

/*
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

document.getElementById("data-seismic-pra-detail").innerHTML = dtSeismicAllDetail;
document.getElementById("data-seismic-pra-detail2").innerHTML = dtSeismicAllDetail2;

*/

$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Seismic-Schedule'),
        data: {"txtSeismicId":""+SeismicId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnPraSeismic = JSON.parse(data);

 

  var head='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
	   
	   '<table class="table" >'+
			'	<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
			'	<td>Activity</td>'+
			'	<td>Progress</td>'+
			'	<td>Detail</td>'+ 
			'	</tr>';
			 dtSeismicDetail.push(head);
			 
		  for (i = 0; i < objReturnPraSeismic.length; i++) {
			
var selisih =100-parseInt(objReturnPraSeismic[i].FocusItemProgressInt);  
    var percen=parseInt(objReturnPraSeismic[i].FocusItemProgressInt);
			if (percen <50)
			{
				var segment="donut-segment-min-seismic ";
				var txtSegment="donut-text-min-seismic ";
			}else if (percen >=50 && percen <100)
			{
				var segment="donut-segment-mid-seismic ";
				var txtSegment="donut-text-mid-seismic ";
			}else{
				var segment="donut-segment-max-seismic ";
				var txtSegment="donut-text-max-seismic ";
			}
	 
	 
	 
	      var dtWelldtl=
			'	<tr class=" ">'+
			'	<td>'+objReturnPraSeismic[i].FocusItem+'</td>'+
			'	<td  >'+
			
'<div class="svg-item">'+
 ' <svg width="50px" height="100%" viewBox="0 0 40 40" class="donut">'+
  '  <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>'+
   ' <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>'+
   ' <circle class="donut-segment '+segment+'" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="'+parseInt(objReturnPraSeismic[i].FocusItemProgressInt)+'  '+selisih+'" stroke-dashoffset="25"></circle>'+
   ' <g class="donut-text '+txtSegment+'"  >'+

    '  <text y="50%" transform="translate(0, 2)">'+
     '   <tspan x="50%" text-anchor="middle" class="donut-percent">'+objReturnPraSeismic[i].FocusItemProgress+' </tspan>   '+
     ' </text>'+ 
   ' </g>'+
 ' </svg>'+
'</div>'+
			'</td>'+
		//	'<td> '+objReturnPraSeismic[i].FocusItemDetail+' </td>'+
				//'<td><label style="margin:5px" class="btn-detail  badge badge-info"  FocusItemDetail="'+objReturnPraSeismic[i].FocusItemDetail+'" >Focus Item Detail</label><label style="margin:5px"  class="btn-seismic-report badge badge-info"  dataSeismicId="'+SeismicId+'" dataFocusItem="'+objReturnPraSeismic[i].FocusItem+'"    >Detail</label></td>'+
				'<td> <label   class="btn-seismic-report badge badge-info"  dataSeismicId="'+SeismicId+'" dataFocusItem="'+objReturnPraSeismic[i].FocusItem+'"    >Detail</label></td>'+
			'</tr>'; 
			 dtSeismicDetail.push(dtWelldtl); 
			 
      myApp.hidePreloader();
} 
 
 var foot='	</table>'; 
			 dtSeismicDetail.push(foot); 
document.getElementById("data-seismic-schedule").innerHTML =dtSeismicDetail.join(" ");;
/*
$$('.btn-detail').on('click', function () {
	
	
	   var FocusItemDetail  = $$(this).attr("FocusItemDetail"); 
  var popupHTML = '<div class="popup"  style="    background-color: #fff;">'+
                    '<div class="content-block  ">'+
					
                      '<p style="margin: 15px 0;" align="right"><a href="#" class="close-popup"><label class="badge badge-danger"> Close</label> </a></p>'+
   '<div class="container2" style="padding-right: 0!important;padding-left: 0!important;">'+                  
 				   '<div class="  zoom" style="width: 100%; ">'+
				  '  <p>'+FocusItemDetail+'</p>'+
                    '</div>'+  
					'</div>'+
					 '</div>'+
                  '</div>';
  myApp.popup(popupHTML);
  
   
	 zoom();
 
  
  
});
*/

$$('.btn-seismic-report').on('click', function () {
	   var dataSeismicId  = $$(this).attr("dataSeismicId");
	   var dataFocusItem  = $$(this).attr("dataFocusItem");  
 
  mainView.router.loadPage('1-ss-pra-operasi-detail-chart.html');


	localStorage.setItem('dataSeismicId', dataSeismicId);
	localStorage.setItem('dataFocusItem', dataFocusItem); 
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