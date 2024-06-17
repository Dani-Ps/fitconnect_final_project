import React, { useState, useEffect, useContext } from 'react';

import { useAuthContext } from '../../../contexts/AuthProvider';
import { ThemeContext } from '../../../contexts/ThemeProvider';
import { fetchAllActivities, deleteActivity, patchActivity as updateActivity } from '../../../service/activityService';
import { EditActivityModal } from './components/modal/editModal';
import { DeleteActivityModal } from './components/modal/deleteModal';
import moment from 'moment/moment';
import './style.scss';

const ActivityTable = () => {
    const { theme } = useContext(ThemeContext);
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
    const activitiesPerPage = 10;

    const fetchActivities = async () => {
        try {
            const response = await fetchAllActivities(token);
            if (Array.isArray(response)) {
                setActivities(response);
                setTotalPages(Math.ceil(response.length / activitiesPerPage));
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
        const startIndex = (currentPage - 1) * activitiesPerPage;
        const endIndex = startIndex + activitiesPerPage;
        setFilteredActivities(activities.slice(startIndex, endIndex));
    }, [activities, currentPage]);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
        const startIndex = (pageNumber - 1) * activitiesPerPage;
        const endIndex = startIndex + activitiesPerPage;
        setFilteredActivities(activities.slice(startIndex, endIndex));
    };

    const nextPage = () => {
        const startIndex = currentPage * activitiesPerPage;
        const endIndex = startIndex + activitiesPerPage;
        setCurrentPage(currentPage + 1);
        setFilteredActivities(activities.slice(startIndex, endIndex));
    };

    const prevPage = () => {
        if (currentPage > 1) {
            const startIndex = (currentPage - 2) * activitiesPerPage;
            const endIndex = startIndex + activitiesPerPage;
            setCurrentPage(currentPage - 1);
            setFilteredActivities(activities.slice(startIndex, endIndex));
        }
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
    };
    const renderPagination = () => {
        const maxButtons = 10;
        const startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
        const endPage = Math.min(startPage + maxButtons - 1, totalPages);

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return (
            <div className="pagination">
                {startPage > 1 && (
                    <>
                        <button onClick={() => goToPage(1)} style={{ color: theme.teal12 }}>1</button>
                        {startPage > 2 && <span style={{ color: theme.teal12 }} className='page-dots'>...</span>}
                    </>
                )}
                {pages.map(page => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={currentPage === page ? 'active' : ''}
                        style={{ color: theme.teal12 }}
                    >
                        {page}
                    </button>
                ))}
                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <span style={{ color: theme.teal12 }} className='page-dots'>...</span>}
                        <button onClick={() => goToPage(totalPages)} style={{ color: theme.teal12 }}>{totalPages}</button>
                    </>
                )}
            </div>
        );
    };
    return (
        <>
            <table>
                <thead style={{ background: theme.tealA3, color: theme.teal12 }}>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Duration</th>
                        <th>Place</th>
                        <th>Date</th>
                        <th>Creator</th>
                        <th>Participants</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={{ background: theme.grayA2, color: theme.gray12 }}>
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
                                <button onClick={() => showDetails(activity)} className='table-button' style={{ borderColor: theme.teal4, backgroundColor: theme.teal4, color: theme.teal12 }}>👁️</button>
                                <button onClick={() => handleEdit(activity)} className='table-button' style={{ borderColor: theme.teal4, backgroundColor: theme.teal4, color: theme.teal12 }}>Edit</button>
                                <button onClick={() => {
                                    setActivityToDelete(activity);
                                    setShowDeleteModal(true);
                                }} className='table-button' style={{ borderColor: theme.teal4, backgroundColor: theme.teal4, color: theme.teal12 }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {renderPagination()}


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
        </>
    );
};

export default ActivityTable;