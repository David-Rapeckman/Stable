import React from 'react';
import Header from '../Components/Header/Header';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8d7da', color: '#721c24' }}>
            <h1>Página Não Encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <a href="/" style={{ color: '#007bff', textDecoration: 'underline' }}>Voltar para a página inicial</a>
        </div>
    );
};

export default NotFoundPage;