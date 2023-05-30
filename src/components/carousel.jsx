import Carousel from 'react-bootstrap/Carousel';
import Ametista from '../assets/ametista.jpg';
import Anelplanta from '../assets/anelplanta.jpg';
import Esmeralda from '../assets/colaresmeralda.jpg';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ametista}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Produtos com materiais de melhor qualidade</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Anelplanta}
          alt="Second slide"
        />

        <Carousel.Caption>
          <p>Anéis de noivado</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Esmeralda}
          alt="Third slide"
        />

        <Carousel.Caption>
          
          <p>
            Itens de Esmeralda
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;