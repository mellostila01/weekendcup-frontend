/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Login from "views/Home/Login";
import MainPage from "views/Home/MainPage";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Team from "views/User/Team";
import TeamInfo from "views/User/TeamInfo";

var routes = [
  {
    path: "/main",
    name: "Home",
    icon: "tim-icons icon-istanbul",
    component: MainPage,
    layout: "/home",
    show: true
  },
  {
    path: "/login",
    name: "Login",
    icon: "tim-icons icon-single-02",
    component: Login,
    layout: "/home",
    show: true
  },

  
  {
    path: "/team",
    name: "Team",
    icon: "tim-icons icon-vector",
    component: Team,
    layout: "/user",
    show: true
  },
  {
    path: "/teamInfo",
    name: "Team info",
    icon: "tim-icons icon-vector",
    component: TeamInfo,
    layout: "/user",
    show: true
  },


  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
    show: false
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
    show: false
  },
  {
    path: "/map",
    name: "Map",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin",
    show: false
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
    show: false
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
    show: false
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
    show: false
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
    show: false
  },
];
export default routes;
