   
///load service Page  
myApp.onPageInit("1-ss-survey-result-detail", function(page){
	 
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
 
var SeismicId = localStorage.getItem("SeismicId"); 
var ProjectName = localStorage.getItem("ProjectName"); 
	
document.getElementById("ProjectNameSS").innerHTML = ProjectName; 
 
const months = ["Januari", "Februari", "Maret","April", "Mei", "Juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Seismic-Result'),
        data: {"txtSeismicId":""+SeismicId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn = JSON.parse(data);

 

		  for (i = 0; i < objReturn.length; i++) {
      
dtSurveyResult=[];
let formattedResultDate="";   
	 if(objReturn[i].ResultDate!=""){ 
let currentResultDate =  new Date(objReturn[i].ResultDate);
  formattedResultDate = currentResultDate.getDate() + " " + months[currentResultDate.getMonth()] + " " + currentResultDate.getFullYear();
	 }
	 
	  
	  if (objReturn[i].ResultLink==""){
		  var cssViewImg='style="display:none;width: 100%;    height: 180px;    border-radius: 0;"';
		  var cssViewImgbtn='style="display:none; "';
	  }
	  else{
		   var cssViewImg='style="width: 100%;    height: 180px;    border-radius: 0;"';
		  var cssViewImgbtn=' ';
	  }
	   var dtWelldtl='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<table style="font-size:12px">	'+
				 '<tbody> '+ 
				  '<tr><td width="50%"><b  > Result Number: </b> <br>'+objReturn[i].ResultNumber+'  </td><td><b  >  Result Date: </b> <br>'+formattedResultDate+'  </td> </tr>'+
				  '<tr><td colspan="2"><b  > ResultNote: </b> <br>'+objReturn[i].ResultNote+'  </td>  </tr>'+
				  '<tr><td colspan="2" style="text-align: right;"><img src="'+objReturn[i].ResultLink+'" '+cssViewImg+' />   '+
				  '    <br> <br>  <label class="btn-popup badge badge-info" dataResultId="'+objReturn[i].ResultId+'" dataResult="'+objReturn[i].ResultLink+'"  '+cssViewImgbtn+'>view</label>'+
				 ' </td> </tr>'+
				 		  '</tbody></table>'+
				 '</div> ';  
			 dtSurveyResult.push(dtWelldtl); 
			 
      myApp.hidePreloader();
} 
 
document.getElementById("data-survey-result-detail").innerHTML =dtSurveyResult;
 $$('.btn-popup').on('click', function () {
	
	   var dataResult  = $$(this).attr("dataResult");
	   var dataResultId  = $$(this).attr("dataResultId");
	
      console.log(dataResult);
      console.log(dataResultId);
	  
 var myPhotoBrowserPopupDark = myApp.photoBrowser({
	 
    photos : [
        dataResult,
    ],
   // theme: 'dark',
    type: 'popup'
});


    myPhotoBrowserPopupDark.open();
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