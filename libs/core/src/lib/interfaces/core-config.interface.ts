export interface PagesMenuInterface {
  title: string;
  url: string;
  icon?: string;
  permission?: string;
  children?: PagesMenuInterface[];
}

export type pagesMenuItemsType = PagesMenuInterface[];

export interface CoreConfigInterface {
  pagesMenuItems: pagesMenuItemsType;
  environment: any;
}
