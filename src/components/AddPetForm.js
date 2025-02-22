import React, { useState } from 'react';
import './AddPetForm.css';

const AddPetForm = ({ addPet }) => {
    const [newPet, setNewPet] = useState({ nombre: '', raza: '', edad: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPet(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPet(newPet);
        setNewPet({ nombre: '', raza: '', edad: '' }); // Limpiar el formulario después de agregar la mascota
    };

    return (
        <form onSubmit={handleSubmit} className="add-pet-form">
            <input name="nombre" value={newPet.nombre} onChange={handleInputChange} placeholder="Nombre" />
            <input name="raza" value={newPet.raza} onChange={handleInputChange} placeholder="Raza" />
            <input name="edad" value={newPet.edad} onChange={handleInputChange} placeholder="Edad" />
            <button type="submit">Add Pet</button>
        </form>
    );
};

export default AddPetForm;
