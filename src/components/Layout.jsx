import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Body from './Body';
const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#1c1c1c', minHeight: '100vh' }}>
      <Container style={{ maxWidth: '1080px' }}>
        <Navbar />
        <Header />
        <Body />
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
