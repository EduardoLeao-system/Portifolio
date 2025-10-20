// ...existing code...
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItem } from "../../models/timelineItem.model";
import { TimelineItemService } from '../../services/timelineItem.service';

@Component({
  selector: "app-sobre",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sobre.component.html",
})
export class SobreComponent implements OnInit {
  timelineItems: TimelineItem[] = [];

  constructor(private timelineService: TimelineItemService) {}

  ngOnInit(): void {
    this.timelineItems = this.timelineService.getTimelineItems();
  }

  getCardClasses(color: string) {
    // exemplos simples; ajuste conforme seu design Tailwind
    const map: Record<string, string> = {
      purple: 'from-purple-600 to-purple-800 border-purple-700',
      blue: 'from-blue-600 to-blue-800 border-blue-700',
      indigo: 'from-indigo-600 to-indigo-800 border-indigo-700',
      violet: 'from-violet-600 to-violet-800 border-violet-700',
      pink: 'from-pink-500 to-pink-700 border-pink-600'
    };
    return map[color] ?? 'from-gray-700 to-gray-900 border-gray-800';
  }

  getYearClasses(color: string) {
    const map: Record<string, string> = {
      purple: 'text-purple-200',
      blue: 'text-blue-200',
      indigo: 'text-indigo-200',
      violet: 'text-violet-200',
      pink: 'text-pink-200'
    };
    return map[color] ?? 'text-gray-300';
  }

  getCircleClasses(color: string) {
    const map: Record<string, string> = {
      purple: 'bg-gradient-to-br from-purple-500 to-purple-700',
      blue: 'bg-gradient-to-br from-blue-500 to-blue-700',
      indigo: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
      violet: 'bg-gradient-to-br from-violet-500 to-violet-700',
      pink: 'bg-gradient-to-br from-pink-400 to-pink-600'
    };
    return map[color] ?? 'bg-gray-600';
  }
}

