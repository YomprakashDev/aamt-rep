import { Component, signal } from '@angular/core';
import { AllTabs } from "../../components/all-tabs/all-tabs";
import { MyTasks } from "../../components/my-tasks/my-tasks";
import { Resloved } from "../../components/resloved/resloved";

@Component({
  selector: 'app-tabs',
  imports: [AllTabs, MyTasks, Resloved],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {
  currentTab = signal('all-tasks')


  onChangeTab(tab: string) {
    this.currentTab.set(tab)
  }
}
