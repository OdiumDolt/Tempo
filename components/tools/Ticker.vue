<template>
<div class="full-width" :class="[style_theme]" @click="switch_model">
    <div class="precentage" :style="[is_clicked_precent]">
    </div>
    <div class="node" :style="[is_clicked_node]">
    </div>
</div>
</template>

<script lang="ts">
export default {
    props:["modelValue", "options"],
    emits:["update:modelValue"],
    data(){
        const starting_index = this.options.indexOf(this.modelValue)
        return {
            model: starting_index,
            dual_options: this.options,
            style_theme: useTheme()
        }
    },
    methods:{
        switch_model(){
            if (this.model == 1){
                this.model = 0
            }
            else{
                this.model = 1
            }
            this.$emit('update:modelValue', this.options[this.model])
        }

    },
    watch:{
        modelValue(){
            const starting_index = this.options.indexOf(this.modelValue)
            this.model = starting_index
        }
    },
    
    computed:{
        is_clicked_precent(){
            if (this.model){
                return {
                    'width': 100 + "%"
                }
            }
            else{
                return {
                    'width': 0 + "%",
                    'display':'none'
                }
            }
        },
        is_clicked_node(){
            if (this.model){
                return {
                    'margin-left': "calc(" + 100 + "% - 27px)"
                }
            }
            else{
                return {
                    'margin-left': 0 + "%"
                }
            }
        }

    }
}
</script>


<style scoped lang="sass">
@import '@/assets/styles/colors.sass'
.full-width
    width: 45px
    aspect-ratio: 2/1.25
    box-sizing: border-box
    border-radius: 25px
    max-height: calc( 45px * 0.625)

.full-width.light-mode
    background-color: $grey-7

.full-width.dark-mode
    background-color: $grey-3

.precentage
    background-color: $blue-1
    height: 28.125px
    max-width: 45px
    border-radius: 25px
    transition: 0.2s
    position: absolute
    z-index: 1

.node
    height: 28.125px
    aspect-ratio: 1/1
    border-radius: 45px
    background-color: white
    transition: 0.2s
    position: relative
    z-index: 1
</style>