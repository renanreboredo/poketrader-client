import { Component, OnInit } from '@angular/core';
import { PoketraderApiService } from '../poketrader-api.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss'],
})
export class GenerationsComponent implements OnInit {
  generations: any[];

  constructor(private poketraderAPI: PoketraderApiService) {}

  ngOnInit(): void {
    this.generations = this.poketraderAPI.getGenerations();
  }

  public adjustGenerationName(prevName: string): string {
    return 'Generation ' + prevName.split('-')[1].toUpperCase();
  }
}
