 
 
///load  
myApp.onPageInit("6-profil-user", function(page){
	
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	console.log(window.location.href);  
	
	const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
	console.log(getLastItem(window.location.href)); 	
	localStorage.setItem('FirstUrl', getLastItem(window.location.href));
	myApp.hidePreloader();
		 });
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		


	
$$(".btnedit").on("click", function(){
	
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
			mainView.router.loadPage('6-edit-data-kesehatan.html'); 
			 
		 
		 
	   myApp.hidePreloader();
		 });
 
});

  
var strToken = localStorage.getItem("LogonToken");

var strUsername = localStorage.getItem("LogonUsername");
var strNip = localStorage.getItem("LogonNip");
var strEMPLOYEE_NAMA = localStorage.getItem("Logon-EMPLOYEE_NAMA");
var strEMPLOYEE_POSIDI = localStorage.getItem("Logon-EMPLOYEE_POSIDI");
var strEMPLOYEE_POSTEXT = localStorage.getItem("Logon-EMPLOYEE_POSTEXT");
var strEMPLOYEE_CC = localStorage.getItem("Logon-EMPLOYEE_CC");
var strEMPLOYEE_LAYER = localStorage.getItem("Logon-EMPLOYEE_LAYER");
var strEMPLOYEESUBGROUP = localStorage.getItem("Logon-EMPLOYEESUBGROUP");
var strEMPLOYEE_EMAIL = localStorage.getItem("Logon-EMPLOYEE_EMAIL");
var strGENDER = localStorage.getItem("Logon-GENDER");
var strISCHIEF = localStorage.getItem("Logon-ISCHIEF");
var strATASAN_USERNAME = localStorage.getItem("Logon-ATASAN_USERNAME");
var strATASAN_NOPEK = localStorage.getItem("Logon-ATASAN_NOPEK");
var strATASAN_POSIDI = localStorage.getItem("Logon-ATASAN_POSIDI");
var strATASAN_EMAIL = localStorage.getItem("Logon-ATASAN_EMAIL");
var strATASAN_LAYER = localStorage.getItem("Logon-ATASAN_LAYER");
var strATASAN_EMPLOYEESUBGROUP = localStorage.getItem("Logon-ATASAN_EMPLOYEESUBGROUP"); 
var COSTCENTERNAME = localStorage.getItem("Logon-COSTCENTERNAME"); 
  
   
 	
		 
		  
	 var dataprofil= []; 
	 var dataatasan= []; 
	 var datatambahan= []; 
						   
							 
	var dataUserp = '<div class="card">'+
					'<div class="card-body">'+
					'<table class="table ">'+
					'<tbody>'+
					'<tr> <td class="py-1" style="color: #0d83e1;"> Username: </td>'+
					'<td colspan="2">'+strUsername+'</td> </tr> '+
                    '<tr><td class="py-1" style="color: #0d83e1;">  Nopek:  </td>'+
                    '<td colspan="2">'+strNip+'</td></tr> '+
					'<tr><td class="py-1" style="color: #0d83e1;">  Nama Lengkap:</td>'+
                    '<td colspan="2">  '+strEMPLOYEE_NAMA+' </td>  </tr> '+
					'<tr> <td class="py-1" style="color: #0d83e1;"> Email:    </td>'+
                    '<td colspan="2">  '+strEMPLOYEE_EMAIL+' </td>  </tr> '+
					 
					'<tr> <td class="py-1" style="color: #0d83e1;"> Title:    </td>'+
                    '<td colspan="2">  '+strEMPLOYEE_POSTEXT+' </td>  </tr> '+
					//'<tr><td class="py-1" style="color: #0d83e1;"> Pos Id:    </td>'+
                    //'<td colspan="2">'+strEMPLOYEE_POSIDI+' </td>  </tr> '+
					'<tr><td class="py-1" style="color: #0d83e1;"> Cost Center:    </td>'+
                    '<td colspan="2">'+strEMPLOYEE_CC+' </td>  </tr> '+ 
					'</tbody>'+
					'<tr><td class="py-1" style="color: #0d83e1;"> Cost Center Name:    </td>'+
                    '<td colspan="2">'+COSTCENTERNAME+' </td>  </tr> '+ 
					'</tbody>'+
					'</table>'+
					'</div>'+
					'</div>';

			 			 
	var dataAtasan =  '<div class="card">'+
					'<div class="card-body table-responsive" >'+
					'<table class="table ">'+
					'<tbody>'+
					'<tr> <td class="py-1" style="color: #0d83e1;"> Username Atasan:</td>'+
                    '<td>'+strATASAN_USERNAME+' </td>  </tr> '+
					//'<tr><td class="py-1" style="color: #0d83e1;"> Nopek Atasan:</td>'+
                    //'<td>'+strATASAN_NOPEK+' </td>  </tr> '+
					'<tr><td class="py-1" style="color: #0d83e1;"> Email Atasan:</td>'+
                    '<td>'+strATASAN_EMAIL+' </td>  </tr> '+
					//'<tr><td class="py-1" style="color: #0d83e1;"> Pos Id Atasan:</td>'+
                    //'<td>  '+strATASAN_POSIDI+' </td>  </tr> '+
					'</tbody>'+
					'</table>'+
					'</div>'+
					'</div>';
			  
				dataprofil.push(dataUserp);
				dataatasan.push(dataAtasan); 
 				
 
	document.getElementById("prof-user").innerHTML = dataprofil.join(" ");	
	document.getElementById("prof-atasan").innerHTML = dataatasan.join(" ");	 			
				  							 							 
			 
   
 myApp.hidePreloader();
}); 
}); 