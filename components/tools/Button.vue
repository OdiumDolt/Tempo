<template>
<div>
    <button :class="[style_theme, theme]">
        <slot></slot>
    </button>
    
</div>

</template>


<script lang="ts">
import { mode } from 'crypto-js';

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
@import '@/assets/styles/colors.sass'
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
    color: $eggshell

button.blue-select
    color: white
    background-color: $royal-blue
    border: thin $outline-blue solid
    transition: box-shadow 0.2s

button.blue-select:hover
    box-shadow:0px 0px 10px $royal-blue
    
button.dark-cancel
    color: $eggshell
    background-color: $button-grey
    border: $border-grey thin solid
    transition: 0.1s linear

button.dark-cancel:hover
    border-color: #5a5959



</style>