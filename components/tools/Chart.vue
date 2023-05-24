<script lang="ts">

import Chart from 'chart.js/auto'
import { faker } from '@faker-js/faker'


export default {
    data(){
        return {
            status_map : ({
            '200': 5,
            '403': 4,
            'other': 3, 
            '537': 2,
            '404': 1,
            'unknown': 0

        } as any)
        }
    }, 
    mounted(){


        var dates = generate_dates(10 * 10, 10)
        var status_codes = [200, 200, 200, 404, 404, 404, 200, 403, 200, 200]
        const captures: capture[] = []
        let gradient = (this.$refs.test as any).getContext('2d').createLinearGradient(0, 0, 0, 400)
        gradient.addColorStop(0, "#4d6ab8")
        gradient.addColorStop(1, "#dbdbdb")

        for(let index in dates){
            let status_code = faker.internet.httpStatusCode()
            let new_capture: capture = {
                'date': dates[index],
                'id': faker.string.uuid(),
                'index': parseInt(index),
                'status': status_codes[index],
                'graph_satus': parseInt(faker.number.bigInt({'min': 0, 'max': 5}).toString())
            }
            captures.push(new_capture)
        }
        console.log(captures.map(row => this.get_graph_index(row.status.toString())))

        new Chart((this.$refs.test as any), {
            type:'line',
            data:{
                labels: captures.map(row => row.date.getDate()),
                datasets:[
                    {
                        label:"HTTP STATUS",
                        data: captures.map(row => this.get_graph_index(row.status.toString())),
                        tension: 0.2,
                        fill:true,
                        backgroundColor: gradient,
                        borderColor: "green"
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        min: 0,
                        max: 6
                    }
                }
            }
        })
    },
    methods:{
        get_graph_index(status: string): number{
            return (this.status_map[status] == undefined ? 3 : this.status_map[status])
        }
    }
}
</script>


<template>

<div style="width: 800px;"><canvas id="test" ref="test"></canvas></div>

</template>

<style scoped lang="sass">


</style>