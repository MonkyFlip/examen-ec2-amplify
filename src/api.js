import axios from 'axios';

const API_URL = 'http://localhost:5000/pets';

export const fetchPets = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching pets:', error);
        throw error;
    }
};

export const addPet = async (pet) => {
    try {
        const response = await axios.post(API_URL, pet);
        return response.data;
    } catch (error) {
        console.error('Error adding pet:', error);
        throw error;
    }
};
