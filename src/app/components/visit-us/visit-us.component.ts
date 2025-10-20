import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-us',
  imports: [],
  templateUrl: './visit-us.component.html',
  styleUrl: './visit-us.component.css'
})
export class VisitUsComponent {

  constructor(private router: Router){

  }

  goHome(): void {
    this.router.navigate(['']); 
  }

}
