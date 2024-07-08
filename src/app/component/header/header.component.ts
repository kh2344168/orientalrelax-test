import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  treatmentLestOpen = false;
  aboutLestOpen = false;
  treatmentLestOpenMop = false;
  aboutLestOpenMop = false;

  treatmentLest() {
    this.aboutLestOpen = false;
    this.treatmentLestOpen = !this.treatmentLestOpen;
  }
  aboutLest() {
    this.treatmentLestOpen = false
    this.aboutLestOpen = !this.aboutLestOpen;
  }
  aboutLestMop() {
    this.treatmentLestOpenMop=false
    this.aboutLestOpenMop = !this.aboutLestOpenMop;
  }
  treatmentLestMop() {
    this.aboutLestOpenMop =false
    this.treatmentLestOpenMop = !this.treatmentLestOpenMop;
  }
}
