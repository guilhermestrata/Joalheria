import AnelMadeira from '../assets/anelmadeira.jpg'
import Safira from '../assets/safira.jpg'
import Lenco from '../assets/maolenco.jpg'
import Card from 'react-bootstrap/Card';
import Homem from '../assets/homem.jpg';
import Brincos from '../assets/brincos.jpg'

function GrupoCartao() {
    
    const cards = [
        {
            texto: "Anéis de Noivado",
            imagem: AnelMadeira
        },
        {
            texto: "Coleção Safira",
            imagem: Safira
        },
        {
            texto: "Linha Jovem",
            imagem: Lenco
        },
        {
            texto: "Moda",
            imagem: Homem
        },
        {
            texto: "Brincos",
            imagem: Brincos
        }
    ]
    return (
    <div className="card-container">
        
    {cards.map(({texto, imagem}) =>(
        <Card key={texto} className="card rounded-0" style={{ width: '25rem' }}>
        <Card.Img variant="top" src={imagem} height="340px" />
        <Card.Body className="text-center">
        <Card.Title>{texto}</Card.Title>
        </Card.Body>
        </Card>
    ))}
    </div>
  );
}

export default GrupoCartao;