   
///load service Page  
myApp.onPageInit("1-ed-dst-result-detail", function(page){
	 

 
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
	 
	  
	   var dtWelldtl='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<table style="font-size:12px">	'+
				 '<tbody> '+ 
				  '<tr><td ><b  > Result Date: </b> <br>'+formattedResultDate+'  </td> <td><b  >Result Note: </b> <br>'+objReturnDst[i].ResultNote+'  </td></tr>'+
				  '<tr><td colspan="2" style="text-align: right;" >  <br> <img src="'+objReturnDst[i].ResultLink+'" style=" width: 100%;    height: 180px;    border-radius: 0;" >'+
				  '    <br> <br>  <label class="btn-popup badge badge-info"  dataResult="'+objReturnDst[i].ResultLink+'">view</label>  </td>   </tr>'+ 
			 
				  '</tbody></table>'+
				 '</div> ';  
			 dtWellAllDetail.push(dtWelldtl); 
			 
			


      myApp.hidePreloader();
} 

 
document.getElementById("data-well-dst-detail").innerHTML =dtWellAllDetail.join(" ");

$$('.btn-popup').on('click', function () {
	
	   var dataResult  = $$(this).attr("dataResult");
	
      console.log(dataResult);
	  
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