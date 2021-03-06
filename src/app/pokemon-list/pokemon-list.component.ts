import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Pokemon, PoketraderApiService } from '../poketrader-api.service';

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
    if (player === 1 && this.selectedPokemonsP1.length < 6) {
      this.selectedPokemonsP1 = [...this.selectedPokemonsP1, pokemon];
    } else if(player === 2 && this.selectedPokemonsP2.length < 6) {
      this.selectedPokemonsP2 = [...this.selectedPokemonsP2, pokemon];
    }
  }

  trade() {
    const userID = this.authService.currentUserValue.userID;
    this.pokeapiService.trade(this.selectedPokemonsP1, this.selectedPokemonsP2, userID).subscribe((res: any) => {
      if (res.data !== false) {
        this.router.navigateByUrl('history');
      }
    });
  }

  checkTrade() {
    const userID = this.authService.currentUserValue.userID;
    this.pokeapiService.isFairTrade(this.selectedPokemonsP1, this.selectedPokemonsP2).subscribe((res: any) => {
      this.isFair = res.data;
    });
  }

  removePokemonFromTrade(pokemon: Pokemon, player) {
    if (player === 1) {
      this.selectedPokemonsP1 = this.removePokemonFromArray(this.selectedPokemonsP1, pokemon);
    } else {
      this.selectedPokemonsP2 = this.removePokemonFromArray(this.selectedPokemonsP2, pokemon);
    }
  }

  removePokemonFromArray(pokemons: any[], pokemonRemoved) {
    let found = false;
    const removedPokemonArr = pokemons.filter(item => {
      if (pokemonRemoved.name === item.name && !found) {
        found = true;
        return false;
      }
      return pokemonRemoved.name === item.name && found;
    });
    const remainderPokemonArr = pokemons.filter(pkmn => pokemonRemoved.name !== pkmn.name);
    return [ ...removedPokemonArr, ...remainderPokemonArr ];
  }
}
