import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionamientoConsultarComponent } from './estacionamiento-consultar.component';

describe('EstacionamientoConsultarComponent', () => {
  let component: EstacionamientoConsultarComponent;
  let fixture: ComponentFixture<EstacionamientoConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacionamientoConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionamientoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
