import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { AuthService } from '../../../../../../auth/src/lib/services';
import { Router } from '@angular/router';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  constructor(
    public themeService: ThemeService,
    private authService: AuthService,
    private router: Router) {
  }

  signOut() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/auth/login']);
  }
}
