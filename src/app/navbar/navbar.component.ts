import { Component } from '@angular/core';
import { faSearch, faUser, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  faSearch = faSearch;
  faUser = faUser;
  faBell = faBell;
}
