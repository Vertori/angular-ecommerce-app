import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categorized-hero',
  templateUrl: './categorized-hero.component.html',
  styleUrls: ['./categorized-hero.component.css'],
})
export class CategorizedHeroComponent {
  @Input()
  gender: string = '';
}
