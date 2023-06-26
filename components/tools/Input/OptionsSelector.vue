<script lang="ts">


export default {
    props:{
        options: {
            required:true,
        },
        size: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            width: null as null | number,
            positions: [] as number[],
            current_position: 0,
            x_offset: 0
        }

    },
    computed:{
        font_size(){
            return {
                'font-size': this.size
            }
        },
        
    },
    mounted(){
    }
}
</script>


<template>
<div>
    <div class="options-container" id="options-container">
        <span v-for="(value, index) in options" class="options" :id="'options-interable_' + index" :style="font_size">
            {{ value }}
        </span>
    </div>
    <div class="selector-box">
        <div class="selector" :class="selector_size">

        </div>
    </div>
</div>
</template>


<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'
@import '@/assets/styles/public/fonts.sass'
.options-container
    display: flex
    gap: 15px
    background-color: $grey-1
    height: fit-content
    padding: 5%
    border-radius: 10px
    justify-content: space-around
    width: fit-content
    max-width: 400px
    box-sizing: border-box

.options
    color: $grey-8
    font-family: 'Reem Kufi Fun', sans-serif
    font-s
    // thanks Adam Jenkins http://bit.ly/3oV2l4N
    text-align: center
    z-index: 2
    user-select: none

.selector
    position: absolute
    width: 100px
    height: calc(100% -  15px)
    z-index: 1
    background-color: $grey-3
    border-radius: 6px
    box-sizing: border-box
    left: calc(100% - 100px)
    top: 50%
    transform: translateY(-50%)
    
.selector-box
    position: relative
    top: -100%
    height: 100%
    box-sizing: border-box
</style>