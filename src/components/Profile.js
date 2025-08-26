import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import fotoPerfil from './images/fotoPerfil.png';
const Profile = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        <i className="fas fa-user me-2"></i>
        Mi Perfil
      </h2>
      
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white">
              <h4 className="mb-0">Información Personal</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4} className="text-center">
                  <img 
                    src={fotoPerfil}
                    alt="Profile" 
                    className="img-fluid  mb-3"
                  />
                  <h5>Pablo León Porras</h5>
                  <p className="text-muted">Estudiante de React</p>
                </Col>
                <Col md={8}>
                  <h5>
                    <i className="fas fa-info-circle text-primary me-2"></i>
                    Acerca de mí
                  </h5>
                  <p>
                 Soy un Ingeniero Informático trabajando actualmente en la Dirección Nacional de CEN CINAI, 
                 aplicando los conocimientos en todas las áreas tecnológicas y como a casi todos nos encanta 
                 la tecnología, también me gustan los videojuegos, los automóviles y la aviación, y por supuesto viajar. </p>
                  
                  <h5>
                    <i className="fas fa-graduation-cap text-success me-2"></i>
                    Educación
                  </h5>
                  <p>Ingeniero Informático, Universidad Hispanoamericana. </p>
                                <h5>
                    <i className="fas fa-language text-info me-2"></i>
                 Idiomas:
                  </h5>
                  <ul>
                    <li>Inglés: Nivel Avanzado.</li>
                  </ul>
                  <h5>
                    <i className="fas fa-code text-warning me-2"></i>
              Desarrollo Front-End & Web:
                  </h5>
                  <ul>
                    <li>Lenguajes: JavaScript, HTML5.</li>
                    <li>Frameworks y Librerías: React, jQuery, Bootstrap.</li>
                  </ul>


     <h5>
                    <i className="fas fa-database text-danger me-2"></i>
              Bases de Datos:
                  </h5>
                  <ul>
                    <li>Motores y Lenguaje: SQL Server (Programación, SSIS, SSRS, SSAS), MySQL, SQLite.</li>
                    <li>Diseño de bases de datos.</li>
                  </ul>
 <h5>
                    <i className="fas fa-terminal text-secondary me-2"></i>
              Lenguajes de Programación Back-End:
                  </h5>
                  <ul>
                    <li>C#, Visual Basic .NET, Java, C++.</li>
                  </ul>


     <h5>
                    <i className="fa-solid fa-network-wired text-primary me-2"></i>
        Infraestructura, Virtualización y Redes:
                  </h5>
                  <ul>
                    <li>Virtualización: VMware, Oracle VM VirtualBox, Virtual PC. Técnico Especializado en Virtualización (INA).</li>
                    <li>Conocimientos en redes Cisco (CCNA y CCNP).</li>
                                <li>Sistemas: Active Directory, administración de servidores Windows.</li>
                  </ul>


                   <h5>
             
                    <i className="fa-solid fa-code-fork  me-2"></i>
       Herramientas de Desarrollo y Control de Versiones:
                  </h5>
                  <ul>
                    <li>Visual Studio, Team Foundation Server (TFS), Entity Framework,GITHUB(Básico).</li>
              
                  </ul>


                   <h5>
                     <i className="fa-solid fa-computer  me-2"></i>
       Ofimática y Soporte:
                  </h5>
                  <ul>
                    <li>Office, Open Office.</li>
                    <li>Conocimientos en mantenimiento y reparación de computadoras.</li>
                  </ul>

                   <h5>
     <i class="fa-solid fa-arrow-down-a-z me-2"></i>
       Metodologías Ágiles:
                  </h5>
                  <ul>
                    <li>Scrum (Fundamentos y Scrum Master Professional Certificate).</li>
                  </ul>

        <h5>
             <i class="fa-solid fa-lock me-2"></i>
Herramientas de Administración y Seguridad:
                  </h5>
                  <ul>
                    <li>Firewalls y Seguridad: Administración de WatchGuard y Meraki.</li>
                           <li>Sistemas de Correo: Administración de Office 365 y Zimbra.</li>
                                  <li>Antivirus: Administración de Consola ESET.</li>
                                         <li>Acceso Remoto: TeamViewer, LogMeIn, VNC.</li>
                  </ul>

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;