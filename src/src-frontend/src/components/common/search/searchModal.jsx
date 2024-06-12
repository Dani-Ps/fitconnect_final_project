import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../../contexts/AuthProvider';
import { fetchAllUsers, addFriend } from '../../../service/userService';
import { useModalContext } from '../../../contexts/ModalProvider';
import './style.scss';

const SearchModal = () => {
    const { userData } = useAuthContext();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const { closeModal } = useModalContext();
    const token = userData?.token;
    const userId = userData?.user?.id

    const fetchUsers = async () => {
        try {
            const response = await fetchAllUsers(token);
            if (Array.isArray(response)) {
                setAllUsers(response);
            } else {
                setAllUsers([]);
                console.error('Expected an array but got:', response);
            }
        } catch (error) {
            setAllUsers([]);
            console.error('Error getting users:', error.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            setSearchResults([]);
        } else {
            const filteredUsers = allUsers.filter(user =>
                user.name.toLowerCase().includes(value.toLowerCase())
            );
            setSearchResults(filteredUsers);
        }
    };
    const handleAdd = async (friendId) => {
        try {
            await addFriend(token, userId, friendId);
            console.log('Friend successfully added');
        } catch (error) {
            console.error('Error adding friend:', error.message);
        }
    };
    const handleView = (friendId) => {
        console.log("See user details:", userId);
    };

    const handleCloseModal = () => {
        closeModal('searchModal');
    };
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <h2>Search Users</h2>
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                {searchResults.length > 0 && (
                    <ul className="user-list">
                        {searchResults.slice(0, 5).map(friend => (
                            <li key={friend.id} className="user-list-item">
                                <span>{friend.name}</span>
                                <div className="buttons">
                                    <button onClick={() => handleAdd(friend.id)}>Add</button>
                                    <button onClick={() => handleView(friend.id)}>See</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchModal;