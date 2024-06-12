import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthProvider';
import { ThemeContext } from '../../../contexts/ThemeProvider';
import { fetchAllActivities, deleteActivity, patchActivity as updateActivity } from '../../../service/activityService';
import { EditActivityModal } from './components/modal/editModal';
import { DeleteActivityModal } from './components/modal/deleteModal';
import moment from 'moment/moment';
import './style.scss';

const ActivityTable = () => {
    const { isDark, theme } = useContext(ThemeContext);
    const [activities, setActivities] = useState([]);
    const [filteredActivities, setFilteredActivities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [activityToDelete, setActivityToDelete] = useState(null);
    const [activityToEdit, setActivityToEdit] = useState(null);
    const [totalPages, setTotalPages] = useState(0);

    const { userData } = useAuthContext();
    const token = userData?.token;
    const ActivitiesPerPage = 10;

    const fetchActivities = async () => {
        try {
            const response = await fetchAllActivities(token);
            if (Array.isArray(response)) {
                setActivities(response);
                setTotalPages(Math.ceil(response.length / ActivitiesPerPage));
            } else {
                setActivities([]);
                setTotalPages(0);
                console.error('Expected an array but got:', response);
            }
        } catch (error) {
            setActivities([]);
            setTotalPages(0);
            console.error('Error fetching activities:', error);
        }
    };

    useEffect(() => {
        fetchActivities();
    }, []);
    useEffect(() => {
        const startIndex = (currentPage - 1) * ActivitiesPerPage;
        const endIndex = startIndex + ActivitiesPerPage;
        setFilteredActivities(activities.slice(startIndex, endIndex));
    }, [activities, currentPage]);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
        const startIndex = (pageNumber - 1) * ActivitiesPerPage;
        const endIndex = startIndex + ActivitiesPerPage;
        setFilteredActivities(activities.slice(startIndex, endIndex));
    };

    const handleDelete = async () => {
        try {
            await deleteActivity(activityToDelete.id, token);
            setActivities(activities.filter(activity => activity.id !== activityToDelete.id));
            setFilteredActivities(filteredActivities.filter(activity => activity.id !== activityToDelete.id));
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting activity:', error);
        }
    };

    const handleEdit = (activity) => {
        setActivityToEdit(activity);
        setShowEditModal(true);
    };

    const closeModal = () => {
        setShowDeleteModal(false);
        setShowEditModal(false);
        setActivityToDelete(null);
        setActivityToEdit(null);
    };

    const showDetails = (activity) => {
        // Agrega la lógica para mostrar detalles de la actividad
    };

    return (
        <div>
            <table style={{ background: theme.grayA4 }}>
                <thead>
                    <tr>
                        <th style={{ background: theme.tealA12 }}>Title</th>
                        <th>Type</th>
                        <th>Duration</th>
                        <th>Place</th>
                        <th>Date</th>
                        <th>Creator</th>
                        <th>Participants</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredActivities && filteredActivities.map((activity) => (
                        <tr key={activity.id}>
                            <td>{activity.title}</td>
                            <td>{activity.type}</td>
                            <td>{activity.duration}</td>
                            <td>{activity.place}</td>
                            <td>{moment(activity.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                            <td>{activity.creator.name}</td>
                            <td>{activity.participants.map(participant => participant.name).join(', ')}</td>
                            <td>
                                <button onClick={() => showDetails(activity)}>Details</button>
                                <button onClick={() => handleEdit(activity)}>Edit</button>
                                <button onClick={() => {
                                    setActivityToDelete(activity);
                                    setShowDeleteModal(true);
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => goToPage(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {showDeleteModal && (
                <DeleteActivityModal
                    activity={activityToDelete}
                    onDelete={handleDelete}
                    onClose={closeModal}
                />
            )}

            {showEditModal && (
                <EditActivityModal
                    activity={activityToEdit}
                    onUpdate={(updatedActivity) => {
                        setActivities(activities.map(activity => activity.id === updatedActivity.id ? updatedActivity : activity));
                        setFilteredActivities(filteredActivities.map(activity => activity.id === updatedActivity.id ? updatedActivity : activity));
                    }}
                    onClose={closeModal}
                    token={token}
                />
            )}
        </div>
    );
};

export default ActivityTable;