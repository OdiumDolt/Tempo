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
            mouse_down: false,
            current_tracker: useCurrentTracker()
            
        }
    },
    methods:{
        update_name(e:any){
            if (e.target.innerHTML.length > 16 && e.key != "Backspace"){
                e.preventDefault();
            }

            if (e.key == "Enter"){
                e.target.blur()
                this.tracker.name = e.target.innerHTML.toString()
                change_tracker_name(this.client, this.user, this.tracker)
            }
            return false
        },
        update_active(value:boolean){
            this.tracker.active = value
            change_tracker_active(this.client, this.user, this.tracker)
        },
        click_animation(e:any){
            e.target.classList.add('scaled')
            this.current_tracker = this.tracker
            e.target.addEventListener('animationend', function (){
                e.target.classList.remove('scaled')
            }, { once: true })
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
    },


}

</script>

<template>
<div :class="[style_theme]" class="button-container" id="button-container" @mousedown.self="click_animation">
    <div class="button-row-one">
        <div :class="[style_theme]" class="button-text large" @keydown="update_name">{{ tracker.name }}</div>
        
        <div class="active-container">
            <ToolsBooleanCheckMark class="check-box" :options="[false, true]" v-model="tracker.active" @update:modelValue="update_active"></ToolsBooleanCheckMark>
        </div>
    </div>

    <div :class="[style_theme]" class="button-text small" aria-autocomplete="none">{{ displayTrackerUrl }}</div>
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
    display: flex
    flex-direction: column

.button-row-one
    width: 100%
    display: flex
    justify-content: space-between
    user-select: none

@keyframes scale 
    50%
        scale: 0.95
    100%
        scale: 1

.button-container.scaled
    animation: scale 0.2s linear

.text-container
    display: flex
    flex-direction: column

.button-container::-webkit-scrollbar
    display: none

.button-text
    // all: unset
    font-family: 'Reem Kufi Fun', sans-serif
    overflow: hidden
    width: 100%

.button-text:focus
    outline: none

.button-text.large
    font-size: 20px
    height: 30px
    width: fit-content
    pointer-events: none

.button-text.small
    font-size: 12px
    width: fit-content
    user-select: none
    pointer-events: none

</style>

<style scoped src="@/assets/styles/themes/Dashboard/TrackerButton.sass" lang="sass"></style>