import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ItemsComponent implements OnInit {
  items: any[] = []; // Array to store fetched data

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    // Fetch data from the API and store it in the items array
    this.items = await this.apiService.getItems();
    this.items = this.items.slice(0, 10); // Limit to 10 items
  }
}
