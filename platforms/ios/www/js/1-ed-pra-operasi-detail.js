   
///load service Page  
myApp.onPageInit("1-ed-pra-operasi-detail", function(page){
	 
 

var WellId = localStorage.getItem("WellId");
var WellName = localStorage.getItem("WellName"); 
var OperatorName = localStorage.getItem("OperatorName"); 
var FieldName = localStorage.getItem("FieldName"); 
  
  
 
 var dtWellAllDetail = [];
document.getElementById("strNamePra").innerHTML = WellName;
document.getElementById("strOperatorName").innerHTML = OperatorName;
document.getElementById("strFieldName").innerHTML = FieldName;
	 
 $$.ajax({ 
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Schedule'),
        data: {"txtWellId":""+WellId+""} ,
    
    timeout: (5 * 60 * 1000),
    success: function (data, status, xhr) {

      console.log(data);
      var objReturnPra = JSON.parse(data);

 
  var head='<div class="card  " style="padding: 10px;margin: 10px 10px 0px 10px;">'+
	   
	   '<table class="table">'+
			'	<tr style="background:linear-gradient(to right,#63cad4, #047edf);color:#fff;">'+
			'	<td>Rencana Kegiatan</td>'+
			'	<td>Progress</td>'+
			'	<td>Button</td>'+
			'	</tr>';
			 dtWellAllDetail.push(head); 
 
			 
		  for (i = 0; i < objReturnPra.length; i++) { 
var selisih =100-parseInt(objReturnPra[i].FocusItemProgressInt);


			 var percen=parseInt(objReturnPra[i].FocusItemProgressInt);
			if (percen <50)
			{
				var segment="donut-segment-min";
				var txtSegment="donut-text-min";
			}else if (percen >=50 && percen <100)
			{
				var segment="donut-segment-mid";
				var txtSegment="donut-text-mid";
			}else{
				var segment="donut-segment-max";
				var txtSegment="donut-text-max";
			}
			
			
	   var dtWelldtl=
			'	<tr class=" ">'+
			'	<td>'+objReturnPra[i].FocusItem+'</td>'+
			'	<td  >'+
			
'<div class="svg-item">'+
 ' <svg width="50px" height="100%" viewBox="0 0 40 40" class="donut">'+
  '  <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>'+
   ' <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>'+
   ' <circle class="donut-segment '+segment+'" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="'+parseInt(objReturnPra[i].FocusItemProgressInt)+'  '+selisih+'" stroke-dashoffset="25"></circle>'+
   ' <g class="donut-text '+txtSegment+'">'+

    '  <text y="50%" transform="translate(0, 2)">'+
     '   <tspan x="50%" text-anchor="middle" class="donut-percent">'+objReturnPra[i].FocusItemProgress+' </tspan>   '+
     ' </text>'+ 
   ' </g>'+
 ' </svg>'+
'</div>'+
			'</td>'+
				'<td><label  class="btn-ed-pra-operasi-detail-chart badge badge-info"  dataWellName="'+WellName+'" data-id="'+WellId+'"  data-focus="'+objReturnPra[i].FocusItem+'" >Detail</label></td>'+
				'</tr>'; 
				
			
			 dtWellAllDetail.push(dtWelldtl); 
			 
      myApp.hidePreloader();
} 
 var foot='	</table>'; 
			 dtWellAllDetail.push(foot); 
document.getElementById("data-well-pra-detail").innerHTML =dtWellAllDetail.join(" ");

 $$('.btn-ed-pra-operasi-detail-chart').on('click', function () {
	   var dataWellIdChart  = $$(this).attr("data-id");
	   var dataFocusItem  = $$(this).attr("data-focus");  
	   var dataWellName  = $$(this).attr("dataWellName");  
 
  mainView.router.loadPage('1-ed-pra-operasi-detail-chart.html');


	 localStorage.setItem('dataWellIdChart', dataWellIdChart);
	 localStorage.setItem('dataFocusItem', dataFocusItem); 
	 localStorage.setItem('dataWellName', dataWellName); 
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



/*
var chart;

$(document).ready(function() {

    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container-donut',
			  plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
		
            type: 'pie',
            marginRight:  0,
            marginBottom: 150, 
            events: {
                load: requestData
            }
        },
        title: {
            text: ' ',
            x: -20 //center
        },
        xAxis: {
            categories: [1,2,3,4,5]
        },
        yAxis: {
            title: {
                text: ' '
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
		
    tooltip: {
        pointFormat: 'Focus Item Progress :<b> {point.y}%</b> <br>Percentage: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: ' %'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
               enabled: false
            },
            showInLegend: true
         }
     },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 250,
            borderWidth: 0
        },
        series: [{ 
	//minPointSize: 10,
        innerSize: '20%',
      //  zMin: 0,
        data: []
    }]
    });
});

 var dataChart = [];
function requestData() {
    $$.ajax({
       
 type: "POST",
        url:  myApp.getWebApi('APPS-GET-Well-Schedule'),
        data: {"txtWellId":""+WellId+""} ,
   //     dataType: "json", 
   
    
        success: function(data) {
      var objReturn = JSON.parse(data);

  console.log(objReturn);

		   for (i = 0; i < objReturn.length; i++) {
		 	  var A={name: objReturn[i].FocusItem,y: parseInt(objReturn[i].FocusItemProgressInt) }; 
		 	  dataChart.push(A); 
		  }
		 	  
  console.log(dataChart);
            chart.addSeries({
               innerSize: '20%',
              data: dataChart
            });
        },
        cache: false
    });
}
*/
}); 