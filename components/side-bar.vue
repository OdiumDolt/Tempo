<template>


<div class="side-bar-container">
    
    <div class="search-pallete" :class="[style_theme, {'small-flex-gap': !small_add}]">
        
        <ToolsButton :theme="'blue-select'" class="add-button" :class="{'smaller-button': small_add}" @click="$emit('addTracker')">
            Add Tracker
        </ToolsButton>
        <ToolsInputField 
        :style_theme="style_theme"
        v-on:focus="small_add = true"
        v-on:blur="small_add = false"
        type="search"
        :placeholder="'🔍Search'">

        </ToolsInputField>
    </div>
    
    <div class="tracker-items" :class="[style_theme]">
        <div class="side-bar-item" v-for="tracker in web_trackers" :class="[style_theme]">
            {{ tracker['name'] }}
        </div>
    </div>

</div>

</template>

<script lang="ts">

export default {
    props:['style_theme'],
    data(){
        return {
            web_trackers: useState("web_trackers"),
            small_add: false
        }
    },
    methods:{

    }
}

</script>

<style lang="sass" scoped>
@import '@/assets/styles/colors.sass'



.side-bar-container
    display: flex
    flex-direction: column
    gap: 20px
    box-sizing: border-box
    width: 20%

.side-bar-item
    padding: 10px
    border-radius: 5px
    height: 86px
    box-sizing: border-box
    font-family: 'Reem Kufi Fun', sans-serif

.side-bar-item.dark-mode
    background-color: $grey-1
    color: white

.side-bar-item.light-mode
    color: black
    background-color: $grey-7
    border: thin solid $grey-7
    font-size: 20px

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
    background-color: $grey-1
    outline: none
    border: none
    border-radius: 5px
    padding: 10px
    padding-right: 0px
    color: white
    width: 100%


.search-input:focus
    outline: thin solid $blue-2  

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