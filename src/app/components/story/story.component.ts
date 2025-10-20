import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {

  constructor(private router: Router) {
  }

  goHome(): void {
    this.router.navigate(['']);
  }
}
