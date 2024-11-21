// app/error.tsx
import React from 'react';

const ErrorPage = ({ error }: { error: Error }) => {
    return (
        <div>
            <h1>Ocorreu um erro!</h1>
            <p>{error.message}</p>
            <p>Por favor, tente novamente mais tarde.</p>
        </div>
    );
};

export default ErrorPage;