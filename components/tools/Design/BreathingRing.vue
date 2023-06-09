<script lang="ts">
export default {
    props:['color'],
    computed:{
        get_color(){
            return {
                'background-color': this.color,
                'box-shadow': "0px 0px 20px 0px " + this.color 
            }
        }
    },
    data(){
        return {
            style_theme: useTheme()
        }
    }
}
</script>

<template>
<div style="">
    <div class="ring-container" :style="get_color" :class="[style_theme]">
        <div class="ring-center" :class="[style_theme]">
            <slot>
    
            </slot>
        </div>
    </div>
</div>
</template>


<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'



.ring-container
    width: 100%
    aspect-ratio: 1/1
    border-radius: 100%
    animation: breath infinite 5s linear
    position: relative
    display: flex
    align-items: center
    justify-content: center


.ring-center
    position: absolute
    height: fit-content
    width: calc(100% -  20px)
    aspect-ratio: 1/1
    border-radius: 100%
    display: flex
    align-items: center
    justify-content: center
    padding: 10px
    box-sizing: border-box

</style>


<style scoped src="@/assets/styles/themes/tools/Design/BreathingRing.sass"></style>