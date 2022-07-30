   
///load service Page  
myApp.onPageInit("1-ed-dst-result-detail", function(page){
	 
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
 var OperatorNameDST = localStorage.getItem("OperatorNameDST"); 
 var FieldNameDST = localStorage.getItem("FieldNameDST"); 


 
const months = ["Januari", "Februari", "Maret","April", "Mei", "Juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
  
 
 var dtWellAllDetail = [];
 
//document.getElementById("OperatorNameDST").innerHTML = OperatorNameDST;
document.getElementById("FieldNameDST").innerHTML = FieldNameDST;
document.getElementById("strNameDst").innerHTML = WellName;
  $$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-DST-Result'),
        data: {"txtWellId":""+WellId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnDst = JSON.parse(data);

 

		  for (i = 0; i < objReturnDst.length; i++) {  

 let formattedResultDate="";
 //let formattedEndDate="";	  
	  if(objReturnDst[i].ResultDate!=""){ 
 let currentResultDate =  new Date(objReturnDst[i].ResultDate);
  formattedResultDate = currentResultDate.getDate() + " " + months[currentResultDate.getMonth()] + " " + currentResultDate.getFullYear();
 	 }
	 
	  if (objReturnDst[i].ResultLinkVideo==""){
		  var cssView='style="display:none"';
	  }
	  else{
		   var cssView=' ';
	  }
	  if (objReturnDst[i].ResultLink==""){
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
				  '<tr><td ><b  > Result Date: </b> <br>'+formattedResultDate+'  </td> <td><b  >Result Note: </b> <br>'+objReturnDst[i].ResultNote+'  </td></tr>'+
				  '<tr><td ><b  > Top Depth: </b> <br>'+objReturnDst[i].TopDepth+'  '+objReturnDst[i].UomTopDepth+'  </td> <td><b  >Bottom Depth: </b> <br>'+objReturnDst[i].BottomDepth+'  '+objReturnDst[i].UomBottomDepth+' </td></tr>'+
				  '<tr><td ><b  > Thickness: </b> <br>'+objReturnDst[i].Thickness+'  '+objReturnDst[i].UomThickness+'  </td> <td><b  >Formation: </b> <br>'+objReturnDst[i].Formation+'   </td></tr>'+
				  '<tr><td ><b  > Lithology: </b> <br>'+objReturnDst[i].Lithology+'     </td> <td><b  >Choke: </b> <br>'+objReturnDst[i].Choke+'      </td></tr>'+
				  '<tr><td >  <b  >QOil: </b> <br>'+objReturnDst[i].QOil+' '+objReturnDst[i].UomBOPD+'  </td> <td><b  > QGas: </b> <br>'+objReturnDst[i].QGas+' '+objReturnDst[i].UomMMSCFD+'   </td></tr>'+
				  '<tr><td >  <b  >QCondensat: </b> <br>'+objReturnDst[i].QCondensat+' '+objReturnDst[i].UomBCPD+'  </td><td    ><b  > QWater: </b> <br>'+objReturnDst[i].QWater+'  '+objReturnDst[i].UomBWPD+'    </td></tr>'+
				  
				 
				  '<tr><td colspan="2"> <b  >Result: </b> <br>'+objReturnDst[i].Result+'   </td></tr>'+
				 '<tr><td colspan="2" style="text-align: right;" >  <br> <img src="'+objReturnDst[i].ResultLink+'" '+cssViewImg+' >'+
				  '    <br> <br>  <label class="btn-popup badge badge-info" dataResultId="'+objReturnDst[i].ResultId+'" dataResult="'+objReturnDst[i].ResultLink+'"  '+cssViewImgbtn+'>view</label> <label '+cssView+' class="badge badge-info btn-video " dataResultId="'+objReturnDst[i].ResultId+'" ResultLinkVideo="'+objReturnDst[i].ResultLinkVideo+'">View Video</label> </td>   </tr>'+ 
			/* '<tr><td colspan="2">'+
		'	 <video width="100%" height="240" controls>'+
  '<source src="'+objReturnDst[i].ResultLinkVideo+'" type="video/mp4"> '+
  'Your browser does not support the video tag.'+
'</video>'+
			 '</td></tr>'+*/
				  '</tbody></table>'+
				 '</div> ';				 
			 dtWellAllDetail.push(dtWelldtl); 
			 
			


      myApp.hidePreloader();
} 

 
document.getElementById("data-well-dst-detail").innerHTML =dtWellAllDetail.join(" ");



$$('.btn-video').on('click', function () {
	
	
	   var ResultLinkVideo  = $$(this).attr("ResultLinkVideo");
	   var dataResultId  = $$(this).attr("dataResultId");
  var popupHTML = '<div class="popup"  style="    background-color: #fff;">'+
                    '<div class="content-block">'+
					
                      '<p style="margin: 15px 0;" align="right"><a href="#" class="close-popup"><label class="badge badge-danger"> Close</label> </a></p>'+
                     '	 <video width="100%" height="240" controls>'+
  '<source src="'+ResultLinkVideo+'" type="video/mp4"> '+
  'Your browser does not support the video tag.'+
'</video>'+
                    '</div>'+
                  '</div>'
  myApp.popup(popupHTML);
});



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