import Vue, {VueConstructor} from 'vue';

import {
    JsonServiceClient,
    normalizeKey,
    toDate, getField, splitOnFirst,
    errorResponse, errorResponseExcept,
    toPascalCase,
    queryString, padInt, appendQueryString, humanize, dateFmt,
} from '@servicestack/client';

import { desktopInfo, desktopTextFile, evaluateCode, desktopSaveTextFile } from '@servicestack/desktop';

declare let global: any; // populated from package.json/jest

export const client = new JsonServiceClient('/');

export enum Roles {
  Admin = 'Admin',
}

export interface DesktopInfo {
    tool:string;
    toolVersion:string;
    chromeVersion:string;
}

// Shared state between all Components
interface State {
    debug: boolean|null;
    desktop: DesktopInfo|null;
}
export const store: State = {
    debug: global.CONFIG.debug as boolean,
    desktop: global.CONFIG.desktop as DesktopInfo,
};

class EventBus extends Vue {
    store = store;
}
export const bus = new EventBus({ data: store });

export function log(...o:any[]) {
    if (store.debug) 
        console.log.apply(console, arguments as any);
    return o;
}

export async function openUrl(url:string) {
    if (store.desktop) {
        await evaluateCode(`openUrl('${url}')`);
    } else {
        window.open(url);
    }
}

export async function exec(c:any, fn:() => Promise<any>) {
    try {
        c.loading = true;
        c.responseStatus = null;

        return await fn();

    } catch (e) {
        log(e);
        c.responseStatus = e.responseStatus || (typeof e == 'string' ? { errorCode:'Error', message:e } : null) || e;
        c.$emit('error', c.responseStatus);
    } finally {
        c.loading = false;
    }
}

Vue.filter('shortDateString', function (value:string) {
    const d = toDate(value);
    return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
});

(async () => {
    try {
        store.desktop = await desktopInfo();
        log('In Desktop app:', store.desktop);
    } catch (e) {
        log(`Not in Desktop app:`, e);
    }
})();
