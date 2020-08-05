import { Vue } from 'vue-property-decorator';
export declare class Select extends Vue {
    responseStatus: object;
    id: string;
    label: string;
    help: string;
    selectClass: string;
    multiple: boolean;
    value: string[] | string;
    values: any[];
    protected readonly errorField: any;
    protected readonly hasError: boolean;
    protected readonly kvpValues: any[];
    protected hasValue(elValue: string): boolean;
    protected onInputValues(e: InputEvent): string | string[];
}
export default Select;
