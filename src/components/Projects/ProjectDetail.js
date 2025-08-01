import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Chip, Tabs, Tab, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Matriz de proyectos. El proyecto con ID '1' ahora es tu proyecto "Relojes".
const dummyProjects = [
    {
      id: '1',
      title: 'Relojes',
      description: 'Una aplicación web que muestra varias versiones de relojes digitales y analógicos.',
      coverImage: '/imagenes/image3.png',
      images: [
        '/imagenes/image3.png',
        '/imagenes/image2.png'
      ],
      github: 'https://github.com/Diancafer/Tarea2Frameworks',
      demo: null,
      videos: [],
      technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
      details: 'Este proyecto es una aplicación de reloj interactiva que presenta diferentes estilos, como relojes digitales y analógicos. Fue creada para explorar las funcionalidades de los frameworks web y la manipulación del tiempo. La interfaz de usuario es simple y permite cambiar entre las distintas versiones de relojes.',
      codeSnippet: `// El código completo del proyecto se encuentra en el repositorio de GitHub:
// https://github.com/Diancafer/Tarea2Frameworks
// Aquí puedes ver el componente principal de la aplicación o una función clave.`
    },
    {id: '2',
      title: 'Fifo Lifo',
      description: 'Demuestra el funcionamiento de las estructuras de datos LIFO (Last In, First Out) y FIFO (First In, First Out) con un enfoque en sistemas operativos.',
      coverImage: '/imagenes/image4.png',
      images: [
        '/imagenes/image4.png',
        '/imagenes/image5.png'
      ],
      github: 'https://github.com/Diancafer/Tarea2Frameworks',
      demo: null,
      videos: [],
      technologies: ['C++'],
      details: 'Este proyecto explora y visualiza las estructuras de datos LIFO y FIFO, comúnmente utilizadas en la gestión de memoria y procesos en sistemas operativos. La aplicación permite a los usuarios interactuar con estas colas y pilas para comprender mejor su lógica de funcionamiento.',
      codeSnippet:null
    } ,
    {
        id: '3',
        title: 'Bloc de Notas',
        description: 'Un bloc de notas interactivo creado con React para gestionar tus apuntes de forma sencilla.',
        coverImage: '/imagenes/image.png',
        images: [
          '/imagenes/image.png',
          '/imagenes/image1.png',
        ],
        github: 'https://github.com/Diancafer/notas-',
        demo: null,
        videos: [],
        technologies: ['React', 'HTML', 'CSS'],
        details: 'Aplicación web para tomar notas, con autenticación de usuarios y persistencia de datos en Firebase. Permite a los usuarios crear, editar y eliminar notas, y se enfoca en una interfaz de usuario limpia e intuitiva. Las capturas de pantalla muestran la página principal de la aplicación con las notas y la pantalla de inicio de sesión.',
        codeSnippet: `// El código completo del proyecto se encuentra en el repositorio de GitHub:
// https://github.com/Diancafer/notas-
// Puedes ver el componente de nota aquí: src/components/NoteItem.js`
      }
  ];

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const foundProject = dummyProjects.find(p => p.id === id);
    setProject(foundProject);
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  if (!project) {
    return <Typography variant="h5" align="center" sx={{ mt: 5 }}>Cargando proyecto o no encontrado...</Typography>;
  }

  // Se refactoriza la lógica de las pestañas para que sea dinámica
  const tabs = [
    { label: 'Descripción', content: (
        <Box sx={{ p: 2 }}>
            <Typography variant="body1">{project.details}</Typography>
        </Box>
      )
    },
    { label: 'Tecnologías', content: (
        <Box sx={{ p: 2 }}>
            {project.technologies.map((tech, index) => (
                <Chip key={index} label={tech} color="primary" sx={{ mr: 1, mb: 1 }} />
            ))}
        </Box>
      )
    },
    ...(project.codeSnippet ? [{ label: 'Código', content: (
        <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 1, overflowX: 'auto' }}>
            <pre style={{ margin: 0 }}>
                <code>{project.codeSnippet}</code>
            </pre>
        </Box>
    )}] : []),
    ...(project.demo ? [{ label: 'Demo', content: (
        <Box sx={{ p: 2 }}>
            <Button variant="contained" href={project.demo} target="_blank">Ver Demo en Vivo</Button>
        </Box>
    )}] : []),
    ...(project.github ? [{ label: 'GitHub', content: (
        <Box sx={{ p: 2 }}>
            <Button variant="contained" href={project.github} target="_blank">Ver Código en GitHub</Button>
        </Box>
    )}] : [])
  ];

  return (
    <Box sx={{ p: 3, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        {project.title}
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        {project.images && project.images.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>Imágenes</Typography>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
              {project.images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`${project.title} ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                </div>
              ))}
            </Carousel>
          </Box>
        )}

        {project.videos && project.videos.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>Videos</Typography>
            {project.videos.map((videoUrl, index) => (
              <Box key={index} sx={{ mb: 2, position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                  src={videoUrl}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </Box>
            ))}
          </Box>
        )}

        <Tabs value={selectedTab} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>

        {tabs[selectedTab] && tabs[selectedTab].content}
      </Paper>
    </Box>
  );
}

export default ProjectDetail;
