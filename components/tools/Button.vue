<template>
<div>
    <button :class="[style_theme, theme]">
        <slot></slot>
    </button>
    
</div>

</template>


<script lang="ts">
export default {
    props:['style_theme', 'theme'],
    data(){
        return {
        }
    },
    computed:{
    }

}

</script>

<style scoped lang="sass">
@import '@/assets/styles/dark-mode-colors.sass'
@import '@/assets/styles/fonts.sass'

button
    all: unset
    border-radius: 5px
    text-align: center
    padding: 7px
    font-family: "Roboto", sans-serif
    font-size: 14px
    width: inherit

button.dark-mode
    color: $grey-1

button.blue-select
    color: white
    background-color: $blue-1
    border: thin $blue-2 solid
    transition: box-shadow 0.2s, border-color 0.3s

button.blue-select:hover
    box-shadow:0px 0px 17px $blue-1
    border-color: $blue-1
    
button.dark-cancel
    color: $grey-5
    background-color: $grey-2
    border: $grey-3 thin solid
    transition: 0.1s linear

button.dark-cancel:hover
    border-color: $grey-4

</style>