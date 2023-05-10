<template>
<div>
    <div class="bar-container" id="bar-container">
        <div class="full-bar" :class="[style_theme]">

        </div>
    
        <div class="precent" :class="[style_theme]" :style="[precent, sliderColor]" >

        </div>
        <div class="node-spacer">
            <div class="node" id="node" :class="[style_theme]" :style="margin" v-on:mousedown="is_node_clicked = true">

            </div>
        </div>
    </div>
    <div class="number-spacers-container">
        <div v-for="num in list_o_numbers" class="number-spacers" :class="[style_theme]">
            {{ num }}
        </div>
    </div>
</div>
</template>

<script lang="ts">

export default {
    props:["slider_start", 'slider_end', 'color', "style_theme", "modelValue"],
    emits: ['update:modelValue'],
    data(){
        return {
            is_node_clicked: false,
            mouse_pos: 0,
            list_o_numbers:["001", "050", "100"],
            slider_precent: this.start_slider_precent
        }
    },
    methods:{
        is_node(e:any){
            this.is_node_clicked = false
        },
        mouse_move(e:any){
            if (this.is_node_clicked){
                var target = document.getElementById("bar-container")
                
                if (target != null){
                    var rect = target.getBoundingClientRect();
                    var x = e.clientX - rect.left; 
                    var y = e.clientY - rect.top;

                    if ((x/target.offsetWidth * 100) < 100 && (x/target.offsetWidth * 100) > 0){
                        
                        this.slider_precent = x/target.offsetWidth * 100
                    }
                    else if ((x/target.offsetWidth * 100) > 100){
                        this.slider_precent = 100
                    }
                    else if ((x/target.offsetWidth * 100) < 0){
                        this.slider_precent = 0
                    }
                    this.$emit("update:modelValue", this.slider_precent)
                }

            }
        
        },
        destroy(){
            // window.removeEventListener('mouseup', this.is_node, true)
            // window.removeEventListener('mousemove', this.mouse_move, true)
        }

    },
    mounted(){
        window.addEventListener('mouseup', this.is_node, false)
        window.addEventListener('mousemove', this.mouse_move, false)
    },
    computed: {
        precent(){
            return {
                'width': this.slider_precent + "%"
            }
        },
        margin(){
            return {
                'margin-left': this.slider_precent + "%"
            }
        },
        sliderColor(){
            return {
                'background-color':this.color
            }
        },
    },
}

</script>

<style scoped lang="sass">
@import '@/assets/styles/colors.sass'

.bar-container
    width: 100%
    height: 20px
    position: relative
    user-select: none

.full-bar
    user-select: none
    width: 100%
    position: absolute
    height: 5px
    border-radius: 10px
    margin: auto
    top: 50%
    transform: translateY(-50%)

.full-bar.light-mode
    background-color: #c9c9c9

.full-bar.dark-mode
    background-color: #2c2c2e

.precent
    border-radius: 5px
    height: 5px
    max-width: 100%
    position: absolute
    top: 50%
    transform: translateY(-50%)
.node-spacer
    position: absolute
    top: 50%
    transform: translateY(-50%)
    width: max-content
    width: calc( 100% - 10px )
    
.node
    background-color: white
    width: 10px
    height: 10px
    border-radius: 10px
    user-select: none

.node.light-mode
    border: thin solid $black

.number-spacers-container
    display: flex
    justify-content: space-between

.number-spacers.dark-mode
    color: white

.number-spacers
    font-family: "Roboto", sans-serif
    font-size: 0.8em
    user-select: none
    text-align: center


</style>