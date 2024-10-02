import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() image!:string;
  @Input() tittle!:string;
  @Input() info!:string;
  @Input() textBtn!:string;
  @Input() clickEvent!:() => void;

  onClick(){
    this.clickEvent();
  }
}
