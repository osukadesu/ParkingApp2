import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRegistrarComponent } from './Parking/Cliente/cliente-registrar/cliente-registrar.component';
import { ClienteConsultarComponent } from './Parking/Cliente/cliente-consultar/cliente-consultar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiculoRegistrarComponent } from './Parking/Vehiculo/vehiculo-registrar/vehiculo-registrar.component';
import { VehiculoConsultarComponent } from './Parking/Vehiculo/vehiculo-consultar/vehiculo-consultar.component';
import { EstacionamientoRegistrarComponent } from './Parking/Estacionamiento/estacionamiento-registrar/estacionamiento-registrar.component';
import { EstacionamientoConsultarComponent } from './Parking/Estacionamiento/estacionamiento-consultar/estacionamiento-consultar.component';
import { TicketRegistrarComponent } from './Parking/Ticket/ticket-registrar/ticket-registrar.component';
import { TicketConsultarComponent } from './Parking/Ticket/ticket-consultar/ticket-consultar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clienteregistrar', component: ClienteRegistrarComponent },
  { path: 'clienteconsultar', component: ClienteConsultarComponent },
  { path: 'vehiculoregistrar', component: VehiculoRegistrarComponent },
  { path: 'vehiculoconsultar', component: VehiculoConsultarComponent },
  { path: 'estacionamientoregistrar', component: EstacionamientoRegistrarComponent },
  { path: 'estacionamientoconsultar', component: EstacionamientoConsultarComponent },
  { path: 'ticketregistrar', component: TicketRegistrarComponent },
  { path: 'ticketconsultar', component: TicketConsultarComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
