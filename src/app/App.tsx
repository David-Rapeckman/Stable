import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer'; // Importando o Footer
import Integrantes from '../Components/Integrantes/Integrantes';
import LoginCadastro from '../Components/LoginCadastro/LoginCadastro';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <div><h2>Página Inicial</h2><p>Bem-vindo ao nosso aplicativo!</p></div>;
            case 'integrantes':
                return <Integrantes />;
            case 'cadastro':
                return <LoginCadastro />;
            default:
                return <div><h2>Página Inicial</h2><p>Bem-vindo ao nosso aplicativo!</p></div>;
        }
    };

    return (
        <div>
            <Header onNavigate={setCurrentPage} />
            <main style={{ minHeight: 'calc(100vh - 160px)', padding: '20px' }}>
                {renderPage()}
            </main>
            <Footer /> {}
        </div>
    );
};

export default App;