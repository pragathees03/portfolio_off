import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import myPhoto from './assets/myphoto.jpg';
import emailjs from 'emailjs-com';

const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    background: '#ffffff',
    text: '#1f2937',
    accent: '#3b82f6',
    sectionBg: '#f3f4f6',
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
  },
};

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};
`;

const Header = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.background};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.1rem;
  transition: color 0.2s;
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Section = styled.section`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 1rem;
  background: ${({ bg }) => (bg ? theme.colors.sectionBg : theme.colors.background)};
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${theme.colors.text};
  max-width: 700px;
  margin-bottom: 2rem;
`;

const Button = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1.5rem;
  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 2rem 1.5rem;
  text-align: left;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(37,99,235,0.15);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  min-height: 120px;
`;

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formRef.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
    .then((result) => {
        alert('Message sent!');
        e.target.reset();
    }, (error) => {
        alert('Failed to send message. Please try again.');
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{ color: theme.colors.primary, fontWeight: 700, fontSize: '2.2rem' }}>Portfolio</h1>
          </motion.div>
          <Nav>
            <NavLink
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </NavLink>
            <NavLink
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(projectsRef)}
            >
              Projects
            </NavLink>
            <NavLink
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </NavLink>
          </Nav>
        </Header>

        {/* Hero Section */}
        <Section>
          <motion.img 
            src={myPhoto} 
            alt="My Photo" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ width: '180px', height: '180px', objectFit: 'cover', borderRadius: '50%', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(37,99,235,0.10)', filter: 'grayscale(100%)' }}
          />
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Pragatheeswaran S K
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
MERN Stack Developer | Problem Solver | Graphic Designer</Subtitle>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => scrollToSection(projectsRef)}
          >
            View My Work
          </Button>
        </Section>

        {/* About Section */}
        <Section ref={aboutRef} bg id="about">
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            About Me
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >

I am a software developer with a passion for building web applications that are fast, beautiful, and user-friendly. I love working with modern technologies and am always eager to learn more and take on new challenges.          </Subtitle>
        </Section>

        {/* Projects Section */}
        <Section ref={projectsRef} id="projects">
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Projects
          </Title>
          <ProjectGrid>
            <ProjectCard
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.open('https://github.com/pragathees03/lancido.git', '_blank', 'noopener,noreferrer')}
              style={{ cursor: 'pointer' }}
            >
              <h3 style={{ color: theme.colors.primary, marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Lancido
              </h3>
              <p>
                Lancido is a freelance service marketplace that connects clients with skilled professionals across various domains.
              </p>
            </ProjectCard>
            <ProjectCard
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.open('https://github.com/pragathees03/Portfolio.git', '_blank', 'noopener,noreferrer')}
              style={{ cursor: 'pointer' }}
            >
              <h3 style={{ color: theme.colors.primary, marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Graphic Design Portfolio
              </h3>
              <p>A portfolio website showcasing my graphic design work, including branding, illustrations, and digital art.</p>
            </ProjectCard>
            <ProjectCard
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.open('https://github.com/pragathees03/todoweb-repo.git', '_blank', 'noopener,noreferrer')}
              style={{ cursor: 'pointer' }}
            >
              <h3 style={{ color: theme.colors.primary, marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Simple To-Do webpage
              </h3>
              <p>A simple to-do webpage with a modern design and seamless user experience.</p>
            </ProjectCard>
          </ProjectGrid>
        </Section>

        {/* Contact Section */}
        <Section ref={contactRef} bg id="contact">
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Contact
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Want to work together or have any questions? Fill out the form below or email me at <a href="mailto:pragatheeswaranoffl@gmail.com" style={{ color: theme.colors.primary }}>pragatheeswaranoffl@gmail.com</a>
          </Subtitle>
          <ContactForm ref={formRef} onSubmit={sendEmail}>
            <Input type="text" name="user_name" placeholder="Your Name" required />
            <Input type="email" name="user_email" placeholder="Your Email" required />
            <TextArea name="message" placeholder="Your Message" required />
            <Button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Send Message</Button>
          </ContactForm>
        </Section>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
