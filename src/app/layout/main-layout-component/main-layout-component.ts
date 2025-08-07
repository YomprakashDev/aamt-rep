import { Component, signal } from '@angular/core';
import { HeaderComponent } from "../header-component/header-component";
import { SidebarComponent } from '../sidebar-component/sidebar-component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout-component',
    standalone: true,
  imports: [MatTabsModule, HeaderComponent, SidebarComponent,  RouterOutlet],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css'
})
export class MainLayoutComponent {



}
