import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url("/src/images/harvard-university-cambridge-usa.jpg") center/cover no-repeat;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  margin-bottom: 2.5rem;
  opacity: 0.9;
`;

const RegisterButton = styled(motion.button)`
  background: #1a237e;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: #303f9f;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Title variants={itemVariants}>
            Shape Your Future at Our University
          </Title>
          <Subtitle variants={itemVariants}>
            Discover world-class education, innovative research, and endless
            opportunities to excel in your chosen field.
          </Subtitle>
          <motion.div variants={itemVariants}>
            <RegisterButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Your Journey <FaArrowRight />
            </RegisterButton>
          </motion.div>
        </motion.div>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
