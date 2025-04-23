import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ItemsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'angular-api-demo';
}
