import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetList from './components/PetList';
import AddPetForm from './components/AddPetForm';

function App() {
    const [pets, setPets] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const getPets = async () => {
            try {
                const response = await axios.get('http://localhost:5000/pets');
                setPets(response.data);
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };
        getPets();
    }, []);

    const addPet = async (pet) => {
        try {
            const response = await axios.post('http://localhost:5000/pets', pet);
            setPets([...pets, response.data]);
        } catch (error) {
            console.error('Error adding pet:', error);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredPets = pets.filter(pet => pet.raza.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className="App">
            <header className="App-header">
                <h1>Pet Management App</h1>
                <input
                    type="text"
                    placeholder="Filtrar por raza"
                    value={filter}
                    onChange={handleFilterChange}
                    style={{ marginBottom: '20px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <AddPetForm addPet={addPet} />
                <PetList pets={filteredPets} />
            </header>
        </div>
    );
}

export default App;
