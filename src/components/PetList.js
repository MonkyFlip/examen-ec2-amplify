import React from 'react';
import './PetList.css';

const PetList = ({ pets }) => {
    return (
        <div>
            <h2>Pet List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Raza</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, index) => (
                        <tr key={index}>
                            <td>{pet.nombre}</td>
                            <td>{pet.raza}</td>
                            <td>{pet.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PetList;
