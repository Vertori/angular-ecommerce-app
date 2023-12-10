import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedHeroComponent } from './categorized-hero.component';

describe('CategorizedHeroComponent', () => {
  let component: CategorizedHeroComponent;
  let fixture: ComponentFixture<CategorizedHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorizedHeroComponent]
    });
    fixture = TestBed.createComponent(CategorizedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
