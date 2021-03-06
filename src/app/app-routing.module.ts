import { CountdownComponent } from './countdown/countdown.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { HistoriaComponent } from './historia/historia.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes}  from '@angular/router'

const routes: Routes = [
{path: 'inicio', component: InicioComponent},
{path: 'historia', component: HistoriaComponent},
{path: 'rsvp', component: RsvpComponent},
{path: 'countdown', component: CountdownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
  
})
export class AppRoutingModule { }
