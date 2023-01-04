
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const data = {
    labels: ['skill-1', 'skill-2', 'skill-3', 'skill-4', 'skill-5'],
    datasets: [
        {
            label: 'Global',
            data: [10, 8, 9, 8, 6],
            backgroundColor: 'rgba(17, 178, 184, 0.4)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: 'Candidate',
            data: [7, 6, 9, 7, 6],
            backgroundColor: 'rgba(19, 63, 125, 0.4)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,

            strokeColor: "#000000",
            pointColor: "#000000",
            pointHighlightStroke: "#000000",
        },
    ],
};
const options = {
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        r: {
            max: 10,
            min: 0,
            ticks: {
                stepSize: 1,
                textStrokeColor: 'black',
                color: 'black',
                // backdropColor: 'rgb(47, 56, 62,)',
                display: true
            },
            angleLines: {
                color: ' rgba(155, 155, 155, 0.1)'
            },
            pointLabels: {
                color: '#000000',
                font: {
                    size: 12,
                    family: 'Manrope',
                    style: 'normal',
                    weight: 400
                }
            },
            grid: {
                color: "#9B9B9B",
                circular: true
            },
            gridLines: {
                color: "#9B9B9B",
            },
        },
    }
}
export function Rad() {
    return <Radar data={data} options={options} />;
}
