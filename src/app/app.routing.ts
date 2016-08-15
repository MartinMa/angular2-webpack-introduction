import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { PageNotFoundComponent } from './page-not-found';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
