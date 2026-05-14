import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../layout/header/header';
import { Footer } from '../layout/footer/footer';
import { AdminPanel } from '../components/admin-panel/admin-panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, AdminPanel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('lobo-estoico');
}
