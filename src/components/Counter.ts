import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({ template:`
<div>
    <h1>Counter</h1>
    
    <p>Current count: {{currentCount}}</p>
    
    <button class="btn btn-primary" @click="incrementCount()">Click me</button>
    
</div>`})
export class Counter extends Vue {
    currentCount = 0;

    incrementCount() {
        this.currentCount++;
    }
}
