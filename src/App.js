import React, { useState, useEffect } from 'react';
import PetList from './components/PetList';
import AddPetForm from './components/AddPetForm';
import './App.css';

function App() {
    const [pets, setPets] = useState([]);

    const addPet = (pet) => {
        setPets([...pets, pet]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Pet Management App</h1>
            </header>
            <main>
                <AddPetForm addPet={addPet} />
                <PetList pets={pets} />
            </main>
        </div>
    );
}

export default App;
