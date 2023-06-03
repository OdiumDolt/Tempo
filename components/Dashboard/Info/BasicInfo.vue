<script lang="ts">
export default {
    data(){
        return {
            tracker: useCurrentTracker(),
            tracker_history: useCurrentCaptures(),
            status_colors: "",
            colors:{
                200: "#1b4bcc",
                404: "#ff3636",
                304: '#d6af11',
            } as any
        }
    },
    watch:{
        tracker_history(){
            if (this.tracker_history.length > 0){
                this.status_colors = this.colors[this.tracker_history[0].status]
            }
            else{
                this.status_colors = ''
            }
        }
    }

}
</script>

<template>
<div class="status-bar-container" v-if="tracker != null">
    <ToolsDesignBreathingRing class="breathing-ring" :color="status_colors">
        <div v-if="tracker_history.length > 0" class="display-text">
            <div v-if="tracker_history[0].status == 200">
                Currently Online.
            </div>
            <div v-else>
                You aint doing too good ima keep it a stack
            </div>
        </div>
        <div v-else class="display-text">
            No captures yet.
        </div>
    </ToolsDesignBreathingRing>
    
    
    <div class="text">
        
        Hey</div>


</div>

</template>


    
<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'
.breathing-ring
    margin: auto
    width: 100%
    padding:55px
    box-sizing: border-box

.display-text
    color: $white
    font-family: 'Reem Kufi Fun', sans-serif
    font-size: 1.8vw
    padding: 10px
    text-align: center

.status-bar-container
    display: flex
    height: 100%
    justify-content: space-between
    align-content: center
    flex-direction: column

</style>