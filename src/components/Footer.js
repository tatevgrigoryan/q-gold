import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer text-white py-3">
            <Container className="text-center">
                Copyright  © {new Date().getFullYear()}  Q-Gold Resources, All Rights Reserved
            </Container>
        </footer>
    );
}

export default Footer;
