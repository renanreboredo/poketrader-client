import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { GenerationsComponent } from './generations/generations.component';
import { LoginComponent } from './login/login.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: '',
  },
  {
    component: GenerationsComponent,
    path: 'generation',
    canActivate: [AuthGuard]
  },
  {
    component: PokemonListComponent,
    path: 'generation/:id',
    canActivate: [AuthGuard]
  },
  {
    component: TradeHistoryComponent,
    path: 'history',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
