
<script lang="ts">

export default {
    
    data(){
        
        var localDate = new Date();
        var timezoneOffset = localDate.getTimezoneOffset();
        var utcTime = localDate.getTime() + (timezoneOffset * 60000);
        var utcDate = new Date(utcTime);
        utcDate.setDate(utcDate.getDate() - 1)

        return {
            style_theme: useTheme(),
            tracker: useCurrentTracker(),
            timeframe: utcDate,
            timeframe_string: "daily",
            client: useSupabaseClient(),
            user: useSupabaseUser(),
            tracker_history: useCurrentCaptures(),
        }
    },
    async mounted(){
        if (this.tracker != null){
            this.tracker_history = await get_tracker_history(this.client, this.user, this.tracker, this.timeframe)
        }
    },
    watch:{
        async tracker(){
            if (this.tracker != null){
                this.tracker_history = await get_tracker_history(this.client, this.user, this.tracker, this.timeframe)
            }
        }
    }
    
    
}
</script>


<template>
    <div class="container">
        <div class="flex-container">
            <div class="top-bar">
                <ToolsPanel class="status-bar">
                    <div class="status-bar-container" v-if="tracker != null">
                        <ToolsDesignBreathingRing class="breathing-ring">
                            <div v-if="tracker_history.length > 0 && tracker_history[0].status == 200">
                                You Good
                            </div>

                        </ToolsDesignBreathingRing>
                        <div class="text">Hey</div>
                    </div>
                </ToolsPanel>
                
                <ToolsPanel>
                    
                </ToolsPanel>
            </div>
            <div class="bottom-bar">
                <ToolsPanel>
                
                </ToolsPanel>
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'

.breathing-ring
    // height: fit-content
    margin: auto
    width: 100%
    padding: 60px
    box-sizing: border-box

.container
    height: 100%
    width: 100%
    overflow-y: scroll

.container::-webkit-scrollbar
    display: none

.flex-container
    display: flex
    width: 100%
    flex-direction: column
    gap: 20px
    height: 200%

.top-bar
    display: flex
    gap: 10px

.bottom-bar
    height: 100%

.status-bar
    width: 500px
    aspect-ratio: 1/1.5

.status-bar-container
    display: flex
    height: 100%
    justify-content: space-between
    align-content: center
    flex-direction: column
</style>