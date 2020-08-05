import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { toDate, padInt } from "@servicestack/client";
import { client } from "../shared";
import { QueryWeatherForecasts, WeatherForecast } from "../shared/dtos";

@Component({ template:`
<div>
    <h1>Weather forecast</h1>
    
    <p>This component demonstrates fetching data from the server.</p>
    
    <p v-if="!forecasts"><em><i class="svg-2x svg-loading"></i>Loading...</em></p>
    
    <div v-else>
        
        <form class="form-inline mb-2" @submit.prevent="">
            <label for="txtId">Filters: </label>
            <input class="form-control form-control-sm mx-1" type="number" placeholder="[Id]" v-model="id" @input="filter"> 
            <input type="date" v-model="afterDate" @change="filter">
            <input type="date" v-model="beforeDate" @change="filter">
            <input class="form-control form-control-sm mx-1" type="number" placeholder="Above (C)" v-model="aboveTemp" @input="filter">
            <input class="form-control form-control-sm mr-1" type="number" placeholder="Below (C)" v-model="belowTemp" @input="filter"> 
            <button class="btn btn-secondary btn-sm" @click="reset">reset</button>
        </form>
    
        <table class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="forecast in forecasts">
                    <td>{{ forecast.date | shortDateString }}</td>
                    <td>{{ forecast.temperatureC }}</td>
                    <td>{{ forecast.temperatureF }}</td>
                    <td>{{ forecast.summary }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</div>`})
export class FetchData extends Vue {
    forecasts:WeatherForecast[]|null = null;

    id = '';
    beforeDate = '';
    afterDate = '';
    belowTemp = '';
    aboveTemp = '';

    async mounted() {
        await this.reset();
    }

    async reset() {
        this.forecasts = (await client.get(new QueryWeatherForecasts())).results;
        this.id = '';
        this.afterDate = '2018-05-01';
        this.beforeDate = '2018-05-30';
        this.aboveTemp = '-20';
        this.belowTemp = '20';
    }
    
    async filter() {
        const request = new QueryWeatherForecasts();
        if (this.id) request.id = parseInt(this.id);
        if (this.beforeDate) request.beforeDate = this.beforeDate;
        if (this.afterDate) request.afterDate = this.afterDate;
        if (this.belowTemp) request.belowTemperatureC = parseInt(this.belowTemp);
        if (this.aboveTemp) request.aboveTemperatureC = parseInt(this.aboveTemp);
        this.forecasts = (await client.get(request)).results;
    }
}
