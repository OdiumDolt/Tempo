<script lang="ts">
export default {


}
</script>

<template>
    <div class="breakdown-container">
        <div class="menu-bar-container">
            <ToolsInputOptionsSelector :options="['daily', 'weekly', 'monthly', 'max']" :size="'1.9vh'">

            </ToolsInputOptionsSelector>
            <div>
                edit-shit
            </div>
        </div>
        <div class="uptime-bar">
            this shit is up on ong
        </div>
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
