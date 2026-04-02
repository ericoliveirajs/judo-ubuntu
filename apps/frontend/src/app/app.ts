// Exemplo de como deve ficar o seu app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero';
import { Philosophy } from './components/philosophy';
import { AboutComponent } from './components/about.component';
import { ScheduleComponent } from './components/schedule.component';
import { HeaderComponent } from './components/header.component';


@Component({
  standalone: true,
  imports: [RouterOutlet, Hero, Philosophy, AboutComponent, ScheduleComponent, HeaderComponent], // Adicione aqui!
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  title = 'frontend';
}