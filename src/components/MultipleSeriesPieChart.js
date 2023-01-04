// import { Pie } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



export const MultipleSeriesPieChart = ({ backGroundColor }) => {
    // var config = {
    //     type: 'doughnut',

    //     options: {
    //         responsive: true,

    //         plugins: {
    //             legend: {
    //                 display: false,
    //             },
    //             datalabels: {
    //                 // display: false,
    //                 // align: 'bottom',
    //                 // backgroundColor: '#ccc',
    //                 // borderRadius: 3,
    //                 // font: {
    //                 //     size: 18,
    //                 // },
    //             },
    //         },
    //     }
    // }
    const options = {
        plugins: {
            legend: {
                display: false
            }
        },


    }
    var data = {
        labels: ['Company Policy', 'Working Hours'],
        datasets: [
            {
                data: [60, 40
                ],
                backgroundColor: backGroundColor
            }, {
                data: [50, 50
                ],
                backgroundColor: backGroundColor
            }, {
                data: [
                    40, 60
                ],
                backgroundColor: backGroundColor
            }]
    }
    return (
        <Doughnut data={data} options={options} />
    )
}