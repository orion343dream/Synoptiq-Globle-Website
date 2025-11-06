import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // Component-level SCSS removed; styles are migrated to Tailwind/global `styles.scss`
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isScrolled = false;
  isLoading = true;
  mobileMenuOpen = false;

  ngOnInit() {
    // Handle preloader
    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      setTimeout(() => {
        if (preloader) {
          preloader.classList.add('hidden');
          this.isLoading = false;
        }
      }, 1500); // Show loader for 1.5s for better UX
    });

    // Trigger preloader hide even if load event already fired
    if (document.readyState === 'complete') {
      const preloader = document.getElementById('preloader');
      setTimeout(() => {
        if (preloader) {
          preloader.classList.add('hidden');
          this.isLoading = false;
        }
      }, 1500);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Smooth scroll behavior
  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
