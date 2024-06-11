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

    const getColor = (count) => {
        if (count > 15) return 'rgba(255, 99, 132, 0.5)';  // Rojo para >15
        if (count > 10) return 'rgba(255, 159, 64, 0.5)';  // Naranja para 11-15
        if (count > 5) return 'rgba(255, 205, 86, 0.5)';   // Amarillo para 6-10
        return 'rgba(75, 192, 192, 0.5)';                  // Verde para 0-5
    };

    const getBorderColor = (count) => {
        if (count > 15) return 'rgba(255, 99, 132, 1)';  // Rojo para >15
        if (count > 10) return 'rgba(255, 159, 64, 1)';  // Naranja para 11-15
        if (count > 5) return 'rgba(255, 205, 86, 1)';   // Amarillo para 6-10
        return 'rgba(75, 192, 192, 1)';                  // Verde para 0-5
    };

    const barChartData = {
        labels: allAges,
        datasets: [{
            label: 'Users by age',
            data: ageCount,
            backgroundColor: ageCount.map(count => getColor(count)),
            borderColor: ageCount.map(count => getBorderColor(count)),
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