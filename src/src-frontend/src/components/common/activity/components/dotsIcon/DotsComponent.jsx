import React, { useContext, useState } from 'react';

import { ThemeContext } from '../../../../../contexts/ThemeProvider';
import { useAuthContext } from '../../../../../contexts/AuthProvider';
import { useModalContext } from '../../../../../contexts/ModalProvider';
import { deleteActivity } from '../../../../../service/activityService';

import { DotsIconClear } from '../icon/activityIcon-clear';
import { DotsIconDark } from '../icon/activityIcon-dark';
import { TrashIcon, EditIcon } from '../../../../../assest/icon/publicationOptions';
import PatchActivityForm from '../patchActivity/patchActivityCard';
import DeleteConfirmationModal from '../modal/DeleteConfirmationModal';
import './style.scss';


const PublicationMenuButton = ({ activity }) => {
    const { isDark, theme } = useContext(ThemeContext);
    const { userData } = useAuthContext();
    const { openModal, closeModal, isModalOpen } = useModalContext();
    const token = userData?.token;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [activityToDelete, setActivityToDelete] = useState(null);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleEditActivity = () => {
        setIsMenuOpen(false)
        setIsEditing(true);
        openModal('editModal');
    };

    const handleOpenDeleteModal = (activity) => {
        setIsMenuOpen(false)
        setActivityToDelete(activity);
        openModal('deleteModal');
    };

    const handleCloseDeleteModal = () => {
        closeModal('deleteModal');
    };

    const handleDeleteActivity = async () => {
        try {
            await deleteActivity(activityToDelete.id, token);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting activity:', error.message);
        }
    };

    const dotsIcon = isDark ? <DotsIconDark /> : <DotsIconClear />;

    return (
        <div className="publication-menu-button">
            <button onClick={handleMenuToggle}>
                {dotsIcon}
            </button>
            {isMenuOpen && (
                <div className="dropdown-menu" style={{ backgroundColor: theme.colorBackground }}>
                    <div className="dropdown-item" style={{ borderColor: theme.gray6 }} onClick={handleEditActivity}>
                        <EditIcon />
                        <span style={{ color: theme.gray11 }}>Edit</span>
                    </div>
                    <div className="dropdown-item" style={{ borderColor: theme.gray6 }} onClick={() => handleOpenDeleteModal(activity)}>
                        <TrashIcon />
                        <span style={{ color: theme.gray11 }}>Delete</span>
                    </div>
                </div>
            )}
            {isEditing && (
                <PatchActivityForm
                    activity={activity}
                    closeModal={() => {
                        setIsEditing(false);
                        closeModal('editModal');
                    }}
                />
            )}
            {isModalOpen('deleteModal') && (
                <DeleteConfirmationModal
                    activity={activityToDelete}
                    onDelete={handleDeleteActivity}
                    onClose={handleCloseDeleteModal}
                />
            )}
        </div>
    );
};

export default PublicationMenuButton;