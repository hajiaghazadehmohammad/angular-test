import { Component } from '@angular/core';
import { CoreManagerService } from '../../services/core-manager.service';
import {pagesMenuItemsType} from "@angular-test/core";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  menuItems: pagesMenuItemsType = [];

  constructor(private coreManagerService: CoreManagerService) {
    this.menuItems = this.coreManagerService.coreConfig.pagesMenuItems;
  }

}
