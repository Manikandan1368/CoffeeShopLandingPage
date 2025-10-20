import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})  
export class HomeComponent {
 features = [
    { icon: 'assets/espresso.png', title: 'Espresso', desc: 'Strong, bold, and aromatic.' },
    { icon: 'assets/latte.png', title: 'Latte', desc: 'Smooth milk with espresso shot.' },
    { icon: 'assets/mocha.png', title: 'Mocha', desc: 'Rich chocolate with coffee blend.' },
    { icon: 'assets/brew.png', title: 'Cold Brew', desc: 'Slow-brewed perfection.' },
  ];

  coffees = [
    { image: 'assets/images/coffee1.jpg', title: 'Espresso Deluxe' },
    { image: 'assets/images/coffee2.jpg', title: 'Latte Love' },
    { image: 'assets/images/coffee3.jpg', title: 'Cappuccino Art' },
    { image: 'assets/images/coffee4.jpg', title: 'Mocha Bliss' },
  ];

}
