import Vue, {Component} from 'vue';
import Router, {Route, RouteConfig} from 'vue-router';

import { Forbidden } from '@servicestack/vue';
import { Home } from '../components/Home';
import { Counter } from '../components/Counter';
import { FetchData } from '../components/FetchData';

export enum Routes {
  Home = '/',
  Counter = '/counter',
  FetchData = '/fetchdata',
  Forbidden = '/forbidden',
}

Vue.use(Router);

export interface IRoute extends RouteConfig {
    label?:string;
    icon?:string;
    hide?:boolean|string;
    exact?:boolean;
}

export const routes:IRoute[] = [
  { path: Routes.Home, component:Home, label:'Home', icon:'home-nav', exact:true },
  { path: Routes.Counter, component:Counter, label:'Counter', icon:'add-nav' },
  { path: Routes.FetchData, component:FetchData, label:'Fetch data', icon:'loop-nav' },
  { path: Routes.Forbidden, component:Forbidden, hide:true },
  { path: '*', redirect: '/', hide:true },
];

export const router = new Router ({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
});
export default router;

export const redirect = (path: string) => {
  const externalUrl = path.indexOf('://') >= 0;
  if (!externalUrl) {
      router.push({ path });
  } else {
      location.href = path;
  }
};
