import React from 'react';

const PetList = ({ pets }) => {
    return (
        <div>
            <h2>Pet List</h2>
            <ul>
                {pets.map((pet, index) => (
                    <li key={index}>{pet.nombre} - {pet.raza} - {pet.edad}</li>
                ))}
            </ul>
        </div>
    );
};

export default PetList;
