   
///load service Page  
myApp.onPageInit("1-pr-funneling-shu-detail", function(page){


  
	 
var ProspectId = localStorage.getItem("ProspectId");
var FunnelingSHU = localStorage.getItem("FunnelingSHU");

document.getElementById("strNameNPR").innerHTML = FunnelingSHU;
 var dtNPRSHU = [];
  
const months = ["Januari", "Februari", "Maret","April", "Mei", "Juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
 $$.ajax({
    url: myApp.getWebApi('APPS-GET-NPR-Funneling-SHU-Detail'),
    method: 'POST',
   data: {"txtProspectId":""+ProspectId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn = JSON.parse(data);

		  for (i = 0; i < objReturn.length; i++) {
      console.log(objReturn[i]); 
	  
	   let formattedTanggalFunneling="";
	  
	 	if (objReturn[i].TanggalFunneling !=""){
			
	let currentTanggalFunneling=  new Date(objReturn[i].TanggalFunneling);
    formattedTanggalFunneling = currentTanggalFunneling.getDate() + " " + months[currentTanggalFunneling.getMonth()] + " " + currentTanggalFunneling.getFullYear();	
		
		} 
 var detailNPR='<div class="card" style="padding: 10px;margin: 10px 10px 0px 10px;" >'+
	   
	   '<table  style="font-size:12px">'+
			'<tbody>	'+
			'<tr><td colspan="3"><b>Usulan Funneling:</b>  '+objReturn[i].UsulanFunneling+'</td> </tr>'+  
			'<tr><td colspan="3"><b>Kedalaman:</b>  '+objReturn[i].Kedalaman+'</td> </tr>'+  
			'<tr><td colspan="3"><b>Objective Target:</b> '+objReturn[i].ObjectiveTarget+'</td> </tr>'+  
			'<tr><td colspan="3"><b>Zona:</b>  '+objReturn[i].Zona+'</td> </tr>'+  
			'<tr><td colspan="3"><b>Wilayah Kerja:</b>  '+objReturn[i].WilayahKerja+'</td> </tr>'+  
			'<tr><td colspan="3"><b>PI:</b>  '+objReturn[i].PI+'</td> </tr>'+  
			'<tr><td colspan="3"><b>Tanggal Funneling:</b>  '+formattedTanggalFunneling+'</td> </tr>'+  
			'<tr><td colspan="3"><b>Status:</b>  '+objReturn[i].Status+'</td> </tr>'+  
			'<tr><td colspan="3"><b>Remarks:</b>  '+objReturn[i].Remarks+'</td> </tr>'+  
			'<tr><td colspan="3"><b><hr></b>  </td> </tr>'+  
			
			 '<table  style="font-size:12px" class="table"  >'+
			'<tbody>	'+
			'<tr><td style="color:#fff;background-color: #047edf;font-size:12px; padding: 0.6em!important;text-align: center;"><b>Content</b> </td><td style="color:#fff;background-color: #047edf;font-size:12px; padding: 0.6em!important;text-align: center;"><b>Presented</b> </td><td style="color:#fff;background-color: #047edf;text-align: center;font-size:12px; padding: 0.6em!important;"><b>Real</b> </td> </tr>'+  
			'<tr><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>MMBO</b> </td><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>'+objReturn[i].PresentedMMBO+'</b> </td><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>'+objReturn[i].RealMMBO+'</b> </td> </tr>'+  
			'<tr><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>BCFG</b> </td><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>'+objReturn[i].PresentedBCFG+'</b> </td><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>'+objReturn[i].RealBCFG+'</b> </td> </tr>'+  
			'<tr><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>MMBOE</b> </td><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>'+objReturn[i].PresentedMMBOE+'</b> </td><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>'+objReturn[i].RealMMBOE+'</b> </td> </tr>'+  
			 '	</tbody></table>  '+
			
			 '	</tbody></table> </div> ';
			 dtNPRSHU.push(detailNPR); 
			 
			 
 
  
 myApp.hidePreloader();
}

document.getElementById("data-funneling-shu-detail").innerHTML = dtNPRSHU.join(" ");
 

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