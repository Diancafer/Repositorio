import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // alert('Sesión iniciada correctamente');
      navigate('/proyectos'); // Redirige a la página de proyectos
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      // alert('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">Iniciar Sesión</Typography>
      <TextField
        label="Correo Electrónico"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Contraseña"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Iniciar Sesión
      </Button>
      <Button onClick={() => navigate('/registro')} fullWidth sx={{ mt: 1 }}>
        ¿No tienes cuenta? Regístrate
      </Button>
    </Box>
  );
}

export default Login;
