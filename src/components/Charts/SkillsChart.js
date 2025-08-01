import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Typography, Paper, Box } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Esta función recibe un array de proyectos y devuelve los datos para el gráfico.
const processProjectsForChart = (projects) => {
  const techCounts = {};
  let totalTechnologies = 0;

  // Recorre todos los proyectos y cuenta las ocurrencias de cada tecnología.
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      techCounts[tech] = (techCounts[tech] || 0) + 1;
      totalTechnologies++;
    });
  });

  // Convierte el objeto de conteo en un array de datos para el gráfico,
  // calculando el porcentaje de cada tecnología.
  const labels = Object.keys(techCounts);
  const data = labels.map(tech => (techCounts[tech] / totalTechnologies) * 100);

  // Define colores para las barras del gráfico.
  const backgroundColors = [
    'rgba(75, 192, 192, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)',
  ];

  return {
    labels,
    datasets: [
      {
        label: 'Porcentaje de Uso (%)',
        data,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map(color => color.replace('0.6', '1')),
        borderWidth: 1,
      },
    ],
  };
};

function SkillsChart({ projects }) {
  // Procesa los datos de los proyectos para el gráfico.
  const chartData = processProjectsForChart(projects);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Oculta la leyenda, ya que solo hay un dataset.
      },
      title: {
        display: true,
        text: 'Porcentaje de Uso de Tecnologías en Proyectos',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y.toFixed(2)}%`;
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Escala de 0 a 100 para porcentajes.
        title: {
          display: true,
          text: 'Porcentaje de Uso (%)',
        }
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: 'auto', borderRadius: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Mi Perfil de Habilidades
        </Typography>
        <Bar data={chartData} options={options} />
      </Paper>
    </Box>
  );
}

export default SkillsChart;