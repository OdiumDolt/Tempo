<template>


<div class="side-bar-container">
    
    <div class="search-pallete" :class="{'small-flex-gap': !small_add}">
        
        <ToolsButton :theme="'blue-select'" class="add-button" :class="{'smaller-button': small_add}" @click="$emit('addTracker')">
            Add Tracker
        </ToolsButton>
        
        <input class="search-input" v-on:focus="small_add = true"  v-on:blur="small_add = false" type="search" placeholder="🔍Search">
    </div>
    
    <div class="tracker-items">
        <div class="side-bar-item" v-for="tracker in web_trackers">
            {{ tracker['name'] }}
        </div>
    </div>

</div>

</template>

<script lang="ts">

export default {
    data(){
        return {
            web_trackers: useState("web_trackers"),
            small_add: false
        }
    },
    methods:{
        set_curret_tracker(item:any){
            console.log(item)
        },
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
    background-color: $grey
    padding: 10px
    border-radius: 5px
    color: white
    height: 65px

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

.small-flex-gap
    gap: 10px

.no-flex-gap
    gap: 0px

.search-input
    background-color: $grey
    outline: none
    border: none
    border-radius: 5px
    padding: 10px
    color: white
    width: 100%


.search-input:focus
    outline: thin solid $outline-blue  

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