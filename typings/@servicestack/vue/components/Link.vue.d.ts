import { Vue } from 'vue-property-decorator';
export declare class Link extends Vue {
    to: string;
    attrs: any;
    exact: boolean;
    click: () => void;
    protected readonly isAbsolute: boolean | "";
}
export default Link;
