$(function () {/*from   w ww .  ja va2 s  . c o  m*/
    var ctx = document.getElementById("chart-donut").getContext('2d');
    var data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#FFB946',
                '#7197FE',
                '#F7685B',
            ],
        }],
        labels: [
            'Active',
            'Completed',
            'Ended'
        ]
    };
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 10
                }
            }
        }
    });

    
    var ctx_2 = document.getElementById("chart-line").getContext('2d');
    var data_2 = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#FFB946',
                '#7197FE',
                '#F7685B',
            ],
        }],
        labels: [
            'Active',
            'Completed',
            'Ended'
        ]
    };
    var myDoughnutChart_2 = new Chart(ctx_2, {
        type: 'line',
        data: data_2,
        options: {
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12
                }
            }
        }
    });




});