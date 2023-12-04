import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;

  constructor(public sidebarService: SidebarService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.isActive = window.scrollY > 40;
    });
  }
}
