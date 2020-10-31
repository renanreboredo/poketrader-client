import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PoketraderApiService } from '../poketrader-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons = [];

  id: number;

  isFair = false;

  selectedPokemonsP1 = [];
  selectedPokemonsP2 = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokeapiService: PoketraderApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.pokeapiService
        .getPokemonsFromGeneration(this.id)
        .subscribe((res: any) => (this.pokemons = res.data));
    });
  }

  addToPlayer(player: number, pokemon) {
    if (player === 1) {
      this.selectedPokemonsP1 = [...this.selectedPokemonsP1, pokemon];
    } else {
      this.selectedPokemonsP2 = [...this.selectedPokemonsP2, pokemon];
    }
  }

  trade() {
    const userID = this.authService.currentUserValue.userID;
    this.pokeapiService.trade(this.selectedPokemonsP1, this.selectedPokemonsP2, userID).subscribe((res: any) => {
      if (res.message === 'Success') {
        this.router.navigateByUrl('history');
      }
    });
  }

  checkTrade() {
    const userID = this.authService.currentUserValue.userID;
    this.pokeapiService.isFairTrade(this.selectedPokemonsP1, this.selectedPokemonsP2).subscribe((res: any) => {
      this.isFair = res.message === 'Success';
    });
  }
}
