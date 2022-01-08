// chart js
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const tempCtx = $('#tempChart');
const humCtx = $('#humChart');
// 
const Data = {
    datasets: [{
        label: 'Temprature',
        backgroundColor: 
        [
            'rgb(242, 13, 13)',
        
        ],
        borderColor: [
            '#000',
    
        ],
        data: [{ x: '2016-12-25', y: 20 }, { x: '2016-12-26', y: 15 }, { x: '2016-12-27', y: 30 }, { x: '2016-12-28', y: 28 }, { x: '2016-12-29', y: 35 }],
        borderWidth:2,
        borderColor: 'rgb(242, 13, 13)'
    },
    {
        label: 'Humidity',
        backgroundColor: 
        [
            'rgb(11, 142, 11)',
        
        ],
        borderColor: [
            '#000',
    
        ],
        data: [{ x: '2016-12-25', y: 10 }, { x: '2016-12-26', y: 40 }, { x: '2016-12-27', y: 20 }, { x: '2016-12-28', y: 40 }, { x: '2016-12-29', y: 15 }],
        borderWidth:2,
        borderColor: 'rgb(11, 142, 11)'
    }
]
};

const tempConfig = {
    type: 'line',
    data: Data,
    
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {color: '#ccc'}
            },
            x:{
                grid: {color: '#ccc'}
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
};
const tempChart = new Chart(tempCtx, tempConfig);

// for humidity
// const humidData = {
//     datasets: [{
//         label: 'Humidity chart',
//         backgroundColor:
//             [
//                 'rgba(255, 99, 132, 0.2)',

//             ],
//         borderColor: [
//             'rgba(255, 99, 132, 1)',

//         ],
//         data: [{ x: '2016-12-25', y: 20 }, { x: '2016-12-26', y: 15 }, { x: '2016-12-27', y: 30 }, { x: '2016-12-28', y: 28 }, { x: '2016-12-29', y: 35 }],
//         borderWidth: 2,
//         borderColor: 'hsl(120deg 52% 38%)'
//     }]
// };
// const humConfig = {
//     type: 'line',
//     data: humidData,

//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//     }
// };
// const humidChart = new Chart(humCtx, humConfig)

