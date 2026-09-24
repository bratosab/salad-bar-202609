import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [RouterLink, RouterOutlet, MatToolbar, MatIcon],
})
export class App {
  protected readonly title = signal('salad-bar');
}
