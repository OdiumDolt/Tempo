<script lang="ts">


export default {
    props:{
        options: {
            required:true,
        }
    },
    data(){
        return {
            width: 0,
            positions: [] as number[],
            current_position: 0,
            x_offset: 0
        }

    },
    computed:{
        selector_width(){
            return {
                width: this.width.toString() + "px",
            }
        },
        selector_position(){
            var x_pos = (this.width * ((this.options as any).length/2) * -1)
            
            // x_pos = x_offset != undefined ? x_pos + x_offset : x_pos
            
            return {
                // 'left' : x_offset + 'px'
            }
        }
    },
    mounted(){
        var element_0 = document.getElementById('options-interable_0')
        
        if (element_0?.clientWidth != undefined){
            this.width = element_0?.clientWidth
        }

    }
}
</script>


<template>
<div class="options-container" id="options-container">
    <div v-for="(value, index) in options" class="options" :id="'options-interable_' + index">
        {{ value }}
    </div>
    <div class="selector-box">
        <div class="selector" :style="[selector_width, selector_position]">

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
    padding: 10px
    border-radius: 10px
    justify-content: space-around
    width: 55%
    max-width: 400px

.options
    color: $grey-8
    font-family: 'Reem Kufi Fun', sans-serif
    font-size: 1em
    // thanks Adam Jenkins http://bit.ly/3oV2l4N
    flex: 1 1 0px
    text-align: center
    z-index: 2
    user-select: none

.selector
    position: relative
    height: 1.5em
    width: 200px
    z-index: 1
    background-color: $grey-3
    border-radius: 6px
    padding-right: 5px
    padding-left: 5px

.selector-box
    position: absolute
    
</style>