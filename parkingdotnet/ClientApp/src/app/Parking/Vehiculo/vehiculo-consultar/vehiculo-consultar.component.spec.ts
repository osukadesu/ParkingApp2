import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoConsultarComponent } from './vehiculo-consultar.component';

describe('VehiculoConsultarComponent', () => {
  let component: VehiculoConsultarComponent;
  let fixture: ComponentFixture<VehiculoConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
