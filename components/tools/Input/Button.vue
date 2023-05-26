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

</style>

<style src="@/assets/styles/themes/tools/Input/Button.sass" lang="sass" scoped></style>