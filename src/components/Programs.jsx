import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaCode, FaAtom, FaBriefcase, FaHeartbeat, FaPalette, FaGlobe } from 'react-icons/fa';

const ProgramsSection = styled.section`
  padding: 6rem 2rem;
  background: white;
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

const Description = styled(motion.p)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #444;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProgramCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  svg {
    font-size: 2.5rem;
    color: #1a237e;
    margin-bottom: 1rem;
  }
`;

const ProgramTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a237e;
  margin-bottom: 1rem;
`;

const ProgramText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const LearnMoreButton = styled(motion.button)`
  background: transparent;
  color: #1a237e;
  border: 2px solid #1a237e;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #1a237e;
    color: white;
  }
`;

const Programs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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

  const programs = [
    {
      icon: <FaCode />,
      title: 'Computer Science',
      description: 'Develop cutting-edge software and explore artificial intelligence in our state-of-the-art labs.'
    },
    {
      icon: <FaAtom />,
      title: 'Physics & Engineering',
      description: 'Unlock the mysteries of the universe and create innovative solutions for tomorrow\'s challenges.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Business Administration',
      description: 'Learn to lead organizations and drive innovation in the global business landscape.'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Medical Sciences',
      description: 'Join our world-renowned medical program and make a difference in healthcare.'
    },
    {
      icon: <FaPalette />,
      title: 'Arts & Design',
      description: 'Express your creativity and develop professional skills in our modern studios.'
    },
    {
      icon: <FaGlobe />,
      title: 'International Studies',
      description: 'Understand global perspectives and prepare for a career in international relations.'
    }
  ];

  return (
    <ProgramsSection id="programs">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title variants={itemVariants}>
            Our Academic Programs
          </Title>
          <Description variants={itemVariants}>
            Explore our diverse range of programs designed to prepare you for success in your chosen field.
            Each program offers hands-on experience and expert guidance from industry leaders.
          </Description>

          <Grid>
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {program.icon}
                <ProgramTitle>{program.title}</ProgramTitle>
                <ProgramText>{program.description}</ProgramText>
                <LearnMoreButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </LearnMoreButton>
              </ProgramCard>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </ProgramsSection>
  );
};

export default Programs;