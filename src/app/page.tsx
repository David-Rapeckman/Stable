// app/page.tsx
import React from 'react';
import LoginCadastro from './components/LoginCadastro';

const HomePage = () => {
    return (
        <div>
            <h1>Bem-vindo ao Sistema de Cadastro de Empresas</h1>
            <LoginCadastro />
        </div>
    );
};

export default HomePage;