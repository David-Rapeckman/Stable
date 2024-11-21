// app/components/Integrantes/Integrantes.tsx
import React, { useState } from 'react';

const Integrantes = () => {
    const [integrantes, setIntegrantes] = useState([
        { nome: '', rm: '', turma: '', github: '', linkedin: '' },
        { nome: '', rm: '', turma: '', github: '', linkedin: '' },
        { nome: '', rm: '', turma: '', github: '', linkedin: '' },
    ]);

    const handleChange = (index: number, field: string, value: string) => {
        const newIntegrantes = [...integrantes];
        newIntegrantes[index][field] = value;
        setIntegrantes(newIntegrantes);
    };

    return (
        <div>
            <h1>Integrantes</h1>
            {integrantes.map((integrante, index) => (
                <div key={index}>
                    <input type="text" placeholder="Nome" onChange={(e) => handleChange(index, 'nome', e.target.value)} />
                    <input type="text" placeholder="RM" onChange={(e) => handleChange(index, 'rm', e.target.value)} />
                    <input type="text" placeholder="Turma" onChange={(e) => handleChange(index, 'turma', e.target.value)} />
                    <input type="text" placeholder="GitHub" onChange={(e) => handleChange(index, 'github', e.target.value)} />
                    <input type="text" placeholder="LinkedIn" onChange={(e) => handleChange(index, 'linkedin', e.target.value)} />
                </div>
            ))}
        </div>
    );
};

export default Integrantes;