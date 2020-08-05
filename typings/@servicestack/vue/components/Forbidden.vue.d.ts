import { Vue } from 'vue-property-decorator';
export declare class Forbidden extends Vue {
    message: string;
    path: string;
    role: string;
    permission: string;
    protected readonly query: any;
    protected readonly usePath: string | null;
    protected readonly useRole: string | null;
    protected readonly usePermission: string | null;
}
export default Forbidden;
