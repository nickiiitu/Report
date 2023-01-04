import React from "react";
import { Doughnut } from "react-chartjs-2";
// import Data from "./Data.json";
const data = {
    // labels: ["Red", "Green", "Yellow"],
    datasets: [
        {
            data: [500, 500, 500],
            backgroundColor: ["#75E1E4", "#11B2B8", "#133F7D"],
            // hoverBackgroundColor: ["red", "#FFCE56", "lightgreen"]
        }
    ],
    options: {
        rotation: -90,
        circumference: 180,
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        },
        cutoutPercentage: 70,
        responsive: true
    }
};

export const SpeedoMeterChart = () => {

    return (
        <Doughnut data={data} options={data.options} height="155px" width="263px" margin="auto" />

    );
}





