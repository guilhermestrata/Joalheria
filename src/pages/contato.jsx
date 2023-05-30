import NavScrollExample from '../components/navbar';
import FormContato from '../components/formcontato';
import Footer from '../components/footer';

function Contato() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavScrollExample />
      <h2 style={{ textAlign: 'center', fontSize: '24px', padding: '15px' }}>No que podemos ajudar?</h2>
      <FormContato />
      <div style={{ flex: '1' }}></div> {}
      <Footer />
    </div>
  );
}

export default Contato;