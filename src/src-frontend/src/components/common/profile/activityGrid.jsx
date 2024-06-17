import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../../contexts/ThemeProvider';
import { useModalContext } from '../../../contexts/ModalProvider';

import { getActivitiesByUserId } from '../../../service/activityService';

import ActivityDetails from './activityDetails';

import './style.scss';

const ActivityGrid = ({ userId, token }) => {
    const [selectedActivityIndex, setSelectedActivityIndex] = useState(null);
    const [activities, setActivities] = useState([]);
    const { openModal, closeModal, isModalOpen } = useModalContext();
    const { theme } = useContext(ThemeContext);

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
        if (userId && token) {
            fetchActivities();
        }
    }, [userId, token]);

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


    if (!userId || !token) {
        return <div>Please provide valid userId and token</div>;
    }


    return (
        <div className="activity-grid">
            {activities.sort((a, b) => new Date(b.date) - new Date(a.date)).map((activity, index) => (
                <div key={activity.id} className="activity-item" onClick={() => handleOpenModal(index)}>
                    <div className="image-container">
                        <img src={activity.image} alt={activity.title || 'Activity Image'} />
                    </div>
                </div>
            ))}

            {selectedActivityIndex !== null && isModalOpen('activityModal') && (
                <div className="activity-modal" >
                    <div className="activity-modal-content" style={{ borderColor: theme.gray7, background: theme.backgroundGradient, color: theme.teal12 }}>
                        <span className="close" onClick={handleCloseModal} style={{ fontSize: '24px', color: theme.gray12 }}>&times;</span>
                        <ActivityDetails activity={activities[selectedActivityIndex]} userId={userId} />
                        <div className="activity-modal-buttons">
                            <button onClick={handlePrevPost} disabled={selectedActivityIndex === 0} style={{ background: theme.tealA12, borderColor: theme.gray12, color: theme.gray7 }}>Prev</button>
                            <button onClick={handleNextPost} disabled={selectedActivityIndex === activities.length - 1} style={{ background: theme.tealA12, borderColor: theme.gray12, color: theme.gray7 }}>Next</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivityGrid;