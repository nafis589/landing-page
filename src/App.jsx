
import './styles/typography.css';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </AppContainer>
  );
}

export default App;
