   
///load service Page  
myApp.onPageInit("1-ed-pra-operasi-detail-chart", function(page){
	 
 

var dataWellIdChart = localStorage.getItem("dataWellIdChart");
var dataFocusItem = localStorage.getItem("dataFocusItem"); 
var OperatorName = localStorage.getItem("OperatorName"); 
var FieldName = localStorage.getItem("FieldName"); 
   
  
var WellName = localStorage.getItem("dataWellName"); 
 
 var dtWellAllDetailChart = [];
document.getElementById("strNamePraChart").innerHTML = WellName;
//document.getElementById("strOperatorNameChart").innerHTML = OperatorName;
document.getElementById("strFieldNameChart").innerHTML = FieldName;
  
 $$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Schedule-Detail'),
        data: {"txtWellId":""+dataWellIdChart+"","txtFocusItem":""+dataFocusItem+"" } ,
   
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnPraChart = JSON.parse(data);

 
 var head='<div class="card ">'+
              '  <div class="card-body" > '+
			    
				'<table class="table">'+
				'<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
				'<td>Activity detail</td>'+
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
document.getElementById("data-well-pra-detail-chart").innerHTML =dtWellAllDetailChart.join(" ");
 
    },

    error: function (xhr, status) {
      console.log(' failed')
      myApp.hidePreloader();
    },
    complete: function (xhr, status) {
      myApp.hidePreloader();
    }
  });
 


 
var chart2;


 function CreateChart(categories, series1, namaBar) { 
    chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'container-bar', 
		
            type: 'column',
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
        headerFormat: '<b>{series.name}</b><br/>',
       // pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        pointFormat: '{point.y} %'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
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
 var dataChart2 =[];
 var dataChart3 =[];
 
 
    $$.ajax({
       
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Schedule-Detail'),
        data: {"txtWellId":""+dataWellIdChart+"","txtFocusItem":""+dataFocusItem+"" } ,
   //     dataType: "json", 
   
    
        success: function(data) {
      var objReturn = JSON.parse(data);

  console.log(objReturn);

		   for (i = 0; i < objReturn.length; i++) {
		 	  var vBar=  parseInt(objReturn[i].FocusItemProgress); 
		 	  dataChart2.push(vBar); 
		 	  var vCat=   objReturn[i].FocusItemDetail ; 
		 	  dataChart3.push(vCat); 
		  }
		 	  
   CreateChart(dataChart3, dataChart2, dataFocusItem);
			 
        },
        cache: false
    });
 

}); 