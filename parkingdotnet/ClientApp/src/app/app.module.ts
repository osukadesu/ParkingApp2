import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ClienteRegistrarComponent } from './Parking/Cliente/cliente-registrar/cliente-registrar.component';
import { ClienteConsultarComponent } from './Parking/Cliente/cliente-consultar/cliente-consultar.component';
import { VehiculoConsultarComponent } from './Parking/Vehiculo/vehiculo-consultar/vehiculo-consultar.component';
import { VehiculoRegistrarComponent } from './Parking/Vehiculo/vehiculo-registrar/vehiculo-registrar.component';
import { EstacionamientoRegistrarComponent } from './Parking/Estacionamiento/estacionamiento-registrar/estacionamiento-registrar.component';
import { EstacionamientoConsultarComponent } from './Parking/Estacionamiento/estacionamiento-consultar/estacionamiento-consultar.component';
import { TicketConsultarComponent } from './Parking/Ticket/ticket-consultar/ticket-consultar.component';
import { TicketRegistrarComponent } from './Parking/Ticket/ticket-registrar/ticket-registrar.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ClienteRegistrarComponent,
    ClienteConsultarComponent,
    VehiculoConsultarComponent,
    VehiculoRegistrarComponent,
    EstacionamientoRegistrarComponent,
    EstacionamientoConsultarComponent,
    TicketConsultarComponent,
    TicketRegistrarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
