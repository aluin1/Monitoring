   
///load service Page  
myApp.onPageInit("1-ss-survey-in-prgress-detail-report", function(page){
	 
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

		 
 var  detailSeismicActivity=[];
 var  detailSeismicEquipment=[];
 var  detailSeismicReceiver=[];
 var  detailSeismicRecording=[];
 var  detailSeismicShotPoint=[];
 var  detailSeismicPersonnel=[];
 var  detailSeismicPhase=[];
 
 
 var  detailSeismicPointGPS=[];
 var  detailSeismicPointSeismic=[];
 var  detailSeismicPointRecording=[];
 var  detailSeismicLineRecording=[];
 var  detailSeismicProgram=[];
 
 
 
 var  detailSeismicPointsShotHoles=[];
 var  detailSeismicPointTopography=[]; 
 var  detailSeismicBridging=[]; 
 var  detailSeismicShotHoles=[]; 
 var  detailSeismicProgramTopography=[]; 
 
  
 
 
 
var OperatorName = localStorage.getItem("OperatorName");
var ReportId = localStorage.getItem("ReportId");
var ProjectName = localStorage.getItem("ProjectName");
var ReportDate = localStorage.getItem("ReportDate");
 
document.getElementById("strNameProjProgDetail").innerHTML = ProjectName;
document.getElementById("strReportDate").innerHTML = ReportDate;
	 

  

$$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Phase'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnReportPhase= JSON.parse(data);
	  
      console.log(objReturnReportPhase);
 
			  var dtlSeismicReportPhase='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">Phase</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding:5px;"><b>Phase </b></td>'+
				 '<td style="padding:5px;"><b>Date </b> </td>'+ 
				 '</tr>';
				  
			 detailSeismicPhase.push(dtlSeismicReportPhase); 
			if (objReturnReportPhase==""){
	 
	 dtlSeismicReportPhase='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No  Phase </b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicPhase.push(dtlSeismicReportPhase); 
			 
      myApp.hidePreloader();
}else{ 
		  for (i = 0; i < objReturnReportPhase.length; i++) {
      console.log(objReturnReportPhase[i]); 
	 	  
				
 	
		  dtlSeismicReportPhase='<tr>'+
				'<td style="padding:5px;"> '+objReturnReportPhase[i].Phase+'     </td>'+ 
				'<td style="padding:5px;">'+objReturnReportPhase[i].Date+'       </td> '+ 
				  
				 
				'</tr> ';
				  	
			 detailSeismicPhase.push(dtlSeismicReportPhase); 
			 myApp.hidePreloader();
}} 
		

	     dtlSeismicReportPhase= '</table></div>'; 
			 detailSeismicPhase.push(dtlSeismicReportPhase); 
document.getElementById("data-ss-report-Phase").innerHTML = detailSeismicPhase.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 
  
 
 
 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Activity'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnReportActivity = JSON.parse(data);
	   
	

  var dtlSeismicReportActivity='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">  Activities</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding: 5px;" ><b>Activity </b></td>'+
				 '<td style="padding: 5px;" ><b>Completion Status </b></td>'+
				 '<td  style="padding: 5px;" ><b>Detail </b> </td>'+ 
				 '</tr>';
				  
			 detailSeismicActivity.push(dtlSeismicReportActivity);
if (objReturnReportActivity==""){
	 
	 dtlSeismicReportActivity='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No Activities </b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicActivity.push(dtlSeismicReportActivity); 
			 
      myApp.hidePreloader();
}else{
			 
		  for (i = 0; i < objReturnReportActivity.length; i++) {
      console.log(objReturnReportActivity[i]); 
	 	  
				
			
	 dtlSeismicReportActivity='<tr>'+
				'<td style="padding:5px; "> '+objReturnReportActivity[i].Activity+'     </td>'+ 
				'<td style="padding:5px; "> '+objReturnReportActivity[i].CompletionStatus+'     </td>'+ 
				'<td style="padding:5px;"> <label class="btn-detail-activity badge badge-info" Activity="'+objReturnReportActivity[i].Activity+'" Problem="'+objReturnReportActivity[i].Problem+'" Strategies="'+objReturnReportActivity[i].Strategies+'" CompletionStatus="'+objReturnReportActivity[i].CompletionStatus+'" >Detail</label>  </td> '+ 
				 
				'</tr> ';		
			
			 detailSeismicActivity.push(dtlSeismicReportActivity); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicReportActivity= '</table ></div>';  
			 detailSeismicActivity.push(dtlSeismicReportActivity); 
document.getElementById("data-ss-report-Activity").innerHTML = detailSeismicActivity.join(" ");
 
$$('.btn-detail-activity').on('click', function () {
	
	
	   var Activity  = $$(this).attr("Activity");
	   var Problem  = $$(this).attr("Problem");
	   var Strategies  = $$(this).attr("Strategies");
	   var CompletionStatus  = $$(this).attr("CompletionStatus"); 
  var popupHTML = '<div class="popup"  style="    background-color: #fff;">'+
                    '<div class="content-block">'+
					
                      '<p style="margin: 15px 0;" align="right"><a href="#" class="close-popup"><label class="badge badge-danger"> Close</label> </a></p>'+
                   '<table width="100%">'+
				   '<tr><td colspan="2" style="font-size: 12px;"><b>Activity:</b><br> <p style="font-size:12px">'+Activity+'</p></td></tr>'+
                    '<tr><td colspan="2" style="font-size: 12px;"><b>Problem: </b><br><p style="font-size:12px">'+Problem+'</p></td></tr>'+
                   '<tr><td colspan="2" style="font-size: 12px;"><b>Strategies:</b><br> <p style="font-size:12px">'+Strategies+'</p></td></tr>'+
                    '<tr><td colspan="2" style="font-size: 12px;"><b>Completion Status:</b><br> <p style="font-size:12px">'+CompletionStatus+'</p></td></tr>'+ 
                  '</table></div>'+
                  '</div>'
  myApp.popup(popupHTML);
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


 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Parameter-Equipment'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnReportEquipment = JSON.parse(data);
	  
 
			  var dtlSeismicReportEquipment='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">  Parameter Survey - Equipment</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				// '<td style="padding:5px;"><b>Number </b></td>'+
				 '<td style="padding:5px;"><b>Equipment Type </b> </td>'+
				 '<td style="padding:5px;"><b>Specification</b></td>'+
				 '<td style="padding:5px;"><b>Quantity </b></td>'+ 
				 '</tr>';
				  
			 detailSeismicEquipment.push(dtlSeismicReportEquipment); 
			 if (objReturnReportEquipment==""){
	 
	 dtlSeismicReportEquipment='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No Parameter Survey - Equipment </b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicEquipment.push(dtlSeismicReportEquipment); 
			 
      myApp.hidePreloader();
}else{
		  for (i = 0; i < objReturnReportEquipment.length; i++) {
      console.log(objReturnReportEquipment[i]); 
	 	  
				
 	
		  dtlSeismicReportEquipment='<tr>'+
				//'<td style="padding:5px;text-align:right;"> '+objReturnReportEquipment[i].Number+'     </td>'+ 
				'<td style="padding:5px;">'+objReturnReportEquipment[i].EquipmentType+'       </td> '+
				'<td style="padding:5px;"> '+objReturnReportEquipment[i].Specification+'       </td>  '+ 
				 
				'<td style="padding:5px;text-align:right;"  >  '+objReturnReportEquipment[i].Quantity+' </td>'+
				 
				'</tr> ';
				  	
			 detailSeismicEquipment.push(dtlSeismicReportEquipment); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicReportEquipment= '</table></div>';  
			 detailSeismicEquipment.push(dtlSeismicReportEquipment); 
document.getElementById("data-ss-report-Equipment").innerHTML = detailSeismicEquipment.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });

		 
  $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Parameter-Receiver'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnReportReceiver = JSON.parse(data);
	  
 
			  var dtlSeismicReportReceiver='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">  Parameter Survey - Receiver</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
			//	 '<td style="padding:5px;"><b>Number </b></td>'+
				 '<td  style="padding:5px;"><b>Parameter Type </b> </td>'+
				 '<td  style="padding:5px;"><b>Parameter Name</b></td>'+
				 '<td  style="padding:5px;"><b>Parameter Value </b></td>'+ 
				 '</tr>';
				  
			 detailSeismicReceiver.push(dtlSeismicReportReceiver); 
			if (objReturnReportReceiver==""){
	 
	 dtlSeismicReportReceiver='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No Parameter Survey - Receiver </b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicReceiver.push(dtlSeismicReportReceiver); 
			 
      myApp.hidePreloader();
}else{ 
		  for (i = 0; i < objReturnReportReceiver.length; i++) {
      console.log(objReturnReportReceiver[i]); 
	 	  
				
 	
		  dtlSeismicReportReceiver='<tr>'+
			//	'<td style="padding:5px;text-align:right;"> '+objReturnReportReceiver[i].Number+'     </td>'+ 
				'<td style="padding:5px;">'+objReturnReportReceiver[i].ParameterType+'       </td> '+
				'<td style="padding:5px;"> '+objReturnReportReceiver[i].ParameterName+'       </td>  '+ 
				 
				'<td style="padding:5px;"  >  '+objReturnReportReceiver[i].ParameterValue+' </td>'+
				 
				'</tr> ';
				  	
			 detailSeismicReceiver.push(dtlSeismicReportReceiver); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicReportReceiver= '</table></div>'; 
			 detailSeismicReceiver.push(dtlSeismicReportReceiver); 
document.getElementById("data-ss-report-Receiver").innerHTML = detailSeismicReceiver.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
		 
  $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Parameter-Recording'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnReportRecording= JSON.parse(data);
	  
 
			  var dtlSeismicReportRecording='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">  Parameter Survey - Recording</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				 '<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				// '<td style="padding:5px;"><b>Number </b></td>'+
				 '<td style="padding:5px;"><b>Recording Parameter </b> </td>'+
				 '<td style="padding:5px;"><b>Quantity</b></td>'+ 
				 '</tr>';
				  
			 detailSeismicRecording.push(dtlSeismicReportRecording); 
				if (objReturnReportRecording==""){
	 
	 dtlSeismicReportRecording='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No Parameter Survey - Recording </b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicRecording.push(dtlSeismicReportRecording); 
			 
      myApp.hidePreloader();
}else{ 
		  for (i = 0; i < objReturnReportRecording.length; i++) {
      console.log(objReturnReportRecording[i]); 
	 	  
			
 	
		  dtlSeismicReportRecording='<tr>'+
				//'<td style="padding:5px;text-align:right;"> '+objReturnReportRecording[i].Number+'     </td>'+ 
				'<td style="padding:5px;">'+objReturnReportRecording[i].RecordingParameter+'       </td> '+
				'<td style="padding:5px;"> '+objReturnReportRecording[i].Quantity+'       </td>  '+ 
				  
				 
				'</tr> ';
				  	
			 detailSeismicRecording.push(dtlSeismicReportRecording); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicReportRecording= '</table></div>';
			 detailSeismicRecording.push(dtlSeismicReportRecording); 
document.getElementById("data-ss-report-Recording").innerHTML = detailSeismicRecording.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
		 
  $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Parameter-Shot-Point'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnReportShotPoint= JSON.parse(data);
	  
 
			  var dtlSeismicReportShotPoint='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">  Parameter Survey - Shot Point</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				//  '<td style="padding:5px;"><b>Number </b></td>'+
				 '<td style="padding:5px;"><b>Parameter Type </b> </td>'+
				 '<td style="padding:5px;"><b>Parameter Name</b></td>'+ 
				 '<td style="padding:5px;"><b>Parameter Value</b></td>'+ 
				 '</tr>';
				  
			 detailSeismicShotPoint.push(dtlSeismicReportShotPoint); 
		if (objReturnReportShotPoint==""){
	 
	 dtlSeismicReportShotPoint='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No  Parameter Survey - Shot Point </b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicShotPoint.push(dtlSeismicReportShotPoint); 
			 
      myApp.hidePreloader();
}else{
 		 
		  for (i = 0; i < objReturnReportShotPoint.length; i++) {
      console.log(objReturnReportShotPoint[i]); 
	 	  
				
		  dtlSeismicReportShotPoint='<tr>'+
			//	'<td style="padding:5px;text-align:right;"> '+objReturnReportShotPoint[i].Number+'     </td>'+ 
				'<td style="padding:5px;">'+objReturnReportShotPoint[i].ParameterType+'       </td> '+
				'<td style="padding:5px;"> '+objReturnReportShotPoint[i].ParameterName+'       </td>  '+ 
				'<td style="padding:5px;"> '+objReturnReportShotPoint[i].ParameterValue+'       </td>  '+ 
				  
				 
				'</tr> ';
				  	
			 detailSeismicShotPoint.push(dtlSeismicReportShotPoint); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicReportShotPoint= '</table></div>'; 
			 detailSeismicShotPoint.push(dtlSeismicReportShotPoint); 
document.getElementById("data-ss-report-ShotPoint").innerHTML = detailSeismicShotPoint.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 
 
 
 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Personnel'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnReportPersonnel = JSON.parse(data);
	  
 var dtlSeismicReportPersonnel='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;"> Contact</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				  '<td style="padding:5px;"><b>Kontak </b></td>'+
				 '<td style="padding:5px;"><b>Info Kontak </b> </td>'+ 
				 '</tr>';
			 detailSeismicPersonnel.push(dtlSeismicReportPersonnel); 
		if (objReturnReportPersonnel==""){
	 
	 dtlSeismicReportPersonnel='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No  Contact </b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicPersonnel.push(dtlSeismicReportPersonnel); 
			 
      myApp.hidePreloader();
}else{
				 
		  for (i = 0; i < objReturnReportPersonnel.length; i++) {
      console.log(objReturnReportPersonnel[i]); 
	 	  
				
	 dtlSeismicReportPersonnel='<tr>'+
				'<td style="padding:5px; "> '+objReturnReportPersonnel[i].Kontak+'     </td>'+ 
				'<td style="padding:5px;"><b>Name:</b><br>'+objReturnReportPersonnel[i].Name+'<br> <b>Phone:</b> <br>'+objReturnReportPersonnel[i].Phone+'  <br> <b>Email:</b> <br>'+objReturnReportPersonnel[i].Email+'  </td> '+ 
				  
				 
				'</tr> ';		
			
			 detailSeismicPersonnel.push(dtlSeismicReportPersonnel); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicReportPersonnel= '</table></div>'; 
			 detailSeismicPersonnel.push(dtlSeismicReportPersonnel); 
document.getElementById("data-ss-report-Personnel").innerHTML = detailSeismicPersonnel.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
  
  

 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Points-Shot-Holes'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnReportPointsShotHoles= JSON.parse(data);
	  
 
			  var dtlSeismicReportPointsShotHoles='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">Shot Holes & Pre-loading</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding:5px; "><b>Line </b></td>'+
				 '<td style="padding:5px; "><b>SP </b> </td>'+ 
				 //  '<td style="padding:5px; "><b>LongitudeX </b> </td>'+ 
				 // '<td style="padding:5px; "><b>LongitudeY </b> </td>'+  
				 '<td style="padding:5px; "><b>Location </b> </td>'+ 
				 '</tr>';
				  
			 detailSeismicPointsShotHoles.push(dtlSeismicReportPointsShotHoles); 
			if (objReturnReportPointsShotHoles==""){
	 
	 dtlSeismicReportPointsShotHoles='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No  Shot Holes & Pre-loading </b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicPointsShotHoles.push(dtlSeismicReportPointsShotHoles); 
			 
      myApp.hidePreloader();
}else{
 		 
		  for (i = 0; i < objReturnReportPointsShotHoles.length; i++) {
      console.log(objReturnReportPointsShotHoles[i]); 
	 	  
			
		  dtlSeismicReportPointsShotHoles='<tr>'+
				'<td style="padding:5px;"> '+objReturnReportPointsShotHoles[i].Line+'     </td>'+ 
				'<td style="padding:5px;">'+objReturnReportPointsShotHoles[i].SP+'       </td> '+ 
				 // '<td style="padding:5px;">'+objReturnReportPointsShotHoles[i].LongitudeX+'       </td> '+ 
				//  '<td style="padding:5px;">'+objReturnReportPointsShotHoles[i].LongitudeY+'       </td> '+ 
				//'<td style="padding:5px;text-align:center;"> '+objReturnReportPointsShotHoles[i].LongitudeY+'  <br>'+objReturnReportPointsShotHoles[i].LongitudeX+' <br> <label class="btn-map-holes  badge badge-info" Line="'+objReturnReportPointsShotHoles[i].Line+'" SP="'+objReturnReportPointsShotHoles[i].SP+'" LongitudeX="'+objReturnReportPointsShotHoles[i].LongitudeX+'" LongitudeY="'+objReturnReportPointsShotHoles[i].LongitudeY+'">View Map</label> </td> '+ 
				'<td style="padding:5px; "> '+objReturnReportPointsShotHoles[i].LongitudeY+', '+objReturnReportPointsShotHoles[i].LongitudeX+'   </td> '+ 
				  
				 
				'</tr> ';
				  	
			 detailSeismicPointsShotHoles.push(dtlSeismicReportPointsShotHoles); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicReportPointsShotHoles= '</table></div>';  
			 detailSeismicPointsShotHoles.push(dtlSeismicReportPointsShotHoles); 
			 
document.getElementById("data-ss-report-PointsShotHoles").innerHTML = detailSeismicPointsShotHoles.join(" ");
/*
 $$('.btn-map-holes').on('click', function () {
	
	
	   var Line  = $$(this).attr("Line");
	   var SP  = $$(this).attr("SP");
	   var LongitudeX  = $$(this).attr("LongitudeX");
	   var LongitudeY  = $$(this).attr("LongitudeY"); 
 
   
  var latitude = parseFloat(LongitudeY);
  var longitude = parseFloat(LongitudeX);
		
		  function onSuccess2() { 
             var myLatlng = new google.maps.LatLng(latitude,longitude);
             var mapOptions = {
               zoom: 10,
               center: myLatlng 
            }
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			
             var marker = new google.maps.Marker({
                 position: myLatlng,
                map: map,
                icon: 'icon/marker.png', 
         // animation: google.maps.Animation.DROP				
             });
		 
		 }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
  //var watchID = navigator.geolocation.watchPosition(onLoad, onError); 
	     navigator.geolocation.getCurrentPosition(onSuccess2, onError);
	  myApp.hidePreloader();
	 
		
	   
  var popupHTML = '<div class="popup"  style="    background-color: #fff;">'+
                    '<div class="content-block">'+
					
                      '<p style="margin: 15px 0;" align="right"><a href="#" class="close-popup"><label class="badge badge-danger"> Close</label> </a></p>'+
                 
                     
				 '<table width="100%">'+
				   '<tr><td ><b>Line:</b><br> <p style="font-size:12px">'+Line+'</p></td> <td colspan="2"><b>SP: </b><br><p style="font-size:12px">'+SP+'</p></td></tr>'+
                   
                  '<tr><td colspan="2"  > <div id="map-canvas"  class="leaflet-container leaflet-fade-anim leaflet-grab  " style="width: 100%;  height:500px;  display:fixed!important;     "tabindex="0">  </div>   </td></tr>'+
                  '</table></div>'+
                  '</div>'
  myApp.popup(popupHTML);
});

*/

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 
 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Point-Topography'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnReportPointTopography= JSON.parse(data);
	  
 
			  var dtlSeismicReportPointTopography='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">  Topography</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding:5px; "><b>Line </b></td>'+
				 '<td style="padding:5px; "><b>Km </b> </td>'+ 
				 '<td style="padding:5px; "><b>SPs </b> </td>'+ 
				// '<td style="padding: "><b>LongitudeX </b> </td>'+ 
				// '<td style="padding: "><b>LongitudeY </b> </td>'+  
				 '<td style="padding: 5px"><b>Location </b> </td>'+  
				 '</tr>';
				  
			 detailSeismicPointTopography.push(dtlSeismicReportPointTopography); 
		if (objReturnReportPointTopography==""){
	 
	 dtlSeismicReportPointTopography='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No   Topography </b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicPointTopography.push(dtlSeismicReportPointTopography); 
			 
      myApp.hidePreloader();
}else{	 
		  for (i = 0; i < objReturnReportPointTopography.length; i++) {
      console.log(objReturnReportPointTopography[i]); 
	 	  
				
 	
		  dtlSeismicReportPointTopography='<tr>'+
				'<td style="padding:5px;"> '+objReturnReportPointTopography[i].Line+'     </td>'+ 
				'<td style="padding:5px;">'+objReturnReportPointTopography[i].Km+'       </td> '+ 
				'<td style="padding:5px;">'+objReturnReportPointTopography[i].SPs+'       </td> '+ 
			//	'<td style="padding:5px;">'+objReturnReportPointTopography[i].LongitudeX+'       </td> '+ 
				//'<td style="padding:5px;">'+objReturnReportPointTopography[i].LongitudeY+'       </td> '+ 
				  //	'<td style="padding:5px;text-align:center;">'+objReturnReportPointTopography[i].LongitudeY+'<br>'+objReturnReportPointTopography[i].LongitudeX+'<br><label class="btn-map-topography  badge badge-info"  Km="'+objReturnReportPointTopography[i].Km+'" Line="'+objReturnReportPointTopography[i].Line+'" SPs="'+objReturnReportPointTopography[i].SPs+'" LongitudeX="'+objReturnReportPointTopography[i].LongitudeX+'" LongitudeY="'+objReturnReportPointTopography[i].LongitudeY+'">View Map</label> </td> '+ 
				 	'<td style="padding:5px;">'+objReturnReportPointTopography[i].LongitudeY+', '+objReturnReportPointTopography[i].LongitudeX+'  </td> '+ 
				
				 
				'</tr> ';
				  	
			 detailSeismicPointTopography.push(dtlSeismicReportPointTopography); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicReportPointTopography= '</table></div>';
			 detailSeismicPointTopography.push(dtlSeismicReportPointTopography); 
document.getElementById("data-ss-report-PointTopography").innerHTML = detailSeismicPointTopography.join(" ");

/*
  $$('.btn-map-topography').on('click', function () {
	
	
	   var Line  = $$(this).attr("Line");
	   var SPs  = $$(this).attr("SPs");
	   var Km  = $$(this).attr("Km");
	   var LongitudeX  = $$(this).attr("LongitudeX");
	   var LongitudeY  = $$(this).attr("LongitudeY"); 
 
   
  var latitude = parseFloat(LongitudeY);
  var longitude = parseFloat(LongitudeX);
		
		  function onSuccess3() { 
             var myLatlng = new google.maps.LatLng(latitude,longitude);
             var mapOptions = {
               zoom: 10,
               center: myLatlng 
            }
            var map = new google.maps.Map(document.getElementById('map-canvas3'), mapOptions);
			
             var marker = new google.maps.Marker({
                 position: myLatlng,
                map: map,
                icon: 'icon/marker.png', 
         // animation: google.maps.Animation.DROP				
             });
		 myApp.hidePreloader();
		 }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
  //var watchID = navigator.geolocation.watchPosition(onLoad, onError); 
	      navigator.geolocation.getCurrentPosition(onSuccess3, onError);
	  myApp.hidePreloader();
	 
		 myApp.hidePreloader();
	   
  var popupHTML = '<div class="popup"  style="    background-color: #fff;">'+
                    '<div class="content-block">'+
					
                      '<p style="margin: 15px 0;" align="right"><a href="#" class="close-popup"><label class="badge badge-danger"> Close</label> </a></p>'+
                 
                     
				 '<table width="100%">'+
				   '<tr><td ><b>Line:</b><br> <p style="font-size:12px">'+Line+'</p></td> <td  ><b>SPs: </b><br><p style="font-size:12px">'+SPs+'</p></td> <td ><b>Km: </b><br><p style="font-size:12px">'+Km+'</p></td></tr>'+
                   
                  '<tr><td colspan="3"  > <div id="map-canvas3"  class="leaflet-container leaflet-fade-anim leaflet-grab  " style="width: 100%;  height:500px;  display:fixed!important;     "tabindex="0">  </div>   </td></tr>'+
                  '</table></div>'+
                  '</div>'
  myApp.popup(popupHTML);
});

*/

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });

  $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Program-Rintis-Bridging'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnBridging= JSON.parse(data);
	  
 
			  var dtlSeismicBridging='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">Line Rintis & Bridging</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding:5px; "><b>Line </b></td>'+
				 '<td style="padding:5px; "><b>SP1 </b> </td>'+ 
				 '<td style="padding:5px; "><b>SP2 </b> </td>'+ 
				 '<td style="padding:5px;"><b>SPs </b> </td>'+ 
				 '<td style="padding:5px;"><b>Coverage Km </b> </td>'+  
				 '</tr>';
				  
			 detailSeismicBridging.push(dtlSeismicBridging); 
			if (objReturnBridging==""){
	 
	 dtlSeismicBridging='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No Line Rintis & Bridging</b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicBridging.push(dtlSeismicBridging); 
			 
      myApp.hidePreloader();
}else{	 
		  for (i = 0; i < objReturnBridging.length; i++) {
      console.log(objReturnBridging[i]); 
	 	  
			
 	
		  dtlSeismicBridging='<tr>'+
				'<td style="padding:5px;"> '+objReturnBridging[i].Line+'     </td>'+ 
				'<td style="padding:5px;text-align:right;">'+objReturnBridging[i].SP1+'       </td> '+ 
				'<td style="padding:5px;text-align:right;">'+objReturnBridging[i].SP1+'       </td> '+ 
				'<td style="padding:5px;text-align:right;">'+objReturnBridging[i].SPs+'       </td> '+ 
				'<td style="padding:5px;text-align:right;">'+objReturnBridging[i].CoverageKm+'       </td> '+ 
				  
				 
				'</tr> ';
				  	
			 detailSeismicBridging.push(dtlSeismicBridging); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicBridging='</table></div>';  
			 detailSeismicBridging.push(dtlSeismicBridging); 
document.getElementById("data-ss-report-Bridging").innerHTML = detailSeismicBridging.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 
  $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Program-Shot-Holes'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnShotHoles= JSON.parse(data);
	  
 
			  var dtlSeismicShotHoles='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">Line Shot Holes & Pre-loading</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding:5px;"><b>Line </b></td>'+
				 '<td style="padding:5px;"><b>SP1 </b> </td>'+ 
				 '<td style="padding:5px;"><b>SP2 </b> </td>'+ 
				 '<td style="padding:5px;"><b>SPs </b> </td>'+ 
				 '<td style="padding:5px;"><b>Coverage Km </b> </td>'+  
				 '</tr>';
				  
			 detailSeismicShotHoles.push(dtlSeismicShotHoles); 
			if (objReturnShotHoles==""){
	 
	 dtlSeismicShotHoles='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No Line Shot Holes & Pre-loading</b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicShotHoles.push(dtlSeismicShotHoles); 
			 
      myApp.hidePreloader();
}else{ 
		  for (i = 0; i < objReturnShotHoles.length; i++) {
      console.log(objReturnShotHoles[i]); 
	 	  
				
 	
		  dtlSeismicShotHoles='<tr>'+
				'<td style="padding:5px;"> '+objReturnShotHoles[i].Line+'     </td>'+ 
				'<td style="padding:5px;text-align:right;">'+objReturnShotHoles[i].SP1+'       </td> '+ 
				'<td style="padding:5px;text-align:right;">'+objReturnShotHoles[i].SP1+'       </td> '+ 
				'<td style="padding:5px;text-align:right;">'+objReturnShotHoles[i].SPs+'       </td> '+ 
				'<td style="padding:5px;text-align:right;">'+objReturnShotHoles[i].CoverageKm+'       </td> '+ 
				  
				 
				'</tr> ';
				  	
			 detailSeismicShotHoles.push(dtlSeismicShotHoles); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicShotHoles= '</table></div>'; 
			 detailSeismicShotHoles.push(dtlSeismicShotHoles); 
document.getElementById("data-ss-report-ShotHoles").innerHTML = detailSeismicShotHoles.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Program-Topography'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnProgramTopography= JSON.parse(data);
	  
 
			  var dtlSeismicProgramTopography='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">Line Topography</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding:5px;"><b>Line </b></td>'+
				 '<td style="padding:5px;"><b>SP1 </b> </td>'+ 
				 '<td style="padding:5px;"><b>SP2 </b> </td>'+  
				 '<td style="padding:5px;"><b>Coverage Km </b> </td>'+  
				 '</tr>';
				  
			 detailSeismicProgramTopography.push(dtlSeismicProgramTopography); 
			if (objReturnProgramTopography==""){
	 
	 dtlSeismicProgramTopography='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No Line Topography</b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicProgramTopography.push(dtlSeismicProgramTopography); 
			 
      myApp.hidePreloader();
}else{ 
		  for (i = 0; i < objReturnProgramTopography.length; i++) {
      console.log(objReturnProgramTopography[i]); 
	 	  
				
 	
		  dtlSeismicProgramTopography='<tr>'+
				'<td style="padding:5px;"> '+objReturnProgramTopography[i].Line+'     </td>'+ 
				'<td style="padding:5px;text-align:right;">'+objReturnProgramTopography[i].SP1+'       </td> '+ 
				'<td style="padding:5px;text-align:right;">'+objReturnProgramTopography[i].SP1+'       </td> '+  
				'<td style="padding:5px;text-align:right;">'+objReturnProgramTopography[i].CoverageKm+'       </td> '+ 
				  
				 
				'</tr> ';
				  	
			 detailSeismicProgramTopography.push(dtlSeismicProgramTopography); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicProgramTopography= '</table></div>';  
			 detailSeismicProgramTopography.push(dtlSeismicProgramTopography); 
document.getElementById("data-ss-report-ProgramTopography").innerHTML = detailSeismicProgramTopography.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 


 


 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Point-GPS'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnBMGPS= JSON.parse(data);
	  
 
			  var dtlSeismicPointGPS='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">BM GPS</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding:5px;"><b>BM GPS </b></td>'+
				 '<td style="padding:5px;"><b>Location </b> </td>'+  
				 '</tr>';
				  
			 detailSeismicPointGPS.push(dtlSeismicPointGPS); 
			if (objReturnBMGPS==""){
	 
	 dtlSeismicPointGPS='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No BM GPS</b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicPointGPS.push(dtlSeismicPointGPS); 
			 
      myApp.hidePreloader();
}else{
 		 
		  for (i = 0; i < objReturnBMGPS.length; i++) {
      console.log(objReturnBMGPS[i]); 
	 	  
			
		  dtlSeismicPointGPS='<tr>'+
				'<td style="padding:5px;"> '+objReturnBMGPS[i].BMGPS+'     </td>'+ 
				'<td style="padding:5px;">'+objReturnBMGPS[i].LongitudeY+' , '+objReturnBMGPS[i].LongitudeX+'      </td> '+  
				  
				 
				'</tr> ';
				  	
			 detailSeismicPointGPS.push(dtlSeismicPointGPS); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicPointGPS= '</table></div>';  
			 detailSeismicPointGPS.push(dtlSeismicPointGPS); 
document.getElementById("data-ss-report-PointGPS").innerHTML = detailSeismicPointGPS.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 

 

 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Point-Seismic'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnBMGPS= JSON.parse(data);
	  
 
			  var dtlSeismicPointSeismic='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">BM Seismic</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding:5px;"><b>BM Seismic </b></td>'+
				 '<td style="padding:5px;"><b>Location </b> </td>'+  
				 '</tr>';
				  
			 detailSeismicPointSeismic.push(dtlSeismicPointSeismic); 
			if (objReturnBMGPS==""){
	 
	 dtlSeismicPointSeismic='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No BM Seismic</b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicPointSeismic.push(dtlSeismicPointSeismic); 
			 
      myApp.hidePreloader();
}else{
 		 
		  for (i = 0; i < objReturnBMGPS.length; i++) {
      console.log(objReturnBMGPS[i]); 
	 	  
			
		  dtlSeismicPointSeismic='<tr>'+
				'<td style="padding:5px;"> '+objReturnBMGPS[i].BMSeismic+'     </td>'+ 
				'<td style="padding:5px;">'+objReturnBMGPS[i].LongitudeY+' , '+objReturnBMGPS[i].LongitudeX+'      </td> '+  
				  
				 
				'</tr> ';
				  	
			 detailSeismicPointSeismic.push(dtlSeismicPointSeismic); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicPointSeismic= '</table></div>';  
			 detailSeismicPointSeismic.push(dtlSeismicPointSeismic); 
document.getElementById("data-ss-report-PointSeismic").innerHTML = detailSeismicPointSeismic.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 


 
			 
			 
document.getElementById("data-ss-report-PointRecording").innerHTML = detailSeismicPointRecording.join(" ");



 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Points-Recording'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnBMGPS= JSON.parse(data);
	  
 
			  var dtlSeismicPointRecording='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">Recording</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding:5px;"><b>Line </b></td>'+
				 '<td style="padding:5px;"><b>SP </b></td>'+
				 '<td style="padding:5px;"><b>Location </b> </td>'+  
				 '</tr>';
				  
			 detailSeismicPointRecording.push(dtlSeismicPointRecording); 
			if (objReturnBMGPS==""){
	 
	 dtlSeismicPointRecording='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No Recording</b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicPointRecording.push(dtlSeismicPointRecording); 
			 
      myApp.hidePreloader();
}else{
 		 
		  for (i = 0; i < objReturnBMGPS.length; i++) {
      console.log(objReturnBMGPS[i]); 
	 	  
			
		  dtlSeismicPointRecording='<tr>'+
				'<td style="padding:5px;"> '+objReturnBMGPS[i].Line+'     </td>'+ 
				'<td style="padding:5px;"> '+objReturnBMGPS[i].SP+'     </td>'+ 
				'<td style="padding:5px;">'+objReturnBMGPS[i].LongitudeY+' , '+objReturnBMGPS[i].LongitudeX+'      </td> '+  
				  
				 
				'</tr> ';
				  	
			 detailSeismicPointRecording.push(dtlSeismicPointRecording); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicPointRecording= '</table></div>';  
			 detailSeismicPointRecording.push(dtlSeismicPointRecording); 
document.getElementById("data-ss-report-PointRecording").innerHTML = detailSeismicPointRecording.join(" ");
 

    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 



/*
//APPS-GET Seismic-Report-Program
 var dtlSeismicProgram='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;" >  Activities Program</div>	'+
				'<center  style=" color: red;" ><b>No Activities Program </b></center>  '+
				'</div>';
				  
			 detailSeismicProgram.push(dtlSeismicProgram); 
			 
			 
document.getElementById("data-ss-report-Program").innerHTML = detailSeismicProgram.join(" ");


*/

 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Program'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnReportProgram = JSON.parse(data);
	   
	

  var dtlSeismicProgram='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">  Activities Program</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding: 5px;" ><b>Item Kegiatan </b></td>'+
				 '<td style="padding: 5px;" ><b>Rencana Total Point </b></td>'+
				 '<td  style="padding: 5px;" ><b>Detail </b> </td>'+ 
				 '</tr>';
				  
			 detailSeismicProgram.push(dtlSeismicProgram);
	if (objReturnReportProgram==""){
	 
	 dtlSeismicProgram='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No Activities Program </b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicProgram.push(dtlSeismicProgram); 
			 
      myApp.hidePreloader();
}else{
			 
		  for (i = 0; i < objReturnReportProgram.length; i++) {
      console.log(objReturnReportProgram[i]); 
	 	  
			
			
	 dtlSeismicProgram='<tr>'+
				'<td style="padding:5px; "> '+objReturnReportProgram[i].ItemKegiatan+'     </td>'+ 
				'<td style="padding:5px; "> '+objReturnReportProgram[i].RencanaTotalPoint+'     </td>'+ 
				'<td style="padding:5px;"> <label class="btn-detail-program badge badge-info" ItemKegiatan="'+objReturnReportProgram[i].ItemKegiatan+'" Problem="'+objReturnReportProgram[i].Problem+'" RencanaTotalPoint="'+objReturnReportProgram[i].RencanaTotalPoint+'" RencanaTotalLingkup="'+objReturnReportProgram[i].RencanaTotalLingkup+'"  ProgresHarianTotalPoint="'+objReturnReportProgram[i].ProgresHarianTotalPoint+'" ProgresHarianTotalLingkup="'+objReturnReportProgram[i].ProgresHarianTotalLingkup+'" KumulatifUnitPoint="'+objReturnReportProgram[i].KumulatifUnitPoint+'" KumulatifUnitLingkup="'+objReturnReportProgram[i].KumulatifUnitLingkup+'" Percentage="'+objReturnReportProgram[i].Percentage+'" Personil="'+objReturnReportProgram[i].Personil+'" Kru="'+objReturnReportProgram[i].Kru+'">Detail</label>  </td> '+ 
				 
				'</tr> ';		
			
			 detailSeismicProgram.push(dtlSeismicProgram); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicProgram= '</table ></div>';  
			 detailSeismicProgram.push(dtlSeismicProgram); 
document.getElementById("data-ss-report-Program").innerHTML = detailSeismicProgram.join(" ");
 
$$('.btn-detail-program').on('click', function () {
	
	
	   var ItemKegiatan  = $$(this).attr("ItemKegiatan");
	   var RencanaTotalPoint  = $$(this).attr("RencanaTotalPoint");
	   var RencanaTotalLingkup  = $$(this).attr("RencanaTotalLingkup");
	   var ProgresHarianTotalPoint  = $$(this).attr("ProgresHarianTotalPoint"); 
	   var ProgresHarianTotalLingkup  = $$(this).attr("ProgresHarianTotalLingkup"); 
	   var KumulatifUnitPoint  = $$(this).attr("KumulatifUnitPoint"); 
	   var KumulatifUnitLingkup  = $$(this).attr("KumulatifUnitLingkup"); 
	   var Percentage  = $$(this).attr("Percentage"); 
	   var Personil  = $$(this).attr("Personil"); 
	   var Kru  = $$(this).attr("Kru");  
	   
  var popupHTML = '<div class="popup"  style="    background-color: #fff;">'+
                    '<div class="content-block">'+
					
                      '<p style="margin: 15px 0;" align="right"><a href="#" class="close-popup"><label class="badge badge-danger"> Close</label> </a></p>'+
                   '<table width="100%">'+
				   '<tr><td style="font-size: 12px;"><b>Item Kegiatan:</b><br> <p style="font-size:12px">'+ItemKegiatan+'</p></td><td  style="font-size: 12px;"><b>Rencana Total Point: </b><br><p style="font-size:12px">'+RencanaTotalPoint+'</p></td></tr>'+
                   '<tr><td style="font-size: 12px;"><b>Rencana Total Lingkup:</b><br> <p style="font-size:12px">'+RencanaTotalLingkup+'</p></td><td style="font-size: 12px;" ><b>Progres Harian Total Point:</b><br> <p style="font-size:12px">'+ProgresHarianTotalPoint+'</p></td></tr>'+ 
                    '<tr><td  style="font-size: 12px;"><b>Progres Harian Total Lingkup:</b><br> <p style="font-size:12px">'+ProgresHarianTotalLingkup+'</p></td><td style="font-size: 12px;" ><b>Kumulatif Unit Point:</b><br> <p style="font-size:12px">'+KumulatifUnitPoint+'</p></td></tr>'+ 
                    '<tr><td  style="font-size: 12px;"><b>Kumulatif Unit Lingkup:</b><br> <p style="font-size:12px">'+KumulatifUnitLingkup+'</p></td><td style="font-size: 12px;" ><b>Percentage:</b><br> <p style="font-size:12px">'+Percentage+'</p></td></tr>'+ 
                    '<tr><td  style="font-size: 12px;"><b>Personil:</b><br> <p style="font-size:12px">'+Personil+'</p></td><td style="font-size: 12px;" ><b>Kru:</b><br> <p style="font-size:12px">'+Kru+'</p></td></tr>'+ 
                  '</table></div>'+
                  '</div>'
  myApp.popup(popupHTML);
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



 


 $$.ajax({
    url: myApp.getWebApi('APPS-GET-Seismic-Report-Program-Line-Recording'),
    method: 'POST',
   data: {"txtReportId":""+ReportId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnRecording= JSON.parse(data);
	  
 
			  var dtlSeismicProgram='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" style="margin-bottom: 10px;">Line Recording</div>	'+
				'<table   width="100%" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				 '<td style="padding:5px;"><b>Line </b></td>'+
				 '<td style="padding:5px;"><b>SP1 </b> </td>'+  
				 '<td style="padding:5px;"><b>SP2 </b> </td>'+  
				 '<td style="padding:5px;"><b>SPs </b> </td>'+  
				 '<td style="padding:5px;"><b>Coverage Km </b> </td>'+  
				 '</tr>';
				  
			 detailSeismicLineRecording.push(dtlSeismicProgram); 
			if (objReturnRecording==""){
	 
	 dtlSeismicProgram='<tr>'+
				'<td style="padding:5px;text-align:right;" colspan="7"> <center  style=" color: red;" ><b>No Line Recording</b></center>    </td>'+
				 
				'</tr> ';
				  
			 detailSeismicLineRecording.push(dtlSeismicProgram); 
			 
      myApp.hidePreloader();
}else{	 
		  for (i = 0; i < objReturnRecording.length; i++) {
      console.log(objReturnRecording[i]); 
	 	  
			
 	
		  dtlSeismicProgram='<tr>'+
				'<td style="padding:5px;"> '+objReturnRecording[i].Line+'     </td>'+ 
				'<td style="padding:5px;text-align:right;">'+objReturnRecording[i].SP1+'     </td> '+  
				'<td style="padding:5px;text-align:right;">'+objReturnRecording[i].SP2+'     </td> '+  
				'<td style="padding:5px;text-align:right;">'+objReturnRecording[i].SPs+'     </td> '+  
				'<td style="padding:5px;text-align:right;">'+objReturnRecording[i].CoverageKm+'     </td> '+  
				  
				 
				'</tr> ';
				  	
			 detailSeismicLineRecording.push(dtlSeismicProgram); 
			 myApp.hidePreloader();
}} 

	     dtlSeismicProgram= '</table></div>';  
			 detailSeismicLineRecording.push(dtlSeismicProgram); 
document.getElementById("data-ss-report-LineRecording").innerHTML = detailSeismicLineRecording.join(" ");
 

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