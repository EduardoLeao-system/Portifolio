// ...existing code...
import { Injectable } from '@angular/core';
import { TimelineItem } from '../models/timelineItem.model';

@Injectable({ providedIn: 'root' })
export class TimelineItemService {
  getTimelineItems(): TimelineItem[] {
    return [
      {
        year: '2019',
        title: 'Primeiros Passos',
        description: 'Descobri minha paixão pela programação. Comecei com HTML, CSS e JavaScript, criando meus primeiros projetos web.',
        side: 'left',
        color: 'purple'
      },
      {
        year: '2020',
        title: 'Frameworks Modernos',
        description: 'Mergulhei no mundo dos frameworks. Aprendi Angular e React, desenvolvendo aplicações mais complexas e escaláveis.',
        side: 'right',
        color: 'blue'
      },
      {
        year: '2021',
        title: 'Backend e APIs',
        description: 'Expandi para o desenvolvimento backend com Node.js e bancos de dados. Criei APIs RESTful e aprendi sobre arquitetura de software.',
        side: 'left',
        color: 'indigo'
      },
      {
        year: '2022',
        title: 'Projetos Profissionais',
        description: 'Participei de projetos reais em equipe. Aprendi metodologias ágeis, versionamento com Git e boas práticas de código.',
        side: 'right',
        color: 'violet'
      },
      {
        year: '2023-2025',
        title: 'Crescimento Contínuo',
        description: 'Continuo evoluindo, explorando novas tecnologias como cloud computing, DevOps e sempre buscando entregar soluções inovadoras.',
        side: 'left',
        color: 'pink'
      }
    ];
  }
}
// ...existing code...
