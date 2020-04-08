import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Container } from 'reactstrap';

const Layout = ( { head, subheading, children } ) => {

    return(
        <>
        <Navbar></Navbar>
        <Header title={ head } subheading={ subheading }></Header>
        <Container>
            { children }
        </Container>
        </>
    );
}

export default Layout;