"use client";

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <nav style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
                <li style={{ margin: '0 15px' }}>
                    <a href="/sobre" style={linkStyle}>Sobre</a>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <a href="/contato" style={linkStyle}>Contato</a>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <a href="/privacidade" style={linkStyle}>Política de Privacidade</a>
                </li>
            </nav>
            <p style={{ textAlign: 'center', marginTop: '10px' }}>
                &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </p>
        </footer>
    );
};


const footerStyle: React.CSSProperties = {
    padding: '20px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #a8e6cf, #dcedc1)',
};


const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
};

export default Footer;