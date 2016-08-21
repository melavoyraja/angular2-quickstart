import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';

@Component({
    selector:'my-heroes',
    templateUrl:'app/heroes.component.html',
    styleUrls:['app/heroes.component.css']

})

export class HeroesComponent implements OnInit{

    constructor(private heroService:HeroService,
    private router:Router){ }

    ngOnInit():void{
      this.getHeroes();
    }

    heroes:Hero[];
    selectedHero:Hero;

    getHeroes():void{
      // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    onSelect(hero:Hero){
        this.selectedHero = hero;
    }

    gotoDetail():void{
      this.router.navigate(['/detail',this.selectedHero.id]);
    }

}

