import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signup', { email, password });
            alert(response.data.message);
        } catch (error) {
            alert('Signup failed');
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
