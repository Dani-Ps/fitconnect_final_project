import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthProvider';
import { ThemeContext } from '../../../contexts/ThemeProvider';
import { deleteUser } from '../../../service/adminService';
import { fetchAllUsers } from '../../../service/userService';
import { EditUserModal } from './components/modal/editModal';
import { DeleteUserModal } from './components/modal/deleteModal';

import './style.scss';
const Roles = {
    ROLE_ADMIN: 'ROLE_ADMIN',
    ROLE_USER: 'ROLE_USER',
};

const UserTable = () => {
    const { isDark, theme } = useContext(ThemeContext);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRole, setSelectedRole] = useState('ALL');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [userToEdit, setUserToEdit] = useState(null);
    const [totalPages, setTotalPages] = useState(0);

    const { userData } = useAuthContext();
    const token = userData?.token;
    const usersPerPage = 10;

    const fetchUsers = async () => {
        try {
            const response = await fetchAllUsers(token);
            if (Array.isArray(response)) {
                setUsers(response);
                filterUsersByRole(selectedRole, response);
                setTotalPages(Math.ceil(response.length / usersPerPage));
            } else {
                setUsers([]);
                setFilteredUsers([]);
                setTotalPages(0);
                console.error('Expected an array but got:', response);
            }
        } catch (error) {
            setUsers([]);
            setFilteredUsers([]);
            setTotalPages(0);
            console.error('Error getting users:', error.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [selectedRole]);

    const filterUsersByRole = (role, userList) => {
        if (role === 'ALL') {
            setFilteredUsers(userList.slice(0, usersPerPage));
        } else {
            const filtered = userList.filter(user => user.roles.includes(role));
            setFilteredUsers(filtered.slice(0, usersPerPage));
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
        const startIndex = (pageNumber - 1) * usersPerPage;
        const endIndex = startIndex + usersPerPage;
        setFilteredUsers(users.slice(startIndex, endIndex));
    };

    const nextPage = () => {
        const startIndex = currentPage * usersPerPage;
        const endIndex = startIndex + usersPerPage;
        setCurrentPage(currentPage + 1);
        setFilteredUsers(users.slice(startIndex, endIndex));
    };

    const prevPage = () => {
        if (currentPage > 1) {
            const startIndex = (currentPage - 2) * usersPerPage;
            const endIndex = startIndex + usersPerPage;
            setCurrentPage(currentPage - 1);
            setFilteredUsers(users.slice(startIndex, endIndex));
        }
    };

    const handleRoleChange = (event) => {
        const role = event.target.value;
        setSelectedRole(role);

        if (role === 'ALL') {
            setFilteredUsers(users);
        } else {
            setFilteredUsers(users.filter(user => user.roles.includes(role)));
        }
    };

    const handleDelete = async () => {
        try {
            await deleteUser(token, userToDelete.id);
            setUsers(users.filter(user => user.id !== userToDelete.id));
            setFilteredUsers(filteredUsers.filter(user => user.id !== userToDelete.id));
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting user:', error.message);
        }
    };

    const handleEdit = (user) => {
        setUserToEdit(user);
        setShowEditModal(true);
    };

    const closeModal = () => {
        setShowDeleteModal(false);
        setShowEditModal(false);
        setUserToDelete(null);
        setUserToEdit(null);
    };

    const showDetails = (user) => {
        return (window.location.href = `/userDetails/${user.name}`);
    };

    const renderPagination = () => {
        const maxButtons = 10;
        const startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
        const endPage = Math.min(startPage + maxButtons - 1, totalPages);

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return (
            <div className="pagination">
                {startPage > 1 && (
                    <>
                        <button onClick={() => goToPage(1)} style={{ color: theme.teal12 }}>1</button>
                        {startPage > 2 && <span style={{ color: theme.teal12 }} className='page-dots'>...</span>}
                    </>
                )}
                {pages.map(page => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={currentPage === page ? 'active' : ''}
                        style={{ color: theme.teal12 }}
                    >
                        {page}
                    </button>
                ))}
                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <span style={{ color: theme.teal12 }} className='page-dots'>...</span>}
                        <button onClick={() => goToPage(totalPages)} style={{ color: theme.teal12 }}>{totalPages}</button>
                    </>
                )}
            </div>
        );
    };

    return (
        <>
            <div className='role-filter'>
                <label htmlFor="roleSelector" style={{ color: theme.gray12 }} className='stylish-label'>Filter by role: </label>
                <select id="roleSelector" value={selectedRole} onChange={handleRoleChange} className='stylish-select' style={{ background: theme.grayA2, color: theme.gray12 }}>
                    <option value="ALL" style={{ background: theme.gray2 }}>All</option>
                    <option value={Roles.ROLE_USER} style={{ background: theme.gray2 }}>User</option>
                    <option value={Roles.ROLE_ADMIN} style={{ background: theme.gray2 }}>Admin</option>
                </select>
            </div>
            <table style={{ borderColor: theme.teal6 }}>
                <thead style={{ background: theme.tealA3, color: theme.teal12 }}>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={{ background: theme.grayA2, color: theme.gray12 }}>
                    {filteredUsers && filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => showDetails(user)} className='table-button' style={{ borderColor: theme.teal4, backgroundColor: theme.teal4, color: theme.teal12 }}>👁️</button>
                            </td>
                            <td>
                                <button onClick={() => handleEdit(user)} className='table-button' style={{ borderColor: theme.teal4, backgroundColor: theme.teal4, color: theme.teal12 }}>Edit</button>
                                <button onClick={() => {
                                    setUserToDelete(user);
                                    setShowDeleteModal(true);
                                }} className='table-button' style={{ borderColor: theme.teal4, backgroundColor: theme.teal4, color: theme.teal12 }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {renderPagination()}

            {showDeleteModal && (
                <DeleteUserModal
                    user={userToDelete}
                    onDelete={handleDelete}
                    onClose={closeModal}
                />
            )}

            {showEditModal && (
                <EditUserModal
                    user={userToEdit}
                    onUpdate={(updatedUser) => {
                        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
                        setFilteredUsers(filteredUsers.map(user => user.id === updatedUser.id ? updatedUser : user));
                    }}
                    onClose={closeModal}
                    token={token}
                />
            )}
        </>
    );
};

export default UserTable;