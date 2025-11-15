import Stresser from '../components/Stresser';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3em', color: '#ff66b2' }}>Minecraft Stresser</h1>
      <p style={{ fontSize: '1.5em', color: '#ffffff' }}>Inicia un ataque DDoS contra un servidor de Minecraft</p>
      <Stresser />
    </div>
  );
};

export default Home;
