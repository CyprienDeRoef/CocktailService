import { Component, OnInit } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { Cocktail } from './cocktail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cocktails';
  public cocktails: Cocktail[];
  public service: CocktailService;

  constructor( paramService: CocktailService) {
    this.service = paramService;
  }

}
