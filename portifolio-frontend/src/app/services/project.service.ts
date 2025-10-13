import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Portfolio Angular + Spring Boot',
        description: 'Portfólio full stack moderno com design responsivo e integração completa entre frontend e backend.',
        techStack: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'Tailwind CSS'],
        githubUrl: 'https://github.com/EduardoLeao-system/portifolio',
        liveDemoUrl: 'https://eduardo-portfolio.vercel.app'
      },
      {
        id: 2,
        title: 'Sistema de Gerenciamento',
        description: 'Sistema completo para gerenciamento de usuários com autenticação JWT e dashboard administrativo.',
        techStack: ['Angular', 'Spring Security', 'MySQL', 'Bootstrap'],
        githubUrl: 'https://github.com/EduardoLeao-system/management-system',
        liveDemoUrl: ''
      },
      {
        id: 3,
        title: 'E-commerce API',
        description: 'API RESTful para e-commerce com carrinho de compras, pagamentos e gestão de produtos.',
        techStack: ['Spring Boot', 'JPA', 'PostgreSQL', 'Docker'],
        githubUrl: 'https://github.com/EduardoLeao-system/ecommerce-api',
        liveDemoUrl: ''
      },
      {
        id: 4,
        title: 'Task Manager App',
        description: 'Aplicativo de gerenciamento de tarefas com drag & drop, categorias e notificações.',
        techStack: ['Angular', 'RxJS', 'Firebase', 'Material UI'],
        githubUrl: 'https://github.com/EduardoLeao-system/task-manager',
        liveDemoUrl: 'https://task-manager-demo.netlify.app'
      },
      {
        id: 5,
        title: 'Weather Dashboard',
        description: 'Dashboard meteorológico com previsões, gráficos interativos e geolocalização.',
        techStack: ['Angular', 'Chart.js', 'OpenWeather API', 'PWA'],
        githubUrl: 'https://github.com/EduardoLeao-system/weather-dashboard',
        liveDemoUrl: 'https://weather-dash-app.netlify.app'
      },
      {
        id: 6,
        title: 'Blog Platform',
        description: 'Plataforma de blog com editor rich text, comentários e sistema de tags.',
        techStack: ['Angular', 'Spring Boot', 'MongoDB', 'Redis'],
        githubUrl: 'https://github.com/EduardoLeao-system/blog-platform',
        liveDemoUrl: ''
      }
    ];
  }
}
