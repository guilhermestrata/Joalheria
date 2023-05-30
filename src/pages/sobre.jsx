import Footer from '../components/footer';
import NavScrollExample from '../components/navbar'
import SobreNos from '../components/transitionsobre'

function Sobre() {
    return (
      <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavScrollExample></NavScrollExample>
      <br />
      <SobreNos></SobreNos>
      <div style={{ flex: '1' }}></div> {}
      <Footer></Footer>
      </div>
      </>
    );
  }
  export default Sobre;