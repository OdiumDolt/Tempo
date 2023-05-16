<template>
    <div class="add-new-tracker-container">
        <div class="container-top">
            <div class="url-input-container">
                <input :placeholder="placeholderText" class="text-input">
            </div>
            <ToolsSlider class="slider" color="#1b4bcc" :style_theme="style_theme" v-model="interval"></ToolsSlider>
        </div>
        <div class="container-bottom">
            <ToolsButton :theme="'dark-cancel'" class="buttons" @click="$emit('closePopUp')">
                Cancel
            </ToolsButton>
            <ToolsButton :theme="'blue-select'" class="buttons" @click="validation = !validation">
                <div v-if="!validation">
                    Apply Tracker
                </div>
                <div v-else class="flashing-dots">
                    <div class="dot-flashing"></div>
                </div>
            </ToolsButton>
        </div>
    </div>
</template>

<script lang="ts">
export default{
    props:["style_theme"],
    
    data(){
        var interval = setInterval(async () => {this.iteratePlaceHolder()}, 1000)
        return {
            placeholderText: "",
            websites: list_of_websites,
            interval:100,
            validation:false,
            is_itterating:false,
            text_interval: interval
        }
    },

    methods:{
        async iterateStringWithDelay(str: string, delay: number): Promise<void> {
            for (const char of str) {
                this.placeholderText += char
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        },
        async removeStringWithDelay(str: string, delay: number): Promise<void> {
            for (let i = 0; i < str.length; i++) {
                this.placeholderText = this.placeholderText.slice(0, str.length - i - 1)
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        },
        async iteratePlaceHolder(){
            console.log('gaming')
            if (!this.is_itterating){
            
                this.is_itterating = true
                this.websites = this.shuffle(this.websites)
            
                for(let i = 0; i < this.websites.length; i++){
                    await this.iterateStringWithDelay(this.websites[i], 100)
            
                    await new Promise(resolve => setTimeout(resolve, 1000));
            
                    await this.removeStringWithDelay(this.websites[i], 100)
                }

                this.is_itterating = false
            
            }

        },

        // thanks stackoverflow
        shuffle(array:any){
            let currentIndex = array.length,  randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex != 0) {

                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }

            return array;
        },
        $destroy(){
            clearInterval(this.interval)
        }
    },
    mounted(){

    },
    watch:{
    }

}
</script>

<style scoped lang="sass">
@import '@/assets/styles/dark-mode-colors.sass'
@import '@/assets/styles/fonts.sass'
@import '@/assets/styles/animations.sass'

.add-new-tracker-container
    display: flex
    margin: auto
    width: 35%
    max-width: 500px
    border-radius: 5px
    flex-direction: column

.container-top
    background-color: $grey-1
    border: thin solid $grey-2
    height: 100%
    padding: 10px
    border-top-right-radius: 5px
    border-top-left-radius: 5px
    display: flex
    flex-direction: column
    gap: 20px

.container-bottom
    border: thin solid $grey-2
    border-bottom-left-radius: 5px
    border-bottom-right-radius: 5px
    border-top: none
    height: 60px
    background-color: $grey-1
    display: flex
    justify-content: right
    align-items: center
    padding-right: 10px
    gap:10px

.text-input
    background-color: $grey-1
    outline: none
    border: none
    padding: 10px
    border-radius: 5px
    color: #f5f5f5
    border: thin #4f4f4f solid
    font-family: 'Roboto', sans-serif 
    width: 100%
    box-sizing: border-box
    font-size: 15px

.text-input:focus
    outline: thin solid $blue-2  

.url-input-container
    width: 100%
    

.flashing-dots
    width: 45px
    align-items: center
    justify-content: center
    display: flex
    height: 15px


</style>
