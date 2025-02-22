import React, { useState } from 'react';
import PetList from './components/PetList';

const initialPets = [
    { nombre: 'Fido', raza: 'Labrador', edad: 3 },
    { nombre: 'Milo', raza: 'Beagle', edad: 2 },
    { nombre: 'Bella', raza: 'Bulldog', edad: 4 },
    { nombre: 'Luna', raza: 'Poodle', edad: 1 },
    { nombre: 'Max', raza: 'Golden Retriever', edad: 5 },
    { nombre: 'Daisy', raza: 'Boxer', edad: 3 },
    { nombre: 'Rocky', raza: 'German Shepherd', edad: 6 },
    { nombre: 'Zoe', raza: 'Yorkshire Terrier', edad: 2 },
    { nombre: 'Charlie', raza: 'Shih Tzu', edad: 4 },
    { nombre: 'Ruby', raza: 'Border Collie', edad: 7 }
];

function App() {
    const [pets, setPets] = useState(initialPets);
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredPets = pets.filter(pet => 
        pet.raza.toLowerCase().includes(filter.toLowerCase()) ||
        pet.nombre.toLowerCase().includes(filter.toLowerCase()) ||
        pet.edad.toString().includes(filter)
    );

    return (
        <div className="App">
            <header className="App-header">
                <h1>Pet Management App</h1>
                <input
                    type="text"
                    //aceholder="Filtrar por nombre, raza o edad"
                    value={filter}
                    onChange={handleFilterChange}
                    style={{ marginBottom: '20px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <PetList pets={filteredPets} />
            </header>
        </div>
    );
}

export default App;
