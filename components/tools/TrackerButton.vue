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
            client: useSupabaseClient(),
            user: useSupabaseUser(),
            test:'test_value',
            mouse_down: false
        }
    },
    methods:{
        update_name(e:any){
            e.preventDefault();
            e.target.blur()
            change_tracker_name(this.client, this.user, this.tracker)
            return false
        },
        update_active(value:boolean){
            this.tracker.active = value
            change_tracker_active(this.client, this.user, this.tracker)
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
            if (this.tracker.url.length > 25){
                return this.tracker.url.substring(0,25) + "..."
            }
            else{
                return this.tracker.url
            }
        },
        is_mouse_down(){
            return this.mouse_down
        }
    }


}

</script>

<template>
<div :class="[style_theme, {'scaled':is_mouse_down}]" class="button-container" @mousedown.self="mouse_down = true">
    <div class="text-container">
        <textarea :class="[style_theme]" class="button-text large" contenteditable @keydown.enter="update_name" maxlength="17" v-model="tracker.name">{{ tracker.name }}</textarea>
        
        <div :class="[style_theme]" class="button-text small" aria-autocomplete="none">{{ displayTrackerUrl }}</div>
    </div>
    <div class="active-container">
        <ToolsCheckMark class="check-box" :options="[false, true]" v-model="tracker.active" @update:modelValue="update_active"></ToolsCheckMark>
    </div>
</div>
</template>


<style scoped lang="sass">
@import '@/assets/styles/public/fonts.sass'


.active-container
    align-self: right

.button-container
    padding: 10px
    border-radius: 5px
    box-sizing: border-box
    justify-content: space-between
    display: flex
    flex-direction: row
    gap: 5px
    width: 100%
    overflow: hidden
    gap: 10px

@keyframes scale 
    50%
        scale: 0.95
    100%
        scale: 1

.scaled
    animation: scale 0.2s ease

.text-container
    display: flex
    flex-direction: column

.button-container::-webkit-scrollbar
    display: none

.button-text
    all: unset
    font-family: 'Reem Kufi Fun', sans-serif
    overflow: hidden
    width: 100%

.button-text.large
    font-size: 20px
    height: 30px

.button-text.small
    font-size: 12px
    width: fit-content
</style>

<style scoped src="@/assets/styles/themes/tools/TrackerButton.sass" lang="sass"></style>