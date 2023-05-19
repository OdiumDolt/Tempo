<template>
<div>
    <button :class="[style_theme, theme]">
        <slot></slot>
    </button>
    
</div>

</template>


<script lang="ts">
export default {
    props:['theme'],
    data(){
        return {
            style_theme: useTheme()
        }
    },
    computed:{
    }

}

</script>

<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'
@import '@/assets/styles/public/fonts.sass'

button
    all: unset
    border-radius: 5px
    text-align: center
    padding: 7px
    font-family: "Roboto", sans-serif
    font-size: 14px
    width: inherit

button.blue-select
    color: white
    background-color: $blue-1
    border: thin $blue-2 solid
    transition: box-shadow 0.2s, border-color 0.3s

button.blue-select:hover
    box-shadow:0px 0px 17px $blue-1
    border-color: $blue-1

button.cancel
    transition: 0.1s linear
    
button.cancel.dark-mode
    color: $grey-5
    background-color: $grey-2
    border: $grey-3 thin solid

button.cancel.dark-mode:hover
    border-color: $grey-2
    color: $grey-4

button.cancel.light-mode
    color: $grey-3
    background-color: $grey-7
    border: $grey-6 thin solid

button.cancel.light-mode:hover
    border-color: $grey-1
    color: $black

</style>