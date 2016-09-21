import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { RestService } from './rest.service';
@Component({
  selector: 'my-app',
  templateUrl: './app/hero.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
  public heroes: Hero[] = [];
  myHero = {};
  errorMessage = {};
  constructor(private heroService: HeroService, private apiService: RestService) {
  //   this.heroes=heroService.getHeroes();
  //   this.myHero = this.heroes[0];
  // }
    this.apiService.getData()
      .subscribe(
      heroes => { this.heroes = heroes; this.myHero = this.heroes[0] },
      error => this.errorMessage = <any>error);
  }
}