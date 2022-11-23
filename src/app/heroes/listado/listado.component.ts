import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  listadoHeroes: string[] = ['IronMan', 'Batman', 'Superman', 'Spiderman', 'Captain America'];
  heroeBorrado: string = ''
  borrarHeroe(): void {
    this.heroeBorrado = this.listadoHeroes.shift() || ''
  }
}
