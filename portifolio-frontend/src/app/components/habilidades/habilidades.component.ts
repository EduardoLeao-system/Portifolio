import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var lucide: any;

interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html'
})
export class HabilidadesComponent implements AfterViewInit {
  
  skills: Skill[] = [
    { name: 'Angular', icon: 'triangle', level: 50, color: '#dd0031' },
    { name: 'TypeScript', icon: 'code', level: 80, color: '#3178c6' },
    { name: 'Java', icon: 'coffee', level: 90, color: '#f89820' },
    { name: 'Spring Boot', icon: 'leaf', level: 85, color: '#6db33f' },
    { name: 'HTML/CSS', icon: 'layout', level: 95, color: '#e34f26' },
    { name: 'JavaScript', icon: 'zap', level: 85, color: '#f7df1e' },
    { name: 'Git', icon: 'git-branch', level: 80, color: '#f05032' },
    { name: 'MySQL', icon: 'database', level: 75, color: '#4479a1' }
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 100);
  }
}