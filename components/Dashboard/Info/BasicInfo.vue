<script lang="ts">
export default {
    data(){
        return {
            tracker: useCurrentTracker(),
            tracker_history: useCurrentCaptures()
        }
    }

}
</script>

<template>
<div class="status-bar-container" v-if="tracker != null">
    <ToolsDesignBreathingRing class="breathing-ring">
        <div  v-if="tracker_history.length > 0">
            <div v-if="tracker_history[0].status == 200">
                You Good
            </div>
            <div v-else>
                You aint doing too good ima keep it a stack
            </div>
        </div>
        <div v-else>
            Your kinda a mystry i aint know nothing yet
        </div>

    </ToolsDesignBreathingRing>
    <div class="text">Hey</div>
</div>

</template>


<style scoped lang="sass">
.breathing-ring
    margin: auto
    width: 100%
    padding: 60px
    box-sizing: border-box

.status-bar-container
    display: flex
    height: 100%
    justify-content: space-between
    align-content: center
    flex-direction: column

</style>