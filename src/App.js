import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import FavoriteCharacter from './components/FavoriteCharacter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('profile');
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este contacto?')) {
      setContacts(contacts.filter(contact => contact.id !== id));
    }
  };

  const renderView = () => {
    switch(currentView) {
      case 'profile':
        return <Profile />;
      case 'character':
        return <FavoriteCharacter />;
      case 'contacts':
        return (
          <div className="container mt-4">
            <h2 className="text-center mb-4">
              <i className="fas fa-address-book me-2"></i>
              Agenda de Contactos
            </h2>
            <div className="row">
              <div className="col-md-5">
                <ContactForm addContact={addContact} />
              </div>
              <div className="col-md-7">
                <ContactList 
                  contacts={contacts} 
                  deleteContact={deleteContact}
                  filter={filter}
                  setFilter={setFilter}
                />
              </div>
            </div>
          </div>
        );
      default:
        return <Profile />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      <Container fluid>
        {renderView()}
      </Container>
    </div>
  );
}

export default App;