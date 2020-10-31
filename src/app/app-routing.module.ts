import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationsComponent } from './generations/generations.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';

const routes: Routes = [
  {
    component: GenerationsComponent,
    path: 'generation',
  },
  {
    component: PokemonListComponent,
    path: 'generation/:id',
  },
  {
    component: TradeHistoryComponent,
    path: 'history',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
