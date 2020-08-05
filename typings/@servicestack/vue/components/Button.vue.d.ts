import { NavOptions } from '@servicestack/client';
import { BootstrapBase } from '../core';
export declare class Button extends BootstrapBase {
    options: NavOptions;
    id: string;
    name: string;
    type: string;
    value: string;
    disabled: boolean;
    click: () => void;
    protected readonly attrs: {};
    protected readonly btnCls: any[];
}
export default Button;
