import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardsProjetosComponent } from './components/cards-projetos/cards-projetos.component';
import { ProjectService } from './services/project.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardsProjetosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects: Project[];

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }
}
