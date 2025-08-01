import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

function Navbar() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
      // alert('Error al cerrar sesión: ' + error.message);
    }
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.dark' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Mi Portafolio
          </Link>
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          {currentUser ? (
            <>
              <Button color="inherit" component={Link} to="/proyectos">Proyectos</Button>
              <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">Iniciar Sesión</Button>
              <Button color="inherit" component={Link} to="/registro">Registrarse</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;