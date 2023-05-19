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
        <div v-for="(value, name, index) in iterables" class="number-spacers" :class="[style_theme]" :id="'iterable_' + value">
            {{ value }}
        </div>
    </div>
</div>
</template>

<script lang="ts">


interface pos_it {
    id: string
    value: number
}

export default {
    props:["slider_start", 'slider_end', 'color', "modelValue", "iterables"],
    emits: ['update:modelValue'],
    data(){
        
        return {
            is_node_clicked: false,
            slider_precent: this.modelValue,
            style_theme: useTheme(),
            iterable_pos: [] as pos_it[]
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

                    if (this.iterable_pos.length > 0){

                            let closest = this.iterable_pos.reduce(function(prev, curr) {
                                return (Math.abs(curr.value - e.clientX) < Math.abs(prev.value - e.clientX) ? curr : prev);
                            });
                            this.$emit("update:modelValue", closest.id)
                            let el = document.getElementById('iterable_' + closest.id)
                            if (el != null){
                                let offset = el.clientWidth/2 - 5
                                this.slider_precent = (closest.value - rect.left + offset) + "px"
                            }
                            else{
                                this.slider_precent = (closest.value - rect.left + 10) + "px"
                            }
                            
                    }
                    else if ((x/target.offsetWidth * 100) < 100 && (x/target.offsetWidth * 100) > 0){
                        this.$emit("update:modelValue", x/target.offsetWidth * 100)
                        this.slider_precent = x/target.offsetWidth * 100 + "%"
                    }
                    else if ((x/target.offsetWidth * 100) > 100){
                        this.$emit("update:modelValue", 100)
                        this.slider_precent = 100 + "%"
                    }
                    else if ((x/target.offsetWidth * 100) < 0){
                        this.$emit("update:modelValue", 0)
                        this.slider_precent = 0 + "%"
                    }

                }

            }
        
        },
        destroy(){

        }

    },
    mounted(){
        mouse_listeners.mouse_move["slider_move"] = this.mouse_move
        mouse_listeners.mouse_up["slider_click"] = this.is_node
        try{
            if (this.iterables.length){
                
                for(let id in this.iterables){
                    let el = document.getElementById("iterable_" + this.iterables[id])
                    if (el != null){
                        this.iterable_pos.push({
                            id:this.iterables[id],
                            value: el.offsetLeft
                        })
                    }
                }

                var target = document.getElementById("bar-container")
                if (target != null){
                    var rect = target.getBoundingClientRect();
                    this.slider_precent = (this.iterable_pos[0].value - rect.left + 8) + "px"
                    this.$emit('update:modelValue', this.iterable_pos[0].id)
                }
            }
        }
        catch{}

    },
    computed: {
        precent(){
            return {
                'width': this.slider_precent
            }
        },
        margin(){
            return {
                'margin-left': this.slider_precent
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
@import '@/assets/styles/public/colors.sass'

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

.number-spacers-container
    display: flex
    justify-content: space-between

.number-spacers
    font-family: "Roboto", sans-serif
    font-size: 0.8em
    user-select: none
    text-align: center
    width: 40px
</style>

<style scoped lang="sass" src="@/assets/styles/themes/tools/Slider.sass"></style>