import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-revenue-card',
  imports: [FormsModule],
  templateUrl: './revenue-card.html',
  styleUrl: './revenue-card.css'
})
export class RevenueCard {
selectedPeriod: string = 'last quarter';
  

  // Vertical bars data
  verticalBars = Array(12).fill(0).map((_, i) => ({
    height: Math.random() * 60 + 20,
    color: '#bfdbfe'
  }));

  onPeriodChange(period: string) {
    this.selectedPeriod = period;
    console.log('Period changed to:', period);
    // Handle period change logic here
  }

  onMenuClick() {
    console.log('Menu clicked');
    // Handle menu click
  }
}
