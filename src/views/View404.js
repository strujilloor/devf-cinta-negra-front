import React from 'react';
import { useLocation } from 'react-router-dom';

const View404 = () => {
    const location = useLocation();
    console.log( 'location:', location );
    return (
        <>
        <h1>404</h1>
        <h2>No existe la dirección { location.pathname } en el sitio </h2>
        </>
    )
}

export default View404;
