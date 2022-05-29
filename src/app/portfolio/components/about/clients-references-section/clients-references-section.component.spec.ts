import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsReferencesSectionComponent } from './clients-references-section.component';

describe('ClientsReferencesSectionComponent', () => {
  let component: ClientsReferencesSectionComponent;
  let fixture: ComponentFixture<ClientsReferencesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsReferencesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsReferencesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
