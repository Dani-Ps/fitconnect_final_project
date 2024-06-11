const API_ADMIN_PATH = 'http://localhost:8080/api/v1/admin';

const deleteUser = async (token, id) => {
    try {
        const response = await fetch(`${API_ADMIN_PATH}/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete user.');
        }

        const message = await response.text();
        console.log(message);

    } catch (error) {
        console.error('Error deleting user:', error.message);
    }
};

const updateUser = async (token, id, userData) => {
    try {
        const response = await fetch(`${API_ADMIN_PATH}/user/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update user.');
        }

        const message = await response.text();
        console.log(message);

    } catch (error) {
        console.error('Error updating user:', error.message);
    }
};


export { deleteUser, updateUser }