import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const PopulationChart = ({ data }) => {
    const years = data.map(item => item.year);
    const population = data.map(item => item.value);

    const chartData = {
        labels: years,
        datasets: [
            {
                label: 'Population',
                data: population,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div>
            <Line data={chartData} options={{ responsive: true }} />
        </div>
    );
};

export default PopulationChart;
