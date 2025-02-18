import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: #f8f9fa;
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

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: #1a237e;
  }
`;

const QuoteIcon = styled.div`
  color: #1a237e;
  font-size: 2rem;
  margin-bottom: 1rem;
  opacity: 0.2;
`;

const TestimonialText = styled.p`
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const StudentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StudentImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const StudentDetails = styled.div`
  flex: 1;
`;

const StudentName = styled.h4`
  color: #1a237e;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
`;

const StudentProgram = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Stars = styled.div`
  color: #ffd700;
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

const Testimonials = () => {
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

  const testimonials = [
    {
      text: "The professors here are not just educators; they're mentors who truly care about your success. The hands-on experience I gained was invaluable.",
      name: "Sarah Johnson",
      program: "Computer Science, Class of 2023",
      image: "/student1.jpg",
      stars: 5
    },
    {
      text: "The diverse community and international perspective have broadened my horizons. I've made lifelong friends from all over the world.",
      name: "Michael Chen",
      program: "International Business, Class of 2022",
      image: "/student2.jpg",
      stars: 5
    },
    {
      text: "The research opportunities here are unmatched. I've been able to work on groundbreaking projects that are making a real impact in my field.",
      name: "Emily Rodriguez",
      program: "Biomedical Engineering, Class of 2023",
      image: "/student3.jpg",
      stars: 5
    }
  ];

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title variants={itemVariants}>
            Student Testimonials
          </Title>
          <Description variants={itemVariants}>
            Hear from our students about their experiences and how our university
            has helped shape their future.
          </Description>

          <Grid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <StudentInfo>
                  <StudentImage src={testimonial.image} alt={testimonial.name} />
                  <StudentDetails>
                    <StudentName>{testimonial.name}</StudentName>
                    <StudentProgram>{testimonial.program}</StudentProgram>
                    <Stars>
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </Stars>
                  </StudentDetails>
                </StudentInfo>
              </TestimonialCard>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;