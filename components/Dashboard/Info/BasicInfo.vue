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
            } as any,
            style_theme: useTheme()
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
        <div v-if="tracker_history.length > 0" class="display-text" :class="[style_theme]">
            <div v-if="tracker_history[0].status == 200">
                Currently Online.
            </div>
            <div v-else>
                You aint doing too good ima keep it a stack
            </div>
        </div>
        <div v-else class="display-text" :class="[style_theme]">
            No captures yet.
        </div>
    </ToolsDesignBreathingRing>
    
    
    <div class="info-text-container">
        <div class="large-text info-text" :class="[style_theme]">
            {{ tracker.url }}
        </div>
        <div class="basic-text info-text" :class="[style_theme]">
             Protocol: HTTPS
        </div>
        <div class="basic-text info-text" :class="[style_theme]">
            Protocol version: 2.1
        </div>
        <div class="basic-text info-text" :class="[style_theme]">
            Request interval: {{ tracker.interval }}
        </div>
    
    </div>

</div>

</template>


    
<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'
.breathing-ring
    margin: auto
    width: 60%
    box-sizing: border-box

.display-text
    font-family: 'Reem Kufi Fun', sans-serif
    font-size: 2.8vh
    padding: 10px
    text-align: center

.status-bar-container
    display: flex
    height: 100%
    // justify-content: space-between
    align-content: center
    flex-direction: column

.info-text-container
    display: flex
    flex-direction: column
    gap: 5px
    padding: 10px

.info-text
    font-family: 'Reem Kufi Fun', sans-serif

.large-text
    color: $grey-8
    font-size: 3.5vh

.basic-text
    font-size: 2vh
</style>

<style scoped lang="sass" src="@/assets/styles/themes/Dashboard/Info/BasicInfo.sass"></style>