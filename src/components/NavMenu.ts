import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { routes } from '../shared/router';

@Component({ template:`
<div>
    <div class="top-row pl-4 navbar navbar-dark">
        <v-link tag="a" class="navbar-brand" to="/">My App</v-link>
        <button class="navbar-toggler" @click="toggleNavMenu()">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div :class="navMenuCssClass" @click="toggleNavMenu()">
        <ul class="nav flex-column">
            <li v-for="route in routes" class="nav-item px-3">
                <v-link class="nav-link" :to="route.path" :exact="route.exact">
                    <span :class="btnClass(route.icon)" aria-hidden="true"></span> {{route.label}}
                </v-link>
            </li>
        </ul>        
    </div>    
</div>`})
export class NavMenu extends Vue {
    collapseNavMenu = true;

    get navMenuCssClass () { return this.collapseNavMenu ? "collapse" : null; }

    get routes() { return routes.filter(x => x.hide !== true); }
    btnClass(icon:string) { return `oi svg-lg ${icon}`; }

    toggleNavMenu() {
        this.collapseNavMenu = !this.collapseNavMenu;
    }
}
Vue.component('nav-menu', NavMenu);