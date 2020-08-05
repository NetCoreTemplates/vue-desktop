import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import {evaluateCode, quote} from '@servicestack/desktop';
import { bus, store } from './shared';

@Component({ template:`
<div id="app">
    <div class="sidebar" :style="sidebarStyle">
        <nav-menu />
        
        <div v-if="store.desktop" class="ml-5 mt-5">
            <button class="btn btn-outline-light" @click="doColor()">Choose Color</button>
        </div>
    </div>
    
    <div class="main">
        <div class="top-row px-4">
            <a href="https://sharpscript.net/sharp-apps/" target="_blank" class="ml-md-auto">About</a>
        </div>
    
        <div class="content px-4">
            <router-view></router-view>
        </div>
    </div>
</div>`})
export class App extends Vue {
    bgColor = '';
    
    get store() { return store; }
    get sidebarStyle() { return this.bgColor ? `background:${this.bgColor}` : ''; }

    async doColor() {
        this.bgColor = this.bgColor
            ? await evaluateCode(`chooseColor(${quote(this.bgColor)})`)
            : await evaluateCode('chooseColor()');
    }
}
export default App;
