import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import fotoBatman from './images/batman.png';
import citaBatman from './images/citabatman.png';
import memeBatman from './images/memebatman.png';
const FavoriteCharacter = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        <i className="fas fa-mask me-2"></i>
        Mi Personaje Favorito
      </h2>
      
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Header className="bg-success text-white">
              <h4 className="mb-0">Batman</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4} className="text-center">
                  <img 
                       src={fotoBatman}
                    alt="Batman" 
                    className="img-fluid rounded mb-3"
                  />
                  <div className="d-flex justify-content-center flex-wrap">
                    <Badge bg="dark" className="me-1 mb-1">Héroe</Badge>
                    <Badge bg="secondary" className="me-1 mb-1">DC Comics</Badge>
                    <Badge bg="dark" className="me-1 mb-1">Justiciero</Badge>
                  </div>
                </Col>
                <Col md={8}>
                  <h5>
                    <i className="fas fa-quote-left text-success me-2"></i>
                    Cita Favorita
                  </h5>
                  <blockquote className="blockquote">
                     <img 
                       src={citaBatman}
                    alt="citaBatman" 
                    className="img-fluid rounded mb-3"
                  />
                  </blockquote>
                  
                  <h5>
                    <i className="fas fa-history text-success me-2"></i>
                    Historia
                  </h5>
                  <p>
                    Batman es el alter ego de Bruce Wayne, un multimillonario filántropo dueño de 
                    Empresas Wayne. Después de presenciar el asesinato de sus padres cuando era niño, 
                    juró vengarse contra los criminales, un juramento moderado por el sentido de la justicia.
                  </p>
                  
                  <h5>
                    <i className="fas fa-star text-warning me-2"></i>
                    Por qué es mi favorito
                  </h5>
                  <p>
                    Batman no tiene superpoderes, pero utiliza su intelecto, habilidades de detective, 
                    fuerza física, resistencia y su riqueza para combatir el crimen en Ciudad Gótica.
                  </p>
                <blockquote className="blockquote">
                     <img 
                       src={memeBatman}
                    alt="memeBatman" 
                    className="img-fluid rounded mb-3"
                  />
                  </blockquote>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FavoriteCharacter;