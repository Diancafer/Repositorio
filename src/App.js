import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// Importaciones de los componentes de autenticación
import { AuthProvider } from './components/Auth/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProtectedRoute from './components/Auth/PrivateRoute';

// Rutas de importación para los demás componentes
// Importamos Navbar en lugar de Header para ser consistentes con la última versión
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home';
import ProjectsList from './components/Projects/ProjectsList';
import ProjectDetail from './components/Projects/ProjectDetail';

// Define un tema personalizado para cambiar el color de la aplicación.
const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7', // Color morado de ejemplo
    },
    secondary: {
      main: '#ff9800', // Color naranja de ejemplo
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Envuelve toda la aplicación en AuthProvider */}
        <AuthProvider>
          <Navbar />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              {/* Usa ProtectedRoute para las rutas de proyectos */}
              <Route path="/proyectos" element={<ProtectedRoute><ProjectsList /></ProtectedRoute>} />
              <Route path="/proyectos/:id" element={<ProtectedRoute><ProjectDetail /></ProtectedRoute>} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
