import Form from 'react-bootstrap/Form';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="row">
          <div className="col-12 text-center">
            <h4>Joalheria Arendt</h4>
            <p>
              A Joalheria Arendt oferece uma ampla seleção de joias finas e exclusivas. Nossas peças são criadas com os mais altos padrões de qualidade e design elegante para atender aos gostos mais refinados.
            </p>
          </div>
        </div>
        <div className="row">
        <div className="noticias">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="email-footer">Coloque seu email para mais:</Form.Label>
        <Form.Control className="text-email" type="email" placeholder="name@example.com" />
        </Form.Group>
        </div>
        <div className="col-12 links-footer">
         <a href="/" className="link-black">Home</a>
         <a href="/sobre" className="link-black">Sobre</a>
         <a href="/contatos" className="link-black">Contatos</a>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
