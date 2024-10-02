import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pressBtn1(){
    alert('Presionaste el Boton 1')
  }
  pressBtn2(){
    alert('Presionaste el Boton 2')
  }
  pressBtn3(){
    alert('Presionaste el Boton 3')
  }
}
