// src/services/apiService.ts
const API_URL_JAVA = 'http://localhost:8080';
const API_URL_PYTHON = 'http://localhost:8000';

export const inserirEmpresa = async (data: any) => {
    const response = await fetch(`${API_URL_JAVA}/empresa`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const logarEmpresa = async (data: any) => {
    const response = await fetch(`${API_URL_JAVA}/empresa/logar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

// Adicione outras funções conforme necessário