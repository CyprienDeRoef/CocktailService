
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from '../app/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails: Cocktail[];
  public service: HttpClient;

  constructor(paramService: HttpClient) {
    this.service = paramService;
  }

  public getCocktails(): Observable<Cocktail[]> {
    const obs1: Observable<any> = this.service.get('assets/cocktails.json');
    const treatment = (paramData: any) => {
      return paramData as Cocktail[];
    };
    return obs1.pipe( map( treatment));
  }
}
