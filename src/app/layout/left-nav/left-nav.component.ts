import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LEFT_NAV_MENUS } from '@data/constants/left-nav-menu.const';
import { ILeftNavMenu } from '@data/interfaces';
import { AuthService } from '@data/services/api/auth.service';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  @Output() showMenu = new EventEmitter<any>();
  public faBars = faBars;
  public name = 'Cristian Camilo';
  public position = 'Gerente';
  public avatar = 'assets/images/defaults/avatar.png';
  public logo = 'assets/images/defaults/logo.png';
  public menus: ILeftNavMenu[] = LEFT_NAV_MENUS;
  public logoutMenu: ILeftNavMenu;

  constructor(
    private authService: AuthService
  ) {
    this.logoutMenu = {
      title: '',
      links: [
        {
          icon:faTimes,
          name:'Cerrar sesion',
          method: () => this.authService.logout()
        }
      ]
    }
   }

  ngOnInit(): void {
  }

}
