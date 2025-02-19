import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: white;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ImageSection = styled.div`
  background-image: url("/src/images/form-img.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  min-height: 600px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 968px) {
    min-height: 300px;
  }
`;

const ContentSection = styled.div`
  padding: 2rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #1a237e;
  margin-bottom: 1.5rem;
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
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a237e;
    box-shadow: 0 0 0 3px rgba(26, 35, 126, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a237e;
    box-shadow: 0 0 0 3px rgba(26, 35, 126, 0.1);
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
        <ImageSection />
        <ContentSection>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Title variants={itemVariants}>Get in Touch</Title>

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
          </motion.div>
        </ContentSection>
      </Container>
    </ContactSection>
  );
};

export default Contact;
