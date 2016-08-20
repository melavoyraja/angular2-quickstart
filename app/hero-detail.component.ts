import {Component, Input} from '@angular/core';
import {Hero} from './hero';


@Component({
    selector:'my-hero-detail',
    template:`<div *ngIf="hero">
    <h2>
        {{hero.name}}
    </h2>
    <div>
        <label>id:</label>{{hero.id}}
    </div>
    
        <label>name:</label>
        <input [(ngModel)]="hero.name" placeholder="Name" >
    </div>`
})

export class HeroDetailComponent{
    @Input()
    hero:Hero;
}