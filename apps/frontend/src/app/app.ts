// Exemplo de como deve ficar o seu app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero'; // Ajuste o nome da classe se necessário

@Component({
  standalone: true,
  imports: [RouterOutlet, Hero], // Adicione aqui!
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  title = 'frontend';
}