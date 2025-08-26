import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = ({ currentView, setCurrentView }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link 
            active={currentView === 'profile'} 
            onClick={() => setCurrentView('profile')}
          >
            <i className="fas fa-user me-1"></i> Mi Perfil
          </Nav.Link>
          <Nav.Link 
            active={currentView === 'character'} 
            onClick={() => setCurrentView('character')}
          >
            <i className="fas fa-mask me-1"></i> Personaje Favorito
          </Nav.Link>
          <Nav.Link 
            active={currentView === 'contacts'} 
            onClick={() => setCurrentView('contacts')}
          >
            <i className="fas fa-address-book me-1"></i> Agenda de Contactos
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;