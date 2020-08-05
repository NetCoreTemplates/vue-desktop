import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import {Hello} from "../shared/dtos";
import {client} from "../shared";

@Component({ template:`
<div>
    <h1>Hello, world!</h1>
    Welcome to your new app.
    
    <div class="row mt-4 p-0">
        <div class="col col-3">
            <v-input placeholder="Your name" v-model="txtName" />
        </div>
        <h3 class="col col-5 result mt-2">{{ result }}</h3>
    </div>
</div>`})
export class Home extends Vue {
    public txtName: string = '';
    public result: string = '';

    @Watch('txtName')
    async onNameChanged(value: string, oldValue: string) {
        await this.nameChanged(value);
    }

    async nameChanged(name: string) {
        if (name) {
            const request = new Hello();
            request.name = name;
            const r = await client.get(request);
            this.result = r.result;
        } else {
            this.result = '';
        }
    }
}
