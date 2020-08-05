import { NavOptions } from '@servicestack/client';
import { BootstrapBase } from '../core';
export declare class LinkButton extends BootstrapBase {
    href: string;
    options: NavOptions;
    id: string;
    navItemClass: string;
    exact: boolean;
    click: () => void;
    protected readonly opt: any;
    protected readonly activeHref: any;
    protected readonly hashPrefix: string;
    protected readonly attrs: {};
    protected readonly activeCls: string;
    protected readonly btnCls: any[];
}
export default LinkButton;
