// app/components/LoginCadastro.tsx
"use client"; // Adicione esta linha no topo do arquivo

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
        <div>
            <h1>Login de Empresa</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="login" placeholder="Login" onChange={handleChange} required />
                <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginCadastro;