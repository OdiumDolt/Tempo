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
    props:['style_theme', "modelValue"],
    emits:["update:modelValue"],
    data(){
        return {
            model: this.modelValue,
        }
    },
    methods:{
        switch_model(){
            this.model = !this.model
            this.$emit('update:modelValue', this.model)
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

.full-width.light-mode
    background-color: $grey-7

.full-width.dark-mode
    background-color: $grey-3

.precentage
    background-color: $blue-1
    height: 28.125px
    position: absolute
    max-width: 45px
    border-radius: 25px
    transition: 0.2s

.node
    height: 28.125px
    aspect-ratio: 1/1
    border-radius: 45px
    background-color: white
    position: relative
    transition: 0.2s
</style>