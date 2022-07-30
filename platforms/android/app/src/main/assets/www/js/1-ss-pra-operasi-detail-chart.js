   
///load service Page  
myApp.onPageInit("1-ss-pra-operasi-detail-chart", function(page){
	 
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

 
  
 var dtWellAllDetailChart = [];
	 
var OperatorName = localStorage.getItem("OperatorName");
var ProjectName = localStorage.getItem("ProjectName");

var dataSeismicId = localStorage.getItem("dataSeismicId"); 
var dataFocusItem = localStorage.getItem("dataFocusItem"); 
  
document.getElementById("strNameProjChart").innerHTML = ProjectName;
 
  $$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Seismic-Schedule-Detail'),
        data: {"txtSeismicId":""+dataSeismicId+"","txtFocusItem":""+dataFocusItem+"" } ,
   
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnPraChart = JSON.parse(data);

 
 var head='<div class="card ">'+
              '  <div class="card-body" > '+
			    
				'<table class="table">'+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				'<td>Activity Detail</td>'+
				'	<td>Progress</td>'+
				'<td>Remarks</td>'+
			 
				'</tr>';
	   
			 dtWellAllDetailChart.push(head); 
		  for (i = 0; i < objReturnPraChart.length; i++) { 
 
	
	   var dtWelldtl2='<tr  >'+
				'<td>'+objReturnPraChart[i].FocusItemDetail+'</td>'+
				'<td>'+objReturnPraChart[i].FocusItemProgress+'%</td>'+
				'<td>'+objReturnPraChart[i].FocusItemStatus+'  </td>'+
				
				'</tr>';
				 
				
	   
	    
			 dtWellAllDetailChart.push(dtWelldtl2); 
			 
      myApp.hidePreloader();
} 
 var foot='</table>  </div> </div>';
			 dtWellAllDetailChart.push(foot); 
document.getElementById("data-seismic-pra-detail-chart").innerHTML =dtWellAllDetailChart.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 




var chartSeismic2;


 function CreateChart(categories, series1, namaBar) { 
    chartSeismic2 = new Highcharts.Chart({
        chart: {
            renderTo: 'container-bar-seismic', 
		
            type: 'bar',
            marginRight:  0,
            marginBottom: 150 
        },

    title: {
        text: ''
    },
    xAxis: {
        categories: categories
    },
    yAxis: { 
	 max: 100,
        min: 0,
        title: {
            text: 'Percentage (%)'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray',
                textOutline: 'none'
            }
        }
    }, 
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
       // pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        pointFormat: '{point.y} %'
    },
    plotOptions: {
        bar: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                format: '{point.y} %'
            }, 
        }
    },		
       
                series: [
                    {
                        name: namaBar,
                        data: series1  //Binding data
                    } 
                ],
    });
} ;
 var dataChartSeismic2 =[];
 var dataChartSeismic3 =[];
 
 
    $$.ajax({
       
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Seismic-Schedule-Detail'),
        data: {"txtSeismicId":""+dataSeismicId+"","txtFocusItem":""+dataFocusItem+"" } ,
   //     dataType: "json", 
   
    
        success: function(data) {
      var objReturn = JSON.parse(data);

  console.log(objReturn);

		   for (i = 0; i < objReturn.length; i++) {
		 	  var vBar=  parseInt(objReturn[i].FocusItemProgress); 
		 	  dataChartSeismic2.push(vBar); 
		 	  var vCat=   objReturn[i].FocusItemDetail ; 
		 	  dataChartSeismic3.push(vCat); 
		  }
		 	  
   CreateChart(dataChartSeismic3, dataChartSeismic2, dataFocusItem);
			 
        },
        cache: false
    });
 

}); 