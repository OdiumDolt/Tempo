<template>
    <div>
        <div class="blured-background-obstruction" v-on:mousedown.self="destroy">
            <slot></slot>
        </div>
        <div class="depth-checking">
        </div>
    </div>
</template>


<script lang="ts">
export default {
    methods:{
        destroy(){
            this.$emit('closePopUp')
        }
    }
}
</script>


<style lang="sass">

    
@keyframes slowBlur
    to
        background-color: rgb(22 22 22 / 75%)


.blured-background-obstruction
    animation: slowBlur 0.2s linear forwards
    display: flex
    align-content: center
    justify-content: center
    position: absolute
    width: 100%
    height: 100vh
    margin: 0
    top: 0px
    z-index: 10
</style>