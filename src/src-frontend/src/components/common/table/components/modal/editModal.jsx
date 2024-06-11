import React, { useState, useEffect } from 'react';
import { updateUser } from '../../../../../service/adminService';
import './style.scss';
const EditUserModal = ({ user, onUpdate, onClose, token }) => {
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
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={userData.age} onChange={handleChange} required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditUserModal;