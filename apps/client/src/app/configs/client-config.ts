import {CoreConfigInterface} from "@angular-test/core";
import {environment} from '../../environments/environment'
import {PAGES_MENU_ITEMS} from "./pages-menu";

export class ClientConfig implements CoreConfigInterface {
  environment = environment
  pagesMenuItems = PAGES_MENU_ITEMS
}
