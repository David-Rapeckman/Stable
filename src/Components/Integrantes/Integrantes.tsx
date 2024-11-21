"use client";

import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Integrantes = () => {
    const [integrantes] = useState([
        { nome: 'Integrante 1', rm: 'RM1', turma: 'Turma 1', github: 'https://github.com/integrante1', linkedin: 'https://linkedin.com/in/integrante1', imagem: 'url_da_imagem_1' },
        { nome: 'Integrante 2', rm: 'RM2', turma: 'Turma 2', github: 'https://github.com/integrante2', linkedin: 'https://linkedin.com/in/integrante2', imagem: 'url_da_imagem_2' },
        { nome: 'Integrante 3', rm: 'RM3', turma: 'Turma 3', github: 'https://github.com/integrante3', linkedin: 'https://linkedin.com/in/integrante3', imagem: 'url_da_imagem_3' },
    ]);

    return (
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', background: 'linear-gradient(to right, #a8e6cf, #dcedc1)' }}>
                {integrantes.map((integrante, index) => (
                    <div key={index} style={{ margin: '20px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '8px', padding: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <img src={integrante.imagem} alt={integrante.nome} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                        <h2>{integrante.nome}</h2>
                        <p>RM: {integrante.rm}</p>
                        <p>Turma: {integrante.turma}</p>
                        <a href={integrante.github} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#007bff', textDecoration: 'underline' }}>GitHub</a>
                        <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#007bff', textDecoration: 'underline' }}>LinkedIn</a>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Integrantes;