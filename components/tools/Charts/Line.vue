<script lang="ts">

import Chart, { Filler } from 'chart.js/auto'
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
            'unknown': 0 } as any)
        }
    }, 
    mounted(){


        var dates = generate_dates(10 * 10, 10)
        var status_codes = [200, 200, 200, 404, 404, 404, 200, 403, 200, 200]
        const captures: capture[] = []
        let gradient_green = (this.$refs.test as any).getContext('2d').createLinearGradient(0, 0, 0, 400)
        gradient_green.addColorStop(0, "rgb(99, 240, 74, 1)")
        gradient_green.addColorStop(0.5, "rgb(99, 240, 74, 1)")
        gradient_green.addColorStop(1, "rgb(133, 255, 115, 0.5)")

        let gradient_red = (this.$refs.test as any).getContext('2d').createLinearGradient(0, 0, 0, 400)
        gradient_red.addColorStop(0, "rgb(255, 46, 46, 1)")


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
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                datasets:[
                    {
                        label:"RED",
                        data:[5, 5, 5, 5, 5, 3, 5, 1, 5],
                        tension: 0.2,
                        // backgroundColor: "rgb(0, 239, 90, 0.4)",
                        borderColor: "rgb(0, 239, 90)",
                        // fill: true,
                    },
                ]
            },
            options: {
                scales: {
                    y: {
                        min: 0,
                        max: 6,
                        grid: {
                        display: false
                        }
                    },
                    x: {
                        display: false
                    }
                    // yAxis:{
                    //     // grid:false
                    //     // gridLines: {
                    //     //     color: "rgba(0, 0, 0, 0)",
                    //     // }  
                    // }
        
                    // grid:{
                    //     display: false
                    // }
                },
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