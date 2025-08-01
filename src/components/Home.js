import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SkillsChart from './Charts/SkillsChart';
import { dummyProjects } from '../data/projectsData'; // Importa los datos de los proyectos

function Home() {
  const carouselImages = [
    { src: '/imagenes/image.png', alt: 'Proyecto 1', link: '/proyectos/1' },
    { src: '/imagenes/image3.png', alt: 'Proyecto 2', link: '/proyectos/2' },
    { src: '/imagenes/image4.png', alt: 'Proyecto 3', link: '/proyectos/3' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 128px)' }}>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 5, mb: 5, textAlign: 'center', borderRadius: 3 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            ¡Hola! Soy Diana
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Estudiante de Ingenieria de computacion de la uru en maracaibo, aca podras ver mis proyectos
          </Typography>
          <Button variant="contained" size="large" component={Link} to="/proyectos" sx={{ mt: 2 }}>
            Ver Mis Proyectos
          </Button>
        </Paper>

        <Typography variant="h4" component="h2" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
          Proyectos Destacados
        </Typography>
        <Box sx={{ mb: 5 }}>
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {carouselImages.map((item, index) => (
              <div key={index}>
                <Link to={item.link}>
                  {}
                  <img src={item.src} alt={item.alt} style={{ maxHeight: '150px', width: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </Link>
                <p className="legend" style={{ background: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '10px', position: 'absolute', bottom: '0', width: '100%', margin: '0' }}>{item.alt}</p>
              </div>
            ))}
          </Carousel>
        </Box>
        
        {/* Pasa los proyectos como una prop al componente SkillsChart */}
        <SkillsChart projects={dummyProjects} />
      </Container>
    </Box>
  );
}

export default Home;
