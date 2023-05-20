<script lang="ts">
export default {
    props:{
        "tracker":{
            type: Object as () => Tracker,
            required: true
        }
    },
    data(){
        return {
            style_theme: useTheme()
        }
    },

}

</script>

<template>
<div :class="[style_theme]" class="button-container">
    <div :class="[style_theme]" class="button-text large" contenteditable>{{ tracker.name }}</div>
    <div :class="[style_theme]" class="button-text small">{{ tracker.url }}</div>
</div>
</template>


<style scoped lang="sass">
@import '@/assets/styles/public/fonts.sass'

.button-container
    padding: 10px
    border-radius: 5px
    aspect-ratio: 3/1
    min-height: 80px
    display: flex
    flex-direction: column
    gap: 5px
.button-text
    font-family: 'Reem Kufi Fun', sans-serif

.button-text.large
    font-size: 20px

.button-text.small
    font-size: 12px
</style>

<style scoped src="@/assets/styles/themes/tools/TrackerButton.sass" lang="sass"></style>