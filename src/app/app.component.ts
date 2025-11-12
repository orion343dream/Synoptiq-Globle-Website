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
    // Handle loading screen
    window.addEventListener('load', () => {
      const loadingScreen = document.getElementById('loadingScreen');
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.style.opacity = '0';
          loadingScreen.style.transition = 'opacity 0.5s ease-out';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
            this.isLoading = false;
          }, 500);
        }
      }, 1000); // Show loader for 1s for better UX
    });

    // Trigger loading screen hide even if load event already fired
    if (document.readyState === 'complete') {
      const loadingScreen = document.getElementById('loadingScreen');
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.style.opacity = '0';
          loadingScreen.style.transition = 'opacity 0.5s ease-out';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
            this.isLoading = false;
          }, 500);
        }
      }, 1000);
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
