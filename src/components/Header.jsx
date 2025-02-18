import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../images/logo.jpeg";

const logoPath = logo;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a237e;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 40px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #1a237e;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: white;
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(motion.a)`
  color: #1a237e;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #303f9f;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <img src={logoPath} alt="Logo" />
          <img src="/university-logo.svg" alt="" />
          <span>UNIVERSITY</span>
        </Logo>

        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <NavLinks isOpen={isMenuOpen}>
          {["Home", "About", "Programs", "Testimonials", "Contact"].map(
            (item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </NavLink>
            )
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
