"use client";

import React from "react";

interface HeaderProps {
    onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}></h1>
            <nav style={styles.nav}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <a href="/" style={styles.link}>Home</a>
                    </li>
                    <li style={styles.navItem}>
                        <a href="/Cadastro" style={styles.link}>Cadastro</a>
                    </li>
                    <li style={styles.navItem}>
                        <a href="/integrantes" style={styles.link}>Integrantes</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    header: {
        padding: "20px",
        textAlign: "center",
        background: "linear-gradient(to right, #a8e6cf, #dcedc1)",
        color: "#fff",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
        margin: 0,
        fontSize: "2rem",
        fontWeight: "bold",
    },
    nav: {
        marginTop: "10px",
    },
    navList: {
        display: "flex",
        justifyContent: "center",
        listStyleType: "none",
        padding: 0,
        margin: 0,
    },
    navItem: {
        margin: "0 15px",
    },
    link: {
        padding: "10px 20px",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "#fff",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "background-color 0.3s ease",
        display: "inline-block",
    },
    linkHover: {
        backgroundColor: "#0056b3",
    },
};

export default Header;
