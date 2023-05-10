<template>
    <div class="add-new-tracker-container">
        <div class="container-top">
            <div class="url-input-container">
                <input :placeholder="placeholderText" class="text-input">
            </div>
            <ToolsSlider lass="slider" color="#1b4bcc" :style_theme="style_theme"></ToolsSlider>
        </div>
        <div class="container-bottom">

        </div>
    </div>
</template>

<script lang="ts">
export default{
    props:["style_theme"],
    
    data(){
        var is_itterating = false
        let iterable = setInterval(async () => {
            
            if (!is_itterating){
            
                is_itterating = true
                this.list_of_websites = this.shuffle(this.list_of_websites)
            
                for(let i = 0; i < this.list_of_websites.length; i++){
                    await this.iterateStringWithDelay(this.list_of_websites[i], 100)
            
                    await new Promise(resolve => setTimeout(resolve, 1000));
            
                    await this.removeStringWithDelay(this.list_of_websites[i], 100)
                }

                is_itterating = false
            
            }

        }, 1000)

        return {
            placeholderText: "",
            iterable: iterable,
            list_of_websites:[
                "google.com", 
                "monkeytype.com", 
                "coolmathgames.com", 
                "github.com",
                "youtube.com",
                "reddit.com",
                "twitter.com",
                "instagram.com",
                "twitch.tv/hasanabi",
                "yahoo.ca",
                "github.com/OdiumDolt",
                "en.wikipedia.org",
                "nasa.gov",
                "npmjs.org",
                "pypi.org"
            ]
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
        }
    },
    mounted(){
        

    }

}
</script>

<style scoped lang="sass">
@import '@/assets/styles/colors.sass'
@import '@/assets/styles/fonts.sass'


.add-new-tracker-container
    display: flex
    margin: auto
    width: 35%
    max-width: 500px
    border-radius: 5px
    flex-direction: column

.container-top
    background-color: $grey
    border: thin solid $border-grey
    height: 100%
    padding: 10px
    border-top-right-radius: 5px
    border-top-left-radius: 5px
    display: flex
    flex-direction: column
    gap: 20px

.container-bottom
    border: thin solid $border-grey
    border-bottom-left-radius: 5px
    border-bottom-right-radius: 5px
    border-top: none
    height: 60px
    background-color: $grey

.text-input
    background-color: $grey
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
    outline: thin solid $outline-blue  

.url-input-container
    width: 100%
    
.slider
    width: 96%
    margin-right: auto
    margin-left: auto
</style>