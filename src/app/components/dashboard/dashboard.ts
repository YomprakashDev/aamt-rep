import { Component } from '@angular/core';
import { DashboardCardsComponent } from "../dashboard-cards-component/dashboard-cards-component";
import { RevenueCard } from "../revenue-card/revenue-card";
import { ContractTypeCard } from "../contract-type-card/contract-type-card";
import { Tabs } from "../../modules/tabs/tabs";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCardsComponent, RevenueCard, ContractTypeCard, Tabs],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
