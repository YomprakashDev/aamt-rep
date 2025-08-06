import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  imports: [FormsModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
 searchQuery: string = '';

  onSearch() {
    // Handle search functionality
    console.log('Search query:', this.searchQuery);
  }

  onNotificationClick() {
    // Handle notification click
    console.log('Notification clicked');
  }

  onProfileClick() {
    // Handle profile click
    console.log('Profile clicked');
  }
}
