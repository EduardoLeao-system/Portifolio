import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-cards-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-projetos.component.html',
  styleUrls: ['./cards-projetos.component.css']
})
export class CardsProjetosComponent {
  @Input() project!: Project;
}
