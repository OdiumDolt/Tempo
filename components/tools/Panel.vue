<script lang="ts">
export default {
    data(){
        return {
            style_theme: useTheme()
        }

    }

}
</script>

<template>
<div class="panel-container" :class="[style_theme]">
    <slot>
        
    </slot>
</div>

</template>

<style scoped lang="sass">
.panel-container
    width: 100%
    height: 100%
    border-radius: 5px

</style>

<style scoped src="@/assets/styles/themes/tools/Panel.sass"></style>