<template>
<div class="test-window" :class="[style_theme]">
    <ToolsChart>
        
    </ToolsChart>
</div>
</template>

<script lang="ts">

export default {    
    data(){
        return {
            style_theme: useTheme()
        }
    }
    

}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/public/colors.sass'

.test-window
    width: 100%
    border-radius: 5px

.test-window.light-mode
    background-color: $grey-7

.test-window.dark-mode
    background-color: $grey-1

</style>