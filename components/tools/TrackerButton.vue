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
            style_theme: useTheme(),
        }
    },
    methods:{
        update_name(e:any){
            e.preventDefault();
            e.target.blur()

            return false
        }
    },
    computed:{
        displayTrackerName(){
            if (this.tracker.name.length > 17){
                return this.tracker.name.substring(0,17) + "..."
            }
            else{
                return this.tracker.name
            }
        },
        displayTrackerUrl(){
            // console.log(this.tracker.url)
            if (this.tracker.url.length > 25){
                return this.tracker.url.substring(0,25) + "..."
            }
            else{
                return this.tracker.url
            }
        }
    }


}

</script>

<template>
<div :class="[style_theme]" class="button-container">
    <textarea :class="[style_theme]" class="button-text large" contenteditable @keydown.enter="update_name" maxlength="17">{{ "penis" }}</textarea>
    
    <div :class="[style_theme]" class="button-text small" aria-autocomplete="none">{{ displayTrackerUrl }}</div>
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
    overflow: hidden

.button-container::-webkit-scrollbar
    display: none

.button-text
    all: unset
    font-family: 'Reem Kufi Fun', sans-serif
    overflow: hidden
    height: 30px
    width: fit-content

.button-text.large
    font-size: 20px

.button-text.small
    font-size: 12px
</style>

<style scoped src="@/assets/styles/themes/tools/TrackerButton.sass" lang="sass"></style>