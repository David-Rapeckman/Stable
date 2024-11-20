// src/pages/index.tsx
import React, { useState } from 'react';
import { inserirEmpresa, logarEmpresa } from '../services/apiService';

const HomePage = () => {
    const [empresaData, setEmpresaData] = useState({
        nome: '',
        cnpj: '',
        dataAbertura: '',
        email: '',
        telefone: '',
        login: '',
        senha: '',
    });

    const [loginData, setLoginData] = useState({
        login: '',
        senha: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmpresaData({ ...empresaData, [name]: value });
    };

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmitEmpresa = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await inserirEmpresa(empresaData);
        console.log('Empresa inserida:', response);
    };

    const handleSubmitLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await logarEmpresa(loginData);
        console.log('Login realizado:', response);
    };

    return (
        <div>
            <h1>Cadastro de Empresa</h1>
            <form onSubmit={handleSubmitEmpresa}>
                <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required />
                <input type="text" name="cnpj" placeholder="CNPJ" onChange={handleChange} required />
                <input type="date" name="dataAbertura" placeholder="Data de Abertura" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="telefone" placeholder="Telefone" onChange={handleChange} required />
                <input type="text" name="login" placeholder="Login" onChange={handleChange} required />
                <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
                <button type="submit">Cadastrar Empresa</button>
            </form>

            <h1>Login de Empresa</h1>
            <form onSubmit={handleSubmitLogin}>
                <input type="text" name="login" placeholder="Login" onChange={handleLoginChange} required />
                <input type="password" name="senha" placeholder="Senha" onChange={handleLoginChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default HomePage;