import React, { useState } from 'react';
import { inserirEmpresa } from '../../services/apiService';

const Cadastro = () => {
    const [empresaData, setEmpresaData] = useState({
        nome: '',
        cnpj: '',
        dataAbertura: '',
        email: '',
        telefone: '',
        login: '',
        senha: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmpresaData({ ...empresaData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await inserirEmpresa(empresaData);
        console.log('Empresa inserida:', response);
    };

    return (
        <div>
            <h1>Cadastro de Empresa</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required />
                <input type="text" name="cnpj" placeholder="CNPJ" onChange={handleChange} required />
                <input type="date" name="dataAbertura" placeholder="Data de Abertura" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="telefone" placeholder="Telefone" onChange={handleChange} required />
                <input type="text" name="login" placeholder="Login" onChange={handleChange} required />
                <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
                <button type="submit">Cadastrar Empresa</button>
            </form>
        </div>
    );
};

export default Cadastro;