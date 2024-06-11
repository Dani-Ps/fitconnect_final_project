import React, { useState, useEffect } from 'react';
import { deleteUser } from '../../../../../service/adminService';

import './style.scss';
const DeleteUserModal = ({ user, onDelete, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete the user {user.name}?</p>
                <button onClick={onDelete}>Yes, Delete</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default DeleteUserModal;