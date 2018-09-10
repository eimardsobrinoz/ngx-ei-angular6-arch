// @angular
import { Component, OnInit } from '@angular/core';

// Custom
import { NavService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _navService: NavService) { }

  ngOnInit() {
  }

}
