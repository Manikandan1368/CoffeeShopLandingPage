import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { map, Subject, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LayoutModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
 isMobile = false;
  isCollapsed = false;

  ngOnInit(): void {
    this.checkScreenWidth();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenWidth();
  }

  checkScreenWidth(): void {
    this.isMobile = window.innerWidth <= 992;
    if (!this.isMobile) {
      this.isCollapsed = true; 
    } else {
      this.isCollapsed = false; 
    }
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
