import { Vue } from 'vue-property-decorator';
export declare class CheckBox extends Vue {
    responseStatus: object;
    id: string;
    placeholder: string;
    value: boolean;
    help: string;
    inputClass: string;
    protected readonly errorField: any;
    protected onInput(e: InputEvent): boolean;
}
export default CheckBox;
