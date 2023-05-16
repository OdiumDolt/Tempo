<template>
<div class="test-window" :class="[style_theme]">

</div>
</template>

<script lang="ts">
export default {
    props:["style_theme"]
    

}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/colors.sass'

.test-window
    width: 100%
    border-radius: 5px

.test-window.light-mode
    background-color: $grey-7

.test-window.dark-mode
    background-color: $grey-1

</style>