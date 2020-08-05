import { Vue } from 'vue-property-decorator';
import { NavItem, NavOptions } from '@servicestack/client';
export declare class NavLink extends Vue {
    item: NavItem;
    options: NavOptions;
    activePath: string;
    navItemClass: string;
    navLinkClass: string;
    protected readonly opt: any;
    protected readonly show: boolean;
    protected readonly useActivePath: any;
    protected readonly hasChildren: boolean;
    protected readonly navItemCls: any;
    protected readonly navLinkCls: any;
    protected readonly childProps: {
        'role': string;
        'data-toggle': string;
        'aria-haspopup': string;
        'aria-expanded': string;
    } | {
        'role'?: undefined;
        'data-toggle'?: undefined;
        'aria-haspopup'?: undefined;
        'aria-expanded'?: undefined;
    };
    protected readonly id: string | null;
    protected readonly activeCls: string;
    protected activeClassNav(x: NavItem, activePath: string): string;
}
export default NavLink;
