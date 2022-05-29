import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../../services/about.service';
import { UserInfo } from '../../../interfaces/about/user-info.interfaces';

@Component({
  selector: 'app-header-intro-section',
  templateUrl: './header-intro-section.component.html',
  styleUrls: ['./header-intro-section.component.css'],
})
export class HeaderIntroSectionComponent implements OnInit {
  userInfo: UserInfo[] = [];

  constructor(private _aboutService: AboutService) {}

  ngOnInit(): void {
    this.userInfo = this._aboutService.userInfo;
  }
}
