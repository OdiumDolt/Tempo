<template>


<div class="side-bar-container">
    
    <div class="search-pallete" :class="[style_theme, {'small-flex-gap': !small_add}]">
        
        <ToolsInputButton :theme="'blue-select'" class="add-button" :class="{'smaller-button': small_add}" @click="$emit('addTracker')">
            Add Tracker
        </ToolsInputButton>
        <ToolsInputText
            v-on:focus="small_add = true"
            v-on:blur="small_add = false"
            type="search"
            :placeholder="'🔍Search'"
            class="search-input">
        </ToolsInputText>
    </div>
    
    <div class="tracker-items" :class="[style_theme]">

        <DashboardSideBarTrackerButton v-for="tracker in web_trackers" :tracker="tracker">
        
        </DashboardSideBarTrackerButton>
    </div>
    
    <ToolsBooleanTicker :options="['light-mode', 'dark-mode']" v-model="style_theme"></ToolsBooleanTicker>
</div>

</template>

<script lang="ts">

export default {
    data() {
        return {
            web_trackers: useTracker(),
            small_add: false,
            style_theme: useTheme()
        };
    },
    methods: {
    },
}

</script>

<style lang="sass" scoped>
@import '@/assets/styles/public/colors.sass'



.side-bar-container
    display: flex
    flex-direction: column
    gap: 20px
    box-sizing: border-box
    min-width: 175px
    max-width: 300px
    width: 20%
    flex-shrink: 0

.side-bar-item
    padding: 10px
    border-radius: 5px
    aspect-ratio: 3/1
    min-height: 80px
    box-sizing: border-box
    font-family: 'Reem Kufi Fun', sans-seriff
    flex-shrink: 0

.tracker-items
    overflow-y: scroll
    display: flex
    flex-direction: column
    gap: 10px

.tracker-items::-webkit-scrollbar
    display: none

.search-pallete
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-evenly
    transition: 0.1s

.small-flex-gap
    gap: 10px

.no-flex-gap
    gap: 0px

.search-input
    padding-right: 0px

.search-input:focus
    outline: thin solid $blue-2
    padding-right: 10px

.add-button
    width: 100%
    height: 35px
    display: flex
    align-content: center
    justify-content: center
    white-space: nowrap
    transition: width .2s, opacity 0.2s

.smaller-button
    width: 0px
    opacity: 0
    display: hidden
</style>

<style scoped lang="sass" src="@/assets/styles/themes/Dashboard/SideBar.sass"></style>