import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
  {
    path: "/ship-table",
    title: "Ship Table",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/owner-table",
    title: "Owner Table",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/ownership-table",
    title: "Ownership Table",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/member-table",
    title: "Member Table",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/crew-table",
    title: "Crew Table",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/employee-table",
    title: "Employee Table",
    icon: "content_paste",
    class: "",
  },
  { path: "/extras", title: "Extras", icon: "content_paste", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
