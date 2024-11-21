"use client";

import React, { useState } from 'react';
import { logarEmpresa } from '../../services/apiService';

const LoginCadastro = () => {
    const [loginData, setLoginData] = useState({
        login: '',
        senha: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await logarEmpresa(loginData);
        console.log('Login realizado:', response);
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
            <h1 style={{ textAlign: 'center', color: '#007bff' }}>Login de Empresa</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="login"
                    placeholder="Login"
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #007bff' }}
                />
                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #007bff' }}
                />
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginCadastro;