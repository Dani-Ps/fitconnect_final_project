import React, { useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeProvider';

import './style.scss';
const DeleteUserModal = ({ user, onDelete, onClose }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="modal">
            <div className="modal-content" style={{ background: theme.backgroundGradient, color: theme.gray12, borderColor: theme.gray7 }}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2 style={{ color: theme.teal11 }}>Confirm Deletion</h2>
                <p>Are you sure you want to delete the user <span style={{ color: theme.gray10 }}>{user.name}</span>?</p>
                <button onClick={onDelete} style={{ background: theme.teal11, color: theme.gray10 }}>Yes, Delete</button>
                <button onClick={onClose} style={{ background: theme.teal6, color: theme.gray12 }}>Cancel</button>
            </div>
        </div>
    );
};
const DeleteActivityModal = ({ activity, onDelete, onClose }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="modal">
            <div className="modal-content" style={{ background: theme.backgroundGradient, color: theme.gray12, borderColor: theme.gray7 }}>
                <span className="close" onClick={onClose} style={{ fontSize: '24px', color: theme.gray12 }}>&times;</span>
                <h2 style={{ color: theme.teal11 }}>Confirm Deletion</h2>
                <p>Are you sure you want to delete the user <span style={{ color: theme.gray10 }}>{activity.id}</span>?</p>
                <button onClick={onDelete} style={{ background: theme.teal11, color: theme.gray10 }}>Yes, Delete</button>
                <button onClick={onClose} style={{ background: theme.teal6, color: theme.gray12 }}>Cancel</button>
            </div>
        </div>
    );
};

export { DeleteUserModal, DeleteActivityModal };