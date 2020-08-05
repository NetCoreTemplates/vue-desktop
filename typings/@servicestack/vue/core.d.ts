import Vue from 'vue';
import { NavItem, NavOptions } from '@servicestack/client';
export declare class BootstrapBase extends Vue {
    primary?: boolean;
    outlinePrimary?: boolean;
    secondary?: boolean;
    outlineSecondary?: boolean;
    success?: boolean;
    outlineSuccess?: boolean;
    info?: boolean;
    outlineInfo?: boolean;
    warning?: boolean;
    outlineWarning?: boolean;
    danger?: boolean;
    outlineDanger?: boolean;
    light?: boolean;
    outlineLight?: boolean;
    dark?: boolean;
    outlineDark?: boolean;
    lg?: boolean;
    md?: boolean;
    sm?: boolean;
    xs?: boolean;
    block?: boolean;
    vertical?: boolean;
    horizontal?: boolean;
    protected readonly bootstrapClasses: any;
}
export declare class NavBootstrapBase extends BootstrapBase {
    items: NavItem[];
    options?: NavOptions;
    attributes?: string[];
    activePath?: string;
    baseHref?: string;
    navClass?: string;
    navItemClass?: string;
    navLinkClass?: string;
    childNavItemClass?: string;
    childNavLinkClass?: string;
    childNavMenuClass?: string;
    childNavMenuItemClass?: string;
}
export declare class NavBase extends Vue {
    message?: string;
    items: NavItem[];
    options?: NavOptions;
    attributes?: string[];
    activePath?: string;
    baseHref?: string;
    navClass?: string;
    navItemClass?: string;
    navLinkClass?: string;
    childNavItemClass?: string;
    childNavLinkClass?: string;
    childNavMenuClass?: string;
    childNavMenuItemClass?: string;
}
export declare function optionProps(props: any): any;
export declare function sanitizeOptions(opt: any): any;
export declare function routePath(component: Vue): any;
