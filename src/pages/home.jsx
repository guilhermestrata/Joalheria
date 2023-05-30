import Carousel from '../components/carousel'
import NavScrollExample from '../components/navbar'
import GrupoCartao from '../components/cardgroup'
import Footer from '../components/footer'

function Home() {
  return (
    <>
    <NavScrollExample></NavScrollExample>
    <Carousel></Carousel>
    <h2 className="colecoes">Coleções</h2>
    <GrupoCartao></GrupoCartao>
    <Footer></Footer>
    </>
  );
}
export default Home;