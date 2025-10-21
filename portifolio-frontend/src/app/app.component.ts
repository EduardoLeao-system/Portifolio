import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardsProjetosComponent } from './components/cards-projetos/cards-projetos.component';
import { SobreComponent } from './components/sobre/sobre.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardsProjetosComponent, SobreComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects = [
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
    }
  ];
}
