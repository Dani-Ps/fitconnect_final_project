import React, { useState, useEffect } from 'react';

import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Chart as ChartJS } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getRelativePosition } from 'chart.js/helpers';
import './style.scss';
import { useAuthContext } from '../../../../contexts/AuthProvider';
import { fetchAllActivities } from '../../../../service/activityService';

ChartJS.register(CategoryScale, LinearScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const ActivityLineChart = () => {
    const { userData } = useAuthContext();
    const token = userData?.token;
    const [activities, setActivities] = useState([]);

    const fetchActivities = async () => {
        try {
            const response = await fetchAllActivities(token);
            if (Array.isArray(response)) {
                setActivities(response);
            } else {
                setActivities([]);
                console.error('Expected an array but got:', response);
            }
        } catch (error) {
            setActivities([]);
            console.error('Error getting activities:', error.message);
        }
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    const prepareChartData = () => {
        const activityCounts = {};
        activities.forEach(activity => {
            const date = activity.date.split('T')[0]; // Assuming date is in ISO format
            if (!activityCounts[date]) {
                activityCounts[date] = 0;
            }
            activityCounts[date]++;
        });

        return {
            labels: Object.keys(activityCounts),
            datasets: [{
                label: 'Número de actividades por fecha',
                data: Object.values(activityCounts),
                backgroundColor: 'rgba(0, 191, 255, 0.5)',
                borderColor: 'rgba(0, 191, 255, 0.5)',
                borderWidth: 1
            }]
        };
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Fecha'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Número de actividades'
                }
            }
        }
    };

    return (
        <>
            <Line options={options} data={prepareChartData()} />
        </>
    );
};

export default ActivityLineChart;