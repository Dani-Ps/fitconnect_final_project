import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthProvider';
import { ThemeContext } from '../../../contexts/ThemeProvider';
import { useModalContext } from '../../../contexts/ModalProvider';

import { fetchAllUsers, addFriend } from '../../../service/userService';
import './style.scss';

const SearchModal = () => {

    const navigate = useNavigate();

    const { userData } = useAuthContext();
    const { closeModal } = useModalContext();
    const { theme } = useContext(ThemeContext);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

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

    const userRole = window.sessionStorage.getItem("Role");
    const isUser = () => {
        if (userRole && userRole === ('ROLE_USER')) {
            return true;
        } else {
            return false;
        }
    }

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
    const handleView = (friend) => {
        const profileURL = `/${friend.name}`;
        navigate(profileURL, { state: { user: friend } })
        handleCloseModal();
    };

    const handleCloseModal = () => {
        closeModal('searchModal');
    };
    return (
        <div className="search-modal" >
            <div className="search-modal-content" style={{ background: theme.backgroundGradient, borderColor: theme.gray7 }}>
                <span className="close" onClick={handleCloseModal} style={{ color: theme.gray12 }}>&times;</span>
                <h2 style={{ color: theme.teal11 }}>Search Users</h2>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="search-input"
                    style={{ color: theme.gray12, background: theme.backgroundGradient, borderColor: theme.grayA6 }}
                />
                {searchResults.length > 0 && (
                    <ul className="user-list">
                        {searchResults.slice(0, 5).map(friend => (
                            <li key={friend.id} className="user-list-item">
                                <span style={{ color: theme.gray12 }}>{friend.name}</span>
                                <div className="buttons">
                                    {isUser && <button onClick={() => handleAdd(friend.id)} style={{ background: theme.tealA3, color: theme.gray12 }}>+</button>}
                                    <button onClick={() => handleView(friend)} style={{ background: theme.teal6, color: theme.gray12 }}>See</button>
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