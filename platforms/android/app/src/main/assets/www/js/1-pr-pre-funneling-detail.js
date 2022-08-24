   
///load service Page  
myApp.onPageInit("1-pr-pre-funneling-detail", function(page){


  
	 
var ProspectId = localStorage.getItem("ProspectId");
var PreFunneling = localStorage.getItem("PreFunneling");

document.getElementById("strNameNPRFun").innerHTML = PreFunneling;
 var dtNPRFUN = [];
  
const months = ["Januari", "Februari", "Maret","April", "Mei", "Juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
 $$.ajax({
    url: myApp.getWebApi('APPS-GET-NPR-Pre-Funneling-Detail'),
    method: 'POST',
   data: {"txtProspectId":""+ProspectId+""} ,
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn = JSON.parse(data);

		  for (i = 0; i < objReturn.length; i++) {
      console.log(objReturn[i]); 
	  
	   let formattedTanggalPreFunnel="";
	  
	 	if (objReturn[i].TanggalPreFunnel !=""){
			
	let currentTanggalFunneling=  new Date(objReturn[i].TanggalPreFunnel);
    formattedTanggalPreFunnel = currentTanggalFunneling.getDate() + " " + months[currentTanggalFunneling.getMonth()] + " " + currentTanggalFunneling.getFullYear();	
		
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
			'<tr><td colspan="3"><b>Tanggal Funneling:</b>  '+formattedTanggalPreFunnel+'</td> </tr>'+  
			'<tr><td colspan="3"><b>Status:</b>  '+objReturn[i].Status+'</td> </tr>'+  
			'<tr><td colspan="3"><b>Remarks:</b>  '+objReturn[i].Remarks+'</td> </tr>'+  
			'<tr><td colspan="3"><b><hr></b>  </td> </tr>'+  
			
			 '<table  style="font-size:12px" class="table"  >'+
			'<tbody>	'+
			'<tr><td style="color:#fff;background-color: #047edf;font-size:12px; padding: 0.6em!important;text-align: center;"><b>MMBO</b> </td><td style="color:#fff;background-color: #047edf;font-size:12px; padding: 0.6em!important;text-align: center;"><b>BCFG</b> </td><td style="color:#fff;background-color: #047edf;text-align: center;font-size:12px; padding: 0.6em!important;"><b>MMBOE</b> </td> </tr>'+  
			'<tr><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>'+objReturn[i].PreFunnelMMBO+'</b> </td><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>'+objReturn[i].PreFunnelBCFG+'</b> </td><td style="background-color: #63cad4;font-size:12px; padding: 0.6em!important;text-align: center;"><b>'+objReturn[i].PreFunnelMMBOE+'</b> </td> </tr>'+  
			  '	</tbody></table>  '+
			
			 '	</tbody></table> </div> ';
			 dtNPRFUN.push(detailNPR); 
			 
			 
 
  
 myApp.hidePreloader();
}

document.getElementById("data-pre-funneling-detail").innerHTML = dtNPRFUN.join(" ");
 

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