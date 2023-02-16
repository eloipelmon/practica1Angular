import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica1Angular';
  miClase: string = 'claro';
  cambioClase() {
    if (this.miClase === 'claro') {
      this.miClase = 'oscuro';
    } else {
      this.miClase = 'claro';
    }
  }
}
