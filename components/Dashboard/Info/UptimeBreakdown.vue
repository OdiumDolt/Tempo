<script lang="ts">

interface TimeFrameDiscriptor {
    name: string,
    date: Date
}

var localDate = new Date();
var utcTime = localDate.getTime()
var utcDate = new Date(utcTime);


var dayBehind = new Date(utcDate)
dayBehind.setDate(utcDate.getDate() - 1);
var daily: TimeFrameDiscriptor = {
    name: "daily",
    date: dayBehind
}

var weekBehind = new Date(utcDate)
weekBehind.setDate(utcDate.getDate() - 7)
var weekly: TimeFrameDiscriptor = {
    name: "weekly", 
    date: weekBehind
}

var monthBehind = new Date(utcDate)
monthBehind.setMonth(utcDate.getMonth() - 1)
var monthly: TimeFrameDiscriptor = {
    name: "monthly", 
    date: monthBehind
}

var max: TimeFrameDiscriptor = {
    name: "max", 
    date: new Date(0)
}


export default {
    data(){
        return{
            timeframes: [daily, weekly, monthly, max],
            timeframe: useCurrentTimeFrame(),
            client: useSupabaseClient(),
            user: useSupabaseUser(),
            captures: useCurrentCaptures(),
            tracker: useCurrentTracker(),
            
        }
    },
    methods:{
        async updateTimeFrame(newTimeFrame: TimeFrameDiscriptor) {
            
            this.timeframe = newTimeFrame.date
            if (this.tracker == null){
                return {

                }
            }
            this.captures = await get_tracker_history(this.client, this.user, this.tracker, this.timeframe)
        },
    },
    computed:{
        getComputedPrecentages(){
            var precentages = []

            var groups = [[] as capture[], [] as capture[], [] as capture[], [] as capture[], [] as capture[]]
            var colors = ["orange", "rgb(45 94 226)", "blue", "#ff2525", "pink"]
            var discription_text = [
                "Server Thinking: ",
                "All Good: ", 
                "Redirects: ", 
                "Not Found: ",
                "Server Error: "
            ]

            for(let index in this.captures){
                let capture = this.captures[index]
                console.log(capture.status.toString()[0])
                groups[Number(capture.status.toString()[0]) - 1].push(capture)
            }


            for (let index in groups){
                let group = groups[index]
                
                if (group.length <= 0){ continue }
                
                precentages.push({
                    'precent': group.length/this.captures.length, 
                    'value': discription_text[index] + group.length,
                    'color': colors[index],
                    'amount': group.length
                })
            }
            return precentages
            
        }
    }
}
</script>

<template>
    <div class="breakdown-container">
        <div class="menu-bar-container">
            <ToolsInputOptionsSelect :options="timeframes" :size="'1.9vh'" @update:modelValue="newValue => updateTimeFrame(newValue)">

            </ToolsInputOptionsSelect>
            <div>
                edit-shit
            </div>
        </div>
        <ToolsChartsLinePi :precentages="getComputedPrecentages">
        </ToolsChartsLinePi>
        <div class="uptime-chart">
            damn this really is a chart ig
        </div>
    </div>
</template>


<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'
@import '@/assets/styles/public/fonts.sass'
.breakdown-container
    display: flex
    flex-direction: column
    height: 100%
    padding: 10px
    gap: 10px

.menu-bar-container
    display: flex
    justify-content: space-between
</style>
