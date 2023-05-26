<template>
    <input v-model="model_val" :class="[style_theme]" :placeholder="placeholder"/>
</template>

<script lang="ts">

export default {
    props:['modelValue', 'placeholder'],
    emits:['update:modelValue'],
    data(){
        return {
            model_val:this.modelValue,
            style_theme: useTheme()
        }
    },
    watch:{
        model_val(){
            this.$emit('update:modelValue', this.model_val)
        }
    }
}

</script>

<style lang="sass" scoped>
@import '@/assets/styles/public/colors.sass'
@import '@/assets/styles/public/fonts.sass'

input
    outline: none
    border: none
    padding: 10px
    border-radius: 5px
    width: 100%
    box-sizing: border-box
    font-family: 'Reem Kufi Fun', sans-serif
</style>

<style src="@/assets/styles/themes/tools/Input/Text.sass" lang="sass" scoped></style>