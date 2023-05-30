import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Joalheria from '../assets/joalheria.jpg';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <img className="img-sobre" src={Joalheria} alt="" />
      <Button
        className="btn-sobre rounded-0"
        variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{ display: 'block', margin: '0 auto'}}
      >
        Sobre Nós
      </Button>
      <Collapse in={open}>
      
      <div id="example-collapse-text" className="texto-sobre text-justify my-5 mx-auto" style={{ maxWidth: '700px' }}>        A Joalheria Arendt é especializada em oferecer uma seleção abrangente de joias finas e exclusivas, que são verdadeiras obras de arte. Cada peça é cuidadosamente projetada e confeccionada com os mais altos padrões de qualidade, garantindo a excelência em cada detalhe.
Nossas joias são criadas com uma combinação de habilidade artesanal e tecnologia avançada, resultando em peças únicas e de beleza excepcional. Cada design é cuidadosamente trabalhado para transmitir elegância, sofisticação e estilo atemporal.
Nosso compromisso com a qualidade vai além da estética. Utilizamos apenas materiais de alta qualidade, como ouro, prata e pedras preciosas autênticas, para garantir a durabilidade e a autenticidade de cada peça. Além disso, trabalhamos com os melhores ourives e lapidários, que dominam suas técnicas com maestria.
Na Joalheria Arendt, buscamos superar as expectativas dos nossos clientes mais exigentes, oferecendo uma experiência de compra personalizada e exclusiva. Valorizamos a individualidade de cada pessoa e nos dedicamos a ajudá-las a encontrar a joia perfeita que reflete sua personalidade e estilo único.
Seja para uma ocasião especial, como um pedido de casamento ou aniversário, ou para simplesmente se presentear com uma peça de beleza incomparável, na Joalheria Arendt você encontrará a joia dos seus sonhos. Acreditamos que cada peça conta uma história e estamos honrados em fazer parte desses momentos especiais da vida de nossos clientes.
Venha nos visitar e descubra o mundo encantador das joias finas na Joalheria Arendt. Estamos ansiosos para recebê-lo e ajudá-lo a encontrar a joia perfeita que irá iluminar sua vida e criar memórias preciosas para toda a eternidade.
        </div>
      </Collapse>
    </>
  );
}

export default Example;