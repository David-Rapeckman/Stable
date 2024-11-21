import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import LoginCadastro from '../Components/LoginCadastro/LoginCadastro';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main style={{ padding: '20px', textAlign: 'center', background: 'linear-gradient(to right, #a8e6cf, #dcedc1)' }}>
                <h1 style={{ color: '#007bff' }}>Bem-vindo ao Sistema de Monitoramento de Energia, faça seu login para ver os gráficos e mais opções</h1>
                <LoginCadastro />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;