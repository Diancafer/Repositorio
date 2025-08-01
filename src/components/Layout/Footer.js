import React from 'react';
import { Box, Typography, Container, Link as MuiLink } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', p: 3, mt: 'auto', textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="body2">
          © {new Date().getFullYear()} Mi Portafolio Personal. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2">
          Hecho por Diana en Maracaibo, profe porfa no me raspe xd 
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <MuiLink href="https://github.com/Diancafer" color="inherit" target="_blank" sx={{ mr: 1 }}>
            GitHub
          </MuiLink>
          <MuiLink href="www.linkedin.com/in/diancafer" color="inherit" target="_blank">
            LinkedIn
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;