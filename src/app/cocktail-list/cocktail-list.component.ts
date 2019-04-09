import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[] = [];

  constructor(public service: CocktailService) {}

  public ngOnInit() {
    this.service.getCocktails().subscribe((paramCocktails: Cocktail[]) => {
      this.cocktails = paramCocktails;
    });
  }
}
