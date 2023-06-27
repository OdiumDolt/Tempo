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
            x_offset: 0,
            selected_option: null as null | number,
        }

    },
    computed:{
        font_size(){
            return {
                'font-size': this.size
            }
        },
        selector_size(){
            if (process.client && this.selected_option != null){
                var width = document.getElementById('options-interable_' + this.selected_option.toString())?.clientWidth
                if (width != undefined){
                    return {
                        width: width + "px"
                    }
                }
                else{
                    return {
                        width: 0 + 'px'
                    }
                }
            }
            else{
                return {
                }
            }
        },
        selector_position(){
            if (process.client && this.selected_option != null){
                var offset = document.getElementById('options-interable_' + this.selected_option.toString())?.offsetLeft
                var total_offset = document.getElementById("options-select-container")?.offsetLeft
                if (offset != undefined && total_offset != undefined){
                    return {
                        "left":(offset - total_offset - 5) + 'px'
                    }

                }
                else{return{}}
            }
            else{return{}}
        }
    },
    methods:{
        
    },
    mounted(){
        this.selected_option = 0
    },
}
</script>


<template>
<div id="options-select-container">
    <div class="options-container" id="options-container">
        <span v-for="(value, index) in options" class="options" :id="'options-interable_' + index" :style="font_size" @click="selected_option = index">
            {{ value }}
        </span>
    </div>
    <div class="selector-box">
        <div class="selector" :style="[selector_size, selector_position]">

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
    // thanks Adam Jenkins http://bit.ly/3oV2l4N
    text-align: center
    z-index: 2
    user-select: none
    border-radius: 6px
    padding-right: 5px
    padding-left: 5px
    box-sizing: border-box

.selector
    position: absolute
    width: 100px
    height: calc(100% -  15px)
    z-index: 1
    background-color: $grey-3
    border-radius: 6px
    padding-right: 5px
    padding-left: 5px
    top: 50%
    transform: translateY(-50%)
    transition: width 0.4s, left 0.4s
    
.selector-box
    position: relative
    top: -100%
    height: 100%
    box-sizing: border-box
</style>