import React, { useContext } from 'react';
import { ThemeContext } from "../../../../../contexts/ThemeProvider";
import './style.scss';

const DeleteConfirmationModal = ({ onClose, onDelete }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="modal" >
            <div className="modal-content" style={{ background: theme.teal1 }}>
                <p style={{ color: theme.gray12 }}>Are you sure you want to delete this activity?</p>
                <div className="modal-actions">
                    <button onClick={onDelete} style={{ background: theme.teal5, borderColor: theme.teal5, color: theme.teal12 }} className='modal-button'>Delete</button>
                    <button onClick={onClose} style={{ background: theme.teal9, borderColor: theme.teal9, color: theme.gray5 }} className='modal-button'>Cancel</button>
                </div>
            </div>
        </div>
    );
};
export default DeleteConfirmationModal;