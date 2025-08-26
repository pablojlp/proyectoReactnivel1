import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && email && phone) {
      addContact({
        id: Date.now(),
        name,
        email,
        phone
      });
      
      setName('');
      setEmail('');
      setPhone('');
      setShowAlert(true);
      
      // Ocultar la alerta después de 3 segundos
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <Card className="shadow mb-4">
      <Card.Header className="bg-info text-white">
        <h5 className="mb-0">
          <i className="fas fa-plus-circle me-2"></i>
          Agregar Nuevo Contacto
        </h5>
      </Card.Header>
      <Card.Body>
        {showAlert && (
          <Alert variant="success" className="d-flex align-items-center">
            <i className="fas fa-check-circle me-2"></i>
            Contacto agregado exitosamente!
          </Alert>
        )}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              <i className="fas fa-user text-info me-1"></i> Nombre completo
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Juan Pérez"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <i className="fas fa-envelope text-info me-1"></i> Correo electrónico
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juan@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <i className="fas fa-phone text-info me-1"></i> Teléfono
            </Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ej: 8888-8888"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              <i className="fas fa-save me-2"></i>
              Guardar Contacto
            </Button>
            
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;