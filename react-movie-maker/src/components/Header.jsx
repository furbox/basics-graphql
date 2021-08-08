import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Header() {
    return (
        <div className="topnav">
            <a href="/" className="logo">Movie App</a>
            <form>
                <Link smooth to="#form">Agregar Pelicula</Link>
                <input type="text" placeholder="Search..." name="search" />
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}
