import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

function Header() {
  // Usa el hook para obtener el estado del usuario actual.
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión.
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Portafolio de Diana
          </Link>
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/proyectos">Proyectos</Button>
          {/* Renderizado condicional basado en el estado del usuario */}
          {currentUser ? (
            <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">Iniciar Sesión</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;