import { Component, signal } from '@angular/core';
import { HeaderComponent } from "../header-component/header-component";
import { SidebarComponent } from '../sidebar-component/sidebar-component';

import { DashboardCardsComponent } from "../../components/dashboard-cards-component/dashboard-cards-component";
import { RevenueCard } from "../../components/revenue-card/revenue-card";
import { ContractTypeCard } from "../../components/contract-type-card/contract-type-card";
import { MatTabsModule } from '@angular/material/tabs';
import { Tabs } from "../../modules/tabs/tabs";

@Component({
  selector: 'app-main-layout-component',
    standalone: true,
  imports: [MatTabsModule, HeaderComponent, SidebarComponent, DashboardCardsComponent, RevenueCard, ContractTypeCard, Tabs],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css'
})
export class MainLayoutComponent {



}
