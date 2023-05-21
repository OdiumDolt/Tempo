<script lang="ts">
export default {
    props:['modelValue', 'options'],
    emits:['update:modelValue'],
    data(){
        
        const starting_index = this.options.indexOf(this.modelValue)
        var first_time_checked = false
        if (starting_index == 1){
            first_time_checked = true
        }
        
        return {
            index: starting_index,
            first_time_checked: first_time_checked,
            checked_animation: false
        }
    },
    methods:{
        toggleValue(){
            this.first_time_checked = false
            this.index = 1 - this.index
            if (this.index == 1){
                this.checked_animation = true
            }
            else{
                this.checked_animation = false
            }
            this.$emit('update:modelValue', this.options[this.index])
        },

    },
    computed:{
        is_checked(){
            return this.checked_animation
        },
        first_time(){
            return this.first_time_checked
        }
    }



}
</script>

<template>
    <svg @click="toggleValue" class="check-mark" :class="{'checked-animation': is_checked, 'first-time-checked': first_time}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
</template>

<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'

@keyframes check_animation
    20%
        scale: 0.80
        fill: $grey-6
        transform: rotate(-45deg)
    100%
        scale: 1
        fill: $blue-1
        transform: rotate(360deg)
    
.check-mark
    width: 16px
    fill: $grey-4

.check-mark.first-time-checked
    fill: $blue-1
    
.check-mark.checked-animation
    animation: check_animation 0.75s ease forwards

</style>