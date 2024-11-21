"use client";

import React from 'react';

const ErrorPage = ({ error }: { error: Error }) => {
    return (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8d7da', color: '#721c24' }}>
            <h1>Ocorreu um erro!</h1>
            <p>{error.message}</p>
            <p>Por favor, tente novamente mais tarde.</p>
        </div>
    );
};

export default ErrorPage;