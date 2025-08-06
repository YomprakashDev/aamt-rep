import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-component',
  imports: [],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css'
})
export class SidebarComponent {
activeItem: string = 'dashboard'; 

  menuItems = [
    { id: 'dashboard', icon: 'dashboard', tooltip: 'Dashboard' },
    { id: 'documents', icon: 'document', tooltip: 'Documents' },
    { id: 'cube1', icon: 'cube', tooltip: 'Cube 1' },
    { id: 'cube2', icon: 'cube', tooltip: 'Cube 2' },
    { id: 'calendar', icon: 'calendar', tooltip: 'Calendar' },
    { id: 'grid', icon: 'grid', tooltip: 'Grid' },
    { id: 'tag', icon: 'tag', tooltip: 'Tags' },
    { id: 'users', icon: 'users', tooltip: 'Users' },
    { id: 'settings', icon: 'settings', tooltip: 'Settings' }
  ];

  onMenuClick(itemId: string) {
    this.activeItem = itemId;
    console.log('Menu item clicked:', itemId);

  }
}
