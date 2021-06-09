import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/listProvider', title: 'Liste providers',  icon: 'ni ni-building', class: '' },
  { path: '/providerAdd', title: 'ajout providers', icon: 'ni ni-shop', class: '' },
  { path: '/listArticle', title: 'Liste articles', icon: 'ni ni-bullet-list-67', class: '' },
  { path: '/articleAdd', title: 'ajout article', icon: 'ni ni-collection', class: '' },
   // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    //{ path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
  { path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '' },
  { path: '/logout', title: 'Logout',  icon:'ni ni-button-power', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
