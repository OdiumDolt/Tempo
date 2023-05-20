<template>
    <div class="add-new-tracker-container" :class="[style_theme]">
        
        <!-- Top Container for the window -->
        <div class="container-top" :class="[style_theme]">
            <ToolsInputField 
            
                v-model="url"
                :placeholder="placeholderText"
                class="search-input">
            </ToolsInputField>
            
            <ToolsSlider 
            
                class="slider" 
                color="#1b4bcc" 
                v-model="ping_interval"
                :iterables=slider_interables
                >
            
            </ToolsSlider>
        </div>
        
        <!-- Bottom window for the tracker container -->
        <div class="container-bottom" :class="[style_theme]">
            
            <ToolsButton :theme="'cancel'" class="buttons" @click="$emit('closePopUp')" :style_theme="style_theme">
                Cancel
            </ToolsButton>
            
            <ToolsButton :theme="'blue-select'" class="buttons" @click="addTracker">
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
import {v4 as uuidv4} from 'uuid';
export default{
    
    data(){
        var interval = setInterval(async () => {this.iteratePlaceHolder()}, 1000)
        
        return {
            placeholderText: "",
            slider_interables: ['30 s', '1 min', '5 min', '10 min', '30 min', '1 hr'],
            min_time: 30,
            max_time: 3600,
            websites: list_of_websites,
            ping_interval: '30s',
            validation:false,
            is_itterating:false,
            text_animation_interval: interval,
            url:"",
            style_theme: useTheme(),

            user: useSupabaseUser(),
            client: useSupabaseClient()
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

        async addTracker(){
            if (this.validation != true){
                this.validation = true
                await new Promise(resolve => setTimeout(resolve, 500));
                if (this.slider_interables.includes(this.ping_interval)){
                    var time = get_time_in_int(this.ping_interval)
                }
                else{
                    console.log('something has gone wrong')
                    return                
                }

                if (this.user != null){
                    var new_tracker: Tracker = {
                        url: this.url,
                        user_id: this.user.id,
                        active: true,
                        interval: time,
                        name: this.url,
                        id: uuidv4()
                    }
                    if (this.user != null){
                        add_tracker_user(this.user, this.client, new_tracker).then((res:any) => {
                            this.validation = false
                            this.$emit('closePopUp')
                        })
                    }  
                }
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
            clearInterval(this.text_animation_interval)
        }
    },
    mounted(){

    },
    watch:{

    }

}
</script>

<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'
@import '@/assets/styles/public/fonts.sass'
@import '@/assets/styles/public/animations.sass'

.add-new-tracker-container
    display: flex
    margin: auto
    width: 35%
    max-width: 500px
    border-radius: 5px
    flex-direction: column

.container-top
    height: 100%
    padding: 10px
    border-top-right-radius: 5px
    border-top-left-radius: 5px
    display: flex
    flex-direction: column
    gap: 20px

.container-bottom
    border-bottom-left-radius: 5px
    border-bottom-right-radius: 5px
    border-top: none
    height: 60px
    display: flex
    justify-content: right
    align-items: center
    padding-right: 10px
    gap: 10px

.flashing-dots
    width: 45px
    align-items: center
    justify-content: center
    display: flex
    height: 15px

.search-input:focus
    outline: thin solid $blue-2
    padding-right: 10px
</style>

<style src="@/assets/styles/themes/addTracker/Window.sass" lang="sass" scoped></style>
