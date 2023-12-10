import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gender-hero',
  templateUrl: './gender-hero.component.html',
  styleUrls: ['./gender-hero.component.css'],
})
export class GenderHeroComponent {
  @Input()
  gender: string = '';
}
