import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeProvider';
import { updateUser } from '../../../../../service/adminService';
import { patchActivity } from '../../../../../service/activityService';
import './style.scss';
const EditUserModal = ({ user, onUpdate, onClose, token }) => {
    const { theme } = useContext(ThemeContext);
    const [userData, setUserData] = useState(user);

    useEffect(() => {
        setUserData(user);
    }, [user]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateUser(token, userData.id, userData);
            onUpdate(userData);
            onClose();
        } catch (error) {
            console.error('Error updating user:', error.message);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content " style={{ background: theme.backgroundGradient, color: theme.gray12, borderColor: theme.gray7 }}>
                <span className="close" onClick={onClose} style={{ fontSize: '24px', color: theme.gray12 }}>&times;</span>
                <h2 style={{ color: theme.teal11 }}>Edit User</h2>
                <form onSubmit={handleSubmit} className='modal-form'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required style={{ borderColor: theme.gray10, color: theme.gray12 }} />
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={userData.age} onChange={handleChange} required style={{ borderColor: theme.gray10, color: theme.gray12 }} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required style={{ borderColor: theme.gray10, color: theme.gray12 }} />
                    <button type="submit" style={{ backgroundColor: theme.teal12, color: theme.gray1 }}>Update</button>
                </form>
            </div>
        </div>
    );
};

const EditActivityModal = ({ activity, onUpdate, onClose, token }) => {
    const { theme } = useContext(ThemeContext);
    const [activityData, setActivityData] = useState(activity);

    useEffect(() => {
        if (activity) {
            setActivityData(activity);
        }
    }, [activity]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setActivityData(prevActivityData => ({ ...prevActivityData, [name]: value })); // Cambio aquí
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await patchActivity(activityData.id, activityData, token);
            onUpdate(activityData);
            onClose();
        } catch (error) {
            console.error('Error updating activity:', error.message); // Cambio aquí
        }
    };

    return (
        <div className="modal">
            <div className="modal-content " style={{ background: theme.backgroundGradient, color: theme.gray12, borderColor: theme.gray7 }}>
                <span className="close" onClick={onClose} style={{ fontSize: '24px', color: theme.gray12 }}>&times;</span>
                <h2 style={{ color: theme.teal11 }}>Edit Activity</h2>
                <form onSubmit={handleSubmit} className='modal-form'>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={activityData.title} onChange={handleChange} required style={{ borderColor: theme.gray10, color: theme.gray12 }} />
                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" value={activityData.type} onChange={handleChange} required style={{ borderColor: theme.gray10, color: theme.gray12 }} />
                    <label htmlFor="duration">Duration:</label>
                    <input type="text" id="duration" name="duration" value={activityData.duration} onChange={handleChange} required style={{ borderColor: theme.gray10, color: theme.gray12 }} />
                    <label htmlFor="place">Place:</label>
                    <input type="text" id="place" name="place" value={activityData.place} onChange={handleChange} required style={{ borderColor: theme.gray10, color: theme.gray12 }} />
                    <button type="submit" style={{ backgroundColor: theme.teal12, color: theme.gray1 }}>Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditActivityModal;

export { EditUserModal, EditActivityModal };