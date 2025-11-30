import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
    isProfileOpen = signal(false);
    isDarkMode = signal(false);

    toggleProfile() {
      this.isProfileOpen.update(v => !v);
    }

    toggleTheme() {
      this.isDarkMode.update(v => !v);
      if (this.isDarkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
}
