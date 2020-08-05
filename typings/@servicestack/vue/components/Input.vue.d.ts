import { Vue } from 'vue-property-decorator';
export declare class Input extends Vue {
    responseStatus: object;
    type: string;
    id: string;
    statusField: string;
    label: string;
    help: string;
    inputClass: string;
    inline: boolean;
    value: string[] | string;
    values: any[];
    protected concat(prefix: string, id: string, suffix: string): string;
    protected readonly isCheck: boolean;
    protected readonly errorField: any;
    protected readonly hasError: boolean;
    protected readonly kvpValues: any[];
    protected onInput(e: InputEvent): string;
    protected onInputValues(e: InputEvent): string[];
    protected hasValue(elValue: string): boolean;
}
export default Input;
