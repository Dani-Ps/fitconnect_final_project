import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// CONTEXTS
import { ThemeContext } from '../../../contexts/ThemeProvider';
import { useAuthContext } from '../../../contexts/AuthProvider';
// SERVICES
import { getActivitiesByUserId } from '../../../service/activityService';
// COMPONENTS
import ProfilePictureComponent from '../../layout/navbar/components/profilePicture/profilePicture';
import PublicationMenuButton from '../activity/components/dotsIcon/DotsComponent';

const ActivityDetails = ({ activity, userId }) => {
    const { theme, isDark } = useContext(ThemeContext);

    const base64ToUrl = (base64) => {
        if (base64.startsWith('data:image/jpeg;base64,')) {
            return base64;
        }
        return `data:image/jpeg;base64,${base64}`;
    };

    return (
        <div className='publication-container'>
            <div className='publication'>
                <div className='publication-header'>
                    <div className='picture-name-container'>
                        <ProfilePictureComponent source={activity.creator.image} size="40px" />
                        <a href={`/profile/${activity.creator.id}`} className='creator-name'>
                            {activity.creator.name}
                        </a>
                    </div>
                    <div className='menu-container'>
                        {activity.creator.id === userId && <PublicationMenuButton activity={activity} />}
                    </div>
                </div>
                <div className='img-container'>
                    <img src={base64ToUrl(activity.image)} alt={`${activity.type} activity`} />
                </div>
                <div className='activity-details'>
                    <h3 id="title">{activity.title}</h3>
                    <p>Type: <span>{activity.type}</span></p>
                    <p>Duration: <span>{activity.duration}</span></p>
                    <p>Place: <span>{activity.place}</span></p>
                </div>
                <div className='activity-participants'>
                    {activity.participants.map((participant) => (
                        <a key={participant.id} href={`/profile/${participant.id}`} className='participant-name'>
                            {participant.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivityDetails;