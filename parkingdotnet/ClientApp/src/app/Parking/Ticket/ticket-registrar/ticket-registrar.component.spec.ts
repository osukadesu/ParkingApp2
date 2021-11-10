import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRegistrarComponent } from './ticket-registrar.component';

describe('TicketRegistrarComponent', () => {
  let component: TicketRegistrarComponent;
  let fixture: ComponentFixture<TicketRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
