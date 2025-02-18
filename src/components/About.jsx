import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaGraduationCap, FaUsers, FaFlask } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: #f5f5f5;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  color: #1a237e;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;

  svg {
    font-size: 2.5rem;
    color: #1a237e;
    margin-bottom: 1rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a237e;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Description = styled(motion.p)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #444;
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const values = [
    {
      icon: <FaGraduationCap />,
      title: 'Academic Excellence',
      description: 'Committed to providing world-class education through innovative teaching methods and cutting-edge research.'
    },
    {
      icon: <FaUsers />,
      title: 'Diverse Community',
      description: 'Fostering an inclusive environment where students from all backgrounds can thrive and grow together.'
    },
    {
      icon: <FaFlask />,
      title: 'Research Innovation',
      description: 'Leading groundbreaking research that addresses global challenges and shapes the future.'
    }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title variants={itemVariants}>
            About Our University
          </Title>
          <Description variants={itemVariants}>
            Founded on principles of excellence, innovation, and inclusivity, our university 
            has been shaping leaders and innovators for over a century. We combine rich tradition 
            with cutting-edge education to prepare our students for the challenges of tomorrow.
          </Description>

          <Grid>
            {values.map((value, index) => (
              <Card
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {value.icon}
                <CardTitle>{value.title}</CardTitle>
                <CardText>{value.description}</CardText>
              </Card>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;