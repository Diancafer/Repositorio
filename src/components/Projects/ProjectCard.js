// src/components/Projects/ProjectCard.js
// Este componente renderiza la tarjeta de un solo proyecto en la lista.
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: 2 }}>
      <CardActionArea onClick={() => navigate(`/proyectos/${project.id}`)}>
        <CardMedia
          component="img"
          height="140"
          image={project.image || '/imagenes/image4.png'}
          alt={project.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description.substring(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size="small" color="primary" onClick={() => navigate(`/proyectos/${project.id}`)}>
          Ver Más
        </Button>
        {project.github && (
          <Button size="small" color="primary" href={project.github} target="_blank">
            Código
          </Button>
        )}
        {project.demo && (
          <Button size="small" color="primary" href={project.demo} target="_blank">
            Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
