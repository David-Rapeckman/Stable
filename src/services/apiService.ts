// app/services/apiService.ts
export const inserirEmpresa = async (empresaData: any) => {
    try {
        const response = await fetch('/api/empresa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(empresaData),
        });
        if (!response.ok) {
            throw new Error('Erro ao inserir empresa');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};

export const logarEmpresa = async (loginData: any) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });
        if (!response.ok) {
            throw new Error('Erro ao realizar login');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
};