import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer text-white py-3">
            <Container className="text-center">
                  © {new Date().getFullYear()}  Q-Gold Resources Ltd. All rights reserved.
                <div>
                    <p className="small mt-3">
                         198 Davenport Road, Toronto, ON  M5R 1J2 <br/>
                        <a href="mailto:julie.wilson@qgoldresources.com">julie.wilson@qgoldresources.com</a>
                    </p>
                </div>

            </Container>
        </footer>
    );
}

export default Footer;
