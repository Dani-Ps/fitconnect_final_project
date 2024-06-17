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

import './style.scss';

const ActivityDetails = ({ activity, userId }) => {
    const { theme, isDark } = useContext(ThemeContext);

    const base64ToUrl = (base64) => {
        if (base64.startsWith('data:image/jpeg;base64,')) {
            return base64;
        }
        return `data:image/jpeg;base64,${base64}`;
    };

    return (
        <div className='activity-details-container'>
            <div className='publication'>
                <div className='publication-header'>
                    <div className='picture-name-container'>
                        <ProfilePictureComponent source={activity.creator.image} size="40px" />
                        <Link href={`/profile/${activity.creator.id}`} className='creator-name' style={{ color: theme.tealA11 }}>
                            {activity.creator.name}
                        </Link>
                    </div>
                    <div className='menu-container'>
                        {activity.creator.id === userId && <PublicationMenuButton activity={activity} />}
                    </div>
                </div>
                <div className='img-container'>
                    <img src={base64ToUrl(activity.image)} alt={`${activity.type} activity`} />
                </div>
                <div className='activity-details'>
                    <h3 id="title" style={{ color: theme.tealA12 }}>{activity.title}</h3>
                    <p style={{ color: theme.tealA11 }}>Type: <span style={{ color: theme.gray12 }}>{activity.type}</span></p>
                    <p style={{ color: theme.tealA11 }}>Duration: <span style={{ color: theme.gray12 }}>{activity.duration}</span></p>
                    <p style={{ color: theme.tealA11 }}>Place: <span style={{ color: theme.gray12 }}>{activity.place}</span></p>
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