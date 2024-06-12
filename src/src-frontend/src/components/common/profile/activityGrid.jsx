import React, { useContext, useEffect, useState } from 'react';
import { useModalContext } from '../../../contexts/ModalProvider';
import { getActivitiesByUserId } from '../../../service/activityService';
import ActivityDetails from './activityDetails';
import './style.scss';
const ActivityGrid = ({ userId, token }) => {
    const [selectedActivityIndex, setSelectedActivityIndex] = useState(null);
    const [activities, setActivities] = useState([]);
    const { openModal, closeModal, isModalOpen } = useModalContext();

    const fetchActivities = async () => {
        try {
            const response = await getActivitiesByUserId(userId, token);
            if (Array.isArray(response)) {
                setActivities(response);
            } else {
                setActivities([]);
                console.error('Expected an array but got:', response);
            }
        } catch (error) {
            setActivities([]);
            console.error('Error fetching activities:', error);
        }
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    const handleOpenModal = (activityIndex) => {
        setSelectedActivityIndex(activityIndex);
        openModal('activityModal');
    };

    const handleCloseModal = () => {
        setSelectedActivityIndex(null);
        closeModal('activityModal');
    };

    const handleNextPost = () => {
        const nextIndex = selectedActivityIndex + 1;
        if (nextIndex < activities.length) {
            setSelectedActivityIndex(nextIndex);
        }
    };

    const handlePrevPost = () => {
        const prevIndex = selectedActivityIndex - 1;
        if (prevIndex >= 0) {
            setSelectedActivityIndex(prevIndex);
        }
    };

    return (
        <div className="activity-grid">
            {activities.map((activity, index) => (
                <div key={activity.id} className="activity-item" onClick={() => handleOpenModal(index)}>
                    <div className="image-container">
                        <img src={activity.image} alt={activity.title} />
                    </div>
                </div>
            ))}

            {selectedActivityIndex !== null && isModalOpen('activityModal') && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <ActivityDetails activity={activities[selectedActivityIndex]} userId={userId} />
                        <div className="modal-buttons">
                            <button onClick={handlePrevPost} disabled={selectedActivityIndex === 0}>Anterior</button>
                            <button onClick={handleNextPost} disabled={selectedActivityIndex === activities.length - 1}>Siguiente</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivityGrid;