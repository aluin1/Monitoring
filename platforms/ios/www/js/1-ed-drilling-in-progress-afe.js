   
///load service Page  
myApp.onPageInit("1-ed-drilling-in-progress-afe", function(page){ 
 
var ReportId = localStorage.getItem("ReportId");
var RigName = localStorage.getItem("RigName");
var ReportDate = localStorage.getItem("ReportDate");
var OperatorName2 = localStorage.getItem("OperatorName");
var FieldName2 = localStorage.getItem("FieldName");

 
var dataname = localStorage.getItem("dataname");
var dataWellName = localStorage.getItem("dataWellName"); 

 
 var dtWellAllAFE = [];
 var dtWellAllBit = [];
 var dtWellAllCasing = [];
 var dtWellAllDirectionalSurvey = [];
 var dtWellAllDrillingFluid = [];
 var dtWellAllDrillingParameters = [];
 var dtWellAllGas = [];
 var dtWellAllHSE = [];
 var dtWellAllHydraulicAnalysis = [];
 var dtWellAllMudAdditive = [];
 var dtWellAllMudVolume = [];
 var dtWellAllNPT = [];
 var dtWellAllPersonnel = [];
 var dtWellAllPumps= [];
 var dtWellAllTimeBreakdown= [];
 var dtWellAllWeather= [];
  
 var dtWellAllGas = [];
  
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
  
 
   
  
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #002e66; font-size: 14px;  margin: 20px 0 0 ; '>Loading Aplikasi</p>");	
		 
	  
			 
//document.getElementById("OperatorNameAFE").innerHTML = OperatorName2; 
document.getElementById("strNameAFE").innerHTML = dataWellName; 
document.getElementById("FieldNameAFE").innerHTML = FieldName2;  
document.getElementById("ReportDateAFE").innerHTML = ReportDate;  


$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-AFE'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturn = JSON.parse(data);

 var dtWellReport='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  AFE</div>	';
				dtWellAllAFE.push(dtWellReport);

		  for (i = 0; i < objReturn.length; i++) {
      console.log(objReturn[i].AFEId); 
	  
	     dtWellReport='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>AFE Number: <br></b> '+objReturn[i].AFENumber+'  </td> <td><b>Currency: <br></b> '+objReturn[i].Currency+'  </td></tr> '+
				  '<tr><td width="50%"><b>AFE Cost: <br></b> '+objReturn[i].AFECost+'  </td> <td><b>Daily Cost: <br></b> '+objReturn[i].DailyCost+'  </td></tr> '+
				  '<tr><td width="50%"><b>Cummulative Cost: <br></b> '+objReturn[i].CummulativeCost+'   </td> <td ><b>Cummulative Mud Cost: <br></b> '+objReturn[i].CummulativeMudCost+'    </td> </tr> '+
				 // '<tr><td width="50%"><b>Cummulative Cost: <br></b> '+objReturn[i].CummulativeCost+'   </td> <td><b>Daily Mud Cost: <br></b> '+objReturn[i].DailyMudCost+'   </td></tr> '+
				  
				 // '<tr><td width="50%"><b>Cummulative Mud Cost: <br></b> '+objReturn[i].CummulativeMudCost+'    </td> <td><b>Day Supervisor: <br></b> '+objReturn[i].DaySupervisor+'   </td></tr> '+  
				//  '<tr><td width="50%"><b>Night Supervisor: <br></b> '+objReturn[i].NightSupervisor+'   </td> <td><b>Engineer: <br></b> '+objReturn[i].Engineer+'   </td></tr> '+  
				//   '<tr><td width="50%"><b>Geologist: <br></b> '+objReturn[i].Geologist+'   </td> <td>   </td></tr> '+  
				  // '<tr><td width="50%" colspan="2"><br> </td>  </tr> '+  
				 
				 '</tbody></table>';
				  
			 dtWellAllAFE.push(dtWellReport); 
			 
      myApp.hidePreloader();
} 
 dtWellReport='</div>'; 
				dtWellAllAFE.push(dtWellReport);
 
document.getElementById("data-well-afe").innerHTML =dtWellAllAFE.join(" ");
 
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
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Bit-Record'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnBitRecord = JSON.parse(data);

 
	   var dtWellReportBit='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Bit Record</div>	';
			 dtWellAllBit.push(dtWellReportBit); 

		  for (i = 0; i < objReturnBitRecord.length; i++) { 
	  
	     dtWellReportBit='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>Bit Number: <br></b> '+objReturnBitRecord[i].BitNumber+'  </td> <td><b>Bit Size: <br></b> '+objReturnBitRecord[i].BitSize+' '+objReturnBitRecord[i].UOMBitSize+'  </td></tr> '+
				  '<tr><td width="50%"><b>Bit Run: <br></b> '+objReturnBitRecord[i].BitRun+' </td> <td><b>Bit Manufacturer: <br></b> '+objReturnBitRecord[i].BitManufacturer+'  </td></tr> '+
				 // '<tr><td width="50%"><b>Bit IADC Code: <br></b> '+objReturnBitRecord[i].BitIADCCode+'  </td> <td><b>Bit Jets: <br></b> '+objReturnBitRecord[i].BitJets+' '+objReturnBitRecord[i].UOMBitJets+'  </td></tr> '+
				 // '<tr><td width="50%"><b>Bit Serial Number: <br></b> '+objReturnBitRecord[i].BitSerialNumber+'    </td> <td><b>Bit Depth In: <br></b> '+objReturnBitRecord[i].BitDepthIn+' '+objReturnBitRecord[i].UOMBitDepthIn+'   </td></tr> '+  
				  // '<tr><td width="50%"><b>Bit Depth Out: <br></b> '+objReturnBitRecord[i].BitDepthOut+' '+objReturnBitRecord[i].UOMBitDepthOut+'  </td> <td><b>Bit Footage: <br></b> '+objReturnBitRecord[i].BitFootage+'  '+objReturnBitRecord[i].UOMBitFootage+'   </td></tr> '+  
				  // '<tr><td width="50%"><b>Bit Hours: <br></b> '+objReturnBitRecord[i].BitHours+' '+objReturnBitRecord[i].UOMBitHours+'  </td> <td><b>Bit Footage: <br></b> '+objReturnBitRecord[i].BitTotalFieldArea+'  '+objReturnBitRecord[i].UOMBitTotalFieldArea+'   </td></tr> '+  
				   //  '<tr><td width="50%">  <b>Bit Dull Grade: <br></b> '+objReturnBitRecord[i].BitDullGrade+'  </td><td><b>Cumulative Bit Footage: <br></b> '+objReturnBitRecord[i].CumulativeBitFootage+' '+objReturnBitRecord[i].UOMCumulativeBitFootage+'  </td></tr> '+   
				   '<tr><td colspan="2">   <b>Cumulative Bit Hours: <br></b> '+objReturnBitRecord[i].CumulativeBitHours+' '+objReturnBitRecord[i].UOMCumulativeBitHours+'   </td> </tr> '+
				  // '<tr><td width="50%">   <b>Cumulative Bit Hours: <br></b> '+objReturnBitRecord[i].CumulativeBitHours+' '+objReturnBitRecord[i].UOMCumulativeBitHours+'   </td><td><b>Cumulative Bit Rop: <br></b> '+objReturnBitRecord[i].CumulativeBitRop+' '+objReturnBitRecord[i].UOMCumulativeBitRop+' </td></tr> '+
				 
				 '</tbody></table>';
				
			 dtWellAllBit.push(dtWellReportBit); 
			 
      myApp.hidePreloader();
} 
 
	     dtWellReportBit= '</div>';  
			 dtWellAllBit.push(dtWellReportBit); 
document.getElementById("data-well-bit-record").innerHTML =dtWellAllBit.join(" ");
 
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
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Casing'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnCasing = JSON.parse(data);

 

	   var dtWellReportCasing='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Casing</div>	';
			 dtWellAllCasing.push(dtWellReportCasing); 
				
				
		  for (i = 0; i < objReturnCasing.length; i++) { 
	  
	     dtWellReportCasing='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>Casing Last Size: <br></b> '+objReturnCasing[i].CasingLastSize+' '+objReturnCasing[i].UOMCasingLastSize+'   </td> <td><b>Casing Last Set MD: <br></b> '+objReturnCasing[i].CasingLastSetMD+' '+objReturnCasing[i].UOMCasingLastSetMD+'  </td></tr> '+
				  '<tr><td width="50%"><b>Casing Next Size: <br></b> '+objReturnCasing[i].CasingNextSize+' '+objReturnCasing[i].UOMCasingNextSize+' </td> <td><b>Casing Next SetMD: <br></b> '+objReturnCasing[i].CasingNextSetMD+' '+objReturnCasing[i].UOMCasingNextSetMD+'  </td></tr> '+
				  '<tr><td width="50%"><b>Casing Last Lot EMW: <br></b> '+objReturnCasing[i].CasingLastLotEMW+' '+objReturnCasing[i].UOMCasingLastLotEMW+'  </td> <td><b>Casing Tol: <br></b> '+objReturnCasing[i].CasingTol+' '+objReturnCasing[i].UOMCasingTol+'  </td></tr> '+ 
				 
				 '</tbody></table>';
				
			 dtWellAllCasing.push(dtWellReportCasing); 
			 
      myApp.hidePreloader();
} 
 

	     dtWellReportCasing= '</div>';  
			 dtWellAllCasing.push(dtWellReportCasing); 
document.getElementById("data-well-casing").innerHTML =dtWellAllCasing.join(" ");
 
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
 
		  for (i = 0; i < objReturnCasing.length; i++) { 
		  console.log(objReturnCasing[i].SurveyMD);
	   dtWellReportDirectionalSurvey='<tr><td style="padding:5px;text-align: right; " > '+objReturnCasing[i].SurveyMD+' '+objReturnCasing[i].UOMSurveyMD+'   </td> <td style="padding:5px; text-align: right;"> '+objReturnCasing[i].SurveyInc+' '+objReturnCasing[i].UOMSurveyInc+'  </td>  '+
				  '<td  style="padding:5px; text-align: right;"> '+objReturnCasing[i].SurveyAzm+' '+objReturnCasing[i].UOMSurveyAzm+' </td>  </tr> ';  
				 
				  
			 dtWellAllDirectionalSurvey.push(dtWellReportDirectionalSurvey); 
			 
      myApp.hidePreloader();
   }
			//}
  dtWellReportDirectionalSurvey= '</tbody></table>'+
				 '</div>';
 
			 dtWellAllDirectionalSurvey.push(dtWellReportDirectionalSurvey); 
			 

document.getElementById("data-well-directional-survey").innerHTML =dtWellAllDirectionalSurvey.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
*/
  /*
	 var dtWellReportDirectionalSurvey='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >Report Directional Survey</div>	'+
			 	//'<table style="font-size:12px" >	'+
				// '<tbody> '+
				// '<tr>'+
				//  '<tr><td width="50%"><b>Casing Last Size: <br></b> '+objReturnCasing[i].CasingLastSize+' '+objReturnCasing[i].UOMCasingLastSize+'   </td> <td><b>Casing Last Set MD: <br></b> '+objReturnCasing[i].CasingLastSetMD+' '+objReturnCasing[i].UOMCasingLastSetMD+'  </td></tr> '+
				//  '<tr><td width="50%"><b>Casing Next Size: <br></b> '+objReturnCasing[i].CasingNextSize+' '+objReturnCasing[i].UOMCasingNextSize+' </td> <td><b>Casing Next SetMD: <br></b> '+objReturnCasing[i].CasingNextSetMD+' '+objReturnCasing[i].UOMCasingNextSetMD+'  </td></tr> '+
				  //'<tr><td width="50%"><b>Casing Last Lot EMW: <br></b> '+objReturnCasing[i].CasingLastLotEMW+' '+objReturnCasing[i].UOMCasingLastLotEMW+'  </td> <td><b>Casing Tol: <br></b> '+objReturnCasing[i].CasingTol+' '+objReturnCasing[i].UOMCasingTol+'  </td></tr> '+ 
				 
				// '</tbody></table>'+
				 '</div>';  
			 dtWellAllDirectionalSurvey.push(dtWellReportDirectionalSurvey); 
			 
			  
document.getElementById("data-well-directional-survey").innerHTML =dtWellAllDirectionalSurvey.join(" ");


*/


$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Drilling-Fluid'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnDrillingFluid = JSON.parse(data);

 

	   var dtWellReportCasing='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Drilling Fluid</div>	';
				
			 dtWellAllDrillingFluid.push(dtWellReportCasing); 
				
		  for (i = 0; i < objReturnDrillingFluid.length; i++) { 
		  

let currentMudTime=  new Date(objReturnDrillingFluid[i].MudTime);
  let formattedMudTime = currentMudTime.getDate() + " " + months[currentMudTime.getMonth()] + " " + currentMudTime.getFullYear() +" "+ ("0" + (currentMudTime.getHours()  )).slice(-2) + ":" +  ("0" + (currentMudTime.getMinutes() )).slice(-2)+ ":" +    ("0" + (currentMudTime.getSeconds() )).slice(-2);		  
	  
	     dtWellReportCasing='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>Order No: <br></b> '+objReturnDrillingFluid[i].OrderNo+'   </td> <td><b>Mud Type: <br></b> '+objReturnDrillingFluid[i].MudType+'   </td></tr> '+
				  '<tr><td width="50%"> <b>MW In: <br></b> '+objReturnDrillingFluid[i].MWIn+' '+objReturnDrillingFluid[i].UOMMWIn+'  </td><td><b>MW Out: <br></b> '+objReturnDrillingFluid[i].MWOut+' '+objReturnDrillingFluid[i].UOMMWOut+'</td></tr> '+
				  '<tr><td width="50%">  <b>Temp In: <br></b> '+objReturnDrillingFluid[i].TempIn+' '+objReturnDrillingFluid[i].UOMTempIn+'  </td><td><b>Temp Out: <br></b> '+objReturnDrillingFluid[i].TempOut+' '+objReturnDrillingFluid[i].UOMTempOut+' </td></tr> '+ 
				  '<tr><td width="50%">  <b>Fluid Loss: <br></b> '+objReturnDrillingFluid[i].FluidLoss+' '+objReturnDrillingFluid[i].UOMFluidLoss+'  </td></tr> '+ 
				 // '<tr><td colspan="2"><b>Temp Out: <br></b> '+objReturnDrillingFluid[i].TempOut+' '+objReturnDrillingFluid[i].UOMTempOut+'  </td> <td><b>Pres Grad: <br></b> '+objReturnDrillingFluid[i].PresGrad+' '+objReturnDrillingFluid[i].UOMPresGrad+'  </td></tr> '+ 
				//  '<tr><td width="50%"><b>Visc: <br></b> '+objReturnDrillingFluid[i].Visc+' '+objReturnDrillingFluid[i].UOMVisc+'  </td> <td><b>PV: <br></b> '+objReturnDrillingFluid[i].PV+' '+objReturnDrillingFluid[i].UOMPV+'  </td></tr> '+ 
				//  '<tr><td width="50%"><b>YP: <br></b> '+objReturnDrillingFluid[i].YP+' '+objReturnDrillingFluid[i].UOMYP+'  </td> <td><b>Gels 10 Sec: <br></b> '+objReturnDrillingFluid[i].Gels10Sec+' '+objReturnDrillingFluid[i].UOMGels10Sec+'  </td></tr> '+ 
				 //  '<tr><td width="50%"><b>Gels 10 Min: <br></b> '+objReturnDrillingFluid[i].Gels10Min+' '+objReturnDrillingFluid[i].UOMGels10Min+'  </td> <td><b>Fluid Loss: <br></b> '+objReturnDrillingFluid[i].FluidLoss+' '+objReturnDrillingFluid[i].UOMFluidLoss+'  </td></tr> '+ 
				//  '<tr><td width="50%"><b>pH: <br></b> '+objReturnDrillingFluid[i].pH+'   </td> <td><b>Solid: <br></b> '+objReturnDrillingFluid[i].Solid+' '+objReturnDrillingFluid[i].UOMSolid+'  </td></tr> '+ 
				//  '<tr><td width="50%"><b>Sand: <br></b> '+objReturnDrillingFluid[i].Sand+' '+objReturnDrillingFluid[i].UOMSand+'  </td> <td><b>Water: <br></b> '+objReturnDrillingFluid[i].Water+' '+objReturnDrillingFluid[i].UOMWater+'  </td></tr> '+ 
				 // '<tr><td width="50%"><b>Oil: <br></b> '+objReturnDrillingFluid[i].Oil+' '+objReturnDrillingFluid[i].UOMOil+'  </td> <td><b>HGS: <br></b> '+objReturnDrillingFluid[i].HGS+' '+objReturnDrillingFluid[i].UOMHGS+'  </td></tr> '+ 
				//  '<tr><td width="50%"><b>LGS: <br></b> '+objReturnDrillingFluid[i].LGS+' '+objReturnDrillingFluid[i].UOMLGS+'  </td> <td><b>LTLP: <br></b> '+objReturnDrillingFluid[i].LTLP+' '+objReturnDrillingFluid[i].UOMLTLP+'  </td></tr> '+ 
				 // '<tr><td width="50%"><b>HTHP: <br></b> '+objReturnDrillingFluid[i].HTHP+' '+objReturnDrillingFluid[i].UOMHTHP+'  </td> <td><b>Cake: <br></b> '+objReturnDrillingFluid[i].Cake+' '+objReturnDrillingFluid[i].UOMCake+'  </td></tr> '+ 
				 // '<tr><td width="50%"><b>EStb: <br></b> '+objReturnDrillingFluid[i].EStb+' '+objReturnDrillingFluid[i].UOMEStb+'  </td> <td><b>PF: <br></b> '+objReturnDrillingFluid[i].PF+' '+objReturnDrillingFluid[i].UOMPF+'  </td></tr> '+ 
				//  '<tr><td width="50%"><b>MF: <br></b> '+objReturnDrillingFluid[i].MF+' '+objReturnDrillingFluid[i].UOMMF+'  </td> <td><b>PM: <br></b> '+objReturnDrillingFluid[i].PM+' '+objReturnDrillingFluid[i].UOMPM+'  </td></tr> '+ 
				 // '<tr><td width="50%"><b>ECD: <br></b> '+objReturnDrillingFluid[i].ECD+' '+objReturnDrillingFluid[i].UOMECD+'  </td> <td>  </td></tr> '+ 
				  '<tr><td width="50%" colspan="2"><hr style="border-top: 2px solid rgb(0 46 102);">  </td>  </tr> '+ 
				 '</tbody></table>';
				  
			 dtWellAllDrillingFluid.push(dtWellReportCasing); 
			 
      myApp.hidePreloader();
} 
 
	     dtWellReportCasing='</div>'; 
			 dtWellAllDrillingFluid.push(dtWellReportCasing); 
document.getElementById("data-well-drilling-fluid").innerHTML =dtWellAllDrillingFluid.join(" ");
 
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
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Drilling-Parameters'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnDrilling = JSON.parse(data);

 
	   var dtWellReportDrillingParameters='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Drilling Parameters</div>	';
			 dtWellAllDrillingParameters.push(dtWellReportDrillingParameters); 

		  for (i = 0; i < objReturnDrilling.length; i++) { 
	  
	     dtWellReportDrillingParameters='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>AVG Wob: <br></b> '+objReturnDrilling[i].AVGWob+' '+objReturnDrilling[i].UOMAVGWob+'   </td> <td><b>AVG Rop: <br></b> '+objReturnDrilling[i].AVGRop+'  '+objReturnDrilling[i].UOMAVGRop+'   </td></tr> '+
				  '<tr><td colspan="2"><b>AVG Rpm: <br></b> '+objReturnDrilling[i].AVGRpm+'  '+objReturnDrilling[i].UOMAVGRpm+'  </td>  </tr> '+
				 //  '<tr><td width="50%"><b>AVG Rpm: <br></b> '+objReturnDrilling[i].AVGRpm+'  '+objReturnDrilling[i].UOMAVGRpm+'  </td> <td><b>Torque: <br></b> '+objReturnDrilling[i].Torque+' '+objReturnDrilling[i].UOMTorque+'  </td></tr> '+
				  '<tr><td width="50%"><b>Stand Pipe Press: <br></b> '+objReturnDrilling[i].StandPipePress+' '+objReturnDrilling[i].UOMStandPipePress+'  </td> <td><b>FlowRate: <br></b> '+objReturnDrilling[i].FlowRate+' '+objReturnDrilling[i].UOMFlowRate+'  </td></tr> '+ 
				 // '<tr><td width="50%"><b>String Weight: <br></b> '+objReturnDrilling[i].StringWeight+' '+objReturnDrilling[i].UOMStringWeight+'  </td> <td><b>Rotating Weight: <br></b> '+objReturnDrilling[i].RotatingWeight+' '+objReturnDrilling[i].UOMRotatingWeight+'  </td></tr> '+ 
				 // '<tr><td width="50%"><b>Total Drilling Time: <br></b> '+objReturnDrilling[i].TotalDrillingTime+' '+objReturnDrilling[i].UOMTotalDrillingTime+'  </td> <td><b>Circulating Press: <br></b> '+objReturnDrilling[i].CirculatingPress+' '+objReturnDrilling[i].UOMCirculatingPress+'  </td></tr> '+  
				 
				 '</tbody></table>';
				
			 dtWellAllDrillingParameters.push(dtWellReportDrillingParameters); 
			 
      myApp.hidePreloader();
} 
	     dtWellReportDrillingParameters= '</div>';  
			 dtWellAllDrillingParameters.push(dtWellReportDrillingParameters); 
 
document.getElementById("data-well-drilling-parameters").innerHTML =dtWellAllDrillingParameters.join(" ");
 
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
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Gas'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnGas = JSON.parse(data);

 
	   var dtWellReportGas='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >Gas</div>	';
			 dtWellAllGas.push(dtWellReportGas); 

		  for (i = 0; i < objReturnGas.length; i++) { 
	  
	     dtWellReportGas='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>Max Gas: <br></b> '+objReturnGas[i].MaxGas+' '+objReturnGas[i].UOMMaxGas+'   </td> <td><b>Conn Gas: <br></b> '+objReturnGas[i].ConnGas+'  '+objReturnGas[i].UOMConnGas+'   </td></tr> '+
				  '<tr><td width="50%"><b>Trip Gas: <br></b> '+objReturnGas[i].TripGas+'  '+objReturnGas[i].UOMTripGas+'  </td> <td><b>Back Gas: <br></b> '+objReturnGas[i].BackGas+' '+objReturnGas[i].UOMBackGas+'  </td></tr> '+ 
				 '</tbody></table>';
				
			 dtWellAllGas.push(dtWellReportGas); 
			 
      myApp.hidePreloader();
} 
 
	     dtWellReportGas= '</div>';  
			 dtWellAllGas.push(dtWellReportGas); 
document.getElementById("data-well-gas").innerHTML =dtWellAllGas.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
   
	*/		 
			  


/*
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-HSE'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnHSE = JSON.parse(data);

 
	   var dtWellReportHSE='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  HSE</div>	';
			 dtWellAllHSE.push(dtWellReportHSE); 
				

		  for (i = 0; i < objReturnHSE.length; i++) { 
	  
let currentAccidentsIncidentsTime =  new Date(objReturnHSE[i].AccidentsIncidentsTime);
 let formattedAccidentsIncidentsTime = currentAccidentsIncidentsTime.getDate() + " " + months[currentAccidentsIncidentsTime.getMonth()] + " " + currentAccidentsIncidentsTime.getFullYear();

	     dtWellReportHSE='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>HSE Stop Cards: <br></b> '+objReturnHSE[i].HSEStopCards+'    </td> <td><b>HSELTA: <br></b> '+objReturnHSE[i].HSELTA+'  </td></tr> '+
				  '<tr><td width="50%"><b>Oil Spill: <br></b> '+objReturnHSE[i].OilSpill+'   </td> <td><b>H2STest: <br></b> '+objReturnHSE[i].H2STest+'    </td></tr> '+
				  '<tr><td width="50%"><b>HSE Meeting: <br></b> '+objReturnHSE[i].HSEMeeting+'    </td> <td><b>Kick Trip: <br></b> '+objReturnHSE[i].KickTrip+'   </td></tr> '+ 
				  '<tr><td width="50%"><b>Kick Drill: <br></b> '+objReturnHSE[i].KickDrill+'   </td> <td><b>Fire: <br></b> '+objReturnHSE[i].Fire+'   </td></tr> '+ 
				  '<tr><td width="50%"><b>Accidents Incidents Time: <br></b> '+objReturnHSE[i].AccidentsIncidentsTime+'    </td> <td><b>Accidents Incidents Description: <br></b> '+objReturnHSE[i].AccidentsIncidentsDescription+'    </td></tr> '+  
				  '<tr><td width="50%"><b>Accidents Incidents Type: <br></b> '+objReturnHSE[i].AccidentsIncidentsType+'    </td> <td><b>Comments : <br></b> '+objReturnHSE[i].Comments+'    </td></tr> '+ 
				 
				 '</tbody></table>';
				
			 dtWellAllHSE.push(dtWellReportHSE); 
			 
      myApp.hidePreloader();
} 
	     dtWellReportHSE= '</div>';  
			 dtWellAllHSE.push(dtWellReportHSE); 
 
document.getElementById("data-well-hse").innerHTML =dtWellAllHSE.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });

*/

/*
	$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Hydraulic-Analysis'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnHydraulicAnalysis = JSON.parse(data);

	   var  WellAllHydraulicAnalysis='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Hydraulic Analysis</div>	';
			 dtWellAllHydraulicAnalysis.push(WellAllHydraulicAnalysis); 
 

		  for (i = 0; i < objReturnHydraulicAnalysis.length; i++) { 
	  
	      WellAllHydraulicAnalysis='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>Annular Velocity: <br></b> '+objReturnHydraulicAnalysis[i].AnnularVelocity+'  '+objReturnHydraulicAnalysis[i].UOMAnnularVelocity+'   </td> <td><b>Pb: <br></b> '+objReturnHydraulicAnalysis[i].Pb+' '+objReturnHydraulicAnalysis[i].UOMPb+'  </td></tr> '+ 
				  '<tr><td width="50%"><b>Sys HHp: <br></b> '+objReturnHydraulicAnalysis[i].SysHHp+'  '+objReturnHydraulicAnalysis[i].UOMSysHHp+'   </td> <td><b>HHPb: <br></b> '+objReturnHydraulicAnalysis[i].HHPb+' '+objReturnHydraulicAnalysis[i].UOMHHPb+'  </td></tr> '+ 
				  '<tr><td width="50%"><b>HSI: <br></b> '+objReturnHydraulicAnalysis[i].HSI+'  '+objReturnHydraulicAnalysis[i].UOMHSI+'   </td> <td><b>psib: <br></b> '+objReturnHydraulicAnalysis[i].psib+' '+objReturnHydraulicAnalysis[i].UOMpsib+'  </td></tr> '+ 
				  '<tr><td width="50%"><b>Jet Velocity: <br></b> '+objReturnHydraulicAnalysis[i].JetVelocity+'  '+objReturnHydraulicAnalysis[i].UOMJetVelocity+'   </td> <td><b>Impact Force: <br></b> '+objReturnHydraulicAnalysis[i].ImpactForce+' '+objReturnHydraulicAnalysis[i].UOMImpactForce+'  </td></tr> '+
				  '<tr><td width="50%"><b>IF Area: <br></b> '+objReturnHydraulicAnalysis[i].IFArea+'  '+objReturnHydraulicAnalysis[i].UOMIFArea+'   </td> <td>  </td></tr> '+ 
				 
				 '</tbody></table>';
				  
			 dtWellAllHydraulicAnalysis.push(WellAllHydraulicAnalysis); 
			 
      myApp.hidePreloader();
} 
	      WellAllHydraulicAnalysis='</div>'; 
			 dtWellAllHydraulicAnalysis.push(WellAllHydraulicAnalysis); 
 
document.getElementById("data-well-hydraulic-analysis").innerHTML =dtWellAllHydraulicAnalysis.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });

*/
/*
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Mud-Additive'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnMudAdditive = JSON.parse(data);

 

	   var dtWellReportMudAdditive='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Mud Additive</div>	'+
				'<table    style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				 '<tr><td style="padding:5px;background-color: #002e66;color: #fff;"><b>Order No </b></td><td style="padding:5px;background-color: #002e66;color: #fff;"><b>Mud Additive Type</b></td><td style="padding:5px;background-color: #002e66;color: #fff;"><b>Mud Additive Amount </b></td>';
				  
			 dtWellAllMudAdditive.push(dtWellReportMudAdditive); 
		  for (i = 0; i < objReturnMudAdditive.length; i++) { 
	  
	     dtWellReportMudAdditive='<tr><td   style="padding:5px;text-align: right;"> '+objReturnMudAdditive[i].OrderNo+'    </td> <td style="padding:5px;"> '+objReturnMudAdditive[i].MudAdditiveType+'  </td><td  style="padding:5px;text-align: right;"> '+objReturnMudAdditive[i].MudAdditiveAmount+' '+objReturnMudAdditive[i].UOMMudAdditiveAmount+'   </td>  </tr> ';
				  
				 
				   
			 dtWellAllMudAdditive.push(dtWellReportMudAdditive); 
			 
      myApp.hidePreloader();
} 
  dtWellReportMudAdditive= '</tbody></table>'+
  '</div>';
			 dtWellAllMudAdditive.push(dtWellReportMudAdditive); 
document.getElementById("data-well-mud-additive").innerHTML =dtWellAllMudAdditive.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });

*/

/*
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Mud-Volume'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnMudVolume = JSON.parse(data);

 
	   var dtWellReportMudVolume='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Mud Volume</div>	';
			 dtWellAllMudVolume.push(dtWellReportMudVolume); 

		  for (i = 0; i < objReturnMudVolume.length; i++) { 
	  
	     dtWellReportMudVolume='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>Mud Volumes Start: <br></b> '+objReturnMudVolume[i].MudVolumesStart+' '+objReturnMudVolume[i].UOMMudVolumesStart+'    </td> <td><b>Mud Volumes Lost Surface: <br></b> '+objReturnMudVolume[i].MudVolumesLostSurface+'  '+objReturnMudVolume[i].UOMMudVolumesLostSurface+'  </td></tr> '+
				  '<tr><td width="50%"><b>Mud Volumes Lost DH: <br></b> '+objReturnMudVolume[i].MudVolumesLostDH+' '+objReturnMudVolume[i].UOMMudVolumesLostDH+'   </td> <td> <b>Mud Volumes Dumped: <br></b> '+objReturnMudVolume[i].MudVolumesDumped+' '+objReturnMudVolume[i].UOMMudVolumesDumped+'   </td></tr> '+ 
				  '<tr><td width="50%"><b>Mud Volumes Built: <br></b> '+objReturnMudVolume[i].MudVolumesBuilt+' '+objReturnMudVolume[i].UOMMudVolumesBuilt+'   </td> <td> <b>Mud Volumes Ending: <br></b> '+objReturnMudVolume[i].MudVolumesEnding+' '+objReturnMudVolume[i].UOMMudVolumesEnding+'   </td></tr> '+ 
				 
				 '</tbody></table>';
				 
			 dtWellAllMudVolume.push(dtWellReportMudVolume); 
			 
      myApp.hidePreloader();
} 
 
	     dtWellReportMudVolume='</div>';  
			 dtWellAllMudVolume.push(dtWellReportMudVolume); 
document.getElementById("data-well-mud-volume").innerHTML =dtWellAllMudVolume.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });

*/


$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-NPT'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnNPT = JSON.parse(data);

 

	   var dtWellReportNPT='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  NPT</div>	'+
				'<table class="table-responsive" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				 '<tr>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>Order No </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>NPT Start Time </b> </td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>NPT End Time </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>NPT Hours </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>NPT Code </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>NPT Responsibility </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>NPT Description </b></td>'+
				 '</tr>';
				  
			 dtWellAllNPT.push(dtWellReportNPT); 
			 
		  for (i = 0; i < objReturnNPT.length; i++) { 
		  
		  
let currentNPTStartTime=  new Date(objReturnNPT[i].NPTStartTime);
  let formattedNPTStartTime = currentNPTStartTime.getDate() + " " + months[currentNPTStartTime.getMonth()] + " " + currentNPTStartTime.getFullYear()+" "+ ("0" + (currentNPTStartTime.getHours()  )).slice(-2) + ":" +  ("0" + (currentNPTStartTime.getMinutes() )).slice(-2)+ ":" +    ("0" + (currentNPTStartTime.getSeconds() )).slice(-2);
  console.log(currentNPTStartTime);
   console.log(formattedNPTStartTime);
let currentNPTEndTime=  new Date(objReturnNPT[i].NPTEndTime);
  let formattedNPTEndTime = currentNPTEndTime.getDate() + " " + months[currentNPTEndTime.getMonth()] + " " + currentNPTEndTime.getFullYear()+" "+ ("0" + (currentNPTEndTime.getHours()  )).slice(-2) + ":" +  ("0" + (currentNPTEndTime.getMinutes() )).slice(-2)+ ":" +    ("0" + (currentNPTEndTime.getSeconds() )).slice(-2);
	  
	     dtWellReportNPT='<tr>'+
				'<td style="padding:5px;text-align:right;"> '+objReturnNPT[i].OrderNo+'     </td>'+
				'<td style="padding:5px;">'+formattedNPTStartTime+'    </td> '+ 
				'<td style="padding:5px;"  > '+formattedNPTEndTime+'     </td> '+
				'<td style="padding:5px;text-align:right;"> '+objReturnNPT[i].NPTHours+'  '+objReturnNPT[i].UOMNPTHours+'   </td>  '+ 
				'<td style="padding:5px;text-align:right;"  > '+objReturnNPT[i].NPTCode+'</td>'+
				'<td style="padding:5px;"  > '+objReturnNPT[i].NPTResponsibility+'</td>'+
				'<td style="padding:5px;"  > '+objReturnNPT[i].NPTDescription+'</td>'+
				'</tr> ';
				  
				
				 
			 dtWellAllNPT.push(dtWellReportNPT); 
			 
      myApp.hidePreloader();
} 
 
	     dtWellReportNPT='</tbody></table>'+
		 '</div>';  
			 dtWellAllNPT.push(dtWellReportNPT); 
document.getElementById("data-well-npt").innerHTML =dtWellAllNPT.join(" ");
 
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
  
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-NPT'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnNPT = JSON.parse(data);

 

	   var dtWellReportNPT='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  NPT</div>	';
			 dtWellAllNPT.push(dtWellReportNPT); 
			 
		  for (i = 0; i < objReturnNPT.length; i++) { 
	

let currentNPTStartTime=  new Date(objReturnNPT[i].NPTStartTime);
  let formattedNPTStartTime = currentNPTStartTime.getDate() + " " + months[currentNPTStartTime.getMonth()] + " " + currentNPTStartTime.getFullYear();

let currentNPTEndTime=  new Date(objReturnNPT[i].NPTEndTime);
  let formattedNPTEndTime= currentNPTEndTime.getDate() + " " + months[currentNPTEndTime.getMonth()] + " " + currentNPTEndTime.getFullYear();
	
	     dtWellReportNPT='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				   '<tr><td width="50%"><b>Order No: <br></b> '+objReturnNPT[i].OrderNo+'     </td> <td><b>NPT Start Time: <br></b> '+formattedNPTStartTime+'    </td></tr> '+ 
				  '<tr><td width="50%"><b>NPT End Time: <br></b> '+formattedNPTEndTime+'     </td> <td><b>NPT Hours: <br></b> '+objReturnNPT[i].NPTHours+'  '+objReturnNPT[i].UOMNPTHours+'   </td></tr> '+ 
				  '<tr><td width="50%"><b>NPT Code: <br></b> '+objReturnNPT[i].NPTCode+'    </td> <td><b>NPT Responsibility: <br></b> '+objReturnNPT[i].NPTResponsibility+'    </td></tr> '+ 
				  '<tr><td width="50%"><b>NPT Description: <br></b> '+objReturnNPT[i].NPTDescription+'     </td> <td>  </td></tr> '+  
				  '<tr><td width="50%" colspan="2"><hr style="border-top: 2px solid rgb(0 46 102);">  </td>  </tr> '+ 
				
				'</tbody></table>';
				 
			 dtWellAllNPT.push(dtWellReportNPT); 
			 
      myApp.hidePreloader();
} 
 
	     dtWellReportNPT='</div>';  
			 dtWellAllNPT.push(dtWellReportNPT); 
document.getElementById("data-well-npt").innerHTML =dtWellAllNPT.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
  
   */
/*
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Personnel'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnPersonnel = JSON.parse(data);

 

	   var dtWellReportPersonnel='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Personnel</div>	'+
				'<table     style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				 '<tr><td   style="padding: 5px;background-color: #002e66;color: #fff;"><b>Company  </b></td><td style="padding: 5px;background-color: #002e66;color: #fff;"><b>People </b></td></tr>';
				  
			 dtWellAllPersonnel.push(dtWellReportPersonnel); 
			 
		  for (i = 0; i < objReturnPersonnel.length; i++) { 
	  
	     dtWellReportPersonnel='<tr><td style="padding: 5px;"  > '+objReturnPersonnel[i].Company+'     </td> <td style="padding: 5px;text-align:right;"> '+objReturnPersonnel[i].People+'  '+objReturnPersonnel[i].UOMpeople+'  </td></tr> ';
				
				
				 
			 dtWellAllPersonnel.push(dtWellReportPersonnel); 
			 
      myApp.hidePreloader();
} 
 
	     dtWellReportPersonnel='</tbody></table>'+
								'</div>';  
			 dtWellAllPersonnel.push(dtWellReportPersonnel); 
document.getElementById("data-well-personnel").innerHTML =dtWellAllPersonnel.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });


  */
 /*
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Pumps'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnPumps = JSON.parse(data);

 

	   var dtWellReportPumps='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Pumps</div>	'+
				'<table class="table-responsive" style="font-size:12px" border="1" >	'+
				 '<tbody> '+
				 '<tr>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>Pump Name </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>Time </b> </td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>Slow Speed </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>Circulate </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>Strokes </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>Pressure </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>Liner Size </b></td>'+
				 '<td style="padding:5px;background-color: #002e66;color: #fff;"><b>Efficiency </b></td>'+
				 '</tr>';
				  
			 dtWellAllPumps.push(dtWellReportPumps); 
			 
		  for (i = 0; i < objReturnPumps.length; i++) { 
	  
	     dtWellReportPumps='<tr>'+
				'<td style="padding:5px;text-align: right;"> '+objReturnPumps[i].PumpName+'     </td>'+
				'<td style="padding:5px;text-align: right;">'+objReturnPumps[i].Time+'    </td> '+ 
				'<td style="padding:5px;text-align: right;"  > '+objReturnPumps[i].SlowSpeed+'     </td> '+
				'<td style="padding:5px;text-align: right;"> '+objReturnPumps[i].Circulate+'    </td>  '+ 
				'<td style="padding:5px;text-align: right;"  > '+objReturnPumps[i].Strokes+' '+objReturnPumps[i].UOMPumpStrokes+'     </td>'+
				'<td style="padding:5px;text-align: right;"> '+objReturnPumps[i].Pressure+'  '+objReturnPumps[i].UOMPumpPressure+'   </td>  '+ 
				'<td style="padding:5px;text-align: right;"  > '+objReturnPumps[i].LinerSize+' '+objReturnPumps[i].UOMPumpLinerSize+'      </td>'+
				'<td style="padding:5px;text-align: right;"> '+objReturnPumps[i].Efficiency+' '+objReturnPumps[i].UOMPumpEfficiency+'    </td>'+
				'</tr> ';
				  
				
				 
			 dtWellAllPumps.push(dtWellReportPumps); 
			 
      myApp.hidePreloader();
} 
 
	     dtWellReportPumps='</tbody></table>'+
		 '</div>';  
			 dtWellAllPumps.push(dtWellReportPumps); 
document.getElementById("data-well-pumps").innerHTML =dtWellAllPumps.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
  
  
   */
  /*
  
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Time-Breakdown'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnTimeBreakdown = JSON.parse(data);

 

	   var dtWellReportTimeBreakdown='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Time Breakdown</div>	';
			 dtWellAllTimeBreakdown.push(dtWellReportTimeBreakdown); 
			 
		  for (i = 0; i < objReturnTimeBreakdown.length; i++) { 
	

let currentTimeStart=  new Date(objReturnTimeBreakdown[i].TimeStart);
  let formattedTimeStart = currentTimeStart.getDate() + " " + months[currentTimeStart.getMonth()] + " " + currentTimeStart.getFullYear()  +" "+ ("0" + (currentTimeStart.getHours()  )).slice(-2) + ":" +  ("0" + (currentTimeStart.getMinutes() )).slice(-2)+ ":" +    ("0" + (currentTimeStart.getSeconds() )).slice(-2);

let currentTimeEnd=  new Date(objReturnTimeBreakdown[i].TimeEnd);
  let formattedTimeEnd= currentTimeEnd.getDate() + " " + months[currentTimeEnd.getMonth()] + " " + currentTimeEnd.getFullYear()+" "+ ("0" + (currentTimeEnd.getHours()  )).slice(-2) + ":" +  ("0" + (currentTimeEnd.getMinutes() )).slice(-2)+ ":" +    ("0" + (currentTimeEnd.getSeconds() )).slice(-2);
	
	     dtWellReportTimeBreakdown='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				   '<tr><td width="50%"><b>Order No: <br></b> '+objReturnTimeBreakdown[i].OrderNo+'     </td> <td><b>Time Start: <br></b> '+formattedTimeStart+'    </td></tr> '+ 
				  '<tr><td width="50%"><b>Time End: <br></b> '+formattedTimeEnd+'     </td> <td><b>Time Elapsed: <br></b> '+objReturnTimeBreakdown[i].TimeElapsed+'    </td></tr> '+ 
				  '<tr><td width="50%"><b>Measured Depth Start: <br></b> '+objReturnTimeBreakdown[i].MeasuredDepthStart+'    </td> <td><b>Measured Depth End: <br></b> '+objReturnTimeBreakdown[i].MeasuredDepthEnd+'    </td></tr> '+ 
				  '<tr><td width="50%"><b>Length: <br></b> '+objReturnTimeBreakdown[i].Length+'     </td> <td><b>Category: <br></b> '+objReturnTimeBreakdown[i].Category+'     </td></tr> '+ 
				  '<tr><td width="50%"><b>Productivity: <br></b> '+objReturnTimeBreakdown[i].Productivity+'     </td> <td><b>NPT: <br></b> '+objReturnTimeBreakdown[i].NPT+'     </td></tr> '+ 
				  '<tr><td width="50%"><b>Code: <br></b> '+objReturnTimeBreakdown[i].Code+'     </td> <td><td></tr> '+  
				  '<tr><td colspan="2" width="50%"><b> Operation: <br></b> '+objReturnTimeBreakdown[i].Operation+'     <td></tr> '+  
				  '<tr><td width="50%" colspan="2"><hr style="border-top: 2px solid rgb(0 46 102);">  </td>  </tr> '+ 
				
				'</tbody></table>';
				 
			 dtWellAllTimeBreakdown.push(dtWellReportTimeBreakdown); 
			 
      myApp.hidePreloader();
} 
 
	     dtWellReportTimeBreakdown='</div>';  
			 dtWellAllTimeBreakdown.push(dtWellReportTimeBreakdown); 
document.getElementById("data-well-time-breakdown").innerHTML =dtWellAllTimeBreakdown.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
  
    */
  
   /* 
$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-Weather'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnWeather = JSON.parse(data);

 
	   var dtWellReportWeather='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >  Weather</div>	';
			 dtWellAllWeather.push(dtWellReportWeather); 
				

		  for (i = 0; i < objReturnWeather.length; i++) { 
	  
	     dtWellReportWeather='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>Temperatur High: <br></b> '+objReturnWeather[i].TemperaturHigh+'  '+objReturnWeather[i].UOMTemperaturHigh+'     </td> <td><b>Temperatur Low: <br></b> '+objReturnWeather[i].TemperaturLow+'  '+objReturnWeather[i].UOMTemperaturLow+'  </td></tr> '+ 
				  '<tr><td width="50%"><b>Chill Factor: <br></b> '+objReturnWeather[i].ChillFactor+'  '+objReturnWeather[i].UOMChillFactor+'     </td> <td><b>Wind Speed: <br></b> '+objReturnWeather[i].WindSpeed+'  '+objReturnWeather[i].UOMWindSpeed+'  </td></tr> '+ 
				  '<tr><td width="50%"><b>Wind Direction: <br></b> '+objReturnWeather[i].WindDirection+'  '+objReturnWeather[i].UOMWindDirection+'     </td> <td><b>Barometric Pressure: <br></b> '+objReturnWeather[i].BarometricPressure+'  '+objReturnWeather[i].UOMBarometricPressure+'  </td></tr> '+ 
				  '<tr><td width="50%"><b>Sea Condition Wave: <br></b> '+objReturnWeather[i].SeaConditionWave+'  '+objReturnWeather[i].UOMSeaConditionWave+'     </td> <td><b>Sea Condition Speed: <br></b> '+objReturnWeather[i].SeaConditionSpeed+'  '+objReturnWeather[i].UOMSeaConditionSpeed+'  </td></tr> '+ 
				  '<tr><td width="50%"><b>Road Condition: <br></b> '+objReturnWeather[i].RoadCondition+'      </td> <td><b>Visibility: <br></b> '+objReturnWeather[i].Visibility+'  '+objReturnWeather[i].UOMVisibility+'  </td></tr> '+  
				 '</tbody></table>';
				  
			 dtWellAllWeather.push(dtWellReportWeather); 
			 
      myApp.hidePreloader();
} 
	     dtWellReportWeather= '</div>';
			 dtWellAllWeather.push(dtWellReportWeather); 
 
document.getElementById("data-well-weather").innerHTML =dtWellAllWeather.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
*/




 
var dtWellAllLithology=[];
	   var dtWellReportLithology='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" > DGR Lithology</div>	';
			 dtWellAllLithology.push(dtWellReportLithology); 
				
		 
	     dtWellReportLithology= '</div>';  
			 dtWellAllLithology.push(dtWellReportLithology); 
document.getElementById("data-well-Lithology").innerHTML =dtWellAllLithology.join(" ");
  
	
 
var dtWellAllFormation=[];
	   var dtWellFormation='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" >DGR  Formation</div>	';
			 dtWellAllFormation.push(dtWellFormation); 
		 
	     dtWellFormation= '</div>';  
			 dtWellAllFormation.push(dtWellFormation); 
document.getElementById("data-well-Formation").innerHTML =dtWellAllFormation.join(" ");
  

$$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Period-Report-DGR-Gas'),
        data: {"txtReportId":""+ReportId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnBitRecord = JSON.parse(data);

 
	   var dtWellReportDGR='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
			 	'<div class="card-title" > DGR Gas</div>	';
			 dtWellAllGas.push(dtWellReportDGR); 

		  for (i = 0; i < objReturnBitRecord.length; i++) { 
	  
	     dtWellReportDGR='<table style="font-size:12px" >	'+
				 '<tbody> '+
				 '<tr>'+
				  '<tr><td width="50%"><b>Peak Gas: <br></b> '+objReturnBitRecord[i].PeakGas+' '+objReturnBitRecord[i].UOMPeakGas+'  </td> <td><b>BG Gas: <br></b> '+objReturnBitRecord[i].BGGas+'  '+objReturnBitRecord[i].UOMBGGas+'  </td></tr> '+
				  '<tr><td width="50%"><b>MG Gas: <br></b> '+objReturnBitRecord[i].MGGas+' '+objReturnBitRecord[i].UOMMGGas+' </td> <td><b>Remark: <br></b> '+objReturnBitRecord[i].Remark+'  </td></tr> '+
				   
				 
				 '</tbody></table>';
				
			 dtWellAllGas.push(dtWellReportDGR); 
			 
      myApp.hidePreloader();
} 
 
	     dtWellReportDGR= '</div>';  
			 dtWellAllGas.push(dtWellReportDGR); 
document.getElementById("data-well-dgr-gas").innerHTML =dtWellAllGas.join(" ");
 
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