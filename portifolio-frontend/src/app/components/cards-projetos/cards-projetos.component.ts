import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';

declare var lucide: any;

@Component({
  selector: 'app-cards-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-projetos.component.html',
  styleUrls: ['./cards-projetos.component.css']
})
export class CardsProjetosComponent implements AfterViewInit {
  @Input() project!: Project;

  ngAfterViewInit() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
}
