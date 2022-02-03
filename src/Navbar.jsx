import React, { useEffect } from "react";
import { Nav, Navbar } from 'react-bootstrap';

function NavbarComponent({}) {
    
    const homeLink = <Nav.Link href="/home"><span className="hover-underline-animation">Home</span></Nav.Link>;
    const items = <Nav.Link href="/items" ><span className="hover-underline-animation">Items</span></Nav.Link>;
    const randomItemDetails = <Nav.Link href={"/items/"+Math.floor(Math.random()*1000)} ><span className="hover-underline-animation">Item Details</span></Nav.Link>;

    return (
        <div>
            <Navbar bg="primary" variant="dark" fixed="top" expand="lg">
                <Navbar.Brand style={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '27px', fontFamily: 'Roboto, sans serif' }}>Squadgain</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container-fluid"
                        style={{ marginLeft: '36px' }}
                    >
                        {homeLink}
                        {items}
                        {randomItemDetails}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />
            <br />
            <br />
        </div>
    );
}

export default NavbarComponent;
