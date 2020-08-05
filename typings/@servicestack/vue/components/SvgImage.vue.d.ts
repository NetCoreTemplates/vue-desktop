import { Vue } from 'vue-property-decorator';
export declare class SvgImage extends Vue {
    id: string;
    fill: string;
    width: number;
    height: number;
    baseUrl: string;
    protected readonly src: string;
    protected readonly styles: any;
}
export default SvgImage;
