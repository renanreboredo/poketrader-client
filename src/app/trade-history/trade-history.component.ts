import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PoketraderApiService } from '../poketrader-api.service';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.scss'],
})
export class TradeHistoryComponent implements OnInit {
  history: any[];
  constructor(private pokeapiService: PoketraderApiService, private authService: AuthService) {}

  ngOnInit(): void {
    const userID = this.authService.currentUserValue.userID;
    this.pokeapiService
      .tradeHistory(userID)
      .subscribe((res: any) => (this.history = res.data));
  }

  localeString(date: string) {
    return new Date(date).toLocaleString();
  }
}
