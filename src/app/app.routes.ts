import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'Call_Ambulance' , component: MapComponent}
];
