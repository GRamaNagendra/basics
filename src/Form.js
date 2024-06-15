// src/components/DataViewer.js

import React, { useState, useEffect } from 'react';

const DataViewer = () => {
    const [jsonData, setJsonData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        fetchJsonData();
    }, []);

    const fetchJsonData = async () => {
        try {
            const response = await fetch('/data.json'); // Assuming data.json is in public folder
            const data = await response.json();
            setJsonData(data);
        } catch (error) {
            console.error('Error fetching JSON data:', error);
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        const { name, email, phone } = jsonData[index];
        setFormData({ name, email, phone });
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
        setFormData({ name: '', email: '', phone: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = [...jsonData];
        updatedData[editIndex] = formData;
        setJsonData(updatedData);
        setEditIndex(null);
        setFormData({ name: '', email: '', phone: '' });
    };

    return (
        <div>
            <h2>JSON Data Viewer and Editor</h2>
            {jsonData.map((data, index) => (
                <div key={index}>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                </div>
            ))}
            {editIndex !== null && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Update</button>
                    <button type="button" onClick={handleCancelEdit}>Cancel</button>
                </form>
            )}
        </div>
    );
};

export default DataViewer;
