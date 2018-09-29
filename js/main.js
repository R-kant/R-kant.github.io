 $(document).ready(function () {

 	$('.button-collapse').sideNav({
 		closeOnClick:true
 	});
	$('.slider').slider({
	indicators:false,
	transition:500,
	interval:6000,
	height:"100vh"
    });
    
	$('.modal').modal();
//init carousel
//$('.carousel-slider').carousel({fullWidth:true});
$('.scrollspy').scrollSpy();
 var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["C", "C++", "C#", "Java", "HTML", "JavaScript", "CSS"],
        datasets: [{
            label: "Languages I am good at",
            backgroundColor: '#AB47BC',
            borderColor: '#AB47BC',
            data: [98, 96.5, 83.5, 92.99, 99, 85.6, 92.3],
        }]
    },

    // Configuration options go here
    options: {
    	  scales: {
        xAxes: [{
            barPercentage: 0.4
        }],
         yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
        }]
    }
    }
});

 });
