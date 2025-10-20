import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  imports: [CommonModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

  constructor(private router: Router) { }

  coffeeMenu = [
    {
      name: 'Espresso',
      image: 'assets/espresso.png',
      description: 'Strong and bold coffee shot.'
    },
    {
      name: 'Latte',
      image: 'assets/latte.png',
      description: 'Smooth blend of coffee and milk.'
    },
    {
      name: 'Mocha',
      image: 'assets/mocha.png',
      description: 'Chocolate-flavored coffee drink.'
    },
    {
      name: 'Cold Brew',
      image: 'assets/brew.png',
      description: 'slow-brewed, Less bitter and more chill.'
    },
  ];

  goHome(): void {
    this.router.navigate(['']);
  }

}
