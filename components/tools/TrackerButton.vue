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
    methods:{
        test(e:any){
            console.log(e.target.value)
        }
    }


}

</script>

<template>
<div :class="[style_theme]" class="button-container">
    <textarea :class="[style_theme]" class="button-text large" contenteditable maxlength = "20" @keydown.enter="test" v-if="tracker.name.length < 17">{{ tracker.name }}</textarea>
    <textarea :class="[style_theme]" class="button-text large" contenteditable maxlength = "20" @keydown.enter="test" v-else>{{ tracker.name.substring(0,17) + "..." }}</textarea>
    <div :class="[style_theme]" class="button-text small" v-if="tracker.url.length < 20">{{ tracker.url }}</div>
    <div v-else :class="[style_theme]" class="button-text small">{{ tracker.url.substring(0,20) + "..." }}</div>
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