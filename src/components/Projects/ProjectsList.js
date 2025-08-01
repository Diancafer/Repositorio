// src/components/Projects/ProjectsList.js
// Este componente muestra la lista completa de proyectos.
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard'; // En un proyecto real, se importaría así.
import { Box, Grid, Typography } from '@mui/material';

// Matriz de proyectos para la lista. En una aplicación real,
// esto se cargaría de una API o un archivo de datos.
const dummyProjects = [
  {
    id: '1',
    title: 'Relojes',
    description: 'Una aplicacion que muestra varias versiones de relojes',
    image: '/imagenes/image3.png',
    github: 'https://github.com/Diancafer/Tarea2Frameworks',
    demo: null,
    videos: null, 
    technologies: ['TypeScript', 'CSS', 'HTML'],
    details: 'Este proyecto es una aplicación de reloj interactiva que presenta diferentes estilos, como relojes digitales y analógicos. Fue creada para explorar las funcionalidades de los frameworks web y la manipulación del tiempo. La interfaz de usuario es simple y permite cambiar entre las distintas versiones de relojes.',
    images: ['/imagenes/image2.png', '/imagenes/image3.png'],
    codeSnippet: `// El código completo del proyecto se encuentra en el repositorio de GitHub:
// https://github.com/Diancafer/Tarea2Frameworks
import React from 'react';
function ProductDisplay({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}`
  },
  {
    id: '2',
    title: 'Fifo Lifo',
    description: 'Demuestra el funcionamiento de las estructuras de datos LIFO (Last In, First Out) y FIFO (First In, First Out) con un enfoque en sistemas operativos.',
    image: '/imagenes/image4.png',
    github: 'https://github.com/Diancafer/Tarea2Frameworks',
    demo: null,
    videos: [],
    technologies: ['c++'],
    details: 'Una aplicación para organizar tus tareas diarias, enfocada en la experiencia de usuario.',
    images: ['/imagenes/image4.png','/imagenes/image5.png'],
    codeSnippet: `// Código de ejemplo
<template>
  <div>
    <h2>{{ todo.title }}</h2>
    <p>{{ todo.completed ? 'Completed' : 'Pending' }}</p>
  </div>
</template>`
  },
  {
    id: '3',
    title: 'Bloc de Notas',
    description: 'Un bloc de notas interactivo creado con React para gestionar tus apuntes de forma sencilla.',
    image: '/imagenes/image.png',
    github: 'https://github.com/Diancafer/notas-',
    demo: null,
    videos: [],
    technologies: ['React', 'HTML', 'CSS'],
    details: 'Aplicación web para tomar notas, con autenticación de usuarios y persistencia de datos en Firebase. Permite a los usuarios crear, editar y eliminar notas, y se enfoca en una interfaz de usuario limpia e intuitiva. Las capturas de pantalla muestran la página principal de la aplicación con las notas y la pantalla de inicio de sesión.',
    images: ['/imagenes/image.png', '/imagenes/image1.png'],
    codeSnippet: `// El código completo del proyecto se encuentra en el repositorio de GitHub:
// https://github.com/Diancafer/notas-
// Puedes ver el componente de nota aquí: src/components/NoteItem.js`
  },
];

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // En un proyecto real, aquí cargarías los proyectos desde una fuente de datos
    setProjects(dummyProjects);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Mis Proyectos
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectsList;
