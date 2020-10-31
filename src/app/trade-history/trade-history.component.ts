import { Component, OnInit } from '@angular/core';
import { PoketraderApiService } from '../poketrader-api.service';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.scss'],
})
export class TradeHistoryComponent implements OnInit {
  history: any[];
  constructor(private pokeapiService: PoketraderApiService) {}

  ngOnInit(): void {
    const userID = '5f9c7e5ccb49543db3c90656';
    this.pokeapiService
      .tradeHistory(userID)
      .subscribe((res: any) => (this.history = res.data));
  }

  localeString(date: string) {
    return new Date(date).toLocaleString();
  }
}
