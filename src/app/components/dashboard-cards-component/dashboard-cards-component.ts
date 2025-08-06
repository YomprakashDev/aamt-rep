import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard-cards-component',
  imports: [NgClass],
  templateUrl: './dashboard-cards-component.html',
  styleUrl: './dashboard-cards-component.css'
})
export class DashboardCardsComponent {
 cards = [
    { title: 'Contracts Executed', value: 254, change: 15 },
    { title: 'Under review', value: 254, change: 15 },
    { title: 'Cancelled', value: 254, change: -6 },
    { title: 'Pending Approval', value: 92, change: 8 }
  ];
}
