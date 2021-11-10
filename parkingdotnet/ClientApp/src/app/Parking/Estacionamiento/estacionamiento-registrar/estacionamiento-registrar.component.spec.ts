import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionamientoRegistrarComponent } from './estacionamiento-registrar.component';

describe('EstacionamientoRegistrarComponent', () => {
  let component: EstacionamientoRegistrarComponent;
  let fixture: ComponentFixture<EstacionamientoRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacionamientoRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionamientoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
