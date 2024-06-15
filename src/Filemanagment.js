// FileManagementApp.js

import React, { useState, useEffect } from 'react';

// FileList component
function FileList() {
    const [files, setFiles] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = () => {
        fetch('http://localhost:8080/api/files')
            .then(response => response.json())
            .then(data => setFiles(data))
            .catch(error => console.error('Error fetching files:', error));
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/files/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                fetchFiles(); // Refresh files after delete
            } else {
                console.error('Failed to delete file');
            }
        })
        .catch(error => console.error('Error deleting file:', error));
    };

    const handleCreate = (e) => {
        e.preventDefault();
        const newFileData = { name, type, location };
        fetch('http://localhost:8080/api/files', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFileData),
        })
        .then(response => {
            if (response.ok) {
                fetchFiles(); // Refresh files after create
                setName('');
                setType('');
                setLocation('');
            } else {
                console.error('Failed to create file');
            }
        })
        .catch(error => console.error('Error creating file:', error));
    };

    return (
        <div>
            <h2>File List</h2>
            <form onSubmit={handleCreate}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={type} onChange={e => setType(e.target.value)} placeholder="Type" />
                <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
                <button type="submit">Create</button>
            </form>
            <ul>
                {files.map(file => (
                    <li key={file.id}>
                        <div>{file.name}</div>
                        <div>{file.type}</div>
                        <div>{file.location}</div>
                        <button onClick={() => handleDelete(file.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FileList;
