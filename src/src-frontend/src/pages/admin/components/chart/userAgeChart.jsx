import React, { useState, useEffect } from 'react';

import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Chart as ChartJS } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { getRelativePosition } from 'chart.js/helpers';
import './style.scss';
import { useAuthContext } from '../../../../contexts/AuthProvider';
import { fetchAllUsers } from '../../../../service/userService';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const UserAgeChart = () => {
    const { userData } = useAuthContext();
    const token = userData?.token;
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetchAllUsers(token);
            if (Array.isArray(response)) {
                setUsers(response);
            } else {
                setUsers([]);
                console.error('Expected an array but got:', response);
            }
        } catch (error) {
            setUsers([]);
            console.error('Error getting users:', error.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Age'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Users'
                },
                beginAtZero: true,
                max: 150,
                ticks: {
                    callback: function (value) {
                        if (Number.isInteger(value)) {
                            return value;
                        }
                    },
                    stepSize: 1
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Distribution of Users by Age'
            },
            legend: {
                display: false
            }
        }
    };

    const ages = users.map(user => user.age);
    const allAges = Array.from({ length: 100 - 18 + 1 }, (_, i) => i + 18);
    const ageCount = allAges.map(age => ages.filter(a => a === age).length);
    const maxUsers = 100;

    const getColor = (age) => {
        if (age >= 18 && age <= 30) return 'rgba(0, 191, 255, 0.5)';  // Azul claro para adultos jóvenes (18-30)
        if (age > 30 && age <= 55) return 'rgba(255, 215, 0, 0.5)';   // Dorado para adultos mayores (31-55)
        if (age > 55) return 'rgba(255, 0, 0, 0.5)';  // Rojo claro para ancianos (56-100)
        return 'rgba(169, 169, 169, 0.5)';  // Gris para edades que no estén en ninguno de los grupos definidos
    };

    const getBorderColor = (age) => {
        if (age >= 18 && age <= 30) return 'rgba(0, 191, 255, 1)';  // Azul claro para adultos jóvenes (18-30)
        if (age > 30 && age <= 55) return 'rgba(255, 215, 0, 1)';   // Dorado para adultos mayores (31-55)
        if (age > 55) return 'rgba(255, 0, 0, 1)';  // Rojo claro para ancianos (56-100)
        return 'rgba(169, 169, 169, 1)';  // Gris para edades que no estén en ninguno de los grupos definidos
    };
    const normalizeData = (data, maxUsers) => {
        const maxCount = Math.max(...data);
        const factor = maxUsers / maxCount;
        return data.map(count => Math.round(count * factor));
    };
    const normalizedAgeCount = normalizeData(ageCount, maxUsers);

    const barChartData = {
        labels: allAges,
        datasets: [{
            label: 'Users by age',
            data: normalizedAgeCount,
            backgroundColor: normalizedAgeCount.map(count => getColor(count)),
            borderColor: normalizedAgeCount.map(count => getBorderColor(count)),
            borderWidth: 1
        }]
    };

    return (
        <>
            <Bar options={options} data={barChartData} />
        </>
    );
};

export default UserAgeChart;