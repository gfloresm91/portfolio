import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIntroSectionComponent } from './header-intro-section.component';

describe('HeaderIntroSectionComponent', () => {
  let component: HeaderIntroSectionComponent;
  let fixture: ComponentFixture<HeaderIntroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderIntroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIntroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
