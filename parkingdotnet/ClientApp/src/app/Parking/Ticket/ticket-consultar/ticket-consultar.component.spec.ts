import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketConsultarComponent } from './ticket-consultar.component';

describe('TicketConsultarComponent', () => {
  let component: TicketConsultarComponent;
  let fixture: ComponentFixture<TicketConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
