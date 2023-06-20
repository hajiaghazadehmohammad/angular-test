import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  isDarkTheme = false;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.isDarkTheme.subscribe(check => this.isDarkTheme = check);
  }

  toggleDarkTheme(checked: boolean) {
    this.isDarkTheme = checked;
    this.themeService.setDarkTheme(checked);
  }
}
