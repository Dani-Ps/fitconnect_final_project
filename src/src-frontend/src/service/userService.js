const API_USER_PATH = 'http://localhost:8080/api/v1/user';

const fetchAllUsers = async (token) => {
    try {
        const response = await fetch(`${API_USER_PATH}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to get users');
        }

        const users = await response.json();
        return Array.isArray(users) ? users : [];
    } catch (error) {
        console.error('Error getting users:', error.message);
    }
};

const fetchUserData = async (token, id, updateUser) => {
    try {
        const response = await fetch(`${API_USER_PATH}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to get user data');
        }

        const user = await response.json();
        console.log('User:', user);

    } catch (error) {
        console.error('Error getting user data:', error.message);
    }
};

export { fetchAllUsers, fetchUserData }