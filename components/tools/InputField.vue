<template>
    <input v-model="model_val" :class="[style_theme]" :placeholder="placeholder"/>
</template>

<script lang="ts">

export default {
    props:['modelValue', 'style_theme', 'placeholder'],
    emits:['update:modelValue'],
    data(){
        return {
            model_val:this.modelValue
        }
    },
    watch:{
        model_val(){
            this.$emit('update:modelValue', this.model_val)
        }
    }
}

</script>

<style lang="sass" scoped>
@import '@/assets/styles/colors.sass'
@import '@/assets/styles/fonts.sass'



input
    outline: none
    border: none
    padding: 10px
    border-radius: 5px
    width: 100%
    box-sizing: border-box
    font-family: 'Reem Kufi Fun', sans-serif

input.dark-mode
    background-color: $grey-2
    color: white

input.light-mode
    background-color: $grey-7
    color: black
</style>