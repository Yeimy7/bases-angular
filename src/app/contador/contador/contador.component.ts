import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>

    <p>La base es: {{base}}</p>
    <button (click)="incrementar(base)">+{{base}}</button>
    <span   span>{{numero}}</span>
    <button (click)="decrementar(base)">-{{base}}</button>
    
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;

    base: number = 10;
    incrementar(num: number): void {
        this.numero += num;
    }
    decrementar(num: number): void {
        this.numero -= num;
    }
}