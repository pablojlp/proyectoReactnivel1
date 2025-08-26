import React from 'react';
import { Card, ListGroup, Badge, Alert, Form, Row, Col } from 'react-bootstrap';

const ContactList = ({ contacts, deleteContact, filter, setFilter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Card className="shadow">
      <Card.Header className="bg-warning text-dark">
        <h5 className="mb-0">
          <i className="fas fa-address-book me-2"></i>
          Lista de Contactos
        </h5>
      </Card.Header>
      <Card.Body>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>
                <i className="fas fa-search me-1"></i> Buscar contacto por nombre
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe para filtrar..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        {filteredContacts.length === 0 ? (
          <Alert variant="info" className="text-center">
            <i className="fas fa-info-circle me-2"></i>
            {contacts.length === 0 
              ? "No hay contactos en tu agenda. Agrega algunos contactos para comenzar." 
              : "No se encontraron contactos que coincidan con tu búsqueda."}
          </Alert>
        ) : (
          <ListGroup variant="flush">
            {filteredContacts.map(contact => (
              <ListGroup.Item key={contact.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">{contact.name}</h6>
                  <small className="text-muted">
                    <i className="fas fa-envelope me-1"></i> {contact.email}
                  </small>
                  <br />
                  <small className="text-muted">
                    <i className="fas fa-phone me-1"></i> {contact.phone}
                  </small>
                </div>
                <Badge 
                  bg="danger" 
                  className="cursor-pointer"
                  onClick={() => deleteContact(contact.id)}
                  title="Eliminar contacto"
                >
                  <i className="fas fa-trash"></i>
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        
        {filteredContacts.length > 0 && (
          <div className="mt-3 text-center text-muted">
            <small>
              Mostrando {filteredContacts.length} de {contacts.length} contactos
            </small>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ContactList;