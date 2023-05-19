<template>
    <div class="window-container" :class="[style_theme]">
        <div class="login-window" :class="[style_theme]">
            
            <div class="login-text" @click="" :class="[style_theme]">
                Login
            </div>
            
            <input class="text-input" placeholder="Username/Email" v-model="username" :class="[style_theme]">
            <input class="text-input" placeholder="Password" v-model="password" :class="[style_theme]">
            
            <div class="click-button" @click="attemptLogin" :class="[style_theme]">
                Login
            </div>

            <a href="/signup" class="signup-text" :class="[style_theme]">Not yet a member? Signup Here</a>
        </div>
    </div>
</template>


<script lang="ts">



export default {
    data(){
        return {
            username:"",
            password:"",
            client: useSupabaseClient(),
            style_theme: useTheme()
        }
    },
    methods:{
        attemptLogin(){
            
            this.client.auth.signInWithPassword({'email':this.username, 'password':this.password}).then(async (response:any) => {
                
                if(response['error'] != null){
                    console.log(response['error'])
                    return 
                }
                window.location.href = '/dashboard'
            
            }).catch((error) => {
            
                console.log("SUPABASE IS DOWN SHIT IS OFFICALLY HITTING THE FAN")
            
            });
                
        }   
    },
    mounted(){
        var defualt_theme = localStorage.getItem('style_theme')
        this.style_theme = (defualt_theme == null ? 'dark-mode' : defualt_theme)
    }
}

</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap')
@import '@/assets/styles/public/colors.sass'

.window-container
    height: 100vh
    display: flex
    justify-content: center
    align-items: center

.window-container.dark-mode
    background-color: $grey-1

.window-container.light-mode
    background-color: $grey-8

.login-window
    display: flex
    flex-direction: column
    width: 25%
    max-width: 300px
    gap: 10px
    height: fit-content
    padding: 20px
    border-radius: 10px
    box-shadow: 0px 1px 33px 0px rgba(0,0,0,0.63)

.login-window.dark-mode
    background-color: $grey-2
    border: thin $grey-2 solid

.login-window.light-mode
    background-color: $grey-7

.login-text
    text-align: center
    padding: 10px
    font-family: 'Roboto', sans-serif
    user-select: none

.login-text.dark-mode
    color: #e6e6e6

.login-text.light-mode
    color: $black

.text-input
    outline: none
    border: none
    padding: 10px
    border-radius: 5px
    font-family: 'Roboto', sans-serif

.text-input.dark-mode
    background-color: $grey-3
    border: thin $grey-2 solid
    color: #F4EEE0

.text-input.light-mode
    background-color: $grey-6
.text-input.light-mode::placeholder
    color: $grey-4

.text-input:focus
    outline: thin solid $blue-2  

.signup-login-container
    display: flex
    justify-content: space-between
    padding-right: 10px
    padding-left: 10px
    padding-top: 5px

.click-button
    padding: 10px
    border-radius: 5px
    font-family: 'Roboto', sans-serif
    text-align: center
    width: 30%
    user-select: none
    transition: border-color 0.1s ease
    align-self: center
    margin-top: 10px

.click-button.dark-mode
    background-color: $grey-3
    color: #e6e6e6
    border: thin $grey-3 solid

.click-button.light-mode
    background-color: $grey-6
    border: thin $grey-6 solid

.click-button:hover
    border-color: $blue-2

.signup-text
    text-decoration: none
    font-family: 'Roboto', sans-serif
    font-size: 12px
    text-align: center
    padding-top: 20px

.signup-text.dark-mode
    color: #e6e6e6

.signup-text.light-mode
    color: $grey-1
</style>

