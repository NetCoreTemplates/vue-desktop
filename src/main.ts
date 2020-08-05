import './app.scss';
import 'es6-shim';

import Vue from 'vue';
import Controls from '@servicestack/vue';
import { router } from './shared/router';
import { App } from './App';

Vue.use(Controls);

const app = new Vue({
    el: '#app',
    render: (h) => h(App),
    router,
});
