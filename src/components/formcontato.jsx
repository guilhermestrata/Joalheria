import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form className="form-contato text-center mx-auto rounded" style={{ backgroundColor: 'black', maxWidth: '600px', padding:'30px' }}>
    <Form.Group className="caixa-email mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className="">Digite seu Email:</Form.Label>
      <Form.Control type="email" placeholder="nome@exemplo.com" style={{width:'300px'}} />
    </Form.Group>
    <Form.Group className="caixa-contato mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Escreva para nossa empresa:</Form.Label>
      <Form.Control as="textarea" rows={3} style={{width:'300px'}} />
    </Form.Group>
  </Form>
  

  );
}

export default TextControlsExample;