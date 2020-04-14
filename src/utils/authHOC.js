import React from 'react';
import { Redirect } from 'react-router-dom';
import authenticate from './authenticate';

export default function(WrappedComponent) {
    // Si está autenticado
    return function(props) {
        const { isAuthenticate } = authenticate();
        return isAuthenticate
            ? <WrappedComponent {...props} />
            : <Redirect to="/login" />
    }
};