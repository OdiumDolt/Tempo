<script lang="ts">
export default {
    
}
</script>

<template>
<div style="">
    <div class="ring-container">
        <div class="ring-center">
            <slot>
    
            </slot>
        </div>
    </div>
</div>
</template>


<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'

@keyframes breath 
    0%
        box-shadow: 0px 0px 20px 0px $blue-1

    50%
        box-shadow: 0px 0px 20px 10px $blue-1
    0%
        box-shadow: 0px 0px 20px 0px $blue-1

.ring-container
    width: 100%
    aspect-ratio: 1/1
    background-color: $blue-1
    border-radius: 100%
    animation: breath infinite 5s linear
    box-shadow: 0px 0px 20px 0px $blue-1
    position: relative
    display: flex
    align-items: center
    justify-content: center


.ring-center
    position: absolute
    background-color: $grey-1
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