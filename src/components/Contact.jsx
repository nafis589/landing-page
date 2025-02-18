import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = styled.section`
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
  gap: 3rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.5rem;
    color: #1a237e;
  }
`;

const InfoText = styled.div`
  h3 {
    color: #1a237e;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a237e;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a237e;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #1a237e;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #303f9f;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: #1a237e;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #303f9f;
  }
`;

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title variants={itemVariants}>Contact Us</Title>
          <Description variants={itemVariants}>
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </Description>

          <Grid>
            <ContactInfo>
              <InfoItem variants={itemVariants}>
                <FaMapMarkerAlt />
                <InfoText>
                  <h3>Visit Us</h3>
                  <p>
                    123 University Avenue
                    <br />
                    City, State 12345
                  </p>
                </InfoText>
              </InfoItem>

              <InfoItem variants={itemVariants}>
                <FaPhone />
                <InfoText>
                  <h3>Call Us</h3>
                  <p>+1 (234) 567-8900</p>
                </InfoText>
              </InfoItem>

              <InfoItem variants={itemVariants}>
                <FaEnvelope />
                <InfoText>
                  <h3>Email Us</h3>
                  <p>admissions@university.edu</p>
                </InfoText>
              </InfoItem>

              <SocialLinks>
                <SocialLink
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook />
                </SocialLink>
                <SocialLink
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter />
                </SocialLink>
                <SocialLink
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </SocialLink>
                <SocialLink
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram />
                </SocialLink>
              </SocialLinks>
            </ContactInfo>

            <Form variants={itemVariants} onSubmit={handleSubmit}>
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="text" placeholder="Subject" required />
              <TextArea placeholder="Your Message" required />
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </SubmitButton>
            </Form>
          </Grid>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact;
