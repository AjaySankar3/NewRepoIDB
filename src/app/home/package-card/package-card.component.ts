import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PackageCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
