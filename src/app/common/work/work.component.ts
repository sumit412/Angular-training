import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  worksData = [
    { iconClass: 'flaticon-lightbulb-idea', title: 'choose what to do', description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.', link: '#' },
    { iconClass: 'flaticon-networking', title: 'find what you want', description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.', link: '#' },
    { iconClass: 'flaticon-location-on-road', title: 'explore amazing place', description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.', link: '#' }
  ];

  navigateTo(link: string): void {
    // Handle navigation logic here
    console.log(`Navigating to: ${link}`);
  }
}
