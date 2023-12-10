import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderHeroComponent } from './gender-hero.component';

describe('GenderHeroComponent', () => {
  let component: GenderHeroComponent;
  let fixture: ComponentFixture<GenderHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenderHeroComponent],
    });
    fixture = TestBed.createComponent(GenderHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
