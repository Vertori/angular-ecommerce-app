import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isOpen: boolean = false;

  getIsOpen = (): boolean => {
    return this.isOpen;
  };

  setIsOpen = (value: boolean): void => {
    this.isOpen = value;
  };

  handleClose = (): void => {
    this.isOpen = false;
    console.log("closed")
  };

  toggleSidebar = (): void => {
    this.isOpen = !this.isOpen;
  };

  constructor() {}
}
