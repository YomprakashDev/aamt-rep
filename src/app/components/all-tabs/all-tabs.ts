import { Component } from '@angular/core';

@Component({
  selector: 'app-all-tabs',
  imports: [],
  templateUrl: './all-tabs.html',
  styleUrl: './all-tabs.css'
})
export class AllTabs {
tasks = [
    {
      task: 'Payment',
      name: 'Mahima T.',
      document: 'Development Agreement',
      dueDate: '02 Jan 2024',
      assignedBy: 'Harold Schneider',
      frequency: 'One Time'
    },
    {
      task: 'Payment',
      name: 'Chandrakala A.',
      document: 'Development Agreement',
      dueDate: '08 Aug 2024',
      assignedBy: 'Miguel Padberg',
      frequency: 'Installment'
    },
    {
      task: 'Payment',
      name: 'Harish G.',
      document: 'Development Agreement',
      dueDate: '09 Sep 2024',
      assignedBy: 'Vincent Turcotte',
      frequency: 'Monthly'
    },
    {
      task: 'Payment',
      name: 'Dinesh B.',
      document: 'Development Agreement',
      dueDate: '25 Dec 2024',
      assignedBy: 'Karla Lockman',
      frequency: 'Monthly'
    },
    {
      task: 'Payment',
      name: 'Prema L.',
      document: 'Development Agreement',
      dueDate: '01 Jan 2025',
      assignedBy: 'Nick Greenfelder',
      frequency: 'Installment'
    },
    {
      task: 'Payment',
      name: 'Pratik S.',
      document: 'Development Agreement',
      dueDate: '25 Feb 2025',
      assignedBy: 'Denise Halvorson',
      frequency: 'One Time'
    }
  ];

  
}
