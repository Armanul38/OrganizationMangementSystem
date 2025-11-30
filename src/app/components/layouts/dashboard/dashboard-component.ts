import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header-component/header-component';
import { SidebarComponent } from '../sidebar/sidebar-component';
import { FooterComponent } from '../footer/footer-component';

@Component({
  selector: 'app-dashboard-component',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent, CommonModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.scss',
})
export class DashboardComponent {
  isSidebarOpen = signal(false); // Default closed on mobile

  toggleSidebar() {
    this.isSidebarOpen.update(v => !v);
  }
}
