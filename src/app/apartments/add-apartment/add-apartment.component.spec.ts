import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddApartmentComponent } from './add-apartment.component';

describe('AddApartmentComponent', () => {
  let component: AddApartmentComponent;
  let fixture: ComponentFixture<AddApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddApartmentComponent],
    });
    fixture = TestBed.createComponent(AddApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Vérifie que le composant est bien créé
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

