import React from 'react';
import './PetList.css';

const PetList = ({ pets }) => {
    return (
        <div className="pet-list">
            <h2>Pet List</h2>
            <ul>
                {pets.map((pet, index) => (
                    <li key={index} className="pet-item">
                        <span className="pet-name">{pet.nombre}</span>
                        <span className="pet-breed">{pet.raza}</span>
                        <span className="pet-age">{pet.edad} años</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PetList;
