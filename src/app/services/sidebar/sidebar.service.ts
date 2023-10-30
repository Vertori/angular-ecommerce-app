import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isOpen: boolean = false;

  getIsOpen = (): boolean => {
    return this.isOpen;
  };

  setIsOpen = (value: boolean) => {
    this.isOpen = value;
  };

  handleClose = (): void => {
    this.isOpen = false;
  };

  constructor() {}
}
