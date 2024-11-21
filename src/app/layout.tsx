// app/layout.tsx
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Meu Projeto',
    description: 'Um projeto Next.js com TypeScript',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="pt-BR">
            <body className={inter.className}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Cadastro">Cadastro</a></li>
                            <li><a href="/integrantes">Integrantes</a></li>
                        </ul>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;