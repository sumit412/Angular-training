import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-facility-card',
  templateUrl: './facility-card.component.html',
  styleUrls: ['./facility-card.component.css']
})
export class FacilityCardComponent {
  @Input() dataFromParent : string | undefined;

  ngOnChanges(changes: SimpleChanges) {
    // Log changes for debugging
    console.log('Input changes:', changes);
  }
 
  ngOnInit() { }
}
