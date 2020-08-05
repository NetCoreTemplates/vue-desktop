import { NavItem, NavOptions } from '@servicestack/client';
import { BootstrapBase } from '../core';
export declare class NavLinkButton extends BootstrapBase {
    href: string;
    item: NavItem;
    options: NavOptions;
    id: string;
    baseHref: string;
    activePath: string;
    navItemClass: string;
    exact: boolean;
    click: () => void;
    protected readonly opt: any;
    protected readonly show: boolean;
    protected readonly useActivePath: any;
    protected readonly hashPrefix: string;
    protected readonly activeCls: string;
    protected readonly btnCls: any[];
}
export default NavLinkButton;
