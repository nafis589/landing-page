import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1a237e;
  color: white;
  padding: 4rem 2rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Link = styled(motion.a)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const Text = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  svg {
    color: #ff4081;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <Grid>
          <Column>
            <Title>About Us</Title>
            <Text>
              We are dedicated to providing world-class education and shaping the
              future leaders of tomorrow through innovation and excellence.
            </Text>
          </Column>

          <Column>
            <Title>Quick Links</Title>
            <Link href="#home" whileHover={{ x: 5 }}>Home</Link>
            <Link href="#about" whileHover={{ x: 5 }}>About</Link>
            <Link href="#programs" whileHover={{ x: 5 }}>Programs</Link>
            <Link href="#testimonials" whileHover={{ x: 5 }}>Testimonials</Link>
            <Link href="#contact" whileHover={{ x: 5 }}>Contact</Link>
          </Column>

          <Column>
            <Title>Resources</Title>
            <Link href="#" whileHover={{ x: 5 }}>Student Portal</Link>
            <Link href="#" whileHover={{ x: 5 }}>Library</Link>
            <Link href="#" whileHover={{ x: 5 }}>Research</Link>
            <Link href="#" whileHover={{ x: 5 }}>Academic Calendar</Link>
          </Column>

          <Column>
            <Title>Legal</Title>
            <Link href="#" whileHover={{ x: 5 }}>Privacy Policy</Link>
            <Link href="#" whileHover={{ x: 5 }}>Terms of Service</Link>
            <Link href="#" whileHover={{ x: 5 }}>Cookie Policy</Link>
            <Link href="#" whileHover={{ x: 5 }}>Accessibility</Link>
          </Column>
        </Grid>

        <Copyright>
          <span>© {currentYear} University Name. Made with</span>
          <FaHeart />
          <span>All rights reserved.</span>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;